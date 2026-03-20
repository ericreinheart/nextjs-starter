# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (all apps/packages)
pnpm dev

# Build
pnpm build

# Lint & format
pnpm lint
pnpm format               # prettier --write

# Type-check
pnpm type-check

# Single app/package
pnpm --filter website dev
pnpm --filter storyblok-website-intl dev
pnpm --filter @repo/ui build

# UI package CSS (must build for apps to pick up styles)
pnpm --filter @repo/ui build   # one-shot
pnpm --filter @repo/ui dev     # watch mode

# Storyblok type generation (runs automatically as predev/prebuild)
pnpm --filter storyblok-website-intl storyblok:generate:types
```

## Architecture

**Monorepo**: Turborepo + pnpm workspaces. Node >= 22, pnpm 10.28.2.

**Apps:**
- `apps/website` — Next.js 16 showcase app (no CMS)
- `apps/storyblok-website-intl` — Next.js 16 + Storyblok CMS + i18n (locales: `en`, `de`, default `de`). Middleware-based locale detection. Routes: `[lang]/[[...slug]]/page.tsx`.

**Packages:**
- `@repo/ui` — Shared React component library. Uses Ariakit for accessible primitives, CVA for variants, custom `cx()` utility for classnames. Exports components from `src/index.ts`, CSS from `dist/index.css`.
- `@repo/storyblok` — Storyblok SDK wrappers: `createStoryblok()`, `fetchStory()`, `fetchStories()`, story component renderer.
- `@repo/tailwind-config` — Shared Tailwind v4 theme presets.
- `@repo/eslint-config` — Shared ESLint configs based on `@vercel/style-guide`. Apps use `/next`, UI uses `/react.js`.
- `@repo/typescript-config` — Base tsconfig extended by all packages. Apps use `nextjs.json`, libraries use `react-library.json`.

**Package references**: `"@repo/ui": "workspace:*"` in app package.json files. Path alias `@/*` → `src/*` in apps.

## Git

Use conventional commits with scope: `type(scope): message`. Examples: `feat(ui): add Dialog component`, `fix(website): correct nav link href`, `chore(deps): bump next to 16.2`.

## Workflow

Before completing a feature, run `/security-review`, `/simplify`, `pnpm type-check`, `pnpm lint`, and `pnpm format`.

## Code Style

- Prettier: 2-space indent, single quotes, no semicolons, tailwind plugin with `cx` function.
- ESLint enforces boolean naming prefixes (`is`/`has`/`can`/`should`), padding between statements, import ordering, `type` over `interface`.
- Tailwind CSS v4 with `@tailwindcss/postcss`. Dark mode via `dark:` class prefix.
- Always use braces for `if` statements — no single-line `if`.
- Use `async`/`await` instead of `.then()`/`.catch()` chains.
- No test framework is configured.
