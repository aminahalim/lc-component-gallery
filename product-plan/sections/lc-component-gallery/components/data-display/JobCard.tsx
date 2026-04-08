/**
 * JobCard
 *
 * Job listing card used on the Talent Marketplace Jobs right panel.
 * Displays job title, facility, location, and metadata pills.
 *
 * Custom LiquidCompass component — NOT shadcn.
 */
import { Building2, MapPin } from 'lucide-react'

export interface JobCardProps {
  title: string
  facility: string
  location: string
  isNew?: boolean
  pills: string[]
  payRate?: string
  onBookmark?: () => void
  onClick?: () => void
}

export function JobCard({
  title,
  facility,
  location,
  isNew,
  pills,
  payRate,
  onClick,
}: JobCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white border border-[#e5e7eb] rounded-lg p-4 text-left hover:border-[#2876d3]/30 hover:shadow-sm transition-all"
    >
      {/* Title row */}
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-[#2876d3] text-sm font-semibold leading-snug flex-1">{title}</h4>
        <div className="flex items-center gap-2 shrink-0">
          {isNew && (
            <span className="text-[#2876d3] text-xs font-semibold">New</span>
          )}
        </div>
      </div>

      {/* Facility & Location */}
      <div className="mt-1 flex items-center gap-2 text-xs text-[#6b7280]">
        <span className="flex items-center gap-1"><Building2 className="w-3 h-3 text-[#9ca3af]" />{facility}</span>
        <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#ef4444]" />{location}</span>
      </div>

      {/* Pills */}
      <div className="mt-2 flex flex-wrap gap-1.5">
        {pills.map((pill, i) => (
          <span
            key={i}
            className="px-2 py-0.5 bg-[#f3f4f6] text-[#4b5563] text-[11px] font-medium rounded"
          >
            {pill}
          </span>
        ))}
        {payRate && (
          <span className="px-2 py-0.5 bg-[#ecfdf5] text-[#059669] text-[11px] font-semibold rounded">
            {payRate}
          </span>
        )}
      </div>
    </button>
  )
}
