import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { GYM_CONFIG } from '../config/site-config';

interface AnnouncementBarProps {
  onOpenPassModal: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenPassModal }) => {
  return (
    <aside 
      aria-label="Gym announcements and contact"
      className="bg-[#0B0B0C] border-b border-[#2A2A2E] text-xs sm:text-sm text-[#8A8D93] py-2 px-4 transition-colors z-40 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        {/* Left: 24/7 Live Status */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 font-semibold tracking-wide uppercase text-[11px] sm:text-xs">
            Open Now
          </span>
          <span className="hidden sm:inline text-[#3F4248]">|</span>
          <span className="text-[#F5F5F7] font-medium hidden sm:inline">
            Open 24 Hours, 365 Days a Year
          </span>
          <span className="text-[#F5F5F7] font-medium sm:hidden">
            Open 24/7/365
          </span>
        </div>

        {/* Center / Right: Phone & CTA */}
        <div className="flex items-center gap-3 sm:gap-6 ml-auto">
          <a
            href={GYM_CONFIG.phone.telLink}
            className="flex items-center gap-1.5 text-[#F5F5F7] hover:text-[#E50914] transition-colors font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E50914] rounded"
            aria-label={`Call Southwest Georgia Fitness Center at ${GYM_CONFIG.phone.display}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#E50914]" aria-hidden="true" />
            <span className="hidden md:inline">Call:</span>
            <span>{GYM_CONFIG.phone.display}</span>
          </a>

          <button
            onClick={onOpenPassModal}
            className="inline-flex items-center gap-1 text-[#E50914] hover:text-[#FF3B45] font-semibold transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E50914] rounded"
          >
            <span>Claim Your Free 1-Day Pass</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </button>
        </div>
      </div>
    </aside>
  );
};
