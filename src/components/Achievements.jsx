const achievements = [
  {
    idx: '01.',
    title: 'Smart India Hackathon (SIH) Runner-Up',
    desc: 'Led a development team of 6 to engineer SudhaarX, an AI civic grievance mapping portal, winning national Runner-Up honors.',
    badge: 'National Award'
  },
  {
    idx: '02.',
    title: 'CodeFiesta Finalist',
    desc: 'Qualified as a finalist in the regional competitive algorithm design and speed coding tournament.',
    badge: 'Competition'
  },
  {
    idx: '03.',
    title: 'Research Paper Award nominee',
    desc: 'Co-authored a draft evaluating municipal computer vision models and geolocation routing performance metrics.',
    badge: 'Academic Research'
  },
  {
    idx: '04.',
    title: 'AWS SBC Core Team Lead',
    desc: 'Selected as the Tech Lead of the AWS Student Builder Club at GITS, managing cloud workshop tracks.',
    badge: 'Leadership'
  },
  {
    idx: '05.',
    title: 'DSA Forge Runner-Up',
    desc: 'Placed second in the campus-wide competitive data structures and algorithms programming contest.',
    badge: 'Competition'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="section-label-row">
        <div className="section-label-line" />
        <span className="section-label">05 // Achievements</span>
      </div>

      <div className="achieve-list">
        {achievements.map((item) => (
          <div key={item.idx} className="achieve-row">
            <span className="achieve-num">{item.idx}</span>
            <div className="achieve-details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
            <span className="achieve-badge">{item.badge}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
