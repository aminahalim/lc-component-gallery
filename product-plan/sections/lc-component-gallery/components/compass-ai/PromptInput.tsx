/**
 * PromptInput
 *
 * AI chat input used on the Compass AI page and the Home landing page.
 * Rounded container with indigo/purple border accent, textarea,
 * Attach button, Explore Prompts button, and Send icon.
 *
 * Custom LiquidCompass component — NOT shadcn.
 */
import { Paperclip, Compass, Send } from 'lucide-react'
import { useState } from 'react'

export interface PromptInputProps {
  placeholder?: string
  onSend?: (message: string) => void
  onAttach?: () => void
  onExplorePrompts?: () => void
  disabled?: boolean
}

export function PromptInput({
  placeholder = 'Ask Compass AI about orders, candidates, costs, or reporting...',
  onSend,
  onAttach,
  onExplorePrompts,
  disabled,
}: PromptInputProps) {
  const [value, setValue] = useState('')

  const handleSend = () => {
    if (value.trim() && !disabled) {
      onSend?.(value.trim())
      setValue('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="border border-[#c7d2fe] dark:border-[#4338ca]/40 rounded-2xl bg-white dark:bg-[#1e293b] shadow-sm overflow-hidden">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        rows={2}
        className="w-full px-5 pt-4 pb-2 text-sm text-[#393839] dark:text-stone-200 placeholder:text-[#9ca3af] bg-transparent resize-none focus:outline-none disabled:opacity-50"
      />
      <div className="flex items-center justify-between px-4 pb-3">
        <div className="flex items-center gap-4">
          <button
            onClick={onAttach}
            disabled={disabled}
            className="flex items-center gap-1.5 text-[#6b7280] hover:text-[#393839] text-sm transition-colors disabled:opacity-50"
          >
            <Paperclip className="w-4 h-4" strokeWidth={1.5} />
            Attach
          </button>
          <button
            onClick={onExplorePrompts}
            disabled={disabled}
            className="flex items-center gap-1.5 text-[#6b7280] hover:text-[#393839] text-sm transition-colors disabled:opacity-50"
          >
            <Compass className="w-4 h-4" strokeWidth={1.5} />
            Explore Prompts
          </button>
        </div>
        <button
          onClick={handleSend}
          disabled={!value.trim() || disabled}
          className="p-1.5 rounded-lg text-[#9ca3af] hover:text-[#7c3aed] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <Send className="w-[18px] h-[18px]" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}
