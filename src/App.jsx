import { useMemo, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Component Imports
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectShowcase from './components/ProjectShowcase';
import CaseStudyModal from './components/CaseStudyModal';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';

// Data Import
import { projects } from './data/projects';
import Fireflies from './components/Fireflies';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Initialize GSAP scroll triggers for section reveals
  useEffect(() => {
    if (loading) return;

    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.section:not(#hero)');
      
      sections.forEach((section) => {
        const label = section.querySelector('.section-label-row');
        const contents = section.querySelectorAll('h3, h4, p, .exp-row, .achieve-row, .skill-item-card, .work-item');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        });

        if (label) {
          tl.from(label, {
            opacity: 0,
            x: -20,
            duration: 0.6,
            ease: 'power2.out'
          });
        }

        if (contents.length > 0) {
          tl.from(contents, {
            opacity: 0,
            y: 24,
            duration: 0.7,
            stagger: 0.06,
            ease: 'power3.out',
            clearProps: 'all'
          }, '-=0.45');
        }
      });
    });

    return () => ctx.revert();
  }, [loading]);

  // Compute category filters based on projects data (starts with 'All')
  const categories = useMemo(
    () => ['All', ...new Set(projects.map((p) => p.category))],
    []
  );

  // Filter projects reactively
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <div key="portfolio-root" style={{ position: 'relative', width: '100%', minHeight: '100%' }}>
            
            {/* Background fireflies flying in wind */}
            <Fireflies />

            {/* Top sticky navigation bar */}
            <Navbar />

            {/* Main Sections */}
            <main id="main-content">
              <Hero />
              <About />
              <ProjectShowcase
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                projects={filteredProjects}
                onOpenCaseStudy={setSelectedProject}
              />
              <Experience />
              <Skills />
              <Achievements />
              <ContactSection />
            </main>

            {/* Footer */}
            <SiteFooter />

            {/* Full screen Case Study Overlay */}
            <AnimatePresence>
              {selectedProject && (
                <CaseStudyModal
                  project={selectedProject}
                  onClose={() => setSelectedProject(null)}
                />
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
