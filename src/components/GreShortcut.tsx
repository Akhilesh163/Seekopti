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
      cardBg: "bg-white",
      borderColor: "border-2 border-purple-200 hover:border-purple-500",
      hoverShadow: "0 20px 40px -15px rgba(168, 85, 247, 0.3)",
      title: "Shorter & simpler",
      description: (
        <>
          1 hr 58 min vs GMAT's 2 hr 15 min — and{" "}
          <strong className="font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">no Data Insights section</strong>.
          Just Quant, Verbal and one essay. Most students reach their target GRE score in less time.
        </>
      ),
      descColor: "text-slate-900 font-bold",
      titleColor: "bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600",
    },
    {
      image: studentIcon,
      gradient: "from-blue-600 to-cyan-500",
      cardBg: "bg-white",
      borderColor: "border-2 border-blue-200 hover:border-blue-500",
      hoverShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.3)",
      title: "Same B-schools",
      description: (
        <>
          ISB, all M7, Ivy League, INSEAD, LBS, NUS and NTU Singapore accept GRE scores at par with GMAT for their MBA programs.
        </>
      ),
      descColor: "text-slate-900 font-bold",
      titleColor: "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600",
    },
    {
      image: analyticsIcon,
      gradient: "from-emerald-600 to-teal-500",
      cardBg: "bg-white",
      borderColor: "border-2 border-emerald-200 hover:border-emerald-500",
      hoverShadow: "0 20px 40px -15px rgba(16, 185, 129, 0.3)",
      title: "One test, two doors",
      description: (
        <>
          A single GRE score works for MBA and MS applications — keep both options open with one prep journey.
        </>
      ),
      descColor: "text-slate-900 font-bold",
      titleColor: "bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600",
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
              className={`${card.cardBg} rounded-[28px] ${card.borderColor} p-8 flex flex-col gap-5 relative overflow-hidden transition-all duration-300 shadow-2xl`}
            >
              {/* Decorative glow blob */}
              <div className={`absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br ${card.gradient} opacity-20 blur-2xl pointer-events-none`} />

              {/* Big Realistic 3D Icon Container */}
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center bg-gradient-to-tr ${card.gradient} shadow-xl p-3.5`}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>

              {/* Card Title */}
              <h3 className={`text-[30px] font-extrabold font-display leading-tight ${card.titleColor}`}>
                {card.title}
              </h3>

              {/* Card Description */}
              <p className={`leading-relaxed font-medium ${card.descColor}`} style={{ fontSize: "20px" }}>
                {card.description}
              </p>
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
