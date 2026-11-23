# Fixa Planner — Exact Cloned Website

This is the exact, pixel-perfect copy of [https://fixaplan.com/](https://fixaplan.com/) with 100% of the original structure, styles, fonts, and Framer animations preserved.

---

## What Is Included

- **Exact Original DOM & Styles**: All original HTML markup, inline styles, CSS variables, and layout systems.
- **Full Original Animations**:
  - Buttery smooth scrolling powered by **Lenis**.
  - Framer Motion scroll-triggered reveals and transitions.
  - Interactive Anxiety and Productivity count-up animations.
  - Interactive FAQ expandable/collapsible accordions.
  - Sticky floating navigation bar with backdrop blur.
- **Complete Local Assets**:
  - Fonts: Instrument Serif italic and Switzer geometric typography (`fonts.gstatic.com`, `framerusercontent.com/assets`).
  - Graphics & Media: All SVGs, icons, high-res WebP card graphics, and Kinescope 1440p hero video embed.
  - Framer JavaScript bundles: Downloaded locally to `framerusercontent.com/sites/` so the site runs completely self-contained.

---

## How to Run Locally

### Option 1: Using Node.js (Recommended)

1. Start the local server:
   ```bash
   npm start
   ```
2. Open your browser at:
   ```
   http://localhost:3000/
   ```

### Option 2: Using Python

```bash
python -m http.server 3000
```
Then visit `http://localhost:3000/`.

---

## Directory Structure

```
├── index.html               # Main entry point (exact Fixa Planner website)
├── server.js                # Zero-dependency local Node.js server with proper MIME types
├── package.json             # NPM package scripts (npm start, npm run dev)
├── framerusercontent.com/   # Images, icons, WebP graphics, and Framer JS runtime modules
├── fonts.gstatic.com/       # Instrument Serif font files
└── unpkg.com/               # Lenis smooth scroll CSS
```
