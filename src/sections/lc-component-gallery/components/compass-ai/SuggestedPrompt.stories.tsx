import type { Meta, StoryObj } from '@storybook/react-vite'
import { SuggestedPromptRow } from './SuggestedPrompt'

const meta = {
  title: 'Compass AI/SuggestedPromptRow',
  component: SuggestedPromptRow,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ maxWidth: 700 }}><Story /></div>],
} satisfies Meta<typeof SuggestedPromptRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    prompts: [
      'Which orders are at risk of going unfilled this week?',
      'Show me orders with low submission volume',
      'Which specialties are hardest to fill right now?',
      'Suggest actions to improve fill rate for ICU nights',
    ],
  },
}
