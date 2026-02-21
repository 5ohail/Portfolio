# Aether Studio — Creative Agency Portfolio (React + Vite)

A complete, modern portfolio website for a high-end creative design agency. This project focuses on immersive visuals, interactive work showcase patterns, performance-minded implementation, and accessibility-first structure.

## Tech Stack

- **React + Vite** for fast development and optimized builds.
- **Framer Motion** for tasteful UI animation, transitions, and modal motion.
- **Modern CSS** with responsive layouts, fluid typography, and micro-interactions.

## Features

- Full-screen, high-impact **hero section** with animated entrance.
- **Interactive project gallery** with category filters.
- **Case study modal overlay** for deep project storytelling and visuals.
- Team section with profile cards.
- Auto-rotating **testimonials slider** with manual controls.
- Accessible **contact form**.
- SEO metadata and social sharing tags in `index.html`.
- Responsive behavior across desktop, tablet, and mobile.

## Project Structure

```txt
.
├── public/
│   ├── favicon.svg
│   └── og-cover.svg
├── src/
│   ├── components/
│   │   ├── CaseStudyModal.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Hero.jsx
│   │   ├── ProjectShowcase.jsx
│   │   ├── SiteFooter.jsx
│   │   ├── TeamSection.jsx
│   │   └── Testimonials.jsx
│   ├── data/
│   │   └── projects.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Setup & Run

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Design Decisions

1. **Visual hierarchy**: Large typography and constrained content width improve readability while preserving a premium visual tone.
2. **Motion system**: Framer Motion is used for reveal transitions and modal choreography to keep interactions smooth without over-animating.
3. **Modular architecture**: Components are separated by section and data is isolated in `src/data/projects.js` for easy extension.
4. **Accessibility first**:
   - Skip link for keyboard users.
   - Landmark-based layout (`main`, `section`, `footer`).
   - Semantic controls (`aria-pressed`, `aria-label`, escape-close modal behavior).
5. **Performance**:
   - Lazy-loaded images where appropriate.
   - No heavy UI framework dependency.
   - Vite production bundling for optimized assets.

## Notes

- Replace Unsplash URLs in `src/data/projects.js` with final brand-approved assets before launch.
- Contact form currently demonstrates frontend UX; connect to your backend/email service in production.
