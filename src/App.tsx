import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { StatsBand } from './components/StatsBand';
import { ValueHighlights } from './components/ValueHighlights';
import { ProgramsSection } from './components/ProgramsSection';
import { DayNightSection } from './components/DayNightSection';
import { MembershipSection } from './components/MembershipSection';
import { PassCtaBanner } from './components/PassCtaBanner';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { FloatingPassButton } from './components/FloatingPassButton';
import { MobileBottomBar } from './components/MobileBottomBar';
import { FreePassModal } from './components/FreePassModal';
import { ProgramModal } from './components/ProgramModal';
import { Toast } from './components/Toast';
import { ProgramItem, DayPassResult } from './types';

export default function App() {
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);
  const [activePass, setActivePass] = useState<DayPassResult | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenPassModal = () => {
    setIsPassModalOpen(true);
  };

  const handleClosePassModal = () => {
    setIsPassModalOpen(false);
  };

  const handlePassGenerated = (pass: DayPassResult) => {
    setActivePass(pass);
    setIsPassModalOpen(true);
    setToastMessage(`Free 1-Day Pass issued! Code: ${pass.passCode}`);
  };

  const handleSelectProgram = (program: ProgramItem) => {
    setSelectedProgram(program);
  };

  const handleCloseProgramModal = () => {
    setSelectedProgram(null);
  };

  const handleSelectMembership = (tierName: string) => {
    // Scrolls to contact form with pre-filled message or opens contact
    const contactSection = document.getElementById('visit');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setToastMessage(`Selected: ${tierName}. Contact us below to activate!`);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#F5F5F7] flex flex-col font-sans relative selection:bg-[#E50914] selection:text-white">
      {/* A. Top Announcement Bar */}
      <AnnouncementBar onOpenPassModal={handleOpenPassModal} />

      {/* B. Sticky Navigation */}
      <Navbar onOpenPassModal={handleOpenPassModal} />

      <main id="main-content" className="flex-1">
        {/* C. Hero Section */}
        <Hero
          onOpenPassModal={handleOpenPassModal}
          onPassGenerated={handlePassGenerated}
        />

        {/* D. Marquee Strip */}
        <MarqueeStrip />

        {/* E. Stats Band (Count-up on scroll) */}
        <StatsBand />

        {/* F. Key Value Highlights */}
        <ValueHighlights onOpenPassModal={handleOpenPassModal} />

        {/* G. Programs & Services */}
        <ProgramsSection onSelectProgram={handleSelectProgram} />

        {/* H. Day-and-Night Section */}
        <DayNightSection onOpenPassModal={handleOpenPassModal} />

        {/* I. Membership Callout & Pricing Preview */}
        <MembershipSection
          onOpenPassModal={handleOpenPassModal}
          onSelectMembership={handleSelectMembership}
        />

        {/* J. Free Day Pass CTA Banner */}
        <PassCtaBanner onPassGenerated={handlePassGenerated} />

        {/* K. Customer Reviews */}
        <ReviewsSection />

        {/* L. FAQ Accordion */}
        <FaqSection />

        {/* M. Location, Hours & Contact */}
        <LocationContactSection />
      </main>

      {/* N. Footer */}
      <Footer />

      {/* O. Floating Elements */}
      <FloatingPassButton onOpenPassModal={handleOpenPassModal} />
      <MobileBottomBar onOpenPassModal={handleOpenPassModal} />

      {/* Modals & Toasts */}
      <FreePassModal
        isOpen={isPassModalOpen}
        onClose={handleClosePassModal}
        activePass={activePass}
        onPassCreated={(pass) => {
          setActivePass(pass);
          setToastMessage(`Pass created: ${pass.passCode}`);
        }}
      />

      <ProgramModal
        program={selectedProgram}
        onClose={handleCloseProgramModal}
        onGetStarted={() => {
          setSelectedProgram(null);
          setIsPassModalOpen(true);
        }}
      />

      <Toast
        message={toastMessage || ''}
        isVisible={Boolean(toastMessage)}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
