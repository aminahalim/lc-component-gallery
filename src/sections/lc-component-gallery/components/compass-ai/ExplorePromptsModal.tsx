/**
 * ExplorePromptsModal
 *
 * Full-screen modal with categorized AI prompt suggestions.
 * From Figma screen: "Employer - Compass AI - Explore Prompts".
 * Categories: Hiring Performance, Talent Marketplace, FWP Optimization, Cost Insights.
 *
 * Custom LiquidCompass component — NOT shadcn.
 */
import { X } from 'lucide-react'
import { LCIcon, type LCIconName } from '../icons/LCIcon'

export interface PromptCategory {
  icon: LCIconName
  iconColor: string
  title: string
  prompts: string[]
}

export interface ExplorePromptsModalProps {
  open: boolean
  onClose: () => void
  categories: PromptCategory[]
  onPromptClick?: (prompt: string) => void
}

const defaultCategories: PromptCategory[] = [
  {
    icon: 'graph-growth',
    iconColor: '#059669',
    title: 'Hiring Performance & Fill Rates',
    prompts: [
      'Why are our open orders taking longer to fill?',
      'Which roles are currently at risk of not filling?',
      'How does our fill rate compare to market benchmarks?',
      'What changes would help improve submission volume?',
      'Show trends in time-to-fill by specialty',
    ],
  },
  {
    icon: 'talent',
    iconColor: '#7c3aed',
    title: 'Talent Marketplace Insights',
    prompts: [
      'Which specialties have the strongest candidate supply right now?',
      'Where are we losing candidates in the pipeline?',
      'Compare applicant volume across facilities',
      'Which job postings are underperforming?',
      'What regions show highest hiring competition?',
    ],
  },
  {
    icon: 'timecards',
    iconColor: '#059669',
    title: 'Flexible Workforce (FWP) Optimization',
    prompts: [
      'Show current utilization rate across facilities',
      'Which shifts are hardest to fill?',
    ],
  },
  {
    icon: 'invoices',
    iconColor: '#dc2626',
    title: 'Cost & Operational Insights',
    prompts: [
      'Analyze spend trends over the last 90 days',
      'Compare vendor performance by fill rate',
    ],
  },
]

export function ExplorePromptsModal({
  open,
  onClose,
  categories = defaultCategories,
  onPromptClick,
}: ExplorePromptsModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 max-h-[85vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#e5e7eb] px-8 py-6 flex items-start justify-between rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-[#393839]">Explore AI Capabilities</h2>
            <p className="text-sm text-[#6b7280] mt-1">
              Use Compass AI to analyze hiring performance, optimize fill rates, and improve workforce outcomes.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#9ca3af] hover:text-[#393839] transition-colors mt-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category grid */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="bg-[#f9fafb] rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <LCIcon name={cat.icon} size={20} style={{ color: cat.iconColor }} />
                <h3 className="text-[15px] font-semibold text-[#393839]">{cat.title}</h3>
              </div>
              <div className="space-y-2">
                {cat.prompts.map((prompt, j) => (
                  <button
                    key={j}
                    onClick={() => onPromptClick?.(prompt)}
                    className="w-full text-left px-3 py-2 text-sm text-[#4b5563] bg-white border border-[#e5e7eb] rounded-lg hover:border-[#d1d5db] hover:bg-[#f8faff] transition-all"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
