# NWTR Agent Instructions

## Project Context
NWTR ("New Way To Rent") is a premium proptech-fintech platform. This repo contains the full-stack Next.js application with 49 specification documents.

## Key Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build (includes `prisma generate`)
- `npm run lint` — ESLint check
- `npm run test` — Run test suite (Vitest)
- `npx tsc --noEmit` — Type check
- `npx prisma generate` — Generate Prisma client
- `npx prisma migrate dev` — Run migrations (needs DATABASE_URL)
- `npx tsx prisma/seed.ts` — Seed database

## Architecture
- **Framework:** Next.js 15 App Router, TypeScript strict
- **Styling:** TailwindCSS v4 with @theme design tokens
- **Components:** `src/components/ui/` (29 primitives), `src/components/motion/` (6), `src/components/three/` (3)
- **API:** Route handlers at `src/app/api/v1/` (REST, Zod validation, RBAC)
- **Auth:** NextAuth.js v5 at `src/lib/auth.ts`
- **Database:** Prisma v5 + PostgreSQL schema at `prisma/schema.prisma`
- **State:** Zustand stores at `src/lib/stores/`

## Code Style
- No inline imports — keep at top of file
- Use `cn()` from `@/lib/utils` for conditional classes
- Use design tokens (navy, gold, surface, emerald, red, amber)
- All components must support dark mode (`dark:` variants)
- Use Framer Motion for UI transitions, GSAP for scroll storytelling
- API responses use `success()`, `error()`, `paginated()` from `@/lib/api-response`

## Testing
- Tests in `__tests__/` directory
- Use Vitest + React Testing Library
- API tests use direct route handler invocation

## Workflow Preferences
- **Sequential execution only** — no parallel subagents during implementation
- **Document + test + verify** before proceeding to next sub-project
- **Run `npx gitnexus analyze`** at each sub-project checkpoint
- **Commit frequently** with descriptive messages (feat/fix/docs/test prefixes)
- **Build must pass** (`next build` + `tsc --noEmit` + `vitest run`) before any push

## Design & UI Principles (User-Enforced)
- **No decorative 3D** — every visual element must represent something about the product (money flow, fund structure, dashboard preview). Never use generic spheres/shapes as filler.
- **Asymmetric layouts** — don't center everything. Use grid cols (7/5, 8/4), left-align hero content, stagger elements.
- **Living backgrounds** — use animated mesh gradients, floating geometry, breathing glows. Never flat static gradients on dark backgrounds.
- **Color variation across sections** — each section needs its own background mood (navy-950, #070E18, #0D0A0A, navy-900). Never monotone.
- **Contrast minimum** — text-navy-500 on bg-navy-950 is UNREADABLE. Use navy-200/white for body, gold-400/emerald-400 for emphasis. Every text must pass visual inspection.
- **Every button must link somewhere** — no orphan buttons. If a destination doesn't exist yet, link to /auth/register or the closest relevant page.
- **Visual consistency pre/post login** — dashboard uses same dark premium aesthetic as landing page (always dark, gold accents, glass effects).
- **Study reference sites deeply** — when given URLs, extract specific techniques (font sizes, color values, layout mechanics, animation types) and implement them. Don't just note them.
- **Sound + haptics** — buttons should have satisfying click sounds. Interactions should feel tactile.

<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **NWTR-** (3144 symbols, 4270 relationships, 72 execution flows). Use the GitNexus MCP tools to understand code, assess impact, and navigate safely.

> If any GitNexus tool warns the index is stale, run `npx gitnexus analyze` in terminal first.

## Always Do

- **MUST run impact analysis before editing any symbol.** Before modifying a function, class, or method, run `gitnexus_impact({target: "symbolName", direction: "upstream"})` and report the blast radius (direct callers, affected processes, risk level) to the user.
- **MUST run `gitnexus_detect_changes()` before committing** to verify your changes only affect expected symbols and execution flows.
- **MUST warn the user** if impact analysis returns HIGH or CRITICAL risk before proceeding with edits.
- When exploring unfamiliar code, use `gitnexus_query({query: "concept"})` to find execution flows instead of grepping. It returns process-grouped results ranked by relevance.
- When you need full context on a specific symbol — callers, callees, which execution flows it participates in — use `gitnexus_context({name: "symbolName"})`.

## Never Do

- NEVER edit a function, class, or method without first running `gitnexus_impact` on it.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis.
- NEVER rename symbols with find-and-replace — use `gitnexus_rename` which understands the call graph.
- NEVER commit changes without running `gitnexus_detect_changes()` to check affected scope.

## Resources

| Resource | Use for |
|----------|---------|
| `gitnexus://repo/NWTR-/context` | Codebase overview, check index freshness |
| `gitnexus://repo/NWTR-/clusters` | All functional areas |
| `gitnexus://repo/NWTR-/processes` | All execution flows |
| `gitnexus://repo/NWTR-/process/{name}` | Step-by-step execution trace |

## CLI

| Task | Read this skill file |
|------|---------------------|
| Understand architecture / "How does X work?" | `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md` |
| Blast radius / "What breaks if I change X?" | `.claude/skills/gitnexus/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs / "Why is X failing?" | `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md` |
| Rename / extract / split / refactor | `.claude/skills/gitnexus/gitnexus-refactoring/SKILL.md` |
| Tools, resources, schema reference | `.claude/skills/gitnexus/gitnexus-guide/SKILL.md` |
| Index, status, clean, wiki CLI commands | `.claude/skills/gitnexus/gitnexus-cli/SKILL.md` |

<!-- gitnexus:end -->
