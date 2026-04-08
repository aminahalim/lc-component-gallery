import type { Meta, StoryObj } from '@storybook/react-vite'
import { LCIcon } from '../components/icons/LCIcon'

const meta = {
  title: 'LC Composites/Modals',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj

export const ExplorePromptsModal: Story = {
  name: 'Explore Prompts Modal',
  render: () => (
    <div className="bg-[#f3f4f6] p-6 min-h-[600px]">
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
  ),
}

export const WidgetLibraryModal: Story = {
  name: 'Widget Library Modal',
  render: () => (
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
  ),
}
