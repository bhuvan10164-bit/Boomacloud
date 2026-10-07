import React, { useEffect, useRef } from 'react';
import './LegalModal.css';

export default function LegalModal({ title, isOpen, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (closeBtnRef.current) {
        closeBtnRef.current.focus();
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-badge-row">
            <span className="badge badge-navy">Standard engagement terms</span>
          </div>
          <h3 id="modal-title" className="modal-title">{title}</h3>
          <button
            ref={closeBtnRef}
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-lead">
            This document outlines standard terms and operational standards for Boomacloud.
            Specific service-level agreements (SLAs) and bilateral Non-Disclosure Agreements (NDAs)
            are tailored to client master services agreements.
          </p>

          <div className="modal-section-card">
            <h4>1. Data Confidentiality & Intellectual Property</h4>
            <p>
              Boomacloud claims zero ownership over customer data, application source code,
              or proprietary architectures. All cloud infrastructure configurations, Terraform
              modules, and orchestration scripts deployed during client engagements remain
              the exclusive property of the client.
            </p>
          </div>

          <div className="modal-section-card">
            <h4>2. Security Standards & Compliance</h4>
            <p>
              Architectural blueprints adhere to industry frameworks including SOC 2 Type II,
              ISO/IEC 27001, and HIPAA compliance specifications. Ongoing telemetry monitors
              zero-trust identity, encrypted network transit, and immutable backup integrity.
            </p>
          </div>

          <div className="modal-section-card">
            <h4>3. Production SLA & Incident Response [Placeholder]</h4>
            <p>
              Formal guarantees regarding uptime targets (e.g. 99.99%) and Sev-1 response time windows
              are stipulated directly within each executed statement of work (SOW) based on client
              support tiering.
            </p>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-navy" onClick={onClose}>
            Close Notice
          </button>
        </div>
      </div>
    </div>
  );
}
