import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GYM_CONFIG } from '../config/site-config';
import { ProgramItem } from '../types';

interface ProgramsSectionProps {
  onSelectProgram: (program: ProgramItem) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  return (
    <section
      id="programs"
      aria-label="Gym Programs and Training Zones"
      className="relative bg-[#18181B] py-20 sm:py-28 overflow-hidden bg-carbon"
    >
      {/* Background watermarked text */}
      <div
        className="absolute bottom-10 right-0 font-heading font-black text-8xl sm:text-[14rem] text-outline-dark opacity-20 pointer-events-none select-none uppercase tracking-widest"
        aria-hidden="true"
      >
        ZONES
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E50914]/15 border border-[#E50914]/30 text-[#E50914] text-xs font-heading font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Training Zones</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase text-white tracking-tight">
              Programs &amp; <span className="text-[#E50914]">Equipment Zones</span>
            </h2>
            <p className="mt-3 text-base text-[#8A8D93]">
              Every square foot is engineered for optimal flow, high safety, and uncompromised training momentum.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs uppercase font-heading font-bold tracking-widest text-[#8A8D93] block">
              24/7 Access Included
            </span>
            <span className="text-sm font-semibold text-white">
              All 4 zones open round the clock
            </span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {GYM_CONFIG.programs.map((program) => (
            <div
              key={program.id}
              className="group relative h-[420px] rounded-2xl overflow-hidden bg-[#1C1C1F] border border-[#2A2A2E] hover:border-[#E50914]/60 transition-all duration-500 shadow-xl flex flex-col justify-end"
            >
              {/* Background Image with Ken Burns / Hover Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${program.image}')` }}
                aria-label={program.alt}
              />

              {/* Default Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent transition-opacity duration-300" />

              {/* Crimson Hover Overlay Reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#E50914]/90 via-[#121212]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Content */}
              <div className="relative p-6 z-10 flex flex-col justify-end h-full">
                
                {/* Category tag */}
                <div className="mb-2">
                  <span className="inline-block text-[11px] font-heading font-bold uppercase tracking-wider text-[#E50914] group-hover:text-white bg-[#121212]/80 group-hover:bg-[#E50914] px-2.5 py-1 rounded transition-colors">
                    Zone 0{GYM_CONFIG.programs.indexOf(program) + 1}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-white uppercase tracking-tight leading-snug mb-2 group-hover:translate-y-[-2px] transition-transform">
                  {program.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8A8D93] group-hover:text-white/90 line-clamp-3 leading-relaxed mb-4 transition-colors">
                  {program.shortDesc}
                </p>

                {/* Learn More Action Button */}
                <button
                  onClick={() => onSelectProgram(program)}
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-lg bg-[#2A2A2E]/80 group-hover:bg-white text-white group-hover:text-[#121212] font-heading font-bold uppercase text-xs tracking-wider transition-all duration-300 shadow-md group-hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label={`Learn more about ${program.title}`}
                >
                  <span>Learn More &amp; Tour</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
