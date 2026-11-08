'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Cpu, Server } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 scroll-mt-20 border-t border-rule-subtle bg-canvas-subtle/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            number="02"
            tag="About Me"
            title="Curiosity-driven engineering with real-world foundations."
            subtitle="How an academic background in computer applications and hands-on systems operations shaped my approach to software development."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-ink-secondary leading-relaxed font-sans">
            <Reveal delay={0.1}>
              <p className="text-ink-primary font-medium text-lg sm:text-xl leading-relaxed">
                I am a software developer based in Dubai, UAE, with a solid academic foundation in Computer Applications (MCA & BCA) and practical experience across backend engineering, web services, and IT operations.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p>
                My journey into software wasn&apos;t just about writing code in isolation. Working as a Tech Operations Associate at UnifyCX exposed me to real-world infrastructure—diagnosing server-level issues, managing Linux hosting environments, troubleshooting DNS configurations, and supporting business-critical systems. That experience taught me early on that software doesn&apos;t end at the compiler; it lives in production, where reliability, clear error handling, and uptime matter.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p>
                Building upon that operational intuition, I transitioned directly into software development. Through intensive development roles and internships at Luminar Technolab and Riss Technologies, I focused on constructing reliable REST APIs with Java (Spring Boot) and Python (Django), fine-tuning database queries, and structuring secure role-based systems with JWT and JPA/Hibernate.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p>
                Today, I enjoy working across the modern stack—from crafting performant Next.js interfaces with TypeScript and exploring low-latency AI integrations with Whisper and Llama, to designing clean relational database schemas. I approach every project with curiosity, an appetite to learn, and an honest commitment to clean, maintainable architecture.
              </p>
            </Reveal>

            {/* Guiding Principles */}
            <Reveal delay={0.3}>
              <div className="pt-6 border-t border-rule-subtle">
                <span className="font-mono text-2xs uppercase tracking-widest text-ink-muted block mb-4">
                  // GUIDING PRACTICES
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-rule-subtle bg-surface space-y-1.5">
                    <div className="flex items-center gap-2 text-ink-primary font-medium text-sm">
                      <Server className="w-4 h-4 text-accent" />
                      <span>Operational Thinking</span>
                    </div>
                    <p className="text-xs text-ink-secondary leading-normal">
                      Informed by IT operations experience: building systems that are straightforward to monitor, debug, and maintain.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-rule-subtle bg-surface space-y-1.5">
                    <div className="flex items-center gap-2 text-ink-primary font-medium text-sm">
                      <Cpu className="w-4 h-4 text-accent" />
                      <span>Pragmatic Architecture</span>
                    </div>
                    <p className="text-xs text-ink-secondary leading-normal">
                      Strict separation of concerns via DTOs, secure role boundaries, and reliable relational data models.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial At-a-Glance Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.2} direction="left">
              <div className="p-6 sm:p-7 rounded-2xl border border-rule-subtle bg-surface shadow-subtle space-y-6">
                <div className="flex items-center justify-between border-b border-rule-subtle pb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-ink-primary font-semibold">
                    Quick Facts
                  </span>
                  <span className="font-mono text-2xs px-2 py-0.5 rounded bg-canvas-subtle text-accent border border-rule-subtle">
                    RAGIL KP
                  </span>
                </div>

                <div className="space-y-4 text-xs font-sans">
                  <div>
                    <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block">
                      Current Location
                    </span>
                    <p className="text-sm font-medium text-ink-primary mt-0.5">
                      Al Qusais, Dubai, United Arab Emirates
                    </p>
                  </div>

                  <div className="w-full h-px bg-rule-subtle" />

                  <div>
                    <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block">
                      Higher Education
                    </span>
                    <p className="text-sm font-medium text-ink-primary mt-0.5">
                      Master of Computer Applications (MCA)
                    </p>
                    <p className="text-xs text-ink-secondary">
                      Srinivas Institute of Technology (2023 – 2024)
                    </p>
                  </div>

                  <div className="w-full h-px bg-rule-subtle" />

                  <div>
                    <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block">
                      Undergraduate Degree
                    </span>
                    <p className="text-sm font-medium text-ink-primary mt-0.5">
                      Bachelor of Computer Applications (BCA)
                    </p>
                    <p className="text-xs text-ink-secondary">
                      Kannur University (2018 – 2021)
                    </p>
                  </div>

                  <div className="w-full h-px bg-rule-subtle" />

                  <div>
                    <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block">
                      Primary Development Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {['Java', 'Spring Boot', 'Python', 'Django', 'TypeScript', 'Next.js', 'MySQL', 'PostgreSQL', 'Linux'].map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded bg-canvas-subtle border border-rule-subtle font-mono text-2xs text-ink-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="w-full h-px bg-rule-subtle" />

                  <div>
                    <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block">
                      Current Opportunity Status
                    </span>
                    <p className="text-xs text-status-live font-medium mt-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-status-live animate-pulse" />
                      Available for full-time software engineering roles in Dubai / UAE & Remote
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
