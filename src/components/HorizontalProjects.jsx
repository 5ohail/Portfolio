import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalProjects({ projects, onOpen }) {
  const sectionRef = useRef(null);
  const railRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const rail = railRef.current;
      const totalShift = rail.scrollWidth - window.innerWidth;

      gsap.to(rail, {
        x: () => -Math.max(totalShift, 0),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${Math.max(totalShift, 600)}`
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative h-screen overflow-hidden border-y border-white/10 bg-ink/30 py-16">
      <div className="mb-10 px-4">
        <div className="mx-auto w-[min(1100px,92vw)]">
          <p className="text-xs uppercase tracking-[0.28em] text-accent/80">Case studies</p>
          <h2 className="mt-3 text-4xl font-semibold sm:text-6xl">Horizontal storytelling showcase</h2>
        </div>
      </div>
      <div ref={railRef} className="flex w-max gap-6 px-4">
        {projects.map((project) => (
          <motion.article
            key={project.id}
            whileHover={{ y: -6 }}
            className="group relative h-[62vh] w-[80vw] max-w-[720px] overflow-hidden rounded-2xl border border-white/20"
          >
            <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:saturate-150" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-accent/90">{project.stack}</p>
              <h3 className="mt-3 text-3xl font-semibold">{project.title}</h3>
              <p className="mt-2 max-w-xl text-sm text-white/75">{project.summary}</p>
              <button
                onClick={() => onOpen(project)}
                className="mt-5 rounded-full border border-white/35 bg-white/10 px-5 py-2 text-sm transition hover:border-accent hover:text-accent"
                type="button"
              >
                Open Case Study
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
