'use client';

import React, { useState } from 'react';
import {
  Activity,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  ExternalLink,
  FileCheck,
  GraduationCap,
  Mic,
  Pause,
  Play,
  Radio,
  Zap,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface ProjectMockupProps {
  type?: 'dashboard' | 'terminal' | 'exam' | 'voter' | 'traffic';
  title: string;
}

export function ProjectMockup({ type = 'dashboard', title }: ProjectMockupProps) {
  const shouldReduceMotion = useReducedMotion();

  // Immuna state
  const [immunaTab, setImmunaTab] = useState<'schedule' | 'api' | 'security'>('schedule');

  // Meeting assistant state
  const [isStreaming, setIsStreaming] = useState<boolean>(true);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // Compact card tab states
  const [examTab, setExamTab] = useState<'schedule' | 'mvc'>('schedule');
  const [voterTab, setVoterTab] = useState<'forms' | 'servlet'>('forms');
  const [trafficTab, setTrafficTab] = useState<'alerts' | 'api'>('alerts');

  const handleCopySuggestion = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => {
      setCopiedItem((curr) => (curr === id ? null : curr));
    }, 2000);
  };

  const tabTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] };

  if (type === 'dashboard') {
    // Immuna - Digital Immunization System
    return (
      <div className="w-full rounded-xl bg-surface border border-rule-subtle shadow-lift overflow-hidden text-xs font-sans transition-all duration-300 hover:border-rule-medium">
        {/* Top window bar */}
        <div className="bg-canvas-subtle px-3 sm:px-4 py-2 sm:py-2.5 border-b border-rule-subtle flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-rule-medium" />
            <div className="w-2.5 h-2.5 rounded-full bg-rule-medium" />
            <div className="w-2.5 h-2.5 rounded-full bg-rule-medium" />
            <span className="ml-1 sm:ml-2 font-mono text-2xs text-ink-muted truncate max-w-[140px] sm:max-w-none">
              immuna-vaccine-management.vercel.app
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-2xs text-ink-secondary shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-status-live animate-pulse" />
            <span className="hidden sm:inline">SPRING SECURITY</span>
            <span>JWT ACTIVE</span>
          </div>
        </div>

        {/* Dashboard header */}
        <div className="p-3.5 sm:p-5 bg-white border-b border-rule-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-ink-primary text-xs sm:text-base">
                Patient Immunization Registry
              </span>
              <span className="px-2 py-0.5 rounded-full text-2xs font-mono bg-status-liveBg text-status-live">
                Active Protocol
              </span>
            </div>
            <p className="text-2xs sm:text-xs text-ink-muted mt-0.5">
              Patient ID: #IM-2025-0841 • Age: 2 yrs • Dose Alert Protocol Active
            </p>
          </div>

          {/* Responsive / Scrollable Tab Switcher */}
          <div className="overflow-x-auto no-scrollbar -mx-1 px-1">
            <div className="flex items-center gap-1 bg-canvas-subtle p-1 rounded-lg border border-rule-subtle min-w-max" role="tablist">
              <button
                role="tab"
                aria-selected={immunaTab === 'schedule'}
                onClick={() => setImmunaTab('schedule')}
                className={`px-2.5 py-1 rounded text-2xs font-mono transition-colors relative ${
                  immunaTab === 'schedule'
                    ? 'text-canvas font-medium'
                    : 'text-ink-secondary hover:text-ink-primary'
                }`}
              >
                {immunaTab === 'schedule' && (
                  <motion.span
                    layoutId="immunaTabPill"
                    className="absolute inset-0 bg-ink-primary rounded shadow-subtle z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">Vaccine Schedule</span>
              </button>
              <button
                role="tab"
                aria-selected={immunaTab === 'api'}
                onClick={() => setImmunaTab('api')}
                className={`px-2.5 py-1 rounded text-2xs font-mono transition-colors relative ${
                  immunaTab === 'api'
                    ? 'text-canvas font-medium'
                    : 'text-ink-secondary hover:text-ink-primary'
                }`}
              >
                {immunaTab === 'api' && (
                  <motion.span
                    layoutId="immunaTabPill"
                    className="absolute inset-0 bg-ink-primary rounded shadow-subtle z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">REST Response</span>
              </button>
              <button
                role="tab"
                aria-selected={immunaTab === 'security'}
                onClick={() => setImmunaTab('security')}
                className={`px-2.5 py-1 rounded text-2xs font-mono transition-colors relative ${
                  immunaTab === 'security'
                    ? 'text-canvas font-medium'
                    : 'text-ink-secondary hover:text-ink-primary'
                }`}
              >
                {immunaTab === 'security' && (
                  <motion.span
                    layoutId="immunaTabPill"
                    className="absolute inset-0 bg-ink-primary rounded shadow-subtle z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">RBAC Matrix</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content body with smooth Motion tab transitions */}
        <AnimatePresence mode="wait">
          {immunaTab === 'schedule' && (
            <motion.div
              key="schedule"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={tabTransition}
              className="p-3.5 sm:p-5 space-y-2.5 sm:space-y-3 bg-white"
            >
              {/* Record 1 */}
              <div className="p-3 rounded-lg border border-rule-subtle bg-canvas-subtle/50 flex items-center justify-between gap-2 hover:bg-canvas-subtle transition-colors">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="mt-0.5 text-status-live">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                  </div>
                  <div>
                    <div className="font-medium text-ink-primary text-xs sm:text-sm">
                      MMR (Measles, Mumps, Rubella) — Dose 1
                    </div>
                    <div className="text-2xs text-ink-muted font-mono mt-0.5">
                      Batch: #MR-8924 • Administered: Oct 14, 2024 • Verified by Pediatric Unit
                    </div>
                  </div>
                </div>
                <span className="px-2 py-0.5 text-2xs font-mono rounded bg-status-liveBg text-status-live font-medium shrink-0">
                  COMPLETED
                </span>
              </div>

              {/* Record 2 */}
              <div className="p-3 rounded-lg border border-accent/25 bg-accent-soft/40 flex items-center justify-between gap-2 hover:bg-accent-soft/60 transition-colors">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="mt-0.5 text-accent">
                    <Clock className="w-4 h-4 shrink-0" />
                  </div>
                  <div>
                    <div className="font-medium text-ink-primary text-xs sm:text-sm">
                      Hepatitis B — Booster Dose
                    </div>
                    <div className="text-2xs text-ink-muted font-mono mt-0.5">
                      Target Window: Nov 15 - Nov 30 • Automated reminder alert armed
                    </div>
                  </div>
                </div>
                <span className="px-2 py-0.5 text-2xs font-mono rounded bg-accent/10 text-accent font-medium shrink-0">
                  UPCOMING
                </span>
              </div>

              {/* Record 3 */}
              <div className="p-3 rounded-lg border border-rule-subtle bg-white flex items-center justify-between gap-2 hover:bg-canvas-subtle/40 transition-colors">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="mt-0.5 text-ink-muted">
                    <Activity className="w-4 h-4 shrink-0" />
                  </div>
                  <div>
                    <div className="font-medium text-ink-primary text-xs sm:text-sm">
                      IPV (Inactivated Polio Vaccine) — Dose 2
                    </div>
                    <div className="text-2xs text-ink-muted font-mono mt-0.5">
                      Interval check: 6 weeks post initial dose • Eligibility confirmed
                    </div>
                  </div>
                </div>
                <span className="px-2 py-0.5 text-2xs font-mono rounded bg-canvas-muted text-ink-secondary shrink-0">
                  SCHEDULED
                </span>
              </div>
            </motion.div>
          )}

          {immunaTab === 'api' && (
            <motion.div
              key="api"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={tabTransition}
              className="p-3.5 sm:p-5 bg-ink-primary text-canvas font-mono text-2xs overflow-x-auto leading-relaxed"
            >
              <div className="text-accent mb-2">// GET /api/v1/patients/0841/immunizations - 200 OK</div>
              <pre className="text-canvas/90">
{`{
  "status": "success",
  "patientId": "IM-2025-0841",
  "totalDoses": 8,
  "completedCount": 5,
  "nextUpcoming": {
    "vaccineName": "Hepatitis B Booster",
    "dueDate": "2025-11-20",
    "status": "UPCOMING"
  },
  "rolesAllowed": ["ROLE_ADMIN", "ROLE_DOCTOR", "ROLE_USER"]
}`}
              </pre>
            </motion.div>
          )}

          {immunaTab === 'security' && (
            <motion.div
              key="security"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={tabTransition}
              className="p-3.5 sm:p-5 bg-white space-y-3"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="p-3 rounded-lg border border-rule-subtle bg-canvas-subtle/40">
                  <span className="font-mono text-2xs text-accent font-semibold block uppercase">ROLE_ADMIN</span>
                  <span className="text-ink-primary font-medium text-xs block mt-1">Full Management</span>
                  <p className="text-2xs text-ink-secondary mt-0.5">Manage vaccine schedules, clinics, and doctor authorizations.</p>
                </div>
                <div className="p-3 rounded-lg border border-rule-subtle bg-canvas-subtle/40">
                  <span className="font-mono text-2xs text-status-live font-semibold block uppercase">ROLE_DOCTOR</span>
                  <span className="text-ink-primary font-medium text-xs block mt-1">Clinical Access</span>
                  <p className="text-2xs text-ink-secondary mt-0.5">Administer doses, log lot numbers, update medical records.</p>
                </div>
                <div className="p-3 rounded-lg border border-rule-subtle bg-canvas-subtle/40">
                  <span className="font-mono text-2xs text-ink-muted font-semibold block uppercase">ROLE_USER</span>
                  <span className="text-ink-primary font-medium text-xs block mt-1">Patient Portal</span>
                  <p className="text-2xs text-ink-secondary mt-0.5">View immunization history and automated dose schedules.</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer info bar */}
        <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-canvas-subtle border-t border-rule-subtle flex flex-wrap items-center justify-between gap-2 text-2xs font-mono text-ink-muted">
          <span>Spring Boot 3 &bull; Spring Security &bull; MySQL &bull; Vue.js 3</span>
          <a
            href="https://immuna-vaccine-management.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-status-live hover:underline flex items-center gap-1 font-medium"
          >
            <span>Live Web App</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    );
  }

  if (type === 'terminal') {
    // Meeting Assistant Realtime - AI Audio Transcription
    const actionText = 'Document the verified REST API parameters in Postman before the sprint signoff.';
    const decisionText = 'Finalize test coverage on role authorization filters prior to Thursday deployment.';

    return (
      <div className="w-full rounded-xl bg-ink-primary border border-ink-secondary/20 shadow-lift overflow-hidden text-canvas font-mono text-2xs">
        {/* Terminal Header */}
        <div className="bg-black/50 px-3.5 sm:px-4 py-2 sm:py-2.5 border-b border-canvas/10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-1 sm:ml-2 text-canvas/60 truncate max-w-[140px] sm:max-w-none">
              meeting-assistant-realtime
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsStreaming(!isStreaming)}
              className="px-2 py-0.5 rounded bg-canvas/10 hover:bg-canvas/20 text-2xs text-canvas/80 flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              aria-label={isStreaming ? 'Pause streaming simulation' : 'Resume streaming simulation'}
            >
              {isStreaming ? (
                <>
                  <Pause className="w-2.5 h-2.5 text-accent" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-2.5 h-2.5 text-status-live" />
                  <span>Resume</span>
                </>
              )}
            </button>
            <div className="flex items-center gap-1.5 text-canvas/60">
              <Mic className={`w-3.5 h-3.5 ${isStreaming ? 'text-accent animate-pulse' : 'text-canvas/30'}`} />
              <span className="hidden sm:inline">{isStreaming ? 'STREAMING' : 'PAUSED'}</span>
            </div>
          </div>
        </div>

        {/* Live Audio & Model Stats Bar */}
        <div className="px-3.5 sm:px-4 py-2.5 sm:py-3 bg-black/30 border-b border-canvas/10 grid grid-cols-2 sm:grid-cols-3 gap-2 text-2xs">
          <div>
            <span className="text-canvas/40 block">STT ENGINE</span>
            <span className="text-canvas/90 font-medium truncate block">Whisper Large V3 (Groq)</span>
          </div>
          <div>
            <span className="text-canvas/40 block">STREAM LATENCY</span>
            <span className="text-status-live font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-status-live animate-ping" />
              ~260ms (Groq LPU)
            </span>
          </div>
          <div className="hidden sm:block">
            <span className="text-canvas/40 block">CONVERSATIONAL AI</span>
            <span className="text-accent font-medium">Llama 3.3 70B</span>
          </div>
        </div>

        {/* Live audio stream simulation */}
        <div className="p-3.5 sm:p-5 space-y-3.5 sm:space-y-4">
          <div className="space-y-1.5">
            <div className="text-canvas/40 flex items-center justify-between text-2xs">
              <div className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${isStreaming ? 'bg-accent animate-pulse' : 'bg-canvas/40'}`} />
                <span className="truncate">TRANSCRIPT STREAM:</span>
              </div>
              {/* Simulated visualizer bars */}
              <div className="flex items-center gap-0.5 h-3" aria-hidden="true">
                {[40, 80, 60, 100, 70, 50, 90, 30].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 bg-accent/60 rounded-full transition-all duration-150"
                    style={{
                      height: isStreaming ? `${h}%` : '20%',
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="bg-canvas/5 p-3 rounded-lg border border-canvas/10 text-canvas/90 font-sans text-xs leading-relaxed">
              &quot;...in today&apos;s sprint discussion, we confirmed the REST API endpoints and data validation rules for user verification. The deployment schedule is set for next Thursday with full integration testing.&quot;
            </div>
          </div>

          {/* AI Extracted Contextual Suggestions with interactive Copy button */}
          <div className="space-y-2">
            <div className="text-accent flex items-center justify-between text-2xs">
              <div className="flex items-center gap-1.5">
                <Zap className="w-3 h-3" />
                <span>LLAMA 3.3 CONTEXTUAL SUGGESTIONS:</span>
              </div>
              <span className="text-canvas/40 font-mono hidden sm:inline">CONFIDENCE: 98%</span>
            </div>

            <div className="space-y-2">
              {/* Action Item */}
              <div className="flex items-start justify-between gap-2 bg-black/40 p-2.5 sm:p-3 rounded-lg border border-canvas/5 font-sans text-2xs text-canvas/85 group">
                <div className="flex items-start gap-2">
                  <span className="text-accent font-mono font-bold shrink-0">[ACTION]</span>
                  <span className="leading-relaxed">{actionText}</span>
                </div>
                <button
                  onClick={() => handleCopySuggestion(actionText, 'action')}
                  className="px-2 py-1 rounded bg-canvas/10 hover:bg-canvas/20 text-canvas/70 hover:text-canvas font-mono text-3xs flex items-center gap-1 shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                  title="Copy action to clipboard"
                  aria-label="Copy action suggestion"
                >
                  {copiedItem === 'action' ? (
                    <>
                      <Check className="w-2.5 h-2.5 text-status-live" />
                      <span className="text-status-live">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-2.5 h-2.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Decision Item */}
              <div className="flex items-start justify-between gap-2 bg-black/40 p-2.5 sm:p-3 rounded-lg border border-canvas/5 font-sans text-2xs text-canvas/85 group">
                <div className="flex items-start gap-2">
                  <span className="text-status-live font-mono font-bold shrink-0">[DECISION]</span>
                  <span className="leading-relaxed">{decisionText}</span>
                </div>
                <button
                  onClick={() => handleCopySuggestion(decisionText, 'decision')}
                  className="px-2 py-1 rounded bg-canvas/10 hover:bg-canvas/20 text-canvas/70 hover:text-canvas font-mono text-3xs flex items-center gap-1 shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                  title="Copy decision to clipboard"
                  aria-label="Copy decision suggestion"
                >
                  {copiedItem === 'decision' ? (
                    <>
                      <Check className="w-2.5 h-2.5 text-status-live" />
                      <span className="text-status-live">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-2.5 h-2.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-3.5 sm:px-4 py-2 bg-black/60 border-t border-canvas/10 flex items-center justify-between text-canvas/40 text-2xs">
          <span>Next.js &bull; TypeScript &bull; React &bull; Tailwind CSS &bull; Groq API</span>
          <span className="text-accent">github.com/ragil-007</span>
        </div>
      </div>
    );
  }

  if (type === 'exam') {
    // Luminar ExamHub
    return (
      <div className="w-full rounded-xl bg-surface border border-rule-subtle shadow-subtle p-3.5 sm:p-4 font-sans text-xs space-y-3 hover:border-rule-medium transition-colors">
        <div className="flex items-center justify-between border-b border-rule-subtle pb-2 gap-2">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-accent shrink-0" />
            <span className="font-semibold text-ink-primary truncate">Luminar ExamHub Portal</span>
          </div>
          <div className="flex items-center gap-1 bg-canvas-subtle p-0.5 rounded border border-rule-subtle text-3xs font-mono">
            <button
              onClick={() => setExamTab('schedule')}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                examTab === 'schedule' ? 'bg-ink-primary text-canvas font-medium' : 'text-ink-secondary'
              }`}
            >
              Session
            </button>
            <button
              onClick={() => setExamTab('mvc')}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                examTab === 'mvc' ? 'bg-ink-primary text-canvas font-medium' : 'text-ink-secondary'
              }`}
            >
              MVC
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {examTab === 'schedule' ? (
            <motion.div
              key="schedule"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="space-y-2 text-2xs text-ink-secondary"
            >
              <div className="p-2.5 rounded-lg bg-canvas-subtle flex items-center justify-between gap-2">
                <span className="font-medium text-ink-primary truncate">Active Exam: Java & Spring Boot Core</span>
                <span className="font-mono text-status-live bg-status-liveBg px-2 py-0.5 rounded shrink-0">Scheduled</span>
              </div>
              <div className="grid grid-cols-2 gap-2 font-mono text-2xs pt-1">
                <div className="p-2 rounded bg-white border border-rule-subtle">
                  <span className="text-ink-muted block text-3xs">AUTHENTICATION</span>
                  <span className="text-ink-primary font-medium">Session & Role Auth</span>
                </div>
                <div className="p-2 rounded bg-white border border-rule-subtle">
                  <span className="text-ink-muted block text-3xs">PERSISTENCE</span>
                  <span className="text-ink-primary font-medium">MySQL Relational</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="mvc"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="space-y-2 text-2xs text-ink-secondary"
            >
              <div className="p-2 rounded bg-ink-primary text-canvas font-mono text-3xs space-y-1">
                <div className="text-accent">// MVC Architecture Pattern</div>
                <div>Model: ExamEntity, StudentDAO (JDBC/MySQL)</div>
                <div>View: JSP Templates with JSTL Expression Language</div>
                <div>Controller: HttpServlet Request Dispatcher</div>
              </div>
              <div className="p-2 rounded bg-canvas-subtle border border-rule-subtle flex items-center justify-between text-3xs font-mono">
                <span>Pattern: MVC Model 2</span>
                <span className="text-accent font-medium">Maven Build</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  if (type === 'voter') {
    // Voter Verification
    return (
      <div className="w-full rounded-xl bg-surface border border-rule-subtle shadow-subtle p-3.5 sm:p-4 font-sans text-xs space-y-3 hover:border-rule-medium transition-colors">
        <div className="flex items-center justify-between border-b border-rule-subtle pb-2 gap-2">
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-accent shrink-0" />
            <span className="font-semibold text-ink-primary truncate">Booth Level Officer System</span>
          </div>
          <div className="flex items-center gap-1 bg-canvas-subtle p-0.5 rounded border border-rule-subtle text-3xs font-mono">
            <button
              onClick={() => setVoterTab('forms')}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                voterTab === 'forms' ? 'bg-ink-primary text-canvas font-medium' : 'text-ink-secondary'
              }`}
            >
              Forms
            </button>
            <button
              onClick={() => setVoterTab('servlet')}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                voterTab === 'servlet' ? 'bg-ink-primary text-canvas font-medium' : 'text-ink-secondary'
              }`}
            >
              Servlet
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {voterTab === 'forms' ? (
            <motion.div
              key="forms"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="space-y-2 text-2xs text-ink-secondary"
            >
              <div className="p-2.5 rounded-lg bg-canvas-subtle flex items-center justify-between gap-2">
                <span className="font-medium text-ink-primary truncate">Constituency Batch: District #4 BLO Forms</span>
                <span className="font-mono text-accent bg-accent/10 px-2 py-0.5 rounded shrink-0">In Verification</span>
              </div>
              <div className="grid grid-cols-2 gap-2 font-mono text-2xs pt-1">
                <div className="p-2 rounded bg-white border border-rule-subtle">
                  <span className="text-ink-muted block text-3xs">CONTROLLER</span>
                  <span className="text-ink-primary font-medium">Java HttpServlet</span>
                </div>
                <div className="p-2 rounded bg-white border border-rule-subtle">
                  <span className="text-ink-muted block text-3xs">RECORDS</span>
                  <span className="text-ink-primary font-medium">Voter Enumeration</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="servlet"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="space-y-2 text-2xs text-ink-secondary"
            >
              <div className="p-2 rounded bg-ink-primary text-canvas font-mono text-3xs space-y-1">
                <div className="text-accent">// Form Dispatcher Flow</div>
                <div>doPost(): Validate voter ID & ward parameters</div>
                <div>Service: VoterRecordDAO.updateStatus(formId)</div>
                <div>Response: RequestDispatcher.forward(viewJSP)</div>
              </div>
              <div className="p-2 rounded bg-canvas-subtle border border-rule-subtle flex items-center justify-between text-3xs font-mono">
                <span>Architecture: Java Servlets + JSP</span>
                <span className="text-status-live font-medium">Verified Consistency</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Wolverine Traffic Management System
  return (
    <div className="w-full rounded-xl bg-surface border border-rule-subtle shadow-subtle p-3.5 sm:p-4 font-sans text-xs space-y-3 hover:border-rule-medium transition-colors">
      <div className="flex items-center justify-between border-b border-rule-subtle pb-2 gap-2">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-accent shrink-0" />
          <span className="font-semibold text-ink-primary truncate">Wolverine Road Safety & Traffic</span>
        </div>
        <div className="flex items-center gap-1 bg-canvas-subtle p-0.5 rounded border border-rule-subtle text-3xs font-mono">
          <button
            onClick={() => setTrafficTab('alerts')}
            className={`px-1.5 py-0.5 rounded transition-colors ${
              trafficTab === 'alerts' ? 'bg-ink-primary text-canvas font-medium' : 'text-ink-secondary'
            }`}
          >
            Alerts
          </button>
          <button
            onClick={() => setTrafficTab('api')}
            className={`px-1.5 py-0.5 rounded transition-colors ${
              trafficTab === 'api' ? 'bg-ink-primary text-canvas font-medium' : 'text-ink-secondary'
            }`}
          >
            REST
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {trafficTab === 'alerts' ? (
          <motion.div
            key="alerts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="space-y-2 text-2xs text-ink-secondary"
          >
            <div className="p-2.5 rounded-lg bg-canvas-subtle flex items-center justify-between gap-2">
              <span className="font-medium text-ink-primary truncate">Live Traffic Feed: Roadblock & Signal Alert</span>
              <span className="font-mono text-status-live bg-status-liveBg px-2 py-0.5 rounded shrink-0">Active Alert</span>
            </div>
            <div className="grid grid-cols-2 gap-2 font-mono text-2xs pt-1">
              <div className="p-2 rounded bg-white border border-rule-subtle">
                <span className="text-ink-muted block text-3xs">BACKEND</span>
                <span className="text-ink-primary font-medium">Django REST APIs</span>
              </div>
              <div className="p-2 rounded bg-white border border-rule-subtle">
                <span className="text-ink-muted block text-3xs">FEATURES</span>
                <span className="text-ink-primary font-medium">Voice Guidance & Alerts</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="api"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="space-y-2 text-2xs text-ink-secondary"
          >
            <div className="p-2 rounded bg-ink-primary text-canvas font-mono text-3xs space-y-1">
              <div className="text-accent">// GET /api/traffic-alerts/nearby/</div>
              <div>endpoint: /api/v1/incidents/?lat=12.97&lng=77.59</div>
              <div>payload: roadblock_type, severity, audio_cue</div>
              <div>response: 200 OK (PostgreSQL spatial coordinates)</div>
            </div>
            <div className="p-2 rounded bg-canvas-subtle border border-rule-subtle flex items-center justify-between text-3xs font-mono">
              <span>Stack: Android + Django REST</span>
              <span className="text-accent font-medium">PostgreSQL</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
