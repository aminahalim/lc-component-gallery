import type { Meta, StoryObj } from '@storybook/react-vite'
import { FilterBar } from './FilterBar'

const meta = {
  title: 'Forms & Feedback/FilterBar',
  component: FilterBar,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof FilterBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    filterCount: 1,
    categories: [
      { id: 'jobs', label: 'Jobs', count: 20000 },
      { id: 'apps', label: 'Applications', count: 80000 },
    ],
  },
}

export const NoFilters: Story = {
  args: {
    filterCount: 0,
    categories: [
      { id: 'jobs', label: 'Jobs', count: 20000 },
    ],
  },
}

export const MultipleFilters: Story = {
  args: {
    filterCount: 3,
    categories: [
      { id: 'jobs', label: 'Jobs', count: 1200 },
      { id: 'apps', label: 'Applications', count: 5400 },
      { id: 'candidates', label: 'Candidates', count: 890 },
    ],
  },
}
