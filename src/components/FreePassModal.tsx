import React, { useState, useEffect } from 'react';
import { X, Ticket, Sparkles, CheckCircle2, Copy, Check, Download, ShieldCheck } from 'lucide-react';
import { GYM_CONFIG } from '../config/site-config';
import { formatUSPhone, validateDayPassForm, calculatePassExpiry } from '../utils/validation';
import { DayPassResult } from '../types';

interface FreePassModalProps {
  isOpen: boolean;
  onClose: () => void;
  activePass: DayPassResult | null;
  onPassCreated: (pass: DayPassResult) => void;
}

export const FreePassModal: React.FC<FreePassModalProps> = ({
  isOpen,
  onClose,
  activePass,
  onPassCreated,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateDayPassForm(formData);
    if (!result.isValid) {
      setFormErrors(result.errors as Record<string, string>);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const expiry = calculatePassExpiry();
      const newPass: DayPassResult = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        passCode: expiry.passCode,
        validUntil: expiry.validUntil,
      };
      onPassCreated(newPass);
    }, 450);
  };

  const handleCopyPass = () => {
    if (!activePass) return;
    navigator.clipboard.writeText(activePass.passCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pass-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-lg bg-[#1C1C1F] border border-[#2E2E33] rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Top Crimson Accent Strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#E50914] via-[#FF3B45] to-[#E50914]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-[#8A8D93] hover:text-white hover:bg-[#2A2A2E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {activePass ? (
            /* Digital Pass Ticket View */
            <div className="text-center animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <h3 id="pass-modal-title" className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                Guest Pass Confirmed!
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#8A8D93]">
                Show this digital voucher on your phone when arriving at Pine Pointe Shopping Center.
              </p>

              {/* Styled Digital Ticket */}
              <div className="mt-6 rounded-2xl bg-[#121212] border border-[#2A2A2E] p-6 text-left relative overflow-hidden shadow-xl">
                {/* Decorative cutouts */}
                <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-[#1C1C1F] -translate-y-1/2" />
                <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-[#1C1C1F] -translate-y-1/2" />

                <div className="flex items-center justify-between pb-4 border-b border-dashed border-[#2A2A2E]">
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-[#E50914] tracking-wider block">
                      OFFICIAL 24/7 GUEST PASS
                    </span>
                    <span className="font-heading font-bold text-lg text-white uppercase">
                      {GYM_CONFIG.shortName} • Americus, GA
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 font-bold text-xs uppercase">
                    Active
                  </span>
                </div>

                <div className="py-4 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[#8A8D93] uppercase block text-[10px] font-heading">Athlete Name</span>
                    <span className="text-white font-semibold text-sm">{activePass.name}</span>
                  </div>
                  <div>
                    <span className="text-[#8A8D93] uppercase block text-[10px] font-heading">Access Level</span>
                    <span className="text-[#E50914] font-semibold text-sm">Full 24/7 Access</span>
                  </div>
                  <div>
                    <span className="text-[#8A8D93] uppercase block text-[10px] font-heading">Valid Until</span>
                    <span className="text-white font-semibold">{activePass.validUntil}</span>
                  </div>
                  <div>
                    <span className="text-[#8A8D93] uppercase block text-[10px] font-heading">Pass ID</span>
                    <span className="font-mono text-white font-bold tracking-wider">{activePass.passCode}</span>
                  </div>
                </div>

                {/* Simulated Barcode */}
                <div className="pt-4 border-t border-dashed border-[#2A2A2E] flex flex-col items-center">
                  <div className="flex items-center gap-1 h-10 w-full justify-center opacity-80 py-1">
                    {[3, 1, 4, 2, 5, 2, 1, 4, 3, 2, 4, 1, 3, 5, 2, 1, 4, 3, 2, 5, 1, 3, 2, 4, 1].map((w, idx) => (
                      <span
                        key={idx}
                        className="bg-white h-full inline-block"
                        style={{ width: `${w}px` }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-[#8A8D93] mt-1 tracking-widest">
                    {activePass.passCode}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={handleCopyPass}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#2A2A2E] hover:bg-[#3E4048] text-white font-heading font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Pass Code Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Pass Code</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#E50914] hover:bg-[#FF3B45] text-white font-heading font-bold uppercase text-xs tracking-wider transition-all"
                >
                  Done / See You There!
                </button>
              </div>

              <div className="mt-4 text-xs text-[#8A8D93] flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Need directions? Pine Pointe Shopping Center, 1608 E Forsyth St.</span>
              </div>
            </div>
          ) : (
            /* Form View */
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E50914]/15 border border-[#E50914]/30 text-[#E50914] text-xs font-heading font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% Free First Visit</span>
              </div>

              <h3 id="pass-modal-title" className="font-heading font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                Get Your Free 1-Day Pass
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#8A8D93]">
                Try out our free weights, cardio machines, and locker amenities. No sales pressure or hidden credit card required.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#F5F5F7] mb-1">
                    Full Name *
                  </label>
                  <input
                    id="modal-name"
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

                {/* Phone */}
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#F5F5F7] mb-1">
                    Phone Number (US Format) *
                  </label>
                  <input
                    id="modal-phone"
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

                {/* Email */}
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#F5F5F7] mb-1">
                    Email Address *
                  </label>
                  <input
                    id="modal-email"
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

                {/* Perks checklist */}
                <div className="py-2 space-y-1.5 text-xs text-[#8A8D93]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Instant digital pass created upon submission</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Valid for local Georgia residents (first-time visit)</span>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#E50914] hover:bg-[#FF3B45] text-white font-heading font-bold uppercase tracking-wider text-sm shadow-xl shadow-[#E50914]/30 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {isSubmitting ? 'Generating Digital Pass...' : 'Claim Free Pass Now →'}
                </button>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
