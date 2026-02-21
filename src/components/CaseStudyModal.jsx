import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CaseStudyModal({ project, onClose }) {
  // Lock page scroll and support keyboard escape to close the dialog.
  useEffect(() => {
    const onEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onEsc);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onEsc);
    };
  }, [onClose]);

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="presentation"
    >
      <motion.dialog
        className="case-modal"
        open
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} case study`}
        initial={{ opacity: 0, y: 26, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.3 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="close" type="button" onClick={onClose} aria-label="Close case study">
          ×
        </button>
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="case-modal__meta">{project.year}</p>
        <p><strong>Challenge:</strong> {project.challenge}</p>
        <p><strong>Solution:</strong> {project.solution}</p>
        <ul>
          {project.outcome.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="case-modal__gallery">
          {project.gallery.map((item) => (
            <img key={item} src={item} alt={`${project.title} detail`} loading="lazy" />
          ))}
        </div>
      </motion.dialog>
    </motion.div>
  );
}
