'use client';

import React, { useState } from 'react';
import {
  Activity,
  CheckCircle2,
  Clock,
  Code2,
  Cpu,
  Layers,
  Mic,
  Server,
  ShieldCheck,
  Terminal,
  Zap,
} from 'lucide-react';

interface ProjectMockupProps {
  type: 'dashboard' | 'code' | 'terminal' | 'flow';
  title: string;
}

export function ProjectMockup({ type, title }: ProjectMockupProps) {
  const [activeTab, setActiveTab] = useState<'ui' | 'schema' | 'code'>('ui');

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
              immuna.internal / portal / v1
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
              Patient ID: #IM-2025-0841 • Age: 2 yrs • Primary Clinic: Pediatric Care
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
              Patient Schedule
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
                    Scheduled Window: Nov 15 - Nov 30 • Automated SMS alert armed
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
    "status": "UPCOMING",
    "authorizedBy": "Dr. Sarah Chen, MD"
  },
  "rolesAllowed": ["ROLE_ADMIN", "ROLE_DOCTOR"]
}`}
            </pre>
          </div>
        )}

        {/* Footer info bar */}
        <div className="px-4 py-2.5 bg-canvas-subtle border-t border-rule-subtle flex items-center justify-between text-2xs font-mono text-ink-muted">
          <span>Stack: Spring Boot 3.x • Spring Security • MySQL • Vue 3</span>
          <span className="hidden sm:inline">Stateless JWT Auth</span>
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
            <span className="ml-2 text-canvas/50">ai-meeting-assistant.agent.sh</span>
          </div>
          <div className="flex items-center gap-2 text-canvas/60">
            <Mic className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span>MIC: ACTIVE [STREAMING]</span>
          </div>
        </div>

        {/* Live Audio & Model Stats Bar */}
        <div className="px-4 py-3 bg-black/30 border-b border-canvas/10 grid grid-cols-2 sm:grid-cols-3 gap-2 text-2xs">
          <div>
            <span className="text-canvas/40 block">STT ENGINE</span>
            <span className="text-canvas/90 font-medium">Whisper Large V3 (Groq)</span>
          </div>
          <div>
            <span className="text-canvas/40 block">LATENCY</span>
            <span className="text-status-live font-medium">~280ms (Real-time)</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-canvas/40 block">LLM SYNTHESIS</span>
            <span className="text-accent font-medium">Llama 3.3 70B</span>
          </div>
        </div>

        {/* Live audio stream simulation */}
        <div className="p-4 sm:p-5 space-y-4">
          <div className="space-y-1">
            <div className="text-canvas/40 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>LIVE AUDIO TRANSCRIPT STREAM [00:14:28]:</span>
            </div>
            <div className="bg-canvas/5 p-3 rounded border border-canvas/10 text-canvas/90 font-sans text-xs leading-relaxed">
              &quot;...we confirmed that migrating the background payouts to Celery and Redis eliminates
              the gateway timeout issue. For the sprint review next Tuesday, Ragil will finalize the
              idempotency middleware and publish the API metrics report.&quot;
            </div>
          </div>

          {/* AI Extracted Action Items */}
          <div className="space-y-1.5">
            <div className="text-accent flex items-center gap-1.5">
              <Zap className="w-3 h-3" />
              <span>LLAMA 3.3 70B EXTRACTED ACTION ITEMS:</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-start gap-2 bg-black/40 p-2.5 rounded border border-canvas/5 font-sans text-2xs text-canvas/80">
                <span className="text-accent font-mono font-bold">[ACTION]</span>
                <span>Finalize idempotency key validation on payout dispatches before Tuesday review.</span>
              </div>
              <div className="flex items-start gap-2 bg-black/40 p-2.5 rounded border border-canvas/5 font-sans text-2xs text-canvas/80">
                <span className="text-status-live font-mono font-bold">[DECISION]</span>
                <span>Adopt Redis task queue broker as the official async standard for the team.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-black/60 border-t border-canvas/10 flex items-center justify-between text-canvas/40">
          <span>Next.js • TypeScript • Web Audio API • Groq Cloud</span>
          <span className="text-accent">github.com/ragil-007</span>
        </div>
      </div>
    );
  }

  if (type === 'code') {
    // TailorPro - Java 17 / Spring Boot Architecture & DTO
    return (
      <div className="w-full rounded-xl bg-surface border border-rule-subtle shadow-lift overflow-hidden font-sans text-xs">
        {/* Editor tab bar */}
        <div className="bg-canvas-subtle px-4 py-2 border-b border-rule-subtle flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded border border-rule-subtle text-ink-primary font-mono text-2xs">
              <Code2 className="w-3.5 h-3.5 text-accent" />
              <span>TailorOrderController.java</span>
            </div>
            <span className="hidden sm:inline font-mono text-2xs text-ink-muted">
              OrderDTO.java
            </span>
          </div>
          <span className="font-mono text-2xs text-ink-secondary">Java 17 • Spring Boot 3</span>
        </div>

        {/* Code View */}
        <div className="p-4 sm:p-5 bg-ink-primary text-canvas font-mono text-2xs overflow-x-auto leading-relaxed">
          <pre className="text-canvas/90">
{`@RestController
@RequestMapping("/api/v1/orders")
@RequiredArgsConstructor
public class TailorOrderController {

    private final OrderManagementService orderService;

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN', 'TAILOR_MASTER')")
    public ResponseEntity<OrderResponseDTO> createBespokeOrder(
            @Valid @RequestBody CreateOrderRequestDTO request,
            @AuthenticationPrincipal UserDetails currentUser) {
        
        OrderResponseDTO created = orderService.processNewOrder(request, currentUser);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @GetMapping("/{id}/measurements")
    @PreAuthorize("hasRole('ADMIN') or @securityService.isOrderOwner(#id, principal)")
    public ResponseEntity<MeasurementProfileDTO> getMeasurements(@PathVariable Long id) {
        return ResponseEntity.ok(orderService.getOrderMeasurements(id));
    }
}`}
          </pre>
        </div>

        {/* Architectural Layers Breakdown */}
        <div className="p-4 bg-white border-t border-rule-subtle grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="p-2.5 rounded bg-canvas-subtle border border-rule-subtle">
            <span className="font-mono text-2xs text-ink-muted block uppercase">Architecture</span>
            <span className="font-medium text-ink-primary text-xs">DTO Layer Isolation</span>
          </div>
          <div className="p-2.5 rounded bg-canvas-subtle border border-rule-subtle">
            <span className="font-mono text-2xs text-ink-muted block uppercase">Security</span>
            <span className="font-medium text-ink-primary text-xs">Method-Level RBAC</span>
          </div>
          <div className="p-2.5 rounded bg-canvas-subtle border border-rule-subtle col-span-2 sm:col-span-1">
            <span className="font-mono text-2xs text-ink-muted block uppercase">Persistence</span>
            <span className="font-medium text-ink-primary text-xs">JPA / Hibernate + MySQL</span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback / Playto - Payout Engine Flow
  return (
    <div className="w-full rounded-xl bg-surface border border-rule-subtle shadow-lift overflow-hidden font-sans text-xs">
      {/* Header */}
      <div className="bg-canvas-subtle px-4 py-2.5 border-b border-rule-subtle flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-accent" />
          <span className="font-mono text-2xs text-ink-primary font-semibold">
            PLAYTO DISTRIBUTED DISPATCH PIPELINE
          </span>
        </div>
        <span className="font-mono text-2xs text-status-live flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-status-live animate-pulse" />
          CELERY WORKERS: 4 ONLINE
        </span>
      </div>

      {/* Visual Pipeline Nodes */}
      <div className="p-5 bg-white space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Step 1 */}
          <div className="p-3 rounded-lg border border-rule-subtle bg-canvas-subtle/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-2xs font-mono text-ink-muted mb-1">
                <span>STAGE 01</span>
                <Server className="w-3.5 h-3.5 text-ink-secondary" />
              </div>
              <div className="font-medium text-ink-primary text-xs">HTTP Payout Ingestion</div>
              <p className="text-2xs text-ink-secondary mt-1">
                Django REST Framework validates idempotency key & schema.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-rule-subtle font-mono text-2xs text-status-live">
              status: ACCEPTED (202)
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-3 rounded-lg border border-accent/30 bg-accent-soft/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-2xs font-mono text-accent mb-1">
                <span>STAGE 02</span>
                <Cpu className="w-3.5 h-3.5 text-accent" />
              </div>
              <div className="font-medium text-ink-primary text-xs">Redis Task Queue</div>
              <p className="text-2xs text-ink-secondary mt-1">
                Dispatched to Celery worker queue with exponential retry policy.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-rule-subtle font-mono text-2xs text-accent">
              task: dispatch_batch_v2
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-3 rounded-lg border border-rule-subtle bg-canvas-subtle/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-2xs font-mono text-ink-muted mb-1">
                <span>STAGE 03</span>
                <ShieldCheck className="w-3.5 h-3.5 text-status-live" />
              </div>
              <div className="font-medium text-ink-primary text-xs">PostgreSQL Ledger</div>
              <p className="text-2xs text-ink-secondary mt-1">
                Row-level locking (select_for_update) maintains balance integrity.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-rule-subtle font-mono text-2xs text-status-live">
              balance: AUDITED & RECONCILED
            </div>
          </div>
        </div>

        {/* Live Event Output Box */}
        <div className="p-3 rounded-lg bg-ink-primary text-canvas font-mono text-2xs leading-relaxed">
          <div className="text-canvas/50 mb-1">// Redis Pub/Sub Worker Activity Stream</div>
          <div className="text-canvas/90">
            [16:02:18] INFO/ForkPoolWorker-2: Task payout.tasks.execute_disbursement[4a28f] succeeded in 0.142s
          </div>
          <div className="text-status-live">
            [16:02:19] SUCCESS: Batch #892 (48 payouts) marked SETTLED with zero reconciliation drift.
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 bg-canvas-subtle border-t border-rule-subtle flex items-center justify-between text-2xs font-mono text-ink-muted">
        <span>Stack: Python • Django REST Framework • Celery • Redis • PostgreSQL</span>
      </div>
    </div>
  );
}
