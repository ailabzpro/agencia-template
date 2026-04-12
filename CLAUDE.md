# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Vite)
npm run build        # Production build
npm run lint         # ESLint
npm run preview      # Preview production build
npm run test         # Run tests once (Vitest)
npm run test:watch   # Run tests in watch mode
```

The project also has `bun.lock` — Bun can be used interchangeably with npm.

## Architecture

Single-page marketing/landing site for ai.labz.pro, a Portuguese-language AI agency. Built with **React 18 + TypeScript + Vite**, styled with **Tailwind CSS v3** and **shadcn/ui** components.

### Page structure

`src/pages/Index.tsx` is the only real page. It composes all landing page sections in order:

```
Navbar → Hero → Problem → Services → UseCases → TechMarquee →
Differentials → Method → FAQ → CTA → Footer
```

Each section is a self-contained component in `src/components/`. The `src/components/ui/` directory contains shadcn/ui primitives — these are rarely modified directly.

### Styling conventions

- **Dark theme only** — CSS variables in `src/index.css` define a dark palette (near-black background `0 0% 4%`).
- **Primary color** is `#706FD3` (HSL `241 52% 63%`) used throughout for accent/ring/primary.
- **`.text-gradient-gold`** — utility class for the purple gradient text used in headings (despite the name, it's actually the primary purple).
- **`.section-label`** — utility for small uppercase tracking labels above section headings.
- Font: Inter (Google Fonts, loaded in `src/index.css`).

### Path aliases

`@/` maps to `src/` (configured in Vite and TypeScript). Use `@/components`, `@/lib`, `@/hooks` etc.

### Routing

`react-router-dom` v6 with two routes: `/` → `Index`, `*` → `NotFound`. Add new routes in `src/App.tsx` above the catch-all.
