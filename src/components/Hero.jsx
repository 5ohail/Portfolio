import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-4">
      <div className="mx-auto grid w-[min(1100px,92vw)] gap-8 lg:grid-cols-[1.3fr,0.7fr] lg:items-end">
        <div>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-6 text-xs uppercase tracking-[0.3em] text-accent/80">
            Sohail Ansari · Full Stack Developer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl"
          >
            MERN.
            <span className="mix-blend-screen text-accent"> AI.</span>
            <br />
            Creative Development.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 max-w-2xl text-base text-white/70 sm:text-lg"
          >
            I design and build cinematic digital products with expressive motion, robust engineering, and narrative-driven UX.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
          <p className="text-sm text-white/60">Currently building</p>
          <p className="mt-2 text-xl font-semibold">Immersive web products for startups & agencies</p>
          <div className="mt-6 h-1 w-full overflow-hidden rounded bg-white/10">
            <div className="h-full w-2/3 animate-pulse rounded bg-gradient-to-r from-accent to-violet" />
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:20px_20px]" />
      <a href="#projects" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/60 transition hover:text-accent">
        Scroll ↓
      </a>
    </section>
  );
}
