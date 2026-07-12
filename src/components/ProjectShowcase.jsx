import gsap from 'gsap';

export default function ProjectShowcase({ projects, onOpenCaseStudy }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    // Tilt max 3 degrees
    const rotateX = -(y - yc) / yc * 3;
    const rotateY = (x - xc) / xc * 3;
    
    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
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
    <section id="projects" className="section">
      <div className="section-label-row">
        <div className="section-label-line" />
        <span className="section-label">02 // Selected Projects</span>
      </div>

      <div className="work-grid">
        {projects.map((project) => (
          <article key={project.id} className="work-item">
            {/* Visual Preview Column */}
            <div className="work-item__preview-col">
              <div
                className="work-item__preview-frame"
                onClick={() => onOpenCaseStudy(project)}
                role="button"
                tabIndex={0}
                aria-label={`Open case study for ${project.title}`}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpenCaseStudy(project); }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  className="work-item__img"
                  src={project.image}
                  alt={`${project.title} interface preview`}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Details Column */}
            <div className="work-item__details-col">
              <div className="work-item__meta">
                <span>{project.category}</span>
                <div className="work-item__meta-sep" />
                <span>{project.year}</span>
              </div>

              <h4 className="work-item__title">{project.title}</h4>

              <p className="work-item__challenge">
                {project.challenge}
              </p>

              <div className="work-item__tech-row">
                {project.architecture.map((tech) => (
                  <span key={tech} className="work-item__tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <button
                className="btn-minimal btn-minimal--ghost"
                onClick={() => onOpenCaseStudy(project)}
                type="button"
              >
                Case Study
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
