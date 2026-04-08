/**
 * WidgetCard
 *
 * Dashboard card used on the Home page. Shows a product area header with icon,
 * and rows of linked metrics with counts. Seen in FWP, Talent Marketplace sections.
 *
 * Custom LiquidCompass component — NOT shadcn.
 */
import { LCIcon, type LCIconName } from '../icons/LCIcon'

export interface WidgetMetric {
  label: string
  value: number | string
  href?: string
}

export interface WidgetCardProps {
  icon: LCIconName
  title: string
  metrics: WidgetMetric[]
  onMetricClick?: (metric: WidgetMetric) => void
}

export function WidgetCard({ icon, title, metrics, onMetricClick }: WidgetCardProps) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-xl p-5 min-w-[220px] flex-1">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <LCIcon name={icon} size={20} className="text-[#4b5563]" />
        <h3 className="text-[#393839] text-base font-semibold">{title}</h3>
      </div>

      {/* Metric rows */}
      <div className="space-y-2">
        {metrics.map((metric, i) => (
          <div key={i} className="flex items-center justify-between">
            <button
              onClick={() => onMetricClick?.(metric)}
              className="text-[#2876d3] text-sm hover:underline text-left"
            >
              {metric.label}
            </button>
            <span className="text-[#393839] text-sm font-medium tabular-nums">
              {metric.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
