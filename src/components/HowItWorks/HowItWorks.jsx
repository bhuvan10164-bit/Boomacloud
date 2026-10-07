import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import './HowItWorks.css';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      number: '01',
      title: 'Audit & Architecture Review',
      phaseName: 'Deep-Dive Audit',
      summary:
        'We get read-only access to your cloud console, talk through daily pain points with your engineering leads, inspect your database schemas, and identify the exact bottlenecks, cost leaks, and security risks.',
      deliverables: [
        'Detailed audit of current compute, storage, and networking',
        'Breakdown of current monthly cloud waste and immediate savings',
        'Application dependency mapping and legacy risk matrix',
        'Clear, prioritized punch-list agreed upon with your leads',
      ],
      timeframe: 'Weeks 1-2',
      badge: 'Stage 1: Deep-Dive Audit',
    },
    {
      number: '02',
      title: 'Target Blueprint & Migration Plan',
      phaseName: 'Architecture Plan',
      summary:
        'We design the target environment and write the step-by-step migration plan. You get concrete monthly cost estimates, architecture diagrams, and a cutover schedule before we write a single line of Terraform.',
      deliverables: [
        'Clear target diagrams (AWS VPC, Azure VNet, or GCP VPC)',
        'Database replication plan and rehearsed rollback strategy',
        'Clean Terraform module definitions and directory structure',
        'Agreed cutover schedule and go/no-go criteria',
      ],
      timeframe: 'Week 2-4 ',
      badge: 'Stage 2: Architecture Plan',
    },
    {
      number: '03',
      title: 'Staged Build & Rehearsed Cutover',
      phaseName: 'Implementation',
      summary:
        'We spin up the new environment via code, test application containers in staging, sync production databases in the background, and execute the final cutover during your lowest-traffic window with zero unplanned downtime.',
      deliverables: [
        'Automated infrastructure provisioning with modular Terraform',
        'Real-time database sync with zero data loss',
        'End-to-end rehearsal drills on staging before touching live traffic',
        'Live DNS switchover with senior engineers actively on-call',
      ],
      timeframe: 'Weeks 5-7',
      badge: 'Stage 3: Implementation',
    },
    {
      number: '04',
      title: 'Team Handoff & Ongoing Coverage',
      phaseName: 'Day to day Operations',
      summary:
        'We don\'t disappear after launch. We run thorough handoff sessions with your engineers, commit complete runbooks directly to your repo, and offer optional 24/7 on-call coverage and monthly cost tuning.',
      deliverables: [
        'Readable Markdown runbooks committed to your Git repository',
        'Recorded architecture walkthroughs and team pair programming',
        'Alerting dashboards configured in Datadog, Grafana, or CloudWatch',
        'Ongoing monthly FinOps review to keep cloud bills lean',
      ],
      timeframe: 'Go Live',
      badge: 'Stage Day to day Operations',
    },
  ];

  return (
    <section className="section how-it-works-section" id="how-it-works">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="section-header" yOffset={28}>
          <span className="badge badge-navy">Engagement process</span>
          <h2 className="section-title">How a Project Actually Unfolds</h2>
          <p className="section-subtitle">
            No mystery boxes and no scope creep. Here is the realistic 4-stage process we follow
            from first console review to production cutover.
          </p>
        </ScrollReveal>

        {/* Workflow Timeline Navigation */}
        <ScrollReveal yOffset={24} staggerDelay={0.1}>
          <div className="workflow-stepper-nav" role="tablist" aria-label="Customer Workflow Steps">
          {workflowSteps.map((step, index) => (
            <button
              key={step.number}
              role="tab"
              aria-selected={activeStep === index}
              className={`stepper-tab ${activeStep === index ? 'is-active' : ''}`}
              onClick={() => setActiveStep(index)}
            >
              <span className="step-nav-num">{step.number}</span>
              <div className="step-nav-info">
                <span className="step-nav-name">{step.phaseName}</span>
                <span className="step-nav-time">{step.timeframe}</span>
              </div>
            </button>
          ))}
          </div>
        </ScrollReveal>

        {/* Active Step Highlight Showcase Card */}
        <ScrollReveal yOffset={28} staggerDelay={0.15}>
          <div className="active-step-showcase card">
            <div className="step-showcase-header">
              <div className="step-badge-wrap">
                <span className="badge badge-orange">{workflowSteps[activeStep].badge}</span>
                <span className="step-timeframe-pill">{workflowSteps[activeStep].timeframe}</span>
              </div>
              <span className="step-large-num" aria-hidden="true">
                {workflowSteps[activeStep].number}
              </span>
            </div>

            <h3 className="active-step-title">{workflowSteps[activeStep].title}</h3>
            <p className="active-step-summary">{workflowSteps[activeStep].summary}</p>

            <div className="step-deliverables-box">
              <h4 className="deliverables-heading">Key Milestone Deliverables:</h4>
              <div className="deliverables-grid">
                {workflowSteps[activeStep].deliverables.map((item, idx) => (
                  <div key={idx} className="deliverable-tile">
                    <div className="deliverable-check" aria-hidden="true">
                      ✓
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stepper controls */}
            <div className="stepper-controls">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              >
                ← Previous Step
              </button>
              <div className="step-dots" aria-hidden="true">
                {workflowSteps.map((_, i) => (
                  <span
                    key={i}
                    className={`dot ${activeStep === i ? 'is-active' : ''}`}
                    onClick={() => setActiveStep(i)}
                  />
                ))}
              </div>
              {activeStep < workflowSteps.length - 1 ? (
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => setActiveStep((prev) => Math.min(workflowSteps.length - 1, prev + 1))}
                >
                  Next Step →
                </button>
              ) : (
                <a href="#contact" className="btn btn-primary btn-sm">
                  Start Step 1: Discover →
                </a>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
