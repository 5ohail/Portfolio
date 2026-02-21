 codex/add-animations-to-the-ui-038b7n
# Sohail Ansari — Immersive Portfolio (React + Vite)

An award-inspired personal portfolio built with cinematic scrolling, horizontal storytelling, custom interactions, and premium motion rhythm.

## Stack

- React + Vite
- Tailwind CSS
- GSAP + ScrollTrigger
- Framer Motion
- Lenis smooth scrolling
- Three.js (WebGL background)

## Highlights

- Fullscreen cinematic hero with bold typography and animated entrance.
- Grain/texture overlay and blend-mode headline accents.
- Smooth Lenis scrolling + GSAP ScrollTrigger choreography.
- Horizontal scroll project showcase with immersive cards.
- Interactive case-study modal transitions.
- Animated about storytelling, skills grid, and experience timeline.
- Custom cursor with subtle trail effect.
- Premium, minimal contact section.
- Responsive dark UI and SEO metadata.

## Project structure

```txt
src/
├── components/
│   ├── AboutStory.jsx
│   ├── CaseStudyModal.jsx
│   ├── Contact.jsx
│   ├── CustomCursor.jsx
│   ├── Hero.jsx
│   ├── HorizontalProjects.jsx
│   ├── MorphDivider.jsx
│   └── WebGLBackground.jsx
├── data/
│   └── projects.js
├── hooks/
│   └── useLenisScroll.js
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

## Setup
=======
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
main

```bash
npm install
npm run dev
```

 codex/add-animations-to-the-ui-038b7n
## Build
=======
Build for production:
 main

```bash
npm run build
npm run preview
```

codex/add-animations-to-the-ui-038b7n
## Implementation notes

- GSAP `ScrollTrigger` powers horizontal pinning and text reveal timing.
- Framer Motion handles section entrances and modal/page transition feel.
- Three.js renders a lightweight wireframe object as an ambient WebGL layer.
- Cursor trail and texture effects are intentionally subtle to keep readability and performance balanced.
=======
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
main
