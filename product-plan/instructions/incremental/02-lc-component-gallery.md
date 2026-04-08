# Milestone 2: Component Library Integration

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Shell) complete

---

## About This Handoff

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Product requirements and user flow specifications
- Design system tokens (colors, typography)
- Sample data showing the shape of data components expect

**Your job:**
- Integrate these components into your application
- Wire up callback props to your routing and business logic
- Replace sample data with real data from your backend
- Implement loading, error, and empty states

The components are props-based — they accept data and fire callbacks. How you architect the backend, data layer, and business logic is up to you.

---

## Goal

Integrate the full LiquidCompass component library into your application, building out the Home Dashboard, Compass AI chat, and data display views.

## Overview

The component library provides everything needed to build the employer-facing UI: dashboard widgets, data tables, an AI-powered chat interface, form controls, and feedback elements.

**Key Functionality:**
- View a home dashboard with metric cards and widget cards per product area
- Use Compass AI to ask questions and receive structured workflow responses
- Browse data tables for candidates, job orders, timecards, and invoices
- Filter and search across all data views
- View job cards with status badges and pipeline health indicators

## Components Provided

Copy all components from `product-plan/sections/lc-component-gallery/components/`:

### Layout
- `AppHeader` — Global header (5 variants)
- `SideNavigation` — Left sidebar (6 product states)
- `PageHeader` — Page title with breadcrumb and actions

### Data Display
- `WidgetCard` — Dashboard card with icon, title, and metric rows
- `MetricCard` — Single KPI card with value and label
- `JobCard` — Job listing card with icons and metadata
- `DataTable` — Sortable, selectable data table with helper cells (AvatarCell, StatusCell)

### Compass AI
- `PromptInput` — Chat input with attach, explore prompts, and send
- `ConversationBubble` — User/AI message bubble
- `ChatHistory` — Scrollable chat thread container
- `QuickActionCard` — Landing page action card (4 options)
- `SuggestedPromptRow` — Prompt chip row below chat input
- `AIWorkflowCard` — Structured AI response with selectable options
- `AIResponseTable` — Data table rendered as AI response (with breadcrumb)
- `AIFollowUpPrompts` — Suggested follow-up prompts after AI response
- `ExplorePromptsModal` — Modal with categorized prompt library

### Forms & Feedback
- `FilterBar` — Tab-based filter control
- `Badge` — Status badges (7 color variants: success, warning, error, info, purple, neutral, outline)
- `Pill` — Compact tag/label pill
- `WidgetLibraryModal` — Widget picker for customizing dashboard

### Icons
- `LCIcon` — 22 custom product icons (SVG)
- `LCLogo` — Liquid Compass wordmark logo

## Expected User Flows

### Flow 1: Home Dashboard

1. User logs in and sees the Home Dashboard
2. Dashboard shows metric cards across the top (key KPIs)
3. Below metrics, widget cards show per-product summaries (FWP, Talent, MC)
4. User clicks a metric link in a widget to drill into that product area
5. **Outcome:** User navigates to the relevant product section with filtered data

### Flow 2: Compass AI Conversation

1. User clicks "Compass AI" in sidebar or the AI button in header
2. Landing page shows hero text, 4 quick action cards, prompt input, suggested prompts
3. User clicks "Manage Talent Pipeline" quick action
4. Chat opens with AI workflow card showing 3 options (Open Roles, Quality, Re-engagement)
5. User selects "Open Roles"
6. AI responds with data table showing job orders with pipeline health
7. Follow-up prompts appear below the table
8. User asks a follow-up question, AI responds with analysis
9. **Outcome:** User gets actionable workforce insights through conversation

### Flow 3: Data Table Browsing

1. User navigates to a product section (e.g., Talent → Candidates)
2. PageHeader shows section title and breadcrumb
3. FilterBar allows switching between views (e.g., All, Active, Pending)
4. DataTable shows rows with avatar cells, status badges, and sortable columns
5. User clicks a column header to sort
6. User clicks a row to view details
7. **Outcome:** User can browse, sort, and access detail views for any record

## Empty States

The gallery includes empty state designs. Implement for:
- **Dashboard with no data** — Show skeleton loading, then empty widget cards
- **Table with no results** — Show empty state with icon, message, and "adjust filters" hint
- **Chat with no history** — Show the landing page with quick actions and suggested prompts
- **Widget error** — Show error state with "Unable to load" message

## Testing

See `product-plan/sections/lc-component-gallery/tests.md` for UI behavior test specs.

## Files to Reference

- `product-plan/sections/lc-component-gallery/README.md` — Component overview
- `product-plan/sections/lc-component-gallery/tests.md` — UI behavior tests
- `product-plan/sections/lc-component-gallery/components/` — All React components
- `product-plan/design-system/` — Design tokens

## Done When

- [ ] Home Dashboard renders with metric cards and widget cards
- [ ] Compass AI landing page shows quick actions, prompt input, suggested prompts
- [ ] Compass AI chat supports full conversation flow (message → AI response → workflow card → table → follow-ups)
- [ ] Data tables render with sorting, avatars, status badges
- [ ] Filter bars switch between views
- [ ] Empty states display correctly when no data exists
- [ ] Loading skeletons show during data fetch
- [ ] Error states handle API failures gracefully
- [ ] All components use Montserrat font and LC color palette
