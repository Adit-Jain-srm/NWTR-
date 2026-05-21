---
title: "Relationship Manager Workflow"
version: "1.0"
audience: "Product, Operations, Engineering"
last-updated: "2026-05-21"
status: "draft"
related-docs:
  - "./prd.md"
  - "./tenant-journey.md"
  - "./owner-journey.md"
  - "./verification-flow.md"
  - "./admin-portal-requirements.md"
---

# Relationship Manager Workflow

## TL;DR

The Relationship Manager (RM) is NWTR's primary human interface between the platform and its HNI clientele. RMs orchestrate the end-to-end journey for both tenants (deposit placement) and owners (property onboarding and payout setup), managing a portfolio of 15-20 active clients through a white-glove service model. They coordinate property matching, KYC facilitation, deposit structuring, legal documentation, and ongoing relationship management. The RM transforms what would otherwise be a complex financial-real estate transaction into a seamless, trust-driven experience - critical for a market where transactions involve deposits of Rs.50L-1.5Cr+ and clients expect personalized attention at every step.

---

## 2. RM Role Definition

### 2.1 Core Responsibilities

| Responsibility | Description |
|---|---|
| Client Acquisition | Convert inbound leads into active NWTR clients |
| Advisory | Guide clients on deposit structuring, property selection, yield expectations |
| Transaction Management | Orchestrate the three-party deal (tenant, owner, NWTR/NBFC) |
| Compliance Facilitation | Ensure KYC/AML requirements are met without client friction |
| Relationship Maintenance | Tenure-long engagement for renewals, referrals, escalation handling |

### 2.2 Capacity Model

- **Active client cap**: 15-20 clients per RM
- **Deal concurrency**: Max 5-7 active deals simultaneously
- **Monthly target**: 2-3 deal closures (ramp period: 6 months to full capacity)
- **Portfolio value target**: Rs.8-12Cr aggregate deposit value under management

### 2.3 RM Specializations

| Type | Focus | Typical Profile |
|---|---|---|
| **Tenant RM** | Deposit placement, property matching, move-in | Real estate background, financial advisory experience |
| **Owner RM** | Property onboarding, valuation, payout setup | Property management, wealth advisory background |
| **Deal RM** (Senior) | Complex negotiations, HNI clients (Rs.1Cr+ deposits), multi-property portfolios | 5+ years in premium real estate or private banking |

> **Phase 1 (Bangalore launch):** RMs handle both tenant and owner sides. Specialization begins at 10+ RMs on the team.

### 2.4 RM Hierarchy

`
Super Admin
  └── Operations Head
        └── Senior RM (Deal RM)
              └── RM (Tenant/Owner)
                    └── RM Associate (support tasks, scheduling)
`

---

## 3. RM Portal Features

### 3.1 Dashboard

The RM portal is the primary workspace, accessible via web and mobile (PWA).

**Dashboard Widgets:**

| Widget | Data Displayed |
|---|---|
| Pipeline Summary | Deals by stage (lead, qualified, matching, negotiation, closure, active) |
| Today's Tasks | Priority-sorted action items with SLA countdown timers |
| Client Alerts | KYC pending, document expiry, payment due, escalation flags |
| Performance Snapshot | MTD closures, NPS score, avg response time, conversion rate |
| Upcoming | Site visits, client calls, document signings scheduled today/this week |

### 3.2 Client Pipeline

Kanban-style board with stages:

1. **New Lead** - Unqualified inbound
2. **Qualified** - Financial eligibility confirmed
3. **Property Matching** - Actively searching/shortlisting
4. **Site Visits** - Scheduled or completed visits
5. **Negotiation** - Terms being discussed
6. **KYC In Progress** - Documentation underway
7. **Deposit Initiated** - Funds transfer initiated
8. **Agreement** - Legal documentation
9. **Active Tenure** - Living/earning
10. **Renewal/Exit** - Approaching tenure end

### 3.3 Task Queue

- Auto-generated tasks from system events (new lead assigned, KYC reminder, SLA breach approaching)
- Manual task creation for custom follow-ups
- Priority levels: Critical (SLA breach), High (client waiting), Medium (proactive), Low (administrative)
- Integration with Google Calendar and WhatsApp Business for reminders

### 3.4 Performance Metrics (Real-time)

- Deals closed (MTD/QTD/YTD)
- Average deal cycle time (lead to move-in)
- Client NPS score (rolling 90-day)
- Response time (first response, resolution)
- Pipeline conversion rates by stage
- Revenue attributed (deposit value facilitated)

---

## 4. Client Assignment Logic

### 4.1 Assignment Algorithm

When a new client (tenant or owner) enters the system, assignment follows a weighted scoring model:

`
Assignment Score = W1(geography) + W2(language) + W3(capacity) + W4(specialization) + W5(property_value_tier)
`

| Factor | Weight | Logic |
|---|---|---|
| Geography | 30% | RM's assigned micro-market (e.g., Whitefield, Koramangala, Indiranagar) |
| Language | 20% | Client's preferred language matches RM's proficiency (Kannada, Hindi, English, Telugu) |
| Current Capacity | 25% | Inverse of current active client count vs. cap |
| Specialization | 15% | Tenant RM for tenant leads, Owner RM for owner leads |
| Property Value Tier | 10% | HNI clients (Rs.1Cr+ deposit) routed to Deal RMs |

### 4.2 Assignment Rules

- **Round-robin fallback**: If scores are tied, use round-robin within the geography cluster
- **HNI override**: Any client with deposit potential > Rs.1Cr is auto-assigned to a Deal RM regardless of other factors
- **Re-assignment**: If RM doesn't make first contact within 2 hours, auto-reassign with alert to Operations Head
- **Client request**: Clients can request RM change (routed through Admin approval)
- **Festive season load balancing**: During Diwali/Ugadi/New Year, reduce active cap to 12 clients per RM (increased inquiry volume)

### 4.3 Micro-Market Mapping (Bangalore Phase 1)

| Cluster | Micro-Markets | RMs Allocated |
|---|---|---|
| East | Whitefield, Marathahalli, Varthur, Sarjapur | 2-3 |
| South | Koramangala, HSR, Jayanagar, JP Nagar, Bannerghatta | 2-3 |
| Central | Indiranagar, MG Road, Lavelle Road, Richmond Town | 1-2 |
| North | Hebbal, Yelahanka, Devanahalli (villa segment) | 1-2 |

---

## 5. Tenant-Side Workflow

### 5.1 Sequence Diagram

`mermaid
sequenceDiagram
    participant T as Tenant
    participant RM as Relationship Manager
    participant P as Platform
    participant O as Owner
    participant NBFC as NBFC Partner

    T->>P: Signs up, completes Basic KYC
    P->>RM: Auto-assigns lead with profile
    RM->>T: WhatsApp intro (within 30 min)
    RM->>T: Discovery call (budget, preferences, timeline)
    
    Note over RM,P: Lead Qualification
    RM->>P: Updates client profile with preferences
    P->>RM: AI-generated property shortlist (3-5 options)
    RM->>T: Shares curated shortlist via WhatsApp/Portal
    T->>RM: Selects 2-3 for site visits
    
    Note over RM,T: Site Visit Coordination
    RM->>O: Coordinates visit slots
    RM->>T: Confirms schedule + sends location/directions
    RM-->>T: Accompanies site visit (or sends RM Associate)
    T->>RM: Signals interest in property
    
    Note over RM,NBFC: Financial Qualification
    RM->>T: Initiates Financial KYC (income docs, bank statements)
    T->>P: Uploads documents
    P->>NBFC: Eligibility assessment
    NBFC->>P: Approved with deposit range
    P->>RM: Eligibility result
    RM->>T: Explains deposit structure + yield projection
    
    Note over RM,O: Deal Negotiation
    RM->>O: Presents tenant profile + deposit offer
    O->>RM: Counter/Accept
    RM->>T: Relays terms
    T->>RM: Accepts terms
    
    Note over RM,P: Deposit & Agreement
    RM->>P: Initiates deposit flow
    T->>NBFC: Transfers deposit amount
    NBFC->>P: Confirms receipt
    RM->>T: Coordinates agreement signing (digital/physical)
    RM->>T: Move-in date confirmation + handoff checklist
    
    Note over RM,T: Ongoing
    RM->>T: 30-day check-in post move-in
    RM->>T: Quarterly relationship touchpoint
    RM->>T: Renewal discussion (3 months before tenure end)
`

### 5.2 Stage Details

#### Stage 1: Lead Qualification (Day 0-2)

**RM Actions:**
- Send WhatsApp introduction within 30 minutes of assignment
- Schedule discovery call within 24 hours
- Assess: budget range, preferred locations, family size, move-in timeline, deposit comfort level
- Tag client priority: Hot (moving in 30 days), Warm (60 days), Nurture (90+ days)

**System Inputs:**
- Client's self-declared budget and location preferences
- Basic KYC status (Aadhaar verified, PAN linked)
- Source channel (organic, referral, campaign)

**Qualification Criteria:**
- Minimum deposit capacity: Rs.50L (verified via income declaration or asset proof)
- Clear timeline: Must have move-in intent within 6 months
- Location match: Desired area must have NWTR-listed properties

#### Stage 2: Property Matching & Shortlisting (Day 2-7)

**RM Actions:**
- Review AI-generated matches, curate top 3-5 based on client conversation
- Add personal notes (e.g., "Client mentioned Vastu preference - filtered accordingly")
- Share via WhatsApp carousel or portal link
- Follow up within 24 hours on shortlist reaction

**Matching Parameters:**
- Location, budget, BHK configuration, furnishing level
- Deposit-to-value ratio (owner's requirement)
- Amenities, society reputation, connectivity
- Vastu compliance (flagged if client mentioned)

#### Stage 3: Site Visit Coordination (Day 5-14)

**RM Actions:**
- Coordinate with Owner RM or directly with owner for time slots
- Share Google Maps pin, parking instructions, society entry process
- Accompany visit (or delegate to RM Associate for < Rs.80L deposits)
- Capture client feedback immediately post-visit (WhatsApp voice note or form)
- If rejected: understand reason, refine matching criteria, present alternatives

**Logistics:**
- Max 2 site visits per day per RM (travel buffer in Bangalore traffic)
- Weekend slots preferred by most clients
- Provide society watchman/security the client's name + RM contact in advance

#### Stage 4: KYC Assistance (Day 10-20)

**RM Actions:**
- Guide client through Financial KYC document upload
- Coordinate CA (Chartered Accountant) if ITR/financial statements need preparation
- For HNI (Rs.1Cr+ deposit): Schedule VKYC video call, prepare client for process
- Track document status, nudge on pending items
- Explain NBFC eligibility process and timeline

**Documents Facilitated:**
- PAN, Aadhaar (already in Basic KYC)
- Last 3 years ITR + computation
- 6 months bank statements (primary account)
- Form 16 / Salary slips (salaried)
- Business financials (self-employed)
- Net worth statement (HNI/Advanced KYC)

#### Stage 5: Deposit Facilitation (Day 15-30)

**RM Actions:**
- Explain deposit structure: amount, tenure, yield projection, exit terms
- Share NBFC partner details, regulatory framework, safety guarantees
- Coordinate with NBFC relationship team for large deposits (Rs.1Cr+)
- Guide through fund transfer process (RTGS/NEFT for large amounts)
- Confirm receipt and share acknowledgment

**Key Client Concerns to Address:**
- "Is my money safe?" → Explain FD/G-Sec backing, NBFC regulation, insurance
- "What if I need to exit early?" → Exit policy, lock-in period, partial withdrawal options
- "What returns does the owner get?" → Transparent yield split explanation

#### Stage 6: Agreement Support (Day 25-35)

**RM Actions:**
- Coordinate legal team for rental agreement drafting
- Ensure agreement reflects negotiated terms (tenure, deposit, maintenance split)
- Arrange e-signing or physical signing (client preference)
- For physical: Book meeting room or coordinate at property
- Ensure stamp duty compliance (Karnataka e-stamp)
- File agreement for police verification (Bangalore mandate)

#### Stage 7: Move-in Handoff (Day 30-40)

**RM Actions:**
- Create move-in checklist: keys, parking, maintenance contact, WiFi setup
- Introduce tenant to society manager/RWA
- Conduct joint property inspection with owner (document existing condition)
- Ensure meter readings noted (electricity, water)
- Share emergency contacts, nearby services guide

#### Stage 8: Tenure Check-ins

| Touchpoint | Timing | Purpose |
|---|---|---|
| First check-in | Day 30 post move-in | Settling issues, any maintenance needed |
| Quarterly | Every 90 days | Satisfaction, referral ask, renewal temperature |
| Annual review | 12 months | Tenure renewal discussion, deposit top-up opportunity |
| Pre-exit | 90 days before tenure end | Renewal negotiation or exit planning |

---

## 6. Owner-Side Workflow

### 6.1 Sequence Diagram

`mermaid
sequenceDiagram
    participant O as Owner
    participant RM as Relationship Manager
    participant P as Platform
    participant V as Valuation Partner
    participant T as Tenant
    participant NBFC as NBFC Partner

    O->>P: Lists property / Inbound inquiry
    P->>RM: Assigns owner lead
    RM->>O: WhatsApp intro + call scheduling
    RM->>O: Discovery call (property details, expectations, timeline)
    
    Note over RM,V: Property Onboarding
    RM->>P: Creates property listing draft
    RM->>O: Coordinates property photography
    RM->>V: Initiates third-party valuation
    V->>P: Valuation report submitted
    RM->>O: Shares valuation + recommended deposit range
    
    Note over RM,O: Terms Negotiation
    RM->>O: Explains NWTR model (deposit, yield, payout)
    O->>RM: Sets preferred deposit % and tenure
    RM->>O: Confirms listing terms
    P->>P: Property goes live
    
    Note over RM,T: Tenant Matching
    P->>RM: Qualified tenant interest notification
    RM->>O: Presents tenant profile (anonymized initially)
    O->>RM: Approves tenant for site visit
    RM-->>T: Coordinates site visit (via Tenant RM)
    
    Note over RM,NBFC: Deal Closure
    T->>NBFC: Deposit transferred
    RM->>O: Confirms deposit receipt + payout schedule
    RM->>O: Coordinates agreement signing
    RM->>O: Sets up monthly payout (bank account verification)
    NBFC->>O: First payout (within 30 days of deposit)
    
    Note over RM,O: Ongoing Management
    RM->>O: Monthly payout confirmation
    RM->>O: Quarterly relationship call
    RM->>O: Maintenance issue mediation (if any)
    RM->>O: Renewal/new tenant discussion (pre-tenure-end)
`

### 6.2 Stage Details

#### Stage 1: Property Onboarding (Day 0-7)

**RM Actions:**
- Initial call: Understand property details, owner expectations, current occupancy status
- Schedule professional photography (NWTR-empaneled photographer)
- Collect property documents: Title deed, Khata, tax receipts, society NOC
- Initiate third-party valuation (2-3 business days)
- Create listing draft with accurate description, amenities, neighborhood highlights

**Owner Qualification:**
- Clear title (no disputes, litigation)
- Property value Rs.1Cr+ (Bangalore Phase 1 threshold)
- Owner willing to accept deposit-based model (no monthly rent expectation beyond yield payout)
- Property in NWTR-serviceable micro-market

#### Stage 2: Valuation Coordination (Day 3-10)

**RM Actions:**
- Coordinate valuation partner visit (owner presence required)
- Review valuation report for reasonableness
- If owner disputes valuation: Facilitate second opinion (at owner's cost)
- Calculate recommended deposit range: 50-80% of assessed market value
- Present deposit-yield matrix to owner (multiple scenarios)

**Valuation Partners:**
- CRISIL/ICRA empaneled valuers
- Independent RERA-registered valuers
- Bank-approved valuers (for cross-reference)

#### Stage 3: Deposit Term Negotiation (Day 7-14)

**RM Actions:**
- Present NWTR payout model: "Your property valued at Rs.1.2Cr, deposit of Rs.72L (60%), monthly payout of Rs.X"
- Explain yield mechanics without revealing full NBFC margin structure
- Negotiate tenure: Standard 11 months (renewable), extended 24-36 months (higher yield for owner)
- Address owner concerns: property maintenance, tenant quality, exit scenarios
- Finalize listing terms and get owner sign-off

**Common Owner Objections & RM Responses:**
- "Traditional rent gives me more" → Show net yield comparison (after maintenance, vacancy, broker fees)
- "What if tenant damages property" → Security deposit clause + NWTR mediation guarantee
- "I want to choose my tenant" → Assure veto power, profile-based matching, background verification

#### Stage 4: Tenant Presentation (Day 14-30)

**RM Actions:**
- Receive interest from Tenant RM / platform matching
- Present anonymized tenant profile to owner (profession, family size, deposit capacity)
- Facilitate owner approval for site visit
- Coordinate feedback post-visit
- Mediate any specific owner requests (no pets, no cooking restrictions, etc.)

#### Stage 5: Payout Setup (Day 30-40)

**RM Actions:**
- Collect owner's bank account details (for payout credit)
- Verify via penny drop test
- Set up recurring payout instruction with NBFC ops team
- Confirm payout schedule and first payout date with owner
- Share payout tracking dashboard access

**Payout Details:**
- Frequency: Monthly (1st-5th of each month)
- Mode: NEFT/IMPS to registered bank account
- Tax: TDS deducted as applicable (inform owner to consult CA)
- Payout statement: Monthly email + portal access

#### Stage 6: Ongoing Relationship Management

| Activity | Frequency | Channel |
|---|---|---|
| Payout confirmation | Monthly | WhatsApp auto-message + Portal |
| Relationship call | Quarterly | Phone call |
| Property inspection | Annual | In-person (with RM Associate) |
| Renewal discussion | 90 days pre-expiry | In-person meeting |
| Issue mediation | As needed | WhatsApp + call within 4 hours |

---

## 7. Deal Orchestration

### 7.1 The Three-Party Transaction

Every NWTR deal involves coordinating three parties (tenant, owner, NBFC) with distinct interests:

`mermaid
graph TD
    T[Tenant] -->|Deposits Rs.50L-1.5Cr| NBFC[NBFC Partner]
    NBFC -->|Monthly Yield Payout| O[Owner]
    NBFC -->|Capital Preservation + Returns| T
    RM[Relationship Manager] -->|Guides & Coordinates| T
    RM -->|Guides & Coordinates| O
    RM -->|Documentation & Compliance| NBFC
    P[Platform] -->|Matching & Automation| RM
    P -->|Transparency & Tracking| T
    P -->|Transparency & Tracking| O
`

### 7.2 RM's Orchestration Responsibilities

| Phase | Tenant Side | Owner Side | NBFC/Platform Side |
|---|---|---|---|
| Pre-deal | Qualify, match, visit | Onboard, value, list | Eligibility assessment |
| Negotiation | Present terms, manage expectations | Negotiate deposit %, tenure | Structure yield instrument |
| Closure | KYC, fund transfer guidance | Agreement, payout setup | Deposit receipt, instrument allocation |
| Post-deal | Check-ins, maintenance | Payout tracking, relationship | Yield disbursement, compliance |

### 7.3 Deal Complexity Tiers

| Tier | Deposit Value | Complexity | RM Level | Typical Cycle |
|---|---|---|---|---|
| Standard | Rs.50L - Rs.80L | Low | RM | 25-35 days |
| Premium | Rs.80L - Rs.1.2Cr | Medium | RM / Senior RM | 30-45 days |
| Ultra-Premium | Rs.1.2Cr+ | High | Deal RM (mandatory) | 40-60 days |
| Multi-property | Portfolio deals | Very High | Deal RM + RM Associate | 60-90 days |

### 7.4 Deal Blockers & RM Interventions

| Blocker | Frequency | RM Action |
|---|---|---|
| Owner valuation disagreement | 25% of deals | Facilitate second valuation, show market comps |
| Tenant KYC delay | 30% of deals | CA coordination, document preparation assistance |
| Deposit amount negotiation | 40% of deals | Scenario modeling, yield projection sharing |
| Legal/title issue | 10% of deals | Escalate to legal team, pause deal if unresolvable |
| Tenant cold feet | 15% of deals | Address concerns, share testimonials, offer property alternatives |

---

## 8. SLA Framework

### 8.1 Response Time SLAs

| Event | Target Response | Maximum | Escalation Trigger |
|---|---|---|---|
| New lead assignment | 30 minutes | 2 hours | Auto-reassign at 2 hours |
| Client WhatsApp message | 15 minutes (business hours) | 1 hour | Alert to Operations Head |
| Client phone call (missed) | Return within 30 minutes | 2 hours | Flag on dashboard |
| Site visit request | Schedule within 24 hours | 48 hours | Auto-escalate to Admin |
| KYC document query | Same business day | 24 hours | Client alert + RM flag |
| Post-deposit query | 2 hours | 4 hours | Priority escalation |
| Maintenance/issue report | 4 hours (acknowledge) | 8 hours | Auto-escalate |
| Payout discrepancy | 1 hour | 2 hours | Immediate Admin alert |

### 8.2 Business Hours

- **Standard**: Monday-Saturday, 9:00 AM - 7:00 PM IST
- **Extended (HNI clients)**: Monday-Sunday, 8:00 AM - 9:00 PM IST
- **Emergency**: 24/7 for deposit/payout issues (routed to on-call RM)

### 8.3 Quality SLAs

| Metric | Target | Minimum Acceptable |
|---|---|---|
| Client NPS | > 70 | > 50 |
| First-call resolution | > 60% | > 40% |
| Deal cycle time (lead to move-in) | 30 days | 45 days |
| Document accuracy (agreements, KYC) | 99% | 95% |
| Client retention (renewal rate) | > 70% | > 50% |
| Referral rate (clients who refer) | > 30% | > 15% |

### 8.4 Escalation Paths

`mermaid
graph TD
    A[Client Issue] --> B{Severity Level}
    B -->|Low: Info request| C[RM resolves directly]
    B -->|Medium: Process delay| D[RM + Platform team]
    B -->|High: Financial concern| E[RM escalates to Operations Head]
    B -->|Critical: Legal/Compliance| F[Operations Head + Legal + Admin]
    
    C --> G[Resolve within SLA]
    D --> H[Resolve within 24 hours]
    E --> I[Resolve within 4 hours]
    F --> J[War room within 1 hour]
    
    G --> K[Update client, close ticket]
    H --> K
    I --> K
    J --> K
`

---

## 9. Performance Scoring

### 9.1 RM Scorecard (Monthly)

| KPI | Weight | Calculation | Target |
|---|---|---|---|
| Deals Closed | 30% | Number of deals reaching "Active Tenure" status | 2-3/month |
| Revenue Facilitated | 20% | Total deposit value of closed deals | Rs.1.5-2.5Cr/month |
| Client NPS | 15% | Average NPS from client surveys (post-deal + quarterly) | > 70 |
| Response Time Adherence | 15% | % of interactions within SLA | > 90% |
| Pipeline Health | 10% | Qualified leads in pipeline vs. target | 8-12 active |
| Referral Generation | 10% | New clients from existing client referrals | 1-2/month |

### 9.2 Scoring Formula

`
Monthly Score = (Deals/Target * 30) + (Revenue/Target * 20) + (NPS/100 * 15) + 
               (SLA_Adherence% * 0.15) + (Pipeline/Target * 10) + (Referrals/Target * 10)
`

### 9.3 Performance Tiers

| Tier | Score Range | Implications |
|---|---|---|
| **Platinum** | > 90 | Bonus multiplier 1.5x, HNI client priority, promotion track |
| **Gold** | 70-90 | Standard bonus, additional training opportunities |
| **Silver** | 50-70 | Performance improvement plan, mentor assignment |
| **At Risk** | < 50 | 30-day PIP, reduced client allocation, mandatory coaching |

### 9.4 Incentive Structure

- **Base salary**: Fixed component (market-competitive for premium real estate roles in Bangalore)
- **Variable**: 0.05-0.1% of deposit value facilitated (e.g., Rs.50,000-1,00,000 per Rs.1Cr deal)
- **Quarterly bonus**: Top performer in each metric category
- **Annual**: Stock options / profit-sharing for Deal RMs
- **Non-monetary**: Client appreciation program, conference attendance, learning budget

---

## 10. Tools & Integrations

### 10.1 Core RM Tech Stack

| Tool | Purpose | Integration |
|---|---|---|
| **NWTR RM Portal** | Primary workspace (pipeline, tasks, metrics) | Native |
| **WhatsApp Business API** | Client communication (80% of interactions) | Twilio/Gupshup |
| **Google Calendar** | Site visit scheduling, client calls | OAuth sync |
| **Google Meet / Zoom** | Virtual discovery calls, VKYC coordination | Calendar integration |
| **DigiLocker** | KYC document verification | API integration |
| **CKYC** | Central KYC Registry lookup | NBFC partner API |
| **Google Maps Platform** | Property location sharing, route planning | Embedded |
| **Leegality / SignDesk** | Digital agreement signing | API integration |
| **Freshdesk / Zendesk** | Ticket management for escalations | Bidirectional sync |
| **Notion / Confluence** | Internal knowledge base, SOPs | Read-only reference |

### 10.2 WhatsApp Business API Workflows

WhatsApp is the primary communication channel (Indian HNI preference). Automated templates with RM personalization:

| Template | Trigger | Content |
|---|---|---|
| m_introduction | Lead assignment | "Hi {name}, I'm {rm_name} from NWTR. I'll be your dedicated advisor..." |
| property_shortlist | Shortlist ready | Carousel of 3-5 properties with photos, key details |
| site_visit_confirm | Visit scheduled | Date, time, location pin, RM contact, parking instructions |
| kyc_reminder | Documents pending > 48h | Gentle nudge with specific pending items |
| deposit_received | NBFC confirms deposit | Celebration message + next steps |
| payout_credited | Monthly payout sent | Amount, date, running total |
| check_in | Scheduled touchpoint | "Hi {name}, how's everything at {property}? Anything we can help with?" |

### 10.3 CRM Data Model (RM-relevant fields)

`
Client
├── Personal: name, phone, email, language_pref, communication_pref
├── Financial: income_band, deposit_capacity, kyc_tier, eligible_properties
├── Preferences: locations[], bhk, budget_range, must_haves[], dealbreakers[]
├── Journey: current_stage, assigned_rm, stage_timestamps, next_action
└── Interactions: messages[], calls[], visits[], documents[], notes[]

Property
├── Details: address, bhk, sqft, furnishing, amenities[], photos[]
├── Valuation: market_value, assessed_value, deposit_range, yield_estimate
├── Owner: owner_id, terms_accepted, payout_account, availability
└── Status: listed, matched, visit_scheduled, under_negotiation, occupied

Deal
├── Parties: tenant_id, owner_id, property_id, rm_id
├── Terms: deposit_amount, tenure_months, yield_rate, payout_amount
├── Status: negotiation, kyc_pending, deposit_pending, agreement, active, completed
├── Timestamps: created, qualified, matched, closed, move_in, tenure_end
└── Documents: agreement_id, kyc_docs[], valuation_report_id
`

### 10.4 Calendar Management

- **Block time**: 2 site visits max/day, 30-min buffer between appointments
- **Client availability sync**: Preferred times captured in CRM, auto-suggested during scheduling
- **Weekend availability**: Required for site visits (Saturday-Sunday AM)
- **Festival blackout**: Reduce scheduling during Diwali week, Ugadi, Christmas-New Year (client unavailability)

---

## 11. Escalation Matrix

### 11.1 Escalation Levels

| Level | Handler | Trigger | Response Time |
|---|---|---|---|
| **L1** | RM | Standard client requests, scheduling, info queries | Within SLA |
| **L2** | Senior RM / Operations Head | SLA breach, client complaint, deal blockers | 4 hours |
| **L3** | Admin + Legal | Legal disputes, compliance issues, client threats | 2 hours |
| **L4** | Super Admin + CXO | Regulatory action, media exposure, systemic failure | 1 hour |

### 11.2 Auto-Escalation Triggers

| Trigger | Condition | Escalation To | Action |
|---|---|---|---|
| SLA breach (response) | No response within max SLA time | Operations Head | Auto-reassign option |
| Client complaint | NPS detractor score (0-6) submitted | Operations Head | Mandatory callback within 2 hours |
| Deal stalled | No stage progression in 14 days | Senior RM review | Pipeline health check |
| KYC rejection | NBFC rejects eligibility | RM + Admin review | Client communication plan |
| Deposit delay | Funds not received within 7 days of commitment | Operations Head | Risk assessment |
| Owner withdrawal | Owner wants to de-list post tenant match | Admin + Legal | Contractual review |
| Client legal threat | Any mention of legal action | L3 immediate | Legal team engagement |
| Payout failure | Monthly payout not credited within 5 days | L3 immediate | NBFC ops escalation |
| Fraud suspicion | KYC anomaly or suspicious documentation | L3 + Compliance | Freeze deal, investigate |

### 11.3 RM-Initiated Escalation Protocols

**When RM MUST escalate (non-discretionary):**
- Client expresses intent to involve media, social media, or legal
- Document forgery or KYC fraud suspected
- Owner claims property is under dispute (post-listing)
- Deposit amount exceeds Rs.2Cr (Super Admin approval required)
- Client requests that conflict with NBFC/regulatory requirements
- Any communication from regulatory bodies (SEBI, RBI, RERA)

**When RM SHOULD escalate (discretionary):**
- Client repeatedly misses appointments (3+ no-shows)
- Valuation gap > 20% between owner expectation and market assessment
- Multi-party deal with complex family ownership
- NRI owner with tax implications requiring CA coordination
- Client requesting non-standard terms not in playbook

---

## 12. Training & Onboarding

### 12.1 RM Training Curriculum

#### Week 1: Foundation

| Day | Topic | Duration | Delivery |
|---|---|---|---|
| 1 | NWTR business model, vision, competitive landscape | 4 hours | Classroom |
| 1 | Platform walkthrough (portal, CRM, tools) | 4 hours | Hands-on |
| 2 | NBFC partnership model, FD/G-Sec basics, yield mechanics | 4 hours | Classroom + Quiz |
| 2 | Regulatory landscape: RBI guidelines, NBFC regulations, RERA | 4 hours | Expert session |
| 3 | KYC/AML framework, document verification, CKYC, DigiLocker | 4 hours | Hands-on |
| 3 | Client communication: WhatsApp etiquette, HNI expectations | 4 hours | Role-play |
| 4 | Bangalore real estate market: micro-markets, pricing, trends | 4 hours | Field visit |
| 4 | Property valuation basics, reading valuation reports | 4 hours | Case study |
| 5 | Deal lifecycle simulation (end-to-end) | 8 hours | Role-play + System |

#### Week 2: Specialization

| Day | Topic | Duration | Delivery |
|---|---|---|---|
| 6 | HNI client management, private banking parallels | 4 hours | Guest expert |
| 6 | Objection handling: tenant concerns, owner resistance | 4 hours | Role-play |
| 7 | Legal agreements: rental law, Karnataka Rent Act, stamp duty | 4 hours | Legal team |
| 7 | Tax implications: TDS on rent, capital gains basics (for client queries) | 4 hours | CA session |
| 8 | Conflict resolution, difficult conversations, de-escalation | 4 hours | Workshop |
| 8 | CRM advanced: pipeline management, reporting, automation | 4 hours | Hands-on |
| 9 | Shadowing: Accompany Senior RM on 2-3 client interactions | 8 hours | Field |
| 10 | Assessment: Mock deal simulation + Knowledge test | 8 hours | Evaluation |

#### Week 3-4: Supervised Live

- Handle 3-5 live leads under Senior RM supervision
- Daily debrief with mentor (30 minutes)
- Gradual increase to independent handling
- First solo deal closure expected by Week 4-6

### 12.2 Ongoing Development

| Program | Frequency | Content |
|---|---|---|
| Market update briefing | Weekly (Monday AM) | New listings, market trends, policy changes |
| Skill workshop | Bi-weekly | Negotiation, communication, product updates |
| Deal review | Weekly | Team reviews of closed/lost deals (learnings) |
| External training | Quarterly | Industry conferences, certifications |
| Certification renewal | Annual | Regulatory updates, compliance refresher |

### 12.3 Knowledge Requirements

**Finance:**
- Fixed deposit mechanics, interest calculation (simple & compound)
- Government securities: T-Bills, G-Secs, SDL basics
- NBFC regulatory framework (RBI Master Directions)
- TDS provisions relevant to rental income

**Real Estate:**
- Karnataka Rent Control Act
- RERA registration and compliance
- Property valuation methodologies
- Society bylaws, maintenance structures
- Stamp duty and registration process (Karnataka)

**Communication:**
- HNI client etiquette (addressing, timing, medium preference)
- WhatsApp Business best practices (response templates, media sharing)
- Conflict de-escalation techniques
- Cross-cultural communication (Bangalore's diverse demographic)
- Festive greeting protocols (Diwali, Ugadi, Eid, Christmas - be inclusive)

**Technology:**
- RM Portal proficiency (certified)
- WhatsApp Business API template management
- Digital document handling (upload, verify, e-sign)
- Basic troubleshooting for client-facing tech issues

### 12.4 Certification & Assessment

| Assessment | Timing | Pass Criteria | Consequence of Failure |
|---|---|---|---|
| Foundation knowledge test | End of Week 1 | 80% score | Repeat module |
| Deal simulation | End of Week 2 | Senior RM sign-off | Extended shadowing |
| Client communication audit | Month 1 | > 4/5 rating on 3 recorded calls | Coaching sessions |
| Independent deal closure | Month 2 | Successfully closed without escalation | Full certification |
| Quarterly compliance refresh | Every 3 months | 90% score | Mandatory re-training |

---

## Appendix A: RM Daily Routine (Recommended)

| Time | Activity |
|---|---|
| 9:00 AM | Review dashboard, check overnight messages, plan day |
| 9:30 AM | Respond to pending WhatsApp messages (batch 1) |
| 10:00 AM - 12:00 PM | Client calls (discovery, follow-ups, check-ins) |
| 12:00 PM - 1:00 PM | Internal sync (team standup Mon/Wed/Fri) |
| 1:00 PM - 2:00 PM | Lunch + travel buffer |
| 2:00 PM - 5:00 PM | Site visits (max 2) + in-person meetings |
| 5:00 PM - 6:00 PM | WhatsApp response batch 2, CRM updates |
| 6:00 PM - 7:00 PM | Documentation, deal progress updates, next-day planning |

## Appendix B: RM Communication Templates

### Initial Introduction (WhatsApp)
`
Namaste {client_name} ji,

I'm {rm_name} from NWTR - your dedicated Relationship Manager. 
I'll be personally guiding you through your property journey.

A few things about how we work:
- I'm available Mon-Sat, 9 AM - 7 PM
- For urgent matters, feel free to call anytime
- I'll keep you updated at every step

When would be a convenient time for a 15-minute introductory call? 
I'd love to understand your requirements better.

Best regards,
{rm_name}
NWTR Relationship Manager
{rm_phone}
`

### Property Shortlist Sharing
`
Hi {client_name},

Based on our conversation, I've curated {n} properties that match your requirements:

{property_cards}

Would you like to schedule visits for any of these? 
I recommend weekends for a relaxed experience.

Let me know your thoughts!
`

### Post-Site-Visit Follow-up
`
Hi {client_name},

Thank you for visiting {property_name} today. 

I'd love to hear your thoughts:
- What did you like about the property?
- Any concerns or dealbreakers?
- Would you like to proceed, or shall we explore other options?

Take your time - I'm here whenever you're ready to discuss.
`

---

## Appendix C: Festive Season Playbook

| Festival | Period | Impact on Operations | RM Action |
|---|---|---|---|
| Ugadi (Kannada New Year) | March/April | Auspicious for new beginnings, high demand | Push pending closures, highlight "new home, new year" |
| Akshaya Tritiya | April/May | Auspicious for investments | Promote deposit benefits, gold-equivalent safety messaging |
| Diwali / Deepavali | October/November | Peak inquiry + reduced availability | Pre-schedule follow-ups, send greetings, respect blackout |
| Christmas / New Year | December/January | Corporate relocations, NRI interest | Target NRI owners, corporate tenant leads |
| Griha Pravesh muhurts | Varies | Clients want move-in on auspicious dates | Coordinate with pandit/astrologer for timing, adjust deal timelines |

---

*Document maintained by: Product & Operations Team*
*Next review: 2026-06-21*
