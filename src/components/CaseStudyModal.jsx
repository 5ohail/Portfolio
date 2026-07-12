import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(document.activeElement);

  useEffect(() => {
    // Stop Lenis global smooth scroll
    window.lenis?.stop();

    // Prevent body scroll layout shifts & add lock class
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.classList.add('modal-open');

    // Handle ESC key press
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    // Trap focus inside modal: autofocus first element
    const focusable = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable && focusable.length > 0) {
      focusable[0].focus();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.paddingRight = '';
      document.body.classList.remove('modal-open');
      window.lenis?.start();
      previousActiveElement.current?.focus();
    };
  }, [onClose]);

  // Tab navigation focus trap
  useEffect(() => {
    const handleFocusTrap = (e) => {
      if (e.key !== 'Tab' || !modalRef.current) return;

      const focusable = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleFocusTrap);
    return () => window.removeEventListener('keydown', handleFocusTrap);
  }, []);

  return (
    <motion.div
      className="editorial-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <motion.div
        ref={modalRef}
        className="editorial-modal"
        data-lenis-prevent
        initial={{ y: 20, scale: 0.98, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 20, scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="editorial-modal__close"
          onClick={onClose}
          type="button"
          aria-label="Close case study"
        >
          <X size={24} />
        </button>

        {/* Modal Header */}
        <div className="editorial-modal__header">
          <div className="editorial-modal__meta">
            <span>{project.category}</span> · <span>{project.year}</span>
          </div>
          <h2 className="editorial-modal__title">{project.title}</h2>
        </div>

        {/* Modal Grid */}
        <div className="editorial-modal__grid">
          {/* Left Column: Challenge & Solution */}
          <div className="editorial-modal__col-left">
            <div className="editorial-modal__section">
              <h4>The Challenge</h4>
              <p>{project.challenge}</p>
            </div>

            <div className="editorial-modal__section">
              <h4>The Solution</h4>
              <p>{project.solution}</p>
            </div>

            <div className="editorial-modal__section">
              <h4>Impact & Outcomes</h4>
              <ul className="editorial-modal__bullet-list">
                {project.outcome.map((item, idx) => (
                  <li key={idx} className="editorial-modal__bullet">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Specifications & Links */}
          <div className="editorial-modal__col-right">
            <div className="editorial-modal__meta-box">
              <h5>Technologies</h5>
              <div className="work-item__tech-row" style={{ marginBottom: '2rem' }}>
                {project.architecture.map((tech) => (
                  <span key={tech} className="work-item__tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <h5>Key Deliverables</h5>
              <ul className="editorial-modal__bullet-list" style={{ marginBottom: '2rem' }}>
                {project.features.map((feat, idx) => (
                  <li key={idx} className="editorial-modal__bullet">
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="editorial-modal__links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-minimal btn-minimal--primary editorial-modal__link-btn"
                >
                  GitHub Repository
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-minimal btn-minimal--ghost editorial-modal__link-btn"
                >
                  Live Sandbox
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="editorial-modal__gallery">
          <h4>Interface Details</h4>
          <div className="editorial-modal__gallery-grid">
            {project.gallery.map((img, index) => (
              <div key={index} className="editorial-modal__gallery-frame">
                <img
                  className="editorial-modal__gallery-img"
                  src={img}
                  alt={`${project.title} detail view ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
