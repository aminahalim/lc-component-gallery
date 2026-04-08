import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { ConversationBubble } from '../components/compass-ai/ConversationBubble'
import { ChatHistory } from '../components/compass-ai/ChatHistory'
import { PromptInput } from '../components/compass-ai/PromptInput'
import { SideNavigation } from '../components/layout/SideNavigation'
import { AIWorkflowCard } from '../components/compass-ai/AIWorkflowCard'
import { AIResponseTable, HealthBadge, JobIdLink } from '../components/compass-ai/AIResponseTable'
import { AIFollowUpPrompts } from '../components/compass-ai/AIFollowUpPrompts'

const chatItems = [
  { id: '1', title: 'ICU night shift fill rate analysis', excerpt: 'Based on the data, ICU night shifts have a 68% fill rate...', product: 'MC', productColor: '#7c3aed', timestamp: '1 week ago' },
  { id: '2', title: 'Talent pipeline review for Q2', excerpt: 'Looking at the current pipeline, we have 234 active candidates...', product: 'FWP', productColor: '#2876d3', timestamp: '1 week ago' },
  { id: '3', title: 'Cost comparison across vendors', excerpt: 'Comparing the top 5 vendors by fill rate and cost...', product: 'Talent', productColor: '#059669', timestamp: '2 weeks ago' },
]

const sideNavProducts = [
  { id: 'compass-ai', label: 'Compass\nAI', icon: 'compass-ai' as const, subItems: [{ id: 'new', icon: 'pencil' }, { id: 'history', icon: 'history' }] },
  { id: 'home', label: 'Home', icon: 'home' as const },
  { id: 'talent', label: 'Talent', icon: 'talent' as const },
  { id: 'fwp', label: 'FWP', icon: 'fwp' as const },
  { id: 'mc', label: 'MC', icon: 'mc' as const },
  { id: 'messages', label: 'Messages', icon: 'messages' as const },
]

const meta = {
  title: 'LC Composites/Compass AI',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj

export const ConversationWindow: Story = {
  name: 'Conversation Window',
  render: () => (
    <div className="flex flex-col h-[500px] bg-white">
      <div className="px-6 py-4 border-b border-[#e5e7eb]">
        <h3 className="text-base font-semibold text-[#1e293b]">New Chat – Review Applicant Pipeline</h3>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        <ConversationBubble role="user" content="Find ICU RN jobs at Dartmouth Health." />
        <ConversationBubble role="assistant" content={
          <div className="space-y-2">
            <p>Got it! Here are some of the latest ICU RN openings:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Registered Nurse – ICU (Full Time, Nights)<br /><span className="text-xs text-[#6b7280]">Dartmouth Hitchcock — Lebanon, NH</span><br /><span className="text-xs">$38–$54/hr | 3x12s</span></li>
              <li>ICU RN – Per Diem<br /><span className="text-xs text-[#6b7280]">Alice Peck Day Memorial — Lebanon, NH</span><br /><span className="text-xs">$45/hr | Flexible</span></li>
            </ul>
          </div>
        } />
      </div>
      <div className="px-6 pb-4"><PromptInput /></div>
    </div>
  ),
}

export const ConversationListPanel: Story = {
  name: 'Conversation List Panel',
  render: () => (
    <div style={{ height: 500 }}>
      <ChatHistory items={chatItems} activeItemId="1" />
    </div>
  ),
}

export const CompassAIDrawer: Story = {
  name: 'Compass AI Drawer',
  render: () => (
    <div className="flex h-[600px]">
      <ChatHistory items={chatItems} activeItemId="1" />
      <div className="flex-1 flex flex-col bg-white">
        <div className="px-6 py-4 border-b border-[#e5e7eb]">
          <h3 className="text-base font-semibold text-[#1e293b]">New Chat – Review Applicant Pipeline</h3>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          <ConversationBubble role="user" content="Find ICU RN jobs at Dartmouth Health." />
          <ConversationBubble role="assistant" content={
            <div className="space-y-2">
              <p>Got it! Here are ICU RN openings at Dartmouth Health:</p>
              <ul className="list-disc ml-5 space-y-1 text-sm">
                <li>Registered Nurse – ICU (Full Time, Nights)<br /><span className="text-xs text-[#6b7280]">Dartmouth Hitchcock — Lebanon, NH</span><br /><span className="text-xs">$38–$54/hr | 3x12s | Sign-on bonus</span></li>
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
  ),
}

export const ChatFlowComposition: Story = {
  name: 'Chat Flow (Full Thread)',
  render: () => (
    <div className="flex h-[900px]">
      <div className="w-[72px] shrink-0">
        <SideNavigation products={sideNavProducts} activeProductId="compass-ai" />
      </div>
      <div className="flex-1 bg-white overflow-y-auto">
        <div className="max-w-2xl mx-auto py-8 px-6 space-y-6">
          <div className="text-center text-xs text-[#9ca3af] mb-2">User selected "Manage Talent Pipeline"</div>
          <ConversationBubble role="user" content="I want to manage the talent pipeline." />
          <ConversationBubble role="assistant" content="What area would you like to focus on?" />
          <div className="ml-2">
            <AIWorkflowCard heading="TalentPipelineWorkflow" subheading="What would you like to review?" options={[
              { id: 'open-roles', icon: 'file-text', iconColor: '#7c3aed', title: 'Open Roles', description: 'Review volume and pipeline health for all active job orders.' },
              { id: 'quality', icon: 'users', iconColor: '#2876d3', title: 'Applicant Quality & Readiness', description: 'Review applicant qualifications and risk flags.' },
              { id: 're-engagement', icon: 'user-check', iconColor: '#059669', title: 'Re-engagement Opportunities', description: 'Identify high-quality past candidates.' },
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
  ),
}
