import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { GYM_CONFIG } from '../config/site-config';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative bg-[#18181B] py-20 sm:py-28 overflow-hidden bg-carbon"
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E50914]/15 border border-[#E50914]/30 text-[#E50914] text-xs font-heading font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase text-white tracking-tight">
            Frequently Asked <span className="text-[#E50914]">Questions</span>
          </h2>
          <p className="mt-3 text-base text-[#8A8D93]">
            Everything you need to know about keycard access, trials, memberships, and facility rules.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {GYM_CONFIG.faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#1C1C1F] border-[#E50914]/60 shadow-lg shadow-black/40'
                    : 'bg-[#1C1C1F]/60 border-[#2A2A2E] hover:border-[#3E4048]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
                >
                  <span className="font-heading font-bold text-lg sm:text-xl text-white uppercase tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#E50914] text-white rotate-180'
                        : 'bg-[#2A2A2E] text-[#8A8D93]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#8A8D93] leading-relaxed border-t border-[#2A2A2E]/60 animate-fadeIn"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
