/**
 * FilterBar
 *
 * Horizontal bar with filter button, count badge, tab toggles, and action buttons.
 * Used across Candidates, Job Orders, Staff Pool, Timecards, Invoices pages.
 *
 * Custom LiquidCompass component — NOT shadcn.
 */
import { SlidersHorizontal } from 'lucide-react'

export interface FilterTab {
  id: string
  label: string
  count?: number
  isActive?: boolean
}

export interface FilterBarAction {
  id: string
  label: string
  icon?: React.ReactNode
  onClick: () => void
}

export interface FilterBarProps {
  filterCount?: number
  tabs?: FilterTab[]
  actions?: FilterBarAction[]
  onFilterClick?: () => void
  onTabClick?: (tabId: string) => void
  resultCount?: string
}

export function FilterBar({
  filterCount = 1,
  tabs,
  actions,
  onFilterClick,
  onTabClick,
  resultCount,
}: FilterBarProps) {
  return (
    <div className="flex items-center gap-4 py-2 flex-wrap">
      {/* Filter button */}
      <button
        onClick={onFilterClick}
        className="flex items-center gap-2 px-3 py-1.5 border border-[#e5e7eb] rounded-md text-sm font-medium text-[#393839] hover:bg-[#f9fafb] transition-colors"
      >
        <SlidersHorizontal className="w-4 h-4" />
        Filters
        {filterCount > 0 && (
          <span className="text-xs bg-[#eff6ff] text-[#2876d3] font-semibold px-1.5 py-0.5 rounded">
            ({filterCount})
          </span>
        )}
      </button>

      {/* Tabs */}
      {tabs && tabs.length > 0 && (
        <div className="flex items-center gap-0.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabClick?.(tab.id)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                tab.isActive
                  ? 'bg-[#1e293b] text-white'
                  : 'text-[#393839] hover:bg-[#f3f4f6]'
              }`}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span className={`ml-1.5 text-xs ${tab.isActive ? 'text-white/70' : 'text-[#9ca3af]'}`}>
                  {tab.count.toLocaleString()}
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Result count */}
      {resultCount && (
        <span className="text-sm text-[#6b7280]">{resultCount}</span>
      )}

      {/* Action buttons */}
      {actions && actions.length > 0 && (
        <div className="flex items-center gap-2 ml-auto">
          {actions.map((action) => (
            <button
              key={action.id}
              onClick={action.onClick}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[#393839] hover:bg-[#f3f4f6] rounded-md transition-colors"
            >
              {action.icon}
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
