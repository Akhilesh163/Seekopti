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

        {/* Desktop Animated Circle Layout */}
        <div className="hidden lg:block relative pt-8 lg:pt-0 mx-auto w-full max-w-[1200px] h-[680px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 opacity-90" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 rounded-full border border-emerald-400/20" />
            <div className="absolute inset-4 rounded-full border border-emerald-400/20" />
            <div className="absolute inset-10 rounded-full border border-slate-300/40" />
            <div className="absolute inset-20 rounded-full border border-amber-400/30" />
            <div className="absolute inset-32 rounded-full border border-dashed border-emerald-400/40" />
            <div className="absolute inset-0 rounded-full border border-t-emerald-500 border-r-transparent border-b-transparent border-l-transparent animate-radar opacity-80" />
          </div>

          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto aspect-square flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-emerald-400/30 dark:border-emerald-500/20" style={{ transform: "scale(1.11258)" }} />
              <div className="absolute inset-2 rounded-full border border-emerald-400/30 dark:border-emerald-500/20 flex items-center justify-center">
                <div className="absolute inset-10 rounded-full border border-slate-300/50 dark:border-white/5" />
                <div className="absolute inset-20 rounded-full border border-amber-400/30 dark:border-amber-500/15" />
                <div className="absolute inset-32 rounded-full border border-dashed border-emerald-400/40 dark:border-emerald-500/25" />
                <div className="absolute w-full h-full rounded-full border border-t-emerald-500 dark:border-t-emerald-400 border-r-transparent border-b-transparent border-l-transparent animate-radar opacity-80" />
              </div>

              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 400 400">
                <g>
                  <line x1="200" y1="200" x2="340" y2="200" stroke="rgba(5, 150, 105, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle r="3.5" fill="#059669">
                    <animateMotion path="M 200 200 L 340 200" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3" fill="#55D9CC">
                    <animateMotion path="M 340 200 L 200 200" dur="3s" repeatCount="indefinite" />
                  </circle>
                </g>
                <g>
                  <line x1="200" y1="200" x2="287.34314353931404" y2="309.4128661386346" stroke="rgba(5, 150, 105, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle r="3.5" fill="#D97706">
                    <animateMotion path="M 200 200 L 287.34314353931404 309.4128661386346" dur="3.5999999999999988s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3" fill="#55D9CC">
                    <animateMotion path="M 287.34314353931404 309.4128661386346 L 200 200" dur="3.3999999999999986s" repeatCount="indefinite" />
                  </circle>
                </g>
                <g>
                  <line x1="200" y1="200" x2="168.98321033327457" y2="336.52090960277883" stroke="rgba(5, 150, 105, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle r="3.5" fill="#0D9488">
                    <animateMotion path="M 200 200 L 168.98321033327457 336.52090960277883" dur="2.9999999999999973s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3" fill="#55D9CC">
                    <animateMotion path="M 168.98321033327457 336.52090960277883 L 200 200" dur="3.799999999999997s" repeatCount="indefinite" />
                  </circle>
                </g>
                <g>
                  <line x1="200" y1="200" x2="73.9553720036929" y2="260.93235391212585" stroke="rgba(5, 150, 105, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle r="3.5" fill="#6366F1">
                    <animateMotion path="M 200 200 L 73.9553720036929 260.93235391212585" dur="2.399999999999989s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3" fill="#55D9CC">
                    <animateMotion path="M 73.9553720036929 260.93235391212585 L 200 200" dur="4.199999999999989s" repeatCount="indefinite" />
                  </circle>
                </g>
                <g>
                  <line x1="200" y1="200" x2="73.74344630328407" y2="139.50799516772247" stroke="rgba(5, 150, 105, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle r="3.5" fill="#047857">
                    <animateMotion path="M 200 200 L 73.74344630328407 139.50799516772247" dur="3.7999999999999945s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3" fill="#55D9CC">
                    <animateMotion path="M 73.74344630328407 139.50799516772247 L 200 200" dur="4.599999999999994s" repeatCount="indefinite" />
                  </circle>
                </g>
                <g>
                  <line x1="200" y1="200" x2="168.50685239185887" y2="63.58819093006707" stroke="rgba(5, 150, 105, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle r="3.5" fill="#DC2626">
                    <animateMotion path="M 200 200 L 168.50685239185887 63.58819093006707" dur="3.2s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3" fill="#55D9CC">
                    <animateMotion path="M 168.50685239185887 63.58819093006707 L 200 200" dur="5s" repeatCount="indefinite" />
                  </circle>
                </g>
                <g>
                  <line x1="200" y1="200" x2="286.9606892389634" y2="90.28291597438242" stroke="rgba(5, 150, 105, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle r="3.5" fill="#B45309">
                    <animateMotion path="M 200 200 L 286.9606892389634 90.28291597438242" dur="2.5999999999999774s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3" fill="#55D9CC">
                    <animateMotion path="M 286.9606892389634 90.28291597438242 L 200 200" dur="5.399999999999977s" repeatCount="indefinite" />
                  </circle>
                </g>
              </svg>

              <div className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-slate-900 text-white border-2 border-emerald-400 flex flex-col items-center justify-center cursor-pointer shadow-2xl shadow-emerald-500/40 group" tabIndex={0}>
                <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-md pointer-events-none" style={{ transform: "scale(1.10885)" }} />
                <Shield className="w-7 h-7 sm:w-9 sm:h-9 text-emerald-400 mb-0.5 sm:mb-1 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <span className="text-[9px] sm:text-[11px] font-extrabold tracking-widest uppercase text-white font-mono relative z-10">ENTERPRISE</span>
                <span className="text-[7px] sm:text-[8px] text-amber-400 font-mono tracking-wider font-bold relative z-10">INTELLIGENCE</span>
              </div>

              <div className="absolute z-20 w-[3.25rem] h-[3.25rem] sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white dark:bg-[#131823] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border shadow-md border-slate-300 dark:border-white/15 hover:border-emerald-500" style={{ left: "78%", top: "43%", opacity: 1, transform: "translateY(-1.94596px)" }}>
                <Lock className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5" style={{ color: "rgb(5, 150, 105)" }} />
                <span className="text-[8px] sm:text-[9px] font-mono font-extrabold text-[#06182D] dark:text-white tracking-tight">CYBER</span>
              </div>
              <div className="absolute z-20 w-[3.25rem] h-[3.25rem] sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white dark:bg-[#131823] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border shadow-md border-slate-300 dark:border-white/15 hover:border-emerald-500" style={{ left: "64.8358%", top: "70.3532%", opacity: 1, transform: "translateY(5.99236px)" }}>
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5" style={{ color: "rgb(217, 119, 6)" }} />
                <span className="text-[8px] sm:text-[9px] font-mono font-extrabold text-[#06182D] dark:text-white tracking-tight">FINANCE</span>
              </div>
              <div className="absolute z-20 w-[3.25rem] h-[3.25rem] sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white dark:bg-[#131823] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border shadow-md border-slate-300 dark:border-white/15 hover:border-emerald-500" style={{ left: "35.2458%", top: "77.1302%", opacity: 1, transform: "translateY(-4.15289px)" }}>
                <Activity className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5" style={{ color: "rgb(13, 148, 136)" }} />
                <span className="text-[8px] sm:text-[9px] font-mono font-extrabold text-[#06182D] dark:text-white tracking-tight">OPERATIONS</span>
              </div>
              <div className="absolute z-20 w-[3.25rem] h-[3.25rem] sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white dark:bg-[#131823] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border shadow-md border-slate-300 dark:border-white/15 hover:border-emerald-500" style={{ left: "11.4888%", top: "58.2331%", opacity: 1, transform: "translateY(1.94596px)" }}>
                <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5" style={{ color: "rgb(99, 102, 241)" }} />
                <span className="text-[8px] sm:text-[9px] font-mono font-extrabold text-[#06182D] dark:text-white tracking-tight">LEGAL</span>
              </div>
              <div className="absolute z-20 w-[3.25rem] h-[3.25rem] sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white dark:bg-[#131823] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border shadow-md border-slate-300 dark:border-white/15 hover:border-emerald-500" style={{ left: "11.4359%", top: "27.877%", opacity: 1, transform: "translateY(-5.99236px)" }}>
                <Users className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5" style={{ color: "rgb(4, 120, 87)" }} />
                <span className="text-[8px] sm:text-[9px] font-mono font-extrabold text-[#06182D] dark:text-white tracking-tight">TPRM</span>
              </div>
              <div className="absolute z-20 w-[3.25rem] h-[3.25rem] sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white dark:bg-[#131823] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border shadow-md border-slate-300 dark:border-white/15 hover:border-emerald-500" style={{ left: "35.1267%", top: "8.89705%", opacity: 1, transform: "translateY(4.15289px)" }}>
                <Search className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5" style={{ color: "rgb(220, 38, 38)" }} />
                <span className="text-[8px] sm:text-[9px] font-mono font-extrabold text-[#06182D] dark:text-white tracking-tight">FRAUD</span>
              </div>
              <div className="absolute z-20 w-[3.25rem] h-[3.25rem] sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white dark:bg-[#131823] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border shadow-md border-slate-300 dark:border-white/15 hover:border-emerald-500" style={{ left: "64.7402%", top: "15.5707%", opacity: 1, transform: "translateY(-1.94596px)" }}>
                <Compass className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5" style={{ color: "rgb(180, 83, 9)" }} />
                <span className="text-[8px] sm:text-[9px] font-mono font-extrabold text-[#06182D] dark:text-white tracking-tight">GOVERNANCE</span>
              </div>

              <div className="absolute top-2 left-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1.5 shadow-sm" style={{ transform: "translateY(-1.73555px)" }}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>THREAT LEVEL: LOW</span>
              </div>
              <div className="absolute bottom-2 right-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-500/30 text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 flex items-center space-x-1.5 shadow-sm" style={{ transform: "translateY(1.2973px)" }}>
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                <span>GOVERNANCE: ACTIVE</span>
              </div>
            </div>

            {[
              {
                feature: featureCards[0],
                position: "absolute top-8 left-1/2 -translate-x-1/2 w-64",
              },
              {
                feature: featureCards[1],
                position: "absolute bottom-28 left-12 w-64",
              },
              {
                feature: featureCards[2],
                position: "absolute bottom-28 right-12 w-64",
              },
            ].map((item, index) => (
              <motion.div
                key={item.feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${item.position} bg-white/95 text-slate-950 border border-slate-200/80 rounded-[28px] p-6 shadow-2xl shadow-slate-950/10 backdrop-blur-sm`}
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-200 mb-4">
                  <span className="text-sm font-black">{index + 1}</span>
                </div>
                <h3 className="text-xl font-black leading-tight mb-2">
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
                className="bg-white border border-slate-200 shadow-lg rounded-[20px] p-6 text-left hover:border-blue-500/50 transition duration-300 flex items-center min-h-[90px]"
              >
                <h3 className="text-lg font-black bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-700 bg-clip-text text-transparent leading-snug">
                  {feat.title}
                </h3>
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
