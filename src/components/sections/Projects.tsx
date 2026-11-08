'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, CheckCircle } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectMockup } from '@/components/ui/ProjectMockup';
import { PROJECTS, SECONDARY_PROJECTS } from '@/data/projects';
import { Reveal } from '@/components/animations/Reveal';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'backend'>('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'fullstack') {
      return proj.category.includes('Full-Stack') || proj.category.includes('AI');
    }
    if (activeFilter === 'backend') {
      return proj.category.includes('Backend') || proj.category.includes('Distributed');
    }
    return true;
  });

  return (
    <section id="work" className="py-24 sm:py-32 scroll-mt-20 border-t border-rule-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              number="01"
              tag="Selected Projects"
              title="Practical engineering, built with purpose."
              subtitle="A selection of full-stack platforms, backend architectures, asynchronous engines, and AI integrations."
            />

            {/* Filter Pills */}
            <div className="flex items-center gap-2 p-1 rounded-full bg-surface border border-rule-subtle self-start md:self-auto mb-8 md:mb-16">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-ink-primary text-canvas font-medium'
                    : 'text-ink-secondary hover:text-ink-primary'
                }`}
              >
                All ({PROJECTS.length})
              </button>
              <button
                onClick={() => setActiveFilter('fullstack')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
                  activeFilter === 'fullstack'
                    ? 'bg-ink-primary text-canvas font-medium'
                    : 'text-ink-secondary hover:text-ink-primary'
                }`}
              >
                Full-Stack & AI
              </button>
              <button
                onClick={() => setActiveFilter('backend')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
                  activeFilter === 'backend'
                    ? 'bg-ink-primary text-canvas font-medium'
                    : 'text-ink-secondary hover:text-ink-primary'
                }`}
              >
                Backend & Systems
              </button>
            </div>
          </div>
        </Reveal>

        {/* Projects List (Alternating Editorial Layout) */}
        <div className="space-y-24 sm:space-y-32">
          {filteredProjects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <Reveal key={project.id} delay={0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group">
                  {/* Visual Mockup column (7 cols) */}
                  <div
                    className={`lg:col-span-7 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <ProjectMockup type={project.mockupType} title={project.title} />
                  </div>

                  {/* Details Column (5 cols) */}
                  <div
                    className={`lg:col-span-5 space-y-6 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {/* Top Index & Tag */}
                    <div className="flex items-center justify-between font-mono text-xs">
                      <div className="flex items-center gap-2 text-ink-muted">
                        <span className="text-accent font-bold text-sm">[{project.number}]</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-rule-strong" />
                        <span className="uppercase tracking-wider">{project.category}</span>
                      </div>

                      <span
                        className={`px-2.5 py-0.5 rounded-full text-2xs font-mono uppercase tracking-wider ${
                          project.status === 'Completed'
                            ? 'bg-status-liveBg text-status-live'
                            : 'bg-canvas-subtle text-ink-secondary border border-rule-subtle'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Project Title & Tagline */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink-primary font-sans">
                        {project.title}
                      </h3>
                      <p className="text-sm font-serif italic text-accent mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-2 pt-1">
                      <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block">
                        Core Implementation Highlights
                      </span>
                      <ul className="space-y-2 text-xs text-ink-secondary font-sans">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                            <span className="leading-normal">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Pills */}
                    <div className="pt-2">
                      <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block mb-2">
                        Technologies & Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-canvas-subtle border border-rule-subtle text-ink-primary font-mono text-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* GitHub Link (if available) */}
                    {project.githubUrl && (
                      <div className="pt-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-rule-strong hover:border-ink-primary text-ink-primary text-xs font-mono font-medium transition-colors shadow-subtle group/btn"
                        >
                          <Github className="w-4 h-4 text-accent" />
                          <span>Inspect Repository on GitHub</span>
                          <ExternalLink className="w-3.5 h-3.5 text-ink-muted group-hover/btn:text-ink-primary transition-colors" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Secondary Projects Section */}
        <Reveal delay={0.2}>
          <div className="mt-28 pt-16 border-t border-rule-subtle">
            <div className="mb-8">
              <span className="font-mono text-2xs uppercase tracking-widest text-ink-muted block mb-1">
                // ADDITIONAL BUILDS & RESEARCH
              </span>
              <h4 className="text-xl sm:text-2xl font-semibold text-ink-primary">
                Other Notable Projects
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SECONDARY_PROJECTS.map((secondary) => (
                <div
                  key={secondary.title}
                  className="p-6 rounded-xl border border-rule-subtle bg-surface hover:border-rule-medium transition-colors space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h5 className="font-semibold text-base text-ink-primary">
                      {secondary.title}
                    </h5>
                    <span className="font-mono text-2xs px-2 py-0.5 rounded bg-canvas-subtle text-ink-muted border border-rule-subtle">
                      {secondary.category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    {secondary.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {secondary.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-canvas-subtle font-mono text-2xs text-ink-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
