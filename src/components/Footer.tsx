import React, { useState } from 'react';
import { Dumbbell, ArrowUp, Mail, CheckCircle2 } from 'lucide-react';
import { GYM_CONFIG } from '../config/site-config';
import { validateEmail } from '../utils/validation';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(newsletterEmail)) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }
    setNewsletterSuccess(true);
    setNewsletterEmail('');
    setNewsletterError('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      aria-label="Site Footer"
      className="bg-[#0B0B0C] border-t border-[#2A2A2E] text-[#8A8D93] pt-16 pb-24 md:pb-16 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2A2A2E]">
          
          {/* Brand & Tagline */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#E50914] flex items-center justify-center text-white shadow-lg shadow-[#E50914]/25">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white uppercase tracking-tight block">
                  Southwest Georgia <span className="text-[#E50914]">Fitness</span>
                </span>
                <span className="text-[11px] text-[#8A8D93] tracking-widest uppercase font-mono">
                  Americus, Georgia 31709
                </span>
              </div>
            </div>

            <p className="text-white font-heading font-bold text-lg uppercase tracking-wide text-glow-crimson mb-2">
              &ldquo;{GYM_CONFIG.missionStatement}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-[#8A8D93] leading-relaxed max-w-sm">
              Your 24/7 fitness headquarters in Sumter County. Designed for real progress with premium free weights, machines, and no contracts.
            </p>

            {/* Social Icons with Crimson Glow */}
            <div className="flex items-center gap-3 mt-6">
              {/* Facebook */}
              <a
                href={GYM_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1C1C1F] border border-[#2A2A2E] flex items-center justify-center text-[#F5F5F7] hover:text-white hover:bg-[#E50914] hover:border-[#E50914] transition-all duration-200 hover:glow-crimson"
                aria-label="Follow Southwest Georgia Fitness Center on Facebook"
              >
                <span className="font-bold text-sm">f</span>
              </a>

              {/* Instagram */}
              <a
                href={GYM_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1C1C1F] border border-[#2A2A2E] flex items-center justify-center text-[#F5F5F7] hover:text-white hover:bg-[#E50914] hover:border-[#E50914] transition-all duration-200 hover:glow-crimson"
                aria-label="Follow Southwest Georgia Fitness Center on Instagram"
              >
                <span className="font-bold text-sm">ig</span>
              </a>

              {/* Google Reviews */}
              <a
                href={GYM_CONFIG.socials.googleReview}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1C1C1F] border border-[#2A2A2E] flex items-center justify-center text-[#F5F5F7] hover:text-white hover:bg-[#E50914] hover:border-[#E50914] transition-all duration-200 hover:glow-crimson"
                aria-label="Read Google Reviews for Southwest Georgia Fitness Center"
              >
                <span className="font-bold text-sm">G★</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#why-us" className="hover:text-[#E50914] transition-colors">
                  Why SGFC
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-[#E50914] transition-colors">
                  Programs &amp; Zones
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-[#E50914] transition-colors">
                  24-Hour Schedule
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-[#E50914] transition-colors">
                  Membership Options
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#E50914] transition-colors">
                  Member Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#E50914] transition-colors">
                  Gym FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Location */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Hours &amp; Location
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <span className="text-white font-medium block">Pine Pointe Shopping Center</span>
                <span>1608 E Forsyth St</span>
                <span className="block">Americus, GA 31709</span>
              </div>
              <div>
                <span className="text-white font-medium block">Keycard Access:</span>
                <span className="text-emerald-400 font-semibold">Open 24 Hours / 365 Days</span>
              </div>
              <div>
                <span className="text-white font-medium block">Phone:</span>
                <a href={GYM_CONFIG.phone.telLink} className="text-[#E50914] hover:underline">
                  {GYM_CONFIG.phone.display}
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-2">
              Workout Tips &amp; Offers
            </h4>
            <p className="text-xs text-[#8A8D93] mb-4">
              Subscribe for training tips, member challenges, and local fitness announcements.
            </p>

            {newsletterSuccess ? (
              <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>You&apos;re subscribed! Stay strong.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2" noValidate>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (newsletterError) setNewsletterError('');
                    }}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1C1C1F] border border-[#2A2A2E] text-white text-xs placeholder-[#8A8D93] focus:outline-none focus:ring-1 focus:ring-[#E50914]"
                  />
                </div>
                {newsletterError && (
                  <p className="text-[11px] text-[#FF3B45]">{newsletterError}</p>
                )}
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#E50914] hover:bg-[#FF3B45] text-white font-heading font-bold uppercase text-xs tracking-wider transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8D93]">
          <div>
            &copy; 2026 Southwest Georgia Fitness Center. All rights reserved. Demo design.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#F5F5F7] hover:text-[#E50914] transition-colors font-heading uppercase font-bold text-xs focus-visible:outline-none"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#E50914]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
