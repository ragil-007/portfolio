import { SkillCategory } from '@/types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Backend Engineering',
    description: 'Server architecture, RESTful API design, security, and persistence models.',
    skills: [
      { name: 'Java', highlight: true },
      { name: 'Spring Boot', highlight: true },
      { name: 'Spring Security', highlight: true },
      { name: 'Hibernate / JPA', highlight: true },
      { name: 'Python', highlight: true },
      { name: 'Django', highlight: true },
      { name: 'Django REST Framework' },
      { name: 'REST APIs', highlight: true },
      { name: 'Servlets & JSP' },
      { name: 'JWT Authentication' },
    ],
  },
  {
    category: 'Frontend Development',
    description: 'Modern component-driven web interfaces, typed state, and responsive layouts.',
    skills: [
      { name: 'TypeScript', highlight: true },
      { name: 'JavaScript (ES6+)', highlight: true },
      { name: 'React.js', highlight: true },
      { name: 'Next.js (App Router)', highlight: true },
      { name: 'Vue.js 3', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'HTML5 & CSS3' },
      { name: 'SCSS / Sass' },
      { name: 'Motion / React' },
    ],
  },
  {
    category: 'Databases & Distributed Systems',
    description: 'Relational data modeling, query optimization, caching, and task queues.',
    skills: [
      { name: 'MySQL', highlight: true },
      { name: 'PostgreSQL', highlight: true },
      { name: 'MongoDB' },
      { name: 'Redis', highlight: true },
      { name: 'Celery (Background Workers)', highlight: true },
      { name: 'Query Optimization' },
      { name: 'Data Validation & Integrity' },
    ],
  },
  {
    category: 'Systems, Cloud & Developer Tools',
    description: 'Infrastructure troubleshooting, deployment workflows, testing, and modern tooling.',
    skills: [
      { name: 'Git & GitHub', highlight: true },
      { name: 'Linux Administration', highlight: true },
      { name: 'DNS & TCP/IP Troubleshooting', highlight: true },
      { name: 'Postman & API Testing', highlight: true },
      { name: 'Maven & Gradle' },
      { name: 'cPanel & Web Hosting' },
      { name: 'IntelliJ IDEA & VS Code' },
      { name: 'AWS ELB & Auto Scaling (Certified)' },
    ],
  },
];
