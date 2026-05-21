# NWTR — Project Tasks

## Documentation Generation
- [x] Repository structure setup
- [x] README.md with full navigation
- [x] Executive & Business documents (11 docs)
- [x] Product documents (16 docs)
- [x] Technical architecture documents (10 docs)
- [x] UX/UI specification documents (9 docs)
- [x] Appendix documents (3 docs)
- [x] Cross-linking & consistency review

## Website Implementation (Phase 1 — Public)
- [x] Next.js 15 + TypeScript + TailwindCSS scaffold with design tokens
- [x] UI primitives (Button, Card, Badge, Container, Navbar, Footer)
- [x] Motion system (ScrollReveal, AnimatedCounter, ScrollPinSection)
- [x] Hero section with floating cards and animated trust badges
- [x] "How It Works" 5-scene scroll-pinned animation
- [x] Value Proposition, Trust Indicators, Deposit Simulator, FAQ, CTA sections
- [x] Additional pages (/how-it-works, /for-tenants, /for-owners, /trust-security, /about)
- [x] SEO (sitemap, robots.txt, structured data, OG meta)
- [x] Deployed to Vercel: https://nwtr-web.vercel.app

## Full-Stack Build (Phase 2 — Backend + Portals)
- [x] Prisma schema (User, Property, Deposit, Investment, Payout, Agreement, KYC, AuditLog)
- [x] NextAuth.js v5 with credentials + JWT sessions
- [x] RBAC middleware (5 roles: Tenant, Owner, RM, Admin, Super Admin)
- [x] API routes: Properties (CRUD, search), Deposits (create, simulate), Payouts, Users, KYC
- [x] Auth pages (login, register) with premium dark UI
- [x] Dashboard layout (sidebar, header, responsive)
- [x] Tenant Portal (overview, properties, deposit timeline)
- [x] Owner Portal (overview, property management, payout history)
- [x] RM Portal (pipeline metrics, tasks, client management)
- [x] Admin Portal (platform KPIs, user management, analytics)
- [x] AI Chat assistant (OpenAI GPT-4o-mini streaming, floating widget)
- [x] Database seed script (20 properties, 5 users, deposits, payouts)
- [x] Deployed to Vercel (auto-deploy from GitHub)

## Pre-Launch Regulatory
- [ ] Engage tier-1 legal firm for CIS vs NBFC deposit opinion
- [ ] Identify NBFC partner candidates
- [ ] RERA registration assessment
- [ ] DPDP Act compliance review

## Go-to-Market
- [ ] Bangalore pilot market analysis
- [ ] Initial property owner acquisition strategy
- [ ] HNI tenant acquisition channels
- [ ] RM hiring & training framework

## Future Phases
- [ ] Connect Neon PostgreSQL (production database)
- [ ] Run prisma migrate + seed on production
- [ ] Add OpenAI API key to Vercel env vars
- [ ] Real-time notifications (Pusher/Ably)
- [ ] File upload for KYC documents (Vercel Blob)
- [ ] Email notifications (Resend)
- [ ] Mobile responsive testing + PWA
