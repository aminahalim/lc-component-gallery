import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Search, ChevronDown, ChevronRight, Settings, Sparkles, Send, Paperclip,
  Compass, FileText, Users, UserCheck, CalendarCheck, Printer, Filter,
  MoreVertical, Plus, X, ArrowLeft, Menu,
} from 'lucide-react'

const meta = {
  title: 'shadcn & Lucide',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj

export const ShadcnButton: Story = {
  name: 'shadcn / Button',
  render: () => (
    <div className="p-8 space-y-4">
      <h2 className="text-xl font-bold text-[#393839]">Button</h2>
      <p className="text-sm text-[#6b7280]">shadcn Button with LC Blue (#2876D3) primary. Primary, secondary, ghost, outline, icon-only, and size variants.</p>
      <div className="flex gap-3 items-center flex-wrap">
        <button className="px-5 py-2.5 bg-[#2876d3] text-white text-sm font-medium rounded-lg hover:bg-[#1e63b5]">Primary</button>
        <button className="px-5 py-2.5 border border-[#e5e7eb] text-[#393839] text-sm font-medium rounded-lg hover:bg-[#f9fafb]">Secondary</button>
        <button className="px-5 py-2.5 text-[#2876d3] text-sm font-medium rounded-lg hover:bg-[#f0f7ff]">Ghost</button>
        <button className="px-5 py-2.5 border border-[#2876d3] text-[#2876d3] text-sm font-medium rounded-lg hover:bg-[#f0f7ff]">Outline</button>
        <button className="px-3 py-2.5 bg-[#2876d3] text-white rounded-lg"><Search className="w-4 h-4" /></button>
      </div>
      <div className="flex gap-3 items-center">
        <button className="px-3 py-1.5 bg-[#2876d3] text-white text-xs font-medium rounded-md">Small</button>
        <button className="px-5 py-2.5 bg-[#2876d3] text-white text-sm font-medium rounded-lg">Default</button>
        <button className="px-7 py-3 bg-[#2876d3] text-white text-base font-medium rounded-xl">Large</button>
      </div>
      <p className="text-[10px] text-[#9ca3af]">Maps to: shadcn/ui Button. Override primary color to #2876D3.</p>
    </div>
  ),
}

export const ShadcnInput: Story = {
  name: 'shadcn / Input',
  render: () => (
    <div className="p-8 space-y-3 max-w-md">
      <h2 className="text-xl font-bold text-[#393839]">Input</h2>
      <p className="text-sm text-[#6b7280]">shadcn Input with LC border and focus ring (#2876D3).</p>
      <input type="text" placeholder="Default input" className="w-full px-4 py-2.5 text-sm border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2876d3] focus:border-[#2876d3] placeholder:text-[#9ca3af]" />
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af]" />
        <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2.5 text-sm border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2876d3] placeholder:text-[#9ca3af]" />
      </div>
      <p className="text-[10px] text-[#9ca3af]">Maps to: shadcn/ui Input. Focus ring uses #2876D3.</p>
    </div>
  ),
}

export const ShadcnDialog: Story = {
  name: 'shadcn / Dialog',
  render: () => (
    <div className="p-8 bg-[#f3f4f6]">
      <h2 className="text-xl font-bold text-[#393839] mb-4">Dialog / Modal</h2>
      <div className="bg-white rounded-2xl shadow-lg max-w-sm mx-auto overflow-hidden">
        <div className="px-6 pt-6 pb-3">
          <h3 className="text-lg font-bold text-[#1e293b]">Confirm Action</h3>
          <p className="text-sm text-[#6b7280] mt-1">Are you sure? This cannot be undone.</p>
        </div>
        <div className="px-6 pb-6 flex justify-end gap-3">
          <button className="px-4 py-2 text-sm font-medium text-[#4b5563] border border-[#e5e7eb] rounded-lg">Cancel</button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-[#2876d3] rounded-lg">Confirm</button>
        </div>
      </div>
      <p className="text-[10px] text-[#9ca3af] text-center mt-3">Maps to: shadcn/ui Dialog. Overlay: black 50% opacity.</p>
    </div>
  ),
}

export const ShadcnDropdown: Story = {
  name: 'shadcn / Dropdown',
  render: () => (
    <div className="p-8">
      <h2 className="text-xl font-bold text-[#393839] mb-4">Dropdown Menu</h2>
      <div className="inline-block">
        <button className="px-4 py-2 text-sm font-medium text-[#393839] border border-[#e5e7eb] rounded-lg flex items-center gap-2">Options <ChevronDown className="w-4 h-4" /></button>
        <div className="mt-1 w-48 bg-white border border-[#e5e7eb] rounded-xl shadow-lg p-1.5">
          {['Edit', 'Duplicate', 'Archive'].map(item => (
            <div key={item} className="px-3 py-2 text-sm text-[#393839] rounded-lg hover:bg-[#f3f4f6] cursor-pointer">{item}</div>
          ))}
          <div className="h-px bg-[#e5e7eb] my-1" />
          <div className="px-3 py-2 text-sm text-[#dc2626] rounded-lg hover:bg-[#fef2f2] cursor-pointer">Delete</div>
        </div>
      </div>
      <p className="text-[10px] text-[#9ca3af] mt-3">Maps to: shadcn/ui DropdownMenu. 12px radius.</p>
    </div>
  ),
}

export const ShadcnTooltip: Story = {
  name: 'shadcn / Tooltip',
  render: () => (
    <div className="p-8">
      <h2 className="text-xl font-bold text-[#393839] mb-4">Tooltip</h2>
      <div className="relative inline-flex flex-col items-center">
        <div className="px-3 py-1.5 bg-[#1e293b] text-white text-xs rounded-lg mb-2">Save changes</div>
        <div className="w-2 h-2 bg-[#1e293b] rotate-45 -mt-3.5 mb-1.5" />
        <button className="px-4 py-2 bg-[#2876d3] text-white text-sm font-medium rounded-lg">Hover me</button>
      </div>
      <p className="text-[10px] text-[#9ca3af] mt-4">Maps to: shadcn/ui Tooltip. Dark bg (#1E293B), white text, 8px radius.</p>
    </div>
  ),
}

export const LucideIconsUsed: Story = {
  name: 'Lucide Icons Used',
  render: () => (
    <div className="p-8">
      <h2 className="text-xl font-bold text-[#393839] mb-2">Lucide Icons Used</h2>
      <p className="text-sm text-[#6b7280] mb-6">shadcn/Lucide icons referenced across LiquidCompass components.</p>
      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-11 gap-4">
        {[
          { name: 'Search', Icon: Search }, { name: 'ChevronDown', Icon: ChevronDown },
          { name: 'ChevronRight', Icon: ChevronRight }, { name: 'Settings', Icon: Settings },
          { name: 'Sparkles', Icon: Sparkles }, { name: 'Send', Icon: Send },
          { name: 'Paperclip', Icon: Paperclip }, { name: 'Compass', Icon: Compass },
          { name: 'FileText', Icon: FileText }, { name: 'Users', Icon: Users },
          { name: 'UserCheck', Icon: UserCheck }, { name: 'CalendarCheck', Icon: CalendarCheck },
          { name: 'Printer', Icon: Printer }, { name: 'Filter', Icon: Filter },
          { name: 'MoreVertical', Icon: MoreVertical }, { name: 'Plus', Icon: Plus },
          { name: 'X', Icon: X }, { name: 'ArrowLeft', Icon: ArrowLeft }, { name: 'Menu', Icon: Menu },
        ].map(({ name, Icon }) => (
          <div key={name} className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 rounded-lg bg-[#f3f4f6] flex items-center justify-center text-[#4b5563]">
              <Icon size={20} />
            </div>
            <span className="text-[10px] text-[#9ca3af] text-center leading-tight">{name}</span>
          </div>
        ))}
      </div>
    </div>
  ),
}
