import type { Meta, StoryObj } from '@storybook/react-vite'
import { ConversationBubble } from './ConversationBubble'

const meta = {
  title: 'Compass AI/ConversationBubble',
  component: ConversationBubble,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ maxWidth: 600 }}><Story /></div>],
} satisfies Meta<typeof ConversationBubble>

export default meta
type Story = StoryObj<typeof meta>

export const UserMessage: Story = {
  args: { role: 'user', content: 'Find ICU RN jobs at Dartmouth Health.' },
}

export const AssistantMessage: Story = {
  args: {
    role: 'assistant',
    content: 'Got it! Here are some of the latest ICU RN openings at Dartmouth Health. I found 3 positions matching your criteria.',
  },
}

export const AssistantRichContent: Story = {
  args: {
    role: 'assistant',
    content: (
      <div>
        <p>Got it! Here are some openings:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Registered Nurse – ICU (Full Time, Nights)<br /><span className="text-xs text-[#6b7280]">Dartmouth Hitchcock — Lebanon, NH</span></li>
          <li>Critical Care RN – Float Pool (Days)<br /><span className="text-xs text-[#6b7280]">Dartmouth Hitchcock — Lebanon, NH</span></li>
        </ul>
      </div>
    ),
  },
}
