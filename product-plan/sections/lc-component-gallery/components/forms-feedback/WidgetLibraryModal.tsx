/**
 * WidgetLibraryModal
 *
 * Modal for browsing and adding dashboard widgets.
 * From Figma: "WidgetLibraryModal" component.
 *
 * Features:
 *   - Section header with icon (e.g. "Analytics")
 *   - Product filter tabs (All / Talent Marketplace / FWP)
 *   - 2-column card grid with product badge, description truncation, and "Add Widget" CTA
 *   - Close button footer
 *
 * Custom LiquidCompass component — NOT shadcn.
 */
import { X, Plus, BarChart2 } from 'lucide-react'
import { useState } from 'react'

export interface WidgetDefinition {
  id: string
  title: string
  description: string
  product: string
  productColor: string
}

export interface WidgetLibraryModalProps {
  open: boolean
  onClose: () => void
  widgets: WidgetDefinition[]
  onAddWidget?: (widget: WidgetDefinition) => void
  productFilter?: string
  onProductFilterChange?: (product: string) => void
}

const defaultWidgets: WidgetDefinition[] = [
  { id: 'order-analytics', title: 'Order Analytics', description: 'Visual overview of job orders with trends, status distribution, and key performance metrics to track order progression.', product: 'FWP', productColor: '#2876d3' },
  { id: 'cost-summary', title: 'Cost Summary', description: 'Visual overview of client spend on vendors, categorized by Job Title, Location, Service Line, and Region for detailed cost analysis.', product: 'FWP', productColor: '#2876d3' },
  { id: 'source-summary', title: 'Source Summary', description: 'Vendor performance metrics including submissions, conversions, time-to-hire, and retention rates to evaluate sourcing effectiveness.', product: 'FWP', productColor: '#2876d3' },
  { id: 'time-analytics', title: 'Time Analytics', description: 'Staff utilization and productivity metrics with cost implications for shifts and assignments across different healthcare facilities.', product: 'FWP', productColor: '#2876d3' },
  { id: 'applicant-pipeline', title: 'Applicant Pipeline Overview', description: 'Comprehensive view of your recruitment funnel, tracking applicants from submission to hire with conversion rates.', product: 'Marketplace', productColor: '#059669' },
  { id: 'open-roles', title: 'Open Roles Summary', description: 'Real-time tracking of active job postings, application volumes, and vacancy aging across the marketplace.', product: 'Marketplace', productColor: '#059669' },
]

function WidgetCard({ widget, onAdd }: { widget: WidgetDefinition; onAdd?: () => void }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = widget.description.length > 100

  return (
    <div className="border border-[#e5e7eb] rounded-xl p-5 flex flex-col">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-[15px] font-bold text-[#1e293b]">{widget.title}</h3>
        <span
          className="text-[10px] font-bold px-2 py-0.5 rounded shrink-0 uppercase"
          style={{ backgroundColor: widget.productColor + '18', color: widget.productColor }}
        >
          {widget.product}
        </span>
      </div>
      <p className="text-xs text-[#6b7280] leading-relaxed flex-1">
        {expanded || !isLong ? widget.description : widget.description.slice(0, 100)}
        {isLong && !expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="inline-flex items-center ml-1 text-[#6b7280] hover:text-[#1e293b]"
          >
            <span className="text-sm leading-none">...</span>
            <span className="text-[11px] ml-0.5 underline">Show more</span>
          </button>
        )}
      </p>
      <button
        onClick={onAdd}
        className="mt-4 flex items-center justify-center gap-1.5 w-full py-2.5 bg-[#2876d3] text-white text-sm font-semibold rounded-xl hover:bg-[#1e63b5] transition-colors"
      >
        <Plus className="w-4 h-4" />
        Add Widget
      </button>
    </div>
  )
}

export function WidgetLibraryModal({
  open,
  onClose,
  widgets = defaultWidgets,
  onAddWidget,
  productFilter: controlledFilter,
  onProductFilterChange,
}: WidgetLibraryModalProps) {
  const [internalFilter, setInternalFilter] = useState('All')
  const activeFilter = controlledFilter ?? internalFilter

  const setFilter = (p: string) => {
    onProductFilterChange?.(p)
    setInternalFilter(p)
  }

  if (!open) return null

  const filteredWidgets =
    activeFilter === 'All'
      ? widgets
      : widgets.filter((w) => w.product === activeFilter)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[85vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-[#e5e7eb]">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#1e293b]">Widget Library</h2>
              <p className="text-sm text-[#6b7280] mt-1">
                Choose widgets to customize your dashboard experience
              </p>
            </div>
            <button onClick={onClose} className="text-[#9ca3af] hover:text-[#1e293b] transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Product filter */}
          <div className="flex items-center gap-3 mt-4">
            <span className="text-[10px] font-bold text-[#6b7280] uppercase tracking-wider">Product Filter:</span>
            {['All', 'Talent Marketplace', 'FWP'].map((p) => (
              <button
                key={p}
                onClick={() => setFilter(p)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                  activeFilter === p
                    ? 'bg-[#1e293b] text-white border-[#1e293b]'
                    : 'text-[#4b5563] border-[#e5e7eb] hover:bg-[#f3f4f6]'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Widget grid */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-[#eef2ff] flex items-center justify-center">
              <BarChart2 className="w-5 h-5 text-[#4f46e5]" />
            </div>
            <h3 className="text-lg font-bold text-[#1e293b]">Analytics</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredWidgets.map((widget) => (
              <WidgetCard
                key={widget.id}
                widget={widget}
                onAdd={() => onAddWidget?.(widget)}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#e5e7eb] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-[#4b5563] border border-[#e5e7eb] rounded-lg hover:bg-[#f3f4f6] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
