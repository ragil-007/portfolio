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
  Radio,
  Server,
  ShieldCheck,
  UserCheck,
  Users,
  Zap,
} from 'lucide-react';

interface ProjectMockupProps {
  type?: 'dashboard' | 'terminal' | 'exam' | 'voter' | 'traffic';
  title: string;
}

export function ProjectMockup({ type = 'dashboard', title }: ProjectMockupProps) {
  const [activeTab, setActiveTab] = useState<'ui' | 'code'>('ui');

  if (type === 'dashboard') {
    // Immuna - Digital Immunization System
    return (
      <div className="w-full rounded-xl bg-surface border border-rule-subtle shadow-lift overflow-hidden text-xs font-sans transition-all duration-300">
        {/* Top window bar */}
        <div className="bg-canvas-subtle px-4 py-2.5 border-b border-rule-subtle flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rule-medium" />
            <div className="w-2.5 h-2.5 rounded-full bg-rule-medium" />
            <div className="w-2.5 h-2.5 rounded-full bg-rule-medium" />
            <span className="ml-2 font-mono text-2xs text-ink-muted">
              immuna-vaccine-management.vercel.app
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-2xs text-ink-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-status-live animate-pulse" />
            <span>JWT AUTHENTICATED</span>
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
              Patient ID: #IM-2025-0841 • Age: 2 yrs • Vaccination Schedule
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('ui')}
              className={`px-2.5 py-1 rounded text-2xs font-mono transition-colors ${
                activeTab === 'ui'
                  ? 'bg-ink-primary text-canvas'
                  : 'text-ink-secondary hover:bg-canvas-subtle'
              }`}
            >
              Vaccine Schedule
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-2.5 py-1 rounded text-2xs font-mono transition-colors ${
                activeTab === 'code'
                  ? 'bg-ink-primary text-canvas'
                  : 'text-ink-secondary hover:bg-canvas-subtle'
              }`}
            >
              REST Response
            </button>
          </div>
        </div>

        {/* Content body */}
        {activeTab === 'ui' ? (
          <div className="p-4 sm:p-5 space-y-3 bg-white">
            {/* Record 1 */}
            <div className="p-3 rounded-lg border border-rule-subtle bg-canvas-subtle/50 flex items-center justify-between gap-2">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-status-live">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium text-ink-primary">
                    MMR (Measles, Mumps, Rubella) — Dose 1
                  </div>
                  <div className="text-2xs text-ink-muted font-mono mt-0.5">
                    Batch: #MR-8924 • Administered: Oct 14, 2024
                  </div>
                </div>
              </div>
              <span className="px-2 py-0.5 text-2xs font-mono rounded bg-status-liveBg text-status-live shrink-0">
                COMPLETED
              </span>
            </div>

            {/* Record 2 */}
            <div className="p-3 rounded-lg border border-accent/20 bg-accent-soft/30 flex items-center justify-between gap-2">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-accent">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium text-ink-primary">
                    Hepatitis B — Booster Dose
                  </div>
                  <div className="text-2xs text-ink-muted font-mono mt-0.5">
                    Scheduled Window: Nov 15 - Nov 30 • Automated alert armed
                  </div>
                </div>
              </div>
              <span className="px-2 py-0.5 text-2xs font-mono rounded bg-accent/10 text-accent font-medium shrink-0">
                UPCOMING
              </span>
            </div>

            {/* Record 3 */}
            <div className="p-3 rounded-lg border border-rule-subtle bg-white flex items-center justify-between gap-2">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-ink-muted">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium text-ink-primary">
                    IPV (Inactivated Polio Vaccine) — Dose 2
                  </div>
                  <div className="text-2xs text-ink-muted font-mono mt-0.5">
                    Eligibility: After MMR verification • Recommended interval: 6 weeks
                  </div>
                </div>
              </div>
              <span className="px-2 py-0.5 text-2xs font-mono rounded bg-canvas-muted text-ink-secondary shrink-0">
                SCHEDULED
              </span>
            </div>
          </div>
        ) : (
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

        {/* Footer info bar */}
        <div className="px-4 py-2.5 bg-canvas-subtle border-t border-rule-subtle flex items-center justify-between text-2xs font-mono text-ink-muted">
          <span>Stack: Spring Boot • Spring Security • JWT • MySQL • Vue.js</span>
          <span className="text-status-live font-medium">LIVE DEMO AVAILABLE</span>
        </div>
      </div>
    );
  }

  if (type === 'terminal') {
    // Meeting Assistant - AI Realtime Transcription
    return (
      <div className="w-full rounded-xl bg-ink-primary border border-ink-secondary/20 shadow-lift overflow-hidden text-canvas font-mono text-2xs">
        {/* Terminal Header */}
        <div className="bg-black/50 px-4 py-2.5 border-b border-canvas/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 text-canvas/50">meeting-assistant-realtime</span>
          </div>
          <div className="flex items-center gap-2 text-canvas/60">
            <Mic className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span>MIC: STREAMING</span>
          </div>
        </div>

        {/* Live Audio & Model Stats Bar */}
        <div className="px-4 py-3 bg-black/30 border-b border-canvas/10 grid grid-cols-2 sm:grid-cols-3 gap-2 text-2xs">
          <div>
            <span className="text-canvas/40 block">STT ENGINE</span>
            <span className="text-canvas/90 font-medium">Whisper Large V3 (Groq API)</span>
          </div>
          <div>
            <span className="text-canvas/40 block">LATENCY</span>
            <span className="text-status-live font-medium">Sub-second Live Stream</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-canvas/40 block">CONVERSATIONAL AI</span>
            <span className="text-accent font-medium">Llama 3.3 70B</span>
          </div>
        </div>

        {/* Live audio stream simulation */}
        <div className="p-4 sm:p-5 space-y-4">
          <div className="space-y-1">
            <div className="text-canvas/40 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>LIVE MICROPHONE TRANSCRIPT STREAM:</span>
            </div>
            <div className="bg-canvas/5 p-3 rounded border border-canvas/10 text-canvas/90 font-sans text-xs leading-relaxed">
              &quot;...in today&apos;s sprint update, we confirmed the REST API endpoints and data validation rules. The upcoming release schedule is finalized for next Thursday.&quot;
            </div>
          </div>

          {/* AI Extracted Action Items */}
          <div className="space-y-1.5">
            <div className="text-accent flex items-center gap-1.5">
              <Zap className="w-3 h-3" />
              <span>CONTEXTUAL AI SUGGESTIONS:</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-start gap-2 bg-black/40 p-2.5 rounded border border-canvas/5 font-sans text-2xs text-canvas/80">
                <span className="text-accent font-mono font-bold">[SUGGESTION]</span>
                <span>Document the verified REST API parameters in Postman before the sprint signoff.</span>
              </div>
              <div className="flex items-start gap-2 bg-black/40 p-2.5 rounded border border-canvas/5 font-sans text-2xs text-canvas/80">
                <span className="text-status-live font-mono font-bold">[ACTION]</span>
                <span>Coordinate with testing team for Thursday release validation.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-black/60 border-t border-canvas/10 flex items-center justify-between text-canvas/40">
          <span>Next.js • TypeScript • React • Tailwind CSS • Groq API</span>
          <span className="text-accent">github.com/ragil-007</span>
        </div>
      </div>
    );
  }

  if (type === 'exam') {
    // Luminar ExamHub
    return (
      <div className="w-full rounded-xl bg-surface border border-rule-subtle shadow-subtle p-4 font-sans text-xs space-y-3">
        <div className="flex items-center justify-between border-b border-rule-subtle pb-2">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-accent" />
            <span className="font-semibold text-ink-primary">Luminar ExamHub Portal</span>
          </div>
          <span className="font-mono text-2xs px-2 py-0.5 rounded bg-canvas-subtle text-ink-secondary">
            MVC / JSP
          </span>
        </div>
        <div className="space-y-2 text-2xs text-ink-secondary">
          <div className="p-2.5 rounded bg-canvas-subtle flex items-center justify-between">
            <span className="font-medium text-ink-primary">Active Exam Session: Java & Spring Basics</span>
            <span className="font-mono text-status-live">Scheduled</span>
          </div>
          <div className="flex items-center justify-between text-ink-muted font-mono pt-1">
            <span>Role-Based Permissions: Student / Examiner / Admin</span>
            <span>MySQL Backend</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'voter') {
    // Voter Verification
    return (
      <div className="w-full rounded-xl bg-surface border border-rule-subtle shadow-subtle p-4 font-sans text-xs space-y-3">
        <div className="flex items-center justify-between border-b border-rule-subtle pb-2">
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-accent" />
            <span className="font-semibold text-ink-primary">Booth Level Officer System</span>
          </div>
          <span className="font-mono text-2xs px-2 py-0.5 rounded bg-canvas-subtle text-ink-secondary">
            Servlets / JSP
          </span>
        </div>
        <div className="space-y-2 text-2xs text-ink-secondary">
          <div className="p-2.5 rounded bg-canvas-subtle flex items-center justify-between">
            <span className="font-medium text-ink-primary">Constituency Form Batch: BLO District #4</span>
            <span className="font-mono text-accent">In Verification</span>
          </div>
          <div className="flex items-center justify-between text-ink-muted font-mono pt-1">
            <span>Form Distribution & Collection Tracking</span>
            <span>Relational MySQL</span>
          </div>
        </div>
      </div>
    );
  }

  // Wolverine Traffic Management System
  return (
    <div className="w-full rounded-xl bg-surface border border-rule-subtle shadow-subtle p-4 font-sans text-xs space-y-3">
      <div className="flex items-center justify-between border-b border-rule-subtle pb-2">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-accent" />
          <span className="font-semibold text-ink-primary">Wolverine Road Safety & Traffic</span>
        </div>
        <span className="font-mono text-2xs px-2 py-0.5 rounded bg-canvas-subtle text-ink-secondary">
          Android + Django REST
        </span>
      </div>
      <div className="space-y-2 text-2xs text-ink-secondary">
        <div className="p-2.5 rounded bg-canvas-subtle flex items-center justify-between">
          <span className="font-medium text-ink-primary">Real-Time Alert: Roadblock & Traffic Signal Divert</span>
          <span className="font-mono text-status-live">Active Route Alert</span>
        </div>
        <div className="flex items-center justify-between text-ink-muted font-mono pt-1">
          <span>Crowdsourced Incident Reporting & Voice Guidance</span>
          <span>REST API</span>
        </div>
      </div>
    </div>
  );
}
