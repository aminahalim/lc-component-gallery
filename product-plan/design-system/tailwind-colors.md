# Tailwind Color Configuration

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `lc-blue` | `#2876D3` | Primary actions, links, active nav states |
| `lc-navy` | `#011021` | App header background |
| `lc-purple` | `#7A40F2` | Compass AI gradient start |
| `lc-purple-light` | `#9CB3FF` | Compass AI gradient end |
| `lc-green` | `#89D815` | Logo accent (compass needle) |
| `lc-sky` | `#72B3FF` | Logo accent (compass ring) |

## Neutral Scale

| Token | Hex | Usage |
|-------|-----|-------|
| `slate-800` | `#1E293B` | Darkest text, conversation bubbles (user) |
| `text-primary` | `#393839` | Primary body text |
| `text-secondary` | `#4B5563` | Secondary/description text |
| `text-muted` | `#6B7280` | Muted text, placeholders |
| `text-disabled` | `#9CA3AF` | Disabled text, labels |
| `border-light` | `#D1D5DB` | Subtle borders |
| `border` | `#E5E7EB` | Standard borders |
| `surface` | `#F3F4F6` | Raised surfaces, conversation bubbles (AI) |
| `sidebar-bg` | `#F8FAFF` | Sidebar background |
| `card-bg` | `#F9FAFB` | Card backgrounds |

## Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `success` | `#059669` | Active, healthy, approved |
| `warning` | `#D97706` | Review, pending, caution |
| `error` | `#DC2626` | Blocked, expired, low health |
| `info` | `#2876D3` | Applied, informational |
| `purple` | `#7C3AED` | New badge, MC product accent |

## Usage Examples

```
Primary button:     bg-[#2876D3] hover:bg-[#1e63b5] text-white
Ghost button:       border border-[#e5e7eb] text-[#2876d3] hover:bg-[#f8faff]
AI button:          bg-gradient-to-r from-[#7A40F2] to-[#9CB3FF] text-white rounded-3xl
Active nav:         border-l-[3px] border-l-[#2876D3] text-[#2876D3]
Success badge:      bg-[#ecfdf5] text-[#059669]
Warning badge:      bg-[#fef3c7] text-[#d97706]
Error badge:        bg-[#fef2f2] text-[#dc2626]
```
