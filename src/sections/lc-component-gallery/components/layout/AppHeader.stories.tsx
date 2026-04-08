import type { Meta, StoryObj } from '@storybook/react-vite'
import { AppHeader } from './AppHeader'

const meta = {
  title: 'Layout/AppHeader',
  component: AppHeader,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'withAI', 'authenticated', 'minimalAuth', 'fullSearch'],
      description: 'Header variant',
    },
    user: { control: 'object', description: 'User info (name, initials, role)' },
  },
} satisfies Meta<typeof AppHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'default' },
}

export const WithAI: Story = {
  args: { variant: 'withAI' },
}

export const Authenticated: Story = {
  args: { variant: 'authenticated' },
}

export const MinimalAuth: Story = {
  args: { variant: 'minimalAuth' },
}

export const FullSearch: Story = {
  args: { variant: 'fullSearch' },
}
