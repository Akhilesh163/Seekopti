import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Brain, Target, TrendingDown, Lightbulb, Users, Play, Zap } from "lucide-react";
import studentImage from "@/assets/image.webp";
import { Button } from "@/components/ui/button";
import { BookSessionDialog } from "@/components/BookSessionDialog";

export const ProblemSection = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  return (
    <section className="pt-20 pb-20 px-8 md:px-16 lg:px-24 xl:px-16 bg-gradient-to-b from-background via-blue-50/15 to-background relative overflow-hidden mesh-purple-teal">
      {/* Colorful glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-300/10 blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-rose-200/10 blur-3xl pointer-events-none -z-10" />
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 lg:gap-16 items-center">
          {/* LEFT: Problem content (moved right on desktop via grid-order) */}
          <div className="lg:order-2 lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-600 text-base md:text-lg font-extrabold uppercase tracking-[0.14em] shadow-sm mb-6"
            >
              <Zap className="w-4 h-4 text-blue-600 stroke-[2.5]" />
              <span>THE SEEK YOUR Y ADVANTAGE</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-3xl md:text-4xl font-bold font-display text-foreground leading-[1.1] tracking-tight mb-4"
            >
              Why Most Students<br />Struggle with Quant
            </motion.h2>

            {/* Accent text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.13 }}
              className="text-base md:text-lg font-bold font-display text-primary leading-tight mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              It's not your potential.<br />
              It's the wrong approach.
            </motion.p>

            {/* Body copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-base text-muted-foreground leading-relaxed mb-6"
            >
              Students work hard. They solve questions. They watch videos. But the results don't reflect their effort. Why?
              <br />
              <strong className="text-foreground font-bold">Because they focus on the wrong things.</strong>
            </motion.p>

            {/* 3 Problem cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  num: "01",
                  icon: Brain,
                  title: "Confusing Concepts",
                  desc: "Topics feel hard because they're taught without clarity or connection.",
                  textColor: "text-blue-600",
                  iconBg: "bg-blue-50 text-blue-600 border-blue-100/50",
                  glow: "hover:shadow-blue-500/10 hover:border-blue-500/30",
                  lineColor: "bg-blue-500"
                },
                {
                  num: "02",
                  icon: Target,
                  title: "No Clear Strategy",
                  desc: "Random practice and guesswork make it hard to see real improvement.",
                  textColor: "text-indigo-600",
                  iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100/50",
                  glow: "hover:shadow-indigo-500/10 hover:border-indigo-500/30",
                  lineColor: "bg-indigo-500"
                },
                {
                  num: "03",
                  icon: TrendingDown,
                  title: "Inconsistent Results",
                  desc: "Mock scores fluctuate, confidence drops, and doubts keep coming back.",
                  textColor: "text-rose-600",
                  iconBg: "bg-rose-50 text-rose-600 border-rose-100/50",
                  glow: "hover:shadow-rose-500/10 hover:border-rose-500/30",
                  lineColor: "bg-rose-500"
                },
              ].map((card, i) => (
                <motion.div
                  key={card.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className={`relative bg-card rounded-[20px] border border-border/80 p-5 flex flex-col items-center text-center shadow-soft transition-all duration-300 ${card.glow}`}
                >
                  <span className={`absolute top-4 right-4 text-[9px] font-bold ${card.textColor}`}>
                    {card.num}
                  </span>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 mb-4 border ${card.iconBg} shadow-sm`}>
                    <card.icon className="w-5.5 h-5.5 stroke-[2]" />
                  </div>
                  <h4 className="text-sm font-bold text-foreground mb-2">{card.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">{card.desc}</p>
                  <div className={`w-8 h-[3px] rounded-full mt-4 ${card.lineColor}`} />
                </motion.div>
              ))}
            </div>

            {/* Bottom callout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="flex items-center gap-4 bg-primary/5 border border-primary/20 rounded-2xl px-5 py-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                <Lightbulb className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-base text-muted-foreground">The problem is not you.</p>
                <p className="text-base font-bold text-foreground">
                  The problem is the system most students follow.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Visual split panel (moved left on desktop via grid-order) */}
          <div className="lg:order-1">
            {/* "From → To" header */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mb-6">
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                From Confusion &amp; Overwhelm
              </span>
              <div className="hidden sm:flex items-center opacity-30 flex-1 min-w-[50px]">
                <svg viewBox="0 0 192 20" preserveAspectRatio="none" className="w-full h-[14px]">
                  <line x1="0" y1="10" x2="175" y2="10" stroke="currentColor" strokeWidth="1.5" />
                  <polygon points="175,4 192,10 175,16" fill="currentColor" />
                </svg>
              </div>
              <span className="text-muted-foreground/40 sm:hidden text-[8.4px]">↓</span>
              <span className="text-sm font-semibold text-emerald-600 whitespace-nowrap">
                To Clarity &amp; Confidence
              </span>
            </div>

            {/* Split panel */}
            <div className="relative rounded-[32px] overflow-hidden h-[260px] sm:h-[420px] md:h-[520px] lg:h-[480px] xl:h-[520px] isolate bg-gradient-to-b from-primary/5 to-transparent border border-border/40">
              <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
                <img
                  src={studentImage}
                  alt="Student with GMAT books"
                  className="h-[95%] w-auto object-contain object-bottom rounded-3xl drop-shadow-[0_6px_16px_rgba(0,0,0,0.08)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 lg:gap-16 mt-12 items-center">
          {/* You're not alone */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-[20px] border border-border/80 p-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left w-full shadow-soft"
          >
            <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              You're not alone. Thousands of students felt the same way—until they found the right guidance and system.
            </p>
          </motion.div>

          {/* Resolution */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start lg:pl-8"
          >
            <p className="text-base font-bold text-foreground leading-snug mb-1">
              Real guidance. Right strategy. Consistent results.
            </p>
            <p className="text-base font-semibold text-primary">
              That's what changes everything.
            </p>
          </motion.div>
        </div>

        {/* BOOK FREE DEMO BUTTON */}
        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-soft hover-lift"
            onClick={() => setIsBookDemoOpen(true)}
          >
            <Play className="w-4 h-4 fill-current" />
            Book a Session
          </Button>
        </div>

        {/* BOOK DEMO DIALOG */}
        <BookSessionDialog
          open={isBookDemoOpen}
          onOpenChange={setIsBookDemoOpen}
          title="Book a free demo"
          description="Share your details and we'll schedule a free 30-minute consultation with Aman."
        />
      </div>
    </section>
  );
};
