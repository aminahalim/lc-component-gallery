import type { Meta, StoryObj } from '@storybook/react-vite'
import { PromptInput } from './PromptInput'

const meta = {
  title: 'Compass AI/PromptInput',
  component: PromptInput,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ maxWidth: 600 }}><Story /></div>],
} satisfies Meta<typeof PromptInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const CustomPlaceholder: Story = {
  args: { placeholder: 'Ask a follow-up question...' },
}

export const Disabled: Story = {
  args: { disabled: true },
}
