import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, Mail, Download, Copy, Check } from 'lucide-react';

const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    width={props.size || 24}
    height={props.size || 24}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    width={props.size || 24}
    height={props.size || 24}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const commands = [
  { id: 'hero', title: 'Go to Hero Section', category: 'Navigation', icon: Compass, action: 'scroll', target: '#hero' },
  { id: 'about', title: 'Go to About Section', category: 'Navigation', icon: Compass, action: 'scroll', target: '#about' },
  { id: 'projects', title: 'Go to Selected Projects', category: 'Navigation', icon: Compass, action: 'scroll', target: '#projects' },
  { id: 'experience', title: 'Go to Experience Timeline', category: 'Navigation', icon: Compass, action: 'scroll', target: '#experience' },
  { id: 'skills', title: 'Go to Technical Skills', category: 'Navigation', icon: Compass, action: 'scroll', target: '#skills' },
  { id: 'achievements', title: 'Go to Achievements', category: 'Navigation', icon: Compass, action: 'scroll', target: '#achievements' },
  { id: 'contact', title: 'Go to Contact Form', category: 'Navigation', icon: Compass, action: 'scroll', target: '#contact' },
  { id: 'email-copy', title: 'Copy Email Address', subtitle: 'Sohailansarisa318@gmail.com', category: 'Actions', icon: Mail, action: 'copy', value: 'Sohailansarisa318@gmail.com' },
  { id: 'resume-dl', title: 'Download Resume PDF', category: 'Actions', icon: Download, action: 'download', target: '/resume.pdf' },
  { id: 'github-link', title: 'Open GitHub Profile', subtitle: '@5ohail', category: 'External', icon: Github, action: 'link', target: 'https://github.com/5ohail' },
  { id: 'linkedin-link', title: 'Open LinkedIn Profile', subtitle: '/SohailAnsari163', category: 'External', icon: Linkedin, action: 'link', target: 'https://linkedin.com/in/SohailAnsari163' },
];

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setActiveIndex(0);
      setCopied(false);
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  const filtered = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    (cmd.category && cmd.category.toLowerCase().includes(query.toLowerCase())) ||
    (cmd.subtitle && cmd.subtitle.toLowerCase().includes(query.toLowerCase()))
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleExecute = (cmd) => {
    if (cmd.action === 'scroll') {
      const el = document.querySelector(cmd.target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      onClose();
    } else if (cmd.action === 'copy') {
      navigator.clipboard.writeText(cmd.value);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        onClose();
      }, 1000);
    } else if (cmd.action === 'download') {
      const link = document.createElement('a');
      link.href = cmd.target;
      link.download = 'Sohail_Ansari_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onClose();
    } else if (cmd.action === 'link') {
      window.open(cmd.target, '_blank', 'noopener,noreferrer');
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % filtered.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[activeIndex]) {
          handleExecute(filtered[activeIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, filtered]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="cmd-palette" role="dialog" aria-modal="true" aria-label="Command palette">
        <div className="cmd-palette__backdrop" onClick={onClose} />
        
        <motion.div
          className="cmd-palette__box"
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cmd-palette__header">
            <Search className="cmd-palette__icon" size={20} />
            <input
              ref={inputRef}
              type="text"
              className="cmd-palette__input"
              placeholder="Search shortcuts and commands..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="cmd-palette__shortcut" onClick={onClose} style={{ border: 0, cursor: 'pointer' }}>ESC</button>
          </div>

          <div className="cmd-palette__results">
            {filtered.length > 0 ? (
              filtered.map((cmd, idx) => {
                const IconComponent = cmd.icon;
                return (
                  <button
                    key={cmd.id}
                    className={`cmd-palette__item ${idx === activeIndex ? 'cmd-palette__item--active' : ''}`}
                    onClick={() => handleExecute(cmd)}
                    onMouseEnter={() => setActiveIndex(idx)}
                  >
                    <div className="cmd-palette__item-left">
                      <IconComponent className="cmd-palette__icon" size={18} />
                      <div>
                        <div>{cmd.title}</div>
                        {cmd.subtitle && (
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                            {cmd.subtitle}
                          </div>
                        )}
                      </div>
                    </div>
                    {cmd.action === 'copy' && copied && idx === activeIndex ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: '#00FF66', fontSize: '0.8rem' }}>
                        <Check size={14} /> Copied!
                      </span>
                    ) : cmd.action === 'copy' ? (
                      <Copy size={14} className="cmd-palette__icon" />
                    ) : (
                      <span className="cmd-palette__shortcut">{cmd.category}</span>
                    )}
                  </button>
                );
              })
            ) : (
              <div style={{ padding: '2rem 1.5rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                No commands matching your query.
              </div>
            )}
          </div>

          <div className="cmd-palette__footer">
            <span>Use <kbd>↑</kbd> <kbd>↓</kbd> to navigate, <kbd>Enter</kbd> to select</span>
            <span>{filtered.length} results</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
