import React, { useState } from 'react';
import { Star, ShieldCheck, ArrowDown, Sparkles, CheckCircle2 } from 'lucide-react';
import { GYM_CONFIG } from '../config/site-config';
import { formatUSPhone, validateDayPassForm, calculatePassExpiry } from '../utils/validation';
import { DayPassResult } from '../types';

interface HeroProps {
  onOpenPassModal: () => void;
  onPassGenerated: (pass: DayPassResult) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPassModal, onPassGenerated }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatUSPhone(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
    if (formErrors.phone) {
      setFormErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  const handleInputChange = (field: 'name' | 'email', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmitMiniForm = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateDayPassForm(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors as Record<string, string>);
      return;
    }

    setIsSubmitting(true);
    // Instant simulation & digital pass issuance
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      const passInfo = calculatePassExpiry();
      const generatedPass: DayPassResult = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        passCode: passInfo.passCode,
        validUntil: passInfo.validUntil,
      };
      onPassGenerated(generatedPass);
    }, 400);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      aria-label="Welcome to Southwest Georgia Fitness Center"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-[#121212] overflow-hidden pt-8 pb-20 md:pb-28 clip-diagonal-bottom"
    >
      {/* Background Image with Black Gradient Overlay & Subtle Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80')`,
        }}
        aria-hidden="true"
      />
      {/* Dark Vignette & Multi-layer Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/85 to-[#121212]/60" aria-hidden="true" />
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#121212]/70 to-[#121212]" aria-hidden="true" />
      {/* Red Ambient Glow on the left */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#E50914]/20 rounded-full blur-[130px] pointer-events-none" aria-hidden="true" />
      
      {/* Watermark Outlined Text behind Hero */}
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-heading font-black text-7xl sm:text-9xl md:text-[13rem] tracking-widest text-outline-dark opacity-40 pointer-events-none select-none uppercase whitespace-nowrap"
        aria-hidden="true"
      >
        AMERICUS
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bold Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E50914]/15 border border-[#E50914]/40 text-[#E50914] text-xs sm:text-sm font-heading font-bold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-[#E50914] animate-ping" />
              <span>AMERICUS, GA&apos;S 24/7 GYM</span>
            </div>

            {/* H1 & Second Line */}
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl uppercase text-white tracking-tight leading-[1.05] drop-shadow-md">
              Reach Your Fitness <br className="hidden sm:inline" />
              Goals Any Time
              <span className="block mt-2 sm:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] via-[#FF3B45] to-[#E50914] text-glow-crimson">
                24/7 Access in Americus, GA
              </span>
            </h1>

            {/* Sub-text */}
            <p className="mt-5 text-base sm:text-lg text-[#F5F5F7]/90 max-w-xl font-normal leading-relaxed">
              State-of-the-art equipment, flexible memberships, and a supportive community right in Pine Pointe Shopping Center. Your schedule, your rules.
            </p>

            {/* Primary & Secondary Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenPassModal}
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-gradient-to-r from-[#E50914] to-[#C00810] hover:from-[#FF3B45] hover:to-[#E50914] text-white font-heading font-bold uppercase tracking-wider text-base shadow-xl shadow-[#E50914]/30 hover:shadow-2xl hover:shadow-[#E50914]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Get a Free Day Pass</span>
                <Sparkles className="w-4 h-4 ml-2" aria-hidden="true" />
              </button>

              <button
                onClick={() => scrollToSection('membership')}
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-transparent hover:bg-white/10 text-white font-heading font-bold uppercase tracking-wider text-base border border-white/30 hover:border-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
              >
                View Membership Plans
              </button>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#8A8D93]">
              <div className="flex items-center gap-1 text-amber-400" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white">4.5 Rating on Google</span>
              <span className="text-white/30">•</span>
              <span className="text-[#F5F5F7]">50+ Happy Members</span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                No Lock-In Pressure
              </span>
            </div>
          </div>

          {/* Right Column: Floating Glass Card (Desktop Instant Pass Claim) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative bg-[#1C1C1F]/90 backdrop-blur-xl border border-[#2E2E33] hover:border-[#E50914]/50 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 transition-all duration-300">
              
              {/* Decorative top red accent stripe */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#E50914] to-transparent rounded-t-full" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-heading uppercase font-bold tracking-widest text-[#E50914] bg-[#E50914]/10 px-2.5 py-1 rounded">
                  Instant Guest Pass
                </span>
                <span className="text-xs text-[#8A8D93] font-medium">
                  Americus Residents
                </span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl uppercase text-white tracking-tight">
                Claim Your Free 1-Day Pass
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#8A8D93]">
                Zero cost. No credit card required. Try out every weight and machine today.
              </p>

              {submittedSuccess ? (
                <div className="mt-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-left">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold font-heading text-lg">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Pass Issued Successfully!</span>
                  </div>
                  <p className="mt-1 text-xs text-emerald-200">
                    We&apos;ve generated your digital pass ticket. Check your screen or show your phone at the front entrance desk.
                  </p>
                  <button
                    onClick={onOpenPassModal}
                    className="mt-4 w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-sm uppercase transition-colors"
                  >
                    View Digital Pass Ticket
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitMiniForm} className="mt-6 space-y-4" noValidate>
                  {/* Name field */}
                  <div>
                    <label htmlFor="hero-name" className="block text-xs font-semibold text-[#F5F5F7] uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      id="hero-name"
                      type="text"
                      placeholder="e.g. Jordan Smith"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg bg-[#121212] border text-white placeholder-[#8A8D93]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#E50914] transition-all ${
                        formErrors.name ? 'border-[#E50914] ring-1 ring-[#E50914]' : 'border-[#2E2E33]'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-xs text-[#FF3B45]">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Phone field */}
                  <div>
                    <label htmlFor="hero-phone" className="block text-xs font-semibold text-[#F5F5F7] uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <input
                      id="hero-phone"
                      type="tel"
                      placeholder="(229) 924-XXXX"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={`w-full px-4 py-3 rounded-lg bg-[#121212] border text-white placeholder-[#8A8D93]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#E50914] transition-all ${
                        formErrors.phone ? 'border-[#E50914] ring-1 ring-[#E50914]' : 'border-[#2E2E33]'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="mt-1 text-xs text-[#FF3B45]">{formErrors.phone}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="hero-email" className="block text-xs font-semibold text-[#F5F5F7] uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      id="hero-email"
                      type="email"
                      placeholder="jordan@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg bg-[#121212] border text-white placeholder-[#8A8D93]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#E50914] transition-all ${
                        formErrors.email ? 'border-[#E50914] ring-1 ring-[#E50914]' : 'border-[#2E2E33]'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-[#FF3B45]">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 rounded-lg bg-[#E50914] hover:bg-[#FF3B45] text-white font-heading font-bold uppercase tracking-wider text-sm shadow-lg shadow-[#E50914]/30 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {isSubmitting ? 'Generating Your Pass...' : 'Send My Pass →'}
                  </button>

                  <p className="text-[11px] text-center text-[#8A8D93]">
                    🔒 We respect your privacy. No spam. One pass per prospective member.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <button
        onClick={() => scrollToSection('marquee-strip')}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/60 hover:text-white transition-colors focus-visible:outline-none"
        aria-label="Scroll down to details"
      >
        <span className="text-[10px] uppercase font-heading tracking-widest text-[#8A8D93]">Explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-2 rounded-full bg-[#E50914] animate-bounce" />
        </div>
      </button>
    </section>
  );
};
