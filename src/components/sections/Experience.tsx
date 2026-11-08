'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EXPERIENCES } from '@/data/experience';
import { Calendar, CheckCircle2, MapPin } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 scroll-mt-20 border-t border-rule-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            number="03"
            tag="Work History"
            title="Professional Experience & Technical Roles"
            subtitle="Real-world engineering, production operations, and backend development experience from my verified employment history."
          />
        </Reveal>

        <div className="space-y-12 sm:space-y-16">
          {EXPERIENCES.map((exp, index) => (
            <Reveal key={exp.company + exp.role} delay={index * 0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 pb-12 border-b border-rule-subtle last:border-b-0 group">
                {/* Left Column: Role, Company & Meta (4 cols) */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
                    <span className="text-accent font-semibold">[0{index + 1}]</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-rule-strong" />
                    <span className="uppercase tracking-wider">{exp.type}</span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-ink-primary font-sans">
                      {exp.role}
                    </h3>
                    <div className="text-base font-serif italic text-accent mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="space-y-1 font-mono text-xs text-ink-secondary pt-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-ink-muted" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-ink-muted" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Tech tag list */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-canvas-subtle border border-rule-subtle font-mono text-2xs text-ink-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Narrative & Key Responsibilities (8 cols) */}
                <div className="lg:col-span-8 space-y-4">
                  {exp.description && (
                    <p className="text-sm sm:text-base text-ink-primary font-medium leading-relaxed font-sans">
                      {exp.description}
                    </p>
                  )}

                  <div className="space-y-3 pt-1">
                    <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block">
                      Key Deliverables & Responsibilities
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary font-sans leading-relaxed">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
