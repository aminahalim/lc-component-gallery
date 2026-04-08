/**
 * PageHeader
 *
 * Sub-header below the AppHeader. White background, subtle bottom shadow.
 * Two variants from Figma:
 *   Default  — Page title + print icon
 *   WithTabs — Page title + tab row + print icon
 *
 * Custom LiquidCompass component — NOT shadcn.
 */
import { Printer } from 'lucide-react'

export interface PageTab {
  id: string
  label: string
  isActive?: boolean
}

export interface PageHeaderProps {
  title: string
  tabs?: PageTab[]
  onTabClick?: (tabId: string) => void
  onPrintClick?: () => void
  actions?: React.ReactNode
}

export function PageHeader({
  title,
  tabs,
  onTabClick,
  onPrintClick,
  actions,
}: PageHeaderProps) {
  return (
    <div className="bg-white flex items-center justify-between px-4 py-2 shadow-[0_4px_4px_0_rgba(48,49,51,0.05)] min-h-[50px]">
      <div className="flex items-end gap-12">
        <h1 className="text-[#393839] text-xl font-semibold leading-8 whitespace-nowrap">
          {title}
        </h1>

        {tabs && tabs.length > 0 && (
          <div className="flex items-start gap-9">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabClick?.(tab.id)}
                className="flex flex-col items-center gap-1"
              >
                <span
                  className={`text-[15px] whitespace-nowrap ${
                    tab.isActive
                      ? 'font-semibold text-[#393839]'
                      : 'font-medium text-[#58595b] hover:text-[#393839]'
                  }`}
                >
                  {tab.label}
                </span>
                <div
                  className={`h-1 w-full rounded-sm ${
                    tab.isActive ? 'bg-[#89d815]' : 'bg-transparent'
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        {actions}
        {onPrintClick && (
          <button
            onClick={onPrintClick}
            className="text-[#6b7280] hover:text-[#393839] transition-colors"
          >
            <Printer className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  )
}
