import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Mail, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { GYM_CONFIG } from '../config/site-config';
import { formatUSPhone, validateContactForm, FormErrors } from '../utils/validation';

export const LocationContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatUSPhone(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
    if (formErrors.phone) {
      setFormErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handleInputChange = (field: 'name' | 'email' | 'message', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);
    if (!result.isValid) {
      setFormErrors(result.errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      // Reset after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 500);
  };

  return (
    <section
      id="visit"
      aria-label="Location, Hours, and Contact Form"
      className="relative bg-[#121212] py-20 sm:py-28 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E50914]/15 border border-[#E50914]/30 text-[#E50914] text-xs font-heading font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Americus, Georgia</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase text-white tracking-tight">
            Find Us At <span className="text-[#E50914]">Pine Pointe</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8A8D93] leading-relaxed">
            Stop by for a tour, pick up your keycard, or ask our team any fitness questions. We&apos;re right in the heart of Americus.
          </p>
        </div>

        {/* Top Split Layout: Left Glass Card + Right Stylized Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Glass Card */}
          <div className="lg:col-span-5 bg-[#1C1C1F]/90 backdrop-blur-xl border border-[#2A2A2E] border-t-2 border-t-[#E50914] rounded-2xl p-7 sm:p-9 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2A2A2E]">
                <span className="font-heading font-bold text-xl uppercase text-white tracking-tight">
                  Facility Details
                </span>
                
                {/* Live Green Badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Open Now</span>
                </span>
              </div>

              {/* Address */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E50914]/10 text-[#E50914] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-heading font-bold tracking-wider text-[#8A8D93]">
                      Gym Address
                    </div>
                    <div className="text-base font-semibold text-white mt-0.5">
                      {GYM_CONFIG.address.street}
                    </div>
                    <div className="text-sm text-[#8A8D93]">
                      {GYM_CONFIG.address.suiteOrCenter}
                    </div>
                    <div className="text-sm text-[#8A8D93]">
                      {GYM_CONFIG.address.city}, {GYM_CONFIG.address.state} {GYM_CONFIG.address.zip}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E50914]/10 text-[#E50914] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-heading font-bold tracking-wider text-[#8A8D93]">
                      Telephone
                    </div>
                    <a
                      href={GYM_CONFIG.phone.telLink}
                      className="text-base font-bold text-white hover:text-[#E50914] transition-colors mt-0.5 block"
                    >
                      {GYM_CONFIG.phone.display}
                    </a>
                    <div className="text-xs text-[#8A8D93]">
                      Click-to-call during front-desk hours
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E50914]/10 text-[#E50914] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-heading font-bold tracking-wider text-[#8A8D93]">
                      Facility Access Hours
                    </div>
                    <div className="text-base font-semibold text-white mt-0.5">
                      Open 24 Hours / 7 Days a Week
                    </div>
                    <div className="text-xs text-[#8A8D93]">
                      365 Days a Year with Electronic Keycard
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="pt-6 mt-6 border-t border-[#2A2A2E]">
              <a
                href={GYM_CONFIG.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#E50914] hover:bg-[#FF3B45] text-white font-heading font-bold uppercase tracking-wider text-sm shadow-lg shadow-[#E50914]/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Stylized Dark Map Preview */}
          <div className="lg:col-span-7 bg-[#1C1C1F] border border-[#2A2A2E] rounded-2xl overflow-hidden relative min-h-[360px] shadow-2xl flex flex-col justify-between">
            {/* Dark Styled Map Canvas simulation */}
            <div className="absolute inset-0 bg-[#161619] opacity-95">
              {/* Map grid lines simulation */}
              <div
                className="w-full h-full opacity-30"
                style={{
                  backgroundImage:
                    'linear-gradient(#2A2A2E 1px, transparent 1px), linear-gradient(90deg, #2A2A2E 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              {/* Road lines simulation */}
              <div className="absolute top-1/2 left-0 right-0 h-3 bg-[#2E3038] -rotate-3" />
              <div className="absolute top-0 bottom-0 left-1/3 w-4 bg-[#2E3038] rotate-6" />
              <div className="absolute top-0 bottom-0 left-2/3 w-3 bg-[#26282E] -rotate-12" />
            </div>

            {/* Top map toolbar info */}
            <div className="relative p-5 z-10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#8A8D93] bg-[#121212]/90 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                Americus, GA 31709 • 32.0735° N, 84.2144° W
              </span>
              <span className="text-xs font-heading font-bold uppercase text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
                Ample Parking
              </span>
            </div>

            {/* Center Animated Gym Pin */}
            <div className="relative z-10 flex flex-col items-center justify-center py-10">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-16 h-16 rounded-full bg-[#E50914]/25 animate-ping" />
                <div className="relative w-12 h-12 rounded-full bg-[#E50914] text-white flex items-center justify-center shadow-2xl shadow-[#E50914] border-2 border-white">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
              
              <div className="mt-3 px-4 py-2 rounded-xl bg-[#121212]/95 border border-[#E50914]/40 shadow-2xl backdrop-blur-md text-center max-w-xs">
                <div className="font-heading font-bold text-sm text-white uppercase tracking-tight">
                  Southwest Georgia Fitness
                </div>
                <div className="text-xs text-[#8A8D93]">
                  Pine Pointe Shopping Center (1608 E Forsyth St)
                </div>
              </div>
            </div>

            {/* Bottom map action bar */}
            <div className="relative p-5 z-10 bg-gradient-to-t from-[#121212] to-transparent flex items-center justify-between gap-4">
              <span className="text-xs text-[#8A8D93]">
                Right off E Forsyth St • Easy highway access
              </span>
              <a
                href={GYM_CONFIG.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-heading font-bold uppercase text-[#E50914] hover:text-[#FF3B45] flex items-center gap-1 transition-colors"
              >
                <span>Open in Satellite View →</span>
              </a>
            </div>
          </div>

        </div>

        {/* Quick Contact Form */}
        <div className="max-w-3xl mx-auto bg-[#1C1C1F] border border-[#2A2A2E] rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl uppercase text-white tracking-tight">
              Send Us A <span className="text-[#E50914]">Message</span>
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#8A8D93]">
              Have questions about corporate rates, training coaches, or equipment? Send us a quick note.
            </p>
          </div>

          {submittedSuccess ? (
            <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-bold text-2xl text-white uppercase tracking-tight">
                You&apos;re in!
              </h4>
              <p className="mt-2 text-sm text-emerald-200 max-w-md mx-auto">
                We&apos;ll be in touch shortly. Let&apos;s get to work.
              </p>
              <button
                onClick={() => setSubmittedSuccess(false)}
                className="mt-5 px-5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="relative">
                  <label htmlFor="contact-name" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#F5F5F7] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Marcus Turner"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg bg-[#121212] border text-white text-sm placeholder-[#8A8D93]/50 focus:outline-none focus:ring-2 focus:ring-[#E50914] ${
                      formErrors.name ? 'border-[#E50914] ring-1 ring-[#E50914]' : 'border-[#2A2A2E]'
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-xs text-[#FF3B45] mt-1">{formErrors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="relative">
                  <label htmlFor="contact-email" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#F5F5F7] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="marcus@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg bg-[#121212] border text-white text-sm placeholder-[#8A8D93]/50 focus:outline-none focus:ring-2 focus:ring-[#E50914] ${
                      formErrors.email ? 'border-[#E50914] ring-1 ring-[#E50914]' : 'border-[#2A2A2E]'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-xs text-[#FF3B45] mt-1">{formErrors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="relative">
                <label htmlFor="contact-phone" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#F5F5F7] mb-1.5">
                  Phone Number (US Format) *
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="(229) 924-XXXX"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className={`w-full px-4 py-3 rounded-lg bg-[#121212] border text-white text-sm placeholder-[#8A8D93]/50 focus:outline-none focus:ring-2 focus:ring-[#E50914] ${
                    formErrors.phone ? 'border-[#E50914] ring-1 ring-[#E50914]' : 'border-[#2A2A2E]'
                  }`}
                />
                {formErrors.phone && (
                  <p className="text-xs text-[#FF3B45] mt-1">{formErrors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div className="relative">
                <label htmlFor="contact-message" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#F5F5F7] mb-1.5">
                  Your Message or Question
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell us about your fitness goals or questions..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg bg-[#121212] border text-white text-sm placeholder-[#8A8D93]/50 focus:outline-none focus:ring-2 focus:ring-[#E50914] ${
                    formErrors.message ? 'border-[#E50914] ring-1 ring-[#E50914]' : 'border-[#2A2A2E]'
                  }`}
                />
                {formErrors.message && (
                  <p className="text-xs text-[#FF3B45] mt-1">{formErrors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-[#E50914] hover:bg-[#FF3B45] text-white font-heading font-bold uppercase tracking-wider text-sm shadow-xl shadow-[#E50914]/30 hover:shadow-[#E50914]/50 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending Request...' : 'Send Request'}</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#8A8D93] pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Privacy guaranteed. Your number and email are never shared.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
