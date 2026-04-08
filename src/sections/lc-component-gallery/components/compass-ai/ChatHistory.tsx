/**
 * ChatHistory (Side Panel)
 *
 * Left panel of the Compass AI page. Shows chat history with search,
 * product/time filters, and a list of past conversations.
 * From Figma: "History" panel with "New Chat" button.
 *
 * Custom LiquidCompass component — NOT shadcn.
 */
import { Plus, Search } from 'lucide-react'

export interface ChatHistoryItem {
  id: string
  title: string
  excerpt: string
  product: string
  productColor: string
  timestamp: string
}

export interface ChatHistoryProps {
  items: ChatHistoryItem[]
  activeItemId?: string
  onNewChat?: () => void
  onItemClick?: (item: ChatHistoryItem) => void
  onSearch?: (query: string) => void
}

export function ChatHistory({
  items,
  activeItemId,
  onNewChat,
  onItemClick,
}: ChatHistoryProps) {
  return (
    <div className="w-[300px] bg-white border-r border-[#e5e7eb] flex flex-col h-full shrink-0">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#e5e7eb]">
        <h2 className="text-lg font-semibold text-[#393839]">History</h2>
        <button
          onClick={onNewChat}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2876d3] text-white text-sm font-medium rounded-md hover:bg-[#1e63b5] transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Chat
        </button>
      </div>

      {/* Search */}
      <div className="px-4 py-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-3 pr-9 py-2 text-sm border border-[#e5e7eb] rounded-md focus:outline-none focus:border-[#2876d3]"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af]" />
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 pb-3 flex items-center gap-2">
        <select className="text-xs border border-[#e5e7eb] rounded px-2 py-1 text-[#6b7280]">
          <option>All Products</option>
          <option>FWP</option>
          <option>Talent</option>
          <option>MC</option>
        </select>
        <select className="text-xs border border-[#e5e7eb] rounded px-2 py-1 text-[#6b7280]">
          <option>All Time</option>
          <option>Today</option>
          <option>This Week</option>
        </select>
        <select className="text-xs border border-[#e5e7eb] rounded px-2 py-1 text-[#6b7280]">
          <option>All</option>
        </select>
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemClick?.(item)}
            className={`w-full text-left px-4 py-3 border-b border-[#f3f4f6] transition-colors ${
              activeItemId === item.id
                ? 'bg-[#eff6ff] border-l-2 border-l-[#2876d3]'
                : 'hover:bg-[#f8faff]'
            }`}
          >
            <h4 className="text-sm font-semibold text-[#393839] line-clamp-1">{item.title}</h4>
            <p className="text-xs text-[#6b7280] mt-0.5 line-clamp-2">{item.excerpt}</p>
            <div className="flex items-center justify-between mt-1.5">
              <span
                className="text-[10px] font-semibold px-1.5 py-0.5 rounded"
                style={{ backgroundColor: item.productColor + '20', color: item.productColor }}
              >
                {item.product}
              </span>
              <span className="text-[10px] text-[#9ca3af]">{item.timestamp}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
