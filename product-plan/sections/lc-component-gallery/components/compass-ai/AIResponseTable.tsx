/**
 * AIResponseTable
 *
 * Data table rendered as an AI response after the user selects a workflow option.
 * Includes a breadcrumb trail, table title, and colored status/action cells.
 *
 * Three presets from Figma:
 *   - "Open Roles" — Job ID, Applicant Count, Days Open, Pipeline Health
 *   - "Applicant Quality & Readiness" — Name, Role, Stage, Availability, Blockers
 *   - "Re-engagement Opportunities" — Name, Source, Previous Role, Last Active, Suggested Next Action
 *
 * Custom LiquidCompass component — NOT shadcn.
 */

export interface AIResponseTableColumn {
  key: string
  label: string
  align?: 'left' | 'center' | 'right'
}

export interface AIResponseTableProps {
  breadcrumb: string[]
  title: string
  columns: AIResponseTableColumn[]
  rows: Record<string, React.ReactNode>[]
}

export function AIResponseTable({ breadcrumb, title, columns, rows }: AIResponseTableProps) {
  return (
    <div className="max-w-2xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-3">
        {breadcrumb.map((crumb, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-[#9ca3af]">&gt;</span>}
            <span className={i === breadcrumb.length - 1 ? 'font-semibold text-[#1e293b]' : 'text-[#6b7280]'}>
              {crumb}
            </span>
          </span>
        ))}
      </div>

      {/* Table card */}
      <div className="bg-white rounded-xl border border-[#e5e7eb] overflow-hidden">
        <div className="px-5 pt-4 pb-3">
          <h4 className="text-base font-semibold text-[#1e293b]">{title}</h4>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-t border-[#e5e7eb]">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`px-5 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-[#9ca3af] ${
                    col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t border-[#f3f4f6]">
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-5 py-3.5 ${
                      col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* ── Helper sub-components for colored cell values ── */

export function HealthBadge({ status }: { status: 'healthy' | 'low' | 'strong' }) {
  const colors = {
    healthy: 'text-[#059669]',
    low: 'text-[#dc2626]',
    strong: 'text-[#2876d3]',
  }
  return (
    <span className={`text-xs font-bold uppercase ${colors[status]}`}>
      {status}
    </span>
  )
}

export function StageBadge({ stage }: { stage: string }) {
  const colorMap: Record<string, string> = {
    new: 'bg-[#dbeafe] text-[#2876d3]',
    review: 'bg-[#fef3c7] text-[#d97706]',
    interviewing: 'bg-[#d1fae5] text-[#059669]',
  }
  const key = stage.toLowerCase()
  const cls = colorMap[key] || 'bg-[#f3f4f6] text-[#4b5563]'
  return (
    <span className={`px-2 py-0.5 rounded text-[11px] font-semibold uppercase ${cls}`}>
      {stage}
    </span>
  )
}

export function BlockerText({ text }: { text: string }) {
  if (text === 'None') return <span className="text-[#6b7280]">None</span>
  return <span className="text-[#dc2626] font-semibold">{text}</span>
}

export function ActionLink({ text }: { text: string }) {
  return <span className="text-[#2876d3] font-semibold cursor-pointer hover:underline">{text}</span>
}

export function JobIdLink({ id }: { id: string }) {
  return <span className="text-[#2876d3] font-medium cursor-pointer hover:underline">{id}</span>
}

export function AvatarInitials({ initials, color }: { initials: string; color: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0"
        style={{ backgroundColor: color }}
      >
        {initials}
      </div>
    </div>
  )
}
