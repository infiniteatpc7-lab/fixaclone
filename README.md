# Fixa Planner - Next.js Clone

A pixel-perfect, high-performance clone of [Fixa Planner](https://fixaplan.com), refactored into modular, native React / Next.js (App Router) JSX components with zero design regressions.

## Features

- **100% Native JSX**: Every section (`Navbar`, `Hero`, `Features`, `Difference`, `FixaAi`, `BrainNoise`, `Faq`, `Footer`, `Preloader`, `WaitlistModal`) is written in native React JSX.
- **Easily Editable Content**: Every component exposes a structured `const CONTENT = { ... }` object at the top of the file for effortless copy and asset customization.
- **Interactive Sticky Scroll**: Left column in the Features section sticks smoothly at `top: 100px` for 1800px+ of scroll, dynamically highlighting category pills.
- **Interactive Components**:
  - FAQ accordion open/close animations.
  - Mobile burger navigation drawer.
  - Fixa AI multi-feature tab switcher.
  - Interactive "Join the waitlist" modal dialog with backdrop blur and email submission.
- **Optimized Video & Assets**: 1440p Kinescope background video embed with zero layout shifts, local fonts, and self-hosted SVG/WebP assets.
- **Clean Console**: 0 React hydration mismatches, 0 asset 404s, and clean client-side mounting.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Animation**: Framer Motion
- **Styling**: Vanilla CSS (`globals.css`) preserving exact Framer styling rules and tokens

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Build for production

```bash
npm run build
npm run start
```
