import type { Meta, StoryObj } from '@storybook/react-vite'
import { LCLogo } from './LCLogo'

const meta = {
  title: 'Icons/LCLogo',
  component: LCLogo,
  tags: ['autodocs'],
} satisfies Meta<typeof LCLogo>

export default meta
type Story = StoryObj<typeof meta>

export const OnDarkBackground: Story = {
  decorators: [(Story) => (
    <div className="bg-[#011021] rounded-lg p-8 flex items-center justify-center">
      <Story />
    </div>
  )],
}

export const OnSlateBackground: Story = {
  decorators: [(Story) => (
    <div className="bg-[#1e293b] rounded-lg p-8 flex items-center justify-center">
      <Story />
    </div>
  )],
}
