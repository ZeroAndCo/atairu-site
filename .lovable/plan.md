
## Context

In addition to the **IPHAN/UNESCO World Heritage manual** (analyzed in the prior plan), Brazil has two more official visual systems for heritage that we should honor:

1. **Emblema do Patrimônio Cultural Brasileiro** (IPHAN, 2017) — a mandala/rosette of yellow, blue and green "petals" on a dark navy ground. Designed by Fabio Lopez, it is the official mark for any good recognized as Brazilian Cultural Heritage by IPHAN (covers material AND intangible). This is the right emblem for items that are tombados/registrados nationally but are **not** UNESCO-inscribed.
2. **Sinalização Turística (Contran / Guia Brasileiro de Sinalização Turística)** — the brown roadside tourist signs with a white square containing a black pictogram. There are dedicated pictograms for **Patrimônio Cultural** (two hands holding a colonial window) and **Patrimônio Natural** (two trees), among others. These are the icons drivers/visitors actually associate with heritage in Brazil.

So the full visual taxonomy on the site should reflect three official identities:
- **UNESCO World Heritage** → brown square + Olyff emblem (gold)
- **Patrimônio Cultural Brasileiro (IPHAN)** → mandala emblem on dark navy
- **Sinalização turística Contran** → brown tile + black-on-white pictogram (cultural / natural / etc.)

This plan supersedes and extends the previous one.

---

## Branch

Per the user's request, all work happens on a new branch:

- Branch name: `feat/heritage-visual-identity`
- Created from the current default branch
- All edits below committed there; PR opened against default at the end.

## 1. Asset library — official emblems and pictograms

Create `src/assets/heritage-marks/` and add SVG versions of each official mark, hand-built so they scale crisply and respect each manual's proportions. No raster downloads — we redraw in SVG to keep control of color tokens.

- `unesco-world-heritage.svg` — Olyff square-in-circle, trilingual ring "PATRIMÔNIO MUNDIAL · WORLD HERITAGE · PATRIMOINE MONDIAL", on Pantone 4695C brown.
- `iphan-patrimonio-cultural.svg` — the IPHAN mandala/rosette: concentric ring of "petals" alternating Pantone-style amarelo (#FFC72C), azul (#0AB6E6) and verde (#2EB872) on a dark navy ground (#0E2A38). Two variants: full (with wordmark "Patrimônio Cultural Brasileiro") and mark-only.
- `contran-cultural.svg` — brown tile (#6B3A1F) with white inner square containing the "duas mãos segurando janela colonial" pictogram in black.
- `contran-natural.svg` — same brown tile with the "duas árvores" pictogram.
- `contran-misto.svg` — brown tile with a combined pictogram (small tree + small monument) for entries tagged both cultural and natural.

Each SVG uses currentColor where possible and exposes CSS variables for the accent colors so we can tint per theme without re-exporting.

## 2. New shared component: `<HeritageMark />`

`src/components/heritage/HeritageMark.tsx` — chooses the right official mark for a heritage item:

```text
priority of marks (a heritage may carry several):
  1. UNESCO emblem     — if heritage.unesco === true
  2. IPHAN mandala     — if heritage.iphanRegistered === true (new field, see §4)
  3. Contran pictogram — always available as the contextual tourism sign
                         (cultural / natural / misto, picked from tags)
```

Props: `heritage`, `size` ("sm" | "md" | "lg"), `variant` ("stack" | "row" | "primary-only"). Renders one or more marks with `aria-label` taken from i18n.

Used in:
- Heritage card (corner overlay)
- Heritage modal header
- Map popup
- Future printable "placa"

## 3. Color system aligned to all three manuals

Update `src/index.css` and `tailwind.config.ts` to introduce officially-named tokens:

| Token | Hex (approx sRGB of Pantone) | Source | Use |
|---|---|---|---|
| `--unesco-brown` | `#6B3A1F` | Pantone 4695C | UNESCO emblem ground; Contran tourist sign tile |
| `--unesco-gold` | `#C9A227` | Pantone 871C | UNESCO emblem foreground; Cultural category accent |
| `--heritage-green` | `#3DA940` | Pantone 375C | Natural category accent; IPHAN mandala green |
| `--heritage-terracotta` | `#CB6843` | Pantone 167C | Misto (cultural + natural) accent |
| `--iphan-navy` | `#0E2A38` | IPHAN mandala ground | Cultural Brasileiro emblem ground |
| `--iphan-yellow` | `#FFC72C` | IPHAN mandala | Mandala petal |
| `--iphan-blue` | `#0AB6E6` | IPHAN mandala | Mandala petal |
| `--cool-gray-11` | `#3F3F3F` | Pantone Cool Gray 11C | Body text on heritage surfaces |

Existing `--gold`, `--forest`, `--terracotta`, `--navy` tokens remain as the site's general palette but are **rebased to these official values** so site chrome and heritage chips feel one and the same. The current purple used for `cultural-humanity` is removed.

## 4. Heritage data model — surface IPHAN status

Extend `Heritage` in `src/data/heritages.ts`:

```ts
iphanRegistered?: boolean;     // Bem tombado/registrado pelo IPHAN
iphanType?: 'material' | 'imaterial';  // Optional finer detail
```

Most existing entries are IPHAN-registered by definition (they all are tombados or registrados). Default `iphanRegistered: true` for every entry except those whose `category === 'world'` AND have no national tombamento record (rare). Concretely:

- `material` and `intangible` categories → `iphanRegistered: true`
- `world` and `cultural-humanity` → keep `unesco: true`; set `iphanRegistered` based on whether the site is also nationally protected (most are — e.g. Ouro Preto is both).
- `natural` → `iphanRegistered` only if the site has a tombamento (e.g. Lençóis Maranhenses is also a national park managed by ICMBio, not IPHAN-tombado — we'll leave it false).

This is a one-pass data edit; we add the field and set sensible defaults, with a TODO comment for entries needing manual verification.

## 5. Category/tag remap and badge system

Drop the previous "purple = humanity" idea. New chip system based on official colors:

| Category | Chip background | Chip text | Mark |
|---|---|---|---|
| `world` | `--unesco-brown` | white | UNESCO emblem |
| `cultural-humanity` | `--unesco-brown` | white | UNESCO emblem (variant: small "Humanidade" wordmark below) |
| `material` | `--unesco-gold` | `--cool-gray-11` | IPHAN mandala + Contran cultural pictogram |
| `intangible` | `--unesco-gold` outlined | `--unesco-gold` | IPHAN mandala + Contran cultural pictogram |
| `natural` | `--heritage-green` | white | Contran natural pictogram |

When tags = `['cultural', 'natural']` (Misto), an additional terracotta chip is shown labeled "Misto" with the misto pictogram.

Refactor `getCategoryBadgeColor` in `src/pages/Heritage.tsx` to read from these tokens instead of arbitrary Tailwind classes.

## 6. Apply across pages

- **`src/pages/Heritage.tsx`** — replace ad-hoc UNESCO gold badge with `<HeritageMark>`. Use the new chip colors. Card header strip becomes a quiet brown band when UNESCO, navy band when IPHAN-only, green band when Natural-only.
- **`src/pages/Map.tsx`** — pin colors:
  - UNESCO present → brown pin with gold dot
  - IPHAN cultural → gold pin
  - Natural → green pin
  - Misto → terracotta pin
  Popup uses the shared `<HeritageMark>` and the same chip system.
- **`src/components/HeritageCard.tsx`** — extracted shared card consumed by Heritage page and Map popup (Padronização principle from the manual).
- **`src/pages/Index.tsx`** — Heritage categories section: each category tile shows its representative mark (UNESCO emblem, IPHAN mandala, Contran pictogram) instead of an emoji.
- **`src/components/layout/Footer.tsx`** — add a credits line:
  > "Identidade visual baseada nas Orientações Técnicas para Sinalização do Patrimônio Mundial no Brasil (IPHAN/UNESCO, 2013), no emblema do Patrimônio Cultural Brasileiro (IPHAN, 2017) e no Guia Brasileiro de Sinalização Turística (Contran)."

## 7. Accessibility & exclusivity rules (from the manuals)

- All three marks render with `role="img"` and a localized `aria-label`.
- Marks are never combined with third-party logos in the same composition.
- Contrast: text on each chip is verified to meet WCAG AA (gold chip → use cool-gray-11 text, not white).
- The IPHAN mandala and UNESCO emblem keep a clear-space equal to the height of one petal / one square module respectively — encoded as padding in the SVG viewBox.

## 8. i18n updates

In `src/i18n/locales/{pt,en,es}.json`, add:

- `marks.unesco.label` → "Patrimônio Mundial UNESCO" / "UNESCO World Heritage" / "Patrimonio Mundial UNESCO"
- `marks.iphan.label` → "Patrimônio Cultural Brasileiro" / "Brazilian Cultural Heritage" / "Patrimonio Cultural Brasileño"
- `marks.contran.cultural` → "Patrimônio Cultural" (and translations)
- `marks.contran.natural` → "Patrimônio Natural" (and translations)
- Update category names to official wording (Patrimônio Cultural Material / Imaterial / Natural / Mundial / da Humanidade).

The UNESCO emblem ring text stays trilingual pt/fr/en (it is a fixed mark, never translated).

## 9. AGENTS.md note

Append a "Heritage visual identity" section documenting:
- Which mark applies when
- That brand colors are derived from Pantone values; do not freestyle them
- That the marks must never be recolored, rotated, or co-mingled with third-party logos

So future contributors don't accidentally regress.

---

## Files changed

- new: `src/assets/heritage-marks/{unesco-world-heritage,iphan-patrimonio-cultural,contran-cultural,contran-natural,contran-misto}.svg`
- new: `src/components/heritage/HeritageMark.tsx`
- new: `src/components/HeritageCard.tsx`
- edit: `src/index.css`, `tailwind.config.ts`
- edit: `src/data/heritages.ts` (add `iphanRegistered`, defaults)
- edit: `src/pages/Heritage.tsx`, `src/pages/Map.tsx`, `src/pages/Index.tsx`
- edit: `src/components/layout/Footer.tsx`
- edit: `src/i18n/locales/{pt,en,es}.json`
- edit: `AGENTS.md`

## Out of scope (follow-ups)

- Per-heritage printable "placa" PDF that mirrors the manual's interpretive sign layout.
- Pictograms for sub-themes (sítio arqueológico, paisagem cultural, etc.) — Contran has many; we'll start with cultural / natural / misto.
- Verifying IPHAN tombamento status for every entry by hand — initial defaults are heuristic; refine in a later content pass.

