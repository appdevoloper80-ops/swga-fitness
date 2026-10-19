import React, { useEffect } from 'react';
import { X, Check, Dumbbell, Sparkles } from 'lucide-react';
import { ProgramItem } from '../types';

interface ProgramModalProps {
  program: ProgramItem | null;
  onClose: () => void;
  onGetStarted: () => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  onClose,
  onGetStarted,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && program) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [program, onClose]);

  useEffect(() => {
    if (program) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [program]);

  if (!program) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="program-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-xl bg-[#1C1C1F] border border-[#2E2E33] rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Top Header Image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${program.image}')` }}
            aria-label={program.alt}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1F] via-[#1C1C1F]/40 to-transparent" />
          
          {/* Close button on image */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge */}
          <div className="absolute bottom-4 left-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E50914] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-md">
              <Dumbbell className="w-3.5 h-3.5" />
              <span>Facility Program</span>
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          <h3 id="program-modal-title" className="font-heading font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
            {program.title}
          </h3>

          <p className="mt-3 text-sm sm:text-base text-[#F5F5F7]/90 leading-relaxed">
            {program.fullDesc}
          </p>

          {/* Equipment & Features Included */}
          <div className="mt-6 pt-5 border-t border-[#2A2A2E]">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#8A8D93] mb-3">
              Included Equipment &amp; Features:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white">
                  <div className="w-4 h-4 rounded-full bg-[#E50914]/15 text-[#E50914] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 pt-6 border-t border-[#2A2A2E] flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onGetStarted();
              }}
              className="w-full sm:flex-1 py-3.5 px-4 rounded-xl bg-[#E50914] hover:bg-[#FF3B45] text-white font-heading font-bold uppercase text-xs tracking-wider shadow-lg shadow-[#E50914]/30 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Started with Free Pass</span>
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-[#2A2A2E] hover:bg-[#3E4048] text-[#F5F5F7] font-heading font-bold uppercase text-xs tracking-wider transition-colors"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
