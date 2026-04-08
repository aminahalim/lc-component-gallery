import type { Meta, StoryObj } from '@storybook/react-vite'
import { PromptInput } from '../components/compass-ai/PromptInput'

const meta = {
  title: 'States & Behavior/Interaction States',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj

export const ButtonStates: Story = {
  name: 'Button States',
  render: () => (
    <div className="p-8 space-y-6">
      <h2 className="text-xl font-bold text-[#393839]">Interaction States</h2>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">Primary Button</p>
        <div className="flex gap-4 items-center">
          <button className="px-5 py-2.5 bg-[#2876d3] text-white text-sm font-medium rounded-lg">Default</button>
          <button className="px-5 py-2.5 bg-[#1e63b5] text-white text-sm font-medium rounded-lg ring-2 ring-offset-2 ring-[#2876d3]">Focus</button>
          <button className="px-5 py-2.5 bg-[#1a5299] text-white text-sm font-medium rounded-lg">Hover</button>
          <button className="px-5 py-2.5 bg-[#174a8a] text-white text-sm font-medium rounded-lg scale-[0.98]">Active</button>
          <button className="px-5 py-2.5 bg-[#2876d3] text-white text-sm font-medium rounded-lg opacity-40 cursor-not-allowed" disabled>Disabled</button>
        </div>
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">Ghost Button</p>
        <div className="flex gap-4 items-center">
          <button className="px-5 py-2.5 text-[#2876d3] text-sm font-medium rounded-lg border border-[#e5e7eb]">Default</button>
          <button className="px-5 py-2.5 text-[#2876d3] text-sm font-medium rounded-lg border border-[#2876d3] ring-2 ring-offset-2 ring-[#2876d3]">Focus</button>
          <button className="px-5 py-2.5 text-[#2876d3] text-sm font-medium rounded-lg border border-[#d1d5db] bg-[#f8faff]">Hover</button>
          <button className="px-5 py-2.5 text-[#9ca3af] text-sm font-medium rounded-lg border border-[#e5e7eb] cursor-not-allowed" disabled>Disabled</button>
        </div>
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">Compass AI Button</p>
        <div className="flex gap-4 items-center">
          <button className="px-5 py-2 rounded-3xl text-white text-sm font-medium" style={{ backgroundImage: 'linear-gradient(93.61deg, #7A40F2 -46.22%, #9CB3FF 144.8%)' }}>Default</button>
          <button className="px-5 py-2 rounded-3xl text-white text-sm font-medium ring-2 ring-offset-2 ring-[#7a40f2]" style={{ backgroundImage: 'linear-gradient(93.61deg, #7A40F2 -46.22%, #9CB3FF 144.8%)' }}>Focus</button>
          <button className="px-5 py-2 rounded-3xl text-white/50 text-sm font-medium cursor-not-allowed" style={{ backgroundImage: 'linear-gradient(93.61deg, #7A40F2 -46.22%, #9CB3FF 144.8%)', opacity: 0.4 }}>Disabled</button>
        </div>
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">Nav Item States</p>
        <div className="w-[180px] bg-[#f8faff] border border-[#e2e8f0] rounded-lg overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 text-sm text-[#4b5563]"><div className="w-5 h-5 rounded bg-[#d1d5db]/40" /><span>Default</span></div>
          <div className="flex items-center gap-3 px-4 py-3 text-sm text-[#4b5563] bg-[#eef2f8]"><div className="w-5 h-5 rounded bg-[#d1d5db]/40" /><span>Hover</span></div>
          <div className="flex items-center gap-3 px-4 py-3 text-sm text-[#2876d3] font-semibold border-l-[3px] border-l-[#2876d3]"><div className="w-5 h-5 rounded bg-[#2876d3]/20" /><span>Active</span></div>
          <div className="flex items-center gap-3 px-4 py-3 text-sm text-[#4b5563] ring-2 ring-inset ring-[#2876d3]"><div className="w-5 h-5 rounded bg-[#d1d5db]/40" /><span>Focus</span></div>
        </div>
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">PromptInput</p>
        <div className="grid grid-cols-2 gap-4 max-w-2xl">
          <div><span className="text-[10px] text-[#9ca3af] block mb-1">Default</span><PromptInput placeholder="Ask Compass AI..." /></div>
          <div><span className="text-[10px] text-[#9ca3af] block mb-1">Disabled</span><PromptInput placeholder="Ask Compass AI..." disabled /></div>
        </div>
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">Table Row States</p>
        <table className="w-full border-collapse max-w-lg">
          <thead>
            <tr className="border-b border-[#e5e7eb]">
              <th className="px-3 py-2 text-left text-[10px] font-bold text-[#9ca3af] uppercase tracking-wider">State</th>
              <th className="px-3 py-2 text-left text-[10px] font-bold text-[#9ca3af] uppercase tracking-wider">Name</th>
              <th className="px-3 py-2 text-left text-[10px] font-bold text-[#9ca3af] uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#f3f4f6]"><td className="px-3 py-3 text-xs text-[#9ca3af]">Default</td><td className="px-3 py-3 text-sm text-[#393839]">Sarah Johnson</td><td className="px-3 py-3 text-sm text-green-600">Active</td></tr>
            <tr className="border-b border-[#f3f4f6] bg-[#f8faff]"><td className="px-3 py-3 text-xs text-[#9ca3af]">Hover</td><td className="px-3 py-3 text-sm text-[#393839]">Michael Chen</td><td className="px-3 py-3 text-sm text-amber-600">Pending</td></tr>
            <tr className="border-b border-[#f3f4f6] bg-[#eff6ff]"><td className="px-3 py-3 text-xs text-[#9ca3af]">Selected</td><td className="px-3 py-3 text-sm text-[#393839]">Emma Wilson</td><td className="px-3 py-3 text-sm text-blue-600">Applied</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
}
