'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Download, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PERSONAL_INFO } from '@/data/navigation';
import { ResumeModal } from '@/components/ui/ResumeModal';
import { Reveal } from '@/components/animations/Reveal';

export function Contact() {
  const [copied, setCopied] = useState<boolean>(false);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <section id="contact" className="py-24 sm:py-32 scroll-mt-20 border-t border-rule-subtle bg-canvas-subtle/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              number="06"
              tag="Get In Touch"
              title="Have an opportunity or want to connect? Let's talk."
              subtitle="I am currently open to full-time software developer opportunities, backend roles, and collaborative projects in Dubai, UAE and remotely."
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Direct Contact & Action Card (7 cols) */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="p-8 sm:p-10 rounded-2xl border border-rule-subtle bg-surface shadow-lift flex flex-col justify-between space-y-8 h-full">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                      <span>// DIRECT REACHOUT</span>
                    </div>

                    <div className="space-y-2">
                      <span className="font-mono text-2xs uppercase tracking-widest text-ink-muted">
                        PRIMARY EMAIL ADDRESS
                      </span>
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="text-2xl sm:text-3xl font-semibold text-ink-primary hover:text-accent font-sans transition-colors break-all"
                        >
                          {PERSONAL_INFO.email}
                        </a>
                        <button
                          onClick={handleCopyEmail}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-rule-medium hover:border-ink-primary bg-canvas-subtle text-ink-secondary hover:text-ink-primary font-mono text-xs transition-colors shrink-0"
                          title="Copy email to clipboard"
                        >
                          {copied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-status-live" />
                              <span className="text-status-live">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-sans">
                      Whether you are hiring for a software engineering role, seeking a motivated developer with strong Java/Spring & Python foundations, or wish to explore a collaboration, my inbox is always open.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-rule-subtle flex flex-wrap items-center gap-3 font-mono text-xs">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=Software%20Developer%20Opportunity%20-%20Dubai&body=Hi%20Ragil,%0D%0A%0D%0AI%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20...`}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink-primary text-canvas hover:bg-accent font-medium transition-colors shadow-subtle"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send an Email</span>
                    </a>

                    <button
                      onClick={() => setResumeOpen(true)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-rule-strong hover:border-ink-primary bg-surface hover:bg-canvas-subtle text-ink-primary font-medium transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-accent" />
                      <span>View Resume</span>
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Channels & Location Card (5 cols) */}
            <div className="lg:col-span-5">
              <Reveal delay={0.2} direction="left">
                <div className="p-8 sm:p-10 rounded-2xl border border-rule-subtle bg-surface shadow-lift flex flex-col justify-between space-y-6 h-full">
                  <div className="space-y-5">
                    <span className="font-mono text-xs uppercase tracking-wider text-ink-muted block font-semibold">
                      // PROFESSIONAL PROFILES
                    </span>

                    <div className="space-y-3">
                      <a
                        href={PERSONAL_INFO.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3.5 rounded-xl border border-rule-subtle hover:border-ink-primary bg-canvas-subtle/50 hover:bg-canvas-subtle flex items-center justify-between group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-white border border-rule-subtle text-ink-primary group-hover:text-accent transition-colors">
                            <Linkedin className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-medium text-ink-primary text-xs sm:text-sm block">
                              LinkedIn
                            </span>
                            <span className="font-mono text-2xs text-ink-muted">
                              in/ragil-raghunath
                            </span>
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-ink-primary transition-colors" />
                      </a>

                      <a
                        href={PERSONAL_INFO.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3.5 rounded-xl border border-rule-subtle hover:border-ink-primary bg-canvas-subtle/50 hover:bg-canvas-subtle flex items-center justify-between group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-white border border-rule-subtle text-ink-primary group-hover:text-accent transition-colors">
                            <Github className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-medium text-ink-primary text-xs sm:text-sm block">
                              GitHub
                            </span>
                            <span className="font-mono text-2xs text-ink-muted">
                              github.com/ragil-007
                            </span>
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-ink-primary transition-colors" />
                      </a>
                    </div>
                  </div>

                  {/* Location Badge */}
                  <div className="pt-4 border-t border-rule-subtle space-y-2">
                    <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block">
                      PHYSICAL RESIDENCE
                    </span>
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-ink-primary font-medium">
                      <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <div>
                        <span>{PERSONAL_INFO.address}</span>
                        <span className="block font-mono text-2xs text-ink-secondary font-normal mt-0.5">
                          Available for immediate on-site employment across the UAE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Document Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
