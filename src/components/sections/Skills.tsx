'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SKILL_CATEGORIES } from '@/data/skills';
import { Check, Filter } from 'lucide-react';
import { Reveal, HoverLift } from '@/components/animations/Reveal';
import { motion, AnimatePresence } from 'motion/react';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (selectedCategory === 'all') return true;
    return cat.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <section id="skills" className="py-24 sm:py-32 scroll-mt-20 border-t border-rule-subtle bg-canvas-subtle/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              number="04"
              tag="Technical Competencies"
              title="Core Skills & Practical Competencies"
              subtitle="Categorized technical capabilities derived strictly from my verified IT support experience, software development roles, and project repositories."
            />

            {/* Interactive Domain Filter Bar */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-surface border border-rule-subtle shadow-subtle self-start md:self-auto mb-8 md:mb-16">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                  selectedCategory === 'all'
                    ? 'bg-ink-primary text-canvas font-medium shadow-2xs'
                    : 'text-ink-secondary hover:text-ink-primary'
                }`}
              >
                All ({SKILL_CATEGORIES.length})
              </button>
              <button
                onClick={() => setSelectedCategory('support')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                  selectedCategory === 'support'
                    ? 'bg-ink-primary text-canvas font-medium shadow-2xs'
                    : 'text-ink-secondary hover:text-ink-primary'
                }`}
              >
                Support & Ops
              </button>
              <button
                onClick={() => setSelectedCategory('systems')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                  selectedCategory === 'systems'
                    ? 'bg-ink-primary text-canvas font-medium shadow-2xs'
                    : 'text-ink-secondary hover:text-ink-primary'
                }`}
              >
                Systems & Network
              </button>
              <button
                onClick={() => setSelectedCategory('development')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                  selectedCategory === 'development'
                    ? 'bg-ink-primary text-canvas font-medium shadow-2xs'
                    : 'text-ink-secondary hover:text-ink-primary'
                }`}
              >
                Software Dev
              </button>
              <button
                onClick={() => setSelectedCategory('databases')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                  selectedCategory === 'databases'
                    ? 'bg-ink-primary text-canvas font-medium shadow-2xs'
                    : 'text-ink-secondary hover:text-ink-primary'
                }`}
              >
                Databases & Tools
              </button>
            </div>
          </div>
        </Reveal>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, index) => {
              const isLastOnLg = filteredCategories.length === 5 && index === 4;
              return (
                <motion.div
                  layout
                  key={category.category}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className={isLastOnLg ? 'md:col-span-2 lg:col-span-1' : ''}
                >
                  <HoverLift yOffset={-3}>
                    <div className="p-6 sm:p-7 rounded-2xl border border-rule-subtle bg-surface shadow-subtle flex flex-col justify-between space-y-5 hover:border-rule-medium hover:shadow-float transition-all duration-200 h-full">
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
                              className={`flex items-center gap-2 p-2 rounded-lg border text-xs font-mono transition-all duration-150 select-none ${
                                skill.highlight
                                  ? 'bg-canvas-subtle/80 border-rule-medium text-ink-primary font-medium hover:bg-canvas-subtle hover:border-ink-muted'
                                  : 'bg-white border-rule-subtle text-ink-secondary hover:border-rule-medium'
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
                  </HoverLift>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Note on genuine experience */}
        <Reveal delay={0.2}>
          <div className="mt-12 p-4 rounded-xl border border-rule-subtle bg-surface text-center max-w-xl mx-auto font-mono text-2xs text-ink-muted shadow-subtle">
            All listed skills reflect real-world tasks performed in Level 1 technical support, software internships, or documented codebases.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
