import type { Meta, StoryObj } from '@storybook/react-vite'
import { PageHeader } from './PageHeader'

const meta = {
  title: 'Layout/PageHeader',
  component: PageHeader,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { title: 'FWP - Job Orders' },
}

export const WithTabs: Story = {
  args: {
    title: 'FWP - Reports',
    tabs: [
      { id: 'util', label: 'Utilization', isActive: true },
      { id: 'workers', label: 'Workers' },
      { id: 'sources', label: 'Sources' },
      { id: 'ti', label: 'Timecards & Invoices' },
      { id: 'exports', label: 'Exports' },
    ],
  },
}
