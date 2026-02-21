import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import HorizontalProjects from './components/HorizontalProjects';
import AboutStory from './components/AboutStory';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import CaseStudyModal from './components/CaseStudyModal';
import WebGLBackground from './components/WebGLBackground';
import MorphDivider from './components/MorphDivider';
import useLenisScroll from './hooks/useLenisScroll';
import { projects } from './data/projects';

export default function App() {
  useLenisScroll();
  const [activeProject, setActiveProject] = useState(null);
  const featured = useMemo(() => projects, []);

  return (
    <div className="relative overflow-x-clip bg-abyss text-white selection:bg-accent selection:text-abyss">
      <WebGLBackground />
      <CustomCursor />
      <main id="main-content" className="relative z-10">
        <Hero />
        <MorphDivider />
        <HorizontalProjects projects={featured} onOpen={setActiveProject} />
        <AboutStory />
        <Contact />
      </main>
      <AnimatePresence>
        {activeProject ? (
          <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
        ) : null}
      </AnimatePresence>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto flex w-[min(1100px,92vw)] flex-wrap items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-white/60"
      >
        <p>© {new Date().getFullYear()} Sohail Ansari — Crafted for immersive storytelling.</p>
        <div className="flex gap-4">
          <a href="https://github.com/5ohail" className="hover:text-accent">GitHub</a>
          <a href="https://instagram.com/sohx1l" className="hover:text-accent">Instagram</a>
          <a href="mailto:sohailansarisa318@gmail.com" className="hover:text-accent">Email</a>
        </div>
      </motion.footer>
    </div>
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import CaseStudyModal from './components/CaseStudyModal';
import TeamSection from './components/TeamSection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';
import { projects } from './data/projects';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Derive filter chips from project categories once at startup.
  const categories = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category))],
    []
  );

  // Keep filtering logic declarative for maintainability and easy extension.
  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <main id="main-content">
        <Hero />
        <ProjectShowcase
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          projects={filteredProjects}
          onOpenCaseStudy={setSelectedProject}
        />
        <TeamSection />
        <Testimonials />
        <ContactSection />
      </main>
      <SiteFooter />
      <AnimatePresence>
        {selectedProject ? (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
