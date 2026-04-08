import type { Meta, StoryObj } from '@storybook/react-vite'
import { JobCard } from './JobCard'

const meta = {
  title: 'Data Display/JobCard',
  component: JobCard,
  tags: ['autodocs'],
} satisfies Meta<typeof JobCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'ER Travel Nurse - Emergency Room Registered Nurse',
    facility: 'Ascend Staffing',
    location: 'Dallas, TX',
    isNew: true,
    pills: ['Candidates (54)', 'Match (7)', 'Full Time', 'Agency', '13 Weeks', 'Cardiac ICU', 'Nights'],
    payRate: '$3,090 per week',
  },
}

export const NotNew: Story = {
  args: {
    title: 'ICU Registered Nurse - Night Shift',
    facility: 'Memorial Health System',
    location: 'Lebanon, NH',
    isNew: false,
    pills: ['Candidates (12)', 'Full Time', '3x12s', 'ICU', 'Nights'],
    payRate: '$2,850 per week',
  },
}
