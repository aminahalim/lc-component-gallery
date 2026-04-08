/**
 * ConversationBubble
 *
 * Chat message bubble for Compass AI conversations.
 * Two roles: "user" (right-aligned, dark bg) and "assistant" (left-aligned, light bg).
 * From the Figma Components section: "Conversation Bubble".
 *
 * Custom LiquidCompass component — NOT shadcn.
 */

export interface ConversationBubbleProps {
  role: 'user' | 'assistant'
  content: string | React.ReactNode
  timestamp?: string
}

export function ConversationBubble({ role, content, timestamp }: ConversationBubbleProps) {
  const isUser = role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-[#1e293b] text-white rounded-br-md'
            : 'bg-[#f8faff] text-[#393839] border border-[#e5e7eb] rounded-bl-md'
        }`}
      >
        {typeof content === 'string' ? (
          <div className="text-sm leading-relaxed whitespace-pre-wrap">{content}</div>
        ) : (
          <div className="text-sm leading-relaxed">{content}</div>
        )}
        {timestamp && (
          <div
            className={`text-[10px] mt-1.5 ${
              isUser ? 'text-white/50' : 'text-[#9ca3af]'
            }`}
          >
            {timestamp}
          </div>
        )}
      </div>
    </div>
  )
}
