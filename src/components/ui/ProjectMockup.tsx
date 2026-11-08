'use client';

import React, { useState } from 'react';
import {
  Activity,
  CheckCircle2,
  Clock,
  Database,
  FileCheck,
  GraduationCap,
  Layers,
  MapPin,
  Mic,
  Play,
  Pause,
  Radio,
  Server,
  ShieldCheck,
  UserCheck,
  Users,
  Zap,
  ExternalLink,
} from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectMockupProps {
  type?: 'dashboard' | 'terminal' | 'exam' | 'voter' | 'traffic';
  title: string;
}

export function ProjectMockup({ type = 'dashboard', title }: ProjectMockupProps) {
  // Immuna state
  const [immunaTab, setImmunaTab] = useState<'schedule' | 'api' | 'security'>('schedule');

  // Meeting assistant state
  const [isStreaming, setIsStreaming] = useState<boolean>(true);
  const [copiedSuggestion, setCopiedSuggestion] = useState<boolean>(false);

  // Compact card tab states
  const [examTab, setExamTab] = useState<'schedule' | 'roles'>('schedule');

  if (type === 'dashboard') {
    // Immuna - Digital Immunization System
    return (
      <div className="w-full rounded-xl bg-surface border border-rule-subtle shadow-lift overflow-hidden text-xs font-sans transition-all duration-300 hover:border-rule-medium">
        {/* Top window bar */}
        <div className="bg-canvas-subtle px-4 py-2.5 border-b border-rule-subtle flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rule-medium" />
            <div className="w-2.5 h-2.5 rounded-full bg-rule-medium" />
            <div className="w-2.5 h-2.5 rounded-full bg-rule-medium" />
            <span className="ml-2 font-mono text-2xs text-ink-muted truncate max-w-[180px] sm:max-w-none">
              immuna-vaccine-management.vercel.app
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-2xs text-ink-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-status-live animate-pulse" />
            <span className="hidden sm:inline">SPRING SECURITY</span>
            <span>JWT ACTIVE</span>
          </div>
        </div>

        {/* Dashboard header */}
        <div className="p-4 sm:p-5 bg-white border-b border-rule-subtle flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-ink-primary text-sm sm:text-base">
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

          <div className="flex items-center gap-1.5 bg-canvas-subtle p-1 rounded-lg border border-rule-subtle">
            <button
              onClick={() => setImmunaTab('schedule')}
              className={`px-2.5 py-1 rounded text-2xs font-mono transition-colors ${
                immunaTab === 'schedule'
                  ? 'bg-ink-primary text-canvas font-medium shadow-subtle'
                  : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              Vaccine Schedule
            </button>
            <button
              onClick={() => setImmunaTab('api')}
              className={`px-2.5 py-1 rounded text-2xs font-mono transition-colors ${
                immunaTab === 'api'
                  ? 'bg-ink-primary text-canvas font-medium shadow-subtle'
                  : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              REST Response
            </button>
            <button
              onClick={() => setImmunaTab('security')}
              className={`px-2.5 py-1 rounded text-2xs font-mono transition-colors ${
                immunaTab === 'security'
                  ? 'bg-ink-primary text-canvas font-medium shadow-subtle'
                  : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              RBAC Matrix
            </button>
          </div>
        </div>

        {/* Content body based on active tab */}
        {immunaTab === 'schedule' && (
          <div className="p-4 sm:p-5 space-y-3 bg-white">
            {/* Record 1 */}
            <div className="p-3 rounded-lg border border-rule-subtle bg-canvas-subtle/50 flex items-center justify-between gap-2 hover:bg-canvas-subtle transition-colors">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-status-live">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium text-ink-primary">
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
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-accent">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium text-ink-primary">
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
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-ink-muted">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium text-ink-primary">
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
          </div>
        )}

        {immunaTab === 'api' && (
          <div className="p-4 sm:p-5 bg-ink-primary text-canvas font-mono text-2xs overflow-x-auto leading-relaxed">
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
          </div>
        )}

        {immunaTab === 'security' && (
          <div className="p-4 sm:p-5 bg-white space-y-3">
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
          </div>
        )}

        {/* Footer info bar */}
        <div className="px-4 py-2.5 bg-canvas-subtle border-t border-rule-subtle flex items-center justify-between text-2xs font-mono text-ink-muted">
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
    return (
      <div className="w-full rounded-xl bg-ink-primary border border-ink-secondary/20 shadow-lift overflow-hidden text-canvas font-mono text-2xs">
        {/* Terminal Header */}
        <div className="bg-black/50 px-4 py-2.5 border-b border-canvas/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 text-canvas/60">meeting-assistant-realtime</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsStreaming(!isStreaming)}
              className="px-2 py-0.5 rounded bg-canvas/10 hover:bg-canvas/20 text-2xs text-canvas/80 flex items-center gap-1 transition-colors"
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
        <div className="px-4 py-3 bg-black/30 border-b border-canvas/10 grid grid-cols-2 sm:grid-cols-3 gap-2 text-2xs">
          <div>
            <span className="text-canvas/40 block">STT ENGINE</span>
            <span className="text-canvas/90 font-medium">Whisper Large V3 (Groq)</span>
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
        <div className="p-4 sm:p-5 space-y-4">
          <div className="space-y-1.5">
            <div className="text-canvas/40 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${isStreaming ? 'bg-accent animate-pulse' : 'bg-canvas/40'}`} />
                <span>MICROPHONE AUDIO TRANSCRIPT STREAM:</span>
              </div>
              {/* Simulated visualizer bars */}
              <div className="flex items-center gap-0.5 h-3">
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

          {/* AI Extracted Contextual Suggestions */}
          <div className="space-y-1.5">
            <div className="text-accent flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Zap className="w-3 h-3" />
                <span>LLAMA 3.3 CONTEXTUAL SUGGESTIONS:</span>
              </div>
              <span className="text-2xs text-canvas/40 font-mono">CONFIDENCE: 98%</span>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-start gap-2 bg-black/40 p-2.5 rounded-lg border border-canvas/5 font-sans text-2xs text-canvas/85">
                <span className="text-accent font-mono font-bold shrink-0">[ACTION]</span>
                <span>Document the verified REST API parameters in Postman before the sprint signoff.</span>
              </div>
              <div className="flex items-start gap-2 bg-black/40 p-2.5 rounded-lg border border-canvas/5 font-sans text-2xs text-canvas/85">
                <span className="text-status-live font-mono font-bold shrink-0">[DECISION]</span>
                <span>Finalize test coverage on role authorization filters prior to Thursday deployment.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-black/60 border-t border-canvas/10 flex items-center justify-between text-canvas/40">
          <span>Next.js &bull; TypeScript &bull; React &bull; Tailwind CSS &bull; Groq API</span>
          <span className="text-accent">github.com/ragil-007</span>
        </div>
      </div>
    );
  }

  if (type === 'exam') {
    // Luminar ExamHub
    return (
      <div className="w-full rounded-xl bg-surface border border-rule-subtle shadow-subtle p-4 font-sans text-xs space-y-3 hover:border-rule-medium transition-colors">
        <div className="flex items-center justify-between border-b border-rule-subtle pb-2">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-accent" />
            <span className="font-semibold text-ink-primary">Luminar ExamHub Portal</span>
          </div>
          <span className="font-mono text-2xs px-2 py-0.5 rounded bg-canvas-subtle text-ink-secondary border border-rule-subtle">
            MVC &bull; JSP
          </span>
        </div>
        <div className="space-y-2 text-2xs text-ink-secondary">
          <div className="p-2.5 rounded-lg bg-canvas-subtle flex items-center justify-between">
            <span className="font-medium text-ink-primary">Active Exam: Java & Spring Boot Core</span>
            <span className="font-mono text-status-live bg-status-liveBg px-2 py-0.5 rounded">Scheduled</span>
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
        </div>
      </div>
    );
  }

  if (type === 'voter') {
    // Voter Verification
    return (
      <div className="w-full rounded-xl bg-surface border border-rule-subtle shadow-subtle p-4 font-sans text-xs space-y-3 hover:border-rule-medium transition-colors">
        <div className="flex items-center justify-between border-b border-rule-subtle pb-2">
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-accent" />
            <span className="font-semibold text-ink-primary">Booth Level Officer System</span>
          </div>
          <span className="font-mono text-2xs px-2 py-0.5 rounded bg-canvas-subtle text-ink-secondary border border-rule-subtle">
            Servlets &bull; JSP
          </span>
        </div>
        <div className="space-y-2 text-2xs text-ink-secondary">
          <div className="p-2.5 rounded-lg bg-canvas-subtle flex items-center justify-between">
            <span className="font-medium text-ink-primary">Constituency Batch: District #4 BLO Forms</span>
            <span className="font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">In Verification</span>
          </div>
          <div className="grid grid-cols-2 gap-2 font-mono text-2xs pt-1">
            <div className="p-2 rounded bg-white border border-rule-subtle">
              <span className="text-ink-muted block text-3xs">CONTROLLER</span>
              <span className="text-ink-primary font-medium">Java HttpServlet</span>
            </div>
            <div className="p-2 rounded bg-white border border-rule-subtle">
              <span className="text-ink-muted block text-3xs">RECORDS</span>
              <span className="text-ink-primary font-medium">Voter Form Enumeration</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Wolverine Traffic Management System
  return (
    <div className="w-full rounded-xl bg-surface border border-rule-subtle shadow-subtle p-4 font-sans text-xs space-y-3 hover:border-rule-medium transition-colors">
      <div className="flex items-center justify-between border-b border-rule-subtle pb-2">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-accent" />
          <span className="font-semibold text-ink-primary">Wolverine Road Safety & Traffic</span>
        </div>
        <span className="font-mono text-2xs px-2 py-0.5 rounded bg-canvas-subtle text-ink-secondary border border-rule-subtle">
          Android &bull; Django REST
        </span>
      </div>
      <div className="space-y-2 text-2xs text-ink-secondary">
        <div className="p-2.5 rounded-lg bg-canvas-subtle flex items-center justify-between">
          <span className="font-medium text-ink-primary">Live Traffic Feed: Roadblock & Signal Alert</span>
          <span className="font-mono text-status-live bg-status-liveBg px-2 py-0.5 rounded">Active Alert</span>
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
      </div>
    </div>
  );
}
