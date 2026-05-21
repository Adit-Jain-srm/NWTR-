---
title: Feature Specifications
version: "1.0"
audience: Product, Engineering, QA, Design
last-updated: 2026-05-21
status: draft
related-docs:
  - "./prd.md"
  - "./user-stories.md"
  - "../02-technical/api-contracts.md"
---

# Feature Specifications — NWTR

## TL;DR

Detailed feature specifications for all 5 NWTR portals, covering 70+ features with user stories, acceptance criteria, priority levels, and dependencies. Each feature is defined with enough granularity for sprint planning and development.

---

## 1. Public Website Features

### F-PW-01: Landing Page

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As a visitor, I want to understand NWTR's value proposition immediately, so that I can decide if it's relevant to me. |
| Dependencies | Brand guidelines, property data |

**Acceptance Criteria:**
- [ ] Hero section communicates "Live rent-free" value prop within 3 seconds
- [ ] Deposit calculator CTA above the fold
- [ ] Trust indicators visible (NBFC partner, security badges, media mentions)
- [ ] Page loads in < 2s on 4G connection
- [ ] Responsive across mobile, tablet, desktop
- [ ] SEO meta tags, OG tags, structured data present

### F-PW-02: How It Works

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As a visitor, I want to understand the NWTR model step-by-step, so that I can trust the process. |
| Dependencies | Illustration assets, animation library |

**Acceptance Criteria:**
- [ ] 4-step visual flow: Deposit → Live Free → Owner Gets Paid → Get Money Back
- [ ] Each step expandable with detailed explanation
- [ ] Animated transitions between steps
- [ ] Separate tenant and owner perspective toggles
- [ ] FAQ section below with 5 most common questions
- [ ] CTA to deposit simulator at end

### F-PW-03: Property Discovery

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As a visitor, I want to browse available properties with filters, so that I can find properties matching my needs. |
| Dependencies | Property Service, Azure Cognitive Search |

**Acceptance Criteria:**
- [ ] Grid/list view toggle for property cards
- [ ] Filters: location, BHK type, deposit range, amenities, available date
- [ ] Map view with property pins (Google Maps integration)
- [ ] Sort by: deposit amount, area, newest, popularity
- [ ] Property cards show: image, location, BHK, area, deposit amount, monthly payout
- [ ] Pagination (20 per page) with infinite scroll option
- [ ] Save property requires login prompt
- [ ] SEO-friendly URLs per property (/properties/bangalore/koramangala/3bhk-azure-heights)

### F-PW-04: Deposit Calculator

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As a visitor, I want to simulate my deposit amount and potential savings, so that I can compare NWTR vs traditional rent. |
| Dependencies | Yield rate API, property data |

**Acceptance Criteria:**
- [ ] Inputs: property value OR monthly rent equivalent, tenure (12 months fixed in v1)
- [ ] Outputs: deposit amount, total savings vs rent, owner monthly payout, effective yield
- [ ] Visual comparison chart (NWTR deposit vs 12 months rent)
- [ ] Shareable results (URL with parameters)
- [ ] Lead capture CTA after simulation
- [ ] Real-time calculation (no page reload)

### F-PW-05: Trust & Security Page

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As a visitor, I want to understand how my deposit is protected, so that I can trust NWTR with large amounts. |
| Dependencies | NBFC partner details, compliance certificates |

**Acceptance Criteria:**
- [ ] NBFC partner information with RBI registration details
- [ ] Investment instrument breakdown (FDs, T-Bills, G-Secs)
- [ ] Security measures: encryption, audit, compliance
- [ ] Insurance and guarantee structure
- [ ] Regulatory compliance badges
- [ ] Testimonials/case studies from early users (Phase 2)
- [ ] Downloadable trust document (PDF)

### F-PW-06: FAQ Page

| Attribute | Detail |
|-----------|--------|
| Priority | P1 |
| User Story | As a visitor, I want searchable answers to common questions, so that I can resolve doubts without contacting support. |
| Dependencies | Content management |

**Acceptance Criteria:**
- [ ] Categorized FAQs: General, Tenants, Owners, Financial, Legal, Process
- [ ] Search with instant results (client-side filtering)
- [ ] Expandable accordion UI
- [ ] "Was this helpful?" feedback per answer
- [ ] Unanswered question routes to support form
- [ ] Schema markup for Google FAQ rich results

### F-PW-07: NRI Landing Page

| Attribute | Detail |
|-----------|--------|
| Priority | P1 |
| User Story | As an NRI, I want to see NWTR benefits specific to my situation (remote property management, INR returns), so that I understand why NWTR suits my needs. |
| Dependencies | NRI compliance research, forex considerations |

**Acceptance Criteria:**
- [ ] NRI-specific value propositions (manage from abroad, INR returns)
- [ ] FEMA/RBI compliance information for NRI deposits
- [ ] NRI-specific KYC flow explanation
- [ ] Currency display toggle (INR/USD/AED/GBP)
- [ ] Dedicated RM assignment CTA
- [ ] Success stories from NRI users (Phase 2)

### F-PW-08: Registration & Login

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As a visitor, I want to register/login quickly, so that I can access portal features. |
| Dependencies | Auth Service, SMS gateway |

**Acceptance Criteria:**
- [ ] Mobile number + OTP as primary auth
- [ ] Email + password as secondary option
- [ ] Social login (Google) for quick registration
- [ ] Role selection during registration (Tenant/Owner)
- [ ] Phone number verification mandatory
- [ ] Session persistence across tabs
- [ ] Redirect to intended page after login

### F-PW-09: Property Detail Page

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As a visitor, I want to see comprehensive property details, so that I can evaluate a property before scheduling a visit. |
| Dependencies | Property Service, image CDN |

**Acceptance Criteria:**
- [ ] Image gallery with zoom (min 5 images)
- [ ] Property specs: BHK, area, floor, facing, age, furnishing
- [ ] Deposit amount prominently displayed
- [ ] Amenities list with icons
- [ ] Location map with nearby landmarks
- [ ] Owner monthly payout displayed
- [ ] "Schedule Visit" CTA (requires login)
- [ ] Similar properties section
- [ ] Share property (copy link, WhatsApp)

### F-PW-10: Contact & Support

| Attribute | Detail |
|-----------|--------|
| Priority | P1 |
| User Story | As a visitor, I want multiple ways to reach NWTR support, so that I can get help with my specific query. |
| Dependencies | Support ticketing system |

**Acceptance Criteria:**
- [ ] Contact form with category selection
- [ ] WhatsApp chat link (business hours)
- [ ] Phone number with operating hours
- [ ] Email with auto-response confirmation
- [ ] Office address with Google Maps embed
- [ ] Callback request option

---

## 2. Tenant Portal Features

### F-TP-01: Tenant Dashboard

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As a tenant, I want a single view of my tenancy status, so that I can track my deposit, tenure, and upcoming actions. |
| Dependencies | Deposit Service, Agreement Service |

**Acceptance Criteria:**
- [ ] Active tenancy card with property details, tenure countdown
- [ ] Deposit status (amount, investment summary, current value)
- [ ] Next milestone notification (e.g., "90 days to renewal decision")
- [ ] Quick actions: contact RM, raise maintenance, view agreement
- [ ] Recent activity timeline
- [ ] Empty state for users without active tenancy (CTA to browse)

### F-TP-02: Eligibility Check

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As a tenant, I want to verify my eligibility before starting KYC, so that I don't waste time on a process I won't qualify for. |
| Dependencies | Credit Bureau API, eligibility rules engine |

**Acceptance Criteria:**
- [ ] Inputs: annual income, employment type, credit score consent, deposit budget
- [ ] Soft credit check (no impact on score)
- [ ] Instant result: Eligible / Conditionally Eligible / Not Eligible
- [ ] Clear reasons for conditional/rejection with remediation steps
- [ ] Eligible users get immediate CTA to start KYC
- [ ] Results stored for RM reference

### F-TP-03: KYC Submission (3-Tier)

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As a tenant, I want to complete KYC progressively, so that I can start browsing early and complete full verification when ready to deposit. |
| Dependencies | DigiLocker, CKYC, VKYC provider |

**Acceptance Criteria:**
- [ ] Tier 1 (Basic): PAN + Aadhaar verification via DigiLocker — unlocks full browsing
- [ ] Tier 2 (Enhanced): Address proof + income docs upload — unlocks visit scheduling
- [ ] Tier 3 (Full): Video KYC + bank statement verification — unlocks deposit
- [ ] Progress indicator showing completion percentage
- [ ] Document upload with format validation (PDF/JPG, < 5MB)
- [ ] Real-time verification status updates
- [ ] Re-upload option for rejected documents with clear rejection reason
- [ ] All documents stored encrypted with access audit

### F-TP-04: Property Search & Filter

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As a tenant, I want advanced property search with personalized filters, so that I can find properties matching my budget and preferences. |
| Dependencies | Search Service, Property Service |

**Acceptance Criteria:**
- [ ] All public website filters PLUS saved preferences
- [ ] Budget-aware filtering (only show properties within eligible deposit range)
- [ ] Recently viewed properties section
- [ ] Saved searches with notification on new matches
- [ ] Comparison view (up to 3 properties side-by-side)
- [ ] Distance from office/school calculator

### F-TP-05: Visit Scheduling

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As a tenant, I want to schedule property visits at convenient times, so that I can physically inspect shortlisted properties. |
| Dependencies | RM calendar, Owner availability, Notification Service |

**Acceptance Criteria:**
- [ ] Calendar view showing available slots (from owner/RM)
- [ ] Select date + time preference (morning/afternoon/evening)
- [ ] RM auto-assigned based on property location
- [ ] Confirmation via SMS + email + WhatsApp
- [ ] Reschedule/cancel with 24h notice
- [ ] Post-visit feedback form
- [ ] Visit history with notes

### F-TP-06: Agreement Review & Signing

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As a tenant, I want to review and digitally sign the rental agreement, so that I can formalize the tenancy securely. |
| Dependencies | Agreement Service, e-Sign provider, e-Stamp |

**Acceptance Criteria:**
- [ ] Full agreement preview in readable format (not just PDF)
- [ ] Key terms highlighted: deposit amount, tenure, owner payout, exit clauses
- [ ] Clause-by-clause acknowledgment for critical terms
- [ ] Aadhaar-based e-Sign integration
- [ ] Both parties must sign for agreement activation
- [ ] E-stamp duty auto-calculated and applied (state-specific)
- [ ] Signed agreement downloadable as PDF
- [ ] Agreement stored in Document Vault

### F-TP-07: Deposit Transfer

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As a tenant, I want to securely transfer my deposit with real-time tracking, so that I have confidence my funds are safe. |
| Dependencies | Bank API, Escrow account, Payment reconciliation |

**Acceptance Criteria:**
- [ ] Multiple transfer options: NEFT, RTGS, IMPS
- [ ] Escrow account details displayed with bank name and verification
- [ ] Real-time transfer status tracking (initiated → in-transit → received → confirmed)
- [ ] SMS + email confirmation at each stage
- [ ] Transfer receipt generated post-confirmation
- [ ] 48-hour window to complete transfer after agreement signing
- [ ] Support for split transfers (max 2 tranches)

### F-TP-08: Exit & Refund Initiation

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As a tenant, I want to initiate exit smoothly, so that I receive my deposit back as per the agreement timeline. |
| Dependencies | Deposit Service, NBFC liquidation API |

**Acceptance Criteria:**
- [ ] Exit initiation 60 days before tenure end (or early exit option)
- [ ] Clear timeline: notice period → inspection → liquidation → transfer
- [ ] Bank account confirmation for refund
- [ ] Status tracking at each stage
- [ ] Early exit terms clearly displayed (penalty if applicable)
- [ ] Property handover checklist
- [ ] Final settlement statement generated

### F-TP-09: Document Vault

| Attribute | Detail |
|-----------|--------|
| Priority | P1 |
| User Story | As a tenant, I want all my documents in one secure place, so that I can access agreements, receipts, and KYC docs anytime. |
| Dependencies | Blob Storage, Document Service |

**Acceptance Criteria:**
- [ ] Categorized view: Agreements, KYC, Receipts, Correspondence
- [ ] Download individual or bulk documents
- [ ] Document expiry alerts (e.g., address proof validity)
- [ ] Secure sharing via time-limited links
- [ ] Upload additional documents (utility bills for address change)

### F-TP-10: Communication Hub

| Attribute | Detail |
|-----------|--------|
| Priority | P1 |
| User Story | As a tenant, I want to communicate with my RM and receive notifications in one place, so that I don't miss important updates. |
| Dependencies | Notification Service, WebSocket |

**Acceptance Criteria:**
- [ ] In-app messaging with RM
- [ ] Notification center with read/unread status
- [ ] Categories: Urgent, Action Required, Informational
- [ ] Push notification preferences (email, SMS, WhatsApp, in-app)
- [ ] Message history preserved across sessions

---

## 3. Owner Portal Features

### F-OP-01: Property Listing

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As an owner, I want to list my property with complete details, so that qualified tenants can discover and apply. |
| Dependencies | Property Service, Image CDN, Geocoding API |

**Acceptance Criteria:**
- [ ] Multi-step form: Basic → Details → Photos → Pricing → Review
- [ ] Address with auto-complete and map pin
- [ ] Min 5, max 20 photos with drag-and-drop reorder
- [ ] Auto-suggest deposit amount based on property value/location
- [ ] Amenities checklist (50+ options categorized)
- [ ] Availability date selection
- [ ] Draft save and resume later
- [ ] Preview before submission

### F-OP-02: Owner KYC

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As an owner, I want to verify my identity and property ownership, so that tenants trust my listing. |
| Dependencies | DigiLocker, Property ownership verification |

**Acceptance Criteria:**
- [ ] Identity: PAN + Aadhaar (DigiLocker)
- [ ] Ownership: Property tax receipt OR sale deed OR society NOC
- [ ] Bank verification: Penny drop + cancelled cheque
- [ ] Video verification for property matching (Phase 2)
- [ ] Verification status visible on listing (verified badge)

### F-OP-03: Payout Tracking

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As an owner, I want to track my monthly payouts, so that I have visibility into my earning timeline and amounts. |
| Dependencies | Payout Service, Bank reconciliation |

**Acceptance Criteria:**
- [ ] Monthly payout calendar with amounts
- [ ] Status per payout: Scheduled → Processing → Credited → Confirmed
- [ ] Bank account details with option to update (requires re-verification)
- [ ] Annual summary for tax purposes
- [ ] TDS certificate download (if applicable)
- [ ] Payout failure alerts with resolution steps

### F-OP-04: Owner Dashboard

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As an owner, I want a comprehensive view of my property and earnings, so that I can manage my NWTR portfolio. |
| Dependencies | Multiple services |

**Acceptance Criteria:**
- [ ] Property status cards (listed, matched, active, completed)
- [ ] Total earnings to date
- [ ] Current tenant details (name, contact via RM)
- [ ] Upcoming payout amount and date
- [ ] Tenure timeline with key milestones
- [ ] Quick actions: update listing, contact RM, download reports

### F-OP-05: Agreement Management

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As an owner, I want to review and manage agreements, so that I understand my obligations and rights. |
| Dependencies | Agreement Service, e-Sign |

**Acceptance Criteria:**
- [ ] Pending agreements requiring signature highlighted
- [ ] Agreement preview with key owner-relevant terms
- [ ] E-sign flow integrated
- [ ] All historical agreements accessible
- [ ] Amendment/addendum support (Phase 2)

---

## 4. RM Portal Features

### F-RM-01: Lead Dashboard

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As an RM, I want a pipeline view of all my leads, so that I can prioritize and manage my workload effectively. |
| Dependencies | Lead Service, Assignment Algorithm |

**Acceptance Criteria:**
- [ ] Kanban view: New → Contacted → Qualified → In Progress → Closed
- [ ] Lead cards with: name, type (tenant/owner), deposit amount, last activity
- [ ] Filter by: lead type, priority, stage, date range
- [ ] Daily/weekly target progress bar
- [ ] Auto-refresh for new lead assignments
- [ ] Bulk actions: assign, tag, archive

### F-RM-02: Onboarding Assist

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As an RM, I want tools to guide users through onboarding, so that I can help them complete KYC and documentation efficiently. |
| Dependencies | KYC Service, Document Service |

**Acceptance Criteria:**
- [ ] User onboarding checklist with real-time status
- [ ] Ability to trigger KYC reminders
- [ ] View user's KYC status and pending documents
- [ ] Upload documents on behalf of user (with consent)
- [ ] Notes and comments per user interaction
- [ ] Escalation button for KYC issues

### F-RM-03: Visit Coordination

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As an RM, I want to manage property visits efficiently, so that tenants and owners have smooth visit experiences. |
| Dependencies | Calendar Service, Notification Service |

**Acceptance Criteria:**
- [ ] Calendar view of all scheduled visits
- [ ] Coordinate between tenant availability and owner/property access
- [ ] Visit confirmation/reminder automation (24h and 2h before)
- [ ] Post-visit feedback capture
- [ ] Visit outcome tracking (interested/not interested/follow-up needed)
- [ ] Rescheduling with auto-notification to all parties

### F-RM-04: Deal Tracker

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As an RM, I want to track active deals through each stage, so that I can ensure timely closure and flag blockers. |
| Dependencies | Multiple services |

**Acceptance Criteria:**
- [ ] Deal stages: Visit → Interest → KYC Complete → Agreement → Deposit → Active
- [ ] Days-in-stage indicator with SLA alerts
- [ ] Blocker flagging with escalation to admin
- [ ] Deal value and commission projection
- [ ] Required actions per stage clearly listed
- [ ] Historical deals with outcome analysis

### F-RM-05: Performance Dashboard

| Attribute | Detail |
|-----------|--------|
| Priority | P1 |
| User Story | As an RM, I want to see my performance metrics, so that I can track progress toward targets and incentives. |
| Dependencies | Analytics Service |

**Acceptance Criteria:**
- [ ] Monthly/quarterly targets vs actuals
- [ ] Deals closed, deposit value managed
- [ ] Conversion rates per stage
- [ ] Average deal closure time
- [ ] Leaderboard (team ranking)
- [ ] Commission/incentive earned and projected

---

## 5. Admin Portal Features

### F-AP-01: KYC Verification Queue

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As an admin, I want to review and approve KYC submissions, so that only verified users proceed to high-value transactions. |
| Dependencies | KYC Service, Document viewer |

**Acceptance Criteria:**
- [ ] Queue sorted by: submission date, priority, SLA proximity
- [ ] Side-by-side document viewer (submitted vs reference)
- [ ] Approve/reject with mandatory reason (for rejection)
- [ ] Partial approval (accept some docs, reject others)
- [ ] Bulk operations for clear-cut cases
- [ ] Auto-verification rules (DigiLocker-verified docs auto-approve)
- [ ] SLA tracking: 24h for Basic, 48h for Enhanced, 72h for Full KYC

### F-AP-02: Transaction Monitoring

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As an admin, I want real-time visibility into all financial transactions, so that I can ensure accuracy and flag anomalies. |
| Dependencies | Deposit Service, Payout Service, Reconciliation |

**Acceptance Criteria:**
- [ ] Real-time transaction feed with filtering
- [ ] Transaction types: deposits, payouts, refunds, platform fees
- [ ] Status tracking per transaction
- [ ] Anomaly alerts (unusual amounts, timing, patterns)
- [ ] Manual reconciliation tools for discrepancies
- [ ] Export to CSV/Excel for audit

### F-AP-03: Compliance Dashboard

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As an admin, I want compliance status at a glance, so that I can ensure regulatory obligations are met. |
| Dependencies | Compliance Service, external reporting |

**Acceptance Criteria:**
- [ ] KYC compliance rate (% of users fully verified)
- [ ] PMLA threshold monitoring (transactions > ₹10L)
- [ ] STR (Suspicious Transaction Report) queue
- [ ] Document expiry alerts (KYC docs expiring)
- [ ] Regulatory filing calendar with status
- [ ] Audit-ready report generation

### F-AP-04: Payout Management

| Attribute | Detail |
|-----------|--------|
| Priority | P0 |
| User Story | As an admin, I want to manage and approve payouts, so that owners receive timely payments and discrepancies are resolved. |
| Dependencies | Payout Service, Bank API, NACH |

**Acceptance Criteria:**
- [ ] Payout schedule view (monthly calendar)
- [ ] Batch approval for scheduled payouts
- [ ] Individual payout override/hold capability
- [ ] Failed payout retry and resolution workflow
- [ ] Payout reconciliation with bank statement
- [ ] Monthly payout summary report

### F-AP-05: Analytics Dashboard

| Attribute | Detail |
|-----------|--------|
| Priority | P1 |
| User Story | As an admin, I want business analytics, so that I can make data-driven decisions and report to stakeholders. |
| Dependencies | Analytics Service, data warehouse |

**Acceptance Criteria:**
- [ ] Key metrics: deposits under mgmt, active tenancies, conversion rates
- [ ] Trend charts: monthly growth, revenue, user acquisition
- [ ] Funnel analytics: visitor → register → KYC → deposit → active
- [ ] Geographic heatmap of properties and demand
- [ ] Cohort analysis by user segment
- [ ] Custom date range selection
- [ ] Export and scheduled email reports

---

## Cross-References

- Product Requirements: [docs/01-product/prd.md](./prd.md)
- User Stories: [docs/01-product/user-stories.md](./user-stories.md)
- UX Flows: [docs/01-product/ux-flows.md](./ux-flows.md)
