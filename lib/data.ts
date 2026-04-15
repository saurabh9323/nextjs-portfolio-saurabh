export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#journey', label: 'Journey' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const STATS = [
  { num: '3+', label: 'Years XP' },
  { num: '10+', label: 'Projects' },
  { num: '2', label: 'Companies' },
  { num: '∞', label: 'Coffee' },
];

export const JOURNEY = [
  {
    year: '2024 — Present',
    title: 'Software Engineer',
    org: 'Nivotime Technologies',
    desc: 'Building BimaMandi — a large-scale insurance platform with metadata-driven dynamic forms. Architected reusable RJSF form components, integrated Redux Toolkit + RTK Query for state & caching.',
    icon: '🚀',
    tags: ['React', 'TypeScript', 'RJSF', 'Redux', 'Plasmic'],
    color: '#00e5ff',
  },
  {
    year: '2023',
    title: 'Freelance Full-Stack Dev',
    org: 'Self-Employed',
    desc: 'Built Feedbackr — reduced 1M+ daily API requests to under 100 using RTK Query caching. Delivered production-grade web apps for multiple clients.',
    icon: '⚡',
    tags: ['ReactJS', 'RTK Query', 'SupaBase', 'SCSS'],
    color: '#8b5cf6',
  },
  {
    year: '2022 — 2023',
    title: 'Frontend Developer',
    org: 'Startup Ecosystem',
    desc: 'Developed responsive UIs, component libraries, and design system integrations. Worked with Figma-to-code pipelines and SASS architecture.',
    icon: '🎮',
    tags: ['Vue.js', 'SASS', 'Figma', 'Vite'],
    color: '#ff6b35',
  },
  {
    year: '2021 — 2022',
    title: 'Cloud Project — Virtual Study Network',
    org: 'Personal Project',
    desc: 'Provisioned AWS EC2 virtual machines for lower-spec PCs. Built a full UI for OS selection, workspace management, and cloud document storage.',
    icon: '☁️',
    tags: ['AWS EC2', 'JavaScript', 'PHP', 'HTML/CSS'],
    color: '#00ff9d',
  },
  {
    year: '2019 — 2022',
    title: 'B.E. Computer Engineering',
    org: 'University of Mumbai',
    desc: 'Built strong foundations in data structures, algorithms, OS, databases, and web technologies. Graduated with distinction.',
    icon: '🎓',
    tags: ['DSA', 'OS', 'DBMS', 'Web Dev'],
    color: '#ffffff',
  },
];

export const SKILLS_BARS = [
  { name: 'React.js / Next.js', pct: 92, gradient: 'linear-gradient(to right,#00e5ff,#8b5cf6)' },
  { name: 'Redux Toolkit / RTK Query', pct: 90, gradient: 'linear-gradient(to right,#8b5cf6,#00ff9d)' },
  { name: 'TypeScript / JavaScript', pct: 88, gradient: 'linear-gradient(to right,#00e5ff,#8b5cf6)' },
  { name: 'Node.js / Express', pct: 80, gradient: 'linear-gradient(to right,#00ff9d,#00e5ff)' },
  { name: 'MongoDB / SQL', pct: 75, gradient: 'linear-gradient(to right,#ff6b35,#8b5cf6)' },
  { name: 'SCSS / SASS / MUI', pct: 83, gradient: 'linear-gradient(to right,#8b5cf6,#ff6b35)' },
  { name: 'Figma / Plasmic', pct: 78, gradient: 'linear-gradient(to right,#00e5ff,#00ff9d)' },
  { name: 'Git / JIRA / Jenkins', pct: 85, gradient: 'linear-gradient(to right,#ff6b35,#00e5ff)' },
];

export const SKILL_TAGS = [
  'React.js','Next.js','TypeScript','Redux','RTK Query','RJSF','Node.js',
  'MongoDB','SQL','Python','Vue.js','SASS','Vite.js','Git','Figma',
  'Plasmic','AWS EC2','JIRA','Express.js','JavaScript',
];

export const PROJECTS = [
  {
    num: '01',
    title: 'Feedbackr',
    highlight: '📈 1M+ → <100 daily API requests',
    desc: 'Feedback collection & management platform for organizations. Architected RTK Query caching strategy achieving a 10,000x reduction in server requests — massive performance and cost win.',
    tags: ['ReactJS', 'SCSS', 'SupaBase', 'RTK Query', 'Freelance'],
    color: '#00e5ff',
    status: 'SHIPPED',
  },
  {
    num: '02',
    title: 'Virtual Study Network',
    highlight: '☁️ Cloud-powered remote desktops',
    desc: 'AWS EC2 virtual machines for lower-end PCs with a full UI for OS selection and workspace management — complete with cloud document storage and TextPad integration.',
    tags: ['AWS EC2', 'JavaScript', 'PHP', 'HTML/CSS', 'Cloud'],
    color: '#8b5cf6',
    status: 'LIVE',
  },
  {
    num: '03',
    title: 'BimaMandi Platform',
    highlight: '🎯 Production at Nivotime',
    desc: 'Large-scale insurance platform with complex metadata-driven dynamic forms. RJSF-based architecture cut duplicate UI logic by 60%. Redux Toolkit + RTK Query for global state & API caching.',
    tags: ['React', 'RJSF', 'Redux', 'TypeScript', 'Plasmic', 'Figma'],
    color: '#00ff9d',
    status: 'PRODUCTION',
  },
];

export const ACHIEVEMENTS = [
  { id: 'about', title: 'Profile Unlocked', desc: 'You discovered Saurabh\'s story', icon: '🔓' },
  { id: 'journey', title: 'Quest Log Opened', desc: 'Experience timeline loaded', icon: '📜' },
  { id: 'skills', title: 'Skill Tree Accessed', desc: 'Arsenal of tech revealed', icon: '🌐' },
  { id: 'projects', title: 'Portfolio Explored', desc: 'Shipped projects inspected', icon: '🚀' },
  { id: 'contact', title: 'Connection Established', desc: 'Ready to collaborate', icon: '📡' },
];

export const CONTACT_LINKS = [
  { icon: '✉', label: 'Email', value: 'saurabhpathak9323@gmail.com', href: 'mailto:saurabhpathak9323@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+91 9323673405', href: 'tel:+919323673405' },
  { icon: 'in', label: 'LinkedIn', value: 'linkedin.com/in/saurabh-pathak', href: 'https://linkedin.com/in/saurabh-pathak' },
  { icon: '</>', label: 'GitHub', value: 'github.com/saurabh9323', href: 'https://github.com/saurabh9323' },
  { icon: '📍', label: 'Location', value: 'Mumbai, Maharashtra, India', href: null },
];
