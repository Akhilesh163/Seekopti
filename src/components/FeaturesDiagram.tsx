import React, { useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { BookSessionDialog } from "./BookSessionDialog";
import { motion } from "framer-motion";
import { Zap, Calendar, ArrowRight, Shield, Lock, TrendingUp, Activity, FileCheck, Users, Search, Compass } from "lucide-react";

export const FeaturesDiagram: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);

  const featureCards = [
    {
      title: "Proud Record Holders of GMAT 800 and V51",
      desc: "Prepared by tutors who have achieved absolute perfection on the test."
    },
    {
      title: "Live discussion of all tests with expert faculty",
      desc: "Review every test option and mistake directly with master trainers."
    },
    {
      title: "100+ Hours of Live Training (Highest in the World)",
      desc: "Exhaustive coverage of every single concept with extensive practice."
    }
  ];

  return (
    <section className="pt-14 pb-20 md:pt-16 md:pb-24 bg-slate-950 text-white border-t border-b border-slate-800/80 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-blue-200 text-blue-600 text-base md:text-lg font-extrabold uppercase tracking-[0.14em] shadow-xl mb-3">
            <Zap className="w-4 h-4 text-blue-600 stroke-[2.5]" />
            <span>THE SEEK YOUR Y ADVANTAGE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white mt-3 mb-2 tracking-tight">
            Built for Elite Performance
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto my-3" />
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: "20px" }}>
            Why leading GMAT and GRE aspirants trust our structured preparation model.
          </p>
        </div>

        {/* Desktop Animated Card Layout */}
        <div className="hidden lg:block relative pt-8 lg:pt-0 mx-auto w-full max-w-[1200px] h-[680px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-95" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 rounded-full border border-slate-700/40" />
            <div className="absolute inset-x-24 inset-y-20 rounded-full border border-sky-500/10" />
          </div>

          <div className="relative w-full h-full">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 680" preserveAspectRatio="none">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                  <path d="M0,0 L10,3.5 L0,7" fill="rgba(96,165,250,0.95)" />
                </marker>
              </defs>
              <path d="M 460 340 C 560 340, 695 240, 820 220" stroke="rgba(96,165,250,0.65)" strokeWidth="3" fill="none" strokeDasharray="6 6" markerEnd="url(#arrowhead)" />
              <path d="M 460 340 C 620 340, 730 340, 840 340" stroke="rgba(96,165,250,0.65)" strokeWidth="3" fill="none" strokeDasharray="6 6" markerEnd="url(#arrowhead)" />
              <path d="M 460 340 C 560 340, 695 440, 820 460" stroke="rgba(96,165,250,0.65)" strokeWidth="3" fill="none" strokeDasharray="6 6" markerEnd="url(#arrowhead)" />
            </svg>

            <div className="absolute top-1/2 left-[36.5%] -translate-x-1/2 -translate-y-1/2">
              <div className="relative z-20 w-32 h-32 rounded-full bg-slate-900 text-white border-2 border-sky-400/70 flex flex-col items-center justify-center shadow-[0_30px_80px_-30px_rgba(96,165,250,0.8)]">
                <Shield className="w-8 h-8 text-sky-400 mb-1" />
                <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-white font-mono">ENTERPRISE</span>
                <span className="text-[7px] text-sky-300 uppercase tracking-[0.2em] font-bold font-mono">INTELLIGENCE</span>
              </div>
            </div>

            {[
              {
                feature: featureCards[0],
                position: "absolute top-[20%] left-[59.5%] w-[19.5rem]",
              },
              {
                feature: featureCards[1],
                position: "absolute top-[42%] left-[59.5%] w-[19.5rem]",
              },
              {
                feature: featureCards[2],
                position: "absolute top-[64%] left-[59.5%] w-[19.5rem]",
              },
            ].map((item, index) => (
              <motion.div
                key={item.feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${item.position} bg-white/95 text-slate-950 border border-slate-200/80 rounded-[28px] p-6 shadow-2xl shadow-slate-950/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/20`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500/15 to-blue-500/10 text-sky-700 border border-sky-200">
                    <span className="text-sm font-black">{index + 1}</span>
                  </div>
                  <div className="h-0.5 flex-1 bg-slate-200/70" />
                </div>
                <h3 className="text-xl font-black leading-tight mb-3">
                  {item.feature.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  {item.feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Diagram Layout (Stacked) */}
        <div className="lg:hidden flex flex-col items-center gap-10">
          {/* Logo in Center */}
          <div className="relative w-36 h-36 rounded-full flex items-center justify-center p-1 shadow-xl bg-white border border-slate-200">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 animate-[spin_10s_linear_infinite] p-[2px]">
              <div className="w-full h-full bg-white rounded-full" />
            </div>
            <div className="relative w-full h-full rounded-full bg-slate-50 flex items-center justify-center p-2 z-10">
              <BrandLogo size="custom" className="w-[85%] h-auto max-h-[90%] object-contain translate-y-1.5" />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 w-full mt-4">
            {featureCards.map((feat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden bg-white border border-slate-200 shadow-lg rounded-[24px] p-6 text-left hover:border-blue-500/50 transition duration-300"
              >
                <div className="absolute -left-4 top-4 w-16 h-16 rounded-full bg-blue-500/10 border border-blue-200 flex items-center justify-center text-blue-700 font-black text-lg">
                  {index + 1}
                </div>
                <div className="pl-14">
                  <h3 className="text-lg font-black leading-tight mb-3 text-slate-950">
                    {feat.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center flex justify-center z-10 relative">
          <button
            onClick={() => setIsBookSessionOpen(true)}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-base md:text-lg shadow-xl shadow-blue-500/25 hover:from-blue-500 hover:to-indigo-500 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-white" />
            <span>Book a Session</span>
            <ArrowRight className="w-5 h-5 text-white/90" />
          </button>
        </div>

      </div>

      <BookSessionDialog
        open={isBookSessionOpen}
        onOpenChange={setIsBookSessionOpen}
        title="Book a Session"
        description="Select your target exam and fill in your details to book a consultation with Aman."
      />
    </section>
  );
};
