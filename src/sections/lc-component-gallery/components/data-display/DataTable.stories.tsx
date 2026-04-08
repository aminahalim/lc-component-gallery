import type { Meta, StoryObj } from '@storybook/react-vite'
import { DataTable, AvatarCell, StatusCell } from './DataTable'

const meta = {
  title: 'Data Display/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof DataTable>

export default meta
type Story = StoryObj<typeof meta>

const sampleColumns = [
  { key: 'candidate', label: 'Candidate', sortable: true, render: (_v: unknown, row: Record<string, unknown>) => <AvatarCell initials={row.initials as string} name={row.name as string} subtitle={row.location as string} color={row.color as string} /> },
  { key: 'title', label: 'Title | Location' },
  { key: 'source', label: 'Application Source' },
  { key: 'status', label: 'Status', render: (_v: unknown, row: Record<string, unknown>) => <StatusCell status={row.status as string} variant={row.statusVariant as 'success' | 'info'} /> },
  { key: 'applications', label: 'Total Applications' },
]

const sampleData = [
  { initials: 'WB', name: 'Woody Bennett', location: 'Houston, TX', color: '#ca8a04', title: 'Certified Medical Assistant', source: 'Indeed', status: 'Applied', statusVariant: 'info', applications: '2 Applications' },
  { initials: 'RB', name: 'Rose Browning', location: 'Dallas, TX', color: '#dc2626', title: 'Certified Medical Assistant', source: 'Indeed', status: 'Applied', statusVariant: 'info', applications: '2 Applications' },
  { initials: 'KB', name: 'Katarina Burgess', location: 'Boston, MA', color: '#7c3aed', title: 'Registered Nurse', source: 'ZipRecruiter', status: 'Applied', statusVariant: 'info', applications: '4 Applications' },
]

export const Default: Story = {
  args: { columns: sampleColumns, data: sampleData },
}

export const Selectable: Story = {
  args: { columns: sampleColumns, data: sampleData, selectable: true },
}

export const Empty: Story = {
  args: { columns: sampleColumns, data: [] },
}
