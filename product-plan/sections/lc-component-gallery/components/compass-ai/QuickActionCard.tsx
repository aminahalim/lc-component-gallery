/**
 * QuickActionCard (Quick Action)
 *
 * Action card on the Compass AI Home page. Has a colored icon,
 * label text, and a chevron-right-circle.
 * From Figma Components: "Quick Action".
 *
 * Custom LiquidCompass component — NOT shadcn.
 */
import { ChevronRight } from 'lucide-react'
import { LCIcon, type LCIconName } from '../icons/LCIcon'

export interface QuickActionCardProps {
  icon: LCIconName
  iconBgColor: string
  iconColor: string
  label: string
  onClick?: () => void
}

export function QuickActionCard({
  icon,
  iconBgColor,
  iconColor,
  label,
  onClick,
}: QuickActionCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-3.5 bg-white border border-[#e5e7eb] rounded-xl hover:border-[#d1d5db] hover:shadow-sm transition-all group text-left w-full"
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
        style={{ backgroundColor: iconBgColor }}
      >
        <LCIcon name={icon} size={20} style={{ color: iconColor }} />
      </div>
      <span className="text-sm font-medium text-[#393839] flex-1">{label}</span>
      <ChevronRight className="w-5 h-5 text-[#d1d5db] group-hover:text-[#9ca3af] transition-colors shrink-0" />
    </button>
  )
}
