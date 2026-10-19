import React from 'react';
import { Check, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { GYM_CONFIG } from '../config/site-config';

interface MembershipSectionProps {
  onOpenPassModal: () => void;
  onSelectMembership: (tierName: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({
  onOpenPassModal,
  onSelectMembership,
}) => {
  return (
    <section
      id="membership"
      aria-label="Membership plans and pricing options"
      className="relative bg-[#18181B] py-20 sm:py-28 overflow-hidden bg-carbon"
    >
      {/* Giant Outlined Watermark "PLANS" */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-black text-8xl sm:text-[14rem] lg:text-[18rem] text-outline-dark opacity-20 pointer-events-none select-none uppercase tracking-widest whitespace-nowrap"
        aria-hidden="true"
      >
        PLANS
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E50914]/15 border border-[#E50914]/30 text-[#E50914] text-xs font-heading font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Membership Plans</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase text-white tracking-tight">
            Straightforward Memberships. <br className="hidden sm:inline" />
            <span className="text-[#E50914]">Zero Sneaky Fine Print.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8A8D93] leading-relaxed">
            Choose what fits your routine. All regular memberships include unlimited 24/7 keycard access to every weight, machine, and amenity in our facility.
          </p>

          {/* Client Notice Banner */}
          {/* NOTE TO CLIENT / DEVELOPER: Replace demo pricing tiers with verified rates, signup fees, and discount tiers before production deployment */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2A2A2E]/80 border border-white/10 text-[11px] text-[#8A8D93]">
            <HelpCircle className="w-3.5 h-3.5 text-[#E50914]" />
            <span>Demo Preview Rates. Final pricing &amp; options verified directly with club management.</span>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {GYM_CONFIG.pricingTiers.map((tier) => {
            const isHighlight = tier.isPopular;
            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  isHighlight
                    ? 'bg-[#1C1C1F] border-2 border-[#E50914] shadow-2xl shadow-[#E50914]/20 md:-translate-y-2'
                    : 'bg-[#1C1C1F]/90 border border-[#2A2A2E] hover:border-[#E50914]/40 hover:-translate-y-1'
                }`}
              >
                {/* Top Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`inline-block px-3.5 py-1 rounded-full text-xs font-heading font-black uppercase tracking-wider shadow-md ${
                        isHighlight
                          ? 'bg-[#E50914] text-white'
                          : 'bg-[#2A2A2E] text-[#F5F5F7] border border-white/20'
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="text-center pt-2 pb-6 border-b border-[#2A2A2E]">
                    <h3 className="font-heading font-bold text-2xl uppercase text-white tracking-tight">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-[#8A8D93] mt-1">{tier.tagline}</p>

                    <div className="mt-5 flex items-baseline justify-center gap-1.5">
                      <span className="font-heading font-black text-5xl sm:text-6xl text-[#E50914] tracking-tight">
                        {tier.price}
                      </span>
                      <span className="text-xs text-[#8A8D93] uppercase font-semibold font-heading">
                        / {tier.period}
                      </span>
                    </div>

                    <div className="text-[11px] text-[#8A8D93] mt-2 italic">
                      {tier.note}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="py-6">
                    <div className="text-xs font-heading uppercase font-bold tracking-wider text-[#8A8D93] mb-3">
                      Included in Plan:
                    </div>
                    <ul className="space-y-3 text-xs sm:text-sm text-[#F5F5F7]">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-[#E50914]/15 text-[#E50914] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-[#2A2A2E]">
                  <button
                    onClick={() => {
                      if (tier.actionType === 'day-pass') {
                        onOpenPassModal();
                      } else {
                        onSelectMembership(tier.name);
                      }
                    }}
                    className={`w-full py-3.5 px-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      isHighlight
                        ? 'bg-[#E50914] hover:bg-[#FF3B45] text-white shadow-lg shadow-[#E50914]/40 hover:scale-[1.02]'
                        : 'bg-[#2A2A2E] hover:bg-[#3E4048] text-white hover:text-white'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Common Perks Strip Under Cards */}
        <div className="mt-14 max-w-4xl mx-auto rounded-xl bg-[#121212] border border-[#2A2A2E] p-4 sm:p-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-[#2A2A2E]">
            {GYM_CONFIG.commonPerks.map((perk, index) => (
              <div key={index} className="pt-3 md:pt-0 px-2 flex items-center justify-center gap-2 text-xs sm:text-sm font-heading font-bold text-white uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#E50914]" />
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
