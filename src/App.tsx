import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { GlobalScale } from './sections/GlobalScale';
import { CoreCapabilities } from './sections/CoreCapabilities';
import { EndToEndExpertise } from './sections/EndToEndExpertise';
import { Methodology } from './sections/Methodology';
import { StrategicRoadmap } from './sections/StrategicRoadmap';
import { DomainsSection } from './sections/DomainsSection';
import { SecuritySection } from './sections/SecuritySection';
import { TechStackSection } from './sections/TechStackSection';
import { WhyCriska } from './sections/WhyCriska';
import { CaseStudiesSection } from './sections/CaseStudiesSection';
import { TeamSection } from './sections/TeamSection';
import { CareerSection } from './sections/CareerSection';
import { SolveNextCTA } from './sections/SolveNextCTA';
import { Footer } from './sections/Footer';
import { ContactModal } from './components/ContactModal';
import { Toast } from './components/Toast';
import { ScrollTrigger } from './animations/gsapSetup';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    // Refresh ScrollTrigger when images load to guarantee accurate scroll trigger coordinates
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleLoad);
    const timeout = setTimeout(() => ScrollTrigger.refresh(), 1000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  return (
    <div className="criska-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Glassmorphic Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Page Flow Matching Figma Master Architecture */}
      <main style={{ flex: 1 }}>
        <Hero onOpenContact={handleOpenContact} />
        <GlobalScale onOpenContact={handleOpenContact} />
        <CoreCapabilities onOpenContact={handleOpenContact} />
        <EndToEndExpertise onOpenContact={handleOpenContact} />
        <Methodology onOpenContact={handleOpenContact} />
        <StrategicRoadmap />
        <DomainsSection onOpenContact={handleOpenContact} />
        <SecuritySection onOpenContact={handleOpenContact} />
        <TechStackSection onOpenContact={handleOpenContact} />
        <WhyCriska onOpenContact={handleOpenContact} />
        <CaseStudiesSection onOpenContact={handleOpenContact} />
        <TeamSection />
        <CareerSection onSuccess={showToast} />
        <SolveNextCTA onOpenContact={handleOpenContact} onSuccess={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        onSuccess={showToast}
      />

      {/* Interactive Toast Notifications */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          type="success"
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
};

export default App;
