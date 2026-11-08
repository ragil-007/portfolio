import { SkillCategory } from '@/types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'IT Support & Operations',
    description:
      'Customer-facing Level 1 technical assistance, service desk workflows, and operational procedures.',
    skills: [
      { name: 'Level 1 Technical Support', highlight: true },
      { name: 'Application Support', highlight: true },
      { name: 'Production Support', highlight: true },
      { name: 'Incident Logging', highlight: true },
      { name: 'Issue Tracking', highlight: true },
      { name: 'Troubleshooting', highlight: true },
      { name: 'Escalation Coordination' },
      { name: 'Technical Documentation & SOPs' },
    ],
  },
  {
    category: 'Systems & Networking',
    description:
      'Operating systems, network fundamentals, hosting environments, and infrastructure troubleshooting.',
    skills: [
      { name: 'Linux', highlight: true },
      { name: 'DNS Configurations', highlight: true },
      { name: 'Windows', highlight: true },
      { name: 'Windows Server Fundamentals' },
      { name: 'TCP/IP Fundamentals', highlight: true },
      { name: 'Hosting Environments', highlight: true },
      { name: 'Basic Network Troubleshooting' },
    ],
  },
  {
    category: 'Business Applications',
    description:
      'Enterprise customer service platforms, server control panels, and collaboration tools.',
    skills: [
      { name: 'Microsoft 365', highlight: true },
      { name: 'Pega CRM', highlight: true },
      { name: 'cPanel', highlight: true },
      { name: 'Ticketing Systems', highlight: true },
      { name: 'CRM Platforms' },
      { name: 'Legacy Systems' },
    ],
  },
  {
    category: 'Software Development',
    description:
      'Backend frameworks, RESTful web services, frontend interfaces, and typed web development.',
    skills: [
      { name: 'Java', highlight: true },
      { name: 'Spring Boot', highlight: true },
      { name: 'Python', highlight: true },
      { name: 'Django', highlight: true },
      { name: 'REST APIs', highlight: true },
      { name: 'HTML & CSS', highlight: true },
      { name: 'JavaScript & TypeScript', highlight: true },
      { name: 'Vue.js & Next.js' },
    ],
  },
  {
    category: 'Databases & Tools',
    description:
      'Relational data persistence, API testing, version control, and productivity suites.',
    skills: [
      { name: 'SQL', highlight: true },
      { name: 'MySQL', highlight: true },
      { name: 'Postman & API Testing', highlight: true },
      { name: 'Git & GitHub', highlight: true },
      { name: 'Microsoft Office', highlight: true },
      { name: 'Maven' },
    ],
  },
];
