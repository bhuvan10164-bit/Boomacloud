import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Approach from './components/Approach/Approach';
import HowItWorks from './components/HowItWorks/HowItWorks';
import CloudEstimator from './components/CloudEstimator/CloudEstimator';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import LegalModal from './components/LegalModal/LegalModal';
import './App.css';

export default function App() {
  const [selectedService, setSelectedService] = useState('');
  const [assessmentNotes, setAssessmentNotes] = useState('');
  const [legalModal, setLegalModal] = useState({ isOpen: false, title: '' });

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyRecommendation = ({ service, notes }) => {
    setSelectedService(service);
    setAssessmentNotes(notes);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLegalModal = (title) => {
    setLegalModal({ isOpen: true, title });
  };

  const handleCloseLegalModal = () => {
    setLegalModal({ isOpen: false, title: '' });
  };

  return (
    <div className="site-wrapper">
      {/* 1. Header with original Boomacloud Logo and accessible mobile menu */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content">
        {/* 2. Hero Section with custom interactive SVG cloud infrastructure topology */}
        <Hero />

        {/* 3. Core Services: Strategy, Migration, Managed Cloud, Security & Resilience */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Our Approach: Respecting existing tech, team collaboration, connected matrix */}
        <Approach />

        {/* 5. How It Works: 4-Step Customer Delivery Workflow */}
        <HowItWorks />

        {/* Interactive Value Feature: Cloud Readiness Assessment Tool */}
        <CloudEstimator onApplyRecommendation={handleApplyRecommendation} />

        {/* 6. Contact Section: Accessible form, validation, and transparent integration status */}
        <Contact
          prefilledService={selectedService}
          prefilledNotes={assessmentNotes}
        />
      </main>

      {/* 7. Footer with original Boomacloud Logo, company info, and navigation links */}
      <Footer onOpenLegalModal={handleOpenLegalModal} />

      {/* Accessible Policy & Governance Modal */}
      <LegalModal
        title={legalModal.title}
        isOpen={legalModal.isOpen}
        onClose={handleCloseLegalModal}
      />
    </div>
  );
}
