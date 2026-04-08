import type { Meta, StoryObj } from '@storybook/react-vite'
import { WidgetCard } from './WidgetCard'

const meta = {
  title: 'Data Display/WidgetCard',
  component: WidgetCard,
  tags: ['autodocs'],
} satisfies Meta<typeof WidgetCard>

export default meta
type Story = StoryObj<typeof meta>

export const JobOrders: Story = {
  args: {
    icon: 'job-orders',
    title: 'Job Orders',
    metrics: [
      { label: 'Order Approvals', value: 2 },
      { label: 'Submissions for Review', value: 12 },
      { label: 'Assignments Ending', value: 12 },
    ],
  },
}

export const StaffPool: Story = {
  args: {
    icon: 'staff-pool',
    title: 'Staff Pool',
    metrics: [
      { label: 'Agreements Pending', value: 3 },
      { label: 'Credential Steps Pending', value: 3 },
      { label: 'Expiring Documents', value: 0 },
    ],
  },
}

export const Timecards: Story = {
  args: {
    icon: 'timecards',
    title: 'Timecards',
    metrics: [
      { label: 'Time Approvals', value: 2 },
      { label: 'Time Segment Disputed', value: 1 },
    ],
  },
}

export const Invoices: Story = {
  args: {
    icon: 'invoices',
    title: 'Invoices',
    metrics: [
      { label: 'Invoice Approvals', value: 2 },
      { label: 'Invoice Pending Payment', value: 2 },
    ],
  },
}

export const Empty: Story = {
  args: {
    icon: 'job-orders',
    title: 'Job Orders',
    metrics: [],
  },
}
