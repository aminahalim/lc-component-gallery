/**
 * ComponentGallery — Full showcase of the LiquidCompass component library.
 * Organized with sticky sidebar TOC matching Figma structure:
 *   Foundations → LC Components → LC Composites → shadcn → Icons → States
 */
import { useState, useEffect, useRef } from 'react'
import { AppHeader } from './components/layout/AppHeader'
import { SideNavigation } from './components/layout/SideNavigation'
import { PageHeader } from './components/layout/PageHeader'
import { WidgetCard } from './components/data-display/WidgetCard'
import { DataTable, AvatarCell, StatusCell } from './components/data-display/DataTable'
import { PromptInput } from './components/compass-ai/PromptInput'
import { ConversationBubble } from './components/compass-ai/ConversationBubble'
import { ChatHistory } from './components/compass-ai/ChatHistory'
import { QuickActionCard } from './components/compass-ai/QuickActionCard'
import { SuggestedPromptRow } from './components/compass-ai/SuggestedPrompt'
import { ExplorePromptsModal } from './components/compass-ai/ExplorePromptsModal'
import { FilterBar } from './components/forms-feedback/FilterBar'
import { Badge, Pill } from './components/forms-feedback/Badge'
import { WidgetLibraryModal } from './components/forms-feedback/WidgetLibraryModal'
import { LCIcon, type LCIconName } from './components/icons/LCIcon'
import { LCLogo } from './components/icons/LCLogo'
import { AIWorkflowCard } from './components/compass-ai/AIWorkflowCard'
import { AIResponseTable, HealthBadge, StageBadge, BlockerText, ActionLink, JobIdLink } from './components/compass-ai/AIResponseTable'
import { AIFollowUpPrompts } from './components/compass-ai/AIFollowUpPrompts'
import {
  Search, ChevronDown, ChevronRight, Settings, Sparkles, Send, Paperclip,
  Compass, FileText, Users, UserCheck, CalendarCheck, Printer, Filter,
  MoreVertical, Plus, X, ArrowLeft, Menu,
} from 'lucide-react'

/* ══════════════════════════════════════════════════════════════
   TOC DATA
   ══════════════════════════════════════════════════════════════ */
const tocSections = [
  { id: 'foundations', label: 'Foundations', children: [
    { id: 'foundations-logos', label: 'LC Logos' },
    { id: 'foundations-colors', label: 'Colors' },
    { id: 'foundations-typography', label: 'Typography' },
    { id: 'foundations-spacing', label: 'Spacing & Radius' },
    { id: 'foundations-shadows', label: 'Shadows' },
    { id: 'foundations-tokens', label: 'Component Tokens' },
    { id: 'foundations-motion', label: 'Motion' },
  ]},
  { id: 'components', label: 'LC Components', children: [
    { id: 'comp-appheader', label: 'App Header' },
    { id: 'comp-sidenav', label: 'Side Nav' },
    { id: 'comp-pageheader', label: 'Page Header' },
    { id: 'comp-tab', label: 'Tab' },
    { id: 'comp-widgetcard', label: 'Widget Card' },
    { id: 'comp-datatable', label: 'Data Table' },
    { id: 'comp-producttag', label: 'Product Tag' },
    { id: 'comp-bubble', label: 'Conversation Bubble' },
    { id: 'comp-listitem', label: 'List Item' },
    { id: 'comp-prompt', label: 'Prompt Input' },
    { id: 'comp-quickaction', label: 'Quick Action' },
    { id: 'comp-suggested', label: 'Suggested Prompt' },
    { id: 'comp-workflow', label: 'Workflow Card' },
    { id: 'comp-badge', label: 'Badge & Pill' },
    { id: 'comp-filterbar', label: 'FilterBar' },
    { id: 'comp-followup', label: 'Follow-Up Prompts' },
    { id: 'comp-responsetable', label: 'AI Response Table' },
  ]},
  { id: 'composites', label: 'LC Composites', children: [
    { id: 'composite-compass-ai', label: 'Compass AI' },
    { id: 'composite-home', label: 'Home Dashboard' },
    { id: 'composite-modals', label: 'Modals' },
  ]},
  { id: 'shadcn', label: 'shadcn Components', children: [
    { id: 'shadcn-button', label: 'Button' },
    { id: 'shadcn-input', label: 'Input' },
    { id: 'shadcn-dialog', label: 'Dialog' },
    { id: 'shadcn-dropdown', label: 'Dropdown' },
    { id: 'shadcn-tooltip', label: 'Tooltip' },
  ]},
  { id: 'icons', label: 'Icons', children: [
    { id: 'icons-custom', label: 'LC Custom Icons' },
    { id: 'icons-lucide', label: 'Lucide Icons' },
  ]},
  { id: 'states', label: 'States & Behavior', children: [
    { id: 'states-interaction', label: 'Interaction States' },
    { id: 'states-empty', label: 'Empty / Loading / Error' },
  ]},
]

/* ══════════════════════════════════════════════════════════════
   TABLE OF CONTENTS SIDEBAR
   ══════════════════════════════════════════════════════════════ */
function TableOfContents({ activeId }: { activeId: string }) {
  return (
    <nav className="bg-[#f8faff] rounded-xl border border-[#e2e8f0] p-4 max-h-[calc(100vh-48px)] overflow-y-auto">
      <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">Contents</p>
      <ul className="space-y-0.5">
        {tocSections.map((sec) => (
          <li key={sec.id}>
            <a
              href={`#${sec.id}`}
              className={`block px-2 py-1.5 text-[13px] font-semibold rounded-md transition-colors ${
                activeId === sec.id
                  ? 'text-[#2876d3] bg-[#eff6ff] border-l-[3px] border-l-[#2876d3] pl-[5px]'
                  : 'text-[#393839] hover:bg-[#f0f4f8]'
              }`}
            >
              {sec.label}
            </a>
            {sec.children && (
              <ul className="ml-3 mt-0.5 space-y-0.5">
                {sec.children.map((child) => (
                  <li key={child.id}>
                    <a
                      href={`#${child.id}`}
                      className={`block px-2 py-1 text-[11px] rounded-md transition-colors ${
                        activeId === child.id
                          ? 'text-[#2876d3] font-medium'
                          : 'text-[#6b7280] hover:text-[#393839]'
                      }`}
                    >
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

/* ══════════════════════════════════════════════════════════════
   SECTION WRAPPER
   ══════════════════════════════════════════════════════════════ */
function Section({ id, title, description, children }: { id: string; title: string; description: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ scrollMarginTop: 24 }} className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-[#393839]">{title}</h3>
        <p className="text-sm text-[#6b7280]">{description}</p>
      </div>
      <div className="border border-[#e5e7eb] rounded-xl bg-[#fafafa] overflow-x-auto">{children}</div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   SHARED DATA
   ══════════════════════════════════════════════════════════════ */
const sideNavProducts = [
  { id: 'compass-ai', label: 'Compass\nAI', icon: 'compass-ai' as const },
  { id: 'home', label: 'Home', icon: 'home' as const },
  { id: 'talent', label: 'Talent', icon: 'talent' as const },
  { id: 'fwp', label: 'FWP', icon: 'fwp' as const },
  { id: 'mc', label: 'MC', icon: 'mc' as const },
  { id: 'messages', label: 'Messages', icon: 'messages' as const },
]

/* ══════════════════════════════════════════════════════════════
   MAIN GALLERY
   ══════════════════════════════════════════════════════════════ */
export default function ComponentGallery() {
  const [exploreOpen, setExploreOpen] = useState(false)
  const [widgetOpen, setWidgetOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState('home')
  const [activeSection, setActiveSection] = useState('foundations')
  const mainRef = useRef<HTMLDivElement>(null)

  // Track active section via IntersectionObserver
  useEffect(() => {
    const allIds = tocSections.flatMap(s => [s.id, ...s.children.map(c => c.id)])
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    )
    allIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: ".lc-gallery, .lc-gallery * { font-family: 'Montserrat', sans-serif !important; } .lc-gallery { scroll-behavior: smooth; }" }} />

      <div className="lc-gallery min-h-screen bg-white p-6 sm:p-10">
        {/* Header */}
        <div className="max-w-[1400px] mx-auto mb-10 space-y-2 border-b border-[#e5e7eb] pb-6">
          <h1 className="text-3xl font-bold text-[#393839]">LiquidCompass — Component Gallery</h1>
          <p className="text-[#6b7280] text-sm max-w-2xl">
            Production-ready component library extracted from the Figma design file.
            Each component is props-driven, respects the LC design language, and is ready
            for integration into a React + Next.js codebase.
          </p>
        </div>

        {/* 2-column: sidebar + content */}
        <div className="max-w-[1400px] mx-auto flex gap-8">
          {/* Sidebar TOC */}
          <aside className="w-[220px] shrink-0 hidden lg:block">
            <div className="sticky top-6">
              <TableOfContents activeId={activeSection} />
            </div>
          </aside>

          {/* Main content */}
          <main ref={mainRef} className="flex-1 min-w-0 space-y-14">

{/* ┌─────────────────────────────────────────────────────────────┐
   │  1. FOUNDATIONS                                              │
   └─────────────────────────────────────────────────────────────┘ */}
<div id="foundations" style={{ scrollMarginTop: 24 }} className="space-y-10">
  <h2 className="text-xl font-bold text-[#393839]">Foundations</h2>

  {/* LC Logos */}
  <Section id="foundations-logos" title="LiquidCompass Logos" description="Official wordmark logo. Used in AppHeader on dark backgrounds.">
    <div className="p-6 space-y-4">
      <div className="bg-[#011021] rounded-lg p-8 flex items-center justify-center">
        <LCLogo />
      </div>
      <div className="bg-[#1e293b] rounded-lg p-8 flex items-center justify-center">
        <LCLogo />
      </div>
      <p className="text-[10px] text-[#9ca3af]">LCLogo component renders the full SVG wordmark (140x48). Designed for dark backgrounds only.</p>
    </div>
  </Section>

  {/* Colors */}
  <Section id="foundations-colors" title="Color Palette" description="Brand, UI, and semantic colors used across all LiquidCompass components.">
    <div className="p-6 bg-white space-y-6">
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
        <div className="flex gap-2">
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
  </Section>

  {/* Typography */}
  <Section id="foundations-typography" title="Typography" description="Montserrat is the sole typeface. Weight and size scale used across the design system.">
    <div className="p-6 bg-white space-y-4">
      {[
        { spec: '32px / Bold', text: 'Page Title', size: 32, weight: 'font-bold' },
        { spec: '24px / Bold', text: 'Modal Title', size: 24, weight: 'font-bold' },
        { spec: '20px / Bold', text: 'Section Heading', size: 20, weight: 'font-bold' },
        { spec: '16px / SemiBold', text: 'Card Title', size: 16, weight: 'font-semibold' },
        { spec: '15px / Bold', text: 'Widget Title / Nav Label', size: 15, weight: 'font-bold' },
        { spec: '14px / Medium', text: 'Body text, button labels, table cells', size: 14, weight: 'font-medium' },
        { spec: '13px / Regular', text: 'Secondary body text, descriptions', size: 13, weight: '' },
        { spec: '12px / Medium', text: 'Sidebar labels, metadata, filter tabs', size: 12, weight: 'font-medium' },
        { spec: '11px / SemiBold', text: 'Sidebar icon labels, compact nav', size: 11, weight: 'font-semibold' },
      ].map((t) => (
        <div key={t.spec} className="flex items-baseline gap-6 border-b border-[#f3f4f6] pb-3">
          <span className="text-[10px] font-mono text-[#9ca3af] w-28 shrink-0">{t.spec}</span>
          <span className={`text-[#1e293b] leading-tight ${t.weight}`} style={{ fontSize: t.size }}>{t.text}</span>
        </div>
      ))}
      <div className="flex items-baseline gap-6">
        <span className="text-[10px] font-mono text-[#9ca3af] w-28 shrink-0">10px / Bold UC</span>
        <span className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-wider">Table headers, section labels, filter labels</span>
      </div>
    </div>
  </Section>

  {/* Spacing & Radius */}
  <Section id="foundations-spacing" title="Spacing & Radius" description="Common spacing tokens and border radius values.">
    <div className="p-6 bg-white grid grid-cols-2 gap-8">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">Spacing Scale</p>
        <div className="space-y-2">
          {[
            { px: 4, use: 'Tight gap (icon + label)' }, { px: 8, use: 'Compact padding, small gaps' },
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
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">Border Radius</p>
        <div className="space-y-3">
          {[
            { r: '4px', name: 'sm', use: 'Pills, small badges' }, { r: '8px', name: 'md', use: 'Buttons, inputs' },
            { r: '12px', name: 'lg', use: 'Cards, widgets' }, { r: '16px', name: 'xl', use: 'Modals' },
            { r: '24px', name: '2xl', use: 'Prompt input, chat bubbles' }, { r: '9999px', name: 'full', use: 'Avatars, AI button' },
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
  </Section>

  {/* Shadows */}
  <Section id="foundations-shadows" title="Shadows & Elevation" description="Shadow tokens used for depth and layering.">
    <div className="p-6 bg-[#f3f4f6] flex gap-6 flex-wrap">
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
  </Section>

  {/* Component Tokens */}
  <Section id="foundations-tokens" title="Component Tokens — Quick Reference" description="How design tokens map to key components.">
    <div className="p-6 bg-white overflow-x-auto">
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
            { comp: 'PageHeader', bg: '#FFFFFF', border: '#E5E7EB (bottom)', text: '#1E293B', radius: '\u2014' },
            { comp: 'WidgetCard', bg: '#FFFFFF', border: '#E5E7EB', text: '#393839', radius: '12px' },
            { comp: 'QuickActionCard', bg: '#FFFFFF', border: '#E5E7EB', text: '#1E293B', radius: '12px' },
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
  </Section>

  {/* Motion */}
  <Section id="foundations-motion" title="Motion & Transitions" description="Timing, easing, and behavior for all animated interactions.">
    <div className="p-6 bg-white">
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
            { i: 'Button hover', d: '150ms', e: 'ease-in-out', p: 'background-color, box-shadow', n: 'Immediate feel' },
            { i: 'Card hover', d: '200ms', e: 'ease-out', p: 'border-color, box-shadow', n: 'Subtle shadow lift' },
            { i: 'Nav item', d: '150ms', e: 'ease-in-out', p: 'color, background', n: 'Left border instant' },
            { i: 'Sub-nav expand', d: '200ms', e: 'ease-out', p: 'height, opacity', n: 'Accordion' },
            { i: 'Modal open', d: '200ms', e: 'ease-out', p: 'opacity, transform', n: 'Fade + scale 95%\u2192100%' },
            { i: 'Modal close', d: '150ms', e: 'ease-in', p: 'opacity, transform', n: 'Fade + scale\u219295%' },
            { i: 'Modal overlay', d: '200ms', e: 'ease-out', p: 'opacity', n: 'Black 50% backdrop' },
            { i: 'Chat bubble', d: '300ms', e: 'ease-out', p: 'opacity, transform', n: 'Slide up 8px + fade' },
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
  </Section>
</div>

{/* ┌─────────────────────────────────────────────────────────────┐
   │  2. LC COMPONENTS                                           │
   └─────────────────────────────────────────────────────────────┘ */}
<div id="components" style={{ scrollMarginTop: 24 }} className="space-y-10 border-t border-[#e5e7eb] pt-10">
  <h2 className="text-xl font-bold text-[#393839]">LC Components</h2>

  {/* App Header */}
  <Section id="comp-appheader" title="LC App Header" description="5 variants: Default, WithAI, Authenticated, MinimalAuth, FullSearch. Custom LC component.">
    <div className="space-y-4 p-4 bg-white">
      {(['default', 'withAI', 'authenticated', 'minimalAuth', 'fullSearch'] as const).map(v => (
        <div key={v}>
          <p className="text-xs text-[#9ca3af] mb-1.5 font-medium uppercase tracking-wide">{v}</p>
          <div className={`rounded-lg border border-[#e5e7eb] ${v === 'fullSearch' ? 'overflow-x-auto' : 'overflow-hidden'}`}>
            {v === 'fullSearch' ? <div className="min-w-[900px]"><AppHeader variant={v} /></div> : <AppHeader variant={v} />}
          </div>
        </div>
      ))}
    </div>
  </Section>

  {/* Side Nav */}
  <Section id="comp-sidenav" title="Side Nav" description="6 variants per product. Active product gets blue left border; products with sub-items expand.">
    <div className="flex gap-4 p-4 bg-white overflow-x-auto">
      {[
        { active: 'compass-ai', label: 'Compass AI', extra: { subItems: [{ id: 'new', icon: 'pencil' }, { id: 'history', icon: 'history' }] } },
        { active: 'home', label: 'Home' },
        { active: 'talent', label: 'Talent', extra: { subItems: [{ id: 'sp', icon: 'staff-pool' }, { id: 'jo', icon: 'job-orders' }, { id: 'rpt', icon: 'reports' }] } },
        { active: 'fwp', label: 'FWP', extra: { subItems: [{ id: 'jo', icon: 'job-orders' }, { id: 'sp', icon: 'staff-pool' }, { id: 'tc', icon: 'timecards' }, { id: 'inv', icon: 'invoices' }, { id: 'rpt', icon: 'reports' }] } },
        { active: 'mc', label: 'MC' },
        { active: 'messages', label: 'Messages' },
      ].map(({ active, label, extra }) => (
        <div key={active} className="shrink-0">
          <p className="text-xs text-[#9ca3af] mb-1.5 font-medium uppercase tracking-wide text-center">{label}</p>
          <div className="h-[520px] border border-[#e5e7eb] rounded-lg overflow-hidden">
            <SideNavigation
              products={sideNavProducts.map(p => p.id === active && extra ? { ...p, ...extra } : p)}
              activeProductId={active}
            />
          </div>
        </div>
      ))}
    </div>
  </Section>

  {/* Page Header */}
  <Section id="comp-pageheader" title="Page Header" description="Two variants: Default (title + print) and WithTabs (title + tab row + print).">
    <div className="space-y-2 p-2">
      <PageHeader title="FWP - Job Orders" onPrintClick={() => {}} />
      <PageHeader title="FWP - Reports" tabs={[
        { id: 'util', label: 'Utilization', isActive: true }, { id: 'workers', label: 'Workers' },
        { id: 'sources', label: 'Sources' }, { id: 'ti', label: 'Timecards & Invoices' }, { id: 'exports', label: 'Exports' },
      ]} onPrintClick={() => {}} />
    </div>
  </Section>

  {/* Tab */}
  <Section id="comp-tab" title="Tab" description="Active/inactive tab states. Used in PageHeader and FilterBar.">
    <div className="p-6 bg-white flex gap-4">
      <div className="px-4 py-2 text-sm font-semibold text-[#2876d3] border-b-2 border-[#2876d3]">Active Tab</div>
      <div className="px-4 py-2 text-sm text-[#6b7280] hover:text-[#393839] cursor-pointer">Inactive Tab</div>
      <div className="px-4 py-2 text-sm text-[#6b7280] hover:text-[#393839] cursor-pointer">Inactive Tab</div>
    </div>
  </Section>

  {/* Widget Card */}
  <Section id="comp-widgetcard" title="Widget Card" description="Dashboard widget with icon header and linked metric rows. Used on Home page.">
    <div className="p-6 bg-white grid grid-cols-2 lg:grid-cols-4 gap-3">
      <WidgetCard icon="job-orders" title="Job Orders" metrics={[{ label: 'Order Approvals', value: 2 }, { label: 'Submissions for Review', value: 12 }]} />
      <WidgetCard icon="staff-pool" title="Staff Pool" metrics={[{ label: 'Agreements Pending', value: 3 }, { label: 'Credential Steps Pending', value: 3 }]} />
      <WidgetCard icon="timecards" title="Timecards" metrics={[{ label: 'Time Approvals', value: 2 }]} />
      <WidgetCard icon="invoices" title="Invoices" metrics={[{ label: 'Invoice Approvals', value: 2 }, { label: 'Pending Payment', value: 2 }]} />
    </div>
  </Section>

  {/* Data Table */}
  <Section id="comp-datatable" title="Data Table" description="Sortable data table with avatar cells, status badges, and checkboxes.">
    <div className="p-4 bg-white overflow-x-auto">
      <DataTable
        columns={[
          { key: 'candidate', label: 'Candidate', sortable: true, render: (_v, row) => <AvatarCell initials={row.initials as string} name={row.name as string} subtitle={row.location as string} color={row.color as string} /> },
          { key: 'title', label: 'Title | Location' }, { key: 'source', label: 'Application Source' },
          { key: 'status', label: 'Status', render: (_v, row) => <StatusCell status={row.status as string} variant={row.statusVariant as 'success' | 'info'} /> },
          { key: 'applications', label: 'Total Applications' },
        ]}
        data={[
          { initials: 'WB', name: 'Woody Bennett', location: 'Houston, TX', color: '#ca8a04', title: 'Certified Medical Assistant', source: 'Indeed', status: 'Applied', statusVariant: 'info', applications: '2 Applications' },
          { initials: 'RB', name: 'Rose Browning', location: 'Dallas, TX', color: '#dc2626', title: 'Certified Medical Assistant', source: 'Indeed', status: 'Applied', statusVariant: 'info', applications: '2 Applications' },
          { initials: 'KB', name: 'Katarina Burgess', location: 'Boston, MA', color: '#7c3aed', title: 'Registered Nurse', source: 'ZipRecruiter', status: 'Applied', statusVariant: 'info', applications: '4 Applications' },
        ]}
        selectable
      />
    </div>
  </Section>

  {/* Product Tag */}
  <Section id="comp-producttag" title="Product Tag" description="Color-coded product labels. MC (purple), FWP (blue), Talent (green).">
    <div className="p-6 bg-white flex gap-3">
      <Pill color="#7c3aed">MC</Pill>
      <Pill color="#2876d3">FWP</Pill>
      <Pill color="#059669">Talent</Pill>
    </div>
  </Section>

  {/* Conversation Bubble */}
  <Section id="comp-bubble" title="Conversation Bubble" description="Chat message bubbles \u2014 user (dark, right) and assistant (light, left).">
    <div className="p-6 bg-white max-w-2xl mx-auto space-y-3">
      <ConversationBubble role="user" content="Find ICU RN jobs at Dartmouth Health." />
      <ConversationBubble role="assistant" content={
        <div>
          <p>Got it! Here are some of the latest ICU RN openings at Dartmouth Health:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Registered Nurse \u2013 ICU (Full Time, Nights)<br /><span className="text-xs text-[#6b7280]">Dartmouth Hitchcock Medical Center \u2014 Lebanon, NH</span><br /><span className="text-xs">$38\u2013$54/hr | 3\u00d712s | Sign-on bonus available</span></li>
          </ul>
        </div>
      } />
    </div>
  </Section>

  {/* Conversation List Item */}
  <Section id="comp-listitem" title="Conversation List Item" description="Selected and unselected states for the chat history sidebar.">
    <div className="p-6 bg-white space-y-2 max-w-[300px]">
      <div className="px-4 py-3 bg-white border border-[#e5e7eb] rounded-lg">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-semibold text-[#1e293b] truncate">ICU night shift fill rate</p>
          <span className="text-[10px] text-[#9ca3af] shrink-0 ml-2">1 week ago</span>
        </div>
        <p className="text-xs text-[#6b7280] truncate">Based on the data, ICU night shifts have a 68% fill rate...</p>
        <div className="mt-2"><Pill color="#7c3aed">MC</Pill></div>
      </div>
      <div className="px-4 py-3 bg-[#f0f7ff] border border-[#2876d3]/20 rounded-lg">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-semibold text-[#1e293b] truncate">ICU night shift fill rate</p>
          <span className="text-[10px] text-[#9ca3af] shrink-0 ml-2">1 week ago</span>
        </div>
        <p className="text-xs text-[#6b7280] truncate">Based on the data, ICU night shifts have a 68% fill rate...</p>
        <div className="mt-2 flex gap-1"><Pill color="#2876d3">FWP</Pill><span className="px-2 py-0.5 text-[10px] font-bold text-white bg-[#2876d3] rounded">High</span></div>
      </div>
    </div>
  </Section>

  {/* Prompt Input */}
  <Section id="comp-prompt" title="Prompt Input" description="AI chat input with attach, explore prompts, and send. Indigo border accent.">
    <div className="p-6 bg-white max-w-2xl mx-auto">
      <PromptInput onExplorePrompts={() => setExploreOpen(true)} />
    </div>
  </Section>

  {/* Quick Action */}
  <Section id="comp-quickaction" title="Quick Action" description="Action card with colored icon, label, and chevron. Used on the AI home landing.">
    <div className="p-6 bg-white grid grid-cols-2 gap-3 max-w-2xl">
      <QuickActionCard icon="talent" iconBgColor="#eef2ff" iconColor="#4f46e5" label="Manage Talent Pipeline" />
      <QuickActionCard icon="fwp" iconBgColor="#f0fdfa" iconColor="#0d9488" label="Manage Flexible Work" />
      <QuickActionCard icon="graph-growth" iconBgColor="#ecfeff" iconColor="#0891b2" label="Market & Spend Insights" />
      <QuickActionCard icon="check-box" iconBgColor="#fefce8" iconColor="#ca8a04" label="Automate Tasks" />
    </div>
  </Section>

  {/* Suggested Prompt */}
  <Section id="comp-suggested" title="Suggested Prompt" description="Row of pill-shaped prompt chips. Click to auto-fill the PromptInput.">
    <div className="p-6 bg-white">
      <SuggestedPromptRow prompts={['Which orders are at risk of going unfilled this week?', 'Show me orders with low submission volume', 'Which specialties are hardest to fill right now?', 'Suggest actions to improve fill rate for ICU nights']} />
    </div>
  </Section>

  {/* TalentPipelineWorkflow */}
  <Section id="comp-workflow" title="TalentPipelineWorkflow" description="AI response card after selecting a quick action. Presents 2-4 drill-down options.">
    <div className="p-6 bg-white">
      <AIWorkflowCard heading="What would you like to review?" subheading="Select an area to generate a structured pipeline analysis." options={[
        { id: 'open-roles', icon: 'file-text', iconColor: '#7c3aed', title: 'Open Roles', description: 'Review applicant volume and pipeline health for all active job orders.' },
        { id: 'quality', icon: 'users', iconColor: '#2876d3', title: 'Applicant Quality & Readiness', description: 'Analyze candidate qualifications, compliance status, and risk flags.' },
        { id: 're-engagement', icon: 'user-check', iconColor: '#059669', title: 'Re-engagement Opportunities', description: 'Identify high-quality past candidates for current and future roles.' },
      ]} />
    </div>
  </Section>

  {/* Badge & Pill */}
  <Section id="comp-badge" title="Badge & Pill" description="Status badges (7 variants) and product label pills.">
    <div className="p-6 bg-white space-y-4">
      <div className="flex flex-wrap gap-2">
        <Badge variant="default">Default</Badge>
        <Badge variant="success" dot>Active</Badge>
        <Badge variant="warning" dot>Pending Review</Badge>
        <Badge variant="error" dot>Blocked</Badge>
        <Badge variant="info">Applied</Badge>
        <Badge variant="purple">New</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Pill color="#2876d3">FWP</Pill>
        <Pill color="#059669">Talent</Pill>
        <Pill color="#7c3aed">MC</Pill>
        <Pill color="#dc2626">Marketplace</Pill>
      </div>
    </div>
  </Section>

  {/* FilterBar */}
  <Section id="comp-filterbar" title="FilterBar" description="Horizontal filter with toggle tabs and action buttons. Used on every list page.">
    <div className="p-4 bg-white">
      <FilterBar filterCount={1} tabs={[{ id: 'jobs', label: 'Jobs', count: 20000, isActive: true }, { id: 'apps', label: 'Applications', count: 80000 }]} />
    </div>
  </Section>

  {/* AIFollowUpPrompts */}
  <Section id="comp-followup" title="AIFollowUpPrompts" description="Contextual follow-up prompts shown after an AI response table.">
    <div className="p-6 bg-white">
      <AIFollowUpPrompts label="Suggested prompts for Job 2345-6789" prompts={[
        'Analyze why Job 2345-6789 has low applicant volume', 'Show me top 3 candidates for Job 2345-6789',
        'Suggest rate adjustments for Job 2345-6789 to improve health', 'Generate outreach template for Job 2345-6789',
      ]} />
    </div>
  </Section>

  {/* AIResponseTable */}
  <Section id="comp-responsetable" title="AIResponseTable" description="Data table rendered as AI response. Three variants: Open Roles, Applicant Quality, Re-engagement.">
    <div className="p-6 bg-white space-y-8">
      <AIResponseTable breadcrumb={['Talent Pipeline', 'Open Roles']} title="Open Roles" columns={[
        { key: 'jobId', label: 'Job ID' }, { key: 'applicants', label: 'Applicant Count', align: 'center' },
        { key: 'daysOpen', label: 'Days Open', align: 'center' }, { key: 'health', label: 'Pipeline Health', align: 'center' },
      ]} rows={[
        { jobId: <JobIdLink id="1234-5678" />, applicants: '12', daysOpen: '4', health: <HealthBadge status="healthy" /> },
        { jobId: <JobIdLink id="2345-6789" />, applicants: '3', daysOpen: '12', health: <HealthBadge status="low" /> },
        { jobId: <JobIdLink id="3456-7890" />, applicants: '24', daysOpen: '2', health: <HealthBadge status="strong" /> },
      ]} />
      <AIResponseTable breadcrumb={['Talent Pipeline', 'Applicant Quality & Readiness']} title="Applicants" columns={[
        { key: 'name', label: 'Applicant Name' }, { key: 'role', label: 'Role Applied For' },
        { key: 'stage', label: 'Stage' }, { key: 'availability', label: 'Availability' }, { key: 'blockers', label: 'Blockers' },
      ]} rows={[
        { name: <span className="font-semibold text-[#1e293b]">Sarah Jenkins</span>, role: 'RN - ICU', stage: <StageBadge stage="New" />, availability: 'Immediate', blockers: <BlockerText text="None" /> },
        { name: <span className="font-semibold text-[#1e293b]">Michael Chen</span>, role: 'RN - ER', stage: <StageBadge stage="Review" />, availability: '2 Weeks', blockers: <BlockerText text="License Exp" /> },
      ]} />
      <AIResponseTable breadcrumb={['Talent Pipeline', 'Re-engagement Opportunities']} title="Re-Engagement Candidates" columns={[
        { key: 'name', label: 'Candidate Name' }, { key: 'source', label: 'Source' },
        { key: 'prevRole', label: 'Previous Role' }, { key: 'lastActive', label: 'Last Active' }, { key: 'action', label: 'Suggested Next Action' },
      ]} rows={[
        { name: <span className="font-semibold text-[#1e293b]">Robert Taylor</span>, source: 'Former Contingent Worker', prevRole: 'RN - ICU', lastActive: '3 months ago', action: <ActionLink text="New ICU Opening" /> },
        { name: <span className="font-semibold text-[#1e293b]">Lisa Wang</span>, source: 'Past Applicant', prevRole: 'Surgical Tech', lastActive: '6 months ago', action: <ActionLink text="Surgical Tech Travel" /> },
      ]} />
    </div>
  </Section>
</div>

{/* ┌─────────────────────────────────────────────────────────────┐
   │  3. LC COMPOSITE COMPONENTS                                  │
   └─────────────────────────────────────────────────────────────┘ */}
<div id="composites" style={{ scrollMarginTop: 24 }} className="space-y-10 border-t border-[#e5e7eb] pt-10">
  <h2 className="text-xl font-bold text-[#393839]">LC Composite Components</h2>

  {/* Compass AI */}
  <div id="composite-compass-ai" style={{ scrollMarginTop: 24 }} className="space-y-6">
    <h3 className="text-lg font-semibold text-[#393839]">Compass AI</h3>

    {/* Conversation Window (chat area) */}
    <Section id="composite-conversation-window" title="Conversation Window" description="Right panel of the Compass AI drawer showing the active chat thread with messages and input.">
      <div className="flex flex-col h-[450px] bg-white">
        <div className="px-6 py-4 border-b border-[#e5e7eb] flex items-center justify-between">
          <h3 className="text-base font-semibold text-[#1e293b]">New Chat \u2013 Review Applicant Pipeline</h3>
          <span className="text-[#9ca3af] cursor-pointer">:</span>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          <ConversationBubble role="user" content="Find ICU RN jobs at Dartmouth Health." />
          <ConversationBubble role="assistant" content={
            <div className="space-y-2">
              <p>Got it! Here are some of the latest ICU RN openings:</p>
              <ul className="list-disc ml-5 space-y-1 text-sm">
                <li>Registered Nurse \u2013 ICU (Full Time, Nights)<br /><span className="text-xs text-[#6b7280]">Dartmouth Hitchcock \u2014 Lebanon, NH</span><br /><span className="text-xs">$38\u2013$54/hr | 3x12s</span></li>
                <li>ICU RN \u2013 Per Diem<br /><span className="text-xs text-[#6b7280]">Alice Peck Day Memorial \u2014 Lebanon, NH</span><br /><span className="text-xs">$45/hr | Flexible</span></li>
              </ul>
            </div>
          } />
        </div>
        <div className="px-6 pb-4"><PromptInput /></div>
      </div>
    </Section>

    {/* Conversation List Panel */}
    <Section id="composite-conversation-list" title="Conversation List Panel" description="Left panel with search, filters, new chat button, and conversation list.">
      <div className="h-[400px]">
        <ChatHistory items={[
          { id: '1', title: 'ICU night shift fill rate analysis', excerpt: 'Based on the data, ICU night shifts have a 68% fill rate...', product: 'MC', productColor: '#7c3aed', timestamp: '1 week ago' },
          { id: '2', title: 'ICU night shift fill rate analysis', excerpt: 'Based on the data, ICU night shifts have a 68% fill rate...', product: 'FWP', productColor: '#2876d3', timestamp: '1 week ago' },
          { id: '3', title: 'ICU night shift fill rate analysis', excerpt: 'Based on the data, ICU night shifts have a 68% fill rate...', product: 'Talent', productColor: '#059669', timestamp: '1 week ago' },
        ]} activeItemId="1" />
      </div>
    </Section>

    {/* Compass AI Drawer */}
    <Section id="composite-compass-drawer" title="Compass AI Drawer" description="Full drawer layout: ChatHistory (left) + Conversation Window (right).">
      <div className="flex h-[550px]">
        <div className="w-[280px] shrink-0 border-r border-[#e5e7eb]">
          <ChatHistory items={[
            { id: '1', title: 'ICU night shift fill rate analysis', excerpt: 'Based on the data, ICU night shifts have a 68% fill rate...', product: 'MC', productColor: '#7c3aed', timestamp: '1 week ago' },
            { id: '2', title: 'ICU night shift fill rate analysis', excerpt: 'Based on the data, ICU night shifts have a 68% fill rate...', product: 'FWP', productColor: '#2876d3', timestamp: '1 week ago' },
          ]} activeItemId="1" />
        </div>
        <div className="flex-1 flex flex-col bg-white">
          <div className="px-6 py-4 border-b border-[#e5e7eb]"><h3 className="text-base font-semibold text-[#1e293b]">New Chat \u2013 Review Applicant Pipeline</h3></div>
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            <ConversationBubble role="user" content="Find ICU RN jobs at Dartmouth Health." />
            <ConversationBubble role="assistant" content={
              <div className="space-y-2">
                <p>Got it! Here are ICU RN openings at Dartmouth Health:</p>
                <ul className="list-disc ml-5 space-y-1 text-sm">
                  <li>Registered Nurse \u2013 ICU (Full Time, Nights)<br /><span className="text-xs text-[#6b7280]">Dartmouth Hitchcock \u2014 Lebanon, NH</span><br /><span className="text-xs">$38\u2013$54/hr | 3x12s | Sign-on bonus</span></li>
                </ul>
              </div>
            } />
          </div>
          <div className="mx-6 mb-3 px-4 py-2 bg-[#eef2ff] rounded-lg text-sm text-[#2876d3]">
            <span className="font-medium underline cursor-pointer">Log in</span> to save results or upload your resume.
          </div>
          <div className="px-6 pb-6"><PromptInput /></div>
        </div>
      </div>
    </Section>

    {/* Chat Flow */}
    <Section id="composite-chat-flow" title="Chat Flow Composition" description="Complete conversation: quick action \u2192 AI workflow card \u2192 user selects \u2192 data table \u2192 follow-ups.">
      <div className="flex h-[900px]">
        <div className="w-[72px] shrink-0"><SideNavigation products={sideNavProducts} activeProductId="compass-ai" onProductClick={() => {}} /></div>
        <div className="flex-1 bg-white overflow-y-auto">
          <div className="max-w-2xl mx-auto py-8 px-6 space-y-6">
            <div className="text-center text-xs text-[#9ca3af] mb-2">User selected &quot;Manage Talent Pipeline&quot;</div>
            <ConversationBubble role="user" content="I want to manage the talent pipeline." />
            <ConversationBubble role="assistant" content="What area would you like to focus on?" />
            <div className="ml-2">
              <AIWorkflowCard heading="TalentPipelineWorkflow" subheading="What would you like to review?" options={[
                { id: 'open-roles', icon: 'file-text', iconColor: '#7c3aed', title: 'Open Roles', description: 'Review volume and pipeline health for all active job orders.' },
                { id: 'quality', icon: 'users', iconColor: '#2876d3', title: 'Applicant Quality & Readiness', description: 'Review applicant qualifications, completion statues, and risk flags.' },
                { id: 're-engagement', icon: 'user-check', iconColor: '#059669', title: 'Re-engagement Opportunities', description: 'Identify high-quality past candidates for current and future roles.' },
              ]} />
            </div>
            <ConversationBubble role="user" content="Show me Open Roles" />
            <ConversationBubble role="assistant" content="Here are your current open roles:" />
            <div className="ml-2">
              <AIResponseTable breadcrumb={['Talent Pipeline', 'Open Roles']} title="Open Roles" columns={[
                { key: 'jobId', label: 'JOB ID' }, { key: 'applicants', label: 'APPLICANT COUNT' },
                { key: 'daysOpen', label: 'DAYS OPEN' }, { key: 'health', label: 'PIPELINE HEALTH' },
              ]} rows={[
                { jobId: <JobIdLink id="1234-5678" />, applicants: '12', daysOpen: '4', health: <HealthBadge status="strong" /> },
                { jobId: <JobIdLink id="2345-6789" />, applicants: '8', daysOpen: '12', health: <HealthBadge status="low" /> },
              ]} />
            </div>
            <div className="ml-2">
              <AIFollowUpPrompts label="SUGGESTED PROMPTS FOR JOB 2345-6789" prompts={[
                'Analyze why Job 2345-6789 has low applicant volume',
                'Find me top 3 candidates for Job 2345-6789',
              ]} />
            </div>
          </div>
          <div className="sticky bottom-0 bg-white border-t border-[#e5e7eb] px-6 py-4">
            <div className="max-w-2xl mx-auto"><PromptInput placeholder="Ask a follow-up question..." /></div>
          </div>
        </div>
      </div>
    </Section>
  </div>

  {/* Home Dashboard */}
  <div id="composite-home" style={{ scrollMarginTop: 24 }} className="space-y-6">
    <h3 className="text-lg font-semibold text-[#393839]">Home Dashboard</h3>
    <Section id="composite-home-dashboard" title="Full Page Composition" description="AppHeader + SideNavigation + PageHeader + WidgetCards assembled together.">
      <div className="flex flex-col h-[620px]">
        <AppHeader variant="authenticated" />
        <div className="flex flex-1 overflow-hidden">
          <SideNavigation products={sideNavProducts} activeProductId={activeProduct} onProductClick={setActiveProduct} />
          <main className="flex-1 overflow-y-auto bg-[#f8faff]">
            <PageHeader title="Home" onPrintClick={() => {}} />
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#393839]">FWP</h3>
                <p className="text-xs text-[#6b7280]">Memorial Health System</p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
                  <WidgetCard icon="job-orders" title="Job Orders" metrics={[{ label: 'Order Approvals', value: 2 }, { label: 'Submissions for Review', value: 12 }, { label: 'Assignments Ending', value: 12 }]} />
                  <WidgetCard icon="staff-pool" title="Staff Pool" metrics={[{ label: 'Agreements Pending', value: 3 }, { label: 'Credential Steps Pending', value: 3 }, { label: 'Expiring Documents', value: 0 }]} />
                  <WidgetCard icon="timecards" title="Timecards" metrics={[{ label: 'Time Approvals', value: 2 }, { label: 'Time Segment Disputed', value: 1 }]} />
                  <WidgetCard icon="invoices" title="Invoices" metrics={[{ label: 'Invoice Approvals', value: 2 }, { label: 'Invoice Pending Payment', value: 2 }]} />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Section>
  </div>

  {/* Modals */}
  <div id="composite-modals" style={{ scrollMarginTop: 24 }} className="space-y-6">
    <h3 className="text-lg font-semibold text-[#393839]">Modals</h3>

    <Section id="composite-explore-modal" title="ExplorePromptsModal" description="Categorized AI prompt suggestions across 4 domains.">
      <div className="bg-[#f3f4f6] p-6">
        <div className="bg-white rounded-2xl shadow-lg max-w-3xl mx-auto overflow-hidden">
          <div className="px-8 pt-8 pb-4 text-center border-b border-[#e5e7eb]">
            <h2 className="text-2xl font-bold text-[#1e293b]">Explore AI Capabilities</h2>
            <p className="text-sm text-[#6b7280] mt-2 max-w-md mx-auto">Use Compass AI to analyze hiring performance and improve outcomes.</p>
          </div>
          <div className="p-8 grid grid-cols-2 gap-6">
            {[
              { icon: 'graph-growth' as const, color: '#059669', title: 'Hiring Performance & Fill Rates', prompts: ['Why are our open orders taking longer to fill?', 'Which roles are currently at risk of not filling?', 'How does our fill rate compare to market benchmarks?'] },
              { icon: 'talent' as const, color: '#7c3aed', title: 'Talent Marketplace Insights', prompts: ['Which specialties have the strongest candidate supply?', 'Where are we losing candidates in the pipeline?'] },
              { icon: 'timecards' as const, color: '#059669', title: 'Flexible Workforce Optimization', prompts: ['Show current utilization rate across facilities', 'Which shifts are hardest to fill?'] },
              { icon: 'invoices' as const, color: '#dc2626', title: 'Cost & Operational Insights', prompts: ['Analyze spend trends over the last 90 days', 'Compare vendor performance by fill rate'] },
            ].map((cat) => (
              <div key={cat.title} className="bg-[#f9fafb] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <LCIcon name={cat.icon} size={20} style={{ color: cat.color }} />
                  <h3 className="text-[15px] font-semibold text-[#1e293b]">{cat.title}</h3>
                </div>
                <div className="space-y-2">
                  {cat.prompts.map((prompt) => (
                    <div key={prompt} className="px-3 py-2 text-sm text-[#4b5563] bg-white border border-[#e5e7eb] rounded-lg">{prompt}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>

    <Section id="composite-widget-modal" title="WidgetLibraryModal" description="Widget picker modal with product filter, section headers, and 'Add Widget' cards.">
      <div className="bg-[#f3f4f6] p-6">
        <div className="bg-white rounded-2xl shadow-lg max-w-2xl mx-auto overflow-hidden">
          <div className="px-6 pt-6 pb-4 border-b border-[#e5e7eb]">
            <h2 className="text-xl font-bold text-[#1e293b]">Widget Library</h2>
            <p className="text-sm text-[#6b7280] mt-1">Choose widgets to customize your dashboard</p>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-[10px] font-bold text-[#6b7280] uppercase tracking-wider">Product Filter:</span>
              {['All', 'Talent Marketplace', 'FWP'].map((p, i) => (
                <span key={p} className={`px-3.5 py-1.5 text-xs font-medium rounded-lg border ${i === 0 ? 'bg-[#1e293b] text-white border-[#1e293b]' : 'text-[#4b5563] border-[#e5e7eb]'}`}>{p}</span>
              ))}
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#eef2ff] flex items-center justify-center"><LCIcon name="reports" size={18} className="text-[#4f46e5]" /></div>
              <h3 className="text-lg font-bold text-[#1e293b]">Analytics</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Order Analytics', desc: 'Visual overview of job orders with trends and key metrics.' },
                { title: 'Cost Summary', desc: 'Client spend on vendors by Job Title, Location, Service Line.' },
              ].map((w) => (
                <div key={w.title} className="border border-[#e5e7eb] rounded-xl p-5 flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-[15px] font-bold text-[#1e293b]">{w.title}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded shrink-0 uppercase" style={{ backgroundColor: '#2876d318', color: '#2876d3' }}>FWP</span>
                  </div>
                  <p className="text-xs text-[#6b7280] leading-relaxed flex-1">{w.desc}</p>
                  <button className="mt-4 w-full py-2.5 bg-[#2876d3] text-white text-sm font-semibold rounded-xl">+ Add Widget</button>
                </div>
              ))}
            </div>
          </div>
          <div className="px-6 py-4 border-t border-[#e5e7eb] flex justify-end">
            <span className="px-5 py-2 text-sm font-medium text-[#4b5563] border border-[#e5e7eb] rounded-lg cursor-pointer">Close</span>
          </div>
        </div>
      </div>
    </Section>
  </div>
</div>

{/* ┌─────────────────────────────────────────────────────────────┐
   │  4. SHADCN COMPONENTS                                        │
   └─────────────────────────────────────────────────────────────┘ */}
<div id="shadcn" style={{ scrollMarginTop: 24 }} className="space-y-10 border-t border-[#e5e7eb] pt-10">
  <h2 className="text-xl font-bold text-[#393839]">shadcn Components</h2>
  <p className="text-sm text-[#6b7280]">Standard shadcn/ui primitives used across the platform with LC color overrides.</p>

  <Section id="shadcn-button" title="Button" description="shadcn Button with LC Blue (#2876D3) primary. Primary, secondary, ghost, outline, icon-only, and size variants.">
    <div className="p-6 bg-white space-y-4">
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
  </Section>

  <Section id="shadcn-input" title="Input" description="shadcn Input with LC border and focus ring (#2876D3).">
    <div className="p-6 bg-white space-y-3 max-w-md">
      <input type="text" placeholder="Default input" className="w-full px-4 py-2.5 text-sm border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2876d3] focus:border-[#2876d3] placeholder:text-[#9ca3af]" />
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af]" />
        <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2.5 text-sm border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2876d3] placeholder:text-[#9ca3af]" />
      </div>
      <p className="text-[10px] text-[#9ca3af]">Maps to: shadcn/ui Input. Focus ring uses #2876D3.</p>
    </div>
  </Section>

  <Section id="shadcn-dialog" title="Dialog / Modal" description="shadcn Dialog with LC styling. 16px radius, centered, backdrop overlay.">
    <div className="p-6 bg-[#f3f4f6]">
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
  </Section>

  <Section id="shadcn-dropdown" title="Dropdown Menu" description="shadcn DropdownMenu with LC styling.">
    <div className="p-6 bg-white">
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
  </Section>

  <Section id="shadcn-tooltip" title="Tooltip" description="shadcn Tooltip with LC dark style (#1E293B).">
    <div className="p-6 bg-white flex items-center gap-8">
      <div className="relative inline-flex flex-col items-center">
        <div className="px-3 py-1.5 bg-[#1e293b] text-white text-xs rounded-lg mb-2">Save changes</div>
        <div className="w-2 h-2 bg-[#1e293b] rotate-45 -mt-3.5 mb-1.5" />
        <button className="px-4 py-2 bg-[#2876d3] text-white text-sm font-medium rounded-lg">Hover me</button>
      </div>
      <p className="text-[10px] text-[#9ca3af]">Maps to: shadcn/ui Tooltip. Dark bg (#1E293B), white text, 8px radius.</p>
    </div>
  </Section>
</div>

{/* ┌─────────────────────────────────────────────────────────────┐
   │  5. ICONS                                                     │
   └─────────────────────────────────────────────────────────────┘ */}
<div id="icons" style={{ scrollMarginTop: 24 }} className="space-y-10 border-t border-[#e5e7eb] pt-10">
  <h2 className="text-xl font-bold text-[#393839]">Icons</h2>

  <Section id="icons-custom" title="LiquidCompass Custom Icons" description="22 custom SVG icons for product areas and actions. All inherit currentColor.">
    <div className="p-6 bg-white">
      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-11 gap-4">
        {([
          'compass-ai', 'home', 'talent', 'fwp', 'mc', 'messages',
          'job-orders', 'staff-pool', 'timecards', 'invoices', 'reports',
          'sparkles', 'cart-full', 'graph-growth', 'idea-search',
          'check-box', 'chevron-right-circle', 'settings', 'printer',
          'pencil', 'history', 'filter',
        ] as LCIconName[]).map((name) => (
          <div key={name} className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 rounded-lg bg-[#f3f4f6] flex items-center justify-center text-[#4b5563]">
              <LCIcon name={name} size={22} />
            </div>
            <span className="text-[10px] text-[#9ca3af] text-center leading-tight">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </Section>

  <Section id="icons-lucide" title="Lucide Icons Used" description="shadcn/Lucide icons used across LiquidCompass components.">
    <div className="p-6 bg-white">
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
  </Section>
</div>

{/* ┌─────────────────────────────────────────────────────────────┐
   │  6. STATES & BEHAVIOR                                        │
   └─────────────────────────────────────────────────────────────┘ */}
<div id="states" style={{ scrollMarginTop: 24 }} className="space-y-10 border-t border-[#e5e7eb] pt-10">
  <h2 className="text-xl font-bold text-[#393839]">States & Behavior</h2>

  {/* Interaction States */}
  <Section id="states-interaction" title="Interaction States" description="Button, nav, card, input, and table row states.">
    <div className="p-6 bg-white space-y-6">
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
  </Section>

  {/* Empty / Loading / Error */}
  <Section id="states-empty" title="Empty, Loading & Error States" description="Skeleton loaders, empty states, and error handling patterns.">
    <div className="p-6 bg-white space-y-6">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">WidgetCard Skeleton</p>
        <div className="bg-white border border-[#e5e7eb] rounded-xl p-5 w-[260px] animate-pulse">
          <div className="flex items-center gap-2 mb-4"><div className="w-5 h-5 rounded bg-[#e5e7eb]" /><div className="h-4 w-24 rounded bg-[#e5e7eb]" /></div>
          <div className="space-y-3">
            <div className="flex justify-between"><div className="h-3 w-28 rounded bg-[#e5e7eb]" /><div className="h-3 w-8 rounded bg-[#e5e7eb]" /></div>
            <div className="flex justify-between"><div className="h-3 w-32 rounded bg-[#e5e7eb]" /><div className="h-3 w-6 rounded bg-[#e5e7eb]" /></div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">Table Skeleton</p>
        <div className="border border-[#e5e7eb] rounded-xl overflow-hidden max-w-lg animate-pulse">
          <div className="bg-[#f9fafb] px-4 py-3 flex gap-6"><div className="h-3 w-20 rounded bg-[#d1d5db]" /><div className="h-3 w-16 rounded bg-[#d1d5db]" /><div className="h-3 w-24 rounded bg-[#d1d5db]" /></div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="px-4 py-4 flex gap-6 border-t border-[#f3f4f6]">
              <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-[#e5e7eb]" /><div className="h-3 w-20 rounded bg-[#e5e7eb]" /></div>
              <div className="h-3 w-14 rounded bg-[#e5e7eb]" /><div className="h-3 w-20 rounded bg-[#e5e7eb]" />
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">Empty Table</p>
        <div className="border border-[#e5e7eb] rounded-xl overflow-hidden max-w-lg">
          <div className="bg-[#f9fafb] px-4 py-3 flex gap-6">
            <span className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Name</span>
            <span className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Status</span>
          </div>
          <div className="py-12 text-center">
            <div className="w-12 h-12 rounded-full bg-[#f3f4f6] mx-auto mb-3 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
            </div>
            <p className="text-sm font-medium text-[#393839]">No results found</p>
            <p className="text-xs text-[#9ca3af] mt-1">Try adjusting your filters</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">Inline Error</p>
        <div className="border border-[#fecaca] rounded-xl overflow-hidden max-w-lg bg-[#fef2f2]">
          <div className="py-8 text-center px-4">
            <div className="w-10 h-10 rounded-full bg-[#fee2e2] mx-auto mb-3 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#dc2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
            </div>
            <p className="text-sm font-medium text-[#dc2626]">Failed to load data</p>
            <p className="text-xs text-[#9ca3af] mt-1">Something went wrong. Please try again.</p>
            <button className="mt-3 px-4 py-1.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#393839] font-medium hover:bg-[#f9fafb]">Retry</button>
          </div>
        </div>
      </div>
    </div>
  </Section>
</div>

          </main>
        </div>
      </div>

      {/* Modals (functional) */}
      <ExplorePromptsModal open={exploreOpen} onClose={() => setExploreOpen(false)} categories={[]} />
      <WidgetLibraryModal open={widgetOpen} onClose={() => setWidgetOpen(false)} widgets={[]} />
    </>
  )
}
