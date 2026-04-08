import type { Meta, StoryObj } from '@storybook/react-vite'
import { AIFollowUpPrompts } from './AIFollowUpPrompts'

const meta = {
  title: 'Compass AI/AIFollowUpPrompts',
  component: AIFollowUpPrompts,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ maxWidth: 600 }}><Story /></div>],
} satisfies Meta<typeof AIFollowUpPrompts>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Suggested prompts for Job 2345-6789',
    prompts: [
      'Analyze why Job 2345-6789 has low applicant volume',
      'Show me top 3 candidates for Job 2345-6789',
      'Suggest rate adjustments for Job 2345-6789 to improve health',
      'Generate outreach template for Job 2345-6789',
    ],
  },
}
