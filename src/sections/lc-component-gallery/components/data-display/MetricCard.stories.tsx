import type { Meta, StoryObj } from '@storybook/react-vite'
import { MetricCard } from './MetricCard'

const meta = {
  title: 'Data Display/MetricCard',
  component: MetricCard,
  tags: ['autodocs'],
} satisfies Meta<typeof MetricCard>

export default meta
type Story = StoryObj<typeof meta>

export const Interested: Story = {
  args: { icon: 'sparkles', iconColor: '#eab308', label: 'Interested', value: '6,248', subMetrics: [{ label: 'New', value: '5,238' }] },
}

export const Applied: Story = {
  args: { icon: 'sparkles', iconColor: '#3b82f6', label: 'Applied', value: '276', subMetrics: [{ label: 'New', value: '1,750' }] },
}

export const Hired: Story = {
  args: { icon: 'sparkles', iconColor: '#ef4444', label: 'Hired', value: '33', subMetrics: [{ label: 'Unique', value: '20' }] },
}

export const Declined: Story = {
  args: { icon: 'sparkles', iconColor: '#9ca3af', label: 'Declined', value: '7', subMetrics: [{ label: 'Unique', value: '4' }] },
}
