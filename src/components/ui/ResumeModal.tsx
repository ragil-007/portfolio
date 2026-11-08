'use client';

import React, { useEffect } from 'react';
import { Download, ExternalLink, Mail, MapPin, Phone, X } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/navigation';
import { EXPERIENCES } from '@/data/experience';
import { EDUCATION_LIST, CERTIFICATIONS } from '@/data/education';
import { motion, AnimatePresence } from 'motion/react';

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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink-primary/70 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full max-w-4xl max-h-[92vh] bg-surface rounded-2xl border border-rule-subtle shadow-lift flex flex-col overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-title"
          >
            {/* Modal Top Bar */}
            <div className="px-3 sm:px-5 py-3 sm:py-4 border-b border-rule-subtle bg-canvas-subtle flex items-center justify-between gap-2 shrink-0">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-2.5 h-2.5 rounded-full bg-status-live shrink-0" />
                <h2 id="resume-title" className="font-mono text-2xs sm:text-xs uppercase tracking-wider text-ink-primary font-bold truncate">
                  Official Resume Document — {PERSONAL_INFO.name}
                </h2>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Ragil_KP_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-ink-primary text-canvas hover:bg-accent transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download PDF</span>
                  <span className="sm:hidden">PDF</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-ink-secondary hover:text-ink-primary hover:bg-canvas-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Close resume modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body / Paper Document Preview */}
            <div className="p-4 sm:p-6 md:p-10 overflow-y-auto space-y-6 sm:space-y-8 bg-[#FAF9F6] text-ink-primary font-sans leading-relaxed text-sm">
              {/* Resume Header */}
              <div className="border-b border-rule-subtle pb-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
                      {PERSONAL_INFO.name}
                    </h1>
                    <p className="text-xs sm:text-sm text-accent font-mono font-medium mt-0.5">
                      IT SUPPORT ENGINEER | IT COORDINATOR | TECHNICAL OPERATIONS
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
                  IT and technical operations professional with experience in Level 1 chat-based technical support, application support, web-hosting environments, and software development. Skilled in troubleshooting website, hosting, and application-related issues; documenting incidents; tracking support requests; and coordinating escalations. Familiar with Windows, Linux, DNS, TCP/IP fundamentals, cPanel, Microsoft 365, Pega CRM, and ticketing systems. Strong foundation in technical documentation, user assistance, issue resolution, and deployment support, with a customer-focused approach and willingness to learn new IT systems and processes.
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

              {/* Technical Projects Summary */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-muted">
                  <span className="text-accent font-bold">[02]</span>
                  <span>Key Technical Projects</span>
                  <div className="flex-1 h-px bg-rule-subtle ml-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-lg border border-rule-subtle bg-white space-y-1">
                    <div className="font-semibold text-ink-primary text-xs sm:text-sm">
                      Immuna – Digital Immunization Management System
                    </div>
                    <div className="text-2xs font-mono text-accent">Spring Boot, Vue.js, MySQL, REST APIs</div>
                    <p className="text-xs text-ink-secondary">
                      Full-stack immunization tracking application with 12+ RESTful APIs, JWT role-based access, and automated vaccination schedule alerts.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg border border-rule-subtle bg-white space-y-1">
                    <div className="font-semibold text-ink-primary text-xs sm:text-sm">
                      Meeting Assistant Realtime
                    </div>
                    <div className="text-2xs font-mono text-accent">Next.js, TypeScript, Groq API, Whisper Large V3, Llama 3.3</div>
                    <p className="text-xs text-ink-secondary">
                      Live microphone speech-to-text meeting transcription and contextual AI suggestions powered by Groq and Llama 3.3 70B.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education & Certification Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-muted">
                  <span className="text-accent font-bold">[03]</span>
                  <span>Education &amp; Certification</span>
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
            <div className="px-5 py-3 border-t border-rule-subtle bg-canvas-subtle flex items-center justify-between text-2xs font-mono text-ink-muted shrink-0">
              <span>Primary Contact: {PERSONAL_INFO.email}</span>
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Ragil_KP_Resume.pdf"
                className="text-accent hover:underline flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
              >
                <Download className="w-3 h-3" />
                Direct Download
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
