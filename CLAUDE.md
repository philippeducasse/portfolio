# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start Commands

- **Dev server**: `bun run dev` — starts Astro dev server at http://localhost:3000
- **Build**: `bun run build` — creates static production build in `dist/`
- **Preview**: `bun run preview` — preview production build locally
- **Lint styles**: `npx stylelint "src/**/*.{vue,astro,css}"` — check CSS formatting
- **Direct Astro CLI**: `bun run astro [command]` — e.g., `bun run astro add` to add integrations

Package manager is **Bun** (not npm/yarn). Use `bun` for all package operations.

## Project Architecture

**Tech Stack**: Astro 6.1.2 + Vue 3 (via @astrojs/vue)

**File Structure**:
```
src/
  ├─ pages/           # Astro pages (routing)
  ├─ components/      # Vue components (.vue files)
  ├─ layouts/         # Astro layouts (shared structure)
  ├─ styles/          # Global and component CSS
  ├─ utils/           # Utility functions (useAnimations.ts, etc.)
  └─ data/            # Data files (projects.ts, etc.)
```

**Key Architectural Decisions**:

1. **Hybrid Rendering**: Pages are `.astro` (static HTML) with Vue components hydrated on the client using `client:load` directives. This combines Astro's static generation with Vue's interactivity.

2. **CSS Organization**: After recent refactoring, CSS is scoped to individual Vue components rather than using a CSS framework. Bootstrap JS is still loaded for functionality (see Layout.astro line 30-32) but Bootstrap CSS has been removed. Ensure component styles are self-contained.

3. **Animation System**: Custom intersection observer pattern (see Layout.astro lines 33-63) handles:
   - Slide-in animations on page load for elements with `.slide-in` class
   - Visibility animations for `.hidden` elements that appear when scrolled into view
   - Grid item animations for `.grid__item.hidden` elements
   When adding new sections, follow this pattern: use `.hidden` class initially, add to observer, remove class on intersection to trigger CSS animations.

4. **Component Hydration**: All Vue components use `client:load` (see index.astro). This means they hydrate immediately, which is appropriate for an interactive portfolio but avoid adding this unnecessarily to static content.

## Code Style & Standards

**CSS**: Stylelint is configured with strict rules (stylelint.config.js). Key requirements:
- 2-space indentation
- Single declarations per rule, multi-line preferred
- Always trailing semicolons
- Lowercase colors and units
- Selectors on new lines in lists
- Always-multi-line media queries

**TypeScript**: tsconfig.json is minimal; components use TypeScript where present (e.g., useAnimations.ts).

## Recent Changes Context

The codebase recently (commit 6ce2055) completed a major refactor moving from Bootstrap framework to component-scoped styling. Deleted files: `case-study.html`, `chattyApp.html`, `index.html` (migrated to Astro). When modifying components, ensure styles are completely self-contained and don't rely on Bootstrap utility classes (use scoped `<style>` blocks in `.vue` files).

## Important Files to Know

- `src/layouts/Layout.astro` — Main wrapper; contains animation initialization script and global style import
- `src/pages/index.astro` — Single-page entry point; imports all Vue sections
- `astro.config.mjs` — Astro config with strict mode enabled; Vue integration configured
- `stylelint.config.js` — Strict CSS linting rules; enforced on all style changes
