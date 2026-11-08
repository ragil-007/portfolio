'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EXPERIENCES } from '@/data/experience';
import { Calendar, CheckCircle2, MapPin, Briefcase } from 'lucide-react';
import { Reveal, HoverLift } from '@/components/animations/Reveal';

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

        <div className="relative space-y-12 sm:space-y-16">
          {/* Subtle vertical timeline connecting hairline for desktop */}
          <div
            className="hidden lg:block absolute left-[31.5%] top-4 bottom-8 w-px bg-rule-subtle -z-0"
            aria-hidden="true"
          />

          {EXPERIENCES.map((exp, index) => (
            <Reveal key={exp.company + exp.role} delay={index * 0.08}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-12 border-b border-rule-subtle last:border-b-0 group relative">
                {/* Left Column: Role, Company & Meta (4 cols) */}
                <div className="lg:col-span-4 space-y-3.5 relative">
                  {/* Timeline node for desktop */}
                  <div
                    className="hidden lg:block absolute -right-[29px] top-2 w-3.5 h-3.5 rounded-full border-2 border-accent bg-canvas group-hover:bg-accent transition-colors shadow-2xs z-10"
                    aria-hidden="true"
                  />

                  <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
                    <span className="text-accent font-semibold">[0{index + 1}]</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-rule-strong" />
                    <span className="uppercase tracking-wider text-2xs sm:text-xs">{exp.type}</span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-ink-primary font-sans group-hover:text-ink-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-base font-serif italic text-accent mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="space-y-1 font-mono text-xs text-ink-secondary pt-0.5">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-ink-muted shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-ink-muted shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Tech tag list */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-canvas-subtle border border-rule-subtle font-mono text-2xs text-ink-secondary hover:border-rule-strong hover:bg-surface transition-all select-none"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Narrative & Key Responsibilities (8 cols) */}
                <div className="lg:col-span-8 space-y-4">
                  {exp.description && (
                    <div className="p-4 rounded-xl bg-canvas-subtle/50 border border-rule-subtle text-sm sm:text-base text-ink-primary font-medium leading-relaxed font-sans">
                      {exp.description}
                    </div>
                  )}

                  <div className="space-y-3 pt-1">
                    <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block font-semibold">
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
