# UI Design Direction

---
title: UI Design Direction & Visual System
version: 1.0
audience: designer, frontend
last-updated: 2026-05-21
status: draft
cross-references:
  - docs/03-ux-ui/ux-strategy.md
  - docs/03-ux-ui/design-language.md
  - docs/03-ux-ui/motion-design-system.md
---

## TL;DR

NWTR's visual design language draws from private banking, luxury fintech, and editorial design. The system uses a deep navy + warm gold palette, glassmorphism depth layers, restrained typography, and generous whitespace to communicate trust and exclusivity. Every visual decision reinforces the message: "Your money is in sophisticated hands."

---

## 1. Visual Design System Overview

### Design DNA

| Attribute | Expression |
|-----------|-----------|
| **Trust** | Deep navy foundations, security badges, consistent layouts |
| **Premium** | Gold accents, generous spacing, editorial typography |
| **Clarity** | High contrast, clean hierarchy, information density without clutter |
| **Modernity** | Glassmorphism, subtle gradients, contemporary motion |
| **Warmth** | Rounded corners, warm neutrals, approachable gold tones |

### Visual Hierarchy Principles

1. **Color weight** directs attention (gold for primary CTAs, navy for headings)
2. **Size contrast** establishes importance (16px minimum differential between heading levels)
3. **Spatial separation** groups related content (proximity principle)
4. **Depth layers** indicate interactivity (elevated elements are actionable)

---

## 2. Grid System

### 12-Column Grid

| Breakpoint | Columns | Gutter | Margin | Max Width |
|------------|---------|--------|--------|-----------|
| Mobile (<640px) | 4 | 16px | 16px | 100% |
| Tablet (768px) | 8 | 24px | 32px | 100% |
| Desktop (1024px) | 12 | 24px | 48px | 100% |
| Wide (1280px) | 12 | 32px | 64px | 1280px |
| Ultra (1536px) | 12 | 32px | auto | 1440px |

### Layout Grid Behavior

- Content containers max out at 1440px, centered on larger screens
- Dashboard layouts use a fixed sidebar (256px expanded, 64px collapsed) + fluid content
- Marketing pages use full-bleed sections with content constrained to grid
- Card grids: 1 col (mobile), 2 col (tablet), 3-4 col (desktop)

### Baseline Grid

- 4px baseline for all vertical rhythm
- Line heights align to 4px increments
- Component heights are multiples of 8px
- Minimum spacing between sections: 48px (mobile), 96px (desktop)

---

## 3. Spacing Scale

### Base Unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight inline gaps, icon padding |
| `space-2` | 8px | Related element gaps, small component padding |
| `space-3` | 12px | Input padding, compact list items |
| `space-4` | 16px | Standard component padding, list gaps |
| `space-6` | 24px | Card padding, section sub-gaps |
| `space-8` | 32px | Component group gaps |
| `space-12` | 48px | Section padding (mobile) |
| `space-16` | 64px | Section padding (desktop) |
| `space-24` | 96px | Major section separation |

### Spacing Principles

- Internal component padding: `space-4` to `space-6`
- Between related components: `space-4` to `space-8`
- Between unrelated sections: `space-12` to `space-24`
- Page top/bottom padding: `space-16` minimum

---

## 4. Border Radius System

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 4px | Tags, badges, small chips |
| `radius-md` | 8px | Buttons, inputs, small cards |
| `radius-lg` | 12px | Cards, dropdowns, modals |
| `radius-xl` | 16px | Large cards, feature sections |
| `radius-2xl` | 24px | Hero cards, marketing sections |
| `radius-full` | 9999px | Avatars, pills, circular buttons |

### Radius Rules

- Never mix radius sizes within a single card/component
- Nested elements use smaller radius than parent (parent 12px → child 8px)
- Buttons always use `radius-md` (8px) regardless of size
- Input fields match button radius for visual pairing

---

## 5. Shadow System

### Elevation Levels

```css
/* Resting state — subtle depth */
--shadow-sm: 0 1px 2px rgba(10, 22, 40, 0.04),
             0 1px 3px rgba(10, 22, 40, 0.06);

/* Interactive elements — cards, dropdowns */
--shadow-md: 0 4px 6px rgba(10, 22, 40, 0.04),
             0 2px 4px rgba(10, 22, 40, 0.06);

/* Elevated — modals, popovers, hover states */
--shadow-lg: 0 10px 15px rgba(10, 22, 40, 0.06),
             0 4px 6px rgba(10, 22, 40, 0.04);

/* Dramatic — hero cards, focus states */
--shadow-xl: 0 20px 25px rgba(10, 22, 40, 0.08),
             0 8px 10px rgba(10, 22, 40, 0.04);

/* Gold glow for premium elements */
--shadow-gold: 0 4px 14px rgba(201, 169, 97, 0.15),
               0 2px 6px rgba(201, 169, 97, 0.1);
```

### Shadow Usage

| Element State | Shadow Level |
|--------------|--------------|
| Card (resting) | `shadow-sm` |
| Card (hover) | `shadow-lg` |
| Dropdown menu | `shadow-lg` |
| Modal overlay | `shadow-xl` |
| Primary CTA button | `shadow-gold` |
| Floating action button | `shadow-lg` |
| Toast notification | `shadow-md` |

---

## 6. Component Library Overview

### Buttons

| Variant | Background | Text | Border | Usage |
|---------|-----------|------|--------|-------|
| Primary | Gold (#C9A961) | Navy (#0A1628) | None | Main CTAs: "Get Started", "Deposit Now" |
| Secondary | Transparent | Navy | 1px Navy | Supporting actions: "Learn More", "View Details" |
| Ghost | Transparent | Navy/Gold | None | Tertiary actions in dense UIs |
| Danger | Red (#EF4444) | White | None | Destructive: "Cancel Deposit", "Delete" |
| White | White | Navy | None | On dark backgrounds (hero sections) |

### Cards

- **Property Card**: Image top, details bottom, price badge overlay
- **Stat Card**: Icon + metric + label + trend indicator
- **Action Card**: Icon + title + description + CTA
- **Info Card**: Glassmorphism background, content focused
- **Glass Card**: Frosted blur background for overlaying content

### Inputs

- Height: 48px (standard), 40px (compact), 56px (large)
- Floating labels that animate from placeholder position
- Inline validation with icon + message below
- Prefix/suffix support for currency, percentage, units

### Tables

- Sticky header on scroll
- Row hover state with subtle background shift
- Sortable columns with direction indicator
- Inline actions (icon buttons) on row hover
- Responsive: collapse to card layout on mobile

### Navigation

- Top bar: 64px height, glassmorphism on scroll
- Sidebar: 256px expanded, 64px collapsed, smooth transition
- Mobile bottom nav: 56px height, safe area padding
- Breadcrumb: muted text, "/" separator, current page bolded

---

## 7. Card Patterns

### Property Card

```
┌─────────────────────────────┐
│  [Property Image]            │
│  ┌──────┐                   │
│  │ ₹25K │ ← Price badge     │
│  └──────┘                   │
├─────────────────────────────┤
│  3BHK · Bandra West         │
│  1,450 sq.ft · 12th Floor   │
│                             │
│  ┌─────┐ ┌─────┐ ┌──────┐  │
│  │🛏️ 3 │ │🚿 2 │ │ 🚗 1 │  │
│  └─────┘ └─────┘ └──────┘  │
│                             │
│  Deposit: ₹7,50,000        │
│  Est. Return: 8.4% p.a.    │
│  [View Details →]           │
└─────────────────────────────┘
```

### Stat Card

```
┌───────────────────────┐
│  ↗ Total AUM          │
│  ₹142.5 Cr           │
│  +12.3% from last mo  │
│  ▁▂▃▄▅▆▇ sparkline   │
└───────────────────────┘
```

### Action Card

```
┌───────────────────────┐
│  [Icon]               │
│  Quick Deposit        │
│  Start earning in     │
│  under 5 minutes      │
│  [Get Started →]      │
└───────────────────────┘
```

---

## 8. Form Design

### Floating Label Pattern

```
Resting:      [ Enter your PAN number        ]
Focused:      [ PAN Number                    ]
              [ ABCDE1234F|                   ]
Validated:    [ PAN Number              ✓     ]
              [ ABCDE1234F                    ]
Error:        [ PAN Number              ✗     ]
              [ ABCDE123                      ]
              ↳ PAN must be 10 characters
```

### Multi-Step Form (Wizard)

- Progress bar at top: stepped indicator with labels
- One logical group per step (max 4-5 fields)
- Persistent "Save & Continue Later" option
- Back button always visible (top-left of form area)
- Summary review step before final submission

### Inline Validation Rules

- Validate on blur (not on every keystroke)
- Show success state for completed valid fields
- Error messages appear with 200ms delay after blur
- Format hints shown below field before interaction
- Real-time formatting for phone, PAN, Aadhaar (with masking)

---

## 9. Dashboard Design Patterns

### Metrics Row

- Top-level KPIs in a horizontal row of stat cards
- 3-4 cards on desktop, horizontally scrollable on mobile
- Each card: metric value, label, trend percentage, sparkline
- Click-through to detailed analytics view

### Chart Patterns

- **Area charts**: Revenue/returns over time (filled gradient, brand colors)
- **Bar charts**: Comparison metrics (grouped or stacked)
- **Donut charts**: Allocation breakdowns (portfolio composition)
- **Line charts**: Trends and projections (solid for actual, dashed for projected)

Chart design rules:
- Maximum 5-6 data series per chart
- Y-axis starts at 0 for bar charts (not for line/area with narrow range)
- Grid lines: subtle (opacity 0.1), horizontal only
- Tooltips on hover with formatted values
- Legend below chart, interactive (click to toggle series)

### Filter Bar

- Horizontal row above content area
- Date range picker (preset: 7D, 30D, 90D, 1Y, Custom)
- Segmented controls for category filtering
- Search input for entity filtering
- "Clear all" button when filters active
- Filter count badge on mobile (tap to reveal filter sheet)

---

## 10. Premium Patterns

### Glassmorphism Cards

```css
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(10, 22, 40, 0.08);
}

/* Dark variant for navy backgrounds */
.glass-card-dark {
  background: rgba(10, 22, 40, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

### Gradient Meshes

Used sparingly for hero backgrounds and section dividers:

```css
.mesh-gradient {
  background:
    radial-gradient(at 20% 80%, rgba(201, 169, 97, 0.12) 0%, transparent 50%),
    radial-gradient(at 80% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
    radial-gradient(at 50% 50%, rgba(10, 22, 40, 0.02) 0%, transparent 70%);
}
```

### Subtle Depth Layers

Visual hierarchy through background tones:

| Layer | Background | Usage |
|-------|-----------|-------|
| Base | `#FFFFFF` | Page background |
| Raised | `#F8F9FA` | Card backgrounds, sections |
| Elevated | `#FFFFFF` + `shadow-md` | Interactive cards, dropdowns |
| Overlay | `rgba(10,22,40,0.5)` | Modal backdrops |
| Surface | Glass effect | Premium feature sections |

---

## 11. Icon System

### Primary: Lucide Icons

- Style: 24px, 1.5px stroke weight
- Color: inherit from text color (currentColor)
- Sizes: 16px (inline), 20px (buttons), 24px (navigation), 32px (features)

### Custom Financial Icons

Supplementary icon set for domain-specific concepts:

- Deposit vault
- Yield/returns arrow
- Property pin
- Rent flow
- KYC shield
- NBFC badge
- Investment allocation
- Payout
- Lease document

Style: Same 1.5px stroke, matching Lucide aesthetic, custom drawn in Figma.

### Icon Usage Rules

- Always pair icons with text labels (except in dense tables/toolbars)
- Icon-only buttons require tooltip and aria-label
- Decorative icons use `aria-hidden="true"`
- Consistent sizing within component groups

---

## 12. Illustration Style

### Direction

- Minimal, geometric compositions
- Flat with subtle depth (2.5D style)
- Brand color palette only (navy, gold, emerald, warm grays)
- Abstract representation of financial concepts
- No realistic people — abstract figures or none

### Usage Contexts

- Empty states: Small (200x200px max), centered, muted
- Feature sections: Medium, paired with text, editorial feel
- Hero/marketing: Large, full-width, layered with motion
- Error pages: Friendly but professional

### Format

- SVG for static illustrations (scalable, themeable)
- Lottie for animated illustrations (onboarding, celebrations)
- Rive for interactive illustrations (deposit flow visualization)

---

## 13. Photography Direction

### Style

- Editorial quality, natural lighting
- Architectural: modern Indian properties, clean compositions
- Lifestyle: aspirational but authentic Indian contexts
- Color-graded to match brand (slightly warm, desaturated)

### Treatment

- Slight overlay gradient for text readability
- Rounded corners matching card system
- Never stretched or poorly cropped
- Lazy-loaded with blur-hash placeholder

### Subject Guidelines

- Properties: show actual Indian luxury properties (not Western stock)
- People: diverse Indian professionals, aspirational settings
- Abstract: textural shots (marble, glass, greenery) for backgrounds

---

## 14. Dark Mode Considerations

### Status: Future Phase (Not in MVP)

### Preliminary Direction

- Navy background deepens (not inverted to light)
- Gold accents remain consistent (high contrast on dark)
- Cards become slightly lighter dark surface
- Shadows become light glows at very low opacity
- All text/background combinations re-validated for contrast

### Technical Preparation

- Use CSS custom properties for all colors (already planned)
- Semantic color tokens: `--color-surface`, `--color-text-primary`
- Test glassmorphism effects on dark backgrounds
- Ensure charts/data viz work in both modes

---

## Cross-References

- UX context: [UX Strategy](./ux-strategy.md)
- Motion specs: [Motion Design System](./motion-design-system.md)
- Token details: [Design Language](./design-language.md)
- Animation flows: [Animation Storyboards](./animation-storyboards.md)
