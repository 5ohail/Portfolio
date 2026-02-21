import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = ['MongoDB', 'Express', 'React', 'Node', 'GSAP', 'Framer Motion', 'Three.js', 'AI Tooling'];
const timeline = [
  { year: '2023', label: 'Started building web fundamentals and frontend systems.' },
  { year: '2024', label: 'Shifted into MERN stack, interaction design, and modern workflows.' },
  { year: '2025', label: 'Focused on AI-assisted product development and cinematic interfaces.' }
];

export default function AboutStory() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal-line', {
        yPercent: 100,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 70%'
        }
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="mx-auto grid w-[min(1100px,92vw)] gap-14 py-28 lg:grid-cols-2">
      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-accent/80">About</p>
        <div className="space-y-2 text-4xl font-semibold leading-tight sm:text-5xl">
          <p className="overflow-hidden"><span className="reveal-line inline-block">I build immersive digital products</span></p>
          <p className="overflow-hidden"><span className="reveal-line inline-block">that blend engineering precision</span></p>
          <p className="overflow-hidden"><span className="reveal-line inline-block">with visual rhythm.</span></p>
        </div>
      </div>

      <div className="space-y-10">
        <div>
          <h3 className="mb-4 text-lg font-medium text-white/90">Skills Grid</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill} className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-medium text-white/90">Experience Timeline</h3>
          <ol className="space-y-4 border-l border-white/20 pl-4">
            {timeline.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[21px] top-1 h-2 w-2 rounded-full bg-accent" />
                <p className="text-sm uppercase tracking-[0.2em] text-accent/80">{item.year}</p>
                <p className="text-white/75">{item.label}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
