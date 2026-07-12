import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1200; // 1.2s total
    const intervalTime = 16;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.floor(next);
      });
    }, intervalTime);

    const completionTimer = setTimeout(() => {
      onComplete();
    }, duration + 200);

    return () => {
      clearInterval(timer);
      clearTimeout(completionTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="minimal-preloader"
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
    >
      <div className="minimal-preloader__top">
        <span>SOHAIL ANSARI</span>
        <span>INDEX // 2026</span>
      </div>

      <div className="minimal-preloader__title">
        Software Engineer.
      </div>

      <div className="minimal-preloader__bottom">
        <div className="minimal-preloader__counter">
          {Math.floor(count)}%
        </div>
        <div style={{ textTransform: "uppercase", fontSize: "0.72rem", letterSpacing: "0.15em", color: "var(--text-muted)" }}>
          Loading System
        </div>
      </div>
    </motion.div>
  );
}
