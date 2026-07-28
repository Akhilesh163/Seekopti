import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookSessionDialog } from "./BookSessionDialog";
import {
  Zap,
  Lightbulb,
  Target,
  LineChart,
  CheckCircle2,
  Calendar,
  ArrowRight,
} from "lucide-react";

export const SeekMethod = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);
  return (
    <section className="pt-20 pb-20 px-8 md:px-16 lg:px-24 xl:px-16 bg-gradient-to-b from-blue-50/40 via-indigo-50/20 to-background relative overflow-hidden mesh-blue-indigo" id="programs">
      {/* Decorative colorful glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-emerald-400/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-indigo-400/10 blur-3xl pointer-events-none -z-10" />
      <div className="max-w-[1440px] mx-auto">
        {/* TOP: Badge + Headline + Sub */}
        <div className="text-center max-w-[900px] mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-600 text-base md:text-lg font-extrabold uppercase tracking-[0.14em] shadow-sm mb-6"
          >
            <Zap className="w-4 h-4 text-blue-600 stroke-[2.5]" />
            <span>THE SEEK YOUR Y METHOD</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-3xl md:text-4xl font-bold font-display text-foreground leading-[1.1] tracking-tight mb-5"
          >
            A proven system to make quant{" "}
            <span className="text-primary">simple, structured,</span> and score-driven.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-muted-foreground leading-relaxed"
            style={{ fontSize: "20px" }}
          >
            We don't teach random tricks. We build a system that helps you{" "}
            <strong className="text-foreground font-semibold">understand, apply,</strong> and{" "}
            <strong className="text-foreground font-semibold">improve consistently.</strong>
          </motion.p>
        </div>

        {/* FRAMEWORK CARDS */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0 pt-8">
          {[
            {
              num: "01",
              label: "CLARITY",
              icon: Lightbulb,
              desc: "We simplify complex concepts and build strong foundations with clear frameworks.",
              chip: "Concepts that finally make sense",
              theme: "from-blue-500 to-indigo-500",
              textTheme: "text-blue-600",
              glow: "hover:shadow-blue-500/10 hover:border-blue-500/30",
              iconBg: "bg-blue-50 text-blue-600 border-blue-100",
              numBg: "bg-blue-600 text-white border-blue-500/20",
              chipBg: "bg-blue-50 border-blue-200 text-blue-700",
              chipIcon: "text-blue-600",
              lineColor: "bg-blue-500",
            },
            {
              num: "02",
              label: "STRATEGY",
              icon: Target,
              desc: "We teach smart problem-solving strategies tailored to each question type and pattern.",
              chip: "Approach every question with confidence",
              theme: "from-indigo-600 to-violet-600",
              textTheme: "text-indigo-600",
              glow: "hover:shadow-indigo-500/10 hover:border-indigo-500/30",
              iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
              numBg: "bg-indigo-600 text-white border-indigo-500/20",
              chipBg: "bg-indigo-50 border-indigo-200 text-indigo-700",
              chipIcon: "text-indigo-600",
              lineColor: "bg-indigo-500",
            },
            {
              num: "03",
              label: "RESULTS",
              icon: LineChart,
              desc: "We help you practice with purpose and build consistency that shows in your scores.",
              chip: "Consistent improvement. Better scores.",
              theme: "from-emerald-500 to-teal-600",
              textTheme: "text-emerald-600",
              glow: "hover:shadow-emerald-500/10 hover:border-emerald-500/30",
              iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
              numBg: "bg-emerald-600 text-white border-emerald-500/20",
              chipBg: "bg-emerald-50 border-emerald-200 text-emerald-700",
              chipIcon: "text-emerald-600",
              lineColor: "bg-emerald-500",
            },
          ].map((card, i) => (
            <React.Fragment key={card.num}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className={`flex-1 relative flex flex-col bg-card border border-border/80 rounded-[28px] px-6 pt-16 pb-8 shadow-soft transition-all duration-300 ${card.glow}`}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-[28px] bg-gradient-to-r ${card.theme}`} />

                {/* Number badge floating above card */}
                <div className={`absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center font-black text-lg shadow-md border-2 border-white ${card.numBg}`}>
                  {card.num}
                </div>

                {/* Icon CENTERED + Heading+Text CENTERED */}
                <div className="flex flex-col items-center text-center gap-4 flex-1 mb-6 pt-2">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border shadow-md ${card.iconBg}`}>
                    <card.icon className="w-8 h-8 stroke-[2.2]" />
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <h3 className={`text-xl md:text-2xl font-black uppercase tracking-wider leading-tight ${card.textTheme}`}>
                      {card.label}
                    </h3>
                    <div className={`w-10 h-[3.5px] rounded-full mt-2.5 mb-3.5 ${card.lineColor}`} />
                    <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-sm mx-auto">{card.desc}</p>
                  </div>
                </div>

                {/* Single chip */}
                <div className="flex justify-center pt-2">
                  <span className={`inline-flex items-center gap-2.5 border text-base font-bold px-5 py-2.5 rounded-2xl shadow-inner ${card.chipBg}`}>
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${card.chipIcon}`} />
                    {card.chip}
                  </span>
                </div>
              </motion.div>

              {/* Connector arrow */}
              {i < 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                  className="hidden lg:flex items-center justify-center px-4 shrink-0"
                >
                  <svg width="56" height="20" viewBox="0 0 56 20" fill="none">
                    <line
                      x1="0"
                      y1="10"
                      x2="44"
                      y2="10"
                      stroke="hsl(var(--primary))"
                      strokeWidth="1.5"
                      strokeDasharray="5 3"
                    />
                    <polygon points="42,4 56,10 42,16" fill="hsl(var(--primary))" />
                  </svg>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14 text-center flex justify-center z-10 relative">
          <button
            onClick={() => setIsBookSessionOpen(true)}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-extrabold text-base md:text-lg shadow-xl shadow-blue-500/20 hover:opacity-95 hover:scale-105 transition-all duration-200 cursor-pointer"
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
