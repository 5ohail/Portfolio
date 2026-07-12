export const projects = [
  {
    id: 'bugflow',
    title: 'BugFlow',
    category: 'SaaS Product',
    image: '/BU.png',
    year: '2025',
    challenge: 'Software development teams often struggle with slow QA iteration loops because of incomplete bug reports that lack system logs, browser state details, or visual markers.',
    solution: 'We built BugFlow, a modern bug tracking platform featuring a visual feedback overlay widget that records console history, system parameters, and network snapshots automatically.',
    architecture: ['React.js', 'Framer Motion', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'Visual on-screen annotation and screenshot utility.',
      'Automated environment metadata compilation (OS, browser, logs).',
      'Real-time team Kanban board with role-based issue delegation.',
      'Integration webhooks for Slack, GitHub, and Jira.'
    ],
    outcome: [
      'Reduced bug reporting & triage cycles by 70%.',
      'Adopted by 150+ student developers at Geetanjali Institute.',
      'Constructed modular state-driven components for easy maintenance.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80'
    ],
    github: 'https://github.com/5ohail/BugFlow',
    live: 'https://github.com/5ohail'
  },
  {
    id: 'sudhaarx',
    title: 'SudhaarX',
    category: 'AI Civic Portal',
    image: './SudhaarX.jpeg',
    year: '2024',
    challenge: 'Citizen grievances (broken streetlights, potholes, garbage piles) in local municipalities are heavily delayed due to slow manual classification and sorting processes.',
    solution: 'SudhaarX is an AI-powered municipal portal where citizens upload photos of local issues. Computer vision algorithms automatically categorize, tag locations, and assign urgency.',
    architecture: ['React.js', 'Tailwind CSS', 'Python', 'FastAPI', 'OpenCV / YOLOv8'],
    features: [
      'AI image classification models for pothole and debris detection.',
      'EXIF geolocation extraction for automatic map tagging.',
      'Admin command dashboard for ticket routing and department delegation.',
      'Progress tracker for citizens with real-time status updates.'
    ],
    outcome: [
      'Awarded national Runner-Up at the Smart India Hackathon (SIH).',
      'Pilot tested with Udaipur Municipal Corporation resolving 400+ complaints.',
      'Achieved a 93% accuracy rate in automated visual issue categorization.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80'
    ],
    github: 'https://github.com/5ohail/SudhaarX',
    live: 'https://github.com/5ohail'
  }
];
