# LiquidCompass Employer Platform — Product Overview

## Summary

LiquidCompass is a workforce management platform for healthcare employers. It provides AI-powered insights, automation, and reporting to help employers manage talent pipelines, flexible work, market analytics, and task automation. The platform features Compass AI — a conversational interface that helps users analyze workforce data and take action.

## Planned Sections

1. **Component Gallery** — Complete design system and component library covering layout, data display, Compass AI, forms/feedback, and custom icons

## Product Entities

Key entities in the LiquidCompass platform:

- **Job Orders** — Open positions that need to be filled (specialty, location, shift, rate)
- **Candidates / Applicants** — Healthcare workers in the talent pipeline (name, specialty, status, compliance)
- **Timecards** — Work hours tracked for flexible/contingent workers
- **Invoices** — Billing records for staffing services
- **Staff Pool** — Available healthcare workers for assignment
- **Reports** — Analytics and market data

## Design System

**Colors:**
- Primary: `#2876D3` (LC Blue) — actions, links, active states
- AI Accent: `#7A40F2 → #9CB3FF` (gradient) — Compass AI elements
- Header: `#011021` (LC Navy) — app header background
- Neutrals: Slate scale from `#1E293B` to `#FFFFFF`

**Typography:**
- All text: Montserrat (weights: 400, 500, 600, 700)

**Semantic Colors:**
- Success: `#059669` — active, healthy, approved
- Warning: `#D97706` — review, pending, caution
- Error: `#DC2626` — blocked, expired, low health
- Info: `#2876D3` — applied, informational

## Implementation Sequence

Build this product in milestones:

1. **Shell** — Set up design tokens, AppHeader, SideNavigation, and page layout
2. **Component Library** — Integrate all UI components following the gallery as reference

Each milestone has a dedicated instruction document in `product-plan/instructions/`.
