import type { Meta, StoryObj } from '@storybook/react-vite'
import { AIWorkflowCard } from './AIWorkflowCard'

const meta = {
  title: 'Compass AI/AIWorkflowCard',
  component: AIWorkflowCard,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ maxWidth: 500 }}><Story /></div>],
} satisfies Meta<typeof AIWorkflowCard>

export default meta
type Story = StoryObj<typeof meta>

export const TalentPipeline: Story = {
  args: {
    heading: 'What would you like to review?',
    subheading: 'Select an area to generate a structured pipeline analysis.',
    options: [
      { id: 'open-roles', icon: 'file-text', iconColor: '#7c3aed', title: 'Open Roles', description: 'Review applicant volume and pipeline health for all active job orders.' },
      { id: 'quality', icon: 'users', iconColor: '#2876d3', title: 'Applicant Quality & Readiness', description: 'Analyze candidate qualifications, compliance status, and risk flags.' },
      { id: 're-engagement', icon: 'user-check', iconColor: '#059669', title: 'Re-engagement Opportunities', description: 'Identify high-quality past candidates for current and future roles.' },
    ],
  },
}
