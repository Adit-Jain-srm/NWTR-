# API Contracts

---
title: API Contracts  
version: "1.0"  
audience: engineering  
last-updated: 2026-05-21  
status: draft  
related-docs:
  - "./system-architecture.md"
  - "../01-product/prd.md"
  - "../01-product/backend-workflows.md"
  - "./rbac-model.md"
---

## TL;DR

All NWTR APIs are exposed through Azure API Management with URL-path versioning (`/api/v1/`). Authentication uses Bearer JWT tokens issued by Azure Entra ID B2C. APIs follow REST conventions with standardized response envelopes, error codes, pagination, and rate limiting. Nine microservices expose domain-specific endpoints covering authentication, property management, KYC verification, deposit lifecycle, payout processing, user management, and AI-powered features.

---

## API Versioning Strategy

| Aspect | Approach |
|--------|----------|
| **Method** | URL path versioning: `/api/v1/`, `/api/v2/` |
| **Scope** | Per-service versioning (services evolve independently) |
| **Deprecation** | Minimum 6-month sunset window with `Sunset` header |
| **Compatibility** | Additive changes (new fields) are non-breaking |
| **Documentation** | OpenAPI 3.1 specs per service, auto-generated |

---

## Authentication

All API requests (except public endpoints) require a valid Bearer token:

```
Authorization: Bearer <JWT from Azure Entra ID B2C>
```

### Token Structure (Claims)

```json
{
  "sub": "uuid",
  "oid": "azure-object-id",
  "email": "user@example.com",
  "role": "tenant",
  "kyc_tier": 2,
  "permissions": ["deposits:read", "deposits:create"],
  "iss": "https://nwtr.b2clogin.com/...",
  "aud": "nwtr-api-client-id",
  "exp": 1716307200,
  "iat": 1716303600
}
```

### Token Lifecycle

| Token Type | TTL | Refresh |
|-----------|-----|---------|
| Access Token | 30 minutes | Via refresh token |
| Refresh Token | 14 days | Rolling (reissued on use) |
| ID Token | 1 hour | Not refreshable |

---

## Standard Response Format

### Success Response

```json
{
  "success": true,
  "data": {},
  "meta": {
    "requestId": "uuid",
    "timestamp": "2026-05-21T10:30:00.000Z",
    "version": "v1"
  }
}
```

### Paginated Response

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "pageSize": 20,
    "totalItems": 156,
    "totalPages": 8,
    "hasNext": true,
    "hasPrevious": false
  },
  "meta": {
    "requestId": "uuid",
    "timestamp": "ISO-8601"
  }
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "DEPOSIT_INSUFFICIENT_KYC",
    "message": "KYC tier 2 required for deposit initiation",
    "details": [
      { "field": "kyc_tier", "issue": "Current tier is 1, required is 2" }
    ],
    "helpUrl": "https://docs.nwtr.in/errors/DEPOSIT_INSUFFICIENT_KYC"
  },
  "meta": {
    "requestId": "uuid",
    "timestamp": "ISO-8601"
  }
}
```

---

## Error Codes

| Code Range | Category | Example |
|-----------|----------|---------|
| `AUTH_*` | Authentication/Authorization | AUTH_TOKEN_EXPIRED, AUTH_INSUFFICIENT_ROLE |
| `USER_*` | User operations | USER_NOT_FOUND, USER_ALREADY_EXISTS |
| `PROP_*` | Property operations | PROP_NOT_FOUND, PROP_ALREADY_OCCUPIED |
| `KYC_*` | KYC verification | KYC_DOCUMENT_INVALID, KYC_VERIFICATION_FAILED |
| `DEP_*` | Deposit operations | DEP_INSUFFICIENT_KYC, DEP_MANDATE_FAILED |
| `PAY_*` | Payout operations | PAY_BANK_REJECTED, PAY_INSUFFICIENT_FUNDS |
| `VAL_*` | Validation errors | VAL_REQUIRED_FIELD, VAL_INVALID_FORMAT |
| `SYS_*` | System errors | SYS_SERVICE_UNAVAILABLE, SYS_RATE_LIMITED |

### HTTP Status Code Mapping

| Status | Usage |
|--------|-------|
| 200 | Successful retrieval or update |
| 201 | Resource created |
| 202 | Accepted (async processing started) |
| 204 | Successful deletion (no body) |
| 400 | Validation error (VAL_* codes) |
| 401 | Authentication required |
| 403 | Insufficient permissions |
| 404 | Resource not found |
| 409 | Conflict (duplicate, state mismatch) |
| 422 | Business rule violation |
| 429 | Rate limit exceeded |
| 500 | Internal server error |
| 503 | Service temporarily unavailable |

---

## Rate Limiting

| Tier | Requests/min | Burst | Scope |
|------|-------------|-------|-------|
| Anonymous | 30 | 10 | Per IP |
| Tenant/Owner | 120 | 30 | Per user |
| RM | 300 | 60 | Per user |
| Admin | 600 | 120 | Per user |
| Super Admin | 1000 | 200 | Per user |
| Webhooks (inbound) | 100 | 50 | Per source |

Rate limit headers included in every response:
```
X-RateLimit-Limit: 120
X-RateLimit-Remaining: 87
X-RateLimit-Reset: 1716307260
```

---

## Auth Service Endpoints

### POST /api/v1/auth/register

Register a new user account.

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| email | string | Yes | Valid email format |
| phone | string | Yes | Indian mobile (+91, 10 digits) |
| password | string | Yes | Min 8 chars, 1 upper, 1 number, 1 special |
| firstName | string | Yes | 2-100 chars |
| lastName | string | Yes | 2-100 chars |
| role | enum | Yes | tenant, owner |
| acceptTerms | boolean | Yes | Must be true |

**Response**: 201 Created with user object (no tokens until email verified)

### POST /api/v1/auth/login

```json
{ "email": "string", "password": "string", "mfaCode": "string?" }
```

**Response**: 200 with `{ accessToken, refreshToken, expiresIn, user }`

### POST /api/v1/auth/refresh

```json
{ "refreshToken": "string" }
```

### POST /api/v1/auth/mfa/setup

Enable MFA for account. Returns QR code URI for authenticator app.

### POST /api/v1/auth/mfa/verify

Verify MFA code during login flow.

### POST /api/v1/auth/password/reset-request

### POST /api/v1/auth/password/reset-confirm

### POST /api/v1/auth/logout

Revokes refresh token, adds access token to blacklist.

---

## Property Service Endpoints

### GET /api/v1/properties

List/search properties with filtering.

| Parameter | Type | Description |
|-----------|------|-------------|
| page | number | Page number (default 1) |
| pageSize | number | Items per page (max 50, default 20) |
| city | string | Filter by city |
| state | string | Filter by state |
| minValue | number | Min market value (INR) |
| maxValue | number | Max market value (INR) |
| bedrooms | number | BHK filter |
| propertyType | enum | apartment, house, villa, commercial |
| furnishing | enum | unfurnished, semi, fully |
| status | enum | listed (default for tenants) |
| sortBy | enum | market_value, created_at, carpet_area_sqft |
| sortOrder | enum | asc, desc |
| q | string | Full-text search query |

### GET /api/v1/properties/:id

Full property details including media, amenities, owner info (limited).

### POST /api/v1/properties

Create a property listing (Owner, Admin roles).

### PUT /api/v1/properties/:id

Update property details. Only owner or admin.

### POST /api/v1/properties/:id/media

Upload property images/videos. Returns presigned upload URLs.

### PATCH /api/v1/properties/:id/status

Transition listing status (draft → listed → occupied → unlisted).

### GET /api/v1/properties/:id/deposit-calculator

Calculate deposit amount for a property.

**Response**:
```json
{
  "propertyId": "uuid",
  "marketValue": 5000000,
  "depositRange": { "min": 3500000, "max": 4000000 },
  "estimatedMonthlyPayout": 29167,
  "investmentBreakdown": {
    "fdComponent": 2500000,
    "tBillComponent": 1000000,
    "gSecComponent": 500000
  }
}
```

---

## KYC Service Endpoints

### POST /api/v1/kyc/submit

Submit KYC documents for verification.

```json
{
  "tier": "basic | full | enhanced",
  "documents": [
    { "type": "aadhaar", "documentId": "blob-ref-uuid" },
    { "type": "pan", "documentId": "blob-ref-uuid" },
    { "type": "address_proof", "documentId": "blob-ref-uuid" }
  ],
  "consent": { "digilocker": true, "ckyc": true, "cibil": true }
}
```

### GET /api/v1/kyc/status

Current KYC verification status for authenticated user.

### POST /api/v1/kyc/digilocker/initiate

Initiate DigiLocker OAuth flow for document pull.

### POST /api/v1/kyc/verify-aadhaar

OTP-based Aadhaar verification.

### GET /api/v1/kyc/credit-score

Fetch CIBIL/CRIF score (requires consent, Tier 2+).

### POST /api/v1/kyc/tier-upgrade

Request tier upgrade with additional documents.

---

## Deposit Service Endpoints

### POST /api/v1/deposits

Initiate a new deposit.

```json
{
  "propertyId": "uuid",
  "amount": 3750000,
  "percentage": 75,
  "paymentMethod": "nach",
  "bankAccountId": "uuid"
}
```

**Response**: 202 Accepted (async mandate creation)

### GET /api/v1/deposits

List user's deposits (tenant sees own, owner sees on their properties).

### GET /api/v1/deposits/:id

Deposit detail with status timeline, investment info, payout schedule.

### GET /api/v1/deposits/:id/status

Real-time status with timeline events.

### POST /api/v1/deposits/:id/return

Initiate deposit return (triggers maturity/liquidation workflow).

### GET /api/v1/deposits/:id/investment

Investment details (instrument type, rate, maturity date).

### POST /api/v1/deposits/calculate

Calculate deposit parameters for a property.

---

## Payout Service Endpoints

### GET /api/v1/payouts

List payouts (filterable by status, date range).

| Parameter | Type | Description |
|-----------|------|-------------|
| status | enum | scheduled, processing, executed, failed |
| fromDate | date | Start of date range |
| toDate | date | End of date range |
| depositId | uuid | Filter by source deposit |

### GET /api/v1/payouts/:id

Single payout detail with bank reference.

### GET /api/v1/payouts/schedule

Upcoming payout schedule for owner.

### POST /api/v1/payouts/:id/retry

Retry a failed payout (Admin only).

### GET /api/v1/payouts/reconciliation

Reconciliation report (Admin/Super Admin).

### POST /api/v1/payouts/bulk-execute

Trigger bulk payout execution for a date (Admin, scheduled job).

---

## User Service Endpoints

### GET /api/v1/users/me

Authenticated user's profile.

### PUT /api/v1/users/me

Update profile (limited fields).

### GET /api/v1/users/me/documents

List uploaded documents.

### POST /api/v1/users/me/documents

Upload a user document (returns presigned URL).

### PUT /api/v1/users/me/preferences

Update notification and display preferences.

### GET /api/v1/users/:id (Admin)

Admin lookup of any user.

### GET /api/v1/users (Admin)

List/search users with role filter.

---

## AI Service Endpoints

### POST /api/v1/ai/chat

Conversational AI endpoint (RAG-powered).

```json
{
  "sessionId": "uuid | null",
  "message": "Find me a 2BHK in Koramangala under 50 lakhs",
  "context": { "currentCity": "Bangalore" }
}
```

**Response** (streaming SSE):
```
data: {"type":"chunk","content":"Based on your preferences..."}
data: {"type":"properties","items":[{...}]}
data: {"type":"done","sessionId":"uuid"}
```

### POST /api/v1/ai/recommend

Property recommendations based on user history and preferences.

### POST /api/v1/ai/search

Semantic property search (Azure AI Search + GPT-4o reranking).

```json
{
  "query": "spacious family apartment near good schools in HSR Layout",
  "filters": { "maxValue": 8000000, "minBedrooms": 3 },
  "limit": 10
}
```

---

## Webhook Contracts

### Inbound Webhooks (From External Systems)

#### NBFC Bank Callback

```
POST /api/v1/webhooks/nbfc
X-NBFC-Signature: HMAC-SHA256 signature
```

```json
{
  "event": "mandate_confirmed | transfer_completed | investment_matured",
  "referenceId": "nach-mandate-id",
  "timestamp": "ISO-8601",
  "data": {
    "status": "success | failed",
    "amount": 3750000,
    "utrNumber": "UTR123456789",
    "instrumentRef": "FD-REF-001"
  }
}
```

#### Razorpay Payment Webhook

```
POST /api/v1/webhooks/razorpay
X-Razorpay-Signature: SHA256 HMAC
```

#### KYC Status Webhook (DigiLocker/CKYC)

```
POST /api/v1/webhooks/kyc-status
```

### Outbound Webhooks (To Partners)

NWTR sends webhooks to registered partner endpoints for:
- Deposit status changes
- Payout execution confirmations
- KYC tier upgrades

---

## Pagination, Filtering, Sorting Standards

### Pagination

All list endpoints support cursor-based or offset pagination:

| Parameter | Type | Default | Max |
|-----------|------|---------|-----|
| page | integer | 1 | - |
| pageSize | integer | 20 | 50 |
| cursor | string | null | - |

### Filtering

- Query parameters for simple filters: `?status=active&city=Bangalore`
- Complex filters via POST body on `/search` endpoints
- Date ranges: `fromDate` and `toDate` (ISO-8601)

### Sorting

```
?sortBy=created_at&sortOrder=desc
?sortBy=market_value,bedrooms&sortOrder=asc,desc
```

Multi-field sorting supported with comma-separated values.

---

## Cross-References

- [System Architecture](./system-architecture.md) — Service communication patterns
- [Database Schema](./database-schema.md) — Underlying data models
- [RBAC Model](./rbac-model.md) — Endpoint access control per role
- [Security Architecture](./security-architecture.md) — API security controls
