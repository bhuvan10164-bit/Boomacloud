import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import './CloudEstimator.css';

export default function CloudEstimator({ onApplyRecommendation }) {
  const [currentInfra, setCurrentInfra] = useState('single');
  const [primaryGoal, setPrimaryGoal] = useState('modernize');
  const [timeline, setTimeline] = useState('quarter');

  // Compute recommendation
  const getRecommendation = () => {
    let track = 'Cloud Architecture & Strategy';
    let serviceKey = 'Strategy';
    let rationale = 'A modular blueprint on AWS/GCP to establish clean container deployments, automated CI/CD, and transparent billing.';

    if (currentInfra === 'onprem' || currentInfra === 'paas') {
      track = 'Zero-Downtime Cloud Migration';
      serviceKey = 'Migration';
      rationale = 'Phased migration plan with database replication, sandbox rehearsals, and zero unplanned user disruption.';
    } else if (primaryGoal === 'cost') {
      track = 'DevOps & FinOps Cost Optimization';
      serviceKey = 'Managed';
      rationale = 'Immediate audit of idle resources, unattached disks, and oversized instances — aiming for 25%+ reduction in monthly spend.';
    } else if (primaryGoal === 'security') {
      track = 'Cloud Security & Compliance Hardening';
      serviceKey = 'Security';
      rationale = 'Lock down IAM roles, enforce encryption in transit/rest, and codify SOC 2/ISO compliance policies in Terraform.';
    } else {
      track = 'Modern Infrastructure & Containerization';
      serviceKey = 'Strategy';
      rationale = 'Right-sized ECS/Kubernetes cluster configuration, GitOps deployment pipeline, and developer workflow tuning.';
    }

    return { track, serviceKey, rationale };
  };

  const recommendation = getRecommendation();

  const handleApply = () => {
    if (onApplyRecommendation) {
      onApplyRecommendation({
        service: recommendation.track,
        notes: `Current Setup: ${currentInfra.toUpperCase()}, Top Priority: ${primaryGoal.toUpperCase()}, Target Timeline: ${timeline}.`,
      });
    }
  };

  return (
    <section className="section estimator-section" id="estimator">
      <div className="container">
        <ScrollReveal yOffset={32} duration={0.7}>
          <div className="estimator-card">
            <div className="estimator-header">
              <span className="badge badge-orange">Quick infrastructure check</span>
              <h2 className="estimator-title">Where Does Your Cloud Need Attention?</h2>
              <p className="estimator-subtitle">
                Select your current setup and primary challenge to see how we would structure an engagement for your team.
              </p>
            </div>

          <div className="estimator-body">
            {/* Question 1 */}
            <div className="estimator-question-block">
              <label className="question-title">1. Where are your workloads running today?</label>
              <div className="options-grid">
                {[
                  { id: 'single', label: 'AWS, Azure, or GCP', desc: 'Single public cloud provider' },
                  { id: 'onprem', label: 'On-Premises / Data Center', desc: 'Physical servers or colocation' },
                  { id: 'paas', label: 'Heroku, Render, or DigitalOcean', desc: 'Outgrowing PaaS limits & pricing' },
                  { id: 'hybrid', label: 'Multi-Cloud / Hybrid', desc: 'Split across multiple environments' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`option-btn ${currentInfra === opt.id ? 'is-selected' : ''}`}
                    onClick={() => setCurrentInfra(opt.id)}
                  >
                    <strong>{opt.label}</strong>
                    <span>{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2 */}
            <div className="estimator-question-block">
              <label className="question-title">2. What is your biggest headache or priority right now?</label>
              <div className="options-grid">
                {[
                  { id: 'cost', label: 'Cloud Bill Is Creeping Up', desc: 'Need an audit to cut wasted spend' },
                  { id: 'migration', label: 'Moving a Live Database or App', desc: 'Need zero downtime and a tested cutover' },
                  { id: 'modernize', label: 'Containers & Faster CI/CD', desc: 'Docker, Kubernetes, and automated deploys' },
                  { id: 'security', label: 'Security & Upcoming Audit', desc: 'SOC 2, ISO, or locking down IAM access' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`option-btn ${primaryGoal === opt.id ? 'is-selected' : ''}`}
                    onClick={() => setPrimaryGoal(opt.id)}
                  >
                    <strong>{opt.label}</strong>
                    <span>{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3 */}
            <div className="estimator-question-block">
              <label className="question-title">3. How soon do you need hands on deck?</label>
              <div className="options-grid options-grid-3">
                {[
                  { id: 'immediate', label: 'Immediate (< 30 days)', desc: 'Active fire or urgent deadline' },
                  { id: 'quarter', label: 'Next 1 to 3 Months', desc: 'Planned project or sprint cycle' },
                  { id: 'planning', label: 'Exploratory / Roadmap', desc: 'Evaluating options & budget' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`option-btn ${timeline === opt.id ? 'is-selected' : ''}`}
                    onClick={() => setTimeline(opt.id)}
                  >
                    <strong>{opt.label}</strong>
                    <span>{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Recommendation Output Box */}
            <div className="recommendation-result-box">
              <div className="result-main">
                <span className="result-label">Suggested Project Focus</span>
                <h3 className="result-track-name">{recommendation.track}</h3>
                <p className="result-rationale">{recommendation.rationale}</p>
              </div>

              <div className="result-cta-col">
                <a
                  href="#contact"
                  className="btn btn-primary btn-lg"
                  onClick={handleApply}
                >
                  <span>Bring This Scope to an Engineer</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <span className="result-note">Pre-fills your answers into the message box below</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
}
