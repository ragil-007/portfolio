'use client';

import React, { useEffect } from 'react';
import { Download, ExternalLink, Mail, MapPin, Phone, X } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/navigation';
import { EXPERIENCES } from '@/data/experience';
import { EDUCATION_LIST, CERTIFICATIONS } from '@/data/education';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink-primary/70 backdrop-blur-sm transition-all duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-surface rounded-2xl border border-rule-subtle shadow-lift flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Modal Top Bar */}
        <div className="px-5 py-4 border-b border-rule-subtle bg-canvas-subtle flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-status-live" />
            <h2 id="resume-title" className="font-mono text-xs uppercase tracking-wider text-ink-primary font-bold">
              Official Resume Document — {PERSONAL_INFO.name}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Ragil_KP_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-ink-primary text-canvas hover:bg-accent transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-ink-secondary hover:text-ink-primary hover:bg-canvas-muted transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Paper Document Preview */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#FAF9F6] text-ink-primary font-sans leading-relaxed text-sm">
          {/* Resume Header */}
          <div className="border-b border-rule-subtle pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-base text-accent font-medium mt-0.5">
                  {PERSONAL_INFO.role}
                </p>
                <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-ink-secondary mt-2 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {PERSONAL_INFO.address}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" />
                    {PERSONAL_INFO.phone}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5" />
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded border border-rule-medium hover:border-ink-primary text-ink-secondary hover:text-ink-primary flex items-center gap-1 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded border border-rule-medium hover:border-ink-primary text-ink-secondary hover:text-ink-primary flex items-center gap-1 transition-colors"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-5 text-xs sm:text-sm text-ink-secondary bg-canvas-subtle p-3.5 rounded-lg border border-rule-subtle">
              <strong className="text-ink-primary">Professional Summary: </strong>
              IT and Software professional with experience in technical support, application support, production systems, server troubleshooting, deployment, databases, and software development. Skilled in Linux, Windows, DNS, Java, Spring Boot, Python, Django, REST APIs, SQL, Git, and troubleshooting. Experienced in production support, software development, testing, documentation, and IT operations.
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-muted">
              <span className="text-accent font-bold">[01]</span>
              <span>Professional Experience</span>
              <div className="flex-1 h-px bg-rule-subtle ml-2" />
            </div>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.company + exp.role} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-semibold text-ink-primary text-sm sm:text-base">
                      {exp.role} <span className="text-ink-muted font-normal">at</span> {exp.company}
                    </span>
                    <span className="font-mono text-2xs sm:text-xs text-ink-secondary">
                      {exp.period} • {exp.location}
                    </span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-ink-secondary">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certification Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-muted">
              <span className="text-accent font-bold">[02]</span>
              <span>Education & Certification</span>
              <div className="flex-1 h-px bg-rule-subtle ml-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.degree} className="p-3.5 rounded-lg border border-rule-subtle bg-white">
                  <div className="font-semibold text-ink-primary text-xs sm:text-sm">
                    {edu.degree}
                  </div>
                  <div className="text-xs text-accent mt-0.5">{edu.institution}</div>
                  <div className="font-mono text-2xs text-ink-muted mt-1">{edu.period}</div>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-lg border border-rule-subtle bg-white flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-ink-primary block">
                  {CERTIFICATIONS[0].title}
                </span>
                <span className="text-2xs font-mono text-ink-muted">
                  Issued by {CERTIFICATIONS[0].issuer} • {CERTIFICATIONS[0].date}
                </span>
              </div>
              <span className="text-2xs font-mono px-2 py-0.5 rounded bg-status-liveBg text-status-live">
                ACCREDITED
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-rule-subtle bg-canvas-subtle flex items-center justify-between text-2xs font-mono text-ink-muted">
          <span>Primary Contact: {PERSONAL_INFO.email}</span>
          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Ragil_KP_Resume.pdf"
            className="text-accent hover:underline flex items-center gap-1"
          >
            <Download className="w-3 h-3" />
            Direct Download
          </a>
        </div>
      </div>
    </div>
  );
}
