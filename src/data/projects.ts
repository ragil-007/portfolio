import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'immuna',
    number: '01',
    title: 'Immuna',
    category: 'Full-Stack Application',
    tagline: 'Digital Immunization Management System',
    description:
      'A full-stack immunization management platform engineered to track vaccination records, dose schedules, upcoming vaccines, and patient medical histories with role-based security.',
    longDescription:
      'Immuna simplifies immunization governance for clinics and families. Built with a robust Spring Boot backend and an agile Vue.js 3 single-page application, it provides real-time vaccination tracking, automated dose alerts, and granular medical records management.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'MySQL',
      'Vue.js 3',
      'Axios',
      'Vue Router',
    ],
    role: 'Full-Stack Developer',
    timeline: '2025',
    status: 'Completed',
    highlights: [
      'Built 12+ RESTful APIs with JWT authentication and relational MySQL integration covering 5+ core domain entities.',
      'Engineered automated notification and schedule calculation logic for multi-stage child and adult immunization courses.',
      'Implemented role-based access control (RBAC) establishing segregated workflows for administrators, medical practitioners, and patients.',
      'Developed a responsive, single-page client interface using Vue 3 reactive composition and Axios HTTP interceptors.',
    ],
    architecturePoints: [
      'Spring Security filter chain with stateless JWT token validation and custom user details service.',
      'Normalized relational schema with foreign key integrity and indexed queries for rapid patient history lookups.',
      'RESTful endpoints with structured error responses and input validation (Hibernate Validator).',
    ],
    slug: 'immuna',
    mockupType: 'dashboard',
  },
  {
    id: 'meeting-assistant',
    number: '02',
    title: 'Meeting Assistant',
    category: 'AI & Real-Time Systems',
    tagline: 'Real-Time AI Audio Transcription & Meeting Intelligence',
    description:
      'A modern AI-powered assistant that captures live meeting audio, streams real-time speech-to-text transcripts, and generates instant conversational insights and action items.',
    longDescription:
      'Engineered to tackle meeting fatigue and lost context, this application integrates cutting-edge audio processing with ultra-fast LLM inference. Utilizing Groq-accelerated Whisper Large V3 for transcription and Llama 3.3 70B for synthesis, it delivers near-zero latency executive summaries.',
    technologies: [
      'Next.js',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Groq API',
      'Whisper Large V3',
      'Llama 3.3 70B',
      'Web Audio API',
    ],
    role: 'Frontend & AI Integration Developer',
    timeline: '2025',
    status: 'Completed',
    githubUrl: 'https://github.com/ragil-007/meeting-assistant-realtime',
    highlights: [
      'Engineered end-to-end streaming audio capture pipeline utilizing browser Web Audio APIs and media recorders.',
      'Integrated Groq LPUs with Whisper Large V3 to achieve sub-second speech-to-text transcription latency.',
      'Implemented conversational intelligence workflows with Llama 3.3 70B for automatic key takeaway and task extraction.',
      'Built an accessible, high-performance UI using Next.js App Router, Tailwind CSS, and typed React hooks.',
    ],
    architecturePoints: [
      'Audio chunk streaming to edge API routes with chunked transfer and rate-limiting guardrails.',
      'Typed prompt engineering matrices for deterministic JSON extraction of action items and attendee sentiments.',
      'Client-side optimistic UI rendering ensuring smooth transcription display without lag or dropped frames.',
    ],
    slug: 'meeting-assistant',
    mockupType: 'terminal',
  },
  {
    id: 'tailorpro',
    number: '03',
    title: 'TailorPro',
    category: 'Backend Architecture',
    tagline: 'Tailoring Shop Management System',
    description:
      'A backend-focused enterprise management system engineered for custom tailoring businesses, providing role-segregated order lifecycles, measurement records, and audit logs.',
    longDescription:
      'TailorPro delivers a robust, production-oriented backend for bespoke tailoring operations. Designed with strict DTO boundaries and domain-driven practices in Java 17 and Spring Boot, it models complex body measurements, fabric allocations, and tailoring stages with transactional certainty.',
    technologies: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'MySQL',
      'JPA / Hibernate',
      'Maven',
    ],
    role: 'Backend Architect',
    timeline: '2025',
    status: 'Backend Complete',
    highlights: [
      'Designed a layered DTO (Data Transfer Object) architecture preventing entity leakage and ensuring rigorous input validation.',
      'Configured Spring Security with fine-grained role authorization distinguishing administrators, master tailors, and customers.',
      'Engineered relational database models capturing multi-parameter measurement profiles and real-time order progression.',
      'Maintained transparent implementation boundaries with comprehensive REST endpoints verified through Postman collections.',
    ],
    architecturePoints: [
      'Service-layer isolation with transaction management (@Transactional) for order creation and inventory deduction.',
      'JPA entity relationship optimizations with custom JPQL queries avoiding N+1 query overhead.',
      'Centralized GlobalExceptionHandler providing consistent, standardized error payloads across all endpoints.',
    ],
    slug: 'tailorpro',
    mockupType: 'code',
  },
  {
    id: 'playto',
    number: '04',
    title: 'Playto',
    category: 'Distributed Backend',
    tagline: 'High-Throughput Asynchronous Payout Engine',
    description:
      'An asynchronous payout processing service built with Python and Django REST Framework, utilizing Celery and Redis to handle resilient transaction scheduling and background reconciliation.',
    longDescription:
      'Playto is an asynchronous financial dispatch service built to manage batched disbursements. It isolates long-running payment gateway communications from the HTTP request cycle using distributed worker queues, ensuring system responsiveness and idempotent execution.',
    technologies: [
      'Python',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'Celery',
      'Redis',
    ],
    role: 'Backend Developer',
    timeline: '2024',
    status: 'Completed',
    highlights: [
      'Constructed distributed task workflows using Celery and Redis broker to offload batch payout dispatches asynchronously.',
      'Implemented idempotency key mechanisms across payment initiation endpoints to guarantee zero duplicate charges.',
      'Designed transactional database models in PostgreSQL with ACID guarantees for balance ledgers and payout logs.',
      'Configured automated retry policies with exponential backoff for intermittent third-party network failures.',
    ],
    architecturePoints: [
      'Celery worker pooling configured with Redis pub/sub broker and dedicated dead-letter task queues.',
      'PostgreSQL row-level locking (select_for_update) to prevent race conditions during account balance deductions.',
      'Django REST Framework serialization pipelines with comprehensive validation against schema drift.',
    ],
    slug: 'playto',
    mockupType: 'flow',
  },
];

export const SECONDARY_PROJECTS = [
  {
    title: 'Luminar ExamHub',
    category: 'Academic System',
    technologies: ['Java', 'JSP', 'Servlets', 'MySQL', 'MVC'],
    description:
      'MVC-based examination portal managing scheduled student evaluations, role-based examiner permissions, and automated scoring reports.',
  },
  {
    title: 'Traffic Management System',
    category: 'Connected Platform',
    technologies: ['Django', 'REST APIs', 'Java/Kotlin Android', 'PostgreSQL'],
    description:
      'Centralized urban traffic reporting platform with an Android client and Django backend delivering 8+ RESTful APIs for real-time incident alerts.',
  },
];
