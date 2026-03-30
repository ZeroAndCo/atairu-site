

# Update Heritage Data: Categories, Descriptions, and Classifications

## Summary
Replace the current ~40 heritage items with ~300 from the CSV, add "Cultural da Humanidade" as a 5th category, auto-translate to EN/ES, and update category descriptions site-wide.

## Scope Analysis

The CSV contains approximately 300 heritage entries across 5 categories:
- **Category 1 - Mundial/UNESCO**: ~27 entries (lines 2-27)
- **Category 2 - Material**: ~96 entries (lines 29-147)
- **Category 3 - Imaterial**: ~106 entries (lines 149-292)
- **Category 4 - Natural**: ~15 entries (lines 294-308)
- **Category 5 - Cultural da Humanidade**: ~7 entries (lines 310-316)

**Key challenge**: ~80 entries have only a URL as their description (e.g., `http://portal.iphan.gov.br/...`). Scraping 80+ URLs in real-time is not feasible. Instead, I will use the AI Gateway script to generate brief placeholder descriptions based on the heritage name, city, and state for URL-only entries.

## Implementation Steps

### Step 1: Update Type System and Category Config
- Add `'cultural-humanity'` to `HeritageCategory` type in `src/data/heritages.ts`
- Add icon, color, and badge mappings for the new category
- Add a new icon import (e.g., `Globe2` or `Heart`) for the category

### Step 2: Update Translation Files (pt.json, en.json, es.json)
- Add `categories.cultural-humanity` with name and description in all 3 languages
- Update existing category descriptions to use the richer text from the "Tipo de Patrimônio" CSV:
  - **Mundial/UNESCO**: "Sítios reconhecidos pela UNESCO por seu valor universal excepcional. Pode ser Cultural, Natural ou ambos..."
  - **Material**: "Bens tangíveis como edifícios históricos, monumentos e centros urbanos..."
  - **Imaterial**: "Expressões culturais vivas como danças, manifestações, celebrações..."
  - **Natural**: "Parques nacionais, reservas e áreas de preservação ambiental..."
  - **Cultural da Humanidade**: "Abrange práticas, representações, expressões, conhecimentos e técnicas..."

### Step 3: Generate Heritage Data (~300 entries)
- Use the AI Gateway script to batch-process the CSV and generate:
  - Clean heritage IDs (slugified names)
  - Trilingual names (pt from CSV, en/es auto-translated)
  - Trilingual descriptions (pt from CSV or AI-generated placeholder for URL-only, en/es auto-translated)
  - Category mapping: "Mundial | UNESCO" → `'world'`, "Material" → `'material'`, "Imaterial" → `'intangible'`, "Natural" → `'natural'`, "Cultural da Humanidade" → `'cultural-humanity'`
  - Region inference from state names
  - Approximate coordinates (from city/state)
  - UNESCO flag (true for category 1 items and some category 5 items)
- Write the result as the new `src/data/heritages.ts`

### Step 4: Update UI Components
- **Heritage.tsx**: Add the 5th tab for "Cultural da Humanidade" with appropriate icon and badge color
- **Map.tsx**: Add the 5th category to filters, legend, and marker icons
- **Index.tsx**: Update category cards on homepage to show all 5 categories
- **About.tsx**: Add "Cultural da Humanidade" to the heritage explanation section
- **BrazilMap.tsx**: No changes needed (region-based, not category-based)

### Step 5: Update Helper Functions
- Add `'cultural-humanity'` to `getCategoryColor`, `getCategoryIcon` mappings
- Ensure `getHeritagesByCategory` works with the new category

## Technical Details

- The heritage data file will grow significantly (~300 entries). Each entry has: id, trilingual name, category, region, state, city, coordinates, trilingual description, unesco flag
- For URL-only entries, I'll generate a 1-2 sentence description based on the heritage name and location using the AI gateway
- Coordinates will be approximate (city-level) for entries without precise location data
- Some entries span multiple states (e.g., "País Todo") — these will use a representative city/coordinate
- Duplicate entries between categories (e.g., Capoeira appears in both Imaterial and Cultural da Humanidade) will be handled by keeping both with different IDs

## Estimated Effort
This is a large data migration task. The bulk of the work is generating and formatting ~300 heritage entries with translations. Implementation will proceed in batches.

