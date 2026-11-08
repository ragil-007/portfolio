export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  role?: string;
  timeline?: string;
  status: 'Completed' | 'In Active Development' | 'Open Source';
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  slug: string;
  mockupType?: 'dashboard' | 'terminal' | 'exam' | 'voter' | 'traffic';
  isFeatured?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  type: 'Full-time' | 'Internship' | 'Contract';
  period: string;
  startDate: string;
  endDate: string;
  location: string;
  description?: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location?: string;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Proficient' | 'Working Knowledge';
    highlight?: boolean;
  }[];
}

export interface NavItem {
  label: string;
  href: string;
}
