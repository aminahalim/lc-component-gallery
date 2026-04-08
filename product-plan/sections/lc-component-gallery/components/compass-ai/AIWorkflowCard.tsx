/**
 * AIWorkflowCard
 *
 * Shown as an AI response after a user selects a quick action (e.g. "Manage Talent Pipeline").
 * Presents 2–4 workflow options the user can drill into. Each option has a colored icon,
 * title, description, and chevron.
 *
 * Custom LiquidCompass component — NOT shadcn.
 */
import { ChevronRight, FileText, Users, UserCheck } from 'lucide-react'
import type { ComponentType } from 'react'

export interface WorkflowOption {
  id: string
  icon: string
  iconColor: string
  title: string
  description: string
}

export interface AIWorkflowCardProps {
  heading: string
  subheading: string
  options: WorkflowOption[]
  onOptionClick?: (option: WorkflowOption) => void
}

const iconMap: Record<string, ComponentType<{ className?: string; strokeWidth?: number }>> = {
  'file-text': FileText,
  users: Users,
  'user-check': UserCheck,
}

const defaultOptions: WorkflowOption[] = [
  {
    id: 'open-roles',
    icon: 'file-text',
    iconColor: '#7c3aed',
    title: 'Open Roles',
    description: 'Review applicant volume and pipeline health for all active job orders.',
  },
  {
    id: 'quality',
    icon: 'users',
    iconColor: '#2876d3',
    title: 'Applicant Quality & Readiness',
    description: 'Analyze candidate qualifications, compliance status, and risk flags.',
  },
  {
    id: 're-engagement',
    icon: 'user-check',
    iconColor: '#059669',
    title: 'Re-engagement Opportunities',
    description: 'Identify high-quality past candidates for current and future roles.',
  },
]

export function AIWorkflowCard({
  heading = 'What would you like to review?',
  subheading = 'Select an area to generate a structured pipeline analysis.',
  options = defaultOptions,
  onOptionClick,
}: AIWorkflowCardProps) {
  return (
    <div className="bg-[#f8faff] rounded-2xl overflow-hidden max-w-lg">
      {/* Header */}
      <div className="px-6 pt-5 pb-3">
        <h3 className="text-lg font-bold text-[#1e293b]">{heading}</h3>
        <p className="text-sm text-[#6b7280] mt-0.5">{subheading}</p>
      </div>

      {/* Options */}
      <div className="px-4 pb-4 space-y-2">
        {options.map((option) => {
          const Icon = iconMap[option.icon] || FileText
          return (
            <button
              key={option.id}
              onClick={() => onOptionClick?.(option)}
              className="w-full flex items-center gap-4 px-4 py-4 bg-white rounded-xl border border-[#e5e7eb] hover:border-[#2876d3]/30 hover:shadow-sm transition-all text-left group"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${option.iconColor}15` }}
              >
                <Icon className={`w-5 h-5`} strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#1e293b]">{option.title}</p>
                <p className="text-xs text-[#6b7280] mt-0.5 leading-relaxed">{option.description}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-[#9ca3af] group-hover:text-[#6b7280] shrink-0" />
            </button>
          )
        })}
      </div>
    </div>
  )
}
