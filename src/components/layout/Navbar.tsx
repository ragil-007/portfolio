'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '@/data/navigation';
import { ResumeModal } from '@/components/ui/ResumeModal';
import { formatDubaiTime } from '@/lib/utils';

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('work');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>('16:00');

  useEffect(() => {
    // Set time initially and run interval
    setCurrentTime(formatDubaiTime());
    const timeInterval = setInterval(() => {
      setCurrentTime(formatDubaiTime());
    }, 10000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_ITEMS.map((item) => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearInterval(timeInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-canvas/90 backdrop-blur-md border-b border-rule-subtle shadow-subtle py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Identity */}
          <a
            href="#"
            className="group flex items-center gap-2.5 transition-transform active:scale-98"
          >
            <div className="w-8 h-8 rounded-lg bg-ink-primary text-canvas flex items-center justify-center font-mono text-xs font-bold tracking-tighter group-hover:bg-accent transition-colors">
              RK
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-semibold tracking-tight text-ink-primary text-sm sm:text-base group-hover:text-accent transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-mono text-2xs text-ink-muted hidden sm:inline">
                {PERSONAL_INFO.role}
              </span>
            </div>
          </a>

          {/* Center Info: Live Dubai Time & Status */}
          <div className="hidden lg:flex items-center gap-3 px-3 py-1.5 rounded-full bg-canvas-subtle border border-rule-subtle font-mono text-2xs text-ink-secondary">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-status-live animate-pulse" />
              <span>DUBAI, UAE</span>
            </span>
            <span className="text-rule-strong">•</span>
            <span>{currentTime} GST</span>
            <span className="text-rule-strong">•</span>
            <span className="text-status-live font-medium">AVAILABLE</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-surface/70 backdrop-blur-sm px-2 py-1 rounded-full border border-rule-subtle shadow-subtle">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 relative ${
                    isActive
                      ? 'text-canvas bg-ink-primary font-medium'
                      : 'text-ink-secondary hover:text-ink-primary hover:bg-canvas-subtle'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium rounded-full border border-rule-medium hover:border-ink-primary bg-surface hover:bg-canvas-subtle text-ink-primary transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-mono font-medium rounded-full bg-ink-primary text-canvas hover:bg-accent transition-all duration-200 shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setResumeOpen(true)}
              className="px-2.5 py-1 text-2xs font-mono rounded-lg border border-rule-medium text-ink-primary flex items-center gap-1"
            >
              <FileText className="w-3 h-3 text-accent" />
              <span>Resume</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ink-primary hover:bg-canvas-subtle border border-rule-subtle transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-canvas/95 backdrop-blur-lg pt-24 px-6 flex flex-col justify-between pb-8 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            <div className="font-mono text-2xs uppercase tracking-widest text-ink-muted mb-2">
              // Navigation
            </div>
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 border-b border-rule-subtle text-lg font-sans text-ink-primary hover:text-accent transition-colors"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-ink-muted">[0{idx + 1}]</span>
              </a>
            ))}
          </nav>

          <div className="space-y-4 pt-6">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-canvas-subtle border border-rule-subtle font-mono text-2xs text-ink-secondary">
              <span className="w-2 h-2 rounded-full bg-status-live animate-pulse" />
              <span>Dubai, UAE • {currentTime} GST • Available</span>
            </div>

            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setResumeOpen(true);
                }}
                className="w-full py-2.5 rounded-lg border border-rule-strong text-ink-primary font-medium text-center hover:bg-canvas-subtle"
              >
                View Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-lg bg-ink-primary text-canvas font-medium text-center hover:bg-accent"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Resume Document Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
