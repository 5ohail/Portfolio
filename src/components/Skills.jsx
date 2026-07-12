import gsap from 'gsap';

const skillGroups = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'React JS', image: '/react.jpg', rgb: '97, 218, 251' },
      { name: 'Tailwind CSS', image: '/CSS.png', rgb: '56, 189, 248' },
      { name: 'HTML5', image: '/Html.png', rgb: '227, 79, 38' },
      { name: 'CSS3', image: '/CSS.png', rgb: '21, 114, 182' }
    ]
  },
  {
    category: 'Backend & Databases',
    items: [
      { name: 'Node.js', image: '/node.jpg', rgb: '51, 153, 51' },
      { name: 'Express.js', image: '/express.jpg', rgb: '255, 255, 255' },
      { name: 'MongoDB', image: '/mongodb.png', rgb: '71, 162, 72' }
    ]
  },
  {
    category: 'Cloud & Systems',
    items: [
      { name: 'AWS Services', image: '/aws.png', rgb: '255, 153, 0' }
    ]
  },
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', image: '/Javascript.jpg', rgb: '247, 223, 30' },
      { name: 'C Programming', image: '/node.jpg', rgb: '168, 185, 204' }
    ]
  },
  {
    category: 'Devops',
    items: [
      { name: 'Docker', image: '/docker.jpg', rgb: '36, 150, 237' }
    ]
  },
  {
    category: 'Tools & Workflows',
    items: [
      { name: 'Git & GitHub', image: '/git.png', rgb: '240, 80, 50' },
      { name: 'VS Code', image: '/vscode.jpg', rgb: '0, 122, 204' },
      { name: 'Vite', image: '/vite.jpg', rgb: '100, 108, 255' }
    ]
  }
];

export default function Skills() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    const rotateX = -(y - yc) / yc * 3;
    const rotateY = (x - xc) / xc * 3;
    
    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 600,
      ease: 'power2.out',
      duration: 0.3
    });
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      ease: 'power3.out',
      duration: 0.4
    });
  };

  return (
    <section id="skills" className="section">
      <div className="section-label-row">
        <div className="section-label-line" />
        <span className="section-label">04 // Skills Matrix</span>
      </div>

      <div className="skills-sec-grid">
        {/* Left Column intro */}
        <div className="skills-sec-intro">
          <h4>Technical stack & toolkit.</h4>
          <p>
            I choose tools that optimize loading performance, type safety, and interface responsiveness. My core focus lies within React ecosystems, MERN architectures, and AWS serverless operations.
          </p>
        </div>

        {/* Right Column lists */}
        <div className="skills-matrix">
          {skillGroups.map((group) => (
            <div key={group.category} className="skills-cat-block">
              <h5>{group.category}</h5>
              <div className="skills-cat-items">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="skill-item-card"
                    style={{
                      '--hover-bg': `rgba(${item.rgb}, 0.03)`,
                      '--hover-border': `rgba(${item.rgb}, 0.35)`,
                      '--hover-glow': `rgba(${item.rgb}, 0.08)`,
                      '--logo-tint': `rgba(${item.rgb}, 0.04)`
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="skill-item-logo-wrap" aria-hidden="true">
                      <img src={item.image} alt="" loading="lazy" />
                    </div>
                    <span className="skill-item-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
