# YGO Duel Academy Deck Builder Remake Blueprint

## Goal

Recreate the deck builder experience inspired by the 2006 GBA game *Yu-Gi-Oh! GX: Duel Academy*, with emphasis on:

- split-screen deck editing
- fast card browsing
- persistent filters and sorting
- persistent deck state
- demo-only usage
- no authentication, authorization, or account system

This remake should treat the app as a self-contained deck editor simulator, not a traditional full-stack user product.

## Product Direction

### Core experience

The app should feel like a focused deck editor:

- left side: trunk / owned card collection
- right side: current deck
- lower or side panel: selected card detail
- top controls: deck zone summary, filter controls, sort controls, deck switching
- interaction loop: browse, inspect, filter, sort, add, remove, persist

### Scope constraints

- Use a fixed card pool of roughly 1200 cards, not the full Yu-Gi-Oh catalog.
- Use a single seeded demo profile only.
- Store all editable state client-side.
- No login flow.
- No signup flow.
- No backend required for v1.

### Success criteria

The remake is successful if it:

- reliably preserves deck and UI state across refreshes
- keeps trunk and deck quantities in sync without bugs
- supports quick filtering and sorting
- captures the feel of the original deck builder flow
- can be deployed as a static site

## Recommended Stack

- React
- TypeScript
- Vite
- Zustand or Redux Toolkit
- Zod for seed-data validation
- localStorage for v1 persistence
- IndexedDB only if localStorage becomes too limiting

### Recommendation

Use Zustand unless there is a strong reason to prefer Redux Toolkit.

Why:

- simpler setup
- good fit for app-state-heavy UI
- easy persistence middleware
- easier for a solo project than full Redux ceremony

Use Redux Toolkit if the implementation agent prefers stricter action/reducer structure.

## Architecture

### App model

The app should be centered on an `editor session`, not a `user`.

Use one canonical state tree:

1. card catalog
2. owned collection
3. saved demo decks
4. current deck
5. editor UI state

### Key principle

Do not store both trunk cards and deck cards as separate mutable sources of truth.

Instead:

- store owned card quantities once
- store deck allocations once
- derive trunk availability from `owned - allocated`

This prevents synchronization bugs.

## Proposed State Shape

```ts
type CardId = string;
type DeckId = string;
type DeckZone = "main" | "side" | "fusion";

type Card = {
  id: CardId;
  officialId: string;
  name: string;
  type: string;
  desc: string;
  atk?: number;
  def?: number;
  level?: number;
  race?: string;
  attribute?: string;
  archetype?: string;
  imageUrl?: string;
  imageSmallUrl?: string;
  sortIndex: number;
};

type CardCollection = Record<CardId, number>;

type DeckSlots = {
  main: Record<CardId, number>;
  side: Record<CardId, number>;
  fusion: Record<CardId, number>;
};

type Deck = {
  id: DeckId;
  name: string;
  slots: DeckSlots;
  createdAt: string;
  updatedAt: string;
};

type FilterState = {
  text: string;
  cardTypes: string[];
  attributes: string[];
  races: string[];
  levels: string[];
  atkRange?: [number, number] | null;
  defRange?: [number, number] | null;
  showOwnedOnly: boolean;
};

type SortMode =
  | "default"
  | "name-asc"
  | "name-desc"
  | "level-asc"
  | "level-desc"
  | "atk-asc"
  | "atk-desc"
  | "def-asc"
  | "def-desc"
  | "type";

type ScrollState = {
  trunkListOffset: number;
  deckListOffset: number;
};

type UiState = {
  selectedCardId: CardId | null;
  currentDeckId: DeckId;
  activeZone: DeckZone;
  focusedPane: "trunk" | "deck";
  trunkFilter: FilterState;
  trunkSort: SortMode;
  deckFilter: FilterState;
  deckSort: SortMode;
  filterModalOpen: boolean;
  sortModalOpen: boolean;
  scroll: ScrollState;
};

type EditorState = {
  catalog: Record<CardId, Card>;
  collection: CardCollection;
  decks: Record<DeckId, Deck>;
  ui: UiState;
  meta: {
    version: number;
    initialized: boolean;
    lastSavedAt: string | null;
  };
};
```

## Domain Rules

Implement domain rules in one central state layer, not inside components.

### Card ownership

- `collection[cardId]` = total owned copies
- trunk availability = owned copies minus copies currently allocated into the active deck

### Deck allocation

- cards in a deck are allocations of owned cards
- adding a card to a deck reduces visible trunk availability, but does not mutate the owned collection total
- removing a card from a deck increases visible trunk availability

### Counts

Derived helpers:

```ts
getDeckZoneCount(deck, zone)
getDeckCardCount(deck, cardId)
getTotalAllocatedCopies(deck, cardId)
getTrunkAvailableCount(collection, deck, cardId)
```

### Limits

Start with configurable limits:

```ts
const RULES = {
  mainMin: 40,
  mainMax: 60,
  sideMax: 15,
  fusionMax: 15,
  perCardLimit: 3,
};
```

Adjust these if the target game rules differ.

### Validation

The state layer should prevent:

- adding more copies than owned
- adding more than the per-card max
- exceeding zone limits
- negative counts
- deleting the currently selected deck without fallback behavior

## Derived Selectors

Selectors are critical. They should power the UI instead of duplicating logic in components.

### Required selectors

- `selectCurrentDeck()`
- `selectSelectedCard()`
- `selectDeckZoneCards(zone)`
- `selectDeckSummary()`
- `selectAvailableTrunkCards()`
- `selectFilteredTrunkCards()`
- `selectFilteredDeckCards()`
- `selectCanAddCard(cardId, zone)`
- `selectCanRemoveCard(cardId, zone)`
- `selectUnsavedChanges()`

### Important selector behavior

`selectAvailableTrunkCards()` should:

1. iterate the catalog
2. compute available quantity for each card
3. remove cards with zero available copies unless a debug mode says otherwise
4. apply filter state
5. apply sort mode
6. return a presentational list shape for rendering

## Store Actions

Use domain-focused actions, not component-specific actions.

### Core actions

- `initializeDemoState()`
- `resetDemoState()`
- `importDemoState(payload)`
- `exportDemoState()`

### Deck actions

- `createDeck(name)`
- `renameDeck(deckId, name)`
- `deleteDeck(deckId)`
- `duplicateDeck(deckId)`
- `setCurrentDeck(deckId)`

### Card actions

- `addCardToDeck(cardId, zone, amount = 1)`
- `removeCardFromDeck(cardId, zone, amount = 1)`
- `moveCardBetweenZones(cardId, fromZone, toZone, amount = 1)`
- `setSelectedCard(cardId | null)`

### UI actions

- `setFocusedPane("trunk" | "deck")`
- `setActiveZone(zone)`
- `setTrunkFilter(partialFilter)`
- `resetTrunkFilter()`
- `setTrunkSort(sortMode)`
- `setDeckFilter(partialFilter)`
- `resetDeckFilter()`
- `setDeckSort(sortMode)`
- `setFilterModalOpen(boolean)`
- `setSortModalOpen(boolean)`
- `setScrollOffsets(partialScrollState)`

## Persistence Strategy

### V1 persistence

Persist all editable state locally:

- decks
- current selected deck
- selected card
- filters
- sort modes
- active zone
- scroll offsets if practical

Store key:

```ts
const STORAGE_KEY = "ygo-da-deck-builder-demo-v1";
```

### Persistence rules

- seed initial state from bundled JSON on first load
- hydrate from storage on subsequent loads
- version persisted state
- add a migration path for future schema changes
- provide a visible `Reset Demo Data` control

### Optional export/import

Add these later if desired:

- export current state to JSON
- import a previously exported JSON snapshot

This would make the demo shareable without user accounts.

## Data Strategy

### Catalog source

Bundle the 1200-card dataset as static app data.

Suggested files:

- `src/data/cards.json`
- `src/data/starter-collection.json`
- `src/data/starter-decks.json`

### Validation

Validate seed files on app startup or build time using Zod.

### Data normalization

Normalize all catalog cards into:

```ts
Record<CardId, Card>
```

This will make selectors and lookups cheaper and simpler.

## Screen Blueprint

## 1. Splash / Landing

Purpose:

- explain the app
- enter demo mode immediately
- optionally allow reset/import/export

Content:

- title
- short explanation that this is a deck-builder demo inspired by the GBA game
- `Enter Deck Builder`
- optional `Reset Demo Data`

No auth controls.

## 2. Deck Select Screen

Purpose:

- choose among saved demo decks
- create, duplicate, rename, or delete a deck

Content:

- deck list
- deck summary counts
- `Open Deck`
- `Create Deck`
- `Duplicate`
- `Rename`
- `Delete`

This can be skipped if you prefer to open straight into the most recent deck.

## 3. Deck Builder Screen

Primary screen. This is the product.

### Layout

- top bar: current deck name, zone counts, navigation, reset/export
- left pane: trunk
- right pane: current deck zone
- bottom or side detail panel: selected card detail
- filter and sort controls near the lists, not buried

### Trunk pane

Must show:

- card name
- available count
- quick visual metadata
- current sort mode
- current filter state

### Deck pane

Must show:

- active zone: main / side / fusion
- cards in that zone
- quantity in zone
- total zone count

### Selected card panel

Must show:

- image
- name
- type
- attribute
- race
- level
- atk/def
- effect text
- owned count
- copies in current deck by zone

### Interaction expectations

- clicking a trunk card selects it
- add/remove actions should be available via buttons and double-click or keyboard shortcut if desired
- switching zones should not lose selection if the card still exists in another view
- filters and sort choices should persist between visits

## UI Behavior Recommendations

### Preserve editor context

The app should remember:

- current deck
- current zone
- selected card
- trunk filter
- trunk sort
- deck filter
- deck sort
- scroll offsets if possible

This persistence is part of the intended feel.

### Input design

Prefer fast, low-friction interactions:

- single click selects
- double click adds/removes
- keyboard support later
- modal only for advanced filter/sort settings

### Filter design

Start with:

- text search
- monster level bands
- spell
- trap
- normal
- effect
- fusion
- ritual
- attribute
- race

### Sort design

Start with:

- default/game order
- name
- level
- atk
- def
- type

## Component Structure

Suggested component layout:

```txt
src/
  app/
    App.tsx
    router.tsx
  components/
    deck-builder/
      DeckBuilderPage.tsx
      BuilderHeader.tsx
      TrunkPane.tsx
      DeckPane.tsx
      ZoneTabs.tsx
      CardList.tsx
      CardListRow.tsx
      CardDetailPanel.tsx
      FilterModal.tsx
      SortModal.tsx
    decks/
      DeckSelectPage.tsx
      DeckCard.tsx
      DeckFormModal.tsx
    home/
      SplashPage.tsx
  store/
    editor-store.ts
    selectors.ts
    actions.ts
    persistence.ts
    migrations.ts
  data/
    cards.json
    starter-collection.json
    starter-decks.json
  domain/
    deck-rules.ts
    card-filters.ts
    card-sort.ts
    quantity.ts
  types/
    cards.ts
    deck.ts
    ui.ts
```

## State Management Recommendations

### Keep components dumb

Components should:

- render props/selectors
- trigger store actions

Components should not:

- reimplement deck math
- manually sync trunk and deck counts
- own authoritative business state

### Keep business logic centralized

The following logic belongs in domain/store utilities:

- quantity calculations
- zone limits
- per-card limits
- filter evaluation
- sorting
- deck validation
- persistence/hydration

## MVP Build Plan

## Phase 1: Foundation

- scaffold React + TypeScript + Vite app
- load static card catalog
- define state types
- implement store
- implement persistence
- seed demo collection and starter decks

## Phase 2: Core editor

- build deck builder shell
- render trunk and deck panes
- implement selection
- implement add/remove card actions
- implement quantity sync via derived selectors

## Phase 3: Utility features

- deck switching
- create/rename/delete deck
- zone tabs
- deck summary counts
- card detail panel

## Phase 4: Filters and sorting

- trunk filtering
- trunk sorting
- deck filtering
- deck sorting
- persist filter and sort state

## Phase 5: Polish

- keyboard interactions
- scroll position persistence
- import/export state
- reset demo data
- visual polish to better evoke the GBA experience

## Non-Goals For V1

- online accounts
- multiplayer features
- cloud sync
- server-side persistence
- live external card API
- complete modern TCG support
- monetization/store features

## Risks To Avoid

### 1. Duplicated state

Do not keep:

- one mutable array for trunk
- another mutable array for deck
- another local component cache of counts

That is where synchronization bugs happen.

### 2. Component-owned business logic

Do not put quantity logic inside click handlers across multiple components.

### 3. Overbuilding backend concerns

Do not reintroduce:

- users
- auth
- sessions
- protected routes

They are unrelated to the product goal.

### 4. Full catalog creep

Do not expand beyond the intended card pool unless there is a clear reason.

## Suggested Implementation Order For The Next Agent

1. Scaffold the new app in a new repo.
2. Create typed domain models and seed data loaders.
3. Build the editor store with persistence.
4. Implement derived selectors for trunk availability and deck summaries.
5. Build the deck builder shell before any visual polish.
6. Wire add/remove interactions.
7. Add deck management.
8. Add filters and sorting.
9. Add reset/import/export.
10. Polish visuals and game feel.

## Definition Of Done

The remake is ready when:

- the app launches directly into a usable demo flow
- deck editing works with no auth
- trunk and deck stay in sync at all times
- the app persists state after refresh
- filters and sorting persist
- multiple demo decks can be created and managed
- the selected card detail panel updates correctly
- the UI feels intentional and game-inspired rather than generic CRUD

## Final Guidance

The heart of the remake is not backend complexity. It is deterministic editor state.

If the next implementation keeps:

- one source of truth
- derived trunk availability
- persistent UI state
- a focused deck-builder-first interface

then it will solve the exact problem that made the original capstone hard.
