# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Architecture

This is a Next.js 14 portfolio website using the App Router with TypeScript and Tailwind CSS.

### Key Structure

- **`src/app/`** - App Router pages. Each route is a folder with `page.tsx`
- **`src/components/`** - Reusable React components (Layout, Header, Footer, Card, Container, etc.)
- **`src/lib/`** - Utility functions (`articles.ts` for MDX article loading, `formatDate.ts`)
- **`src/images/`** - Static images and logos
- **`src/styles/`** - Global CSS (Tailwind and Prism syntax highlighting)

### Content System

Articles use MDX with file-based routing at `src/app/articles/[slug]/page.mdx`. The `src/lib/articles.ts` module discovers and imports articles using fast-glob.

### API Routes

- **`/api/pinnedRepository`** - Fetches pinned GitHub repos via GitHub GraphQL API (requires `GITHUB_TOKEN` env var)

### Client-Side Data Fetching

The `GithubRepository` component uses TanStack Query to fetch pinned repos. It wraps its own `QueryClientProvider` rather than using a global one.

### Theming

Dark mode uses `next-themes` with selector-based darkMode in Tailwind. The `Providers` component in `src/app/providers.tsx` sets up the ThemeProvider.

### Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json)

## Workflow Orchestration

### 1. Plan Mode Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately - don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy
- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop
- After ANY correction from the user: update tasks/lessons md with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project

### 4. Verification Before Done
- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness

### 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes - don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing
- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests - then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

## Task Management
1. **Plan First**: Write plan to tasks/todo.d with checkable items
2. **Verify Plan**: Check in before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add review section to
'tasks/todo.md

6. **Capture Lessons**: Update tasks/lessons.md after corrections
## Core Principles
- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.

## Common Workflows

### Adding a New Feature

1. Check if DTOs need updates in `packages/dto/`
2. Update Prisma schema if database changes are needed
3. Run `pnpm db:migrate:dev -- --name <migration-name>`
4. Run `pnpm generate` to regenerate Prisma client
5. Implement feature in relevant app(s)
6. Test across affected apps

### Database Schema Changes

1. Modify `packages/database/prisma/schema.prisma`
2. Run `pnpm db:migrate:dev -- --name <description>`
3. Commit both schema and migration files
4. Deployment uses `pnpm db:migrate:deploy`

### Working with Shared Packages

- Changes to `packages/database/` or `packages/dto/` require rebuild
- Turborepo handles incremental builds automatically
- Run `pnpm generate` after database schema changes

## Session Tracking

This project uses session-based planning and tracking for complex features and epics.

### Session Structure

- **Location:** `.claude/sessions/`
- **Format:** One markdown file per feature/epic
- **Naming:** `phaseN-feature-name.md` (e.g., `phase1-module-lifecycle-updates.md`)

### Session File Contents

Each session file includes: Overview, Requirements, Files to Update, Implementation Plan, Key Improvements, Testing Checklist, Status, Out of Scope.

### Active Sessions

- `.claude/sessions/phase2-refund-system.md` - Refund system (Planning)
- `.claude/sessions/phase3-french-university-sponsorship.md` - University sponsorship (In Progress)

Archived (completed): See `.claude/sessions/archive/`