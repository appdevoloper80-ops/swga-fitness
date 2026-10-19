import React, { useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { formatUSPhone, validateEmail, validateUSPhone, calculatePassExpiry } from '../utils/validation';
import { DayPassResult } from '../types';

interface PassCtaBannerProps {
  onPassGenerated: (pass: DayPassResult) => void;
}

export const PassCtaBanner: React.FC<PassCtaBannerProps> = ({ onPassGenerated }) => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatUSPhone(e.target.value));
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!validateUSPhone(phone)) {
      setError('Please enter a valid 10-digit US telephone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const expiry = calculatePassExpiry();
      onPassGenerated({
        name: 'Guest Athlete',
        email,
        phone,
        passCode: expiry.passCode,
        validUntil: expiry.validUntil,
      });
    }, 400);
  };

  return (
    <section
      aria-label="Free day pass registration banner"
      className="relative bg-gradient-to-r from-[#B50710] via-[#E50914] to-[#121212] py-16 sm:py-20 text-white overflow-hidden shadow-2xl border-y border-[#FF3B45]"
    >
      {/* Decorative angled background pattern */}
      <div className="absolute inset-0 bg-diagonal-stripes opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 border border-white/20 text-white text-xs font-heading font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Zero Risk Trial</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-tight">
              Your First Workout <br className="hidden sm:inline" />
              Is On Us.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/90 max-w-lg leading-relaxed">
              No sales pitch. No credit card required. Walk into Southwest Georgia Fitness Center at Pine Pointe and experience 24/7 fitness firsthand.
            </p>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-6">
            {isSuccess ? (
              <div className="p-6 rounded-2xl bg-black/60 border border-white/30 backdrop-blur-md">
                <div className="flex items-center gap-2 text-white font-heading font-bold text-xl uppercase">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  <span>Pass Issued! Check Your Screen</span>
                </div>
                <p className="mt-2 text-xs text-white/80">
                  Your electronic pass has been created. Show the pass badge to access the facility.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-black/60 p-5 sm:p-7 rounded-2xl border border-white/20 backdrop-blur-md shadow-2xl"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="cta-email" className="block text-[11px] font-heading font-bold uppercase tracking-wider text-white/80 mb-1">
                      Email Address
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1C1C1F] border border-white/20 text-white text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="cta-phone" className="block text-[11px] font-heading font-bold uppercase tracking-wider text-white/80 mb-1">
                      Phone Number
                    </label>
                    <input
                      id="cta-phone"
                      type="tel"
                      placeholder="(229) 924-XXXX"
                      value={phone}
                      onChange={handlePhoneChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1C1C1F] border border-white/20 text-white text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-xs text-amber-300 font-medium mb-3">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-lg bg-white hover:bg-[#F5F5F7] text-[#121212] font-heading font-black uppercase text-sm tracking-wider shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                >
                  {isSubmitting ? 'Generating Your Pass...' : 'Claim My Free Day Pass →'}
                </button>

                <p className="mt-3 text-[11px] text-center text-white/70">
                  Instant digital delivery. Valid for local Americus, GA area residents.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
