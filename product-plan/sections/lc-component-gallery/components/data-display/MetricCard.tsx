/**
 * MetricCard
 *
 * Large numeric metric display with icon, label, and optional sub-values.
 * Used on the Jobs Metrics page with Interested/Applied/Hired/Declined counts.
 *
 * Custom LiquidCompass component — NOT shadcn.
 */
import { LCIcon, type LCIconName } from '../icons/LCIcon'

export interface MetricCardProps {
  icon: LCIconName
  iconColor?: string
  label: string
  value: string | number
  subMetrics?: { label: string; value: string | number }[]
  trend?: { value: string; direction: 'up' | 'down' }
  description?: string
}

export function MetricCard({
  icon,
  iconColor = '#6b7280',
  label,
  value,
  subMetrics,
  trend,
  description,
}: MetricCardProps) {
  return (
    <div className="flex-1 min-w-[140px]">
      {/* Icon + Label */}
      <div className="flex items-center gap-2 mb-2">
        <LCIcon name={icon} size={20} style={{ color: iconColor }} />
        <span className="text-[#58595b] text-sm font-medium">{label}</span>
      </div>

      {/* Divider */}
      <div className="border-t border-[#e5e7eb] my-2" />

      {/* Value */}
      <div className="flex items-baseline gap-3">
        <span className="text-[#393839] text-3xl font-bold tabular-nums">{value}</span>
        {subMetrics?.map((sub, i) => (
          <div key={i} className="flex items-baseline gap-1">
            <span className="text-[#9ca3af] text-xs">{sub.label}</span>
            <span className="text-[#6b7280] text-sm font-medium tabular-nums">{sub.value}</span>
          </div>
        ))}
      </div>

      {/* Optional trend */}
      {trend && (
        <div className="mt-1 flex items-center gap-1">
          <span className="text-xs text-[#9ca3af]">{description}</span>
          <span
            className={`text-xs font-medium ${
              trend.direction === 'down' ? 'text-green-600' : 'text-red-500'
            }`}
          >
            {trend.direction === 'down' ? '↓' : '↑'} {trend.value}
          </span>
        </div>
      )}
    </div>
  )
}
