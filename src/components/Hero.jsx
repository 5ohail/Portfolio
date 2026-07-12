import { useEffect } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const handleScrollClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Entrance animations after preloader clears
    const timer = setTimeout(() => {
      let ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        
        tl.fromTo('.hero-content .section-label-row', 
          { opacity: 0, y: 15 }, 
          { opacity: 1, y: 0, duration: 0.6 }
        )
        .fromTo('.hero-headline', 
          { opacity: 0, y: 25 }, 
          { opacity: 1, y: 0, duration: 0.8 }, 
          '-=0.45'
        )
        .fromTo('.hero-description', 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 0.8 }, 
          '-=0.6'
        )
        .fromTo('.hero-content button, .hero-content a', 
          { opacity: 0, y: 15 }, 
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, 
          '-=0.6'
        )
        .fromTo('.hero-portrait-frame', 
          { opacity: 0, scale: 0.98 }, 
          { opacity: 1, scale: 1, duration: 1 }, 
          '-=0.9'
        );
      });
      return () => ctx.revert();
    }, 1400); // delay to let preloader fade out!

    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    const rotateX = -(y - yc) / yc * 3.5;
    const rotateY = (x - xc) / xc * 3.5;
    
    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 800,
      ease: 'power2.out',
      duration: 0.35
    });
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      ease: 'power3.out',
      duration: 0.5
    });
  };

  return (
    <section id="hero" className="section" style={{ borderBottom: '1px solid var(--border)', padding: '6rem 0' }}>
      <div className="hero-grid">
        <div className="hero-content">
          <div className="section-label-row">
            <div className="section-label-line" />
            <span className="section-label">Software Engineer / UI Architect</span>
          </div>

          <h1 className="hero-headline">
            Building <span>high-fidelity</span> web systems.
          </h1>

          <p className="hero-description">
            Hi, I’m <strong>Sohail Ansari</strong>. I engineer responsive, scalable frontends, orchestrate cloud databases, and coordinate development club workshops as the **AWS Student Builder Club Tech Lead**.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleScrollClick('projects')}
              className="btn-minimal btn-minimal--primary"
              type="button"
            >
              Selected Work
            </button>
            <button
              onClick={() => handleScrollClick('contact')}
              className="btn-minimal btn-minimal--ghost"
              type="button"
            >
              Get In Touch
            </button>
            <a
              href="/resume.pdf"
              download="Sohail_Ansari_Resume.pdf"
              className="btn-minimal btn-minimal--ghost"
              style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-portrait-container">
          <div 
            className="hero-portrait-frame"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="hero-portrait-img"
              src="/Sohail.jpg"
              alt="Sohail Ansari Portrait"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
