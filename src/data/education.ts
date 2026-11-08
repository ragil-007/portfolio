import { EducationItem, CertificationItem } from '@/types';

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    field: 'Computer Applications & Software Systems',
    institution: 'Srinivas Institute of Technology',
    period: '2023 – 2024',
    highlights: [
      'Advanced computer applications curriculum covering distributed systems, software engineering methodologies, database design, and object-oriented architecture.',
      'Practical capstone project development incorporating modern web frameworks and database normalization.',
    ],
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Computer Applications',
    institution: 'Kannur University',
    period: '2018 – 2021',
    highlights: [
      'Foundational computing coursework in data structures, algorithms, object-oriented programming (C, C++, Java), and relational database systems.',
      'Developed strong algorithmic problem-solving habits and computational fundamentals.',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'AWS Elastic Load Balancing with Auto Scaling Groups',
    issuer: 'Udemy',
    date: 'Verified',
  },
];
