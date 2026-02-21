import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!dotRef.current || !trailRef.current) return;
      dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      trailRef.current.animate(
        [{ transform: trailRef.current.style.transform || 'translate3d(0,0,0)' }, { transform: `translate3d(${e.clientX}px, ${e.clientY}px, 0)` }],
        { duration: 280, fill: 'forwards', easing: 'ease-out' }
      );
    };

    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <>
      <div ref={trailRef} className="pointer-events-none fixed left-0 top-0 z-[120] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40 md:block" />
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[121] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-glow md:block" />
    </>
  );
}
