# NWTR Sub-Project 1: Design System & Foundation — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. Execute SEQUENTIALLY — no parallel subagents.

**Goal:** Build a complete, premium design system and project foundation from scratch — including design tokens, 42+ components, 3D engine setup, motion system, and dark mode — that all subsequent sub-projects build upon.

**Architecture:** Fresh Next.js 15 scaffold replacing existing code. TailwindCSS v4 with CSS custom properties for tokens. Framer Motion for UI transitions. GSAP + ScrollTrigger for scroll storytelling. Spline for 3D hero scenes. React Three Fiber for interactive 3D elements. All components TypeScript-strict, accessible (Radix primitives where needed), responsive, dark mode-ready.

**Tech Stack:** Next.js 15, TypeScript, TailwindCSS v4, Framer Motion, GSAP, @splinetool/react-spline, @react-three/fiber, @react-three/drei, three, Zustand, Radix UI, cmdk, Zod

---

## Phase 1: Fresh Scaffold (Tasks 1-3)

### Task 1: Initialize Fresh Next.js Project

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `eslint.config.mjs`
- Create: `.env.example`
- Create: `.gitignore`

- [ ] **Step 1: Remove existing src/ directory and config files (preserve docs/ and tasks/)**

```bash
cd "c:\Users\aditj\New Projects\NWTR-"
Remove-Item -Recurse -Force src, .next, node_modules, package.json, package-lock.json, tsconfig.json, next.config.ts, postcss.config.mjs, eslint.config.mjs, next-env.d.ts, prisma.config.ts -ErrorAction SilentlyContinue
```

- [ ] **Step 2: Create new package.json with all dependencies**

```json
{
  "name": "nwtr",
  "version": "2.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "lint": "next lint",
    "postinstall": "prisma generate"
  },
  "dependencies": {
    "next": "^15.3.2",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "framer-motion": "^12.6.3",
    "gsap": "^3.12.7",
    "@splinetool/react-spline": "^4.0.0",
    "@react-three/fiber": "^9.1.0",
    "@react-three/drei": "^10.0.0",
    "three": "^0.172.0",
    "zustand": "^5.0.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-tooltip": "^1.1.0",
    "@radix-ui/react-popover": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "cmdk": "^1.0.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.0.2",
    "zod": "^3.24.0",
    "next-auth": "5.0.0-beta.25",
    "@auth/prisma-adapter": "^1.6.0",
    "@prisma/client": "^5.22.0",
    "bcryptjs": "^2.4.3",
    "ai": "^4.3.0",
    "@ai-sdk/openai": "^3.0.65",
    "openai": "^4.80.0",
    "recharts": "^2.15.0",
    "react-dropzone": "^14.3.0",
    "input-otp": "^1.4.0",
    "react-day-picker": "^9.6.0",
    "resend": "^4.0.0",
    "@vercel/blob": "^0.27.0",
    "@vercel/og": "^0.6.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.7",
    "@types/node": "^22.15.17",
    "@types/react": "^19.1.4",
    "@types/react-dom": "^19.1.5",
    "@types/three": "^0.172.0",
    "@types/bcryptjs": "^2.4.6",
    "eslint": "^9.27.0",
    "eslint-config-next": "^15.3.2",
    "tailwindcss": "^4.1.7",
    "typescript": "^5.8.3",
    "prisma": "^5.22.0"
  }
}
```

- [ ] **Step 3: Install dependencies**

```bash
npm install
```

- [ ] **Step 4: Create tsconfig.json**

Standard Next.js 15 TypeScript config with `@/*` path alias pointing to `./src/*`.

- [ ] **Step 5: Create next.config.ts, postcss.config.mjs, eslint.config.mjs**

Standard configs. next.config.ts includes `reactStrictMode: true` and `images.formats: ['image/avif', 'image/webp']`.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat(foundation): fresh Next.js 15 scaffold with full dependency stack"
```

---

### Task 2: Design Token System (globals.css + Tailwind @theme)

**Files:**
- Create: `src/app/globals.css`

- [ ] **Step 1: Create globals.css with full @theme block**

Contains: All navy/gold/surface/semantic color tokens, font families, border radius, shadows, easing curves, plus base styles (smooth scroll, antialiased, selection color), glassmorphism utilities, gold gradient utilities, dark mode overrides, reduced-motion media query.

Full color palette from `docs/03-ux-ui/color-psychology.md`:
- Navy: 11 shades (50-950)
- Gold: 10 shades (50-900)
- Surface: 3 shades (50-200)
- Semantic: emerald, red, amber (50 + 500 each)

- [ ] **Step 2: Verify Tailwind picks up tokens**

```bash
npx next build
```

- [ ] **Step 3: Commit**

```bash
git commit -m "feat(foundation): design token system — full color/type/spacing/shadow/motion tokens"
```

---

### Task 3: Font Loading + Root Layout

**Files:**
- Create: `src/lib/fonts.ts`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/assets/fonts/Satoshi-Medium.woff2`
- Create: `src/assets/fonts/Satoshi-Bold.woff2`
- Create: `src/assets/fonts/Satoshi-Black.woff2`

- [ ] **Step 1: Download Satoshi font files from Fontshare**
- [ ] **Step 2: Create fonts.ts with Inter, Playfair Display, JetBrains Mono (Google Fonts) + Satoshi (local)**
- [ ] **Step 3: Create root layout.tsx with font variables, metadata, structured data, PWA manifest link, skip-to-content, dark mode body classes**
- [ ] **Step 4: Create minimal page.tsx (just renders "NWTR" centered)**
- [ ] **Step 5: Verify build passes and fonts load**
- [ ] **Step 6: Commit**

```bash
git commit -m "feat(foundation): font system — Inter, Satoshi, Playfair Display, JetBrains Mono + root layout"
```

---

## Phase 2: Utility Layer (Tasks 4-6)

### Task 4: Utility Functions

**Files:**
- Create: `src/lib/utils.ts`
- Create: `src/lib/motion.ts`
- Create: `src/lib/constants.ts`

- [ ] **Step 1: Create utils.ts** — `cn()` (clsx+twMerge), `formatCurrency()` (INR), `formatPercentage()`, `formatDate()`
- [ ] **Step 2: Create motion.ts** — Easing curves (typed tuples), duration tiers, stagger constants, reusable Framer Motion variants (fadeUp, scaleIn, staggerContainer, slideIn)
- [ ] **Step 3: Create constants.ts** — App-wide constants (site name, URLs, deposit ranges, yield rates, etc.)
- [ ] **Step 4: Commit**

```bash
git commit -m "feat(foundation): utility layer — cn(), formatCurrency(), motion constants, app constants"
```

---

### Task 5: Theme Provider + Toast System

**Files:**
- Create: `src/components/providers/theme-provider.tsx`
- Create: `src/components/providers/toast-provider.tsx`
- Create: `src/components/providers/index.tsx`

- [ ] **Step 1: Create ThemeProvider** — system/light/dark detection, localStorage persistence, class toggle on html
- [ ] **Step 2: Create ToastProvider** — context-based toast system with animated notifications (success/error/info/warning), auto-dismiss
- [ ] **Step 3: Create unified Providers wrapper that nests ThemeProvider + ToastProvider**
- [ ] **Step 4: Add Providers to root layout.tsx**
- [ ] **Step 5: Commit**

```bash
git commit -m "feat(foundation): providers — ThemeProvider (dark mode) + ToastProvider (notifications)"
```

---

### Task 6: Zustand Stores

**Files:**
- Create: `src/lib/stores/ui-store.ts`
- Create: `src/lib/stores/comparison-store.ts`
- Create: `src/lib/stores/favorites-store.ts`

- [ ] **Step 1: Create ui-store** — sidebar collapsed state, command palette open, mobile nav open
- [ ] **Step 2: Create comparison-store** — selected property IDs (max 3), add/remove/clear
- [ ] **Step 3: Create favorites-store** — saved property IDs, persisted to localStorage
- [ ] **Step 4: Commit**

```bash
git commit -m "feat(foundation): Zustand stores — UI state, property comparison, favorites"
```

---

## Phase 3: Component Library (Tasks 7-15)

### Task 7: Layout Components

**Files:**
- Create: `src/components/ui/container.tsx`
- Create: `src/components/ui/section.tsx`
- Create: `src/components/ui/divider.tsx`
- Create: `src/components/ui/spacer.tsx`

- [ ] **Step 1: Build Container** — narrow/default/wide/full max-widths, responsive padding
- [ ] **Step 2: Build Section** — consistent py spacing, optional dark variant, as-prop for semantic HTML
- [ ] **Step 3: Build Divider** — horizontal/vertical, default/gradient/gold variants
- [ ] **Step 4: Build Spacer** — responsive spacing utility (h-4/h-8/h-16/h-24/h-32)
- [ ] **Step 5: Commit**

```bash
git commit -m "feat(components): layout primitives — Container, Section, Divider, Spacer"
```

---

### Task 8: Typography Components

**Files:**
- Create: `src/components/ui/heading.tsx`
- Create: `src/components/ui/text.tsx`
- Create: `src/components/ui/gradient-text.tsx`

- [ ] **Step 1: Build Heading** — levels 1-6, font-display for h1-h3, font-sans for h4-h6, responsive sizes
- [ ] **Step 2: Build Text** — sizes (xs-xl), weights, colors, as-prop (p/span/div)
- [ ] **Step 3: Build GradientText** — gold, navy-to-gold, custom gradient prop
- [ ] **Step 4: Commit**

```bash
git commit -m "feat(components): typography — Heading, Text, GradientText"
```

---

### Task 9: Button + Badge

**Files:**
- Create: `src/components/ui/button.tsx`
- Create: `src/components/ui/badge.tsx`

- [ ] **Step 1: Build Button** — 5 variants (primary/secondary/ghost/outline/danger) × 3 sizes, loading state, icon support, disabled, focus ring, hover animations (scale + shadow)
- [ ] **Step 2: Build Badge** — default/success/warning/premium/danger variants, icon prefix, pill shape
- [ ] **Step 3: Commit**

```bash
git commit -m "feat(components): Button (5 variants, 3 sizes) + Badge (5 variants)"
```

---

### Task 10: Card Components

**Files:**
- Create: `src/components/ui/card.tsx`

- [ ] **Step 1: Build Card** — 4 variants (solid/glass/elevated/interactive), hover lift on interactive, CardHeader/CardContent/CardFooter sub-components, dark mode support
- [ ] **Step 2: Commit**

```bash
git commit -m "feat(components): Card (solid/glass/elevated/interactive) with sub-components"
```

---

### Task 11: Input Components

**Files:**
- Create: `src/components/ui/input.tsx`
- Create: `src/components/ui/select.tsx`
- Create: `src/components/ui/slider.tsx`
- Create: `src/components/ui/checkbox.tsx`
- Create: `src/components/ui/switch.tsx`
- Create: `src/components/ui/file-upload.tsx`

- [ ] **Step 1: Build TextInput** — label, placeholder, error state, helper text, icon prefix/suffix, sizes
- [ ] **Step 2: Build Select** — native select with custom styling, label, error state
- [ ] **Step 3: Build Slider** — range input with gold accent, label, value display, step support
- [ ] **Step 4: Build Checkbox + Switch** — Radix primitives, gold accent, label
- [ ] **Step 5: Build FileUpload** — drag-and-drop (react-dropzone), file list, remove, size limit, accept prop
- [ ] **Step 6: Commit**

```bash
git commit -m "feat(components): input primitives — TextInput, Select, Slider, Checkbox, Switch, FileUpload"
```

---

### Task 12: Navigation Components

**Files:**
- Create: `src/components/layout/navbar.tsx`
- Create: `src/components/layout/footer.tsx`
- Create: `src/components/layout/sidebar.tsx`
- Create: `src/components/layout/mobile-nav.tsx`
- Create: `src/components/ui/tabs.tsx`
- Create: `src/components/ui/breadcrumb.tsx`
- Create: `src/components/ui/logo.tsx`

- [ ] **Step 1: Build Logo** — geometric gold square + text, size/variant props
- [ ] **Step 2: Build Navbar** — glass on scroll, Logo, nav links (white on dark hero, dark on scroll), CTAs, mobile hamburger with sheet, adaptive to page background
- [ ] **Step 3: Build Footer** — 4-column sitemap, regulatory badges, NBFC registration, dark bg
- [ ] **Step 4: Build Sidebar** — role-aware nav links, collapsible (256→64px), Logo, sign out, active state
- [ ] **Step 5: Build MobileNav** — fixed bottom bar, 4-5 icons, role-aware
- [ ] **Step 6: Build Tabs** — Radix Tabs with gold underline indicator, animated
- [ ] **Step 7: Build Breadcrumb** — auto-generated from pathname, chevron separators
- [ ] **Step 8: Commit**

```bash
git commit -m "feat(components): navigation — Navbar, Footer, Sidebar, MobileNav, Tabs, Breadcrumb, Logo"
```

---

### Task 13: Feedback Components

**Files:**
- Create: `src/components/ui/modal.tsx`
- Create: `src/components/ui/drawer.tsx`
- Create: `src/components/ui/tooltip.tsx`
- Create: `src/components/ui/popover.tsx`
- Create: `src/components/ui/alert.tsx`

- [ ] **Step 1: Build Modal** — Radix Dialog, overlay blur, scale-in animation, sizes (sm/md/lg/full), close button
- [ ] **Step 2: Build Drawer** — Radix Dialog, slide from right/bottom, overlay
- [ ] **Step 3: Build Tooltip** — Radix Tooltip, delay, placement
- [ ] **Step 4: Build Popover** — Radix Popover, placement, arrow
- [ ] **Step 5: Build Alert** — info/success/warning/error variants, icon, dismissible
- [ ] **Step 6: Commit**

```bash
git commit -m "feat(components): feedback — Modal, Drawer, Tooltip, Popover, Alert (all Radix-based)"
```

---

### Task 14: Data Display Components

**Files:**
- Create: `src/components/ui/data-table.tsx`
- Create: `src/components/ui/stat-card.tsx`
- Create: `src/components/ui/timeline.tsx`
- Create: `src/components/ui/progress-bar.tsx`
- Create: `src/components/ui/skeleton.tsx`
- Create: `src/components/ui/empty-state.tsx`

- [ ] **Step 1: Build DataTable** — header styling, sortable columns, responsive (card on mobile), loading skeleton state
- [ ] **Step 2: Build StatCard** — title, value, trend (up/down/neutral), icon, hover shadow
- [ ] **Step 3: Build Timeline** — vertical timeline with dots, connector lines, status colors
- [ ] **Step 4: Build ProgressBar** — percentage fill, gold gradient, label
- [ ] **Step 5: Build Skeleton** — generic shimmer, StatCardSkeleton, TableSkeleton presets
- [ ] **Step 6: Build EmptyState** — icon, title, description, action button, illustration area
- [ ] **Step 7: Commit**

```bash
git commit -m "feat(components): data display — DataTable, StatCard, Timeline, ProgressBar, Skeleton, EmptyState"
```

---

### Task 15: Trust + 3D Components

**Files:**
- Create: `src/components/ui/security-badge.tsx`
- Create: `src/components/ui/compliance-banner.tsx`
- Create: `src/components/ui/partner-logos.tsx`
- Create: `src/components/three/spline-scene.tsx`
- Create: `src/components/three/r3f-canvas.tsx`
- Create: `src/components/three/particle-field.tsx`

- [ ] **Step 1: Build SecurityBadge** — shield icon + text, variants (nbfc/rbi/escrow/rera)
- [ ] **Step 2: Build ComplianceBanner** — full-width regulatory notice strip
- [ ] **Step 3: Build PartnerLogos** — grayscale → color on hover, responsive grid
- [ ] **Step 4: Build SplineScene** — lazy-loaded Spline viewer wrapper with loading fallback
- [ ] **Step 5: Build R3FCanvas** — React Three Fiber canvas wrapper with suspense boundary, fallback
- [ ] **Step 6: Build ParticleField** — ambient background particles (gold dots, slow float), R3F-based
- [ ] **Step 7: Commit**

```bash
git commit -m "feat(components): trust badges + 3D wrappers (Spline, R3F Canvas, ParticleField)"
```

---

## Phase 4: Motion System (Tasks 16-18)

### Task 16: Framer Motion Components

**Files:**
- Create: `src/components/motion/scroll-reveal.tsx`
- Create: `src/components/motion/stagger-children.tsx`
- Create: `src/components/motion/animated-counter.tsx`
- Create: `src/components/motion/page-transition.tsx`
- Create: `src/components/motion/fade-in.tsx`

- [ ] **Step 1: Build ScrollReveal** — IntersectionObserver-triggered, configurable direction/distance/delay
- [ ] **Step 2: Build StaggerChildren + StaggerItem** — parent/child stagger pattern
- [ ] **Step 3: Build AnimatedCounter** — RAF-based number ticker, eased, decimal support, INR formatting
- [ ] **Step 4: Build PageTransition** — fade+translate wrapper for page content
- [ ] **Step 5: Build FadeIn + ScaleIn** — simple entry animations
- [ ] **Step 6: Commit**

```bash
git commit -m "feat(motion): Framer Motion system — ScrollReveal, StaggerChildren, AnimatedCounter, PageTransition"
```

---

### Task 17: GSAP ScrollTrigger Setup

**Files:**
- Create: `src/components/motion/scroll-pin-section.tsx`
- Create: `src/components/motion/text-reveal.tsx`
- Create: `src/lib/gsap-register.ts`

- [ ] **Step 1: Create gsap-register.ts** — register ScrollTrigger plugin (client-side only)
- [ ] **Step 2: Build ScrollPinSection** — CSS sticky-based scroll progress (no GSAP SSR issues), children receive progress 0-1
- [ ] **Step 3: Build TextReveal** — GSAP SplitText-style word/character reveal on scroll
- [ ] **Step 4: Commit**

```bash
git commit -m "feat(motion): GSAP ScrollTrigger — ScrollPinSection, TextReveal, plugin registration"
```

---

### Task 18: Command Palette

**Files:**
- Create: `src/components/composite/command-palette.tsx`

- [ ] **Step 1: Build CommandPalette** — cmdk-based, Cmd/Ctrl+K global shortcut, fuzzy search, sections (Navigation, Properties, AI Commands, Quick Actions), keyboard nav, Framer Motion panel slide
- [ ] **Step 2: Register global keyboard listener in root layout**
- [ ] **Step 3: Commit**

```bash
git commit -m "feat(composite): Cmd+K command palette with fuzzy search and AI commands"
```

---

## Phase 5: Verify & Ship Foundation (Task 19)

### Task 19: Final Verification + Component Index

**Files:**
- Create: `src/components/ui/index.ts` (barrel export)
- Create: `src/components/motion/index.ts`
- Create: `src/components/three/index.ts`

- [ ] **Step 1: Create barrel exports for all component directories**
- [ ] **Step 2: Build passes with zero type errors**

```bash
npx next build
```

- [ ] **Step 3: Push to GitHub**

```bash
git push origin main
```

- [ ] **Step 4: Verify deployment on Vercel**
- [ ] **Step 5: Update tasks/todo.md with Sub-Project 1 completion**

---

## Summary

19 tasks, ~50 steps, producing a complete premium design system ready for Sub-Project 2 (Marketing Website) to build upon. Each task is self-contained and produces a working commit.
