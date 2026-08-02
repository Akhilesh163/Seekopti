import React, { useState } from "react";
import { motion } from "framer-motion";
import { Timer } from "lucide-react";
import { BookSessionDialog } from "@/components/BookSessionDialog";

import booksIcon from "@/assets/paced-icon/books.webp";
import studentIcon from "@/assets/paced-icon/student.webp";
import analyticsIcon from "@/assets/paced-icon/analytics.webp";

export const GreShortcut = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);
  const cards = [
    {
      image: booksIcon,
      gradient: "from-purple-600 to-pink-500",
      borderColor: "border-purple-200 hover:border-purple-500",
      title: "CLARITY",
      description: "We simplify complex concepts and build strong foundations with clear frameworks.",
      badge: "Concepts that finally make sense",
      badgeClass: "bg-purple-100/80 text-purple-700 border-purple-200",
    },
    {
      image: studentIcon,
      gradient: "from-blue-600 to-cyan-500",
      borderColor: "border-blue-200 hover:border-blue-500",
      title: "STRATEGY",
      description: "We teach smart problem-solving strategies tailored to each question type and pattern.",
      badge: "Approach every question with confidence",
      badgeClass: "bg-blue-100/80 text-blue-700 border-blue-200",
    },
    {
      image: analyticsIcon,
      gradient: "from-emerald-600 to-teal-500",
      borderColor: "border-emerald-200 hover:border-emerald-500",
      title: "RESULTS",
      description: "We help you practice with purpose and build consistency that shows in your scores.",
      badge: "Consistent improvement. Better scores.",
      badgeClass: "bg-emerald-100/80 text-emerald-700 border-emerald-200",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden text-white">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-purple-600/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto text-center">
        {/* Top Text Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-base md:text-lg font-extrabold uppercase tracking-[0.14em] shadow-sm mb-4"
        >
          <Timer className="w-4 h-4 text-blue-400 stroke-[2.5]" />
          <span>THE SMART MONEY IS ON GRE</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold font-display text-white mt-4 mb-2 tracking-tight leading-tight"
        >
          Planning an MBA?{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 block sm:inline">The GRE is your smartest pathway.</span>
        </motion.h2>

        {/* Horizontal Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto my-5 origin-center"
        />

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mt-2"
        >
          Over the past 18 months, more and more MBA aspirants have switched from GMAT to GRE —
          largely to skip GMAT's Data Insights section. The same business schools, a shorter and
          friendlier test.
        </motion.p>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 text-left"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: card.hoverShadow }}
              className={`group relative rounded-[28px] border p-8 transition-all duration-300 overflow-hidden flex flex-col items-center text-center shadow-md hover:shadow-2xl bg-gradient-to-br from-white via-white to-slate-50 ${card.borderColor}`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${card.gradient}`} />

              <span className={`text-base md:text-lg font-black uppercase tracking-wider px-5 py-2 rounded-full border mb-6 shadow-2xs ${card.badgeClass}`}>
                {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
              </span>

              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white bg-gradient-to-br ${card.gradient} group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300`}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-10 h-10 object-contain filter drop-shadow-md"
                />
              </div>

              <h3 className={`text-xl md:text-2xl font-black text-slate-900 mb-3 tracking-tight ${card.titleColor}`}>
                {card.title}
              </h3>

              <p className="text-base md:text-lg text-slate-800 font-medium leading-relaxed max-w-[280px]">
                {card.description}
              </p>

              <div className="mt-4 flex justify-center">
                <span className={`inline-flex items-center gap-2.5 border text-sm font-bold px-4 py-2 rounded-2xl shadow-inner ${card.badgeClass}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  {card.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* BOOK A SESSION CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => setIsBookSessionOpen(true)}
            className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-extrabold text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span>Book a Session</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <Timer className="w-4 h-4 text-white" />
            </div>
          </button>
        </motion.div>
      </div>

      <BookSessionDialog
        open={isBookSessionOpen}
        onOpenChange={setIsBookSessionOpen}
        title="Book a free session"
        description="Share your details and we'll schedule a 1-on-1 strategy session with our mentors."
      />
    </section>
  );
};
