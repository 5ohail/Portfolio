import { motion } from 'framer-motion';

export default function ProjectShowcase({
  categories,
  activeCategory,
  onCategoryChange,
  projects,
  onOpenCaseStudy
}) {
  return (
    <section id="projects" className="section">
      <div className="section__heading">
        <p className="eyebrow">Selected Work</p>
        <h2>Interactive project showcase</h2>
      </div>

      <div className="filters" role="toolbar" aria-label="Project filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`chip ${activeCategory === category ? 'chip--active' : ''}`}
            type="button"
            onClick={() => onCategoryChange(category)}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
            <div className="project-card__overlay">
              <p>{project.category}</p>
              <h3>{project.title}</h3>
              <button
                className="button button--small"
                type="button"
                onClick={() => onOpenCaseStudy(project)}
              >
                Open Case Study
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
