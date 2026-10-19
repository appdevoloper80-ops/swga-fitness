import React, { useEffect, useState, useRef } from 'react';
import { Clock, Calendar, Star, Users } from 'lucide-react';
import { GYM_CONFIG } from '../config/site-config';

export const StatsBand: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animated counters
  const [daysCount, setDaysCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Days counter: 0 -> 365
    const duration = 1200;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setDaysCount(Math.floor(ease * GYM_CONFIG.stats.daysOpen));
      setRatingCount(Number((ease * GYM_CONFIG.stats.rating).toFixed(1)));
      setReviewCount(Math.floor(ease * GYM_CONFIG.stats.reviewCount));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDaysCount(GYM_CONFIG.stats.daysOpen);
        setRatingCount(GYM_CONFIG.stats.rating);
        setReviewCount(GYM_CONFIG.stats.reviewCount);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible]);

  return (
    <section
      ref={containerRef}
      aria-label="Gym key statistics"
      className="relative bg-[#18181B] border-b border-[#2A2A2E] py-12 sm:py-16 overflow-hidden bg-carbon"
    >
      {/* Subtle diagonal background glow */}
      <div className="absolute inset-0 bg-diagonal-stripes opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Stat 1: 24/7 Keycard Access */}
          {/* CLIENT VERIFIED: 24/7 Keycard Access */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 rounded-xl bg-[#1C1C1F]/60 border border-[#2A2A2E] hover:border-[#E50914]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#E50914]/10 text-[#E50914] flex items-center justify-center mb-3">
              <Clock className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#E50914] tracking-tight">
              24/7
            </div>
            <div className="mt-1 text-sm sm:text-base font-bold text-white uppercase font-heading tracking-wide">
              Keycard Access
            </div>
            <div className="text-xs text-[#8A8D93] mt-0.5">
              Doors unlock whenever you are ready
            </div>
          </div>

          {/* Stat 2: 365 Days a Year */}
          {/* CLIENT VERIFIED: Open every single day of the year */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 rounded-xl bg-[#1C1C1F]/60 border border-[#2A2A2E] hover:border-[#E50914]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#E50914]/10 text-[#E50914] flex items-center justify-center mb-3">
              <Calendar className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#E50914] tracking-tight">
              {isVisible ? daysCount : 365}
            </div>
            <div className="mt-1 text-sm sm:text-base font-bold text-white uppercase font-heading tracking-wide">
              Days a Year
            </div>
            <div className="text-xs text-[#8A8D93] mt-0.5">
              Holidays, weekends & late nights
            </div>
          </div>

          {/* Stat 3: 4.5 Google Rating */}
          {/* CLIENT VERIFIED: 4.5 stars on Google */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 rounded-xl bg-[#1C1C1F]/60 border border-[#2A2A2E] hover:border-[#E50914]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#E50914]/10 text-[#E50914] flex items-center justify-center mb-3">
              <Star className="w-5 h-5 fill-[#E50914]" aria-hidden="true" />
            </div>
            <div className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#E50914] tracking-tight flex items-center gap-1.5">
              <span>{isVisible ? ratingCount.toFixed(1) : '4.5'}</span>
              <Star className="w-6 h-6 sm:w-7 sm:h-7 fill-amber-400 text-amber-400 inline-block shrink-0" />
            </div>
            <div className="mt-1 text-sm sm:text-base font-bold text-white uppercase font-heading tracking-wide">
              Google Rating
            </div>
            <div className="text-xs text-[#8A8D93] mt-0.5">
              Local reputation for clean iron
            </div>
          </div>

          {/* Stat 4: 50+ Member Reviews */}
          {/* CLIENT VERIFIED: 50+ reviews */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 rounded-xl bg-[#1C1C1F]/60 border border-[#2A2A2E] hover:border-[#E50914]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#E50914]/10 text-[#E50914] flex items-center justify-center mb-3">
              <Users className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#E50914] tracking-tight">
              {isVisible ? reviewCount : 50}+
            </div>
            <div className="mt-1 text-sm sm:text-base font-bold text-white uppercase font-heading tracking-wide">
              Member Reviews
            </div>
            <div className="text-xs text-[#8A8D93] mt-0.5">
              Trusted by Sumter County athletes
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
