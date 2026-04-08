/**
 * AIFollowUpPrompts
 *
 * Contextual follow-up prompt suggestions shown after an AI response table.
 * Labeled with a reference (e.g. "SUGGESTED PROMPTS FOR JOB 2345-6789").
 * Each prompt is a clickable pill.
 *
 * Custom LiquidCompass component — NOT shadcn.
 */

export interface AIFollowUpPromptsProps {
  label: string
  prompts: string[]
  onPromptClick?: (prompt: string) => void
}

export function AIFollowUpPrompts({ label, prompts, onPromptClick }: AIFollowUpPromptsProps) {
  return (
    <div className="max-w-lg space-y-3">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#9ca3af]">
        {label}
      </p>
      <div className="space-y-2">
        {prompts.map((prompt, i) => (
          <button
            key={i}
            onClick={() => onPromptClick?.(prompt)}
            className="block w-fit px-4 py-2 text-sm text-[#4b5563] bg-white border border-[#e5e7eb] rounded-full hover:border-[#2876d3]/30 hover:bg-[#f8faff] transition-all text-left"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  )
}
