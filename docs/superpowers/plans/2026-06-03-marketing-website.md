# NWTR Sub-Project 2: Marketing Website — Implementation Plan

> **For agentic workers:** Execute SEQUENTIALLY — no parallel subagents. Each task produces a working commit.

**Goal:** Build an Awwwards-quality marketing website with 3D hero, scroll-driven storytelling, premium animations, and full trust architecture.

**Architecture:** Uses the complete component library from Sub-Project 1. Marketing pages use the Navbar + Footer layout. 3D via Spline for hero, R3F for particles. GSAP-style scroll storytelling via ScrollPinSection.

---

## Tasks

### Task 1: Hero Section with 3D Background
- 3D Spline scene fallback to dark gradient + particles
- "The Future of Intelligent Renting" headline (Playfair, gold gradient)
- Subheadline, CTAs (gold primary + ghost), trust badges
- Floating property cards with ambient animation
- Scroll indicator at bottom

### Task 2: Stats Bar
- Animated counters: ₹30,000+ Cr market, 7.5% yield, 100% returned, ₹0 rent
- Navy background, gold underline accents

### Task 3: "How It Works" Scroll Explainer
- 5-scene scroll-pinned section (ScrollPinSection)
- Scene 1: The Problem (rent burn + vacancy)
- Scene 2: The Deposit (vault animation)
- Scene 3: The Investment (yield instruments)
- Scene 4: Everyone Wins (tri-column)
- Scene 5: The Return (timeline + CTA)

### Task 4: Value Proposition Section
- Tenant benefits (4 cards, stagger reveal)
- Owner benefits (4 cards, stagger reveal)
- "Learn More" CTAs linking to dedicated pages

### Task 5: Trust & Security Section
- 6 security feature cards
- Regulatory partner logos
- ComplianceBanner usage

### Task 6: Deposit Simulator
- Property value slider (₹50L - ₹5Cr)
- Deposit percentage slider (50-80%)
- Live calculation results
- 3-year comparison bars (rent vs NWTR)

### Task 7: FAQ Section
- Accordion (Radix-based) with AnimatePresence
- 3 categories: Tenants, Owners, Security

### Task 8: CTA Section + Footer Integration
- Full-width navy CTA
- Dual buttons (tenant/owner)
- Assemble full page with all sections

### Task 9: Additional Pages
- /for-tenants, /for-owners, /trust-security, /about
- /how-it-works (full page version)
- /properties (placeholder grid with property cards)

### Task 10: Loading Screen + Final Polish
- Branded loading animation (NWTR logo)
- SEO metadata per page
- Sitemap + robots.txt
- Push + verify deployment
