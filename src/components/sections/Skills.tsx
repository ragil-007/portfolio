'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SKILL_CATEGORIES } from '@/data/skills';
import { Check } from 'lucide-react';
import { Reveal, HoverLift } from '@/components/animations/Reveal';
import { motion, AnimatePresence } from 'motion/react';

const FILTER_TABS = [
  { id: 'all', label: `All (${SKILL_CATEGORIES.length})` },
  { id: 'support', label: 'Support & Ops' },
  { id: 'systems', label: 'Systems & Network' },
  { id: 'business', label: 'Business Apps' },
  { id: 'development', label: 'Software Dev' },
  { id: 'databases', label: 'Databases & Tools' },
] as const;

type FilterId = (typeof FILTER_TABS)[number]['id'];

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<FilterId>('all');

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'support') return cat.category.toLowerCase().includes('support');
    if (selectedCategory === 'systems') return cat.category.toLowerCase().includes('systems');
    if (selectedCategory === 'business') return cat.category.toLowerCase().includes('business');
    if (selectedCategory === 'development') return cat.category.toLowerCase().includes('software');
    if (selectedCategory === 'databases') return cat.category.toLowerCase().includes('databases');
    return true;
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

            {/* Interactive Domain Filter Bar with smooth sliding active pill & horizontal touch swipe on mobile */}
            <div className="w-full md:w-auto overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 mb-8 md:mb-16">
              <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-surface border border-rule-subtle shadow-subtle min-w-max relative" role="tablist" aria-label="Skills domain filter">
                {FILTER_TABS.map((tab) => {
                  const isSelected = selectedCategory === tab.id;
                  return (
                    <button
                      key={tab.id}
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setSelectedCategory(tab.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-colors duration-200 relative focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                        isSelected
                          ? 'text-canvas font-medium'
                          : 'text-ink-secondary hover:text-ink-primary'
                      }`}
                    >
                      {isSelected && (
                        <motion.span
                          layoutId="activeSkillTab"
                          className="absolute inset-0 bg-ink-primary rounded-xl z-0 shadow-2xs"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
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
