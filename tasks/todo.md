# NWTR — Project Tasks

## Sub-Project 1: Design System & Foundation ✅ COMPLETE
- [x] Fresh Next.js 15 scaffold (v2.0.0 rebuild)
- [x] Design token system (navy/gold/surface/semantic, 11+ shades each)
- [x] Font system (Inter, Satoshi, Playfair Display, JetBrains Mono)
- [x] Root layout (metadata, OG, structured data, PWA manifest, skip-to-content)
- [x] Utility layer (cn, formatCurrency, motion constants, app constants)
- [x] Theme Provider + Toast Provider (dark mode, animated notifications)
- [x] Zustand stores (UI state, property comparison, favorites)
- [x] Layout components (Container, Section, Divider, Spacer)
- [x] Typography (Heading, Text, GradientText)
- [x] Button (5 variants × 3 sizes) + Badge (6 variants)
- [x] Card (4 variants + sub-components)
- [x] Inputs (TextInput, Select, Slider, Switch, FileUpload)
- [x] Navigation (Navbar, Footer, Sidebar, MobileNav, Tabs, Breadcrumb, Logo)
- [x] Feedback (Modal, Drawer, Tooltip, Alert — all Radix-based)
- [x] Data Display (DataTable, StatCard, Timeline, ProgressBar, Skeleton, EmptyState)
- [x] Trust (SecurityBadge, ComplianceBanner, PartnerLogos)
- [x] 3D (SplineScene, R3FCanvas, ParticleField)
- [x] Motion (ScrollReveal, StaggerChildren, AnimatedCounter, PageTransition, FadeIn, ScrollPin)
- [x] Command Palette (Cmd+K, cmdk-based, fuzzy search, AI commands)
- [x] Barrel exports (ui/index.ts, motion/index.ts, three/index.ts)
- [x] Build passes (zero type errors, 103 kB first load)
- [x] Pushed to GitHub + Vercel auto-deploy
- [x] GitNexus indexed (2,731 nodes, 3,184 edges)

## Sub-Project 2: Marketing Website 🔜 NEXT
- [ ] 3D Hero section (Spline vault + dark cinematic background)
- [ ] Scroll-driven "How It Works" storytelling (5 scenes)
- [ ] Stats bar with animated counters
- [ ] Value proposition (tenant + owner sections)
- [ ] Trust & security section
- [ ] Deposit simulator (interactive sliders + comparison chart)
- [ ] FAQ accordion
- [ ] CTA section
- [ ] Property browse page (/properties)
- [ ] Property detail page (/properties/[id])
- [ ] /for-tenants, /for-owners, /trust-security, /about, /calculator
- [ ] Loading screen (branded animation)
- [ ] Activity ticker (social proof)

## Sub-Project 3: Core Business Engine
- [ ] Prisma schema (full — already exists)
- [ ] API routes (Properties, Deposits, Payouts, Users, KYC)
- [ ] Business logic (deposit calc, payout scheduling, KYC gating, state machines)
- [ ] Auth (NextAuth.js, credentials, RBAC middleware)
- [ ] Seed script

## Sub-Project 4: Portal Dashboards
- [ ] Shared dashboard shell (sidebar, header, Cmd+K, mobile nav)
- [ ] Tenant Portal (6 pages)
- [ ] Owner Portal (5 pages)
- [ ] RM Portal (6 pages)
- [ ] Admin Portal (8 pages)
- [ ] Auth pages (login, register)

## Sub-Project 5: AI & Intelligence
- [ ] AI Chat with function calling (6 tools)
- [ ] Smart property search (NL → filters)
- [ ] Command palette AI integration
- [ ] Activity ticker + personalized counters
- [ ] Recommendations engine

## Documentation
- [x] 49 specification documents (exec, product, technical, UX, appendix)
- [x] API Integration Guide (mocked services tracker)
- [x] Design Specification (complete rebuild)
- [x] Implementation Plan (Sub-Project 1)
- [x] GitNexus indexed

## Infrastructure
- [x] Deployed to Vercel (auto-deploy from GitHub)
- [ ] Connect Neon PostgreSQL
- [ ] Add OpenAI API key
- [ ] Add NEXTAUTH_SECRET
- [ ] Configure Vercel Blob for file uploads
