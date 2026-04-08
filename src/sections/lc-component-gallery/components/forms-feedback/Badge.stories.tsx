import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge, Pill } from './Badge'

const badgeMeta = {
  title: 'Forms & Feedback/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info', 'purple', 'outline'],
    },
    dot: { control: 'boolean' },
  },
} satisfies Meta<typeof Badge>

export default badgeMeta
type Story = StoryObj<typeof badgeMeta>

export const Default: Story = { args: { children: 'Default', variant: 'default' } }
export const Success: Story = { args: { children: 'Active', variant: 'success', dot: true } }
export const Warning: Story = { args: { children: 'Pending Review', variant: 'warning', dot: true } }
export const Error: Story = { args: { children: 'Blocked', variant: 'error', dot: true } }
export const Info: Story = { args: { children: 'Applied', variant: 'info' } }
export const Purple: Story = { args: { children: 'New', variant: 'purple' } }
export const Outline: Story = { args: { children: 'Outline', variant: 'outline' } }

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="success" dot>Active</Badge>
      <Badge variant="warning" dot>Pending Review</Badge>
      <Badge variant="error" dot>Blocked</Badge>
      <Badge variant="info">Applied</Badge>
      <Badge variant="purple">New</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
}

export const ProductPills: Story = {
  name: 'Pill (Product Tags)',
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Pill color="#2876d3">FWP</Pill>
      <Pill color="#059669">Talent</Pill>
      <Pill color="#7c3aed">MC</Pill>
      <Pill color="#dc2626">Marketplace</Pill>
    </div>
  ),
}
