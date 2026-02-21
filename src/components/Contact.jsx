import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="mx-auto mb-24 w-[min(900px,92vw)] rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur">
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-xs uppercase tracking-[0.28em] text-accent/80">
        Contact
      </motion.p>
      <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Let’s create something unforgettable.</h2>
      <p className="mt-3 text-white/70">Available for freelance, product collaborations, and creative development roles.</p>

      <form className="mt-8 grid gap-4" aria-label="Contact form">
        <input className="rounded-xl border border-white/15 bg-abyss/80 px-4 py-3 outline-none transition focus:border-accent" placeholder="Your Name" required />
        <input className="rounded-xl border border-white/15 bg-abyss/80 px-4 py-3 outline-none transition focus:border-accent" type="email" placeholder="Email Address" required />
        <textarea className="min-h-32 rounded-xl border border-white/15 bg-abyss/80 px-4 py-3 outline-none transition focus:border-accent" placeholder="Project brief" required />
        <button type="submit" className="w-fit rounded-full border border-accent/60 bg-accent/15 px-6 py-3 text-sm uppercase tracking-[0.2em] text-accent transition hover:bg-accent hover:text-abyss">
          Send inquiry
        </button>
      </form>
    </section>
  );
}
