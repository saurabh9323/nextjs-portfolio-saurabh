export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#journey', label: 'Journey' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const STATS = [
  { num: '2+', label: 'Years XP' },
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


export const ACHIEVEMENTS = [
  { id: 'about', title: 'Profile Unlocked', desc: 'You discovered Saurabh\'s story', icon: '🔓' },
  { id: 'journey', title: 'Quest Log Opened', desc: 'Experience timeline loaded', icon: '📜' },
  { id: 'skills', title: 'Skill Tree Accessed', desc: 'Arsenal of tech revealed', icon: '🌐' },
  { id: 'projects', title: 'Portfolio Explored', desc: 'Shipped projects inspected', icon: '🚀' },
  { id: 'contact', title: 'Connection Established', desc: 'Ready to collaborate', icon: '📡' },
];

export const CONTACT_LINKS = [
  { icon: '✉', label: 'Email', value: 'saurabhpathak52@gmail.com', href: 'mailto:saurabhpathak52@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+91 9323673405', href: 'tel:+919323673405' },
  { icon: 'in', label: 'LinkedIn', value: 'linkedin.com/in/saurabh-pathak', href: 'https://linkedin.com/in/saurabh-pathak' },
  { icon: '</>', label: 'GitHub', value: 'github.com/saurabh9323', href: 'https://github.com/saurabh9323' },
  { icon: '📍', label: 'Location', value: 'Mumbai, Maharashtra, India', href: null },
];

export const PROJECTS = [
  {
    num: '01',
    title: 'BimaMandi Platform',
    highlight: '🎯 Production at Nivotime',
    desc: 'A retail insurance distribution platform for brokers to compare, purchase and manage policies across health, life and motor categories. Led full platform development with modular, scalable architecture.',
    tags: ['React', 'RJSF', 'Redux', 'TypeScript', 'Plasmic', 'Figma', 'Fast API'],
    color: '#00e5ff',
    status: 'PRODUCTION',
    href: 'https://bimamandi.com', // 🔁 replace with real URL
    highlights: [
      'Employee enrollment workflows',
      'Corporate admin portal with access controls',
      'Real-time data dashboards & reports',
      'Compliance and policy issuance automation',
    ],
  },
  {
    num: '02',
    title: 'BuyPolicyNow',
    highlight: '🛒 B2C Insurance Portal',
    desc: 'A B2C insurance portal enabling individuals to compare and purchase policies online across life, motor and health categories. Led frontend-backend integration and built APIs for multiple insurers.',
    tags: ['Redux.js', 'Next.js', 'Node.js', 'API Integration'],
    color: '#8b5cf6',
    status: 'LIVE',
    href: 'https://buypolicynow.com', // 🔁 replace with real URL
    highlights: [
      'Multi-product policy comparison',
      'Dynamic quotation engine',
      'End-to-end digital purchase workflow',
      'Payment integration and status tracking',
    ],
  },
  {
    num: '03',
    title: 'IBS — Insurance B2B Suite',
    highlight: '🏢 Enterprise at Nivotime',
    desc: 'Enterprise-grade platform for corporate clients and employees. HR/corporates manage eligibility, view reports, and monitor claims while employees self-enroll into sponsored insurance policies.',
    tags: ['Fast API', 'Redux.js', 'Next.js', 'TypeScript'],
    color: '#ff6b35',
    status: 'PRODUCTION',
    href: null, // internal tool, no public link
    highlights: [
      'Employee enrollment workflows',
      'Corporate admin portal with access controls',
      'Real-time data dashboards & reports',
      'Compliance and policy issuance automation',
    ],
  },
  {
    num: '04',
    title: 'Yuva Suraksha Yojana',
    highlight: '🎓 College Insurance Portal',
    desc: 'Centralized portal for educational institutes (colleges/universities) to register and purchase insurance coverage for students. Supports bulk uploads, enrollment tracking and certificate generation.',
    tags: ['Redux.js', 'CSS (CSS)', 'Next.js', 'Node.js'],
    color: '#00ff9d',
    status: 'LIVE',
    href: null, // 🔁 replace with real URL if available
    highlights: [
      'College & student registration workflows',
      'Bulk policy issuance',
      'Policy document generator',
      'Reporting for partner institutions',
    ],
  },
  {
    num: '05',
    title: 'Philipe CRM',
    highlight: '⚙️ Microservice Architecture',
    desc: 'A full-featured CRM platform built on a microservices architecture. Handles lead management, client lifecycle, automation workflows and reporting — with each domain isolated as an independent service.',
    tags: ['Next.js', 'Node.js', 'FastAPI', '.NET', 'Microservices', 'Docker'],
    color: '#ff2d55',
    status: 'IN DEV',
    href: null, // 🔁 add link when live
    highlights: [
      'Lead & pipeline management',
      'Microservice-isolated domains (auth, leads, billing)',
      'FastAPI for ML/analytics services',
      '.NET for core business logic',
      'Next.js unified frontend',
    ],
  },
  {
    num: '06',
    title: 'Feedbackr',
    highlight: '📈 1M+ → <100 daily API requests',
    desc: 'Feedback collection & management platform for organizations. Architected RTK Query caching strategy achieving a 10,000x reduction in server requests — massive performance and cost win.',
    tags: ['ReactJS', 'SCSS', 'SupaBase', 'RTK Query', 'Freelance'],
    color: '#00e5ff',
    status: 'SHIPPED',
    href: null,
    highlights: [
      '10,000x reduction in API calls via RTK Query',
      'Multi-org feedback collection',
      'Real-time analytics dashboard',
      'Role-based access control',
    ],
  },
  {
    num: '07',
    title: 'Virtual Study Network',
    highlight: '☁️ Cloud-powered remote desktops',
    desc: 'AWS EC2 virtual machines for lower-end PCs with a full UI for OS selection and workspace management — complete with cloud document storage and TextPad integration.',
    tags: ['AWS EC2', 'JavaScript', 'PHP', 'HTML/CSS', 'Cloud'],
    color: '#8b5cf6',
    status: 'LIVE',
    href: null,
    highlights: [
      'On-demand EC2 provisioning',
      'OS selection interface',
      'Cloud document storage',
      'Low-spec PC support',
    ],
  },
];
