# LiquidCompass Employer Platform — Complete Implementation Instructions

---

## About This Handoff

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Product requirements and user flow specifications
- Design system tokens (colors, typography)
- Sample data showing the shape of data components expect
- Test specs focused on user-facing behavior

**Your job:**
- Integrate these components into your application
- Wire up callback props to your routing and business logic
- Replace sample data with real data from your backend
- Implement loading, error, and empty states

The components are props-based — they accept data and fire callbacks. How you architect the backend, data layer, and business logic is up to you.

---

## Testing

Each section includes a `tests.md` file with UI behavior test specs. These are **framework-agnostic** — adapt them to your testing setup.

---

## Product Overview

LiquidCompass is a workforce management platform for healthcare employers featuring AI-powered insights, automation, and reporting. Key areas: Talent Pipeline, Flexible Work, Market & Spend Insights, and Task Automation — all unified through Compass AI.

**Design System:** Montserrat font, LC Blue (#2876D3), Navy header (#011021), AI gradient (#7A40F2 → #9CB3FF)

---

# Milestone 1: Shell

## Goal
Set up design tokens, AppHeader, SideNavigation, and page layout.

### Design Tokens
- Font: Montserrat (400, 500, 600, 700) — see `design-system/fonts.md`
- Colors: see `design-system/tokens.css` and `design-system/tailwind-colors.md`

### AppHeader
5 variants: Default, WithAI, Authenticated, MinimalAuth, FullSearch.
Wire up: `onLoginClick`, `onCompassAIClick`, `onSettingsClick`, `onSearchSubmit`.

### SideNavigation
6 products: Compass AI, Home, Talent, FWP, MC, Messages.
Active product has blue left border. Talent/FWP/MC have expandable sub-items.
Wire up: `activeProduct`, `onProductClick`, `onSubItemClick`.

### Page Layout
AppHeader (top, full width) + SideNavigation (left, 72px) + Page Content (remaining space).

### PageHeader
Title + optional breadcrumb + optional action buttons at top of each page.

### Done When
- [ ] Design tokens configured
- [ ] AppHeader renders with all variants
- [ ] SideNavigation with active states and sub-nav expansion
- [ ] Page layout wraps content correctly
- [ ] Routes connected to navigation

---

# Milestone 2: Component Library Integration

## Goal
Build out Home Dashboard, Compass AI chat, and data display views using the component library.

### Home Dashboard
- MetricCards across the top (key KPIs)
- WidgetCards per product area (FWP, Talent, MC) with metric links
- Customizable via WidgetLibraryModal

### Compass AI
- Landing: hero text + 4 QuickActionCards + PromptInput + SuggestedPrompts
- Chat: ConversationBubbles + AIWorkflowCard responses + AIResponseTable + AIFollowUpPrompts
- Full flow: user message → AI workflow card → user selects option → data table → follow-ups

### Data Display
- DataTable with sortable columns, AvatarCell, StatusCell
- FilterBar for view switching
- JobCard for job listing views
- Badge/Pill for status indicators

### Modals
- ExplorePromptsModal — categorized prompt library
- WidgetLibraryModal — widget picker for dashboard customization

### Empty / Loading / Error States
- Skeleton loaders (widget, table, metric card) during data fetch
- Empty state with icon + message when no data
- Error state with retry button on API failure

### Done When
- [ ] Home Dashboard with metrics and widgets
- [ ] Compass AI full conversation flow
- [ ] Data tables with sorting, filtering, avatars, badges
- [ ] Empty/loading/error states implemented
- [ ] All components styled with Montserrat + LC palette
