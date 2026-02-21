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

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Implementation notes

- GSAP `ScrollTrigger` powers horizontal pinning and text reveal timing.
- Framer Motion handles section entrances and modal/page transition feel.
- Three.js renders a lightweight wireframe object as an ambient WebGL layer.
- Cursor trail and texture effects are intentionally subtle to keep readability and performance balanced.
