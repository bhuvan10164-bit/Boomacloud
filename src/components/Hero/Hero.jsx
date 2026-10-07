import React from 'react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="top">
      {/* Background Ambience / Subtle Glows */}
      <div className="cloud-bg-glow cloud-bg-glow-orange hero-glow-1"></div>
      <div className="cloud-bg-glow cloud-bg-glow-navy hero-glow-2"></div>

      <div className="container hero-container">
        <ScrollReveal className="hero-content" yOffset={24} duration={0.7}>
          <h1 className="hero-title">
            Cloud Infrastructure That Just Works —{' '}
            <span className="text-highlight">Without The Headaches</span>
          </h1>

          <p className="hero-description">
            We help engineering teams build, migrate, and run reliable infrastructure
            on AWS, Azure, and Google Cloud. Whether you need to slash runaway cloud bills,
            move a live database without downtime, or get senior DevOps hands on your stack,
            we work directly inside your codebase to get it done right.
          </p>

          <div className="hero-cta-group">
            <a href="#contact" className="btn btn-primary btn-lg">
              <span>Talk to an Engineer</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a href="#services" className="btn btn-secondary btn-lg">
              <span>See What We Build</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
