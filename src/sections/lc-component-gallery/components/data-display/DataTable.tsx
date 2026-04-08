/**
 * DataTable
 *
 * Reusable data table used across multiple screens:
 * Candidates, Timecards, Invoices, Staff Pool, Job Orders.
 *
 * Supports sortable columns, avatar cells, status badges, and action columns.
 * Wraps shadcn Table with LiquidCompass-specific styling.
 *
 * Uses: shadcn Table (structure), custom styling for LC-specific patterns.
 */

export interface DataTableColumn<T = Record<string, unknown>> {
  key: string
  label: string
  sortable?: boolean
  width?: string
  render?: (value: unknown, row: T, index: number) => React.ReactNode
}

export interface DataTableProps<T = Record<string, unknown>> {
  columns: DataTableColumn<T>[]
  data: T[]
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
  onSort?: (key: string) => void
  onRowClick?: (row: T, index: number) => void
  selectable?: boolean
  selectedRows?: Set<number>
  onSelectRow?: (index: number) => void
  onSelectAll?: () => void
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  sortKey,
  sortDirection = 'asc',
  onSort,
  onRowClick,
  selectable,
  selectedRows = new Set(),
  onSelectRow,
  onSelectAll,
}: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-[#e5e7eb]">
            {selectable && (
              <th className="w-10 px-3 py-3">
                <input
                  type="checkbox"
                  checked={selectedRows.size === data.length && data.length > 0}
                  onChange={() => onSelectAll?.()}
                  readOnly={!onSelectAll}
                  className="rounded border-[#d1d5db]"
                />
              </th>
            )}
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-3 py-3 text-left text-xs font-semibold text-[#6b7280] uppercase tracking-wider"
                style={col.width ? { width: col.width } : undefined}
              >
                {col.sortable ? (
                  <button
                    onClick={() => onSort?.(col.key)}
                    className="flex items-center gap-1 hover:text-[#393839] transition-colors"
                  >
                    {col.label}
                    {sortKey === col.key && (
                      <span className="text-[10px]">
                        {sortDirection === 'asc' ? '▲' : '▼'}
                      </span>
                    )}
                    {sortKey !== col.key && (
                      <span className="text-[10px] opacity-30">▼</span>
                    )}
                  </button>
                ) : (
                  col.label
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => onRowClick?.(row, rowIndex)}
              className={`border-b border-[#f3f4f6] transition-colors ${
                onRowClick ? 'cursor-pointer hover:bg-[#f8faff]' : ''
              } ${selectedRows.has(rowIndex) ? 'bg-[#eff6ff]' : ''}`}
            >
              {selectable && (
                <td className="px-3 py-4">
                  <input
                    type="checkbox"
                    checked={selectedRows.has(rowIndex)}
                    onChange={(e) => {
                      e.stopPropagation()
                      onSelectRow?.(rowIndex)
                    }}
                    readOnly={!onSelectRow}
                    className="rounded border-[#d1d5db]"
                  />
                </td>
              )}
              {columns.map((col) => (
                <td key={col.key} className="px-3 py-4 text-sm text-[#393839]">
                  {col.render
                    ? col.render(row[col.key], row, rowIndex)
                    : String(row[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** Helper component: Avatar + Name cell (used across Candidates, Staff Pool, Timecards) */
export function AvatarCell({
  initials,
  name,
  subtitle,
  color = '#4b5563',
}: {
  initials: string
  name: string
  subtitle?: string
  color?: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0"
        style={{ backgroundColor: color }}
      >
        {initials}
      </div>
      <div>
        <div className="font-medium text-[#393839]">{name}</div>
        {subtitle && (
          <div className="text-xs text-[#2876d3]">{subtitle}</div>
        )}
      </div>
    </div>
  )
}

/** Helper component: Status badge cell */
export function StatusCell({
  status,
  variant = 'default',
}: {
  status: string
  variant?: 'success' | 'warning' | 'error' | 'info' | 'default'
}) {
  const colors = {
    success: 'text-green-600',
    warning: 'text-amber-600',
    error: 'text-red-600',
    info: 'text-blue-600',
    default: 'text-[#6b7280]',
  }
  const dots = {
    success: 'bg-green-500',
    warning: 'bg-amber-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    default: 'bg-gray-400',
  }

  return (
    <div className="flex items-center gap-1.5">
      <div className={`w-2 h-2 rounded-full ${dots[variant]}`} />
      <span className={`text-sm ${colors[variant]}`}>{status}</span>
    </div>
  )
}
