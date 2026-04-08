# Test Specs: LiquidCompass Component Gallery

These test specs are **framework-agnostic**. Adapt to your testing setup (Jest, Vitest, Playwright, Cypress, React Testing Library, etc.).

---

## AppHeader Tests

### Renders all variants
- [ ] Default: shows logo and "Login" button
- [ ] WithAI: shows logo, "Compass AI" gradient button, and "Login" button
- [ ] Authenticated: shows logo, "Compass AI" button, user avatar "SJ", name "Sarah Johnson", role "Administrator", settings icon
- [ ] MinimalAuth: shows logo, user avatar, name, settings icon — no AI button
- [ ] FullSearch: shows logo, search input with placeholder, AI icon-only button, user info, settings

### Interactions
- [ ] Login button calls `onLoginClick`
- [ ] Compass AI button calls `onCompassAIClick`
- [ ] Settings icon calls `onSettingsClick`
- [ ] FullSearch: pressing Enter in search field calls `onSearchSubmit` with input value

---

## SideNavigation Tests

### Renders correctly
- [ ] Shows 6 product icons with labels: Compass AI, Home, Talent, FWP, MC, Messages
- [ ] Active product has blue left border and blue text
- [ ] Inactive products have gray text

### Active states
- [ ] Compass AI active: shows compose + clock sub-icons below
- [ ] Home active: blue border, no sub-items
- [ ] Talent active: expands sub-items (Applicants, Staff Pool, Job Orders)
- [ ] FWP active: expands sub-items (Per Diem, Travel, etc.)
- [ ] MC active: expands sub-items
- [ ] Messages active: blue border, no sub-items

### Interactions
- [ ] Clicking a product calls `onProductClick` with product id
- [ ] Clicking a sub-item calls `onSubItemClick` with sub-item id

---

## QuickActionCard Tests

### Renders correctly
- [ ] Shows colored icon, label text, and chevron-right
- [ ] 4 cards render in a 2x2 grid

### Interactions
- [ ] Hover: border darkens, subtle shadow appears
- [ ] Click: calls `onClick`

---

## PromptInput Tests

### Renders correctly
- [ ] Shows textarea with placeholder text
- [ ] Shows Attach button, Explore Prompts button, Send icon
- [ ] Send button is disabled when input is empty

### Interactions
- [ ] Typing text enables the Send button
- [ ] Clicking Send calls `onSend` with input value and clears the field
- [ ] Pressing Enter (without Shift) calls `onSend`
- [ ] Pressing Shift+Enter adds a newline (doesn't send)
- [ ] Clicking Attach calls `onAttach`
- [ ] Clicking Explore Prompts calls `onExplorePrompts`

### Disabled state
- [ ] When `disabled=true`, textarea is not editable
- [ ] All buttons show disabled styling (opacity 50%)

---

## ConversationBubble Tests

### User bubble
- [ ] Dark background (#1E293B), white text, right-aligned
- [ ] Shows user message text

### AI bubble
- [ ] Light background (#F3F4F6), dark text, left-aligned
- [ ] Shows AI response text
- [ ] Supports JSX children for rich content

---

## AIWorkflowCard Tests

### Renders correctly
- [ ] Shows heading and subheading
- [ ] Shows 2-3 option rows with icon, title, description, chevron
- [ ] Options have distinct colored icons

### Interactions
- [ ] Hover on option: border changes, shadow appears
- [ ] Click on option: calls `onOptionClick` with option object

---

## AIResponseTable Tests

### Renders correctly
- [ ] Shows breadcrumb path (e.g., "Talent Pipeline > Open Roles")
- [ ] Shows title
- [ ] Renders table headers and data rows
- [ ] Job ID links are blue and clickable
- [ ] Health badges show colored indicators (Strong = green, Low = red)

---

## DataTable Tests

### Renders correctly
- [ ] Shows column headers with labels
- [ ] Renders data rows with correct values
- [ ] Sortable columns show sort indicator

### Interactions
- [ ] Clicking sortable header calls `onSort` with column key
- [ ] Clicking row calls `onRowClick` with row data
- [ ] Checkbox selects/deselects row (when `selectable=true`)
- [ ] Header checkbox toggles all rows

### Empty state
- [ ] When `data=[]`, no rows render (tbody is empty)

---

## WidgetCard Tests

### Renders correctly
- [ ] Shows icon and title in header
- [ ] Shows metric rows with label and value
- [ ] Metric labels are blue and clickable

### Interactions
- [ ] Clicking a metric label calls `onMetricClick` with metric object

### Empty state
- [ ] When `metrics=[]`, shows empty message

---

## Badge Tests

### Renders all variants
- [ ] Success: green text, green-tinted background
- [ ] Warning: amber text, amber-tinted background
- [ ] Error: red text, red-tinted background
- [ ] Info: blue text, blue-tinted background
- [ ] Purple: purple text, purple-tinted background
- [ ] Neutral: gray text, gray background
- [ ] Outline: border only, no fill

---

## FilterBar Tests

### Renders correctly
- [ ] Shows all filter tab labels
- [ ] Active tab is visually distinct (bold, underline or background)

### Interactions
- [ ] Clicking a tab calls `onFilterChange` with filter value
- [ ] Active tab updates to match selected filter

---

## Modal Tests (ExplorePromptsModal, WidgetLibraryModal)

### Renders correctly
- [ ] When `open=true`, modal overlay and content are visible
- [ ] When `open=false`, nothing renders
- [ ] Modal shows title and content

### Interactions
- [ ] Clicking close button calls `onClose`
- [ ] Clicking overlay backdrop calls `onClose`
- [ ] Pressing Escape key calls `onClose`

---

## Accessibility Checks

- [ ] All interactive elements are keyboard accessible (Tab, Enter, Space)
- [ ] Focus is visible on all interactive elements
- [ ] Modals trap focus when open
- [ ] Form inputs have associated labels or aria-labels
- [ ] Status badges use color + text (not color alone) for meaning
- [ ] Images and icons have appropriate alt text or aria-hidden
