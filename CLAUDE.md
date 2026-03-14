# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm i          # Install dependencies
npm run dev    # Start development server (Vite)
npm run build  # Production build
```

No test runner is configured.

## Architecture

This is a single-page portfolio site generated from Figma Make, built with React 18, TypeScript, React Router 7, Tailwind CSS v4, and Framer Motion (`motion/react`).

**Routing** — `src/app/routes.ts` defines a single layout route wrapping four pages: `HomePage`, `ProjectsPage`, `AboutPage`, `ContactPage`. All pages live in `src/app/pages/`.

**Layout** — `src/app/components/Layout.tsx` wraps every page with `Navbar` + `Footer`. The main content area has `pt-16` to clear the fixed navbar.

**Data** — All portfolio content (projects, skills, experience, testimonials) lives in `src/app/components/data.ts`. Edit this file to update content.

**UI components** — `src/app/components/ui/` contains a full shadcn/ui component library (Radix UI primitives + Tailwind). `src/app/components/figma/ImageWithFallback.tsx` is a Figma-generated image wrapper used throughout.

**Styling** — Tailwind v4 via `@tailwindcss/vite`. Theme tokens are defined as CSS variables in `src/styles/theme.css` and mapped into Tailwind via `@theme inline`. Primary color is `#1a7a4e`, accent is `#c0392b`. The `@` alias resolves to `src/`.

**Assets** — Static images live in `src/assets/`. Import them with a relative path (e.g. `../../assets/filename.png`). The `figma:asset/` import scheme used by Figma's code generator is not valid in Vite — always convert these to relative paths.
