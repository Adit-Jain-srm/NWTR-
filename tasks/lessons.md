# NWTR — Engineering Lessons

## Session: 2026-06-03 (Sub-Project 1 Rebuild)

### Lesson 1: Avoid polymorphic `as` prop with strict TypeScript
**Mistake:** Used `React.ElementType` as prop type for components (Container, Heading, Text, GradientText, Section) which caused "children prop expects type 'never'" errors in Next.js strict mode.  
**Root Cause:** TypeScript can't infer children compatibility when the component type is dynamic.  
**Fix:** Use explicit HTML elements (switch/case or just `<div>`/`<p>`/`<section>`) instead of dynamic `as` prop.  
**Rule:** In strict TS projects, avoid `as?: React.ElementType` pattern. Use explicit element rendering.

### Lesson 2: Prisma v7 vs v5 — know which version you're using
**Mistake:** Initially installed Prisma v7 which has a completely different config approach (no `url` in schema, requires `prisma.config.ts`, different client constructor).  
**Fix:** Pin to Prisma v5 for stability with existing NextAuth adapter ecosystem.  
**Rule:** Always check major version compatibility before installing. Pin to stable versions for critical infra.

### Lesson 3: `npx create-next-app` rejects uppercase directory names
**Mistake:** Tried to scaffold in "NWTR-" directory which has uppercase.  
**Fix:** Create manually or use lowercase subdirectory.  
**Rule:** Use lowercase project names for npm/node tooling compatibility.

### Lesson 4: NAV_LINKS const needs consistent shape across all role configs
**Mistake:** Public nav links lacked `icon` field, but Sidebar component accessed `.icon` on all entries.  
**Fix:** Add empty `icon: ""` to public links to maintain consistent type shape.  
**Rule:** When using a shared type across configs, ensure ALL entries satisfy the FULL interface.

### Lesson 5: `pnpm` not available on all systems
**Mistake:** Assumed pnpm was installed on the system.  
**Fix:** Use npm as fallback. Check availability before using.  
**Rule:** Default to npm unless explicitly confirmed pnpm/yarn is available.

### Lesson 6: Vercel build needs `prisma generate` in build script
**Mistake:** Vercel caches node_modules, so Prisma Client isn't auto-generated.  
**Fix:** Add `"build": "prisma generate && next build"` and `"postinstall": "prisma generate"`.  
**Rule:** Always add prisma generate to build pipeline for serverless deployments.

### Lesson 7: Sequential execution > parallel for this project
**User Preference:** User explicitly requested sequential execution (no parallel subagents during implementation). One task at a time, one commit at a time.  
**Rule:** Follow user's execution preference. Sequential is more controlled and produces cleaner git history.

### Lesson 8: browser-use subagent type fails with invalid_argument
**Observation:** The `browser-use` subagent type consistently fails with `[invalid_argument]` errors.  
**Workaround:** Use MCP browser tools directly (`cursor-ide-browser` server) for screenshots and navigation.  
**Rule:** For browser automation, use MCP tools directly, not browser-use subagents.

---

## Design Decisions

### Why fresh rebuild instead of iterating on existing?
The existing implementation was 30-40% complete with many placeholder pages and inconsistent quality. Rebuilding from scratch with proper architecture ensures:
- Consistent component API across all UI
- Proper TypeScript strict mode throughout
- No legacy code debt from rapid prototyping phase
- Clean git history showing intentional architecture

### Why Prisma v5 over v7?
- v7 has breaking changes to client constructor and config
- NextAuth adapter only tested with v5
- v5 is battle-tested in production
- Upgrade path exists for later

### Why Radix UI for feedback components?
- Accessible by default (ARIA, keyboard navigation)
- Unstyled — we apply our own design tokens
- Composable with Framer Motion for animations
- Production-proven at scale
