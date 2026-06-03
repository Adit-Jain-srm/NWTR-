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

## Sub-Project 2: Marketing Website ✅ COMPLETE
- [x] 3D Hero section (dark cinematic bg + gold typography + floating cards)
- [x] Scroll-driven "How It Works" storytelling (5 scenes, ScrollPinSection)
- [x] Stats bar with animated counters (4 metrics)
- [x] Value proposition (tenant + owner benefit cards, stagger animations)
- [x] Trust & security section (6 features + partner logos)
- [x] Deposit simulator (interactive sliders + comparison bars)
- [x] FAQ accordion (Radix-based, 3 categories, animated)
- [x] CTA section (navy bg, dual-persona buttons)
- [x] /for-tenants, /for-owners, /trust-security, /about, /how-it-works pages
- [x] SEO: sitemap.xml + robots.txt
- [x] Route group (marketing) with Navbar + Footer layout
- [x] Build: 9 routes, all static, 170 kB max first-load
- [x] Pushed to GitHub + Vercel auto-deploy
- [x] GitNexus indexed (2,851 nodes, 3,528 edges, 9 clusters, 27 flows)

## Sub-Project 3: Core Business Engine 🔜 NEXT
- [ ] Prisma schema (full — already exists from SP1)
- [ ] Prisma client singleton + seed script
- [ ] API routes: Auth (register, login via NextAuth)
- [ ] API routes: Properties (CRUD, search, verify)
- [ ] API routes: Deposits (create, simulate, status, cancel)
- [ ] API routes: Payouts (list, schedule, execute)
- [ ] API routes: Users (me, update profile)
- [ ] API routes: KYC (submit, status, verify)
- [ ] Business logic: deposit calculation engine
- [ ] Business logic: payout scheduling + state machine
- [ ] Business logic: KYC tier gating
- [ ] Business logic: trust score computation
- [ ] RBAC middleware (requireRole, requirePermission)
- [ ] Standard API response envelope + error codes
- [ ] Database seed (20 properties, 5 users, deposits, payouts)

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
