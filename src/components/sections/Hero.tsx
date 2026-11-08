'use client';

import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Check, Copy, Download, FileText, MapPin, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/navigation';
import { ResumeModal } from '@/components/ui/ResumeModal';
import { formatDubaiTime } from '@/lib/utils';
import { Reveal, ScaleButton } from '@/components/animations/Reveal';

export function Hero() {
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [dubaiTime, setDubaiTime] = useState<string>('16:00');
  const [copiedCmd, setCopiedCmd] = useState<boolean>(false);

  useEffect(() => {
    setDubaiTime(formatDubaiTime());
    const interval = setInterval(() => {
      setDubaiTime(formatDubaiTime());
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyContact = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2200);
  };

  return (
    <>
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 overflow-hidden">
        {/* Subtle architectural hairline grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#E7E6E0_1px,transparent_1px),linear-gradient(to_bottom,#E7E6E0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)]"
          aria-hidden="true"
        />

        {/* Subtle top divider line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rule-medium to-transparent" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            {/* Left Column: Editorial Headline & Narrative (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8">
              {/* Meta Label & Availability Badge */}
              <Reveal direction="down" duration={0.4} immediate>
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-rule-subtle text-ink-secondary shadow-subtle">
                    <span className="w-2 h-2 rounded-full bg-status-live animate-pulse" />
                    <span className="text-status-live font-medium uppercase tracking-wider text-2xs sm:text-xs">
                      Open to Opportunities
                    </span>
                  </span>
                  <span className="text-rule-strong hidden sm:inline">•</span>
                  <span className="text-ink-muted flex items-center gap-1 text-2xs sm:text-xs">
                    <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{PERSONAL_INFO.locationShort}</span>
                  </span>
                </div>
              </Reveal>

              {/* Main Headline with Staggered Visual Flow */}
              <Reveal delay={0.08} duration={0.55} immediate>
                <div className="space-y-3 sm:space-y-4">
                  <div className="font-mono text-xs sm:text-sm text-accent uppercase tracking-widest font-semibold flex items-center gap-2">
                    <span className="w-4 h-px bg-accent inline-block" />
                    <span>Software Developer &bull; IT Operations</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-ink-primary font-sans leading-[1.12] text-balance">
                    Building digital experiences through{' '}
                    <span className="italic font-serif text-ink-secondary">code</span>,{' '}
                    <span className="relative inline-block">
                      <span className="relative z-10 font-medium">creativity</span>
                      <span
                        className="absolute bottom-1 left-0 right-0 h-2 bg-accent/15 -z-0 rounded"
                        aria-hidden="true"
                      />
                    </span>
                    , and curiosity.
                  </h1>
                </div>
              </Reveal>

              {/* Supporting Introduction */}
              <Reveal delay={0.16} duration={0.5} immediate>
                <p className="text-sm sm:text-base md:text-lg text-ink-secondary leading-relaxed font-sans max-w-xl">
                  {PERSONAL_INFO.summary}
                </p>
              </Reveal>

              {/* Action Buttons */}
              <Reveal delay={0.24} duration={0.5} immediate>
                <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm">
                  <ScaleButton>
                    <a
                      href="#work"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink-primary text-canvas hover:bg-accent font-medium transition-all duration-200 shadow-subtle group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span>View My Work</span>
                      <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </a>
                  </ScaleButton>

                  <ScaleButton>
                    <button
                      onClick={() => setResumeOpen(true)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-rule-strong hover:border-ink-primary bg-surface hover:bg-canvas-subtle text-ink-primary font-medium transition-all duration-200 shadow-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <Download className="w-4 h-4 text-accent" />
                      <span>Resume PDF</span>
                    </button>
                  </ScaleButton>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-3 py-3 text-ink-secondary hover:text-ink-primary font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg group"
                  >
                    <span>Get in Touch</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Interactive Profile & System Snapshot Card (5 cols) */}
            <div className="lg:col-span-5 w-full">
              <Reveal delay={0.18} direction="left" duration={0.55} immediate>
                <div className="rounded-2xl border border-rule-subtle bg-surface p-4 sm:p-7 shadow-lift relative space-y-5 transition-shadow hover:shadow-float">
                  {/* Card Top Pill */}
                  <div className="flex items-center justify-between border-b border-rule-subtle pb-3.5 gap-2">
                    <div className="flex items-center gap-2 font-mono text-2xs text-ink-muted truncate">
                      <Terminal className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span className="truncate">SYSTEM PROFILE // TECH OPS & DEV</span>
                    </div>
                    <span className="font-mono text-2xs px-2 py-0.5 rounded bg-canvas-subtle text-ink-secondary border border-rule-subtle shrink-0">
                      MCA &bull; DUBAI
                    </span>
                  </div>

                  {/* Developer Spec Grid */}
                  <div className="space-y-3.5 text-xs font-sans">
                    <div>
                      <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block mb-1">
                        Core Capabilities
                      </span>
                      <p className="font-medium text-ink-primary">
                        Backend Systems &bull; REST APIs &bull; Level 1 IT Support
                      </p>
                      <p className="text-2xs text-ink-secondary mt-0.5">
                        Java (Spring Boot) &bull; Python (Django) &bull; Next.js / TypeScript &bull; Linux & cPanel
                      </p>
                    </div>

                    <div className="w-full h-px bg-rule-subtle" />

                    <div>
                      <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block mb-1">
                        Operations Experience
                      </span>
                      <p className="text-xs text-ink-secondary leading-relaxed">
                        1 year at UnifyCX troubleshooting Linux hosting, DNS records, cPanel, and business applications with ticket documentation and escalation workflows.
                      </p>
                    </div>

                    <div className="w-full h-px bg-rule-subtle" />

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block mb-1">
                          Current Timezone
                        </span>
                        <p className="font-mono text-ink-primary font-medium text-xs flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-status-live animate-pulse" />
                          <span>GST &bull; {dubaiTime}</span>
                        </p>
                      </div>
                      <div>
                        <span className="font-mono text-2xs uppercase tracking-wider text-ink-muted block mb-1">
                          Current Residence
                        </span>
                        <p className="text-ink-primary font-medium text-xs truncate">
                          Al Qusais, Dubai, UAE
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Terminal Snippet with copy interaction */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-canvas-subtle border border-rule-subtle font-mono text-2xs text-ink-secondary space-y-1.5 transition-colors group/term">
                    <div className="flex items-center justify-between text-ink-muted">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-status-live" />
                        <span>QUICK CONTACT</span>
                      </span>
                      <button
                        onClick={handleCopyContact}
                        className="text-2xs text-accent hover:underline flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
                        title="Copy email command"
                      >
                        {copiedCmd ? (
                          <>
                            <Check className="w-3 h-3 text-status-live" />
                            <span className="text-status-live">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Email</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="text-ink-primary font-mono select-all break-all">
                      $ echo &quot;{PERSONAL_INFO.email}&quot;
                    </div>
                    <div className="text-ink-muted text-2xs">
                      Available immediately for roles in UAE & remote.
                    </div>
                  </div>

                  {/* Card footer CTA */}
                  <button
                    onClick={() => setResumeOpen(true)}
                    className="w-full py-2.5 rounded-lg border border-rule-medium hover:border-ink-primary bg-white text-ink-primary text-xs font-mono font-medium flex items-center justify-center gap-2 hover:bg-canvas-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
