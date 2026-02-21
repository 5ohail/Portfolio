import { useMemo, useState } from 'react';
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
