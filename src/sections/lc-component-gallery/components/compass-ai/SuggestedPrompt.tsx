/**
 * SuggestedPrompt
 *
 * Pill-shaped prompt chip used below the PromptInput.
 * From Figma Components: "Suggested Prompt".
 *
 * Custom LiquidCompass component — NOT shadcn.
 */

export interface SuggestedPromptProps {
  text: string
  onClick?: (text: string) => void
}

export function SuggestedPrompt({ text, onClick }: SuggestedPromptProps) {
  return (
    <button
      onClick={() => onClick?.(text)}
      className="px-3.5 py-1.5 text-sm text-[#4b5563] bg-white border border-[#e5e7eb] rounded-full hover:border-[#d1d5db] hover:bg-[#f9fafb] transition-all text-left"
    >
      {text}
    </button>
  )
}

/** Row of suggested prompts */
export function SuggestedPromptRow({
  prompts,
  onPromptClick,
}: {
  prompts: string[]
  onPromptClick?: (text: string) => void
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {prompts.map((text, i) => (
        <SuggestedPrompt key={i} text={text} onClick={onPromptClick} />
      ))}
    </div>
  )
}
