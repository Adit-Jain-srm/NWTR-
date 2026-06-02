# NWTR Complete Rebuild — Design Specification

**Date:** 2026-06-03  
**Status:** Draft  
**Scope:** Full end-to-end rebuild of NWTR platform — Awwwards-quality marketing site + all portals + 3D animations + full business logic

---

## 1. Strategic Intent

Rebuild NWTR from scratch as an Awwwards-quality, production-grade fintech-proptech platform. The result must feel like a funded Series A startup's product — cinematic marketing, real transactional flows, premium dashboards, and AI intelligence throughout. No placeholders, no shortcuts, no generic patterns.

**Success Criteria:**
- Visitor says "this looks like it cost ₹2 Cr to build"
- Investor says "this team clearly knows what they're doing"
- User says "I trust this with ₹75 lakh"
- Designer says "this could win Awwwards Site of the Day"

---

## 2. Technical Architecture (Complete Rebuild)

### Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | Next.js 15 (App Router) | SSR/ISR, API routes, edge middleware |
| Language | TypeScript (strict) | Type safety for financial logic |
| Styling | TailwindCSS v4 + CSS variables | Design token system, dark mode |
| UI Motion | Framer Motion | Page transitions, micro-interactions |
| Scroll Animation | GSAP + ScrollTrigger | Scroll-driven storytelling, pinning |
| 3D (Hero/Marketing) | Spline (@splinetool/react-spline) | Pre-built 3D scenes, interactive |
| 3D (Interactive) | React Three Fiber + Drei | Custom particles, property cards, vault |
| Database | PostgreSQL (Neon serverless) | Financial data, ACID compliance |
| ORM | Prisma v5 | Type-safe queries, migrations |
| Auth | NextAuth.js v5 (Auth.js) | JWT sessions, RBAC, credentials |
| AI | Vercel AI SDK + OpenAI | Streaming chat, function calling, RAG |
| Validation | Zod | Schema validation, API contracts |
| State | Zustand | Client state (comparison, favorites) |
| Charts | Recharts | Dashboard analytics |
| Deployment | Vercel | Auto-deploy, edge functions, preview |
| Email | Resend | Transactional emails |
| Storage | Vercel Blob | KYC document uploads |

### New Packages (vs current)

```
@splinetool/react-spline     # Spline 3D scenes
@react-three/fiber            # React Three Fiber
@react-three/drei             # R3F helpers (Float, Text3D, etc.)
three                         # Three.js core
zustand                       # State management
@radix-ui/react-dialog        # Accessible modals
@radix-ui/react-tabs          # Accessible tabs
@radix-ui/react-accordion     # Accessible accordion
cmdk                          # Command palette
react-day-picker              # Date picker
input-otp                     # OTP input for Aadhaar
react-dropzone                # File upload
sharp                         # Image optimization
@vercel/og                    # Dynamic OG images
@vercel/blob                  # File storage
```

---

## 3. Sub-Project 1: Design System & Foundation

### 3.1 Design Tokens

Defined as CSS custom properties in `globals.css` and consumed via Tailwind `@theme`:

**Colors:** Navy (11 shades), Gold (10 shades), Surface (3), Emerald (success), Red (error), Amber (warning)  
**Typography:** 4 font families, fluid type scale (clamp-based), tabular figures for financial data  
**Spacing:** 4px baseline grid, 8px component rhythm  
**Shadows:** 5 elevation levels (sm, md, lg, xl, gold-glow)  
**Radius:** 5 levels (sm: 6px through 2xl: 24px)  
**Motion:** 4 duration tiers, 3 easing curves, stagger timing constants  

### 3.2 Component Library (42 components)

**Layout (6):** Container, Section, Grid, Stack, Divider, Spacer  
**Typography (4):** Heading, Text, GradientText, Code  
**Buttons (1 component, 5 variants):** Primary, Secondary, Ghost, Outline, Danger × 3 sizes  
**Inputs (8):** TextInput, Select, Slider, Checkbox, Radio, Switch, FileUpload, OTPInput  
**Cards (4 variants):** Solid, Glass, Elevated, Interactive  
**Navigation (6):** Navbar, Sidebar, MobileNav, Breadcrumb, Tabs, Pagination  
**Feedback (6):** Toast, Modal, Drawer, Tooltip, Popover, Alert  
**Data Display (5):** DataTable, StatCard, Timeline, ProgressBar, Badge  
**Trust (3):** SecurityBadge, ComplianceBanner, PartnerLogos  
**3D (3):** SplineScene, R3FCanvas, ParticleField  
**Composite (2):** CommandPalette, AIChat  

### 3.3 Motion System

**Framer Motion variants:**
- `fadeUp` — standard page entry (y:20→0, opacity:0→1, 300ms)
- `staggerChildren` — list/grid reveal (50-75ms stagger)
- `scaleIn` — modal/popover entry (scale:0.95→1)
- `slideIn` — drawer/panel entry (x or y offset)
- `counter` — number ticker (RAF-based, eased)

**GSAP animations:**
- Scroll-pinned storytelling (5-scene "How It Works")
- Parallax backgrounds
- SVG path drawing (vault, timeline, flow diagrams)
- Text reveal (split by word/character)

**3D animations:**
- Spline: Hero vault scene, floating property cards, money-flow visualization
- R3F: Interactive deposit flow particles, property 3D showcase, ambient background

### 3.4 Dark Mode

Full dark mode via `class` strategy on `<html>`:
- System preference detection
- Manual toggle (persisted in localStorage)
- Every component has explicit `dark:` variants
- Dark mode color mapping: navy-900→surface, navy-100→text, gold stays gold

---

## 4. Sub-Project 2: Marketing Website

### 4.1 Pages

| Route | Purpose | Key Features |
|-------|---------|-------------|
| `/` | Landing page | 3D hero, scroll storytelling, deposit simulator, trust section, FAQ, CTA |
| `/how-it-works` | Full explainer | Step-by-step animated journey, embedded calculator |
| `/properties` | Public property browse | Grid with filters, 3D hover cards, comparison |
| `/properties/[id]` | Property detail | Image gallery, deposit calc, schedule viewing, neighborhood |
| `/for-tenants` | Tenant value prop | Journey visualization, savings calculator, testimonials |
| `/for-owners` | Owner value prop | Payout calculator, listing process, guarantees |
| `/trust-security` | Trust page | Security architecture, regulatory badges, fund safety |
| `/calculator` | Standalone deposit calculator | Full-featured with shareable results |
| `/about` | Company | Team, mission, vision, press, contact |
| `/blog` | Content | SEO articles (placeholder structure) |
| `/contact` | Contact | Form + office address + WhatsApp CTA |
| `/nri` | NRI-specific landing | NRI pain points, cross-border deposit |
| `/terms`, `/privacy` | Legal | Rendered markdown |

### 4.2 Hero Section (3D)

- **Spline scene:** A premium 3D vault/safe that opens as user scrolls, with golden particles flowing through instruments and back
- **Fallback:** If Spline fails to load → CSS gradient with floating property cards (current approach)
- **Text overlay:** "The Future of Intelligent Renting" in Playfair Display, gold gradient
- **Trust badges:** Animated entry below hero
- **CTAs:** Gold primary + white ghost, with gold shadow glow on hover
- **Scroll indicator:** Animated pill at bottom

### 4.3 Scroll Storytelling ("How It Works")

5-scene scroll-pinned section using GSAP ScrollTrigger:
1. **The Problem** — Split screen showing rent burn + vacancy (SVG animations)
2. **The Deposit** — 3D vault opens, deposit amount enters (Spline/R3F)
3. **The Investment** — Particles flow to instrument cards, yield counters animate (R3F)
4. **Everyone Wins** — Three columns animate in (owner payout, tenant free, NWTR secured)
5. **The Return** — Timeline fills, deposit returns, celebration (confetti + CTA)

### 4.4 Trust Architecture (from docs)

Every page must have contextual trust signals:
- **Above fold:** NBFC badge, RBI compliance, "100% refundable"
- **Near CTAs:** Security badges, partner logos
- **Footer:** Registration number, physical address, regulatory text
- **Property pages:** Verified badge, inspection date, RERA ID
- **Financial pages:** Escrow protection indicator, audit trail link

---

## 5. Sub-Project 3: Core Business Engine

### 5.1 Database (Prisma Schema)

10 core models with full relations:
- User (5 roles, KYC tier, trust score)
- Property (listing lifecycle, verification)
- Deposit (multi-state machine, investment link)
- Investment (instrument allocation)
- Payout (monthly scheduling, retry logic)
- Agreement (tri-party signing)
- KYCRecord (3-tier, document storage)
- Notification (templates, preferences)
- AuditLog (immutable, compliance)
- RMAssignment (relationship tracking)

### 5.2 API Routes (47+ endpoints)

All following the documented contract:
- Standard response envelope `{ success, data, meta }` or `{ success, error, meta }`
- Zod validation on all inputs
- RBAC via `requireRole()` middleware
- Rate limiting headers
- Proper HTTP status codes

### 5.3 Business Logic

**Critical calculations implemented in code:**
- Deposit amount = property value × percentage (70-80%)
- Monthly payout = (deposit × blended yield 7.5%) / 12
- Early exit penalty (tiered by months completed)
- Pro-rata first month calculation
- Trust score computation (0-100)

**State machines:**
- Deposit: 10 states with valid transitions
- Payout: 5 states with retry logic
- KYC: per-tier progression
- Property: 6 listing states

---

## 6. Sub-Project 4: Portal Dashboards

### 6.1 Shared Dashboard Shell

- Collapsible sidebar (256px → 64px) with role-aware navigation
- Top header with user info, notifications bell, theme toggle, Cmd+K trigger
- Breadcrumb navigation
- Command palette (Cmd+K) with fuzzy search across pages + AI commands
- AI chat widget (floating, contextual)
- Mobile: bottom nav + sheet drawers

### 6.2 Tenant Portal

| Page | Features |
|------|----------|
| Dashboard | Active deposit status, property card, days remaining, savings counter, recent activity |
| Property Discovery | Grid + list view, filters (BHK, city, price), 3D hover effect, comparison, favorites |
| Property Detail | Gallery, calculator, schedule viewing, neighborhood, amenities |
| Deposit Checkout | Multi-step: eligibility → configure → review → confirm (with vault animation) |
| My Deposit | Status timeline, investment breakdown, payout history, early exit calculator |
| KYC | 3-tier submission flow, progress, document upload, video KYC scheduling |
| Documents | Uploaded docs grid, agreement copies, download |
| Support | AI chat, RM contact card, help articles |

### 6.3 Owner Portal

| Page | Features |
|------|----------|
| Dashboard | Payout summary, property occupancy, next payout date, total earned |
| My Properties | Grid with status, add new listing wizard, edit, delist |
| List Property | 5-step wizard: basics → photos → amenities → pricing → review |
| Payouts | History table, summary cards, bank details, download statement |
| Tenants | Current tenants per property, trust score, contact |
| Support | AI chat, RM contact |

### 6.4 RM Portal

| Page | Features |
|------|----------|
| Dashboard | Pipeline metrics, active leads, pending tasks, performance |
| Clients | Assigned clients table, KYC status, deposit status, contact |
| Properties | Verification queue, inspection scheduling, approval workflow |
| Tasks | Kanban or list with priority, due date, status |
| Deals | Active deals, conversion funnel, revenue attribution |
| Performance | Charts: deals closed, SLA compliance, client satisfaction |

### 6.5 Admin Portal

| Page | Features |
|------|----------|
| Dashboard | Platform KPIs (6 stat cards), quick actions, alerts |
| Users | Table with search, filter by role/status/KYC, assign RM, suspend |
| Properties | Approval queue, all listings, verification status, map view |
| Deposits | All deposits, lifecycle view, intervention tools |
| Payouts | Scheduling engine, batch execution, reconciliation, failed retry |
| KYC Queue | Pending reviews, approve/reject with notes |
| Compliance | Audit logs, regulatory reports, data export |
| Analytics | Revenue charts, user growth, deposit volume, payout trends |

---

## 7. Sub-Project 5: AI & Intelligence

### 7.1 AI Chat (Upgraded)

- Streaming responses via Vercel AI SDK
- 6 tools via function calling:
  - `searchProperties(filters)` → returns matching properties as rich cards
  - `calculateDeposit(propertyId, percentage)` → returns calculation breakdown
  - `checkEligibility(depositAmount)` → returns KYC/income requirements
  - `scheduleViewing(propertyId, datetime)` → confirms booking
  - `explainSecurity(topic)` → RAG-powered trust explanation
  - `compareProperies(ids[])` → side-by-side comparison

### 7.2 Command Palette (Cmd+K)

- Fuzzy search across: pages, properties, actions, AI commands
- Recent items, pinned actions
- Keyboard navigation (arrows, enter, escape)
- Sections: Navigation, Properties, AI Commands, Quick Actions

### 7.3 Smart Features

- Personalized property recommendations on tenant dashboard
- "You're saving ₹X today" live counter
- Activity ticker on landing page (social proof)
- Contextual help tooltips on financial terms
- Predictive search suggestions

---

## 8. Quality Standards

### Performance Targets
- LCP < 2.5s (all pages)
- FID < 100ms
- CLS < 0.1
- First-load JS < 200KB (marketing), < 150KB (dashboard)
- 3D scenes lazy-loaded, with graceful fallback

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigable (all interactive elements)
- Screen reader compatible (ARIA labels)
- Focus management on modals/drawers
- Reduced motion support (all animations)
- Color contrast 4.5:1 minimum

### Mobile
- Fully responsive (375px → 1536px)
- Touch-friendly (44px minimum tap targets)
- Bottom navigation on dashboard
- Swipe gestures on carousels
- PWA manifest for add-to-homescreen

### SEO
- Per-page metadata (title, description, OG)
- Dynamic OG images for property pages (`@vercel/og`)
- JSON-LD structured data (Organization, RealEstateListing)
- Sitemap + robots.txt
- Canonical URLs

---

## 9. Execution Order

```
Sub-Project 1 (Foundation)     → 8-10 commits
Sub-Project 2 (Marketing)      → 10-12 commits
Sub-Project 3 (Business Logic) → 6-8 commits
Sub-Project 4 (Portals)        → 12-15 commits
Sub-Project 5 (AI/Intelligence)→ 5-7 commits
Polish + Deploy                → 3-5 commits
─────────────────────────────────────────
Total                          → ~50 commits
```

Each commit:
- Ships a self-contained, working increment
- Passes `next build` with zero type errors
- Gets pushed to GitHub (auto-deploys to Vercel)
- Is verified visually before moving on

---

## 10. Out of Scope (Explicitly)

- Real NBFC integration (API-ready, mock responses)
- Real payment processing (Razorpay integration structure only)
- Real KYC verification services (DigiLocker, CKYC — UI complete, backend mocked)
- Native mobile app (PWA is sufficient)
- Investor Portal (Phase 2 per docs)
- Partner/Broker Portal (Phase 3 per docs)
- Blog CMS (structure + placeholder only)
- Email delivery (Resend structure, needs API key)

These are API-ready with proper interfaces — can be activated by plugging in credentials.
