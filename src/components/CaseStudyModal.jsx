import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CaseStudyModal({ project, onClose }) {
 codex/add-animations-to-the-ui-038b7n
  useEffect(() => {
    const closeOnEsc = (event) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', closeOnEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', closeOnEsc);
      document.body.style.overflow = '';
=======
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
main
    };
  }, [onClose]);

  return (
    <motion.div
codex/add-animations-to-the-ui-038b7n
      onClick={onClose}
      className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.dialog
        open
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="w-full max-w-4xl rounded-2xl border border-white/20 bg-ink p-6 text-white"
      >
        <button className="ml-auto block text-2xl text-white/70 hover:text-white" onClick={onClose} aria-label="Close case study">
          ×
        </button>
        <p className="text-xs uppercase tracking-[0.28em] text-accent/80">{project.year}</p>
        <h3 className="mt-2 text-4xl font-semibold">{project.title}</h3>
        <p className="mt-4 text-white/75">{project.summary}</p>

        <img src={project.image} alt={project.title} className="mt-6 h-[340px] w-full rounded-xl object-cover" />

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {project.details.map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
              {item}
            </div>
=======
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
main
          ))}
        </div>
      </motion.dialog>
    </motion.div>
  );
}
