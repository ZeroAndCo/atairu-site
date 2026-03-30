

# Add Heritage Tags and Update Filters

## Problem
The CSV has two classification dimensions that should work together:
1. **Type of Heritage** (column B): Mundial/UNESCO, Material, Imaterial, Natural, Cultural da Humanidade -- already implemented as `category`
2. **Tags** (column E): "Cultural", "Natural", or "Natural e Cultural" -- NOT implemented yet

The Heritage page currently only filters by category (type). Tags are missing from the data model and UI entirely.

## CSV Tag Distribution
- Most heritages are tagged "Cultural" (~230+)
- Some are tagged "Natural" (~20)
- A few are tagged "Natural e Cultural" (e.g., Pampulha, Paraty)

## Plan

### Step 1: Update Data Model (`src/data/heritages.ts`)
- Add `HeritageTag` type: `'cultural' | 'natural'`
- Add `tags: HeritageTag[]` to the `Heritage` interface
- Update all ~251 entries with correct tags from the CSV:
  - "Cultural" → `['cultural']`
  - "Natural" → `['natural']`  
  - "Natural e Cultural" → `['cultural', 'natural']`
- Add helpers: `getAllTags()`, `getHeritagesByTag(tag)`

### Step 2: Update Translation Files
Add tag labels in `pt.json`, `en.json`, `es.json`:
- `tags.cultural` / `tags.natural` / `tags.all`

### Step 3: Update Heritage Page (`src/pages/Heritage.tsx`)
- Add a secondary filter row (tag chips) below the category tabs
- State: `activeTag: HeritageTag | 'all'`
- Filter logic: combine category AND tag filters with search
- Display tag badges on each heritage card (small outlined badges below category badge)

### Step 4: Update Map Page (`src/pages/Map.tsx`)
- Add tag filter dropdown alongside existing category/state/region filters
- Include tag info in map popup details

## Technical Notes
- Tags are orthogonal to categories: a "Material" heritage is typically "Cultural", a "Natural" category item is typically "Natural", but there are crossovers
- The filter should be AND logic: selecting category "Material" + tag "Cultural" shows only Material heritages tagged Cultural

