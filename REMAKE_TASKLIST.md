# YGO Duel Academy Deck Builder Remake Task List

## Purpose

This file is a build-oriented companion to `REMAKE_BLUEPRINT.md`.

Use it as the execution checklist for the next implementation session in a new repo.

## Working Rules

- Build this in a new repository, not in the legacy capstone repo.
- Keep the app demo-only.
- Do not implement authentication or authorization.
- Do not add a backend for v1 unless a concrete blocker appears.
- Keep one canonical editor state.
- Derive trunk availability from owned collection minus deck allocation.

## Deliverable Summary

The finished MVP should include:

- seeded card catalog
- seeded demo collection
- multiple editable demo decks
- split-screen deck builder UI
- selected card detail panel
- persistent filters and sorting
- persistent local state across refreshes
- reset demo data control

## Repo Setup

## 1. Create the new project

- Create a new repo for the remake.
- Scaffold with React + TypeScript + Vite.
- Install chosen state library:
  - Zustand preferred
  - Redux Toolkit acceptable
- Install any supporting packages:
  - `zod`
  - optional `clsx`
  - optional icon library

### Acceptance

- App boots locally.
- TypeScript is configured.
- Basic linting/formatting is in place.

## 2. Establish project structure

Create initial folders:

```txt
src/
  app/
  components/
  data/
  domain/
  store/
  types/
```

### Acceptance

- Folder structure exists.
- Entry files compile cleanly.

## Data Layer

## 3. Prepare the card catalog

- Extract or build the intended 1200-card dataset.
- Normalize field names.
- Decide on stable `cardId`.
- Add a `sortIndex` or equivalent default ordering field.
- Save as static JSON.

Suggested file:

- `src/data/cards.json`

### Acceptance

- Catalog file is valid JSON.
- All cards have stable ids.
- All required fields are present.

## 4. Create seed demo data

Create:

- starter collection
- starter decks
- optional default selected deck id

Suggested files:

- `src/data/starter-collection.json`
- `src/data/starter-decks.json`

### Acceptance

- Demo collection loads cleanly.
- At least one starter deck is usable.
- Starter decks do not violate configured rules.

## 5. Add runtime validation

- Define Zod schemas for cards, collection, and deck data.
- Validate seed files during initialization.
- Fail loudly if data is malformed.

### Acceptance

- Invalid data surfaces a clear error.
- Valid data hydrates successfully.

## Types And Domain

## 6. Define core TypeScript models

Add types for:

- `Card`
- `Deck`
- `DeckZone`
- `FilterState`
- `SortMode`
- `UiState`
- `EditorState`

### Acceptance

- Types are centralized.
- The app compiles with no `any` leakage in core state.

## 7. Implement domain utilities

Create domain helpers for:

- deck count calculations
- available trunk quantity
- zone totals
- per-card limits
- deck validity checks
- filters
- sorting

Suggested files:

- `src/domain/deck-rules.ts`
- `src/domain/quantity.ts`
- `src/domain/card-filters.ts`
- `src/domain/card-sort.ts`

### Acceptance

- Domain helpers are pure functions.
- No React dependencies inside domain code.

## State Management

## 8. Implement the editor store

State should include:

- normalized catalog
- owned collection
- decks
- current deck id
- selected card id
- filter state
- sort state
- active zone
- focused pane
- persistence metadata

### Acceptance

- Store initializes from seed data.
- Store can be read from any component.

## 9. Add editor actions

Implement actions for:

- initialize demo state
- reset demo state
- create deck
- rename deck
- delete deck
- duplicate deck
- set current deck
- add card to deck
- remove card from deck
- set selected card
- set active zone
- set filters
- reset filters
- set sort modes

### Acceptance

- Actions mutate only the canonical state.
- No component manually recalculates authoritative counts.

## 10. Add derived selectors

Implement selectors for:

- current deck
- selected card
- available trunk cards
- visible trunk cards
- visible deck cards
- deck summaries
- can-add and can-remove checks

### Acceptance

- Trunk count always reflects `owned - allocated`.
- Adding/removing cards updates both panes correctly via derivation.

## Persistence

## 11. Add local persistence

- Persist editable state to `localStorage`.
- Version the state shape.
- Add migration hooks for future revisions.
- Store under a single namespaced key.

### Acceptance

- Refresh preserves decks and UI context.
- Version mismatch does not corrupt the app.

## 12. Add reset behavior

- Add `Reset Demo Data`.
- Clear stored state and restore seeds.
- Confirm the action in UI.

### Acceptance

- Reset reliably returns app to starter state.

## UI Build

## 13. Build the app shell

Create the initial top-level screens:

- splash / landing
- deck select
- deck builder

### Acceptance

- User can enter the app from splash.
- User can reach the deck builder with a seeded deck.

## 14. Build the deck builder layout

The deck builder should include:

- header
- trunk pane
- deck pane
- card detail panel

### Acceptance

- Layout is stable on desktop.
- Core panes render seeded data.

## 15. Build the header

Header should show:

- current deck name
- current zone
- main / side / fusion counts
- navigation controls
- reset or export controls

### Acceptance

- Header updates when deck/zone changes.

## 16. Build the trunk pane

Trunk pane should show:

- visible card list
- available quantity
- filter and sort status
- selected row state

### Acceptance

- Selecting a trunk card updates detail panel.
- Quantities render correctly.

## 17. Build the deck pane

Deck pane should show:

- active zone tabs
- visible zone cards
- allocated quantities
- total cards in zone

### Acceptance

- Zone switching works.
- Removing from deck updates derived trunk availability.

## 18. Build the selected card detail panel

Show:

- image
- name
- type
- attribute
- race
- level
- atk/def
- effect text
- owned quantity
- deck quantity by zone

### Acceptance

- Detail panel stays in sync with selected card.

## Interactions

## 19. Implement selection behavior

- Clicking a card selects it.
- Selection is shared across panes where appropriate.
- Fallback behavior is defined when the selected card is filtered out.

### Acceptance

- No stale selection bugs.

## 20. Implement add/remove interactions

Start simple:

- add one copy
- remove one copy

Optional later:

- add/remove by larger increments
- double-click interactions
- keyboard shortcuts

### Acceptance

- User cannot exceed owned quantity.
- User cannot create negative counts.

## 21. Implement deck management UI

Add:

- create deck
- rename deck
- duplicate deck
- delete deck
- switch deck

### Acceptance

- Current deck fallback behavior is defined when deleting the active deck.

## Filters And Sorting

## 22. Implement trunk filters

Start with:

- text search
- card type groups
- level bands
- attribute
- race

### Acceptance

- Filters update visible trunk cards predictably.
- Filter state persists.

## 23. Implement trunk sorting

Start with:

- default
- name
- level
- atk
- def
- type

### Acceptance

- Sorting updates the visible list.
- Sort state persists.

## 24. Implement deck filters and deck sorting

Mirror trunk behavior where useful.

### Acceptance

- Deck pane can be filtered and sorted independently.

## Polish And Game Feel

## 25. Add persistent UI context

Persist:

- current deck
- active zone
- selected card
- filter state
- sort state
- scroll offsets if feasible

### Acceptance

- Refresh keeps the editor feeling continuous.

## 26. Improve visual direction

Aim for:

- strong split-screen hierarchy
- retro game-inspired framing
- intentional typography
- compact, readable lists
- clear selected state
- useful hover/focus states

### Acceptance

- UI does not feel like generic admin CRUD.

## 27. Add quality-of-life features

Optional for MVP+:

- import/export demo state JSON
- duplicate current deck
- zone-specific counts in detail panel
- deck validity banner
- quick clear filter control

### Acceptance

- Features do not compromise the core state model.

## Testing Checklist

## 28. Manual interaction testing

Verify:

- fresh load initializes correctly
- refresh restores state
- add/remove card flow works repeatedly
- trunk quantity always matches derived availability
- deck zone totals remain correct
- create/rename/delete deck works
- switching decks preserves each deck’s contents
- selected card panel updates correctly
- filters and sorting persist after refresh
- reset demo data restores starter state

## 29. Edge case testing

Verify:

- adding beyond owned quantity is blocked
- adding beyond per-card limit is blocked
- deleting the last remaining deck is handled intentionally
- filtering away the selected card does not break the UI
- empty states render cleanly

## Nice-To-Have Technical Tasks

## 30. Add unit tests for domain logic

Prioritize tests for:

- quantity derivation
- zone totals
- per-card limits
- filter functions
- sorting functions

## 31. Add snapshot or component tests sparingly

Focus on:

- critical pane rendering
- detail panel rendering
- deck management modals

## Non-Goals Checklist

Do not add in v1:

- auth
- sessions
- user accounts
- Flask backend
- relational database
- cloud sync
- live remote card API

## Suggested Build Order For The Next Session

1. Scaffold the new repo.
2. Add types and seed data.
3. Build the editor store.
4. Build selectors and quantity math.
5. Build the deck builder shell.
6. Render trunk and deck panes.
7. Implement add/remove interactions.
8. Implement deck management.
9. Implement filters and sorting.
10. Add persistence and reset.
11. Add visual polish.
12. Run manual verification against the checklist above.

## Final Reminder

If implementation gets messy, return to the core rule:

There is only one source of truth for owned cards and one source of truth for deck allocations.

Everything else is a derived view.
