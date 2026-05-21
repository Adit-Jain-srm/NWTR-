# Design Language

---
title: Design Language & Token System
version: 1.0
audience: designer, frontend
last-updated: 2026-05-21
status: draft
cross-references:
  - docs/03-ux-ui/ui-design-direction.md
  - docs/03-ux-ui/motion-design-system.md
  - docs/03-ux-ui/ux-strategy.md
---

## TL;DR

The definitive token and component specification for NWTR's design system. Contains exact values for colors, spacing, typography, shadows, and borders — plus detailed component specs for buttons, inputs, cards, navigation, modals, tables, badges, and more. This document is the single source of truth for frontend implementation and Figma token synchronization.

---

## 1. Design Token System

### Color Tokens

#### Brand Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `color-navy` | #0A1628 | 10, 22, 40 | Primary backgrounds, headings, body text |
| `color-gold` | #C9A961 | 201, 169, 97 | Primary CTAs, accents, premium indicators |
| `color-white` | #FFFFFF | 255, 255, 255 | Page backgrounds, card surfaces |
| `color-gray-50` | #F8F9FA | 248, 249, 250 | Subtle backgrounds, raised surfaces |
| `color-emerald` | #10B981 | 16, 185, 129 | Success states, positive trends, yields |

#### Extended Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `color-navy-800` | #0F1D32 | Slightly lighter than base navy |
| `color-navy-700` | #162340 | Card backgrounds on dark |
| `color-navy-600` | #1E2D4D | Hover states on dark backgrounds |
| `color-navy-100` | #E8EBF0 | Light navy tint for backgrounds |
| `color-gold-light` | #D4B978 | Hover state for gold elements |
| `color-gold-dark` | #B8944D | Active/pressed state for gold |
| `color-gold-50` | #FBF7EE | Subtle gold background tint |
| `color-gray-100` | #F1F3F5 | Dividers, borders |
| `color-gray-200` | #E5E7EB | Input borders, separators |
| `color-gray-300` | #D1D5DB | Disabled state borders |
| `color-gray-400` | #9CA3AF | Placeholder text |
| `color-gray-500` | #6B7280 | Secondary text |
| `color-gray-600` | #4B5563 | Body text (on white) |
| `color-gray-700` | #374151 | Strong body text |
| `color-red-500` | #EF4444 | Error states, destructive actions |
| `color-red-50` | #FEF2F2 | Error background tint |
| `color-amber-500` | #F59E0B | Warning states |
| `color-amber-50` | #FFFBEB | Warning background tint |
| `color-emerald-50` | #ECFDF5 | Success background tint |

#### Semantic Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `color-text-primary` | color-navy | Headings, important text |
| `color-text-secondary` | color-gray-600 | Body text, descriptions |
| `color-text-tertiary` | color-gray-400 | Placeholder, hints |
| `color-text-inverse` | color-white | Text on dark backgrounds |
| `color-surface-primary` | color-white | Main page background |
| `color-surface-secondary` | color-gray-50 | Raised sections |
| `color-surface-elevated` | color-white | Cards, modals (with shadow) |
| `color-border-default` | color-gray-200 | Default borders |
| `color-border-focus` | color-gold | Focus ring color |
| `color-border-error` | color-red-500 | Error state borders |
| `color-accent-primary` | color-gold | Primary interactive accent |
| `color-accent-success` | color-emerald | Positive/success accent |
| `color-accent-danger` | color-red-500 | Destructive accent |

### Typography Tokens

#### Font Families

| Token | Value | Usage |
|-------|-------|-------|
| `font-sans` | 'Inter', system-ui, sans-serif | UI text, body copy |
| `font-display` | 'Satoshi', 'Inter', sans-serif | Feature headings, marketing |
| `font-editorial` | 'Playfair Display', serif | Editorial headlines, luxury moments |
| `font-mono` | 'JetBrains Mono', monospace | Code, account numbers, IDs |

#### Type Scale

| Token | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `text-xs` | 12px | 16px | 400 | Captions, labels, badges |
| `text-sm` | 14px | 20px | 400 | Secondary text, table cells |
| `text-base` | 16px | 24px | 400 | Body text, inputs |
| `text-lg` | 18px | 28px | 500 | Emphasized body, card titles |
| `text-xl` | 20px | 28px | 600 | Section subtitles |
| `text-2xl` | 24px | 32px | 600 | Card headings, page subtitles |
| `text-3xl` | 30px | 36px | 700 | Page titles |
| `text-4xl` | 36px | 40px | 700 | Section heroes |
| `text-5xl` | 48px | 52px | 700 | Marketing headlines |
| `text-6xl` | 60px | 64px | 800 | Hero headlines (editorial) |
| `text-7xl` | 72px | 76px | 800 | Display (marketing hero only) |

#### Font Weight Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `font-normal` | 400 | Body text, descriptions |
| `font-medium` | 500 | Labels, emphasized text |
| `font-semibold` | 600 | Headings, button labels |
| `font-bold` | 700 | Page titles, strong emphasis |
| `font-extrabold` | 800 | Display/hero text only |

### Spacing Tokens

| Token | Value |
|-------|-------|
| `space-0` | 0px |
| `space-px` | 1px |
| `space-0.5` | 2px |
| `space-1` | 4px |
| `space-1.5` | 6px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |
| `space-16` | 64px |
| `space-20` | 80px |
| `space-24` | 96px |
| `space-32` | 128px |

### Shadow Tokens

| Token | Value |
|-------|-------|
| `shadow-sm` | 0 1px 2px rgba(10,22,40,0.04), 0 1px 3px rgba(10,22,40,0.06) |
| `shadow-md` | 0 4px 6px rgba(10,22,40,0.04), 0 2px 4px rgba(10,22,40,0.06) |
| `shadow-lg` | 0 10px 15px rgba(10,22,40,0.06), 0 4px 6px rgba(10,22,40,0.04) |
| `shadow-xl` | 0 20px 25px rgba(10,22,40,0.08), 0 8px 10px rgba(10,22,40,0.04) |
| `shadow-gold` | 0 4px 14px rgba(201,169,97,0.15), 0 2px 6px rgba(201,169,97,0.1) |
| `shadow-inner` | inset 0 2px 4px rgba(10,22,40,0.04) |

### Border Tokens

| Token | Value |
|-------|-------|
| `border-width-thin` | 1px |
| `border-width-medium` | 2px |
| `border-width-thick` | 3px |
| `radius-sm` | 4px |
| `radius-md` | 8px |
| `radius-lg` | 12px |
| `radius-xl` | 16px |
| `radius-2xl` | 24px |
| `radius-full` | 9999px |

---

## 2. Component Specifications

### Buttons

#### Sizes

| Size | Height | Padding (H) | Font Size | Icon Size | Radius |
|------|--------|-------------|-----------|-----------|--------|
| Small (S) | 32px | 12px | 13px | 16px | 8px |
| Medium (M) | 40px | 16px | 14px | 18px | 8px |
| Large (L) | 48px | 24px | 16px | 20px | 8px |

#### Variants

**Primary Button**
```
Default:  bg: #C9A961 | text: #0A1628 | shadow: shadow-gold
Hover:    bg: #D4B978 | shadow: shadow-gold (intensified)
Active:   bg: #B8944D | scale: 0.98
Disabled: bg: #C9A961 (50% opacity) | cursor: not-allowed
Loading:  width collapses to height, spinner replaces label
```

**Secondary Button**
```
Default:  bg: transparent | text: #0A1628 | border: 1px #0A1628
Hover:    bg: #0A1628 (5% opacity) | border: 1px #0A1628
Active:   bg: #0A1628 (10% opacity) | scale: 0.98
Disabled: opacity: 0.5 | cursor: not-allowed
```

**Ghost Button**
```
Default:  bg: transparent | text: #0A1628 | no border
Hover:    bg: #F8F9FA | text: #0A1628
Active:   bg: #E5E7EB
Disabled: opacity: 0.5
```

**Danger Button**
```
Default:  bg: #EF4444 | text: #FFFFFF
Hover:    bg: #DC2626
Active:   bg: #B91C1C | scale: 0.98
Disabled: opacity: 0.5
```

#### Button Anatomy
- Icon (optional): left or right positioned, 8px gap from label
- Label: font-semibold, centered
- Loading spinner: 16px (S), 18px (M), 20px (L)
- Minimum width: 80px (S), 96px (M), 120px (L)
- Full-width variant available for mobile forms

---

### Input Fields

#### Sizes

| Size | Height | Padding | Font Size | Label Size |
|------|--------|---------|-----------|-----------|
| Compact | 40px | 12px 14px | 14px | 12px |
| Standard | 48px | 14px 16px | 16px | 13px |
| Large | 56px | 16px 18px | 18px | 14px |

#### States

```
Default:    border: 1px #E5E7EB | bg: #FFFFFF
Hover:      border: 1px #9CA3AF
Focused:    border: 1px #C9A961 | ring: 3px rgba(201,169,97,0.12)
Filled:     border: 1px #E5E7EB | label floated to top
Valid:      border: 1px #10B981 | checkmark icon (right)
Error:      border: 1px #EF4444 | ring: 3px rgba(239,68,68,0.08)
Disabled:   bg: #F8F9FA | text: #9CA3AF | cursor: not-allowed
```

#### Input Types

**Text Input**: Standard single-line with floating label
**Number Input**: Right-aligned value, optional stepper buttons
**Select**: Custom dropdown with search for >7 options
**Date Picker**: Calendar popup, preset ranges for financial contexts
**File Upload**: Drag-and-drop zone, preview after upload, progress bar

#### Floating Label Animation
```css
.label {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #9CA3AF;
  transition: all 200ms ease-out;
}

.label--floated {
  top: 8px;
  transform: translateY(0);
  font-size: 12px;
  color: #6B7280;
}
```

---

### Cards

#### Property Card

| Property | Value |
|----------|-------|
| Width | Fluid (grid-based) |
| Min width | 280px |
| Radius | 12px |
| Shadow | shadow-sm (rest), shadow-lg (hover) |
| Image height | 200px (aspect-ratio: 16/10) |
| Padding | 20px (content area) |
| Border | 1px color-gray-100 |

Content structure:
1. Image (with lazy load + blur-hash)
2. Price badge (absolute positioned, top-right of image, gold bg)
3. Title: text-lg, font-semibold, color-navy
4. Subtitle: text-sm, color-gray-500
5. Features row: icon + value pairs (beds, baths, area)
6. Divider: 1px color-gray-100
7. Financial info: deposit amount + estimated return
8. CTA: ghost button "View Details →"

#### Stat Card

| Property | Value |
|----------|-------|
| Width | Fluid (min 200px) |
| Height | Auto (typically ~120px) |
| Radius | 12px |
| Padding | 20px |
| Background | color-white |
| Shadow | shadow-sm |

Content structure:
1. Icon + Label row (top): 20px icon, text-sm label
2. Value: text-3xl, font-bold, color-navy
3. Trend: text-sm, color-emerald (positive) or color-red (negative), with arrow icon
4. Sparkline (optional): 60px height, bottom-aligned

#### Glass Card

| Property | Value |
|----------|-------|
| Background | rgba(255,255,255,0.7) |
| Backdrop-filter | blur(20px) |
| Border | 1px rgba(255,255,255,0.3) |
| Radius | 16px |
| Shadow | 0 8px 32px rgba(10,22,40,0.08) |
| Padding | 24px |

---

### Navigation

#### Top Navigation Bar

| Property | Value |
|----------|-------|
| Height | 64px |
| Background | rgba(255,255,255,0.9) + backdrop-filter blur(12px) |
| Border bottom | 1px color-gray-100 |
| Padding | 0 24px (mobile), 0 48px (desktop) |
| Position | fixed, top: 0, z-index: 50 |

Elements:
- Logo: 32px height, left-aligned
- Nav links: text-sm, font-medium, 32px gap between items
- CTA button: Small size, primary variant
- User avatar: 36px circle, right-aligned (authenticated state)

#### Sidebar Navigation

| Property | Value |
|----------|-------|
| Width | 256px (expanded), 64px (collapsed) |
| Background | color-white |
| Border right | 1px color-gray-100 |
| Padding | 16px |
| Position | fixed, left: 0, height: 100vh |

Nav items:
- Height: 40px
- Padding: 8px 12px
- Radius: 8px
- Icon: 20px, 12px gap to label
- Active: bg color-gold-50, text color-navy, left border 3px gold
- Hover: bg color-gray-50

#### Mobile Bottom Navigation

| Property | Value |
|----------|-------|
| Height | 56px + safe-area-inset-bottom |
| Background | color-white |
| Border top | 1px color-gray-100 |
| Shadow | 0 -4px 12px rgba(10,22,40,0.04) |
| Max items | 5 |

Tab items:
- Icon: 24px
- Label: 10px, font-medium
- Active: color-gold, icon filled variant
- Inactive: color-gray-400

#### Breadcrumb

- Font: text-sm, color-gray-500
- Separator: "/" character, color-gray-300
- Current page: font-medium, color-navy (not linked)
- Links: color-gray-500, hover underline

---

### Modals

#### Dialog Modal

| Property | Value |
|----------|-------|
| Width | 480px (S), 640px (M), 800px (L) |
| Max height | 85vh |
| Radius | 16px |
| Shadow | shadow-xl |
| Backdrop | rgba(10,22,40,0.5) + backdrop-blur(4px) |
| Padding | 24px (header), 24px (body), 20px (footer) |

Structure:
- Header: Title (text-xl, font-semibold) + close button (right)
- Body: Scrollable content area
- Footer: Action buttons (right-aligned), cancel + primary

#### Drawer

| Property | Value |
|----------|-------|
| Width | 400px (S), 560px (M), 50vw (L) |
| Position | right edge |
| Shadow | shadow-xl |
| Entry | slide from right, 300ms spring |

#### Bottom Sheet (Mobile)

| Property | Value |
|----------|-------|
| Max height | 90vh |
| Radius | 16px 16px 0 0 (top corners only) |
| Handle | 36px × 4px, centered, color-gray-300, radius-full |
| Snap points | 40%, 70%, 90% of viewport |
| Gesture | Drag to dismiss (velocity-based) |

---

### Tables

#### Standard Data Table

| Property | Value |
|----------|-------|
| Header bg | color-gray-50 |
| Header text | text-xs, font-semibold, uppercase, color-gray-500, letter-spacing 0.05em |
| Row height | 52px |
| Cell padding | 12px 16px |
| Row border | 1px color-gray-100 (bottom) |
| Row hover | bg color-gray-50 |
| Stripe (optional) | Alternating color-gray-50 rows |

Features:
- Sortable columns: header click toggles asc/desc, arrow indicator
- Sticky header on vertical scroll
- Horizontal scroll with shadow fade on overflow
- Row selection: checkbox column (left), selected row bg: color-gold-50
- Inline actions: icon buttons appear on row hover (right-aligned)

#### Responsive Behavior

- ≥1024px: Full table
- 768–1023px: Horizontal scroll with pinned first column
- <768px: Transform to card layout (each row becomes a card)

---

### Badges

#### Status Badges

| Status | Background | Text | Border | Dot |
|--------|-----------|------|--------|-----|
| Active | color-emerald-50 | color-emerald | none | emerald dot |
| Pending | color-amber-50 | color-amber-500 | none | amber dot |
| Inactive | color-gray-100 | color-gray-500 | none | gray dot |
| Error | color-red-50 | color-red-500 | none | red dot |

#### Verification Badges

| Type | Style |
|------|-------|
| KYC Verified | Emerald bg, shield icon, "Verified" |
| Premium Member | Gold bg, star icon, "Premium" |
| NBFC Certified | Navy bg, checkmark, "NBFC Registered" |

#### Specs

- Height: 24px (S), 28px (M)
- Padding: 6px 10px (S), 8px 12px (M)
- Radius: radius-full (pill shape)
- Font: text-xs, font-medium
- Dot: 6px circle, left of text, 6px gap

---

### Tooltips and Popovers

#### Tooltip

| Property | Value |
|----------|-------|
| Background | color-navy |
| Text | color-white, text-xs |
| Padding | 6px 10px |
| Radius | 6px |
| Max width | 240px |
| Arrow | 6px triangle |
| Delay | 300ms show, 0ms hide |
| Animation | fade + scale (150ms, easeOut) |

#### Popover

| Property | Value |
|----------|-------|
| Background | color-white |
| Border | 1px color-gray-200 |
| Shadow | shadow-lg |
| Padding | 16px |
| Radius | 12px |
| Max width | 320px |
| Trigger | Click (not hover) |
| Dismiss | Click outside, Escape key |

---

### Progress Indicators

#### Step Indicator

- Horizontal row of numbered circles connected by lines
- Completed: gold fill, white checkmark
- Active: gold border, gold number, pulsing ring
- Upcoming: gray border, gray number
- Connecting line: gold (completed), gray (upcoming)
- Step label below: text-xs, font-medium

#### Linear Progress

- Height: 4px (thin), 8px (standard)
- Track: color-gray-200
- Fill: gold gradient (left-to-right)
- Radius: radius-full
- Indeterminate: animated sliding gradient

#### Circular Progress

- Sizes: 32px, 48px, 64px
- Track: color-gray-200, 3px stroke
- Fill: color-gold, 3px stroke, rounded linecap
- Center label (64px size): percentage or icon

---

### Alerts and Notifications

#### Toast Notification

| Property | Value |
|----------|-------|
| Width | 360px (desktop), calc(100vw - 32px) (mobile) |
| Position | top-right (desktop), top-center (mobile) |
| Padding | 16px |
| Radius | 12px |
| Shadow | shadow-lg |
| Duration | 4s (auto-dismiss), persistent for errors |
| Stack | max 3 visible, offset 8px each |

Types:
- Success: left border 3px emerald, checkmark icon
- Error: left border 3px red, alert icon
- Warning: left border 3px amber, warning icon
- Info: left border 3px navy, info icon

#### Banner Alert

| Property | Value |
|----------|-------|
| Position | top of content area (below nav) |
| Width | 100% |
| Padding | 12px 24px |
| Icon | left-aligned, 20px |
| Dismiss | × button right-aligned |

#### Inline Alert

| Property | Value |
|----------|-------|
| Radius | 8px |
| Padding | 16px |
| Border | 1px (matching severity color at 30% opacity) |
| Background | severity color at 5% opacity |
| Icon | 20px, severity color |

---

## 3. Layout Patterns

### Dashboard Layout

```
┌──────────────────────────────────────┐
│ Top Bar (64px)                        │
├──────────┬───────────────────────────┤
│          │ Content Area               │
│ Sidebar  │ ┌───────────────────────┐ │
│ (256px)  │ │ Metrics Row           │ │
│          │ ├───────────┬───────────┤ │
│          │ │ Chart     │ Activity  │ │
│          │ ├───────────┴───────────┤ │
│          │ │ Data Table            │ │
│          │ └───────────────────────┘ │
└──────────┴───────────────────────────┘
```

### List Layout

- Filter bar: sticky below navigation
- List items: full-width cards or rows
- Pagination: bottom-center, page numbers + prev/next
- Empty state: centered illustration + CTA

### Detail Layout

- Back navigation: top-left, breadcrumb
- Hero section: key info + primary actions
- Tabbed content: related data sections
- Sticky sidebar (desktop): quick stats or actions

### Form Layout

- Single column, max 560px width, centered
- Section grouping with subtle dividers
- Help text right-aligned or below fields
- Actions bar: sticky bottom on mobile, inline on desktop

### Wizard Layout

- Progress indicator: top, full-width
- Step content: centered, max 640px
- Navigation: bottom bar with back/next
- Summary: right sidebar on desktop, final step on mobile

---

## 4. Responsive Behavior Per Component

| Component | Mobile (<768px) | Tablet (768-1023px) | Desktop (≥1024px) |
|-----------|-----------------|---------------------|-------------------|
| Property Card | Full-width stack | 2-column grid | 3-column grid |
| Stat Cards | Horizontal scroll | 2×2 grid | 4-across row |
| Tables | Card layout | Scroll + pin col 1 | Full table |
| Sidebar Nav | Bottom tab bar | Collapsed (64px) | Expanded (256px) |
| Modals | Bottom sheet | Center dialog | Center dialog |
| Charts | Simplified, no legend | Full with legend below | Full with side legend |
| Buttons (CTA) | Full-width | Auto-width | Auto-width |
| Forms | Single column | Single column | 2-column optional |

---

## 5. Interaction States

### State Matrix

| State | Background | Border | Text | Shadow | Additional |
|-------|-----------|--------|------|--------|-----------|
| Default | surface-primary | border-default | text-primary | shadow-sm | — |
| Hover | surface-secondary | border-default (darkened) | text-primary | shadow-md | cursor: pointer |
| Focus | surface-primary | border-focus (gold) | text-primary | ring 3px gold/12% | outline: none |
| Active | surface-primary (pressed) | border-focus | text-primary | shadow-sm | scale: 0.98 |
| Disabled | gray-50 | gray-200 | gray-400 | none | opacity: 0.6, pointer-events: none |
| Loading | surface-primary | border-default | hidden | shadow-sm | spinner visible |
| Error | red-50 (subtle) | red-500 | text-primary | ring 3px red/8% | error message below |
| Success | emerald-50 (subtle) | emerald-500 | text-primary | — | check icon visible |

### Focus Management

- Focus ring: 3px offset, gold at 12% opacity
- Tab order: logical reading order, skip-to-content link
- Focus trap: active in modals, drawers, dropdowns
- Autofocus: first input in forms, search input in command palette

---

## 6. Naming Conventions

### Design Token Naming

Pattern: `{category}-{property}-{variant}-{state}`

```
color-text-primary
color-text-secondary
color-surface-primary
color-border-default
color-border-focus
shadow-sm
shadow-lg
radius-md
radius-lg
space-4
space-8
font-sans
font-display
text-base
text-lg
```

### CSS Class Naming (Tailwind Extensions)

```
// tailwind.config.ts theme extensions
colors: {
  navy: { DEFAULT: '#0A1628', 800: '#0F1D32', ... },
  gold: { DEFAULT: '#C9A961', light: '#D4B978', ... },
}
boxShadow: {
  gold: '0 4px 14px rgba(201,169,97,0.15), ...',
}
fontFamily: {
  sans: ['Inter', ...],
  display: ['Satoshi', ...],
  editorial: ['Playfair Display', ...],
}
```

### Component File Naming

```
components/
├── ui/
│   ├── button.tsx
│   ├── input.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   ├── modal.tsx
│   ├── toast.tsx
│   └── tooltip.tsx
├── layout/
│   ├── sidebar.tsx
│   ├── top-bar.tsx
│   └── page-wrapper.tsx
├── data/
│   ├── stat-card.tsx
│   ├── data-table.tsx
│   └── chart-area.tsx
└── domain/
    ├── property-card.tsx
    ├── deposit-card.tsx
    └── tenant-row.tsx
```

### Design Token Export Format

Tokens exported as TypeScript constants for type-safe access:

```typescript
export const tokens = {
  color: {
    navy: '#0A1628',
    gold: '#C9A961',
    white: '#FFFFFF',
    gray50: '#F8F9FA',
    emerald: '#10B981',
  },
  space: {
    1: '4px', 2: '8px', 3: '12px', 4: '16px',
    6: '24px', 8: '32px', 12: '48px', 16: '64px', 24: '96px',
  },
  radius: {
    sm: '4px', md: '8px', lg: '12px', xl: '16px', '2xl': '24px', full: '9999px',
  },
  shadow: { /* as defined above */ },
} as const;
```

---

## Cross-References

- Visual design context: [UI Design Direction](./ui-design-direction.md)
- Motion for components: [Motion Design System](./motion-design-system.md)
- Animation sequences: [Animation Storyboards](./animation-storyboards.md)
- UX principles: [UX Strategy](./ux-strategy.md)
