import type { Meta, StoryObj } from '@storybook/react-vite'
import { LCIcon, type LCIconName } from './LCIcon'

const meta = {
  title: 'Icons/LCIcon',
  component: LCIcon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: [
        'compass-ai', 'home', 'talent', 'fwp', 'mc', 'messages',
        'job-orders', 'staff-pool', 'timecards', 'invoices', 'reports',
        'sparkles', 'cart-full', 'graph-growth', 'idea-search',
        'check-box', 'chevron-right-circle', 'settings', 'printer',
        'pencil', 'history', 'filter',
      ],
    },
    size: { control: { type: 'range', min: 16, max: 48, step: 2 } },
  },
} satisfies Meta<typeof LCIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { name: 'compass-ai', size: 24 },
}

export const AllIcons: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-6">
      {([
        'compass-ai', 'home', 'talent', 'fwp', 'mc', 'messages',
        'job-orders', 'staff-pool', 'timecards', 'invoices', 'reports',
        'sparkles', 'cart-full', 'graph-growth', 'idea-search',
        'check-box', 'chevron-right-circle', 'settings', 'printer',
        'pencil', 'history', 'filter',
      ] as LCIconName[]).map((name) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-lg bg-[#f3f4f6] flex items-center justify-center text-[#4b5563]">
            <LCIcon name={name} size={24} />
          </div>
          <span className="text-[11px] text-[#6b7280]">{name}</span>
        </div>
      ))}
    </div>
  ),
}
