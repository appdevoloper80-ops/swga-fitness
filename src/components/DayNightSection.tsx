import React, { useState } from 'react';
import { Sun, Moon, Clock, Sunrise, Flame, ShieldAlert, Sparkles } from 'lucide-react';
import { GYM_CONFIG } from '../config/site-config';

interface DayNightSectionProps {
  onOpenPassModal: () => void;
}

export const DayNightSection: React.FC<DayNightSectionProps> = ({ onOpenPassModal }) => {
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);
  const activeTimeline = GYM_CONFIG.timeline[activeSegmentIndex];

  const getSegmentIcon = (time: string) => {
    switch (time) {
      case '5:00 AM':
        return Sunrise;
      case '12:00 PM':
        return Sun;
      case '6:00 PM':
        return Flame;
      case '11:00 PM':
      default:
        return Moon;
    }
  };

  return (
    <section
      id="timeline"
      aria-label="24-Hour Gym Schedule and Timeline"
      className="relative bg-[#121212] py-20 sm:py-28 overflow-hidden border-t border-[#2A2A2E]"
    >
      {/* Giant Outlined Watermark "24/7" */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-black text-8xl sm:text-[16rem] lg:text-[22rem] text-outline-dark opacity-30 pointer-events-none select-none uppercase tracking-widest whitespace-nowrap"
        aria-hidden="true"
      >
        24/7
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E50914]/15 border border-[#E50914]/30 text-[#E50914] text-xs font-heading font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Never Locked Out</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase text-white tracking-tight">
            Early Bird or Night Owl? <br className="hidden sm:inline" />
            <span className="text-[#E50914]">We&apos;re Always Open.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8A8D93] leading-relaxed">
            Most gyms kick you out at 9 PM or keep abbreviated weekend hours. At Southwest Georgia Fitness Center, your keycard works 24 hours a day, 365 days a year.
          </p>
        </div>

        {/* Split Layout: Interactive 24-Hour Selector + Dynamic Detail Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Timeline Navigation Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="text-xs uppercase font-heading font-bold tracking-widest text-[#8A8D93] mb-2 px-1">
              Select A Workout Window:
            </div>

            {GYM_CONFIG.timeline.map((item, index) => {
              const Icon = getSegmentIcon(item.time);
              const isActive = index === activeSegmentIndex;
              return (
                <button
                  key={item.time}
                  onClick={() => setActiveSegmentIndex(index)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] ${
                    isActive
                      ? 'bg-[#1C1C1F] border-[#E50914] shadow-lg shadow-[#E50914]/20 scale-[1.02]'
                      : 'bg-[#18181B]/70 border-[#2A2A2E] hover:border-[#3E4048] hover:bg-[#1C1C1F]/60'
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#E50914] text-white shadow-md shadow-[#E50914]/40'
                          : 'bg-[#2A2A2E] text-[#8A8D93] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-black text-xl text-white">
                          {item.time}
                        </span>
                        <span
                          className={`text-[10px] font-heading uppercase px-2 py-0.5 rounded font-bold ${
                            item.peakLevel === 'Peak'
                              ? 'bg-amber-950/60 text-amber-400 border border-amber-500/30'
                              : item.peakLevel === 'Quiet'
                              ? 'bg-blue-950/60 text-blue-300 border border-blue-500/30'
                              : 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
                          }`}
                        >
                          {item.peakLevel} Density
                        </span>
                      </div>
                      <div className="text-xs font-medium text-[#8A8D93] group-hover:text-[#F5F5F7] transition-colors">
                        {item.segment}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`font-heading font-bold text-lg transition-transform ${
                      isActive ? 'text-[#E50914] translate-x-1' : 'text-[#8A8D93]/40'
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Showcase Screen for Active Window */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-[#1C1C1F] border border-[#2E2E33] p-6 sm:p-10 shadow-2xl overflow-hidden">
              
              {/* Subtle top glow bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E50914] via-[#FF3B45] to-[#E50914]" />

              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#E50914] animate-ping" />
                  <span className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                    {activeTimeline.time} • {activeTimeline.segment}
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#2A2A2E] text-xs font-semibold text-[#F5F5F7]">
                  Atmosphere: {activeTimeline.vibe}
                </div>
              </div>

              {/* Tagline */}
              <div className="text-lg sm:text-xl font-heading font-bold text-[#E50914] uppercase tracking-wide mb-4">
                &ldquo;{activeTimeline.tagline}&rdquo;
              </div>

              {/* Detailed description */}
              <p className="text-sm sm:text-base text-[#F5F5F7]/90 leading-relaxed mb-8">
                {activeTimeline.description}
              </p>

              {/* Visual 24-Hour Dial Indicator */}
              <div className="p-5 rounded-xl bg-[#121212] border border-[#2A2A2E] mb-8">
                <div className="flex justify-between items-center text-xs text-[#8A8D93] mb-2 font-mono">
                  <span>12:00 AM (Midnight)</span>
                  <span>12:00 PM (Noon)</span>
                  <span>11:59 PM</span>
                </div>
                {/* Visual Bar representation */}
                <div className="w-full h-3 rounded-full bg-[#2A2A2E] overflow-hidden flex relative">
                  {/* Highlight current segment block */}
                  <div
                    className="h-full bg-gradient-to-r from-[#E50914] to-[#FF3B45] transition-all duration-500 rounded-full glow-crimson"
                    style={{
                      width: '28%',
                      marginLeft:
                        activeSegmentIndex === 0
                          ? '16%'
                          : activeSegmentIndex === 1
                          ? '46%'
                          : activeSegmentIndex === 2
                          ? '68%'
                          : '88%',
                    }}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-[#8A8D93] flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
                    High-definition security cameras active 24/7
                  </span>
                  <span className="text-emerald-400 font-semibold uppercase tracking-wider text-[11px]">
                    Gym Never Closes
                  </span>
                </div>
              </div>

              {/* CTA trigger */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-[#2A2A2E]">
                <div className="text-xs text-[#8A8D93]">
                  Ready to test the facility at {activeTimeline.time}?
                </div>
                <button
                  onClick={onOpenPassModal}
                  className="px-5 py-2.5 rounded-lg bg-[#E50914] hover:bg-[#FF3B45] text-white font-heading font-bold uppercase text-xs tracking-wider transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Claim Pass for This Time</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
