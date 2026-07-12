import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { id: 'hero', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const triggerRef = useRef(null);
  const drawerRef = useRef(null);

  // Hide on scroll down, reveal on scroll up
  useEffect(() => {
    const handleScrollNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScrollNavbar, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollNavbar);
  }, [lastScrollY]);

  // Sync active section on scroll
  useEffect(() => {
    const handleScrollActive = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      
      for (const item of menuItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollActive);
    handleScrollActive();
    return () => window.removeEventListener('scroll', handleScrollActive);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      window.lenis?.stop();
      document.body.classList.add('modal-open');
    } else {
      window.lenis?.start();
      document.body.classList.remove('modal-open');
    }
    return () => {
      window.lenis?.start();
      document.body.classList.remove('modal-open');
    };
  }, [mobileMenuOpen]);

  // Close menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Trap focus inside mobile drawer
  useEffect(() => {
    if (!mobileMenuOpen || !drawerRef.current) return;
    
    const focusable = drawerRef.current.querySelectorAll('a, button');
    if (!focusable || focusable.length === 0) return;
    
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    
    const handleFocusTrap = (e) => {
      if (e.key !== 'Tab') return;
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
    
    drawerRef.current.addEventListener('keydown', handleFocusTrap);
    return () => {
      drawerRef.current?.removeEventListener('keydown', handleFocusTrap);
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`nav-header ${visible ? '' : 'nav-header--hidden'}`}>
        <div className="nav-container">
          <a href="#hero" className="nav-logo" onClick={(e) => handleLinkClick(e, 'hero')}>
            Sohail Ansari
          </a>

          {/* Desktop Navigation */}
          <nav role="navigation" aria-label="Main menu" className="desktop-nav">
            <ul className="nav-menu">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${activeSection === item.id ? 'nav-link--active' : ''}`}
                    onClick={(e) => handleLinkClick(e, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  download="Sohail_Ansari_Resume.pdf"
                  className="nav-link"
                  style={{ textDecoration: 'none' }}
                >
                  Resume
                </a>
              </li>
              <li className="nav-meta-status">
                <div className="status-indicator-dot">
                  <div className="status-indicator-pulse" />
                </div>
                <span>Open to Roles</span>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            ref={triggerRef}
            className={`nav-hamburger ${mobileMenuOpen ? 'nav-hamburger--open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="nav-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              ref={drawerRef}
              className="nav-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.45 }}
              data-lenis-prevent
            >
              <nav className="nav-drawer-menu" role="navigation" aria-label="Mobile menu">
                <ul className="nav-drawer-list">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + index * 0.04, ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
                    >
                      <a
                        href={`#${item.id}`}
                        className={`nav-drawer-link ${activeSection === item.id ? 'nav-drawer-link--active' : ''}`}
                        onClick={(e) => {
                          handleLinkClick(e, item.id);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + menuItems.length * 0.04, ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
                  >
                    <a
                      href="/resume.pdf"
                      download="Sohail_Ansari_Resume.pdf"
                      className="nav-drawer-link"
                      style={{ textDecoration: 'none' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Resume
                    </a>
                  </motion.li>
                  <motion.li
                    className="nav-drawer-status"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                  >
                    <div className="status-indicator-dot">
                      <div className="status-indicator-pulse" />
                    </div>
                    <span>Open to Roles</span>
                  </motion.li>
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
