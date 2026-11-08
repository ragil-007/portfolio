'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SKILL_CATEGORIES } from '@/data/skills';
import { Check } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 scroll-mt-20 border-t border-rule-subtle bg-canvas-subtle/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            number="04"
            tag="Technical Competencies"
            title="Core Skills & Practical Competencies"
            subtitle="Categorized technical capabilities derived strictly from my verified IT support experience, software development roles, and project repositories."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category, index) => {
            const isLastOnLg = index === 4;
            return (
              <Reveal
                key={category.category}
                delay={index * 0.08}
                className={isLastOnLg ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <div className="p-6 sm:p-7 rounded-2xl border border-rule-subtle bg-surface shadow-subtle flex flex-col justify-between space-y-5 hover:border-rule-medium transition-colors h-full">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between font-mono text-xs text-ink-muted">
                      <span className="text-accent font-semibold">[0{index + 1}]</span>
                      <span className="uppercase tracking-widest text-2xs">DOMAIN FOCUS</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-ink-primary font-sans">
                      {category.category}
                    </h3>
                    <p className="text-xs text-ink-secondary leading-relaxed font-sans">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div className="pt-2 border-t border-rule-subtle">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`flex items-center gap-2 p-2 rounded-lg border text-xs font-mono transition-colors ${
                            skill.highlight
                              ? 'bg-canvas-subtle/80 border-rule-medium text-ink-primary font-medium'
                              : 'bg-white border-rule-subtle text-ink-secondary'
                          }`}
                        >
                          <Check
                            className={`w-3.5 h-3.5 shrink-0 ${
                              skill.highlight ? 'text-accent' : 'text-ink-muted'
                            }`}
                          />
                          <span className="truncate">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Note on genuine experience */}
        <Reveal delay={0.3}>
          <div className="mt-12 p-4 rounded-xl border border-rule-subtle bg-surface text-center max-w-xl mx-auto font-mono text-2xs text-ink-muted">
            All listed skills reflect real-world tasks performed in Level 1 technical support, software internships, or documented codebases.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
