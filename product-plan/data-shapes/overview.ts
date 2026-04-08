// =============================================================================
// LiquidCompass UI Data Shapes — Combined Reference
//
// These types define the data that UI components expect to receive as props.
// They are a frontend contract, not a database schema.
// =============================================================================

// ── Widget / Dashboard ──

export interface WidgetMetric {
  label: string
  value: number | string
  href?: string
}

export interface MetricData {
  label: string
  value: string | number
  change?: string
  trend?: 'up' | 'down' | 'flat'
}

// ── Data Table ──

export interface DataTableColumn<T = Record<string, unknown>> {
  key: string
  label: string
  sortable?: boolean
  width?: string
  render?: (value: unknown, row: T, index: number) => React.ReactNode
}

// ── Compass AI ──

export interface ConversationMessage {
  role: 'user' | 'ai'
  message: string
  children?: React.ReactNode // For rich AI responses (tables, workflow cards)
}

export interface WorkflowOption {
  id: string
  icon: string
  iconColor: string
  title: string
  description: string
}

export interface SuggestedPrompt {
  text: string
}

export interface PromptCategory {
  name: string
  prompts: string[]
}

// ── Job / Candidate ──

export interface JobCardData {
  id: string
  title: string
  location: string
  department: string
  type: string
  postedDate: string
  applicantCount: number
  status: 'active' | 'paused' | 'closed'
}

// ── Navigation ──

export interface NavProduct {
  id: string
  label: string
  icon: string // LCIconName
  subItems?: NavSubItem[]
}

export interface NavSubItem {
  id: string
  label: string
  icon?: string
}

// ── Filter ──

export interface FilterTab {
  label: string
  value: string
  count?: number
}

// ── Badge ──

export type BadgeVariant =
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'purple'
  | 'neutral'
  | 'outline'
