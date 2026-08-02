import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookSessionDialog } from "./BookSessionDialog";
import {
  ShieldCheck,
  CalendarDays,
  Presentation,
  MessagesSquare,
  Trophy,
  BookOpen,
  Sparkles,
  Calendar,
  ArrowRight,
} from "lucide-react";

const advantageData = [
  {
    icon: ShieldCheck,
    title: "100% Score Guarantee",
    text: (
      <>
        100% score guarantee for{" "}
        <a href="/gmat" className="underline font-bold text-blue-600 hover:text-blue-800 transition-colors">GMAT</a>,{" "}
        <a href="/gre" className="underline font-bold text-blue-600 hover:text-blue-800 transition-colors">GRE</a> and{" "}
        <span className="font-bold text-blue-600">SAT</span>
      </>
    ),
    gradient: "from-blue-600 to-indigo-600",
    cardBg: "bg-gradient-to-br from-blue-100/95 via-blue-50 to-indigo-100/95 border-blue-300/90 hover:border-blue-500 shadow-blue-500/20",
    badgeBg: "bg-blue-100/80 text-blue-700 border-blue-200",
    titleColor: "text-blue-900",
    textColor: "text-blue-800",
    glowColor: "group-hover:shadow-blue-500/20",
    tag: "GUARANTEE",
  },
  {
    icon: CalendarDays,
    title: "Daily Live Classes",
    text: "Daily live classes for maximum accountability & structured progress",
    gradient: "from-indigo-600 to-violet-600",
    cardBg: "bg-gradient-to-br from-indigo-100/95 via-indigo-50 to-violet-100/95 border-indigo-300/90 hover:border-indigo-500 shadow-indigo-500/20",
    badgeBg: "bg-indigo-100/80 text-indigo-700 border-indigo-200",
    titleColor: "text-indigo-900",
    textColor: "text-indigo-800",
    glowColor: "group-hover:shadow-indigo-500/20",
    tag: "ACCOUNTABILITY",
  },
  {
    icon: Presentation,
    title: "100+ Hours Live Training",
    text: "100+ hours of live training — the highest live instruction in the world",
    gradient: "from-purple-600 to-pink-600",
    cardBg: "bg-gradient-to-br from-purple-100/95 via-purple-50 to-pink-100/95 border-purple-300/90 hover:border-purple-500 shadow-purple-500/20",
    badgeBg: "bg-purple-100/80 text-purple-700 border-purple-200",
    titleColor: "text-purple-900",
    textColor: "text-purple-800",
    glowColor: "group-hover:shadow-purple-500/20",
    tag: "WORLD RECORD",
  },
  {
    icon: MessagesSquare,
    title: "Live Test Discussions",
    text: "Live discussion of all test questions with expert faculty and mentors",
    gradient: "from-emerald-600 to-teal-600",
    cardBg: "bg-gradient-to-br from-emerald-100/95 via-emerald-50 to-teal-100/95 border-emerald-300/90 hover:border-emerald-500 shadow-emerald-500/20",
    badgeBg: "bg-emerald-100/80 text-emerald-700 border-emerald-200",
    titleColor: "text-emerald-900",
    textColor: "text-emerald-800",
    glowColor: "group-hover:shadow-emerald-500/20",
    tag: "EXPERT FACULTY",
  },
  {
    icon: Trophy,
    title: "World Record Scores",
    text: "Record holders of GMAT 800, GRE 339, and SAT 1580",
    gradient: "from-amber-500 to-orange-600",
    cardBg: "bg-gradient-to-br from-amber-100/95 via-amber-50 to-orange-100/95 border-amber-300/90 hover:border-amber-500 shadow-amber-500/20",
    badgeBg: "bg-amber-100/80 text-amber-700 border-amber-200",
    titleColor: "text-amber-900",
    textColor: "text-amber-800",
    glowColor: "group-hover:shadow-amber-500/20",
    tag: "PROVEN RESULTS",
  },
  {
    icon: BookOpen,
    title: "18+ Specialized Courses",
    text: (
      <>
        18+ unique courses to prepare for{" "}
        <a href="/gmat" className="underline font-bold text-cyan-600 hover:text-cyan-800 transition-colors">GMAT</a>,{" "}
        <a href="/gre" className="underline font-bold text-cyan-600 hover:text-cyan-800 transition-colors">GRE</a> and{" "}
        <span className="font-bold text-cyan-600">SAT</span>
      </>
    ),
    gradient: "from-cyan-600 to-blue-600",
    cardBg: "bg-gradient-to-br from-cyan-100/95 via-cyan-50 to-blue-100/95 border-cyan-300/90 hover:border-cyan-500 shadow-cyan-500/20",
    badgeBg: "bg-cyan-100/80 text-cyan-700 border-cyan-200",
    titleColor: "text-cyan-900",
    textColor: "text-cyan-800",
    glowColor: "group-hover:shadow-cyan-500/20",
    tag: "COMPREHENSIVE",
  },
];

export const SeekAdvantageCards: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-background relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-600 text-base md:text-lg font-extrabold uppercase tracking-[0.14em] shadow-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600 stroke-[2.5]" />
            <span>EXCLUSIVE ADVANTAGE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-950 dark:text-slate-950 tracking-tight leading-[1.15]"
          >
            What You Get Only With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              Seek Your Y
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-lg md:text-xl text-muted-foreground mt-3 font-normal italic"
          >
            and nowhere else in the world
          </motion.p>
        </div>

        {/* 6 Colorful Cards Grid */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {advantageData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className={`group relative rounded-[28px] border p-8 transition-all duration-300 overflow-hidden flex flex-col items-center text-center shadow-md hover:shadow-2xl ${item.cardBg} ${item.glowColor}`}
              >
                {/* Top Subtle Color Gradient Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.gradient}`}
                />

                {/* Badge Tag */}
                <span
                  className={`text-sm font-black uppercase tracking-wider px-4 py-1.5 rounded-full border mb-6 shadow-2xs ${item.badgeBg}`}
                >
                  {item.tag}
                </span>

                {/* Colorful Icon Box */}
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white bg-gradient-to-br ${item.gradient} group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300`}
                >
                  <Icon className="w-10 h-10 stroke-[2]" />
                </div>

                {/* Title */}
                <h3 className={`text-xl md:text-2xl font-black mb-3 tracking-tight ${item.titleColor}`}>
                  {item.title}
                </h3>

                {/* Text Content */}
                <p className={`text-base md:text-lg font-medium leading-relaxed max-w-[280px] ${item.textColor}`}>
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-16 pt-4 pb-8 text-center flex justify-center z-10 relative">
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
