import type { Meta, StoryObj } from '@storybook/react-vite'
import { LCLogo } from '../components/icons/LCLogo'
import { LCIcon, type LCIconName } from '../components/icons/LCIcon'

const meta = {
  title: 'Foundations/Overview',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj

/* ── Logos ── */
export const LiquidCompassLogos: Story = {
  name: 'LC Logos',
  render: () => (
    <div className="p-8 space-y-6">
      <h2 className="text-xl font-bold text-[#393839]">LiquidCompass Logos</h2>
      <p className="text-sm text-[#6b7280]">Official wordmark logo. Used in AppHeader on dark backgrounds.</p>
      <div className="bg-[#011021] rounded-lg p-8 flex items-center justify-center">
        <LCLogo />
      </div>
      <div className="bg-[#1e293b] rounded-lg p-8 flex items-center justify-center">
        <LCLogo />
      </div>
      <p className="text-[10px] text-[#9ca3af]">LCLogo component renders the full SVG wordmark (140x48). Designed for dark backgrounds only.</p>
    </div>
  ),
}

/* ── Colors ── */
export const ColorPalette: Story = {
  name: 'Colors',
  render: () => (
    <div className="p-8 space-y-8">
      <h2 className="text-xl font-bold text-[#393839]">Color Palette</h2>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">Brand</p>
        <div className="flex gap-3 flex-wrap">
          {[
            { name: 'LC Blue', hex: '#2876D3', use: 'Primary actions, links, active states' },
            { name: 'LC Navy', hex: '#011021', use: 'App header background' },
            { name: 'LC Purple', hex: '#7A40F2', use: 'Compass AI gradient start' },
            { name: 'LC Purple Light', hex: '#9CB3FF', use: 'Compass AI gradient end' },
            { name: 'LC Green', hex: '#89D815', use: 'Logo accent (compass needle)' },
            { name: 'LC Sky', hex: '#72B3FF', use: 'Logo accent (compass ring)' },
          ].map((c) => (
            <div key={c.hex} className="flex items-center gap-3 min-w-[220px]">
              <div className="w-10 h-10 rounded-lg border border-[#e5e7eb] shrink-0" style={{ backgroundColor: c.hex }} />
              <div>
                <p className="text-sm font-semibold text-[#1e293b]">{c.name}</p>
                <p className="text-[11px] text-[#6b7280] font-mono">{c.hex}</p>
                <p className="text-[10px] text-[#9ca3af]">{c.use}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">Neutrals</p>
        <div className="flex gap-2 flex-wrap">
          {[
            { hex: '#1E293B', name: 'Slate 800' }, { hex: '#393839', name: 'Text Primary' },
            { hex: '#4B5563', name: 'Text Secondary' }, { hex: '#6B7280', name: 'Text Muted' },
            { hex: '#9CA3AF', name: 'Text Disabled' }, { hex: '#D1D5DB', name: 'Border Light' },
            { hex: '#E5E7EB', name: 'Border' }, { hex: '#F3F4F6', name: 'Surface' },
            { hex: '#F8FAFF', name: 'Sidebar BG' }, { hex: '#F9FAFB', name: 'Card BG' },
            { hex: '#FFFFFF', name: 'White' },
          ].map((c) => (
            <div key={c.hex} className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-lg border border-[#e5e7eb]" style={{ backgroundColor: c.hex }} />
              <p className="text-[9px] text-[#6b7280] font-mono">{c.hex}</p>
              <p className="text-[9px] text-[#9ca3af] text-center leading-tight w-14">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">Semantic / Status</p>
        <div className="flex gap-3 flex-wrap">
          {[
            { name: 'Success', hex: '#059669', use: 'Active, healthy, approved' },
            { name: 'Warning', hex: '#D97706', use: 'Review, pending, caution' },
            { name: 'Error', hex: '#DC2626', use: 'Blocked, expired, low health' },
            { name: 'Info', hex: '#2876D3', use: 'Applied, informational' },
            { name: 'Purple', hex: '#7C3AED', use: 'New badge, MC product' },
          ].map((c) => (
            <div key={c.name} className="flex items-center gap-2 min-w-[180px]">
              <div className="w-8 h-8 rounded-md" style={{ backgroundColor: c.hex }} />
              <div>
                <p className="text-xs font-semibold text-[#1e293b]">{c.name} <span className="font-mono text-[10px] text-[#6b7280]">{c.hex}</span></p>
                <p className="text-[10px] text-[#9ca3af]">{c.use}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}

/* ── Typography ── */
export const Typography: Story = {
  render: () => (
    <div className="p-8 space-y-4">
      <h2 className="text-xl font-bold text-[#393839]">Typography</h2>
      <p className="text-sm text-[#6b7280] mb-4">Montserrat is the sole typeface.</p>
      {[
        { spec: '32px / Bold', text: 'Page Title', size: 32, weight: 'font-bold' },
        { spec: '24px / Bold', text: 'Modal Title', size: 24, weight: 'font-bold' },
        { spec: '20px / Bold', text: 'Section Heading', size: 20, weight: 'font-bold' },
        { spec: '16px / SemiBold', text: 'Card Title', size: 16, weight: 'font-semibold' },
        { spec: '15px / Bold', text: 'Widget Title / Nav Label', size: 15, weight: 'font-bold' },
        { spec: '14px / Medium', text: 'Body text, button labels', size: 14, weight: 'font-medium' },
        { spec: '13px / Regular', text: 'Secondary body text', size: 13, weight: '' },
        { spec: '12px / Medium', text: 'Sidebar labels, metadata', size: 12, weight: 'font-medium' },
        { spec: '11px / SemiBold', text: 'Sidebar icon labels', size: 11, weight: 'font-semibold' },
      ].map((t) => (
        <div key={t.spec} className="flex items-baseline gap-6 border-b border-[#f3f4f6] pb-3">
          <span className="text-[10px] font-mono text-[#9ca3af] w-28 shrink-0">{t.spec}</span>
          <span className={`text-[#1e293b] leading-tight ${t.weight}`} style={{ fontSize: t.size }}>{t.text}</span>
        </div>
      ))}
      <div className="flex items-baseline gap-6">
        <span className="text-[10px] font-mono text-[#9ca3af] w-28 shrink-0">10px / Bold UC</span>
        <span className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-wider">Table headers, section labels</span>
      </div>
    </div>
  ),
}

/* ── Spacing & Radius ── */
export const SpacingAndRadius: Story = {
  name: 'Spacing & Radius',
  render: () => (
    <div className="p-8 grid grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-bold text-[#393839] mb-4">Spacing Scale</h3>
        <div className="space-y-2">
          {[
            { px: 4, use: 'Tight gap (icon + label)' }, { px: 8, use: 'Compact padding' },
            { px: 12, use: 'Card internal padding' }, { px: 16, use: 'Standard padding' },
            { px: 20, use: 'Card padding (px-5)' }, { px: 24, use: 'Section padding (p-6)' },
            { px: 32, use: 'Modal padding (p-8)' }, { px: 40, use: 'Page-level padding' },
          ].map((s) => (
            <div key={s.px} className="flex items-center gap-3">
              <div className="w-16 flex items-center"><div className="h-3 bg-[#2876d3]/20 border border-[#2876d3]/40 rounded-sm" style={{ width: s.px }} /></div>
              <span className="text-xs font-mono text-[#1e293b] w-10">{s.px}px</span>
              <span className="text-[11px] text-[#6b7280]">{s.use}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-[#393839] mb-4">Border Radius</h3>
        <div className="space-y-3">
          {[
            { r: '4px', name: 'sm', use: 'Pills, badges' }, { r: '8px', name: 'md', use: 'Buttons, inputs' },
            { r: '12px', name: 'lg', use: 'Cards, widgets' }, { r: '16px', name: 'xl', use: 'Modals' },
            { r: '24px', name: '2xl', use: 'Prompt input' }, { r: '9999px', name: 'full', use: 'Avatars, AI button' },
          ].map((r) => (
            <div key={r.name} className="flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-[#2876d3] bg-[#2876d3]/5 shrink-0" style={{ borderRadius: r.r }} />
              <div>
                <p className="text-xs font-semibold text-[#1e293b]">{r.r} <span className="text-[#9ca3af] font-normal">({r.name})</span></p>
                <p className="text-[10px] text-[#6b7280]">{r.use}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}

/* ── Shadows ── */
export const Shadows: Story = {
  name: 'Shadows & Elevation',
  render: () => (
    <div className="p-8 bg-[#f3f4f6]">
      <h2 className="text-xl font-bold text-[#393839] mb-6">Shadows & Elevation</h2>
      <div className="flex gap-6 flex-wrap">
        {[
          { name: 'None', shadow: 'none', use: 'Default cards' },
          { name: 'Sidebar', shadow: '0px 4px 4px 0px #c8d0d8', use: 'Side navigation' },
          { name: 'Card Hover', shadow: '0 1px 3px rgba(0,0,0,0.1)', use: 'Interactive hover' },
          { name: 'Dropdown', shadow: '0 4px 12px rgba(0,0,0,0.12)', use: 'Dropdowns' },
          { name: 'Modal', shadow: '0 24px 48px rgba(0,0,0,0.16)', use: 'Modal overlays' },
        ].map((s) => (
          <div key={s.name} className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 bg-white rounded-xl border border-[#e5e7eb] flex items-center justify-center" style={{ boxShadow: s.shadow }}>
              <span className="text-[10px] text-[#6b7280] text-center px-2">{s.name}</span>
            </div>
            <p className="text-[10px] text-[#9ca3af] text-center max-w-[100px]">{s.use}</p>
          </div>
        ))}
      </div>
    </div>
  ),
}

/* ── Component Tokens ── */
export const ComponentTokens: Story = {
  name: 'Component Tokens',
  render: () => (
    <div className="p-8">
      <h2 className="text-xl font-bold text-[#393839] mb-4">Component Tokens — Quick Reference</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#e5e7eb]">
            {['Component', 'Background', 'Border', 'Text', 'Radius'].map(h => (
              <th key={h} className="text-left text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] pb-2 pr-4">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-xs text-[#4b5563]">
          {[
            { comp: 'AppHeader', bg: '#011021', border: '\u2014', text: '#FFFFFF', radius: '\u2014' },
            { comp: 'SideNavigation', bg: '#F8FAFF', border: '#E2E8F0', text: '#393839', radius: '\u2014' },
            { comp: 'Active Nav Item', bg: '#F8FAFF', border: '#2876D3 (left 4px)', text: '#2876D3', radius: '\u2014' },
            { comp: 'WidgetCard', bg: '#FFFFFF', border: '#E5E7EB', text: '#393839', radius: '12px' },
            { comp: 'PromptInput', bg: '#FFFFFF', border: '#C7D2FE', text: '#4B5563', radius: '16px' },
            { comp: 'AI Button', bg: 'gradient #7A40F2\u2192#9CB3FF', border: '\u2014', text: '#FFFFFF', radius: '9999px' },
            { comp: 'Bubble (User)', bg: '#1E293B', border: '\u2014', text: '#FFFFFF', radius: '16px' },
            { comp: 'Bubble (AI)', bg: '#F3F4F6', border: '\u2014', text: '#1E293B', radius: '16px' },
            { comp: 'Modal', bg: '#FFFFFF', border: '#E5E7EB', text: '#1E293B', radius: '16px' },
            { comp: 'Badge (Success)', bg: '#ECFDF5', border: '\u2014', text: '#059669', radius: '9999px' },
          ].map((row) => (
            <tr key={row.comp} className="border-b border-[#f3f4f6]">
              <td className="py-2 pr-4 font-medium text-[#1e293b]">{row.comp}</td>
              <td className="py-2 pr-4 font-mono text-[11px]">{row.bg}</td>
              <td className="py-2 pr-4 font-mono text-[11px]">{row.border}</td>
              <td className="py-2 pr-4 font-mono text-[11px]">{row.text}</td>
              <td className="py-2 font-mono text-[11px]">{row.radius}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
}

/* ── Motion ── */
export const MotionAndTransitions: Story = {
  name: 'Motion & Transitions',
  render: () => (
    <div className="p-8">
      <h2 className="text-xl font-bold text-[#393839] mb-4">Motion & Transitions</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#e5e7eb]">
            {['Interaction', 'Duration', 'Easing', 'Property', 'Notes'].map(h => (
              <th key={h} className="text-left text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] pb-2 pr-6">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-xs text-[#4b5563]">
          {[
            { i: 'Button hover', d: '150ms', e: 'ease-in-out', p: 'background, shadow', n: 'Immediate feel' },
            { i: 'Card hover', d: '200ms', e: 'ease-out', p: 'border, shadow', n: 'Subtle lift' },
            { i: 'Nav item', d: '150ms', e: 'ease-in-out', p: 'color, background', n: 'Left border instant' },
            { i: 'Sub-nav expand', d: '200ms', e: 'ease-out', p: 'height, opacity', n: 'Accordion' },
            { i: 'Modal open', d: '200ms', e: 'ease-out', p: 'opacity, transform', n: 'Scale 95%\u2192100%' },
            { i: 'Modal close', d: '150ms', e: 'ease-in', p: 'opacity, transform', n: 'Scale\u219295%' },
            { i: 'Chat bubble', d: '300ms', e: 'ease-out', p: 'opacity, transform', n: 'Slide up 8px' },
            { i: 'Skeleton pulse', d: '2000ms', e: 'ease-in-out', p: 'opacity', n: 'Infinite loop' },
            { i: 'Focus ring', d: '0ms', e: '\u2014', p: 'box-shadow', n: '2px offset, LC Blue' },
          ].map((row) => (
            <tr key={row.i} className="border-b border-[#f3f4f6]">
              <td className="py-2 pr-6 font-medium text-[#1e293b]">{row.i}</td>
              <td className="py-2 pr-6 font-mono">{row.d}</td>
              <td className="py-2 pr-6 font-mono">{row.e}</td>
              <td className="py-2 pr-6 font-mono text-[11px]">{row.p}</td>
              <td className="py-2 text-[#6b7280]">{row.n}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
}
