import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import './Approach.css';

export default function Approach() {
  const [selectedPillar, setSelectedPillar] = useState('strategy');

  const pillars = [
    {
      id: 'strategy',
      title: '1. Realistic Architecture',
      shortTitle: 'Architecture',
      tagline: 'Sized for your real traffic, not an imaginary enterprise',
      description:
        'We map out VPCs, subnets, and compute options with honest dollar estimates. If a managed service like AWS ECS or Cloud Run saves your team 15 hours of maintenance a week, we use it. If simple containers are cheaper than managing a full Kubernetes cluster, we tell you upfront.',
      howItConnects: {
        team: 'Paired design reviews with your technical leads.',
        tech: 'Audits existing dependencies before designing replacements.',
        continuity: 'Creates the exact Terraform manifests used in production.',
      },
      icon: '🎯',
    },
    {
      id: 'infrastructure',
      title: '2. Rehearsed Migration',
      shortTitle: 'Migration',
      tagline: 'Test twice, cut over once — zero weekend panic',
      description:
        'We never perform blind cuts or "cross your fingers" cutovers. We set up real-time database replication, run end-to-end rehearsals in sandbox environments, and execute live traffic cutover during your lowest traffic window with tested rollback plans.',
      howItConnects: {
        team: 'Step-by-step checklists so every engineer knows the schedule.',
        tech: 'Continuous database replication with near zero data loss.',
        continuity: 'Hands off a validated environment ready for production traffic.',
      },
      icon: '🏗️',
    },
    {
      id: 'security',
      title: '3. Practical Security',
      shortTitle: 'Security',
      tagline: 'Guardrails that protect data without frustrating developers',
      description:
        'Security should never mean waiting three days for an admin to grant permissions. We configure least-privilege IAM roles, encrypted databases, and private network subnets so your developers deploy safely without unnecessary friction.',
      howItConnects: {
        team: 'Automated security checks right inside your GitHub Actions pull requests.',
        tech: 'Isolates production databases away from public internet exposure.',
        continuity: 'Generates clear, audit-ready compliance evidence for SOC 2 and ISO.',
      },
      icon: '🛡️',
    },
    {
      id: 'support',
      title: '4. Day-to-Day Stewardship',
      shortTitle: 'Support',
      tagline: 'We leave your team stronger than we found them',
      description:
        'We don\'t leave behind mystery boxes. We write clear Markdown runbooks in your repo, run pair-programming handoffs with your engineers, and provide optional 24/7 on-call coverage for customers that want dedicated infrastructure teams.',
      howItConnects: {
        team: 'Recorded walkthroughs, architecture diagrams, and pair-programming.',
        tech: 'Ongoing FinOps checks to make sure idle instances don\'t inflate bills.',
        continuity: 'Direct engineer-to-engineer escalations whenever questions arise.',
      },
      icon: '🔄',
    },
  ];

  const current = pillars.find((p) => p.id === selectedPillar) || pillars[0];

  return (
    <section className="section approach-section" id="approach">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="section-header" yOffset={28}>
          <span className="badge badge-orange">How we work</span>
          <h2 className="section-title">Engineering Principles We Stick To</h2>
          <p className="section-subtitle">
            Most cloud consultancies either hand you a 90-page slide deck and leave, or build an
            overcomplicated setup that only they understand. We take a straightforward, engineer-first approach.
          </p>
        </ScrollReveal>

        {/* 3 Core Collaboration Tenets with Staggered Scroll Reveal */}
        <div className="approach-tenets-grid">
          <ScrollReveal staggerDelay={0} yOffset={30} style={{ height: '100%' }}>
            <div className="tenet-card" style={{ height: '100%' }}>
              <div className="tenet-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h4>Never Rewrite Working Code</h4>
              <p>
                If your current Postgres database handles traffic well and your monolith is easy to work on,
                we don't force you into 40 microservices. We fix the actual bottlenecks and protect what works.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal staggerDelay={0.09} yOffset={30} style={{ height: '100%' }}>
            <div className="tenet-card" style={{ height: '100%' }}>
              <div className="tenet-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4>Everything In Your Git Repos</h4>
              <p>
                Every Terraform file, Dockerfile, and deployment pipeline is committed directly to your
                GitHub or GitLab repo. When our engagement ends, your team owns 100% of the code. Zero vendor lock-in.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal staggerDelay={0.18} yOffset={30} style={{ height: '100%' }}>
            <div className="tenet-card" style={{ height: '100%' }}>
              <div className="tenet-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h4>Talk Directly To Engineers</h4>
              <p>
                No junior account managers playing telephone games. You collaborate directly with senior
                cloud architects in your Slack or Teams channel, on short video syncs, and in PR reviews.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Visual Interconnected Model */}
        <ScrollReveal yOffset={28} staggerDelay={0.25}>
          <div className="approach-visual-container">
          <div className="approach-visual-header">
            <h3>How Every Phase Connects to Production</h3>
            <p>Click any phase to see what we actually build, how it integrates, and what your team gets.</p>
          </div>

          {/* Interactive Pillars Navigation Strip */}
          <div className="pillars-nav" role="tablist" aria-label="Approach Pillars">
            {pillars.map((pillar) => (
              <button
                key={pillar.id}
                role="tab"
                aria-selected={selectedPillar === pillar.id}
                className={`pillar-tab-btn ${selectedPillar === pillar.id ? 'is-active' : ''}`}
                onClick={() => setSelectedPillar(pillar.id)}
              >
                <span className="pillar-btn-icon">{pillar.icon}</span>
                <span className="pillar-btn-text">{pillar.shortTitle}</span>
              </button>
            ))}
          </div>

          {/* Connected Matrix Card */}
          <div className="approach-interactive-card">
            {/* Left Detail Section */}
            <div className="pillar-main-detail">
              <div className="pillar-header-wrap">
                <span className="pillar-icon-large">{current.icon}</span>
                <div>
                  <h4 className="pillar-title">{current.title}</h4>
                  <span className="pillar-tagline">{current.tagline}</span>
                </div>
              </div>

              <p className="pillar-desc">{current.description}</p>

              {/* 3 Interconnection Proofpoints */}
              <div className="connections-grid">
                <div className="connection-point">
                  <span className="conn-label">🤝 Aligned to Your Team:</span>
                  <span className="conn-text">{current.howItConnects.team}</span>
                </div>
                <div className="connection-point">
                  <span className="conn-label">⚙️ Integrated with Existing Tech:</span>
                  <span className="conn-text">{current.howItConnects.tech}</span>
                </div>
                <div className="connection-point">
                  <span className="conn-label">📈 Continuously Reinforced:</span>
                  <span className="conn-text">{current.howItConnects.continuity}</span>
                </div>
              </div>
            </div>

            {/* Right Visual Interconnect Graphic */}
            <div className="pillar-visual-graphic" aria-hidden="true">
              <svg viewBox="0 0 320 320" className="matrix-svg">
                {/* Center Core */}
                <circle cx="160" cy="160" r="48" fill="#1D3F73" />
                <text x="160" y="154" fill="#FFFFFF" fontSize="10" fontWeight="700" textAnchor="middle">
                  PRODUCTION
                </text>
                <text x="160" y="170" fill="#F58232" fontSize="9" fontWeight="700" textAnchor="middle">
                  STACK
                </text>

                {/* Outer Connection Ring */}
                <circle cx="160" cy="160" r="105" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />

                {/* 4 Connected Satellite Nodes */}
                {/* Node 1: Strategy (Top) */}
                <g className={selectedPillar === 'strategy' ? 'active-svg-node' : ''}>
                  <line x1="160" y1="112" x2="160" y2="55" stroke={selectedPillar === 'strategy' ? '#F58232' : '#CBD5E1'} strokeWidth="3" />
                  <circle cx="160" cy="55" r="24" fill={selectedPillar === 'strategy' ? '#F58232' : '#EDF3FB'} stroke="#1D3F73" strokeWidth="2" />
                  <text x="160" y="59" fill={selectedPillar === 'strategy' ? '#FFF' : '#1D3F73'} fontSize="9" fontWeight="700" textAnchor="middle">
                    Strategy
                  </text>
                </g>

                {/* Node 2: Infrastructure (Right) */}
                <g className={selectedPillar === 'infrastructure' ? 'active-svg-node' : ''}>
                  <line x1="208" y1="160" x2="265" y2="160" stroke={selectedPillar === 'infrastructure' ? '#F58232' : '#CBD5E1'} strokeWidth="3" />
                  <circle cx="265" cy="160" r="24" fill={selectedPillar === 'infrastructure' ? '#F58232' : '#EDF3FB'} stroke="#1D3F73" strokeWidth="2" />
                  <text x="265" y="164" fill={selectedPillar === 'infrastructure' ? '#FFF' : '#1D3F73'} fontSize="8" fontWeight="700" textAnchor="middle">
                    Infra
                  </text>
                </g>

                {/* Node 3: Security (Bottom) */}
                <g className={selectedPillar === 'security' ? 'active-svg-node' : ''}>
                  <line x1="160" y1="208" x2="160" y2="265" stroke={selectedPillar === 'security' ? '#F58232' : '#CBD5E1'} strokeWidth="3" />
                  <circle cx="160" cy="265" r="24" fill={selectedPillar === 'security' ? '#F58232' : '#EDF3FB'} stroke="#1D3F73" strokeWidth="2" />
                  <text x="160" y="269" fill={selectedPillar === 'security' ? '#FFF' : '#1D3F73'} fontSize="9" fontWeight="700" textAnchor="middle">
                    Security
                  </text>
                </g>

                {/* Node 4: Support (Left) */}
                <g className={selectedPillar === 'support' ? 'active-svg-node' : ''}>
                  <line x1="112" y1="160" x2="55" y2="160" stroke={selectedPillar === 'support' ? '#F58232' : '#CBD5E1'} strokeWidth="3" />
                  <circle cx="55" cy="160" r="24" fill={selectedPillar === 'support' ? '#F58232' : '#EDF3FB'} stroke="#1D3F73" strokeWidth="2" />
                  <text x="55" y="164" fill={selectedPillar === 'support' ? '#FFF' : '#1D3F73'} fontSize="8" fontWeight="700" textAnchor="middle">
                    Support
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
}
