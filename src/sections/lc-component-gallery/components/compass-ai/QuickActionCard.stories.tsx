import type { Meta, StoryObj } from '@storybook/react-vite'
import { QuickActionCard } from './QuickActionCard'

const meta = {
  title: 'Compass AI/QuickActionCard',
  component: QuickActionCard,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ maxWidth: 300 }}><Story /></div>],
} satisfies Meta<typeof QuickActionCard>

export default meta
type Story = StoryObj<typeof meta>

export const TalentPipeline: Story = {
  args: { icon: 'talent', iconBgColor: '#eef2ff', iconColor: '#4f46e5', label: 'Manage Talent Pipeline' },
}

export const FlexibleWork: Story = {
  args: { icon: 'fwp', iconBgColor: '#f0fdfa', iconColor: '#0d9488', label: 'Manage Flexible Work' },
}

export const MarketInsights: Story = {
  args: { icon: 'graph-growth', iconBgColor: '#ecfeff', iconColor: '#0891b2', label: 'Market & Spend Insights' },
}

export const AutomateTasks: Story = {
  args: { icon: 'check-box', iconBgColor: '#fefce8', iconColor: '#ca8a04', label: 'Automate Tasks' },
}
