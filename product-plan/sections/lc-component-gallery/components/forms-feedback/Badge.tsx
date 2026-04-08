/**
 * Badge / Pill
 *
 * Status badges and category pills used across the product.
 * From Figma Components: "Badges" and "Pill".
 *
 * Uses: shadcn Badge as base with LC-specific variants.
 */

export type BadgeVariant =
  | 'default'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'purple'
  | 'outline'

export interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  size?: 'sm' | 'md'
  dot?: boolean
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[#f3f4f6] text-[#4b5563]',
  success: 'bg-[#ecfdf5] text-[#059669]',
  warning: 'bg-[#fefce8] text-[#ca8a04]',
  error: 'bg-[#fef2f2] text-[#dc2626]',
  info: 'bg-[#eff6ff] text-[#2876d3]',
  purple: 'bg-[#f3e8ff] text-[#7c3aed]',
  outline: 'bg-transparent border border-[#e5e7eb] text-[#4b5563]',
}

const dotColors: Record<BadgeVariant, string> = {
  default: 'bg-[#9ca3af]',
  success: 'bg-[#059669]',
  warning: 'bg-[#ca8a04]',
  error: 'bg-[#dc2626]',
  info: 'bg-[#2876d3]',
  purple: 'bg-[#7c3aed]',
  outline: 'bg-[#6b7280]',
}

export function Badge({ children, variant = 'default', size = 'sm', dot }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 font-medium rounded-full ${
        variantStyles[variant]
      } ${size === 'sm' ? 'text-[11px] px-2 py-0.5' : 'text-xs px-2.5 py-1'}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} />}
      {children}
    </span>
  )
}

/** Pill variant — more rounded, used for product labels */
export function Pill({
  children,
  color = '#2876d3',
}: {
  children: React.ReactNode
  color?: string
}) {
  return (
    <span
      className="inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded-md"
      style={{ backgroundColor: color + '18', color }}
    >
      {children}
    </span>
  )
}
