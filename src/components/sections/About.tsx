'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Cpu, Server, Headphones, Wrench } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 scroll-mt-20 border-t border-rule-subtle bg-canvas-subtle/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            number="02"
            tag="About Me"
            title="Technical operations meet software development."
            subtitle="How practical experience in web hosting, application support, and backend development shapes my approach to building dependable digital products."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-ink-secondary leading-relaxed font-sans">
            <Reveal delay={0.1}>
              <p className="text-ink-primary font-medium text-lg sm:text-xl leading-relaxed">
                I&apos;m a developer with a background in technical operations and software development. My experience spans application support, backend development, REST API engineering, and building full-stack applications.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p>
                Having worked across both IT support and software development environments, I bring a unique, practical perspective to engineering. At UnifyCX, I provided Level 1 technical support for a web-hosting company—investigating issues involving Linux hosting environments, DNS configurations, cPanel, and business applications while documenting tickets and coordinating escalations. That experience grounded me in the fundamentals of how web infrastructure operates and what end users experience when systems fail.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p>
                In backend and full-stack software development, I&apos;ve contributed to production-grade applications using Java and Spring Boot at Luminar Technolab, and Python with Django at Riss Technologies. From developing 15+ RESTful services and improving query performance by ~25% to engineering real-time AI tools with Whisper and Next.js, I focus on writing clean, well-tested, maintainable code.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p>
                I enjoy understanding how systems work beneath the surface, solving practical problems with curiosity, and continuously learning new technologies.
              </p>
            </Reveal>

            {/* Core Pillars */}
            <Reveal delay={0.3}>
              <div className="pt-6 border-t border-rule-subtle">
                <span className="font-mono text-2xs uppercase tracking-widest text-ink-muted block mb-4">
                  // CORE STRENGTHS & PERSPECTIVES
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-rule-subtle bg-surface space-y-1.5">
                    <div className="flex items-center gap-2 text-ink-primary font-medium text-sm">
                      <Headphones className="w-4 h-4 text-accent" />
                      <span>Support & Systems Intuition</span>
                    </div>
                    <p className="text-xs text-ink-secondary leading-normal">
                      Hands-on troubleshooting of Linux servers, DNS, cPanel, and user-facing application inquiries.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-rule-subtle bg-surface space-y-1.5">
                    <div className="flex items-center gap-2 text-ink-primary font-medium text-sm">
                      <Server className="w-4 h-4 text-accent" />
                      <span>Backend & API Engineering</span>
                    </div>
                    <p className="text-xs text-ink-secondary leading-normal">
                      Developing resilient REST APIs, data validation logic, and secure authentication in Spring Boot and Django.
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
                      Primary Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {['Java', 'Spring Boot', 'Python', 'Django', 'REST APIs', 'MySQL', 'Linux', 'cPanel', 'TypeScript', 'Next.js'].map((t) => (
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
                      Availability Status
                    </span>
                    <p className="text-xs text-status-live font-medium mt-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-status-live animate-pulse" />
                      Open to Software Developer & Technical Support opportunities
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
