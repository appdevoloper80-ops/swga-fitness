import React from 'react';
import { Phone, Ticket } from 'lucide-react';
import { GYM_CONFIG } from '../config/site-config';

interface MobileBottomBarProps {
  onOpenPassModal: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenPassModal }) => {
  return (
    <div
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#121212]/95 backdrop-blur-lg border-t border-[#2A2A2E] p-2.5 shadow-2xl flex items-center gap-2"
    >
      {/* Call Now button */}
      <a
        href={GYM_CONFIG.phone.telLink}
        className="flex-1 py-3 px-3 rounded-xl bg-[#1C1C1F] hover:bg-[#28282D] border border-[#2E3038] text-[#F5F5F7] font-heading font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
        aria-label={`Call gym at ${GYM_CONFIG.phone.display}`}
      >
        <Phone className="w-4 h-4 text-[#E50914]" />
        <span>Call Now</span>
      </a>

      {/* Free Day Pass button */}
      <button
        onClick={onOpenPassModal}
        className="flex-1 py-3 px-3 rounded-xl bg-[#E50914] hover:bg-[#FF3B45] text-white font-heading font-bold uppercase text-xs tracking-wider shadow-lg shadow-[#E50914]/40 flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
      >
        <Ticket className="w-4 h-4" />
        <span>Free Day Pass</span>
      </button>
    </div>
  );
};
