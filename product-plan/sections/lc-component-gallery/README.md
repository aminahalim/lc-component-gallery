# LiquidCompass Component Gallery

## Overview

Complete component library for the LiquidCompass Employer Platform, extracted from Figma designs. All components are props-driven, use Montserrat typography and the LC color palette, and are ready for integration into a React + Next.js codebase.

## Components by Category

### Layout
| Component | File | Description |
|-----------|------|-------------|
| AppHeader | `components/layout/AppHeader.tsx` | Global header with 5 variants (Default, WithAI, Authenticated, MinimalAuth, FullSearch) |
| SideNavigation | `components/layout/SideNavigation.tsx` | Left sidebar with 6 product tabs, expandable sub-navigation |
| PageHeader | `components/layout/PageHeader.tsx` | Page title bar with breadcrumb and action buttons |

### Data Display
| Component | File | Description |
|-----------|------|-------------|
| WidgetCard | `components/data-display/WidgetCard.tsx` | Dashboard card with icon, title, and clickable metric rows |
| MetricCard | `components/data-display/MetricCard.tsx` | Single KPI card with value, label, and trend |
| JobCard | `components/data-display/JobCard.tsx` | Job listing card with icons and metadata |
| DataTable | `components/data-display/DataTable.tsx` | Sortable/selectable table + AvatarCell, StatusCell helpers |

### Compass AI
| Component | File | Description |
|-----------|------|-------------|
| PromptInput | `components/compass-ai/PromptInput.tsx` | Chat input with attach, explore, send |
| ConversationBubble | `components/compass-ai/ConversationBubble.tsx` | User/AI message bubble |
| ChatHistory | `components/compass-ai/ChatHistory.tsx` | Scrollable chat thread |
| QuickActionCard | `components/compass-ai/QuickActionCard.tsx` | Landing page action card |
| SuggestedPrompt | `components/compass-ai/SuggestedPrompt.tsx` | Prompt chip row |
| AIWorkflowCard | `components/compass-ai/AIWorkflowCard.tsx` | AI structured response with options |
| AIResponseTable | `components/compass-ai/AIResponseTable.tsx` | Data table as AI response |
| AIFollowUpPrompts | `components/compass-ai/AIFollowUpPrompts.tsx` | Follow-up prompt suggestions |
| ExplorePromptsModal | `components/compass-ai/ExplorePromptsModal.tsx` | Categorized prompt library modal |

### Forms & Feedback
| Component | File | Description |
|-----------|------|-------------|
| FilterBar | `components/forms-feedback/FilterBar.tsx` | Tab-based filter control |
| Badge | `components/forms-feedback/Badge.tsx` | Status badge (7 variants) |
| Pill | `components/forms-feedback/Badge.tsx` | Compact tag/label |
| WidgetLibraryModal | `components/forms-feedback/WidgetLibraryModal.tsx` | Widget picker modal |

### Icons
| Component | File | Description |
|-----------|------|-------------|
| LCIcon | `components/icons/LCIcon.tsx` | 22 custom SVG product icons |
| LCLogo | `components/icons/LCLogo.tsx` | Liquid Compass wordmark |

## Design Decisions

- **Montserrat only** — Single typeface across all components
- **Custom SVG icons** — 6 sidebar nav icons are exact Figma SVGs, not from icon libraries
- **Props-based** — All components accept data and callbacks, no internal data fetching
- **LC-specific patterns** — Navigation, AI chat, and dashboard widgets are custom (not shadcn)
- **shadcn-compatible** — Button, Input, Dialog primitives can use shadcn with LC style overrides
