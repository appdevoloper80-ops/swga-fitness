import React from 'react';
import { KeyRound, Dumbbell, MapPin, CheckCircle2 } from 'lucide-react';
import { GYM_CONFIG } from '../config/site-config';

interface ValueHighlightsProps {
  onOpenPassModal: () => void;
}

export const ValueHighlights: React.FC<ValueHighlightsProps> = ({ onOpenPassModal }) => {
  const cards = [
    {
      id: 'access',
      title: '24/7 Keycard Access',
      subtitle: 'True Freedom',
      description: 'Train on your schedule, day or night, 365 days a year. Our encrypted electronic entry puts you in complete control of your routine.',
      icon: KeyRound,
      bulletPoints: ['Secure front-door access card', 'Well-lit interior & exterior cameras', 'Emergency call button stations'],
      tag: 'Round-the-clock',
    },
    {
      id: 'equipment',
      title: 'Top-Tier Equipment',
      subtitle: 'Engineered for Results',
      description: 'Free weights, cardio machines, and heavy-duty strength gear tailored for all fitness levels. No stripped barbells, no broken cables.',
      icon: Dumbbell,
      bulletPoints: ['Dumbbells up to 100+ lbs', 'Olympic power racks & benches', 'High-end cardio machines & turf'],
      tag: 'Full Inventory',
    },
    {
      id: 'location',
      title: 'Prime Local Location',
      subtitle: 'Pine Pointe Shopping Center',
      description: 'Conveniently located at 1608 E Forsyth St with plenty of free, well-lit parking right outside the entrance. Fast in, fast out.',
      icon: MapPin,
      bulletPoints: ['Heart of Americus, GA', 'Zero parking hassles or meter fees', 'Nearby dining, grocery & shopping'],
      tag: 'Easy Access',
    },
  ];

  return (
    <section
      id="why-us"
      aria-label="Why Choose Southwest Georgia Fitness Center"
      className="relative bg-[#121212] py-20 sm:py-28 overflow-hidden"
    >
      {/* Giant outlined background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-black text-8xl sm:text-[14rem] lg:text-[18rem] text-outline-dark opacity-35 pointer-events-none select-none uppercase tracking-widest whitespace-nowrap"
        aria-hidden="true"
      >
        TRAIN
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E50914]/15 border border-[#E50914]/30 text-[#E50914] text-xs font-heading font-bold uppercase tracking-wider mb-3">
            <span>The Americus Standard</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase text-white tracking-tight">
            Built For Serious Lifters &amp; <br className="hidden sm:inline" />
            <span className="text-[#E50914]">First-Time Beginners</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8A8D93] leading-relaxed">
            We removed every barrier between you and your healthiest self. No crowded queues, no restrictive hours, and no corporate judgment.
          </p>
        </div>

        {/* 3 Large Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="gym-card relative p-8 sm:p-9 border border-[#2A2A2E] border-t-2 border-t-[#E50914] flex flex-col justify-between group overflow-hidden"
              >
                {/* Subtle card glow inside */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E50914]/5 rounded-full blur-2xl group-hover:bg-[#E50914]/15 transition-all" aria-hidden="true" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#E50914]/10 border border-[#E50914]/30 text-[#E50914] group-hover:bg-[#E50914] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg group-hover:shadow-[#E50914]/40">
                      <Icon className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-heading font-bold tracking-widest uppercase text-[#8A8D93] group-hover:text-[#E50914] transition-colors">
                      {card.tag}
                    </span>
                  </div>

                  <span className="text-xs text-[#E50914] uppercase font-bold tracking-wider font-heading">
                    {card.subtitle}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-white uppercase tracking-tight mt-1 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#8A8D93] leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#2A2A2E]/80">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#F5F5F7]">
                    {card.bulletPoints.map((pt, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#E50914] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#8A8D93]">
            Want to see the setup before joining?{' '}
            <button
              onClick={onOpenPassModal}
              className="text-[#E50914] hover:text-[#FF3B45] font-semibold underline underline-offset-4 transition-colors"
            >
              Grab a free guest pass to walk in anytime today →
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
