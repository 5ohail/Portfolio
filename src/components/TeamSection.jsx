import { motion } from 'framer-motion';

const team = [
  { name: 'Aria Menon', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80' },
  { name: 'Marcus Lee', role: 'Lead Product Designer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80' },
  { name: 'Noor Elahi', role: 'Motion Design Lead', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80' },
  { name: 'Dante Silva', role: 'Strategy Partner', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80' }
];

export default function TeamSection() {
  return (
    <section className="section" id="team">
      <div className="section__heading">
        <p className="eyebrow">Our Team</p>
        <h2>Multidisciplinary experts, one cohesive vision</h2>
      </div>
      <div className="team-grid">
        {team.map((member, index) => (
          <motion.article
            key={member.name}
            className="team-card"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <img src={member.image} alt={member.name} loading="lazy" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
