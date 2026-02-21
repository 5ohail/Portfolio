import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay } })
};

export default function Hero() {
  return (
    <header className="hero section">
      <div className="hero__glow" aria-hidden="true" />
      <motion.p
        className="eyebrow"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.1}
      >
        Aether Studio / Creative Agency
      </motion.p>
      <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={0.2}>
        We craft digital experiences that move people and brands forward.
      </motion.h1>
      <motion.p className="hero__copy" variants={fadeUp} initial="hidden" animate="show" custom={0.3}>
        Strategy, identity, product design, and campaign systems built for the next era of ambitious companies.
      </motion.p>
      <motion.div className="hero__actions" variants={fadeUp} initial="hidden" animate="show" custom={0.4}>
        <a className="button button--primary" href="#projects">
          View Work
        </a>
        <a className="button button--ghost" href="#contact">
          Start a Project
        </a>
      </motion.div>
    </header>
  );
}
