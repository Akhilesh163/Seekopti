import React, { useState } from "react";
import { BookSessionDialog } from "./BookSessionDialog";

export const CallToAction: React.FC = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  return (
    <>
      <section className="bg-slate-950 text-white border-t border-b border-slate-800/80 py-24 px-6 text-center w-full relative overflow-hidden">
        {/* Decorative background glows matching home page dark section */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none -z-10 animate-pulse" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-[800px] mx-auto space-y-6 relative z-10">
          <div className="flex justify-center">
            <span className="inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-5 py-2 text-xs sm:text-sm font-extrabold uppercase tracking-[0.14em] text-blue-400 shadow-sm">
              Ready for your next step?
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight text-white">
            Ready to find your Y?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Book a free demo session and a 1-on-1 strategy call. We'll map your target score, timeline and study plan — no strings attached.
          </p>
          
          <div className="pt-4">
            <button 
              onClick={() => setIsBookDemoOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-white text-slate-950 font-extrabold px-8 py-3.5 sm:px-10 sm:py-4 text-base md:text-lg shadow-xl hover:bg-slate-100 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Book a Free Demo
            </button>
          </div>
        </div>
      </section>

      {/* Book Demo Popup Dialog */}
      <BookSessionDialog
        open={isBookDemoOpen}
        onOpenChange={setIsBookDemoOpen}
        title="Book a free demo"
        description="Share your details and we'll schedule a free 30-minute consultation with Aman."
      />
    </>
  );
};
export default CallToAction;
