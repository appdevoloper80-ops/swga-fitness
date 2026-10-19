import React from 'react';
import { Ticket } from 'lucide-react';

interface FloatingPassButtonProps {
  onOpenPassModal: () => void;
}

export const FloatingPassButton: React.FC<FloatingPassButtonProps> = ({ onOpenPassModal }) => {
  return (
    <div className="hidden md:flex fixed bottom-8 right-5 z-40">
      <button
        onClick={onOpenPassModal}
        className="pulse-pass group flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#E50914] to-[#C00810] hover:from-[#FF3B45] hover:to-[#E50914] text-white shadow-2xl shadow-[#E50914]/50 border border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Claim your free 1-day pass"
      >
        <Ticket className="w-5 h-5 text-white animate-pulse" aria-hidden="true" />
        <span className="font-heading font-black uppercase text-xs sm:text-sm tracking-wider">
          Free Pass
        </span>
      </button>
    </div>
  );
};
