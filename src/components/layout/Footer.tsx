'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Code } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/navigation';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-canvas border-t border-rule-subtle mt-20 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-rule-subtle">
          <div className="max-w-md">
            <span className="font-mono text-2xs uppercase tracking-widest text-accent font-semibold block mb-2">
              // CRAFT & RESILIENCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-normal text-ink-primary tracking-tight font-sans">
              RAGIL KP
            </h3>
            <p className="mt-2 text-sm text-ink-secondary leading-relaxed font-sans">
              Software developer building practical backend architectures, distributed services, and responsive web applications. Based in Dubai, UAE.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-rule-medium hover:border-ink-primary text-ink-secondary hover:text-ink-primary bg-surface transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-rule-medium hover:border-ink-primary text-ink-secondary hover:text-ink-primary bg-surface transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.hackerrankUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-rule-medium hover:border-ink-primary text-ink-secondary hover:text-ink-primary bg-surface transition-colors"
                aria-label="HackerRank Profile"
              >
                <Code className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-full border border-rule-medium hover:border-ink-primary text-ink-secondary hover:text-ink-primary bg-surface transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rule-subtle bg-canvas-subtle hover:bg-canvas-muted text-ink-primary text-xs font-mono transition-colors group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-2xs text-ink-muted">
          <div className="flex items-center gap-2">
            <span>© {currentYear} RAGIL KP.</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Designed & Built Independently</span>
            <span className="text-rule-strong">•</span>
            <span>Next.js • TypeScript • SCSS</span>
            <span className="text-rule-strong">•</span>
            <span>Dubai, UAE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
