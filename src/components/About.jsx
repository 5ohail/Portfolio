import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-label-row">
        <div className="section-label-line" />
        <span className="section-label">01 // Biography</span>
      </div>

      <div className="about-asym">
        {/* Left Column heading */}
        <div className="about-asym__heading">
          <h3>
            I believe software should be <span>clear</span>, deliberate, and engineered to last.
          </h3>
        </div>

        {/* Right Column details */}
        <div className="about-asym__body">
          <p className="about-asym__p">
            I am a software engineer studying for a <span>B.Tech in Computer Science and Engineering</span> at Geetanjali Institute of Technical Studies (GITS), Udaipur (expected graduation 2028). I construct high-fidelity frontends, implement robust state workflows, and secure deployments.
          </p>
          <p className="about-asym__p">
            As the <span>Web Development Coordinator</span> at the Centre of Innovation and Incubation (C.I.I) and a <span>Tech Lead</span> at the AWS Student Builder Club, I organize hackathons, manage project updates for campus startups, and mentor junior developers in React.js and modern Git workflows.
          </p>
          <p className="about-asym__p">
            My work is characterized by clean monochrome designs, semantic accessibility, and efficient database architectures. I focus on developing real solutions for developers and communities.
          </p>

          <div className="about-asym__highlights">
            <div className="about-asym__stat">
              <span className="about-asym__stat-label">Active Role</span>
              <span className="about-asym__stat-val">AWS SBC Tech Lead</span>
            </div>
            <div className="about-asym__stat">
              <span className="about-asym__stat-label">Location Focus</span>
              <span className="about-asym__stat-val">Udaipur, Rajasthan, India</span>
            </div>
            <div className="about-asym__stat">
              <span className="about-asym__stat-label">Incubation Hub</span>
              <span className="about-asym__stat-val">C.I.I Web Coordinator</span>
            </div>
            <div className="about-asym__stat">
              <span className="about-asym__stat-label">B.Tech Cohort</span>
              <span className="about-asym__stat-val">CSE at GITS (2028)</span>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <a
              href="/resume.pdf"
              download="Sohail_Ansari_Resume.pdf"
              className="btn-minimal btn-minimal--primary"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
