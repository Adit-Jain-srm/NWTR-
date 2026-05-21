---
title: UX Flows
version: "1.0"
audience: Design, Product, Engineering, QA
last-updated: 2026-05-21
status: draft
related-docs:
  - "./app-flow.md"
  - "./tenant-journey.md"
  - "./owner-journey.md"
  - "../03-ux-ui/ux-strategy.md"
  - "../03-ux-ui/ui-design-direction.md"
---

# UX Flows — NWTR

## TL;DR

Detailed interaction flows for all critical user journeys in the NWTR platform. Each flow includes Mermaid sequence diagrams, screen states, error handling, and edge cases. These flows define the exact user interactions that design and engineering must implement.

---

## 1. Property Search & Filter Flow

```mermaid
sequenceDiagram
    actor Tenant
    participant UI as Search UI
    participant API as Property API
    participant Search as Azure Search

    Tenant->>UI: Open Properties page
    UI->>API: GET /properties (default: Bangalore, all BHK)
    API->>Search: Query with default filters
    Search-->>API: Results (20 per page)
    API-->>UI: Property list + facets
    UI->>Tenant: Display grid view + filter sidebar

    Tenant->>UI: Apply filters (3BHK, ₹50L-₹80L deposit, Koramangala)
    UI->>API: GET /properties?bhk=3&deposit_min=5000000&deposit_max=8000000&area=koramangala
    API->>Search: Filtered query
    Search-->>API: Filtered results + updated facets
    API-->>UI: Updated list + active filter tags
    UI->>Tenant: Display filtered results with count

    Tenant->>UI: Toggle to Map View
    UI->>Tenant: Show properties on map with pin clusters
    Tenant->>UI: Click property pin
    UI->>Tenant: Show property preview card on map
    Tenant->>UI: Click "View Details"
    UI->>Tenant: Navigate to Property Detail page
```

### States

| State | Condition | UI Treatment |
|-------|-----------|--------------|
| Loading | API in flight | Skeleton cards (8) with shimmer |
| Empty | No results for filters | "No properties found" + suggest removing filters |
| Error | API failure | Toast error + retry button |
| Results | Normal | Property grid/list + pagination |
| Map View | Toggle active | Map with pins + floating property cards |

---

## 2. Deposit Simulation Flow

```mermaid
sequenceDiagram
    actor User
    participant UI as Calculator UI
    participant API as Simulation API
    participant Yield as Yield Engine

    User->>UI: Open Calculator (from nav or property page)
    UI->>User: Show calculator form (property value OR rent input)

    User->>UI: Enter property value: ₹1,00,00,000
    UI->>API: POST /simulate {property_value: 10000000, tenure: 12}
    API->>Yield: Calculate yield at current rates
    Yield-->>API: {yield_rate: 7.2%, monthly_payout: 48000}
    API-->>UI: Simulation result

    UI->>User: Display results:
    Note over User,UI: Deposit Required: ₹75,00,000 (75%)<br/>Total Rent Saved: ₹5,76,000/year<br/>Owner Monthly Payout: ₹48,000<br/>Effective Yield: 7.2% p.a.<br/>Your Refund at End: ₹75,00,000

    User->>UI: Click "Share Results"
    UI->>User: Copy link: nwtr.in/calc?v=10000000&t=12

    User->>UI: Click "Check Eligibility"
    UI->>User: Navigate to Eligibility Check (pre-filled deposit amount)
```

### Comparison View

| Metric | Traditional Rent | NWTR Model |
|--------|-----------------|------------|
| Monthly Out-of-Pocket | ₹48,000 | ₹0 |
| 12-Month Total Spent | ₹5,76,000 | ₹0 |
| Capital Required | ₹96,000 (2-month deposit) | ₹75,00,000 |
| Capital Returned | ₹96,000 | ₹75,00,000 |
| Net Cost Over 12 Months | ₹5,76,000 | ₹0 |

---

## 3. Eligibility Verification Flow

```mermaid
sequenceDiagram
    actor Tenant
    participant UI as Eligibility UI
    participant API as Eligibility API
    participant Credit as Credit Bureau

    Tenant->>UI: Start Eligibility Check
    UI->>Tenant: Show eligibility form

    Tenant->>UI: Fill: Income ₹30L/yr, Salaried, Budget ₹75L
    Tenant->>UI: Consent to soft credit check ✓
    UI->>API: POST /eligibility/check
    API->>Credit: Soft pull (PAN-based)
    Credit-->>API: Score: 780, No defaults

    API->>API: Apply rules engine:
    Note over API: Income > 3x annual payout: ✓<br/>Credit score > 700: ✓<br/>No active defaults: ✓<br/>Deposit budget within range: ✓

    API-->>UI: {status: "eligible", max_deposit: 9000000, tier: "premium"}
    UI->>Tenant: "You're eligible! Max deposit: ₹90L"

    alt Conditionally Eligible
        API-->>UI: {status: "conditional", reasons: ["income_docs_needed"]}
        UI->>Tenant: "Conditionally eligible - upload income proof to confirm"
    end

    alt Not Eligible
        API-->>UI: {status: "ineligible", reasons: ["credit_score_low"]}
        UI->>Tenant: "Not eligible currently" + remediation steps
    end

    Tenant->>UI: Click "Start KYC"
    UI->>Tenant: Navigate to KYC Tier 1
```

---

## 4. KYC Submission Flow (3 Tiers)

```mermaid
sequenceDiagram
    actor Tenant
    participant UI as KYC UI
    participant API as KYC API
    participant DL as DigiLocker
    participant CKYC as CKYC Registry
    participant VKYC as Video KYC

    Note over Tenant,VKYC: === TIER 1: Basic KYC ===
    Tenant->>UI: Start Basic KYC
    UI->>Tenant: Request PAN number
    Tenant->>UI: Enter PAN: ABCDE1234F
    UI->>API: POST /kyc/tier1/pan
    API->>API: Validate PAN format
    API-->>UI: PAN valid, proceed to Aadhaar

    UI->>Tenant: "Connect DigiLocker for Aadhaar verification"
    Tenant->>UI: Click "Connect DigiLocker"
    UI->>DL: Redirect to DigiLocker consent
    Tenant->>DL: Approve consent
    DL-->>API: Aadhaar XML (masked)
    API->>API: Verify PAN-Aadhaar linkage
    API-->>UI: Tier 1 Complete ✓
    UI->>Tenant: "Basic KYC verified! You can now browse freely."

    Note over Tenant,VKYC: === TIER 2: Enhanced KYC ===
    Tenant->>UI: Start Enhanced KYC
    UI->>Tenant: Show document requirements
    Tenant->>UI: Upload address proof (utility bill)
    UI->>API: POST /kyc/tier2/address (multipart)
    API->>API: Document quality check (readability, format)
    API-->>UI: Document received, pending review

    Tenant->>UI: Upload income proof (Form 16 / ITR)
    UI->>API: POST /kyc/tier2/income (multipart)
    API-->>UI: Document received

    API->>API: Auto-verify (OCR + rules) OR queue for manual review
    API-->>UI: Tier 2 status: "under_review" (SLA: 48h)

    Note over Tenant,VKYC: === TIER 3: Full KYC ===
    Tenant->>UI: Start Full KYC (after Tier 2 approved)
    UI->>Tenant: Schedule Video KYC slot
    Tenant->>UI: Select date/time
    UI->>VKYC: Book VKYC session
    VKYC-->>UI: Session booked

    Tenant->>VKYC: Complete video verification
    VKYC-->>API: VKYC result: verified

    UI->>Tenant: Upload 6-month bank statement
    Tenant->>UI: Upload bank statement PDF
    UI->>API: POST /kyc/tier3/bank-statement
    API->>API: Parse & verify (account holder, balance, patterns)
    API-->>UI: Tier 3 Complete ✓
    UI->>Tenant: "Full KYC verified! You can now proceed to deposit."
```

### KYC Progress States

| Tier | Status Options | Unlocks |
|------|---------------|---------|
| Tier 1 | not_started, in_progress, verified, failed | Full browsing, shortlist |
| Tier 2 | not_started, documents_pending, under_review, verified, partially_rejected | Visit scheduling, agreement |
| Tier 3 | not_started, vkyc_scheduled, vkyc_completed, bank_pending, verified | Deposit transfer |

---

## 5. Property Visit Scheduling Flow

```mermaid
sequenceDiagram
    actor Tenant
    participant UI as Visit UI
    participant API as Visit API
    participant RM as RM System
    participant Owner as Owner (Notification)
    participant Notif as Notification Service

    Tenant->>UI: Click "Schedule Visit" on property
    UI->>API: GET /properties/:id/available-slots
    API-->>UI: Available slots (next 14 days)
    UI->>Tenant: Show calendar with available slots

    Tenant->>UI: Select: "Sat 24 May, 10:00 AM - 11:00 AM"
    UI->>API: POST /visits {property_id, slot, tenant_id}
    API->>RM: Auto-assign RM (based on area)
    API->>Owner: Request approval for time slot
    API->>Notif: Notify all parties

    Notif-->>Tenant: SMS + Email: "Visit request submitted"
    Notif-->>Owner: SMS: "Visit request for your property"
    Notif-->>RM: Push: "New visit assigned"

    Owner->>API: Approve visit
    API->>Notif: Confirm to all
    Notif-->>Tenant: "Visit confirmed! Your RM: Rahul (+91-98xxx)"
    Notif-->>RM: "Visit confirmed: Sat 24 May, 10AM, Property XYZ"

    Note over Tenant,Notif: 24h before visit
    Notif-->>Tenant: Reminder with address + RM contact
    Notif-->>RM: Reminder with tenant + property details

    Note over Tenant,Notif: 2h before visit
    Notif-->>Tenant: Final reminder via WhatsApp
```

---

## 6. Agreement Signing Flow (e-Sign)

```mermaid
sequenceDiagram
    actor Tenant
    actor Owner
    participant UI as Agreement UI
    participant API as Agreement API
    participant Template as Template Engine
    participant Stamp as e-Stamp Provider
    participant Sign as e-Sign Provider

    API->>Template: Generate agreement (tenant + owner + property data)
    Template-->>API: Draft agreement PDF
    API->>Stamp: Request e-stamp (state: Karnataka, value: calculated)
    Stamp-->>API: e-Stamp certificate + unique ID

    API->>UI: Agreement ready for review
    UI->>Tenant: "Your agreement is ready for review"
    Tenant->>UI: Open agreement
    UI->>Tenant: Show agreement (clause-by-clause view)

    Tenant->>UI: Acknowledge each critical clause ✓
    Tenant->>UI: Click "Sign Agreement"
    UI->>Sign: Initiate Aadhaar e-Sign (Tenant)
    Sign->>Tenant: OTP to Aadhaar-linked mobile
    Tenant->>Sign: Enter OTP
    Sign-->>API: Tenant signature applied (DSC)
    API-->>UI: Tenant signed ✓, awaiting Owner

    UI->>Owner: "Agreement requires your signature"
    Owner->>UI: Review and acknowledge clauses
    Owner->>UI: Click "Sign Agreement"
    UI->>Sign: Initiate Aadhaar e-Sign (Owner)
    Sign->>Owner: OTP to Aadhaar-linked mobile
    Owner->>Sign: Enter OTP
    Sign-->>API: Owner signature applied (DSC)

    API->>API: Agreement fully executed
    API-->>Tenant: "Agreement signed! Proceed to deposit."
    API-->>Owner: "Agreement signed! Tenant will transfer deposit."
    API->>API: Store signed agreement (immutable)
```

---

## 7. Deposit Transfer Flow

```mermaid
sequenceDiagram
    actor Tenant
    participant UI as Deposit UI
    participant API as Deposit API
    participant Bank as Escrow Bank
    participant NBFC as NBFC Partner
    participant Notif as Notification

    Tenant->>UI: Click "Transfer Deposit" (post-agreement)
    UI->>API: GET /deposit/instructions/:agreement_id
    API-->>UI: Escrow account details + amount + deadline

    UI->>Tenant: Display transfer instructions:
    Note over Tenant,UI: Account: NWTR Escrow (ICICI)<br/>IFSC: ICIC0001234<br/>Amount: ₹75,00,000<br/>Reference: NWTR-DEP-AGR123<br/>Deadline: 48h from now<br/>Mode: NEFT/RTGS

    Tenant->>Bank: Initiate bank transfer (via own bank)
    Bank-->>API: Webhook: Transfer received (UTR: xyz789)
    API->>API: Match UTR to agreement + amount validation

    alt Amount matches
        API->>Notif: Notify tenant: "Deposit received!"
        API->>NBFC: Initiate investment allocation
        NBFC-->>API: Investment confirmed (FD/T-Bill allocation)
        API->>Notif: Notify tenant: "Deposit invested securely"
        API->>Notif: Notify owner: "Deposit confirmed, tenancy active"
        API->>API: Activate tenancy, start tenure timer
    end

    alt Amount mismatch
        API->>Notif: Alert admin + notify tenant
        API->>Tenant: "Amount mismatch — contact support"
        Note over API: Hold in pending, manual resolution
    end

    alt Deadline expired
        API->>Notif: Alert tenant + RM
        API->>Tenant: "Transfer window expired. Contact RM to extend."
    end
```

### Transfer Status States

```mermaid
stateDiagram-v2
    [*] --> Initiated: Agreement signed
    Initiated --> Awaiting_Transfer: Instructions displayed
    Awaiting_Transfer --> Transfer_Detected: Bank webhook
    Transfer_Detected --> Amount_Verified: Validation pass
    Transfer_Detected --> Amount_Mismatch: Validation fail
    Amount_Verified --> Investment_Allocated: NBFC confirms
    Investment_Allocated --> Active: Tenancy activated
    Amount_Mismatch --> Manual_Review: Admin intervenes
    Manual_Review --> Amount_Verified: Resolved
    Awaiting_Transfer --> Expired: 48h deadline
    Expired --> Awaiting_Transfer: Extension granted
```

---

## 8. Payout Dashboard Interactions

```mermaid
sequenceDiagram
    actor Owner
    participant UI as Payout UI
    participant API as Payout API

    Owner->>UI: Open Payouts section
    UI->>API: GET /payouts?owner_id=xxx&period=current_fy
    API-->>UI: Payout schedule + history

    UI->>Owner: Display payout dashboard:
    Note over Owner,UI: Next Payout: ₹48,000 on June 5<br/>Total Earned: ₹2,40,000 (5 months)<br/>Status: All payouts on-time ✓

    Owner->>UI: Click "View History"
    UI->>Owner: Monthly table:
    Note over Owner,UI: Jan: ₹48,000 ✓ Credited<br/>Feb: ₹48,000 ✓ Credited<br/>Mar: ₹48,000 ✓ Credited<br/>Apr: ₹48,000 ✓ Credited<br/>May: ₹48,000 ✓ Credited<br/>Jun: ₹48,000 ⏳ Scheduled

    Owner->>UI: Click specific payout row
    UI->>Owner: Payout detail: date, UTR, bank credited, reference

    Owner->>UI: Click "Download Report"
    UI->>API: GET /payouts/report?format=pdf&fy=2026-27
    API-->>UI: PDF download
    UI->>Owner: Annual statement PDF downloaded
```

---

## 9. Exit/Refund Initiation Flow

```mermaid
sequenceDiagram
    actor Tenant
    participant UI as Exit UI
    participant API as Exit API
    participant RM as RM System
    participant NBFC as NBFC Partner
    participant Bank as Bank

    Tenant->>UI: Click "Initiate Exit" (or auto-prompt at T-60 days)
    UI->>API: GET /exit/terms/:tenancy_id
    API-->>UI: Exit terms + timeline

    UI->>Tenant: Display exit terms:
    Note over Tenant,UI: Tenure ends: Aug 15, 2027<br/>Notice period: 60 days<br/>Inspection: Within 7 days of exit<br/>Refund timeline: 15 days post-inspection<br/>Early exit penalty: 2% of deposit (if before tenure)

    Tenant->>UI: Confirm bank account for refund
    UI->>API: POST /exit/initiate {tenancy_id, bank_account, move_out_date}
    API->>RM: Assign exit coordination
    API-->>UI: Exit initiated, reference: EXIT-001

    Note over Tenant,NBFC: Move-out day
    RM->>API: Update: Property inspection complete
    API->>API: Calculate final settlement

    alt No deductions
        API->>NBFC: Initiate full liquidation (₹75,00,000)
        NBFC-->>API: Funds liquidated
        API->>Bank: Transfer to tenant bank account
        Bank-->>API: Transfer completed (UTR)
        API->>Tenant: "Deposit refunded! ₹75,00,000 credited."
    end

    alt Deductions apply
        API->>Tenant: "Settlement: ₹75,00,000 - ₹25,000 (damages) = ₹74,75,000"
        Tenant->>API: Accept OR Dispute
        alt Accept
            API->>NBFC: Liquidate ₹74,75,000 to tenant + ₹25,000 to owner
        end
        alt Dispute
            API->>RM: Escalate dispute
            Note over API,RM: Manual resolution within 7 days
        end
    end
```

---

## 10. Error States & Recovery Flows

### 10.1 Common Error States

| Error | Screen | Recovery |
|-------|--------|----------|
| Network timeout | Any API call | Auto-retry (3x) → Show retry button with offline indicator |
| Session expired | Any authenticated page | Redirect to login, preserve URL for post-auth redirect |
| KYC document rejected | KYC flow | Show specific reason, highlight fix, re-upload button |
| Deposit transfer failed | Deposit transfer | Show failure reason, RM notification, retry guidance |
| e-Sign OTP expired | Agreement signing | "Resend OTP" button (max 3 attempts per session) |
| Visit cancelled by owner | Visit confirmation | Notify tenant, suggest alternative slots |
| Payment gateway error | Platform fee payment | Retry with alternative method suggestion |

### 10.2 Graceful Degradation

```mermaid
graph TD
    A[Service Unavailable] --> B{Which service?}
    B -->|Search| C[Show cached results + stale indicator]
    B -->|KYC Provider| D[Queue request + notify user of delay]
    B -->|Bank API| E[Hold transaction + manual processing alert]
    B -->|e-Sign| F[Preserve session + resume within 24h]
    B -->|Notification| G[Queue for retry + in-app fallback]
    B -->|NBFC| H[Hold deposit + admin alert + manual processing]
```

### 10.3 Form Validation UX

| Principle | Implementation |
|-----------|---------------|
| Inline validation | Validate on blur, show error below field immediately |
| Format guidance | Show expected format as placeholder (e.g., "ABCDE1234F" for PAN) |
| Progress preservation | Auto-save form state every 30s, resume on return |
| Error summary | On submit failure, scroll to first error + summary toast |
| Success feedback | Green checkmark animation per field on valid input |
| Disable submit | Button disabled until all required fields valid |

---

## Cross-References

- Application Flow: [docs/01-product/app-flow.md](./app-flow.md)
- Feature Specifications: [docs/01-product/feature-specifications.md](./feature-specifications.md)
- Backend Workflows: [docs/01-product/backend-workflows.md](./backend-workflows.md)
