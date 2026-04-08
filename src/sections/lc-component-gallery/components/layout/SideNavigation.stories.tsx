import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { SideNavigation } from './SideNavigation'

const allProducts = [
  { id: 'compass-ai', label: 'Compass\nAI', icon: 'compass-ai' as const, subItems: [{ id: 'new', icon: 'pencil' }, { id: 'history', icon: 'history' }] },
  { id: 'home', label: 'Home', icon: 'home' as const },
  { id: 'talent', label: 'Talent', icon: 'talent' as const, subItems: [{ id: 'sp', icon: 'staff-pool' }, { id: 'jo', icon: 'job-orders' }, { id: 'rpt', icon: 'reports' }] },
  { id: 'fwp', label: 'FWP', icon: 'fwp' as const, subItems: [{ id: 'jo', icon: 'job-orders' }, { id: 'sp', icon: 'staff-pool' }, { id: 'tc', icon: 'timecards' }, { id: 'inv', icon: 'invoices' }, { id: 'rpt', icon: 'reports' }] },
  { id: 'mc', label: 'MC', icon: 'mc' as const },
  { id: 'messages', label: 'Messages', icon: 'messages' as const },
]

const meta = {
  title: 'Layout/SideNavigation',
  component: SideNavigation,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ height: 600 }}><Story /></div>],
  argTypes: {
    activeProductId: {
      control: 'select',
      options: ['compass-ai', 'home', 'talent', 'fwp', 'mc', 'messages'],
    },
  },
} satisfies Meta<typeof SideNavigation>

export default meta
type Story = StoryObj<typeof meta>

export const CompassAIActive: Story = {
  args: { products: allProducts, activeProductId: 'compass-ai' },
}

export const HomeActive: Story = {
  args: { products: allProducts, activeProductId: 'home' },
}

export const TalentActive: Story = {
  args: { products: allProducts, activeProductId: 'talent' },
}

export const FWPActive: Story = {
  args: { products: allProducts, activeProductId: 'fwp' },
}

export const MCActive: Story = {
  args: { products: allProducts, activeProductId: 'mc' },
}

export const MessagesActive: Story = {
  args: { products: allProducts, activeProductId: 'messages' },
}

/** Interactive demo — click products to switch active state */
export const Interactive: Story = {
  render: () => {
    const [active, setActive] = useState('compass-ai')
    return (
      <div style={{ height: 600 }}>
        <SideNavigation products={allProducts} activeProductId={active} onProductClick={setActive} />
      </div>
    )
  },
}
