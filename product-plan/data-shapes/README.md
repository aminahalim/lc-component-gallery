# UI Data Shapes

These types define the shape of data that the UI components expect to receive as props. They represent the **frontend contract** — what the components need to render correctly.

How you model, store, and fetch this data on the backend is an implementation decision. You may combine, split, or extend these types to fit your architecture.

## Key Interfaces

- **WidgetMetric** — Label + value pairs for dashboard widgets
- **WorkflowOption** — Selectable options in AI workflow cards
- **DataTableColumn** — Column definitions for data tables
- **ConversationMessage** — Chat message (user or AI)

## Per-Component Types

Each component file exports its own Props interface. See the component source files for full definitions.

## Combined Reference

See `overview.ts` for all data shape types aggregated in one file.
