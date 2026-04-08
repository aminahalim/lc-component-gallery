/**
 * SideNavigation (Side Nav)
 *
 * Vertical left sidebar. 64px wide, light background (#F8FAFF).
 * Active product gets a blue left border (#2876D3, 4px).
 * When a product is active, its sub-navigation items expand below.
 *
 * 6 variants from Figma: CompassAI, Home, Talent, FWP, MC, Messages.
 * Custom LiquidCompass component — NOT shadcn.
 */
import { LCIcon, type LCIconName } from '../icons/LCIcon'

export interface NavProduct {
  id: string
  label: string
  icon: LCIconName
  subItems?: { id: string; icon: LCIconName; label?: string }[]
}

export interface SideNavigationProps {
  products: NavProduct[]
  activeProductId: string
  onProductClick?: (productId: string) => void
  onSubItemClick?: (productId: string, subItemId: string) => void
}

const defaultProducts: NavProduct[] = [
  {
    id: 'compass-ai',
    label: 'Compass\nAI',
    icon: 'compass-ai',
    subItems: [
      { id: 'new-chat', icon: 'pencil' },
      { id: 'history', icon: 'history' },
    ],
  },
  { id: 'home', label: 'Home', icon: 'home' },
  {
    id: 'talent',
    label: 'Talent',
    icon: 'talent',
    subItems: [
      { id: 'candidates', icon: 'staff-pool' },
      { id: 'jobs', icon: 'job-orders' },
      { id: 'reports', icon: 'reports' },
    ],
  },
  {
    id: 'fwp',
    label: 'FWP',
    icon: 'fwp',
    subItems: [
      { id: 'job-orders', icon: 'job-orders' },
      { id: 'staff-pool', icon: 'staff-pool' },
      { id: 'timecards', icon: 'timecards' },
      { id: 'invoices', icon: 'invoices' },
      { id: 'reports', icon: 'reports' },
    ],
  },
  { id: 'mc', label: 'MC', icon: 'mc' },
  { id: 'messages', label: 'Messages', icon: 'messages' },
]

export function SideNavigation({
  products = defaultProducts,
  activeProductId = 'home',
  onProductClick,
  onSubItemClick,
}: SideNavigationProps) {
  return (
    <nav className="w-16 bg-[#f8faff] border-r border-[#e2e8f0] flex flex-col items-center py-4 gap-1 shrink-0 shadow-[0_4px_4px_0_#c8d0d8] overflow-y-auto">
      {products.map((product) => {
        const isActive = product.id === activeProductId
        return (
          <div key={product.id} className="w-full flex flex-col items-stretch">
            {/* Main product button */}
            <button
              onClick={() => onProductClick?.(product.id)}
              className={`flex flex-col items-center justify-center gap-2 py-3 px-2 transition-colors relative ${
                isActive
                  ? 'border-l-4 border-[#2876d3] pl-3'
                  : 'border-l-4 border-transparent pl-3'
              }`}
            >
              <LCIcon
                name={product.icon}
                size={24}
                className={isActive ? 'text-[#2876d3]' : 'text-[#6b7280]'}
              />
              <span
                className={`text-[11px] leading-tight text-center whitespace-pre-line ${
                  isActive ? 'text-[#2876d3] font-semibold' : 'text-[#393839] font-medium'
                }`}
              >
                {product.label}
              </span>
            </button>

            {/* Sub-navigation (visible when active) */}
            {isActive && product.subItems && (
              <div className="flex flex-col">
                {product.subItems.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => onSubItemClick?.(product.id, sub.id)}
                    className="h-11 flex items-center justify-center bg-[#e5ebf9] hover:bg-[#d5dff5] transition-colors"
                  >
                    <LCIcon name={sub.icon} size={20} className="text-[#4b5563]" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}
