import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChatHistory } from './ChatHistory'

const meta = {
  title: 'Compass AI/ChatHistory',
  component: ChatHistory,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ height: 500 }}><Story /></div>],
} satisfies Meta<typeof ChatHistory>

export default meta
type Story = StoryObj<typeof meta>

const sampleItems = [
  { id: '1', title: 'ICU night shift fill rate analysis', excerpt: 'Based on the data, ICU night shifts have a 68% fill rate...', product: 'MC', productColor: '#7c3aed', timestamp: '1 week ago' },
  { id: '2', title: 'Talent pipeline review for Q2', excerpt: 'Looking at the current pipeline, we have 234 active candidates...', product: 'FWP', productColor: '#2876d3', timestamp: '1 week ago' },
  { id: '3', title: 'Cost comparison across vendors', excerpt: 'Comparing the top 5 vendors by fill rate and cost...', product: 'Talent', productColor: '#059669', timestamp: '2 weeks ago' },
]

export const Default: Story = {
  args: { items: sampleItems, activeItemId: '1' },
}

export const NoActiveItem: Story = {
  args: { items: sampleItems },
}

export const Empty: Story = {
  args: { items: [] },
}
