import type { Meta, StoryObj } from '@storybook/react-vite'
import { AIResponseTable, HealthBadge, StageBadge, BlockerText, ActionLink, JobIdLink } from './AIResponseTable'

const meta = {
  title: 'Compass AI/AIResponseTable',
  component: AIResponseTable,
  tags: ['autodocs'],
} satisfies Meta<typeof AIResponseTable>

export default meta
type Story = StoryObj<typeof meta>

export const OpenRoles: Story = {
  args: {
    breadcrumb: ['Talent Pipeline', 'Open Roles'],
    title: 'Open Roles',
    columns: [
      { key: 'jobId', label: 'Job ID' },
      { key: 'applicants', label: 'Applicant Count', align: 'center' },
      { key: 'daysOpen', label: 'Days Open', align: 'center' },
      { key: 'health', label: 'Pipeline Health', align: 'center' },
    ],
    rows: [
      { jobId: <JobIdLink id="1234-5678" />, applicants: '12', daysOpen: '4', health: <HealthBadge status="healthy" /> },
      { jobId: <JobIdLink id="2345-6789" />, applicants: '3', daysOpen: '12', health: <HealthBadge status="low" /> },
      { jobId: <JobIdLink id="3456-7890" />, applicants: '24', daysOpen: '2', health: <HealthBadge status="strong" /> },
      { jobId: <JobIdLink id="4567-8901" />, applicants: '0', daysOpen: '18', health: <HealthBadge status="low" /> },
    ],
  },
}

export const ApplicantQuality: Story = {
  args: {
    breadcrumb: ['Talent Pipeline', 'Applicant Quality & Readiness'],
    title: 'Applicants',
    columns: [
      { key: 'name', label: 'Applicant Name' },
      { key: 'role', label: 'Role Applied For' },
      { key: 'stage', label: 'Stage' },
      { key: 'availability', label: 'Availability' },
      { key: 'blockers', label: 'Blockers' },
    ],
    rows: [
      { name: <span className="font-semibold text-[#1e293b]">Sarah Jenkins</span>, role: 'RN - ICU', stage: <StageBadge stage="New" />, availability: 'Immediate', blockers: <BlockerText text="None" /> },
      { name: <span className="font-semibold text-[#1e293b]">Michael Chen</span>, role: 'RN - ER', stage: <StageBadge stage="Review" />, availability: '2 Weeks', blockers: <BlockerText text="License Exp" /> },
    ],
  },
}

export const ReEngagement: Story = {
  args: {
    breadcrumb: ['Talent Pipeline', 'Re-engagement Opportunities'],
    title: 'Re-Engagement Candidates',
    columns: [
      { key: 'name', label: 'Candidate Name' },
      { key: 'source', label: 'Source' },
      { key: 'prevRole', label: 'Previous Role' },
      { key: 'lastActive', label: 'Last Active' },
      { key: 'action', label: 'Suggested Next Action' },
    ],
    rows: [
      { name: <span className="font-semibold text-[#1e293b]">Robert Taylor</span>, source: 'Former Contingent Worker', prevRole: 'RN - ICU', lastActive: '3 months ago', action: <ActionLink text="New ICU Opening" /> },
      { name: <span className="font-semibold text-[#1e293b]">Lisa Wang</span>, source: 'Past Applicant', prevRole: 'Surgical Tech', lastActive: '6 months ago', action: <ActionLink text="Surgical Tech Travel" /> },
    ],
  },
}
