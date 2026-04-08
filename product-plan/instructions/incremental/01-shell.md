# Milestone 1: Shell

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** None

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

Set up the design tokens, application header, side navigation, and page layout — the persistent chrome that wraps all pages.

## What to Implement

### 1. Design Tokens

Configure your styling system with these tokens:

- See `product-plan/design-system/tokens.css` for CSS custom properties
- See `product-plan/design-system/tailwind-colors.md` for Tailwind configuration
- See `product-plan/design-system/fonts.md` for Google Fonts setup

**Key tokens:**
- Font: Montserrat (400, 500, 600, 700)
- Primary: #2876D3
- Header BG: #011021
- AI Gradient: #7A40F2 → #9CB3FF

### 2. AppHeader

Copy `AppHeader.tsx` from `product-plan/sections/lc-component-gallery/components/layout/`.

5 variants:
- **Default** — Logo + Login dropdown (unauthenticated)
- **WithAI** — Logo + Compass AI button + Login dropdown
- **Authenticated** — Logo + Compass AI button + User avatar + Settings
- **MinimalAuth** — Logo + User avatar + Settings
- **FullSearch** — Logo + search bar + AI icon + User + Settings

**Wire up:**
- `onLoginClick` → your auth flow
- `onCompassAIClick` → navigate to Compass AI
- `onSettingsClick` → navigate to settings
- `onSearchSubmit` → your search implementation

### 3. SideNavigation

Copy `SideNavigation.tsx` from `product-plan/sections/lc-component-gallery/components/layout/`.

6 product tabs: Compass AI, Home, Talent, FWP, MC, Messages.
Active product gets a blue left border and blue text. Products with sub-items (Talent, FWP, MC) expand to show sub-navigation when active.

**Wire up:**
- `activeProduct` → derive from current route
- `onProductClick` → navigate to product route
- `onSubItemClick` → navigate to sub-item route

### 4. Page Layout

Create a layout that composes AppHeader + SideNavigation + page content:

```
┌──────────────────────────────────┐
│           AppHeader              │
├────────┬─────────────────────────┤
│  Side  │                         │
│  Nav   │     Page Content        │
│  72px  │                         │
│        │                         │
└────────┴─────────────────────────┘
```

### 5. PageHeader

Copy `PageHeader.tsx` — renders at the top of each page content area with title, optional breadcrumb, and optional action buttons.

## Files to Reference

- `product-plan/design-system/` — Design tokens
- `product-plan/sections/lc-component-gallery/components/layout/` — Shell components
- `product-plan/sections/lc-component-gallery/components/icons/` — LCLogo and LCIcon

## Done When

- [ ] Design tokens configured (Montserrat font, LC color palette)
- [ ] AppHeader renders with logo, nav items, and user info
- [ ] SideNavigation renders with 6 products, active state works
- [ ] Sub-navigation expands for Talent, FWP, MC
- [ ] Page layout wraps content with header + sidebar
- [ ] Navigation links route correctly
