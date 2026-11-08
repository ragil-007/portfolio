# Ragil KP — Personal Developer Portfolio

> **Production-grade personal developer portfolio** built for Ragil KP, Software Developer based in Dubai, UAE.

Designed with an editorial, minimalist aesthetic inspired by high-craft creative developer portfolios. Built strictly around verified experience from Ragil's resume, highlighting backend architectures (Java, Spring Boot, Python, Django), real-time AI tools (Next.js, Groq, Whisper, Llama 3.3), and production IT operations (Linux, DNS, web hosting).

---

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing throughout)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Sass / SCSS](https://sass-lang.com/)
- **Animation**: [Motion for React](https://motion.dev/) (`motion/react`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Document Preview**: Authentic PDF resume embedded with in-app viewer & direct download

---

## 🎨 Visual Design Direction

- **Palette**: Warm off-white canvas (`#FAF9F5`), charcoal primary ink (`#161615`), soft muted secondary text (`#5C5B57`), subtle warm hairlines (`#E7E6E0`), single restrained warm terracotta accent (`#D0532C`), and live status emerald green (`#2E7D4E`).
- **Typography**: Clean grotesque sans-serif paired with monospaced accents (`[01]`, metadata tags, live Dubai clock) and subtle serif accents.
- **Composition**: Asymmetric editorial layout with generous whitespace, hairline grid borders, and bespoke visual mockups (no generic stock photography).
- **Motion**: Subtle entrance reveals, stagger lists, and scroll progress indicator respecting `prefers-reduced-motion`.

---

## 📂 Project Architecture

```
src/
├── app/
│   ├── globals.scss         # Global SCSS, design tokens, utility classes
│   ├── icon.svg             # Dynamic SVG favicon
│   ├── layout.tsx           # Root layout with SEO and Open Graph metadata
│   ├── not-found.tsx        # Branded 404 handler
│   └── page.tsx             # Master page assembling all sections
├── components/
│   ├── animations/
│   │   └── Reveal.tsx       # Motion for React viewport reveal & stagger helpers
│   ├── layout/
│   │   ├── Navbar.tsx       # Floating blur nav with live Dubai time and section spy
│   │   └── Footer.tsx       # Minimalist editorial footer with back-to-top
│   ├── sections/
│   │   ├── Hero.tsx         # Asymmetric editorial introduction with status indicator
│   │   ├── Projects.tsx     # Flagship projects showcase with category filters
│   │   ├── About.tsx        # Career narrative (Tech Ops to Software Engineering)
│   │   ├── Experience.tsx   # Verified career timeline (UnifyCX, Luminar, Riss)
│   │   ├── Skills.tsx       # 4 core domain matrices without arbitrary percentage bars
│   │   ├── Education.tsx    # MCA (SIT), BCA (Kannur), AWS Certification
│   │   └── Contact.tsx      # Direct mailto, clipboard copy, LinkedIn & GitHub
│   └── ui/
│       ├── SectionHeading.tsx  # Editorial section heading with index tags
│       ├── ProjectMockup.tsx   # Bespoke interactive UI & architecture diagrams
│       └── ResumeModal.tsx     # In-app full resume reader with instant download
├── data/
│   ├── navigation.ts        # Navigation links & personal contact constants
│   ├── projects.ts          # Immuna, Meeting Assistant, TailorPro, Playto
│   ├── experience.ts        # Work history from resume
│   ├── skills.ts            # Categorized skills matrix
│   └── education.ts         # Degrees & AWS certification
├── lib/
│   └── utils.ts             # Dubai time formatter and class merger
└── types/
    └── index.ts             # TypeScript interfaces for data models
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
# or
bun install
```

### 2. Start local development server
```bash
npm run dev
# or
bun run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production build
```bash
npm run build
npm run start
```
