import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X, Shield, Clock } from 'lucide-react';
import { GYM_CONFIG } from '../config/site-config';

interface NavbarProps {
  onOpenPassModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPassModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Why Us', href: '#why-us' },
    { label: 'Programs', href: '#programs' },
    { label: 'Schedule', href: '#timeline' },
    { label: 'Membership', href: '#membership' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit Us', href: '#visit' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121212]/95 backdrop-blur-md border-b border-[#E50914]/40 shadow-xl shadow-black/50 py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] rounded-md"
            aria-label={`${GYM_CONFIG.name} Home`}
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-[#E50914] to-[#99060D] flex items-center justify-center text-white shadow-lg shadow-[#E50914]/25 group-hover:scale-105 transition-transform">
              <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              {/* Desktop Full Name */}
              <span className="hidden sm:inline-block font-heading font-bold text-lg sm:text-xl tracking-tight text-white leading-none group-hover:text-[#F5F5F7]">
                SOUTHWEST GEORGIA <span className="text-[#E50914]">FITNESS</span>
              </span>
              {/* Mobile Shortened Wordmark */}
              <span className="inline-block sm:hidden font-heading font-bold text-xl tracking-tight text-white leading-none">
                SGFC <span className="text-[#E50914]">24/7</span>
              </span>
              <span className="text-[10px] tracking-wider text-[#8A8D93] uppercase font-medium mt-0.5">
                Americus, GA • 24/7 Access
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-semibold tracking-wide text-[#F5F5F7] hover:text-[#E50914] transition-colors uppercase font-heading relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E50914] rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPassModal}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#E50914] hover:bg-[#FF3B45] text-white font-heading font-bold uppercase tracking-wider text-sm transition-all duration-200 shadow-md shadow-[#E50914]/30 hover:shadow-lg hover:shadow-[#E50914]/50 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Free Day Pass
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              className="lg:hidden p-2 rounded-lg text-[#F5F5F7] hover:text-[#E50914] hover:bg-[#1C1C1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label="Open main menu"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 lg:hidden flex justify-end"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-xs bg-[#121212] border-l border-[#2A2A2E] h-full shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#2A2A2E]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-[#E50914] flex items-center justify-center text-white">
                    <Dumbbell className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-bold text-lg text-white">SGFC 24/7</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  type="button"
                  className="p-2 rounded-lg text-[#8A8D93] hover:text-white hover:bg-[#1C1C1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="mt-6 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="flex items-center justify-between px-3 py-3 rounded-lg text-[#F5F5F7] hover:text-[#E50914] hover:bg-[#1C1C1F] font-heading font-bold text-base uppercase tracking-wide transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-[#8A8D93]">→</span>
                  </a>
                ))}
              </nav>

              {/* Quick Info */}
              <div className="mt-8 pt-6 border-t border-[#2A2A2E] space-y-3 text-xs text-[#8A8D93]">
                <div className="flex items-center gap-2 text-[#F5F5F7]">
                  <Clock className="w-4 h-4 text-[#E50914]" />
                  <span>24 Hours a Day, 365 Days a Year</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Keycard-secured entry system</span>
                </div>
              </div>
            </div>

            {/* Bottom Mobile Drawer Action */}
            <div className="pt-6 border-t border-[#2A2A2E] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPassModal();
                }}
                className="w-full py-3.5 px-4 rounded-lg bg-[#E50914] hover:bg-[#FF3B45] text-white font-heading font-bold uppercase tracking-wider text-sm shadow-lg shadow-[#E50914]/40 transition-all text-center"
              >
                Claim Free Day Pass
              </button>
              <a
                href={GYM_CONFIG.phone.telLink}
                className="w-full py-3 px-4 rounded-lg bg-[#1C1C1F] hover:bg-[#28282D] text-[#F5F5F7] font-medium text-xs flex items-center justify-center gap-2 transition-colors border border-[#2A2A2E]"
              >
                <span>Call {GYM_CONFIG.phone.display}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
