

# Split Description into Description + Details with Modal

## Summary
Split each heritage's description into a short summary (shown on card) and details (shown in a modal dialog). The "View Details" button opens a modal instead of navigating to the map. The modal includes full details plus a "View on Map" button.

## Changes

### 1. Update Data Model (`src/data/heritages.ts`)
- Add `details: { pt: string; en: string; es: string }` to the `Heritage` interface
- Write a processing pass over all 251 entries to split descriptions:
  - First sentence → stays in `description`
  - Remaining text (second sentence onward, or text in parentheses) → moves to `details`
  - If only one sentence, `details` gets empty strings

### 2. Update Heritage Page (`src/pages/Heritage.tsx`)
- Add state: `selectedHeritage: Heritage | null`
- Change "View Details" button from `<Link>` to an `onClick` that sets `selectedHeritage`
- Add a `<Dialog>` at the bottom of the page that shows when `selectedHeritage` is set:
  - Heritage name, location, category/tag badges
  - Full description + details text
  - "View on Map" button that routes to `/map?heritage={id}`
  - Close button

### 3. Translation Keys
- Add `heritage.viewOnMap` label in all 3 locale files

## Technical Notes
- The split logic: find the first `.` followed by a space (or content inside parentheses at the end). Everything before is `description`, everything after is `details`.
- For entries with parenthetical content like `"Paisagem cultural... Patrimônio Mundial. (A cidade do Rio...)"`, the parenthetical part becomes details.
- Uses the existing `Dialog` component from `src/components/ui/dialog.tsx`.
- Cards show only the short `description` (line-clamped). Modal shows both description and details.

