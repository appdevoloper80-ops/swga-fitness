import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink, Quote, CheckCircle } from 'lucide-react';
import { GYM_CONFIG } from '../config/site-config';

export const ReviewsSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const reviews = GYM_CONFIG.reviews;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="reviews"
      aria-label="Customer Reviews and Testimonials"
      className="relative bg-[#121212] py-20 sm:py-28 overflow-hidden"
    >
      {/* Outlined background watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-black text-8xl sm:text-[14rem] text-outline-dark opacity-30 pointer-events-none select-none uppercase tracking-widest whitespace-nowrap"
        aria-hidden="true"
      >
        REVIEWS
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E50914]/15 border border-[#E50914]/30 text-[#E50914] text-xs font-heading font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-[#E50914]" />
              <span>Real Local Feedback</span>
            </div>
            
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase text-white tracking-tight flex items-center gap-2">
              <span>4.5</span>
              <Star className="w-6 h-6 sm:w-8 sm:h-8 fill-amber-400 text-amber-400 inline shrink-0" />
              <span>on Google</span>
              <span className="text-[#8A8D93] font-normal mx-1">|</span>
              <span className="text-[#E50914]">50+ Reviews</span>
            </h2>

            <p className="mt-2 text-sm sm:text-base text-[#8A8D93]">
              What our members in Americus, GA say about training around the clock with us.
            </p>
          </div>

          {/* Slider controls & Read More on Google */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-lg bg-[#1C1C1F] border border-[#2A2A2E] hover:border-[#E50914] text-white hover:text-[#E50914] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-lg bg-[#1C1C1F] border border-[#2A2A2E] hover:border-[#E50914] text-white hover:text-[#E50914] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <a
              href={GYM_CONFIG.socials.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1C1C1F] hover:bg-[#2A2A2E] border border-[#2A2A2E] text-xs font-heading uppercase font-bold text-white tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
            >
              <span>Read More on Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#E50914]" />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Show 3 reviews relative to startIndex */}
          {[0, 1, 2].map((offset) => {
            const index = (startIndex + offset) % reviews.length;
            const rev = reviews[index];
            return (
              <div
                key={rev.id}
                className="gym-card p-6 sm:p-8 rounded-2xl border border-[#2A2A2E] border-l-4 border-l-[#E50914] flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-amber-400" aria-label={`${rev.rating} out of 5 stars`}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(rev.rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-amber-400/30'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Small Demo Sample Tag */}
                    <span className="text-[10px] uppercase font-mono font-medium px-2 py-0.5 rounded bg-[#2A2A2E] text-[#8A8D93] border border-white/5">
                      Sample review
                    </span>
                  </div>

                  <Quote className="w-6 h-6 text-[#E50914]/40 mb-3" aria-hidden="true" />

                  <p className="text-sm sm:text-base text-[#F5F5F7] leading-relaxed italic mb-6">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2A2A2E] flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-base text-white uppercase tracking-tight">
                      {rev.author}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-[#8A8D93]">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{rev.badge}</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#8A8D93]">{rev.date}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
