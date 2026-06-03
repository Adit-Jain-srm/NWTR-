# NWTR — Claude Code Instructions

## Quick Reference
- Build: `npm run build`
- Test: `npm run test`
- Lint: `npm run lint`
- Types: `npx tsc --noEmit`

## Project Structure
```
src/
├── app/(marketing)/     # Public landing pages
├── app/api/v1/          # REST API routes
├── components/ui/       # 29 UI primitives (barrel: ui/index.ts)
├── components/motion/   # 6 animation wrappers
├── components/three/    # 3D wrappers (Spline, R3F)
├── components/sections/ # Landing page sections
├── components/layout/   # Navbar, Footer, Sidebar
├── components/providers/# ThemeProvider, ToastProvider
├── lib/                 # Utils, constants, auth, prisma, stores
prisma/                  # Schema + seed
docs/                    # 49 specification docs
__tests__/               # Test suite
```

## Key Files
- `src/lib/constants.ts` — Business rules (DEPOSIT rates, KYC tiers, nav links)
- `src/lib/motion.ts` — Animation constants (easing, duration, variants)
- `src/lib/auth.ts` — NextAuth config
- `src/lib/permissions.ts` — RBAC (requireAuth, requireRole)
- `src/lib/api-response.ts` — Standard API envelope

## Rules
1. Never commit `.env` or credentials
2. Always run `npx next build` before pushing
3. Use sequential execution (no parallel subagents)
4. Follow existing patterns in component library
5. All components need dark mode support
6. API routes must use Zod validation + RBAC

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
