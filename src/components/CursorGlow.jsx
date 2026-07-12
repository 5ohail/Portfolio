import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const glow = glowRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let glowX = 0;
    let glowY = 0;

    const onMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth interpolation (lerp) loop for organic feel
    let frameId;
    const updatePosition = () => {
      // Lerp cursor
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      // Lerp ambient glow (slower for lagging fluid feel)
      glowX += (mouseX - glowX) * 0.05;
      glowY += (mouseY - glowY) * 0.05;

      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
        cursor.style.opacity = isVisible ? 1 : 0;
      }
      if (glow) {
        glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
        glow.style.opacity = isVisible ? 1 : 0;
      }

      frameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    frameId = requestAnimationFrame(updatePosition);

    // Setup event listeners for elements that expand the cursor
    const addHoverEvents = () => {
      const hoverables = document.querySelectorAll('a, button, input, textarea, [role="button"], .project-card-custom, .skill-card-tilt, .timeline-card');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsActive(true));
        el.addEventListener('mouseleave', () => setIsActive(false));
      });
    };

    // Re-check elements periodically as items load/render
    const hoverInterval = setInterval(addHoverEvents, 1000);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(frameId);
      clearInterval(hoverInterval);
    };
  }, [isVisible]);

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isActive ? 'custom-cursor--active' : ''}`}
        style={{ opacity: 0 }}
      />
      <div
        ref={glowRef}
        className="custom-cursor--glow"
        style={{ opacity: 0 }}
      />
    </>
  );
}
