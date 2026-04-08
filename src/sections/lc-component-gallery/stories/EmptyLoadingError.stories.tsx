import type { Meta, StoryObj } from '@storybook/react-vite'
import { LCIcon } from '../components/icons/LCIcon'

const meta = {
  title: 'States & Behavior/Empty, Loading & Error',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj

export const SkeletonLoading: Story = {
  name: 'Skeleton Loading',
  render: () => (
    <div className="p-8 space-y-6">
      <h2 className="text-xl font-bold text-[#393839]">Skeleton Loading</h2>
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
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">MetricCard Skeleton</p>
        <div className="flex gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="bg-white border border-[#e5e7eb] rounded-xl p-4 w-[160px] animate-pulse">
              <div className="h-3 w-16 rounded bg-[#e5e7eb] mb-3" />
              <div className="h-7 w-12 rounded bg-[#e5e7eb] mb-1" />
              <div className="h-2 w-20 rounded bg-[#e5e7eb]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}

export const EmptyStates: Story = {
  name: 'Empty States',
  render: () => (
    <div className="p-8 space-y-6">
      <h2 className="text-xl font-bold text-[#393839]">Empty States</h2>
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
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">Empty WidgetCard</p>
        <div className="bg-white border border-[#e5e7eb] rounded-xl p-5 w-[260px]">
          <div className="flex items-center gap-2 mb-4">
            <LCIcon name="job-orders" size={20} className="text-[#4b5563]" />
            <h3 className="text-[#393839] text-base font-semibold">Job Orders</h3>
          </div>
          <div className="py-6 text-center"><p className="text-xs text-[#9ca3af]">No metrics available</p></div>
        </div>
      </div>
    </div>
  ),
}

export const ErrorStates: Story = {
  name: 'Error States',
  render: () => (
    <div className="p-8 space-y-6">
      <h2 className="text-xl font-bold text-[#393839]">Error States</h2>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">Inline Error (Table)</p>
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
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">Widget Error</p>
        <div className="bg-white border border-[#fecaca] rounded-xl p-5 w-[260px]">
          <div className="flex items-center gap-2 mb-3">
            <LCIcon name="timecards" size={20} className="text-[#4b5563]" />
            <h3 className="text-[#393839] text-base font-semibold">Timecards</h3>
          </div>
          <div className="flex items-center gap-2 text-[#dc2626] text-xs">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" /></svg>
            <span>Unable to load metrics</span>
          </div>
        </div>
      </div>
    </div>
  ),
}
