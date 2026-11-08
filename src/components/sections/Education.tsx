import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EDUCATION_LIST, CERTIFICATIONS } from '@/data/education';
import { Award, CheckCircle, GraduationCap } from 'lucide-react';
import { Reveal, HoverLift } from '@/components/animations/Reveal';

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 scroll-mt-20 border-t border-rule-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            number="05"
            tag="Academic Foundation"
            title="Education & Credentials"
            subtitle="Formal degree qualifications in computer applications and verified technical certifications."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Higher Education Degrees (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {EDUCATION_LIST.map((edu, idx) => (
              <Reveal key={edu.degree} delay={idx * 0.08}>
                <HoverLift yOffset={-3}>
                  <div className="p-5 sm:p-8 rounded-2xl border border-rule-subtle bg-surface shadow-subtle space-y-4 hover:border-rule-medium hover:shadow-float transition-all duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2.5 rounded-xl bg-canvas-subtle text-accent border border-rule-subtle">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-ink-primary font-sans">
                            {edu.degree}
                          </h3>
                          <p className="text-xs sm:text-sm text-accent font-serif italic">
                            {edu.institution}
                          </p>
                        </div>
                      </div>

                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-canvas-subtle text-ink-secondary border border-rule-subtle self-start sm:self-auto font-medium">
                        {edu.period}
                      </span>
                    </div>

                    {edu.highlights && (
                      <ul className="space-y-2 pt-2 border-t border-rule-subtle text-xs sm:text-sm text-ink-secondary font-sans leading-relaxed">
                        {edu.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </HoverLift>
              </Reveal>
            ))}
          </div>

          {/* Right Column: Certifications & Continuing Education (4 cols) */}
          <div className="lg:col-span-4 space-y-6 w-full">
            <Reveal delay={0.16} direction="left">
              <HoverLift yOffset={-3}>
                <div className="p-5 sm:p-7 rounded-2xl border border-rule-subtle bg-surface shadow-subtle space-y-5 hover:border-rule-medium hover:shadow-float transition-all duration-200">
                  <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="uppercase tracking-wider font-semibold">Accredited Credentials</span>
                  </div>

                  <div className="space-y-4">
                    {CERTIFICATIONS.map((cert) => (
                      <div key={cert.title} className="p-4 rounded-xl bg-canvas-subtle/70 border border-rule-subtle space-y-1 hover:bg-canvas-subtle transition-colors">
                        <span className="text-xs font-semibold text-ink-primary block leading-snug">
                          {cert.title}
                        </span>
                        <span className="font-mono text-2xs text-ink-muted block">
                          Platform: {cert.issuer}
                        </span>
                        <div className="pt-2 flex items-center justify-between font-mono text-2xs">
                          <span className="text-status-live font-medium flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-status-live" />
                            VERIFIED COURSE
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-2xs text-ink-muted font-sans leading-relaxed border-t border-rule-subtle">
                    Commitment to ongoing learning in distributed architectures, containerization, and modern cloud deployment methodologies.
                  </div>
                </div>
              </HoverLift>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
