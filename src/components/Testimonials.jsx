import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'Aether translated our strategy into a category-defining digital product that our customers instantly understood and loved.',
    name: 'Emily Hart',
    company: 'CEO, Vanta Health'
  },
  {
    quote:
      'The team balanced bold creative direction with rigorous UX thinking. We saw measurable results in under a quarter.',
    name: 'Noah Rossi',
    company: 'CMO, Peak Resorts'
  },
  {
    quote:
      'Every interaction feels intentional. Their process gave our internal teams confidence and speed.',
    name: 'Grace Kim',
    company: 'VP Brand, Luma Motion'
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section" aria-label="Testimonials">
      <div className="section__heading">
        <p className="eyebrow">Testimonials</p>
        <h2>Trusted by ambitious teams globally</h2>
      </div>
      <div className="testimonial-shell">
        <AnimatePresence mode="wait">
          <motion.figure
            key={testimonials[active].name}
            className="testimonial"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <blockquote>“{testimonials[active].quote}”</blockquote>
            <figcaption>
              {testimonials[active].name} · <span>{testimonials[active].company}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
        <div className="dots" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              role="tab"
              aria-selected={active === index}
              className={`dot ${active === index ? 'dot--active' : ''}`}
              onClick={() => setActive(index)}
              type="button"
            >
              <span className="sr-only">Show testimonial {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
