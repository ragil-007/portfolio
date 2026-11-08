'use client';

import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Download, FileText, MapPin, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/navigation';
import { ResumeModal } from '@/components/ui/ResumeModal';
import { formatDubaiTime } from '@/lib/utils';
import { Reveal } from '@/components/animations/Reveal';

export function Hero() {
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [dubaiTime, setDubaiTime] = useState<string>('16:00');

  useEffect(() => {
    setDubaiTime(formatDubaiTime());
    const interval = setInterval(() => {
      setDubaiTime(formatDubaiTime());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Subtle background hairline accents */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rule-medium to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Column: Editorial Headline & Narrative (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              
              {/* Meta Label & Availability Badge */}
              <Reveal direction="down" duration={0.4}>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-subtle border border-rule-subtle text-ink-secondary">
                    <span className="w-2 h-2 rounded-full bg-status-live animate-pulse" />
                    <span className="text-status-live font-medium uppercase tracking-wider">
                      Open to Opportunities
                    </span>
                  </span>
                  <span className="text-rule-strong hidden sm:inline">•</span>
                  <span className="text-ink-muted flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    {PERSONAL_INFO.locationShort}
                  </span>
                </div>
              </Reveal>

              {/* Main Headline */}
              <Reveal delay={0.1} duration={0.6}>
                <div className="space-y-4">
                  <div className="font-mono text-xs sm:text-sm text-accent uppercase tracking-widest font-semibold">
                    Hello, I&apos;m {PERSONAL_INFO.name}
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-ink-primary font-sans leading-[1.08] text-balance">
                    Building digital experiences through{' '}
                    <span className="italic font-serif text-ink-secondary">code</span>,{' '}
                    <span className="underline decoration-accent/40 decoration-2 underline-offset-4">
                      creativity
                    </span>
                    , and curiosity.
                  </h1>
                </div>
              </Reveal>

              {/* Supporting Introduction */}
              <Reveal delay={0.2} duration={0.5}>
                <p className="text-base sm:text-lg text-ink-secondary leading-relaxed font-sans max-w-xl">
                  {PERSONAL_INFO.summary}
                </p>
              </Reveal>

              {/* Action Buttons */}
              <Reveal delay={0.3} duration={0.5}>
                <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm">
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink-primary text-canvas hover:bg-accent font-medium transition-all duration-200 shadow-subtle group"
                  >
                    <span>View My Work</span>
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  </a>

                  <button
                    onClick={() => setResumeOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-rule-strong hover:border-ink-primary bg-surface hover:bg-canvas-subtle text-ink-primary font-medium transition-all duration-200"
                  >
                    <Download className="w-4 h-4 text-accent" />
                    <span>Resume PDF</span>
                  </button>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-3 text-ink-secondary hover:text-ink-primary font-medium transition-colors"
                  >
                    <span>Get in Touch</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Editorial Profile & System Snapshot Card (5 cols) */}
            <div className="lg:col-span-5">
              <Reveal delay={0.2} direction="left" duration={0.6}>
                <div className="rounded-2xl border border-rule-subtle bg-surface p-6 sm:p-7 shadow-lift relative space-y-6">
                  
                  {/* Card Top Pill */}
                  <div className="flex items-center justify-between border-b border-rule-subtle pb-4">
                    <div className="flex items-center gap-2 font-mono text-2xs text-ink-muted">
                      <Terminal className="w-3.5 h-3.5 text-accent" />
                      <span>PROFILE // ARCHITECTURE & DEV</span>
                    </div>
                    <span className="font-mono text-2xs px-2 py-0.5 rounded bg-canvas-subtle text-ink-secondary border border-rule-subtle">
                      MCA &bull; DUBAI
                    </span>
                  </div>

                  {/* Developer Spec Grid */}
                  <div className="space-y-4 text-xs font-sans">
                    <div>
                      <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block mb-1">
                        Professional Core
                      </span>
                      <p className="font-medium text-ink-primary">
                        Backend Systems &bull; REST APIs &bull; Full-Stack Web
                      </p>
                      <p className="text-2xs text-ink-secondary mt-0.5">
                        Java (Spring Boot) &bull; Python (Django) &bull; TypeScript (React/Next.js)
                      </p>
                    </div>

                    <div className="w-full h-px bg-rule-subtle" />

                    <div>
                      <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block mb-1">
                        Production & Systems Background
                      </span>
                      <p className="text-xs text-ink-secondary leading-relaxed">
                        1 year of operational experience supporting Linux hosting, server diagnostics, DNS configurations, and enterprise workflows at UnifyCX.
                      </p>
                    </div>

                    <div className="w-full h-px bg-rule-subtle" />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block mb-1">
                          Current Timezone
                        </span>
                        <p className="font-mono text-ink-primary font-medium text-xs">
                          GST (UTC+4) &bull; {dubaiTime}
                        </p>
                      </div>
                      <div>
                        <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block mb-1">
                          Location
                        </span>
                        <p className="text-ink-primary font-medium text-xs">
                          Al Qusais, Dubai, UAE
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Interactive Terminal Quote Box */}
                  <div className="p-3.5 rounded-xl bg-canvas-subtle border border-rule-subtle font-mono text-2xs text-ink-secondary space-y-1">
                    <div className="flex items-center justify-between text-ink-muted">
                      <span>STATUS: ACTIVE_CANDIDATE</span>
                      <span className="text-status-live font-bold">&bull; VERIFIED</span>
                    </div>
                    <div className="text-ink-primary pt-1">
                      $ target_roles = [&quot;Software Developer&quot;, &quot;Backend Engineer&quot;, &quot;Full-Stack Developer&quot;]
                    </div>
                    <div className="text-ink-muted">
                      Ready to relocate or begin immediately across the UAE.
                    </div>
                  </div>

                  {/* Card footer CTA */}
                  <button
                    onClick={() => setResumeOpen(true)}
                    className="w-full py-2.5 rounded-lg border border-rule-medium hover:border-ink-primary bg-white text-ink-primary text-xs font-mono font-medium flex items-center justify-center gap-2 hover:bg-canvas-subtle transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-accent" />
                    <span>Inspect Full Resume Details</span>
                  </button>
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
