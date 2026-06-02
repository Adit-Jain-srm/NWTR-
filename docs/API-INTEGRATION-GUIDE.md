# NWTR — API & Credentials Integration Guide

**Purpose:** Track all mocked services, their integration points, and the process for activating them with real credentials.

---

## Current State: Mocked Services

All external services are currently mocked with realistic UI flows but no real backend connections. The architecture is designed so that activating each service requires ONLY adding environment variables — no code changes needed.

---

## Service Integration Tracker

| Service | Purpose | Status | Env Variable(s) | Integration File(s) |
|---------|---------|--------|-----------------|---------------------|
| **Neon PostgreSQL** | Primary database | 🟡 Needs credential | `DATABASE_URL` | `prisma/schema.prisma`, `src/lib/prisma.ts` |
| **NextAuth Secret** | Session encryption | 🟡 Needs credential | `NEXTAUTH_SECRET` | `src/lib/auth.ts` |
| **OpenAI** | AI chat, function calling, smart search | 🟡 Needs credential | `OPENAI_API_KEY` | `src/app/api/v1/ai/chat/route.ts` |
| **Vercel Blob** | KYC document storage | 🟡 Needs credential | `BLOB_READ_WRITE_TOKEN` | `src/app/api/v1/upload/route.ts` |
| **Resend** | Transactional emails | 🟡 Needs credential | `RESEND_API_KEY` | `src/lib/email.ts` |
| **Razorpay** | Payment processing (deposits) | 🔴 Not built yet | `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET` | TBD |
| **DigiLocker** | Aadhaar/document verification | 🔴 Not built yet | `DIGILOCKER_CLIENT_ID`, `DIGILOCKER_CLIENT_SECRET` | TBD |
| **CKYC/CIBIL** | Credit score, KYC verification | 🔴 Not built yet | `CIBIL_API_KEY`, `CKYC_API_KEY` | TBD |
| **Azure Entra ID B2C** | Enterprise auth (Phase 2) | 🔴 Not built yet | `AZURE_AD_*` | TBD |
| **NBFC Partner API** | Deposit custody, investment | 🔴 Not built yet | `NBFC_API_KEY`, `NBFC_API_SECRET` | TBD |
| **Aadhaar e-Sign** | Digital agreement signing | 🔴 Not built yet | `ESIGN_API_KEY` | TBD |

---

## How to Provide Credentials

### Step 1: Create a `.env.local` file

```bash
cp .env.example .env.local
```

### Step 2: Add your credentials

Edit `.env.local` with real values. **Never commit this file** (it's in `.gitignore`).

### Step 3: For Vercel deployment

Go to: Vercel Dashboard → Project Settings → Environment Variables

Add each variable. Production/Preview/Development scopes as needed.

### Step 4: Restart dev server

```bash
npm run dev
```

Changes take effect immediately for most services. Database changes require:
```bash
npx prisma migrate dev
npx tsx prisma/seed.ts
```

---

## Activation Sequence (Recommended Order)

1. **Database first** (`DATABASE_URL`) — Everything depends on this
2. **Auth** (`NEXTAUTH_SECRET`) — Enables login/sessions
3. **AI** (`OPENAI_API_KEY`) — Enables chat, search, recommendations
4. **Storage** (`BLOB_READ_WRITE_TOKEN`) — Enables KYC document upload
5. **Email** (`RESEND_API_KEY`) — Enables notifications
6. **Payment** (`RAZORPAY_*`) — Enables deposit collection
7. **KYC services** (`DIGILOCKER_*`, `CIBIL_*`) — Enables real verification
8. **NBFC** (`NBFC_*`) — Enables real fund management

---

## Mock Behavior (What Happens Without Real Credentials)

| Service | Mock Behavior |
|---------|--------------|
| Database | Build passes; API routes return mock data from seed |
| Auth | Login works with seeded users (password: `NwtrDemo2026!`) |
| OpenAI | Chat returns graceful "AI unavailable" message |
| Blob Storage | File upload UI works, files stored locally/console.log |
| Email | Emails logged to console instead of sent |
| Razorpay | Payment UI shows, success simulated after delay |
| DigiLocker | KYC form submits, auto-approves after 3 seconds |
| CIBIL | Returns mock credit score (750) |
| NBFC | Deposit confirmation simulated |

---

## When You're Ready to Provide APIs

Tell me:
> "Here are my credentials for [service]: ..."

I will:
1. Add the env variable to `.env.example` (without the actual value)
2. Configure the integration code (if not already built)
3. Run the activation steps (migrate, seed, etc.)
4. Verify the live connection works
5. Update this document's status from 🟡/🔴 to 🟢

---

## Security Notes

- Never paste credentials directly in chat — use `.env.local` file
- All API keys should be restricted to minimum required permissions
- Rotate keys if exposed accidentally
- Use Vercel's encrypted environment variables for production
- Database URLs should use `?sslmode=require` for production

---

## Future Integration Architecture

```
.env.local (local dev)
    ↓
.env.example (template, committed)
    ↓
Vercel Env Vars (production, encrypted)
    ↓
src/lib/config.ts (runtime access via process.env)
    ↓
Service modules (src/lib/email.ts, src/lib/storage.ts, etc.)
```

Each service module exports a unified interface regardless of whether the real service or mock is active. Switching is automatic based on env var presence.
