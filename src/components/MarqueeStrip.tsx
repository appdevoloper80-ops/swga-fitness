import React from 'react';
import { Sparkles } from 'lucide-react';

export const MarqueeStrip: React.FC = () => {
  const items = [
    'OPEN 24/7',
    'FREE WEIGHTS',
    'CARDIO',
    'STRENGTH',
    'PERSONAL TRAINING',
    'NO EXCUSES',
    'KEYCARD ACCESS',
    'AMERICUS, GA',
  ];

  return (
    <div
      id="marquee-strip"
      className="relative w-full bg-[#E50914] text-white py-3 sm:py-3.5 overflow-hidden select-none border-y border-[#FF3B45] shadow-lg shadow-[#E50914]/20 z-20"
      aria-label="Gym features marquee"
    >
      {/* Repeating track for seamless infinite horizontal scroll */}
      <div className="flex w-max items-center animate-marquee whitespace-nowrap">
        {/* Sequence 1 */}
        <div className="flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10">
          {items.map((text, i) => (
            <span key={`seq1-${i}`} className="flex items-center gap-4 sm:gap-8 font-heading font-black tracking-widest text-sm sm:text-base md:text-lg uppercase">
              <span>{text}</span>
              <Sparkles className="w-3.5 h-3.5 text-white/90 shrink-0" aria-hidden="true" />
            </span>
          ))}
        </div>

        {/* Sequence 2 duplicate for seamless loop */}
        <div className="flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10" aria-hidden="true">
          {items.map((text, i) => (
            <span key={`seq2-${i}`} className="flex items-center gap-4 sm:gap-8 font-heading font-black tracking-widest text-sm sm:text-base md:text-lg uppercase">
              <span>{text}</span>
              <Sparkles className="w-3.5 h-3.5 text-white/90 shrink-0" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
