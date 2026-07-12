const experiences = [
  {
    id: 'aws-sbc',
    role: 'Tech Lead & Core Team Member',
    company: 'AWS Student Builder Club, GITS',
    time: '2024 — Present',
    bullets: [
      'Coordinate technical workshop series, AWS documentation sprints, and hands-on laboratory exercises for CSE cohorts.',
      'Lead deployment projects demonstrating Serverless patterns (AWS Lambda, S3, API Gateway) and IAM permission configurations.',
      'Maintain continuous integration build processes and write modular codebase templates for active club projects.'
    ],
    techs: ['AWS Cloud', 'Serverless', 'Technical Leadership', 'CI/CD']
  },
  {
    id: 'cii-gits',
    role: 'Web Development Coordinator',
    company: 'Centre of Innovation and Incubation (C.I.I) Web Development Club, GITS Udaipur',
    time: '2024 — Present',
    bullets: [
      'Oversee frontend development pipelines for incubation center startups, mentoring 20+ junior engineers in clean code standards.',
      'Enforce modular component structures, declarative state management, and visual design assets alignment.',
      'Verify accessibility rules (WCAG compliance) and audit visual elements across active project builds.'
    ],
    techs: ['React JS', 'Tailwind CSS', 'Git & GitHub', 'Mentorship']
  },
  {
    id: 'hackathon-developer',
    role: 'Frontend Developer',
    company: 'Hackathon Initiative',
    time: 'October 2024',
    bullets: [
      'Designed and engineered the user interface for a civic-safety mapping platform linking tourists and local guides in 48 hours.',
      'Coded responsive grid displays, interactive map layers, and status control dashboards.',
      'Resolved visual layout shifts (CLS) and handled cross-browser performance optimizations under tight deadlines.'
    ],
    techs: ['HTML5 & CSS3', 'JavaScript', 'React.js', 'Rapid Prototyping']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-label-row">
        <div className="section-label-line" />
        <span className="section-label">03 // Experience</span>
      </div>

      <div className="exp-timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="exp-row">
            <span className="exp-date">{exp.time}</span>
            
            <div className="exp-details">
              <span className="exp-company">{exp.company}</span>
              <h4 className="exp-role">{exp.role}</h4>
              
              <ul className="exp-bullets">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="exp-bullet">
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="exp-techs">
                {exp.techs.map((tech) => (
                  <span key={tech} className="exp-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
