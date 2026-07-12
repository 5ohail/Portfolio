import { useEffect, useRef } from 'react';

export default function Fireflies() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fireflies = [];
    const count = 36; // Subtle background density (even split left/right)

    // Side margins constraint: 18% of viewport width on each side
    const initSideWidth = width * 0.18;

    // Initialize fireflies split evenly between left and right side zones
    for (let i = 0; i < count; i++) {
      const side = i % 2 === 0 ? 'left' : 'right';
      const minX = side === 'left' ? 0 : width - initSideWidth;
      const maxX = side === 'left' ? initSideWidth : width;

      fireflies.push({
        side,
        x: minX + Math.random() * (maxX - minX),
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.6,
        // Wind speed: constant horizontal drift to the right, slight vertical lift
        vx: Math.random() * 0.35 + 0.2, 
        vy: (Math.random() - 0.6) * 0.12,
        alpha: Math.random() * 0.5 + 0.1,
        // Slow fade pulse rate
        va: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1)
      });
    }

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    // Animation frame update loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const currentSideWidth = width * 0.18;

      fireflies.forEach((f) => {
        // Horizontal drift (wind) & vertical shift
        f.x += f.vx;
        f.y += f.vy;

        // Glow alpha pulse
        f.alpha += f.va;
        if (f.alpha > 0.65) {
          f.alpha = 0.65;
          f.va = -f.va;
        } else if (f.alpha < 0.05) {
          f.alpha = 0.05;
          f.va = -f.va;
        }

        // Boundary wrapping and side zone lock constraints
        let fadeFactor = 1;
        if (f.side === 'left') {
          // Wrap back to left edge if it crosses the left zone boundary
          if (f.x > currentSideWidth) {
            f.x = 0;
            f.y = Math.random() * height;
          }
          // Fade out smoothly in the last 40px of left zone
          fadeFactor = Math.max(0, Math.min(1, (currentSideWidth - f.x) / 40));
        } else {
          const startX = width - currentSideWidth;
          // Wrap back to right starting boundary if it crosses screen width edge
          if (f.x > width) {
            f.x = startX;
            f.y = Math.random() * height;
          }
          // Fade in smoothly in the first 40px of right zone
          fadeFactor = Math.max(0, Math.min(1, (f.x - startX) / 40));
        }

        if (f.y < 0) f.y = height;
        if (f.y > height) f.y = 0;

        // Render firefly with radial glow gradient modulated by fadeFactor
        const currentAlpha = f.alpha * fadeFactor;
        if (currentAlpha > 0.01) {
          ctx.beginPath();
          const glowRadius = f.radius * 6;
          const gradient = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, glowRadius);
          // Pale warm yellow-green firefly glow
          gradient.addColorStop(0, `rgba(235, 245, 180, ${currentAlpha})`);
          gradient.addColorStop(0.2, `rgba(235, 245, 180, ${currentAlpha * 0.4})`);
          gradient.addColorStop(1, 'rgba(235, 245, 180, 0)');
          
          ctx.fillStyle = gradient;
          ctx.arc(f.x, f.y, glowRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0, // Render behind text & layout elements
        opacity: 0.8
      }}
    />
  );
}
