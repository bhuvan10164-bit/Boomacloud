import React from 'react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import './Services.css';

export default function Services({ onSelectService }) {
  const services = [
    {
      id: 'strategy',
      title: 'Cloud Architecture & Strategy',
      subtitle: 'Built for what you actually need',
      description:
        'We design right-sized architectures on AWS, Azure, and Google Cloud that match your real traffic and budget — avoiding over-engineered microservices when a clean setup does the job better.',
      highlights: [
        'Clear architecture blueprints your engineers can actually read',
        'Realistic monthly cost modeling before spinning up resources',
        'Docker, ECS, and Kubernetes setups sized for your real workload',
        'Multi-region disaster recovery for when uptime really matters',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      badgeText: 'Architecture',
    },
    {
      id: 'migration',
      title: 'Zero-Downtime Cloud Migration',
      subtitle: 'Move production without losing sleep',
      description:
        'Moving production databases and live user traffic is high-stakes. We rehearse every cutover in sandboxes, sync databases in real time, and execute migrations during low-traffic windows with zero unplanned downtime.',
      highlights: [
        'Rehearsed cutover runbooks with instant rollback safety nets',
        'Real-time database replication (PostgreSQL, MySQL, MongoDB)',
        'Application containerization and sandbox load testing',
        'Post-migration smoke tests and verified live cutover',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <polyline points="13 11 16 8 19 11" />
          <line x1="16" y1="8" x2="16" y2="16" />
        </svg>
      ),
      badgeText: 'Migration',
    },
    {
      id: 'managed',
      title: 'Managed DevOps & Cost Optimization',
      subtitle: 'Stop overpaying and firefighting',
      description:
        'Cloud bills quietly compound over time. We eliminate orphan disks, oversized instances, unfiltred logs and inefficient routing — typically cutting 20% to 35% of monthly cloud spend while keeping your latency low.',
      highlights: [
        'Immediate audit of unused resources, NAT gateways, and idle compute',
        'Automated CI/CD pipelines (GitHub Actions, GitLab CI)',
        'Centralized log management with automated filtering, retention, and alerting to reduce unnecessary log storage and cloud costs',
        '24/7 uptime monitoring and direct on-call escalation',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      badgeText: 'DevOps & FinOps',
    },
    {
      id: 'security',
      title: 'Cloud Security & Compliance Hardening',
      subtitle: 'Pass audits and sleep soundly',
      description:
        'Lock down your cloud environment without slowing down your developers. We replace loose IAM permissions and shared keys with automated least-privilege policies, encrypted data, and audit-ready controls.',
      highlights: [
        'Least-privilege IAM audit and removal of root/admin access keys',
        'Automated daily backups with verified point-in-time restore drills',
        'SOC 2, ISO 27001, and HIPAA compliance guardrails codified in Terraform',
        'Web Application Firewall (WAF) & DDoS protection via Cloudflare / AWS Shield',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      badgeText: 'Security',
    },
  ];

  const handleSelect = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
  };

  return (
    <section className="section services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="section-header" yOffset={28}>
          <span className="badge badge-navy">What we do</span>
          <h2 className="section-title">Pragmatic Cloud Engineering For Growing Companies</h2>
          <p className="section-subtitle">
            We don't sell bloated 6-month consulting reports. We help you design the right architecture,
            migrate live systems safely, and keep your production infrastructure fast, secure, and affordable.
          </p>
        </ScrollReveal>

        {/* Services Grid with Staggered Scroll Reveal */}
        <div className="services-grid">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.id}
              staggerDelay={index * 0.08}
              yOffset={32}
              style={{ height: '100%' }}
            >
              <div className="service-card card" style={{ height: '100%' }}>
                <div className="service-card-top">
                  <div className="service-icon-wrap" aria-hidden="true">
                    {service.icon}
                  </div>
                  <span className="service-phase-pill">{service.badgeText}</span>
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <span className="service-card-subtitle">{service.subtitle}</span>

                <p className="service-card-desc">{service.description}</p>

                {/* Highlights List */}
                <div className="service-highlights-section">
                  <span className="highlights-label">Key Deliverables:</span>
                  <ul className="service-highlights-list">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="highlight-item">
                        <svg
                          className="check-icon"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="service-card-footer">
                  <a
                    href="#contact"
                    className="service-inquire-btn"
                    onClick={() => handleSelect(service.title)}
                  >
                    <span>Consult on {service.title.split('&')[0]}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Cloud Architecture Compatibility Strip */}
        <ScrollReveal yOffset={24} staggerDelay={0.2}>
          <div className="services-compatibility-banner">
            <div className="compatibility-text">
              <strong>Supported Cloud Frameworks & Ecosystems:</strong>
              <span>Vendor-neutral architecture tailored to your preferred provider or hybrid configuration.</span>
            </div>
            <div className="compatibility-tags">
              <span className="comp-tag">Amazon Web Services (AWS)</span>
              <span className="comp-tag">Microsoft Azure</span>
              <span className="comp-tag">Google Cloud Platform (GCP)</span>
              <span className="comp-tag">Kubernetes</span>
              <span className="comp-tag">Terraform</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
