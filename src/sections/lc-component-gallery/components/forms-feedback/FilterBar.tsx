/**
 * FilterBar
 *
 * Horizontal bar with filter button (with count badge) and category labels with counts.
 * The category labels (e.g. "Jobs 20,000", "Applications 80,000") are static text, not toggles.
 * Used across Candidates, Job Orders, Staff Pool, Timecards, Invoices pages.
 *
 * Custom LiquidCompass component — NOT shadcn.
 */
import { SlidersHorizontal } from 'lucide-react'

export interface FilterCategory {
  id: string
  label: string
  count?: number
}

export interface FilterBarProps {
  filterCount?: number
  categories?: FilterCategory[]
  onFilterClick?: () => void
}

export function FilterBar({
  filterCount = 1,
  categories,
  onFilterClick,
}: FilterBarProps) {
  return (
    <div className="flex items-center gap-4 py-2">
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

      {/* Separator */}
      {categories && categories.length > 0 && (
        <div className="w-px h-5 bg-[#e5e7eb]" />
      )}

      {/* Category labels with counts */}
      {categories && categories.length > 0 && (
        <div className="flex items-center gap-4">
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center gap-2">
              <span className="text-sm font-semibold text-[#1e293b]">{cat.label}</span>
              {cat.count !== undefined && (
                <span className="text-xs text-[#9ca3af] font-medium">
                  {cat.count.toLocaleString()}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
