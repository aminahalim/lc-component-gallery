# LiquidCompass Component Gallery

## For Developers: Getting Components Into Your Codebase

Copy the `product-plan/` folder into your project. Everything you need is there:

```
product-plan/
├── sections/lc-component-gallery/
│   └── components/          ← COPY THESE into your project
│       ├── layout/           (AppHeader, SideNavigation, PageHeader)
│       ├── data-display/     (WidgetCard, MetricCard, JobCard, DataTable)
│       ├── compass-ai/       (PromptInput, ConversationBubble, ChatHistory, etc.)
│       ├── forms-feedback/   (FilterBar, Badge, Pill, modals)
│       ├── icons/            (LCIcon, LCLogo)
│       └── index.ts          (barrel exports)
├── design-system/            ← Design tokens
│   ├── tokens.css            (CSS custom properties)
│   ├── tailwind-colors.md    (color reference)
│   └── fonts.md              (Montserrat setup)
├── data-shapes/              ← TypeScript interfaces
│   └── overview.ts
├── instructions/             ← Implementation guides
└── prompts/                  ← Ready-to-paste prompts for coding agents
```

### Quick Start

1. Copy `product-plan/sections/lc-component-gallery/components/` into your `src/components/lc/` (or wherever)
2. Add Montserrat font (see `product-plan/design-system/fonts.md`)
3. Install the one dependency: `npm install lucide-react`
4. Import and use:

```tsx
import { AppHeader, SideNavigation, WidgetCard } from '@/components/lc'
```

### Using the Implementation Prompts

If you're using a coding agent (Claude, Cursor, etc.):

1. Open `product-plan/prompts/one-shot-prompt.md`
2. Copy/paste into your agent
3. Point it at the `product-plan/` folder
4. Answer its clarifying questions about your stack

## Viewing the Gallery

To run the interactive component gallery locally:

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000` — browse all components with the sidebar TOC.

## What's in the Gallery

| Section | Components |
|---------|-----------|
| **Layout** | AppHeader (5 variants), SideNavigation (interactive), PageHeader (2 variants) |
| **Data Display** | WidgetCard, MetricCard, JobCard, DataTable + AvatarCell + StatusCell |
| **Compass AI** | PromptInput, ConversationBubble, ChatHistory, QuickActionCard, SuggestedPrompt, AIWorkflowCard, AIResponseTable, AIFollowUpPrompts, ExplorePromptsModal |
| **Forms** | FilterBar, Badge (7 variants), Pill, WidgetLibraryModal |
| **Icons** | 22 custom LC SVG icons, LiquidCompass logo |

Plus: design system foundations, shadcn component demos, interaction states, empty/loading/error states, and a full Compass AI chat flow composition.
