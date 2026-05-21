---
title: Backend Workflows
version: "1.0"
audience: Engineering, Architecture, DevOps
last-updated: 2026-05-21
status: draft
related-docs:
  - "../02-technical/system-architecture.md"
  - "../02-technical/api-contracts.md"
  - "./transaction-flow.md"
  - "./escrow-deposit-logic.md"
---

# Backend Workflows — NWTR

## TL;DR

Server-side process documentation for all critical backend workflows in NWTR. Covers deposit management, investment allocation, payout scheduling, KYC orchestration, agreement generation, refund processing, notifications, and reconciliation. Each workflow includes sequence diagrams, error handling, and retry strategies.

---

## 1. Deposit Collection Workflow

```mermaid
sequenceDiagram
    participant Tenant as Tenant Bank
    participant Escrow as Escrow Account
    participant Webhook as Bank Webhook
    participant DepSvc as Deposit Service
    participant DB as PostgreSQL
    participant Queue as Service Bus
    participant NBFC as NBFC API
    participant Notif as Notification Service

    Tenant->>Escrow: NEFT/RTGS Transfer (₹75L, Ref: NWTR-DEP-AGR123)
    Escrow->>Webhook: Credit notification (UTR, amount, ref, timestamp)
    Webhook->>DepSvc: POST /internal/deposit/webhook

    DepSvc->>DB: Match reference to pending deposit
    alt Reference matched
        DepSvc->>DB: Verify amount matches agreement
        alt Amount correct
            DepSvc->>DB: Update deposit status → "received"
            DepSvc->>Queue: Emit event: deposit.received
            Queue->>Notif: Trigger tenant + owner notifications
            Queue->>NBFC: Trigger investment allocation
            DepSvc->>DB: Create audit log entry
        end
        alt Amount mismatch
            DepSvc->>DB: Update status → "amount_mismatch"
            DepSvc->>Queue: Emit event: deposit.mismatch
            Queue->>Notif: Alert admin + RM
            Note over DepSvc: Hold for manual resolution
        end
    end
    alt Reference not matched
        DepSvc->>DB: Log unmatched deposit
        DepSvc->>Queue: Emit event: deposit.unmatched
        Queue->>Notif: Alert admin for manual mapping
    end
```

### Escrow Account Management

| Aspect | Detail |
|--------|--------|
| Account Type | Current account with escrow mandate |
| Bank Partner | Scheduled commercial bank (ICICI/HDFC/SBI) |
| Reconciliation | T+1 automated, daily manual review |
| Segregation | One pooled escrow, tracked per tenant internally |
| Audit | Daily balance reconciliation with DB records |

### Deposit States

```mermaid
stateDiagram-v2
    [*] --> Pending: Agreement signed
    Pending --> Awaiting: Instructions sent to tenant
    Awaiting --> Received: Bank webhook confirms
    Awaiting --> Expired: 48h deadline passed
    Received --> Verified: Amount + ref validated
    Received --> Mismatch: Validation failed
    Verified --> Invested: NBFC allocation complete
    Invested --> Active: Tenancy activated
    Mismatch --> Verified: Admin resolves
    Expired --> Awaiting: Extension granted
    Expired --> Cancelled: No extension
```

---

## 2. Investment Allocation Workflow

```mermaid
sequenceDiagram
    participant Queue as Service Bus
    participant InvSvc as Investment Service
    participant NBFC as NBFC Partner API
    participant DB as PostgreSQL
    participant Notif as Notification Service

    Queue->>InvSvc: Event: deposit.verified (tenant_id, amount, tenure)
    InvSvc->>NBFC: POST /accounts/create {tenant_ref, amount, tenure_months: 12}
    NBFC-->>InvSvc: {account_id, status: "created"}

    InvSvc->>NBFC: POST /accounts/{id}/allocate
    Note over NBFC: Allocation strategy:<br/>60% Fixed Deposits (7-8% p.a.)<br/>30% Treasury Bills (6.5-7%)<br/>10% G-Secs (7-7.5%)

    NBFC-->>InvSvc: Allocation confirmed:
    Note over NBFC,InvSvc: FD: ₹45L @ 7.5% (HDFC/SBI)<br/>T-Bills: ₹22.5L @ 6.8% (91-day)<br/>G-Sec: ₹7.5L @ 7.2% (10Y)

    InvSvc->>DB: Store investment details
    InvSvc->>DB: Calculate expected monthly yield
    Note over InvSvc: Monthly yield: ₹75L × 7.2% / 12 = ~₹45,000<br/>Platform margin: ₹45,000 - ₹40,000 (owner payout) = ₹5,000

    InvSvc->>DB: Create payout schedule (12 monthly entries)
    InvSvc->>Queue: Emit event: investment.allocated
    Queue->>Notif: Notify tenant: "Your deposit is securely invested"
    Queue->>Notif: Notify owner: "Monthly payouts begin next month"
```

### Investment Allocation Rules

| Rule | Constraint |
|------|-----------|
| Instrument eligibility | Only sovereign/quasi-sovereign (FD in scheduled banks, T-Bills, G-Secs) |
| Diversification | No single instrument > 60% of deposit |
| Liquidity | At least 20% in instruments with < 91-day maturity |
| Tenure matching | Investment maturity aligned to tenancy end date |
| Reinvestment | Auto-reinvest maturing T-Bills until tenure end |
| Minimum yield | Combined portfolio yield must exceed owner payout + platform margin |

---

## 3. Payout Scheduling Workflow

```mermaid
sequenceDiagram
    participant Cron as Scheduler (Monthly)
    participant PaySvc as Payout Service
    participant DB as PostgreSQL
    participant NACH as NACH/eMandate
    participant Bank as Owner Bank
    participant Notif as Notification Service
    participant Admin as Admin Queue

    Cron->>PaySvc: Trigger monthly payout batch (1st of month)
    PaySvc->>DB: Fetch all active tenancies with payout due
    DB-->>PaySvc: List of payouts [{owner_id, amount, bank_details}]

    PaySvc->>PaySvc: Generate batch file (NACH format)
    PaySvc->>NACH: Submit batch (all owner payouts)
    NACH-->>PaySvc: Batch accepted, ref: BATCH-2026-06-001

    Note over NACH,Bank: T+1 Processing
    NACH->>Bank: Execute individual transfers
    Bank-->>NACH: Transfer results (success/fail per item)
    NACH-->>PaySvc: Batch results webhook

    loop For each payout result
        alt Success
            PaySvc->>DB: Update payout → "credited" (UTR recorded)
            PaySvc->>Notif: SMS to owner: "₹48,000 credited to your account"
        end
        alt Failed
            PaySvc->>DB: Update payout → "failed" (reason: insufficient_balance/invalid_account)
            PaySvc->>Admin: Queue for manual intervention
            PaySvc->>Notif: Alert RM + Admin
            Note over PaySvc: Auto-retry after 24h (max 3 attempts)
        end
    end

    PaySvc->>DB: Generate monthly payout report
    PaySvc->>Notif: Summary to admin: "95 payouts credited, 3 failed, 2 pending"
```

### NACH Mandate Setup

```mermaid
sequenceDiagram
    participant API as Payout Service
    participant NACH as NACH System
    participant Owner as Owner Bank
    participant Notif as Notification

    Note over API,Notif: Setup during agreement activation
    API->>NACH: Register mandate (owner bank, max amount, frequency: monthly)
    NACH->>Owner: Mandate registration request
    Owner-->>NACH: Mandate approved (auto-debit authorization)
    NACH-->>API: Mandate active, ref: MNDT-XXX

    API->>Notif: Notify owner: "Monthly payout mandate active"
```

---

## 4. KYC Verification Workflow

```mermaid
sequenceDiagram
    participant User
    participant API as KYC Service
    participant DL as DigiLocker
    participant OCR as OCR Engine
    participant CKYC as CKYC Registry
    participant VKYC as VKYC Provider
    participant Queue as Service Bus
    participant Admin as Admin Queue
    participant DB as PostgreSQL

    Note over User,DB: === TIER 1: Automated ===
    User->>API: Submit PAN + DigiLocker consent
    API->>DL: Fetch Aadhaar XML (consent-based)
    DL-->>API: Aadhaar data (masked)
    API->>CKYC: Verify PAN-Aadhaar linkage
    CKYC-->>API: Linkage confirmed
    API->>DB: Tier 1 verified (automated, no manual review)

    Note over User,DB: === TIER 2: Semi-Automated ===
    User->>API: Upload address proof + income docs
    API->>OCR: Extract text from documents
    OCR-->>API: Extracted data (name, address, amount)

    API->>API: Auto-verify rules:
    Note over API: Name match with Aadhaar: ✓ (fuzzy 90%+)<br/>Address within serviceable area: ✓<br/>Income > threshold: ✓<br/>Document not expired: ✓

    alt All rules pass
        API->>DB: Tier 2 auto-verified
    end
    alt Any rule fails
        API->>Admin: Queue for manual review
        Admin->>API: Approve/Reject with reason
        API->>DB: Update Tier 2 status
    end

    Note over User,DB: === TIER 3: Manual + Video ===
    User->>API: Schedule VKYC
    API->>VKYC: Create VKYC session
    VKYC-->>User: VKYC link
    User->>VKYC: Complete video verification
    VKYC-->>API: Result: verified (face match, liveness confirmed)

    User->>API: Upload bank statement (6 months)
    API->>OCR: Parse bank statement
    OCR-->>API: Transaction data
    API->>API: Verify: account holder match, avg balance, no bounced cheques
    API->>DB: Tier 3 verified
    API->>Queue: Emit event: kyc.tier3.completed
```

### KYC SLA Matrix

| Tier | Auto-verify | Manual Review SLA | Rejection Re-attempt |
|------|-------------|-------------------|---------------------|
| Tier 1 | 95% (real-time) | 24h (if auto fails) | Immediate |
| Tier 2 | 60% (within 5min) | 48h | Within 7 days |
| Tier 3 | 30% (VKYC pass-through) | 72h | Within 14 days |

---

## 5. Agreement Generation Workflow

```mermaid
sequenceDiagram
    participant API as Agreement Service
    participant Template as Template Engine
    participant Data as Data Aggregator
    participant Stamp as e-Stamp API
    participant DB as PostgreSQL
    participant Queue as Service Bus

    API->>Data: Fetch agreement data
    Note over Data: Tenant: name, Aadhaar, PAN, address<br/>Owner: name, Aadhaar, PAN, address<br/>Property: address, specs, inventory<br/>Terms: deposit, tenure, payout, clauses

    Data-->>API: Aggregated data payload
    API->>Template: Generate agreement (Karnataka Rent Act template)
    Template-->>API: Draft agreement (HTML + PDF)

    API->>Stamp: Request e-Stamp
    Note over Stamp: State: Karnataka<br/>Value: Based on deposit amount<br/>Type: Rental agreement
    Stamp-->>API: e-Stamp certificate (unique ID + QR)

    API->>API: Embed e-Stamp into agreement
    API->>DB: Store agreement (status: "draft")
    API->>Queue: Emit event: agreement.ready_for_review

    Note over API: Agreement versioning:
    Note over API: Any edit creates new version<br/>Both parties must re-acknowledge if terms change<br/>Audit trail of all versions maintained
```

### Agreement Template Variables

| Category | Variables |
|----------|-----------|
| Parties | tenant_name, tenant_aadhaar, owner_name, owner_aadhaar |
| Property | address, area_sqft, bhk, floor, society_name |
| Financial | deposit_amount, monthly_payout, tenure_months |
| Dates | start_date, end_date, notice_period_days |
| Legal | jurisdiction, dispute_resolution, governing_law |
| Exit | early_exit_penalty, refund_timeline_days |

---

## 6. Deposit Return Workflow

```mermaid
sequenceDiagram
    participant ExitSvc as Exit Service
    participant NBFC as NBFC API
    participant DB as PostgreSQL
    participant Bank as Bank API
    participant Notif as Notification
    participant Admin as Admin

    ExitSvc->>DB: Fetch tenancy exit record
    ExitSvc->>DB: Calculate final settlement
    Note over ExitSvc: Deposit: ₹75,00,000<br/>Deductions: ₹0 (no damages)<br/>Refund: ₹75,00,000

    ExitSvc->>NBFC: POST /accounts/{id}/liquidate {amount: 7500000}
    NBFC->>NBFC: Break FDs + sell T-Bills + redeem G-Secs
    Note over NBFC: FD pre-closure penalty absorbed by platform<br/>T-Bills: sold at market<br/>G-Secs: redeemed at par (if matured)

    NBFC-->>ExitSvc: Liquidation complete, funds available: ₹75,00,000
    ExitSvc->>DB: Update status → "funds_liquidated"

    ExitSvc->>Bank: Initiate RTGS to tenant account
    Note over Bank: Amount: ₹75,00,000<br/>Beneficiary: Tenant bank account<br/>Mode: RTGS (> ₹2L)

    Bank-->>ExitSvc: Transfer confirmed (UTR: RTG123456)
    ExitSvc->>DB: Update status → "refunded"
    ExitSvc->>DB: Close tenancy record
    ExitSvc->>Notif: Notify tenant: "₹75,00,000 refunded to your account"
    ExitSvc->>Notif: Notify owner: "Tenancy completed, property available"
    ExitSvc->>Admin: Generate final settlement report
```

### Settlement Calculation

| Component | Formula |
|-----------|---------|
| Base refund | Original deposit amount |
| Damage deduction | Inspection report amount (if any) |
| Early exit penalty | 2% of deposit (if before tenure end) |
| Pending utilities | Outstanding bills transferred to tenant |
| Final refund | Base - damages - penalty - utilities |

---

## 7. Notification Orchestration

```mermaid
sequenceDiagram
    participant Service as Any Service
    participant Queue as Service Bus
    participant NotifSvc as Notification Service
    participant DB as Notification DB
    participant Email as Email (SendGrid)
    participant SMS as SMS (Msg91)
    participant WA as WhatsApp Business
    participant Push as Push (FCM)
    participant InApp as WebSocket

    Service->>Queue: Emit event (e.g., deposit.received)
    Queue->>NotifSvc: Process event

    NotifSvc->>DB: Lookup notification template for event
    NotifSvc->>DB: Fetch user preferences (channels, language)
    NotifSvc->>NotifSvc: Render template with event data

    par Send via preferred channels
        NotifSvc->>Email: Send email (HTML template)
        NotifSvc->>SMS: Send SMS (160 char)
        NotifSvc->>WA: Send WhatsApp (rich template)
        NotifSvc->>Push: Send push notification
        NotifSvc->>InApp: WebSocket: real-time notification
    end

    NotifSvc->>DB: Log delivery status per channel
    Note over NotifSvc: Retry failed deliveries (3 attempts, exponential backoff)
```

### Notification Priority Matrix

| Priority | Channels | Examples |
|----------|----------|----------|
| Critical | SMS + WhatsApp + Push + InApp | Deposit received, payout credited, agreement ready |
| High | WhatsApp + Push + InApp + Email | KYC approved, visit confirmed, exit initiated |
| Medium | Push + InApp + Email | New property match, maintenance update |
| Low | InApp + Email (digest) | Tips, blog posts, feature updates |

### Template Management

| Template | Variables | Channels |
|----------|-----------|----------|
| deposit_received | {amount, property_name} | SMS, WhatsApp, Email, Push |
| payout_credited | {amount, month, utr} | SMS, WhatsApp |
| kyc_approved | {tier, next_step} | Push, Email |
| visit_reminder | {property, date, time, rm_name, rm_phone} | WhatsApp, SMS |
| agreement_ready | {property, counterparty} | Email, Push |
| exit_refund | {amount, bank_last4} | SMS, WhatsApp, Email |

---

## 8. Reconciliation Workflow

```mermaid
sequenceDiagram
    participant Cron as Daily Scheduler (2 AM)
    participant ReconSvc as Reconciliation Service
    participant DB as PostgreSQL
    participant Bank as Bank Statement API
    participant NBFC as NBFC API
    participant Admin as Admin Alert
    participant Report as Report Generator

    Cron->>ReconSvc: Trigger daily reconciliation

    Note over ReconSvc,Bank: === Bank Reconciliation ===
    ReconSvc->>Bank: Fetch previous day's transactions
    Bank-->>ReconSvc: Bank statement entries
    ReconSvc->>DB: Fetch internal transaction records (same day)
    ReconSvc->>ReconSvc: Match by UTR/reference

    alt All matched
        ReconSvc->>DB: Mark all transactions as "reconciled"
    end
    alt Discrepancies found
        ReconSvc->>DB: Flag unmatched entries
        ReconSvc->>Admin: Alert: "3 unmatched transactions, total ₹1.2L"
        Note over Admin: Manual investigation within 24h
    end

    Note over ReconSvc,NBFC: === Investment Reconciliation ===
    ReconSvc->>NBFC: Fetch portfolio positions
    NBFC-->>ReconSvc: Current holdings + valuations
    ReconSvc->>DB: Compare with internal records
    ReconSvc->>ReconSvc: Verify: total invested = sum of active deposits

    Note over ReconSvc,Report: === Report Generation ===
    ReconSvc->>Report: Generate daily reconciliation report
    Report-->>Admin: Email: Daily Recon Summary
    Note over Report: Matched: 142/145 transactions<br/>Discrepancies: 3 (₹1,23,456)<br/>Portfolio NAV: ₹347 Cr<br/>Expected vs Actual: 99.7% match
```

### Reconciliation Types

| Type | Frequency | Tolerance | Escalation |
|------|-----------|-----------|------------|
| Bank statement vs internal | Daily (T+1) | ₹0 (exact match) | Immediate if > ₹10,000 |
| NBFC holdings vs records | Weekly | 0.1% variance | 48h resolution window |
| Payout batch vs credited | Daily (T+2) | ₹0 (exact match) | Same-day for failures |
| Platform fee collection | Monthly | ₹100 | Month-end adjustment |

---

## 9. Audit Log Generation

### Audit Events

| Event Category | Examples | Retention |
|----------------|----------|-----------|
| Authentication | Login, logout, failed attempts, MFA | 2 years |
| Data Access | PII viewed, document downloaded, export | 7 years |
| Data Mutation | Profile update, KYC submission, status change | 7 years |
| Financial | Deposit, payout, refund, fee | 10 years |
| Admin Action | User management, config change, approval | 10 years |
| System | Service start/stop, deployment, error | 1 year |

### Audit Log Schema

```
{
  "event_id": "uuid",
  "timestamp": "ISO 8601",
  "service": "deposit-service",
  "action": "deposit.verified",
  "actor": {
    "user_id": "uuid",
    "role": "system",
    "ip_address": "masked",
    "session_id": "uuid"
  },
  "resource": {
    "type": "deposit",
    "id": "DEP-001",
    "tenant_id": "uuid"
  },
  "changes": {
    "before": {"status": "received"},
    "after": {"status": "verified"}
  },
  "metadata": {
    "correlation_id": "uuid",
    "environment": "production"
  }
}
```

### Immutability

- Audit logs written to append-only table (no UPDATE/DELETE permissions)
- Daily hash chain for tamper detection
- Replicated to separate audit database (read-only access for auditors)
- Azure Immutable Blob Storage for long-term archival

---

## Cross-References

- Technical Requirements: [docs/01-product/trd.md](./trd.md)
- UX Flows: [docs/01-product/ux-flows.md](./ux-flows.md)
- RM Workflow: [docs/01-product/rm-workflow.md](./rm-workflow.md)
