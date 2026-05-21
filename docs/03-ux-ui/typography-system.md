# Typography System

---
title: Typography System & Specification
version: 1.0
audience: designer, frontend
last-updated: 2026-05-21
status: draft
cross-references:
  - docs/03-ux-ui/color-psychology.md
  - docs/03-ux-ui/trust-building-ux.md
  - docs/03-ux-ui/hni-communication-guidelines.md
---

## TL;DR

NWTR uses a four-font system — Inter for UI clarity, Satoshi for modern headings, Playfair Display for editorial luxury, and JetBrains Mono for financial precision. The type scale is mathematically derived, responsive via fluid clamp(), and optimized for scanning financial data at speed.

---

## 1. Design Philosophy

Typography is the single largest trust signal in a financial platform. Poorly set type suggests carelessness with details — a fatal signal when handling someone's capital. NWTR's typographic system prioritizes:

- **Scanability:** HNI clients don't read — they scan. Information hierarchy must be immediate.
- **Precision:** Financial figures demand pixel-perfect alignment and tabular consistency.
- **Authority:** Type should feel institutional without feeling dated.
- **Warmth:** Despite being a financial platform, warmth in editorial moments humanizes the brand.

---

## 2. Font Families

### Primary UI — Inter

| Property | Value |
|----------|-------|
| Family | `Inter, system-ui, -apple-system, sans-serif` |
| Weights | 400, 500, 600, 700 |
| Features | `'cv01', 'cv02', 'ss01', 'tnum'` |
| Source | Google Fonts / Self-hosted (WOFF2) |

**Rationale:** Inter is the industry standard for data-dense interfaces. Its tall x-height ensures readability at small sizes. Tabular number support (`tnum`) is critical for financial columns. The alternate character variants (`cv01`, `cv02`) provide a more distinctive lowercase 'a' and 'g' that prevent the "every SaaS looks the same" problem.

**Use for:** Body text, labels, form inputs, table data, navigation items, buttons, captions, metadata.

### Display — Satoshi

| Property | Value |
|----------|-------|
| Family | `'Satoshi', 'Inter', sans-serif` |
| Weights | 500, 700, 900 |
| Features | Standard |
| Source | Fontshare (free commercial) / Self-hosted |

**Rationale:** Satoshi brings geometric confidence without the coldness of Futura or the overuse of Gilroy. Its slightly rounded terminals add approachability while maintaining professional authority. The Black (900) weight is striking for hero numerals and key metrics.

**Use for:** Page headings (H1-H3), navigation labels, dashboard section titles, metric displays, card titles.

### Editorial — Playfair Display

| Property | Value |
|----------|-------|
| Family | `'Playfair Display', 'Georgia', serif` |
| Weights | 400, 600, 700 |
| Features | `'liga', 'kern'` |
| Source | Google Fonts / Self-hosted |

**Rationale:** Playfair Display signals editorial sophistication and cultural refinement. Its high contrast strokes reference luxury print media — Vogue, Architectural Digest, private banking communications. Used sparingly, it elevates marketing moments from "tech platform" to "premium service."

**Use for:** Marketing hero headlines, property names in editorial context, testimonial pull-quotes, email subject matter, report cover pages. Never in the app UI.

### Monospace — JetBrains Mono

| Property | Value |
|----------|-------|
| Family | `'JetBrains Mono', 'SF Mono', 'Fira Code', monospace` |
| Weights | 400, 500, 600 |
| Features | `'tnum', 'zero'` — slashed zero for disambiguation |
| Source | JetBrains / Self-hosted |

**Rationale:** Financial platforms deal in reference numbers, account IDs, transaction codes, and IFSC codes. JetBrains Mono provides unambiguous character differentiation (0 vs O, l vs 1, I vs l) with a rhythm that makes long codes scannable. Its ligatures are disabled — codes must be literal.

**Use for:** Financial figures in dashboards, account numbers, transaction IDs, IFSC codes, OTPs, percentage displays, yield figures in data contexts.

---

## 3. Type Scale

Based on a 1.25 ratio (Major Third) anchored at 16px base.

| Token | Size (px) | Size (rem) | Usage |
|-------|-----------|-----------|-------|
| `text-xs` | 12 | 0.75 | Legal footnotes, timestamps, badge labels |
| `text-sm` | 14 | 0.875 | Captions, table headers, secondary labels |
| `text-base` | 16 | 1.0 | Body text, form inputs, list items |
| `text-lg` | 18 | 1.125 | Large body, card descriptions, intro text |
| `text-xl` | 20 | 1.25 | Section subtitles, emphasized body |
| `text-2xl` | 24 | 1.5 | Card headings, dashboard labels |
| `text-3xl` | 30 | 1.875 | Section headings, page subtitles |
| `text-4xl` | 36 | 2.25 | Page titles, key metrics |
| `text-5xl` | 48 | 3.0 | Hero headings, dashboard hero numbers |
| `text-6xl` | 60 | 3.75 | Marketing headlines, impact numbers |
| `text-7xl` | 72 | 4.5 | Editorial display, landing hero |

---

## 4. Font Weight Usage

| Weight | Name | Token | Usage |
|--------|------|-------|-------|
| 400 | Regular | `font-normal` | Body text, descriptions, long-form content |
| 500 | Medium | `font-medium` | Labels, navigation items, table headers, emphasis |
| 600 | Semibold | `font-semibold` | Subheadings, button text, active states, card titles |
| 700 | Bold | `font-bold` | Page headings, hero text, key metrics, financial totals |

### Weight Pairing Rules

- **Never** use bold for body text paragraphs — use medium for emphasis within body
- **Headings** step down in weight as they get smaller (H1=700, H2=700, H3=600, H4=600, H5=500, H6=500)
- **Financial figures** use semibold (600) by default, bold (700) for totals/summaries
- **Buttons** always semibold (600) — bold feels aggressive, regular feels passive

---

## 5. Line Height System

| Token | Value | Usage |
|-------|-------|-------|
| `leading-none` | 1.0 | Display text, hero numbers (single line only) |
| `leading-tight` | 1.2 | Headings (H1-H3), metric displays |
| `leading-snug` | 1.35 | Card titles, subheadings (H4-H6) |
| `leading-normal` | 1.5 | Body text, descriptions, form labels |
| `leading-relaxed` | 1.75 | Long-form reading, legal text, documentation |

### Line Height Rules

- **Display/hero text (>36px):** Always `leading-tight` (1.2). Larger text needs less leading.
- **Headings (20-36px):** `leading-tight` to `leading-snug` depending on line count.
- **Body text (14-18px):** Always `leading-normal` (1.5). Non-negotiable for readability.
- **Small text (<14px):** `leading-relaxed` (1.75). Small text needs more breathing room.
- **Financial figures:** `leading-none` (1.0) when single-line in dashboards.

---

## 6. Letter Spacing

| Size Range | Spacing | Token | Rationale |
|------------|---------|-------|-----------|
| 60-72px | -0.03em | `tracking-tighter` | Large display text needs tightening |
| 36-48px | -0.02em | `tracking-tight` | Headings look better tight |
| 20-30px | -0.01em | `tracking-snug` | Subtle tightening for subheadings |
| 14-18px | 0 | `tracking-normal` | Body text — no adjustment needed |
| 12px | 0.01em | `tracking-wide` | Small text benefits from slight spacing |
| ALL CAPS | 0.05em | `tracking-widest` | Uppercase labels need generous spacing |

### Letter Spacing Rules

- **Never** apply negative tracking to body text — it reduces readability
- **Always** add tracking to uppercase text — compressed caps feel claustrophobic
- **Financial figures** use `tracking-normal` (0) — numbers must maintain tabular rhythm
- **Gold accent text** can use slightly wider tracking (+0.02em) for premium feel

---

## 7. Heading Hierarchy

### H1 — Page Title / Hero

```
Font: Satoshi (marketing: Playfair Display)
Size: 48px / clamp(2.25rem, 5vw, 3rem)
Weight: 700
Line-height: 1.2
Letter-spacing: -0.02em
Color: Navy-900 (light) / White (dark sections)
Margin-bottom: 24px
```

### H2 — Section Title

```
Font: Satoshi
Size: 36px / clamp(1.875rem, 4vw, 2.25rem)
Weight: 700
Line-height: 1.2
Letter-spacing: -0.02em
Color: Navy-900
Margin-bottom: 20px
```

### H3 — Subsection Title

```
Font: Satoshi
Size: 30px / clamp(1.5rem, 3vw, 1.875rem)
Weight: 600
Line-height: 1.3
Letter-spacing: -0.01em
Color: Navy-900
Margin-bottom: 16px
```

### H4 — Card Title / Group Label

```
Font: Satoshi
Size: 24px
Weight: 600
Line-height: 1.35
Letter-spacing: -0.01em
Color: Navy-900
Margin-bottom: 12px
```

### H5 — List Title / Table Section

```
Font: Inter
Size: 20px
Weight: 600
Line-height: 1.4
Letter-spacing: 0
Color: Navy-800
Margin-bottom: 8px
```

### H6 — Overline / Category Label

```
Font: Inter
Size: 14px
Weight: 500
Line-height: 1.4
Letter-spacing: 0.05em
Text-transform: uppercase
Color: Gray-500
Margin-bottom: 8px
```

---

## 8. Body Text Styles

### Body Large

```
Font: Inter
Size: 18px
Weight: 400
Line-height: 1.6
Color: Gray-700
Max-width: 680px
Usage: Intro paragraphs, feature descriptions, landing page body
```

### Body Default

```
Font: Inter
Size: 16px
Weight: 400
Line-height: 1.5
Color: Gray-700
Max-width: 640px
Usage: Standard body text, descriptions, list items
```

### Body Small

```
Font: Inter
Size: 14px
Weight: 400
Line-height: 1.5
Color: Gray-600
Max-width: 600px
Usage: Secondary descriptions, helper text, sidebar content
```

### Caption

```
Font: Inter
Size: 12px
Weight: 400 (or 500 for emphasis)
Line-height: 1.5
Letter-spacing: 0.01em
Color: Gray-500
Usage: Timestamps, metadata, legal footnotes, chart labels
```

---

## 9. Financial Number Typography

Financial figures are the most critical typographic element in NWTR. They must be instantly scannable, precisely aligned, and contextually clear.

### Display Metrics (Dashboard hero numbers)

```
Font: JetBrains Mono (or Satoshi Black for marketing)
Size: 48-72px
Weight: 700
Line-height: 1.0
Features: tnum (tabular figures), zero (slashed zero)
Color: Navy-900 (positive neutral), Success-700 (positive), Gray-600 (negative)
```

### Table Figures

```
Font: JetBrains Mono
Size: 14-16px
Weight: 400 (regular rows), 600 (totals)
Line-height: 1.5
Features: tnum
Alignment: Right-aligned for numbers, left for labels
Color: Navy-800 (amounts), Success-700 (positive change), Gray-600 (negative change)
```

### Inline Financial References

```
Font: JetBrains Mono
Size: Inherit from surrounding text
Weight: 500
Features: tnum
Color: Navy-900
Background: Navy-50 (subtle highlight for amounts in body text)
Padding: 2px 6px
Border-radius: 4px
```

### Currency Formatting Rules

- **Indian format:** ₹12,34,567.89 (lakhs/crores grouping)
- **Currency symbol:** Same size as number, weight 400 (lighter than figure)
- **Decimal places:** Always 2 for currency, 1-2 for percentages
- **Percentage sign:** Slightly smaller (0.85em), baseline-aligned
- **Positive indicator:** ↑ or + prefix in success-700
- **Negative indicator:** ↓ or − prefix in gray-600 (never red)

### Alignment Rules for Financial Tables

```
Column Type      | Alignment | Example
Currency amounts | Right     | ₹12,34,567.89
Percentages      | Right     |        8.42%
Dates            | Left      | 21 May 2026
Status           | Center    | ● Active
Names/Labels     | Left      | Lodha Palava Tower B
```

---

## 10. Responsive Typography

### Fluid Scaling with clamp()

```css
/* Headings scale fluidly between breakpoints */
--text-h1: clamp(2.25rem, 4vw + 1rem, 3rem);      /* 36px → 48px */
--text-h2: clamp(1.875rem, 3vw + 0.75rem, 2.25rem); /* 30px → 36px */
--text-h3: clamp(1.5rem, 2.5vw + 0.5rem, 1.875rem); /* 24px → 30px */
--text-h4: clamp(1.25rem, 2vw + 0.25rem, 1.5rem);   /* 20px → 24px */

/* Body stays fixed — only headings scale */
--text-body: 1rem;     /* 16px always */
--text-small: 0.875rem; /* 14px always */
```

### Breakpoint Adjustments

| Breakpoint | Base | H1 | H2 | Body | Behavior |
|-----------|------|----|----|------|----------|
| Mobile (<640px) | 16px | 36px | 28px | 16px | Tighter margins, single column |
| Tablet (640-1024px) | 16px | 42px | 32px | 16px | Moderate spacing |
| Desktop (1024-1440px) | 16px | 48px | 36px | 16px | Full spacing |
| Wide (>1440px) | 16px | 48px | 36px | 16px | Max-width containers, no further scaling |

### Mobile Typography Rules

- Minimum tap-target text: 16px (never smaller for interactive elements)
- Dashboard metrics: Reduce to 36px maximum (from 48-72px)
- Table text: Maintain 14px minimum — never reduce for mobile
- Line length: Maximum 45 characters per line on mobile (shorter = faster reading)

---

## 11. Typography in Trust Contexts

### How Type Builds Confidence

1. **Consistency signals competence.** If heading sizes vary randomly, users sense disorder. Strict scale adherence = attention to detail.
2. **Generous whitespace signals confidence.** Cramped text suggests a platform trying to hide information. Breathable layouts invite scrutiny.
3. **Monospace for precision signals transparency.** When financial figures use monospace, they feel "calculated" rather than "designed." This builds trust.
4. **Serif accents signal heritage.** Playfair Display in editorial contexts subconsciously references established institutions (newspapers, banks, law firms).

### Trust-Critical Type Moments

| Moment | Treatment | Rationale |
|--------|-----------|-----------|
| Yield display | JetBrains Mono, 600, success-700 | Precision + positive signal |
| Deposit confirmation | JetBrains Mono, 500, navy-900 | Precision + authority |
| Legal disclaimers | Inter, 12px, gray-500, leading-relaxed | Present but non-alarming |
| Security messaging | Inter, 14px, 500, navy-700 | Confident, not urgent |
| Error states | Inter, 14px, 500, error-700 | Clear but not panicking |

---

## 12. Type Pairing Rules

### Allowed Combinations

| Context | Heading Font | Body Font | Accent Font |
|---------|-------------|-----------|-------------|
| Marketing pages | Playfair Display | Inter | Satoshi (subheads) |
| App dashboards | Satoshi | Inter | JetBrains Mono (figures) |
| Data tables | Inter (headers) | Inter (cells) | JetBrains Mono (numbers) |
| Email communications | Satoshi (subject) | Inter (body) | — |
| Print/PDF reports | Playfair Display (cover) | Inter (content) | JetBrains Mono (figures) |

### Forbidden Combinations

- **Never** mix Playfair Display into app UI — it's marketing-only
- **Never** use Satoshi for body paragraphs — it's a display face
- **Never** use JetBrains Mono for non-numeric text (except codes/IDs)
- **Never** use more than 2 fonts on a single screen (excluding monospace for data)
- **Never** use italic Inter for emphasis — use medium weight or gold color instead

---

## 13. Font Loading Strategy

### Performance Requirements

- First Contentful Paint must not be blocked by fonts
- Layout shift from font swap must be < 0.1 CLS
- Total font payload < 200KB (all weights, both families)

### Loading Configuration

```css
/* Preload critical fonts */
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/satoshi-variable.woff2" as="font" type="font/woff2" crossorigin>

@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-var.woff2') format('woff2');
  font-weight: 400 700;
  font-display: swap;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+2000-206F;
}

@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/satoshi-variable.woff2') format('woff2');
  font-weight: 500 900;
  font-display: swap;
}

@font-face {
  font-family: 'Playfair Display';
  src: url('/fonts/playfair-display-var.woff2') format('woff2');
  font-weight: 400 700;
  font-display: swap;
}

@font-face {
  font-family: 'JetBrains Mono';
  src: url('/fonts/jetbrains-mono-var.woff2') format('woff2');
  font-weight: 400 600;
  font-display: swap;
}
```

### FOUT Prevention Strategy

1. **System font fallback matching:** Size-adjust system fallback fonts to match loaded fonts' metrics
2. **Variable fonts:** Single file per family reduces HTTP requests
3. **Subset fonts:** Latin + Devanagari subsets only (removes CJK, Cyrillic)
4. **Preload above-fold fonts:** Inter and Satoshi preloaded; Playfair/JetBrains loaded async
5. **font-display: swap:** Show text immediately with fallback, swap when loaded

```css
/* Fallback metrics matching to minimize CLS */
@font-face {
  font-family: 'Inter Fallback';
  src: local('Arial');
  size-adjust: 107%;
  ascent-override: 90%;
  descent-override: 22%;
  line-gap-override: 0%;
}
```

---

## 14. Implementation Reference

### Tailwind Configuration

```js
theme: {
  fontFamily: {
    sans: ['Inter', 'Inter Fallback', 'system-ui', 'sans-serif'],
    display: ['Satoshi', 'Inter', 'sans-serif'],
    editorial: ['Playfair Display', 'Georgia', 'serif'],
    mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
    sm: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0' }],
    base: ['1rem', { lineHeight: '1.5', letterSpacing: '0' }],
    lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '0' }],
    xl: ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
    '2xl': ['1.5rem', { lineHeight: '1.35', letterSpacing: '-0.01em' }],
    '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
    '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
    '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
    '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
    '7xl': ['4.5rem', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
  },
}
```

### CSS Custom Properties

```css
:root {
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-display: 'Satoshi', sans-serif;
  --font-editorial: 'Playfair Display', Georgia, serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-feature-tabular: 'tnum';
  --font-feature-slashed-zero: 'zero';
}
```

---

*Cross-references: [Color Psychology](./color-psychology.md) | [Trust Building UX](./trust-building-ux.md) | [HNI Communication](./hni-communication-guidelines.md)*
