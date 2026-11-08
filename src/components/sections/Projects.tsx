'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, CheckCircle, ArrowUpRight, Code, Sparkles, Terminal } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectMockup } from '@/components/ui/ProjectMockup';
import { PROJECTS } from '@/data/projects';
import { PERSONAL_INFO } from '@/data/navigation';
import { Reveal, HoverLift, ScaleButton } from '@/components/animations/Reveal';

export function Projects() {
  const featuredProjects = PROJECTS.filter((p) => p.isFeatured);
  const compactProjects = PROJECTS.filter((p) => !p.isFeatured);

  return (
    <section id="work" className="py-24 sm:py-32 scroll-mt-20 border-t border-rule-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            number="01"
            tag="Selected Projects"
            title="Practical engineering, built with purpose."
            subtitle="Verified software development projects spanning full-stack web applications, AI integrations, backend services, and systems engineering."
          />
        </Reveal>

        {/* Featured Projects (Prominent Editorial Layout) */}
        <div className="space-y-24 sm:space-y-32">
          {featuredProjects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <Reveal key={project.id} delay={0.08}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group">
                  {/* Visual Mockup column (7 cols) with subtle hover lift */}
                  <div
                    className={`lg:col-span-7 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <HoverLift yOffset={-3}>
                      <ProjectMockup type={project.mockupType} title={project.title} />
                    </HoverLift>
                  </div>

                  {/* Details Column (5 cols) */}
                  <div
                    className={`lg:col-span-5 space-y-5 sm:space-y-6 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {/* Top Index & Tag */}
                    <div className="flex items-center justify-between font-mono text-xs">
                      <div className="flex items-center gap-2 text-ink-muted">
                        <span className="text-accent font-bold text-sm">[{project.number}]</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-rule-strong" />
                        <span className="uppercase tracking-wider text-2xs sm:text-xs">
                          {project.category}
                        </span>
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full text-2xs font-mono uppercase tracking-wider bg-status-liveBg text-status-live font-medium">
                        {project.status}
                      </span>
                    </div>

                    {/* Project Title & Tagline */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink-primary font-sans group-hover:text-ink-primary transition-colors">
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
                        Key Implementation Highlights
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

                    {/* Technology Pills with interactive hover */}
                    <div className="pt-2">
                      <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block mb-2">
                        Technologies & Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-canvas-subtle border border-rule-subtle text-ink-primary font-mono text-2xs hover:border-rule-strong hover:bg-surface transition-all duration-150 cursor-default select-none shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links (GitHub + Live Demo if verified) */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      {project.githubUrl && (
                        <ScaleButton>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-rule-strong hover:border-ink-primary text-ink-primary text-xs font-mono font-medium transition-colors shadow-subtle group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          >
                            <Github className="w-4 h-4 text-accent" />
                            <span>View on GitHub</span>
                            <ExternalLink className="w-3.5 h-3.5 text-ink-muted group-hover/btn:text-ink-primary transition-colors" />
                          </a>
                        </ScaleButton>
                      )}

                      {project.liveUrl && (
                        <ScaleButton>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-ink-primary text-canvas hover:bg-accent text-xs font-mono font-medium transition-colors shadow-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group/live"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight className="w-3.5 h-3.5 group-live-hover:translate-x-0.5 group-live-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        </ScaleButton>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Compact Layout for Remaining Projects */}
        <div className="mt-24 pt-16 border-t border-rule-subtle">
          <Reveal>
            <div className="mb-10">
              <span className="font-mono text-2xs uppercase tracking-widest text-ink-muted block mb-1">
                // MORE VERIFIED REPOSITORIES
              </span>
              <h4 className="text-xl sm:text-2xl font-semibold text-ink-primary">
                Additional Technical Projects
              </h4>
              <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                Academic and systems projects built with Java, Servlets, Django, and relational databases.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {compactProjects.map((project, idx) => (
              <Reveal key={project.id} delay={idx * 0.08}>
                <HoverLift yOffset={-3}>
                  <div className="p-6 rounded-2xl border border-rule-subtle bg-surface hover:border-rule-medium hover:shadow-subtle transition-all duration-200 flex flex-col justify-between space-y-5 h-full group">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between font-mono text-2xs text-ink-muted">
                        <span className="text-accent font-bold">[{project.number}]</span>
                        <span className="px-2 py-0.5 rounded bg-canvas-subtle border border-rule-subtle">
                          {project.category}
                        </span>
                      </div>

                      <div>
                        <h5 className="font-semibold text-base sm:text-lg text-ink-primary group-hover:text-accent transition-colors">
                          {project.title}
                        </h5>
                        <p className="text-xs font-serif italic text-ink-secondary mt-0.5">
                          {project.tagline}
                        </p>
                      </div>

                      <p className="text-xs text-ink-secondary leading-relaxed">
                        {project.description}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-rule-subtle">
                        <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block">
                          Highlights
                        </span>
                        <ul className="space-y-1 text-2xs text-ink-secondary">
                          {project.highlights.slice(0, 3).map((h, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-accent">•</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4 pt-3 border-t border-rule-subtle">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-canvas-subtle font-mono text-2xs text-ink-secondary hover:border-rule-medium transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-primary hover:text-accent font-medium transition-colors pt-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Inspect Repository</span>
                          <ExternalLink className="w-3 h-3 text-ink-muted" />
                        </a>
                      )}
                    </div>
                  </div>
                </HoverLift>
              </Reveal>
            ))}
          </div>

          {/* Explore More on GitHub Callout */}
          <Reveal delay={0.15}>
            <div className="mt-14 p-6 sm:p-8 rounded-2xl border border-rule-subtle bg-canvas-subtle/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-subtle hover:bg-canvas-subtle/80 transition-colors">
              <div>
                <span className="font-mono text-2xs uppercase tracking-widest text-accent font-semibold block mb-1">
                  // OPEN SOURCE CODEBASES
                </span>
                <h5 className="font-sans font-semibold text-base sm:text-lg text-ink-primary">
                  Looking for more code samples?
                </h5>
                <p className="text-xs sm:text-sm text-ink-secondary mt-0.5">
                  Explore full repositories, commit histories, and code architectures directly on GitHub.
                </p>
              </div>

              <ScaleButton>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-primary text-canvas hover:bg-accent font-mono text-xs font-medium transition-colors shrink-0 shadow-subtle group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Github className="w-4 h-4" />
                  <span>Explore more on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </ScaleButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
