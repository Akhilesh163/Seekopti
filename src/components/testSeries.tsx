import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Calculator, Languages, Mic, BarChart3, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";
import testSlide0 from "@/assets/student_pics/test.jpg";
import testSlide1 from "@/assets/student_pics/test1.jpg";
import testSlide2 from "@/assets/student_pics/test2.jpg";
import testSlide3 from "@/assets/student_pics/test3.jpg";
import testSlide4 from "@/assets/student_pics/test4.jpg";

const testSeriesFaqs = [
  {
    question: "Are these mock tests adaptive like the real GRE and GMAT?",
    answer: "Yes, our GRE and GMAT Focus mocks are built with adaptive algorithms that mimic the exact question selection, section timing, and scoring mechanics of the real exams."
  },
  {
    question: "Do I get step-by-step logic explanations for all questions?",
    answer: "Absolutely. Every single question in our test series features detailed, step-by-step logical explanations to help you understand your errors and refine your approach."
  },
  {
    question: "How long is the test series valid for?",
    answer: "The test series is valid for 6 months from the date of purchase, giving you ample time to take all mocks and review your performance."
  },
  {
    question: "Can I receive analysis feedback on my performance reports?",
    answer: "Yes, you can schedule a strategy call to have our mentors analyze your mock performance reports and recommend targeted improvement actions."
  }
];

const slides = [
  {
    image: testSlide0,
    caption: "Exam preparation scene",
  },
  {
    image: testSlide1,
    caption: "Pencil and answer sheet",
  },
  {
    image: testSlide2,
    caption: "Exam paper handoff",
  },
  {
    image: testSlide3,
    caption: "Writing test answers",
  },
  {
    image: testSlide4,
    caption: "Desk with exam sheet and pencil",
  },
];

const TestSeriesComponent: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);

  const greCards = [
    {
      title: "10 full-length mocks",
      description: "Adaptive, exam-interface mocks matching real difficulty, timing (12Q/18min ... 15Q/26min) and scoring.",
      icon: FileText,
      iconBg: "from-fuchsia-600 via-purple-600 to-indigo-600",
      cardBg: "border-fuchsia-300/90 bg-gradient-to-br from-fuchsia-100/95 via-violet-100/90 to-indigo-100/95",
      borderHover: "hover:border-fuchsia-500",
      pill: "text-fuchsia-950 bg-fuchsia-100/90 border-fuchsia-200/90",
      titleClass: "text-fuchsia-950",
      descClass: "text-fuchsia-900/95",
      glow: "from-fuchsia-500 via-purple-500 to-indigo-500",
    },
    {
      title: "10 Quant sectionals",
      description: "Arithmetic to Data Analysis — topic-weighted exactly like ETS.",
      icon: Calculator,
      iconBg: "from-sky-600 via-blue-600 to-cyan-600",
      cardBg: "border-sky-300/90 bg-gradient-to-br from-sky-100/95 via-blue-100/90 to-cyan-100/95",
      borderHover: "hover:border-sky-500",
      pill: "text-sky-950 bg-sky-100/90 border-sky-200/90",
      titleClass: "text-sky-950",
      descClass: "text-sky-900/95",
      glow: "from-sky-500 via-blue-500 to-cyan-500",
    },
    {
      title: "10 Verbal sectionals",
      description: "RC, Critical Reasoning, TC and SE in real section proportions.",
      icon: Languages,
      iconBg: "from-emerald-600 via-green-600 to-lime-600",
      cardBg: "border-emerald-300/90 bg-gradient-to-br from-emerald-100/95 via-green-100/90 to-lime-100/95",
      borderHover: "hover:border-emerald-500",
      pill: "text-emerald-950 bg-emerald-100/90 border-emerald-200/90",
      titleClass: "text-emerald-950",
      descClass: "text-emerald-900/95",
      glow: "from-emerald-500 via-green-500 to-lime-500",
    },
    {
      title: "Live analysis",
      description: "Group analysis session after each mock weekend + error-log templates.",
      icon: Mic,
      iconBg: "from-amber-500 via-orange-500 to-rose-500",
      cardBg: "border-amber-300/90 bg-gradient-to-br from-amber-100/95 via-orange-100/90 to-rose-100/95",
      borderHover: "hover:border-amber-500",
      pill: "text-amber-950 bg-amber-100/90 border-amber-200/90",
      titleClass: "text-amber-950",
      descClass: "text-amber-900/95",
      glow: "from-amber-500 via-orange-500 to-rose-500",
    },
  ];

  const gmatCards = [
    {
      title: "10 full-length mocks",
      description: "Focus interface, 205–805 scoring, and the review-&-edit tool included.",
      icon: FileText,
      iconBg: "from-indigo-600 via-violet-600 to-purple-600",
      cardBg: "border-indigo-300/90 bg-gradient-to-br from-indigo-50/90 via-violet-50/80 to-purple-50/80",
      borderHover: "hover:border-indigo-400",
      pill: "text-indigo-950 bg-indigo-100/80 border-indigo-200/90",
      titleClass: "text-indigo-950",
      descClass: "text-indigo-900/90",
      glow: "from-indigo-500 via-violet-500 to-purple-500",
    },
    {
      title: "10 DI sectionals",
      description: "All five DI types — DS, MSR, tables, graphics, two-part — the section that decides percentiles.",
      icon: BarChart3,
      iconBg: "from-rose-600 via-pink-600 to-fuchsia-600",
      cardBg: "border-rose-300/90 bg-gradient-to-br from-rose-50/90 via-pink-50/80 to-fuchsia-50/80",
      borderHover: "hover:border-rose-400",
      pill: "text-rose-950 bg-rose-100/80 border-rose-200/90",
      titleClass: "text-rose-950",
      descClass: "text-rose-900/90",
      glow: "from-rose-500 via-pink-500 to-fuchsia-500",
    },
    {
      title: "10 Quant + Verbal sectionals",
      description: "Five of each, calibrated to GMAC difficulty curves.",
      icon: Calculator,
      iconBg: "from-teal-600 via-emerald-600 to-green-600",
      cardBg: "border-teal-300/90 bg-gradient-to-br from-teal-50/90 via-emerald-50/80 to-green-50/80",
      borderHover: "hover:border-teal-400",
      pill: "text-teal-950 bg-teal-100/80 border-teal-200/90",
      titleClass: "text-teal-950",
      descClass: "text-teal-900/90",
      glow: "from-teal-500 via-emerald-500 to-green-500",
    },
    {
      title: "Live analysis",
      description: "Faculty-led mock debriefs on strategy, pacing and answer-changing tactics.",
      icon: Mic,
      iconBg: "from-orange-500 via-amber-500 to-yellow-500",
      cardBg: "border-orange-300/90 bg-gradient-to-br from-orange-50/90 via-amber-50/80 to-yellow-50/80",
      borderHover: "hover:border-orange-400",
      pill: "text-orange-950 bg-orange-100/80 border-orange-200/90",
      titleClass: "text-orange-950",
      descClass: "text-orange-900/90",
      glow: "from-orange-500 via-amber-500 to-yellow-500",
    },
  ];

  const slides = [
    {
      image: testSlide0,
      caption: "Exam preparation scene",
    },
    {
      image: testSlide1,
      caption: "Pencil and answer sheet",
    },
    {
      image: testSlide2,
      caption: "Exam paper handoff",
    },
    {
      image: testSlide3,
      caption: "Writing test answers",
    },
    {
      image: testSlide4,
      caption: "Desk with exam sheet and pencil",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    slides.forEach(({ image }) => {
      const preloaded = new Image();
      preloaded.src = image;
    });

    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-background text-foreground">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/90 pt-[76px] md:pt-[84px] pb-24 text-slate-900 border-b border-slate-200/60">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-blue-500/15 blur-[140px] pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[320px] h-[320px] rounded-full bg-indigo-500/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[280px] h-[280px] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(rgba(15,23,42,0.06) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-indigo-700 shadow-sm mb-6">
                  <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                  Test Series
                </div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display leading-[1.1] tracking-tight mb-6 text-slate-950"
                >
                  Achieve exam momentum with{' '}
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500">
                    test series built for scores.
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-lg sm:text-xl md:text-[1.35rem] text-slate-700 font-medium leading-relaxed mb-8 max-w-3xl"
                >
                  30 realistic tests per exam — 10 full-length adaptive mocks plus 20 sectionals — with the analytics to turn every attempt into a score improvement.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-wrap gap-4"
                >
                  <button 
                    onClick={() => setIsBookSessionOpen(true)}
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Book a Free Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setIsBookSessionOpen(true)}
                    className="inline-flex items-center rounded-2xl border border-slate-300 bg-white/80 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-indigo-50/60"
                  >
                    Talk to an Expert
                  </button>
                </motion.div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] rounded-[32px] overflow-hidden border border-white/70 shadow-[0_30px_60px_rgba(15,23,42,0.2)] bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950">
                <div className="absolute inset-0 w-full h-full" style={{ opacity: 1, transform: 'scale(1.00164)' }}>
                  {slides.map((slide, index) => (
                    <motion.img
                      key={slide.caption || index}
                      src={slide.image}
                      alt={slide.caption || "Campus image"}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: index === currentSlide ? 1 : 0, scale: index === currentSlide ? 1 : 1.02 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      loading="eager"
                      decoding="async"
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-slate-950/5 to-black/0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GRE TEST SERIES SECTION */}
      <section className="py-20 px-6 bg-slate-50/60">
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="rounded-[32px] border-2 border-blue-200/80 bg-gradient-to-br from-blue-50/90 via-indigo-50/60 to-white p-8 md:p-12 shadow-lg mb-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-600 text-white text-xs md:text-sm font-extrabold uppercase tracking-widest shadow-md mb-5">
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
                GRE
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-950 tracking-tight leading-[1.15] mb-5">
                GRE Test Series — <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">₹4,999</span>
              </h2>
              <p className="text-slate-700 font-medium leading-relaxed" style={{ fontSize: "24px" }}>
                Section-adaptive mocks calibrated to the shorter GRE, with percentile benchmarking against thousands of test-takers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mb-12">
            {greCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.2)" }}
                  className={`rounded-[28px] border-2 p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${card.cardBg} ${card.borderHover}`}
                >
                  <div className={`absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br ${card.glow} opacity-15 blur-2xl pointer-events-none`} />
                  <div>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-tr ${card.iconBg} shadow-lg mb-6`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${card.pill}`}>GRE</span>
                    <h3 className={`text-2xl font-extrabold mt-4 mb-2 ${card.titleClass}`}>{card.title}</h3>
                    <p className={`leading-relaxed font-normal ${card.descClass}`} style={{ fontSize: "22px" }}>
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button 
            onClick={() => setIsBookSessionOpen(true)}
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-10 py-4 text-white font-extrabold text-lg shadow-xl shadow-indigo-500/25 hover:opacity-95 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>Get GRE Test Series</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </button>
        </div>
      </section>

      {/* 3. GMAT TEST SERIES SECTION */}
      <section className="py-20 px-6 bg-white border-t border-slate-200/70">
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="rounded-[32px] border-2 border-indigo-200/80 bg-gradient-to-br from-indigo-50/90 via-violet-50/60 to-white p-8 md:p-12 shadow-lg mb-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-indigo-600 text-white text-xs md:text-sm font-extrabold uppercase tracking-widest shadow-md mb-5">
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
                GMAT
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-950 tracking-tight leading-[1.15] mb-5">
                GMAT Focus Test Series — <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">₹5,999</span>
              </h2>
              <p className="text-slate-700 font-medium leading-relaxed" style={{ fontSize: "24px" }}>
                Question-adaptive Focus Edition mocks with sectional and sub-sectional gap analysis across Quant, Verbal and DI.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mb-12">
            {gmatCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(79, 70, 229, 0.2)" }}
                  className={`rounded-[28px] border-2 p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${card.cardBg} ${card.borderHover}`}
                >
                  <div className={`absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br ${card.glow} opacity-15 blur-2xl pointer-events-none`} />
                  <div>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-tr ${card.iconBg} shadow-lg mb-6`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${card.pill}`}>GMAT</span>
                    <h3 className={`text-2xl font-extrabold mt-4 mb-2 ${card.titleClass}`}>{card.title}</h3>
                    <p className={`leading-relaxed font-normal ${card.descClass}`} style={{ fontSize: "22px" }}>
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button 
            onClick={() => setIsBookSessionOpen(true)}
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-10 py-4 text-white font-extrabold text-lg shadow-xl shadow-indigo-500/25 hover:opacity-95 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>Get GMAT Test Series</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </button>
        </div>
      </section>

      {/* 4. VALUE CHECK SECTION */}
      <section className="py-20 px-6 bg-slate-50/70 border-t border-slate-200/70">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-blue-400/50 bg-blue-500/10 px-6 py-3 text-sm md:text-base font-black uppercase tracking-[0.18em] text-blue-700 shadow-sm mb-5">
            VALUE CHECK
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-slate-950 tracking-tight text-center">
            Why this is the <span className="text-blue-600">best-value</span> series anywhere
          </h2>

          <div className="mt-12 overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 text-left">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100/90 border-b-2 border-slate-300 text-sm md:text-base font-semibold uppercase tracking-wider text-slate-700">
                    <th className="px-6 py-5.5 md:py-6">&nbsp;</th>
                    <th className="px-6 py-5.5 md:py-6">Seek Your Y</th>
                    <th className="px-6 py-5.5 md:py-6">Official Mocks</th>
                    <th className="px-6 py-5.5 md:py-6">Other Prep</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300 text-base">
                  <tr className="hover:bg-blue-50/40 transition-colors duration-150 group">
                    <td className="px-6 py-6.5 md:py-7 font-semibold text-slate-900">Total tests</td>
                    <td className="px-6 py-6.5 md:py-7 text-center">
                      <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full border border-slate-200/80 text-base md:text-lg">
                        30 tests
                      </span>
                    </td>
                    <td className="px-6 py-6.5 md:py-7 text-center">
                      <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full border border-slate-200/80 text-base md:text-lg">
                        3–4 mocks
                      </span>
                    </td>
                    <td className="px-6 py-6.5 md:py-7 text-center">
                      <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full border border-slate-200/80 text-base md:text-lg">
                        15–25 tests
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors duration-150 group">
                    <td className="px-6 py-6.5 md:py-7 font-semibold text-slate-900">Full-length mocks</td>
                    <td className="px-6 py-6.5 md:py-7 text-center">
                      <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full border border-slate-200/80 text-base md:text-lg">
                        10 adaptive mocks
                      </span>
                    </td>
                    <td className="px-6 py-6.5 md:py-7 text-center">
                      <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full border border-slate-200/80 text-base md:text-lg">
                        3–4 mocks
                      </span>
                    </td>
                    <td className="px-6 py-6.5 md:py-7 text-center">
                      <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full border border-slate-200/80 text-base md:text-lg">
                        5–10 mocks
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors duration-150 group">
                    <td className="px-6 py-6.5 md:py-7 font-semibold text-slate-900">Sectional drills</td>
                    <td className="px-6 py-6.5 md:py-7 text-center">
                      <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full border border-slate-200/80 text-base md:text-lg">
                        20 sectionals
                      </span>
                    </td>
                    <td className="px-6 py-6.5 md:py-7 text-center">
                      <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full border border-slate-200/80 text-base md:text-lg">
                        None
                      </span>
                    </td>
                    <td className="px-6 py-6.5 md:py-7 text-center">
                      <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full border border-slate-200/80 text-base md:text-lg">
                        10–15 sectionals
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors duration-150 group">
                    <td className="px-6 py-6.5 md:py-7 font-semibold text-slate-900">Live mock debriefs</td>
                    <td className="px-6 py-6.5 md:py-7 text-center">
                      <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full border border-slate-200/80 text-base md:text-lg">
                        Faculty-led strategy review
                      </span>
                    </td>
                    <td className="px-6 py-6.5 md:py-7 text-center">
                      <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full border border-slate-200/80 text-base md:text-lg">
                        None
                      </span>
                    </td>
                    <td className="px-6 py-6.5 md:py-7 text-center">
                      <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full border border-slate-200/80 text-base md:text-lg">
                        None / Recorded only
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors duration-150 group">
                    <td className="px-6 py-6.5 md:py-7 font-semibold text-slate-900">Performance tracking</td>
                    <td className="px-6 py-6.5 md:py-7 text-center">
                      <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full border border-slate-200/80 text-base md:text-lg">
                        Advanced gap analysis
                      </span>
                    </td>
                    <td className="px-6 py-6.5 md:py-7 text-center">
                      <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full border border-slate-200/80 text-base md:text-lg">
                        Basic score report
                      </span>
                    </td>
                    <td className="px-6 py-6.5 md:py-7 text-center">
                      <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full border border-slate-200/80 text-base md:text-lg">
                        Standard report
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors duration-150 group">
                    <td className="px-6 py-6.5 md:py-7 font-semibold text-slate-900">Approx. price</td>
                    <td className="px-6 py-6.5 md:py-7 text-center">
                      <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full border border-slate-200/80 text-base md:text-lg font-bold">
                        ₹4,999 (GRE) / ₹5,999 (GMAT)
                      </span>
                    </td>
                    <td className="px-6 py-6.5 md:py-7 text-center">
                      <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full border border-slate-200/80 text-base md:text-lg">
                        ₹9,200 (GMAT) / ₹10,000 (GRE)
                      </span>
                    </td>
                    <td className="px-6 py-6.5 md:py-7 text-center">
                      <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full border border-slate-200/80 text-base md:text-lg">
                        ₹6,000 – ₹12,000
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DIAGNOSTIC CTA */}
      <section className="py-20 px-6 bg-white border-t border-slate-200/70">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-blue-400/50 bg-blue-500/10 px-6 py-3 text-sm md:text-base font-black uppercase tracking-[0.18em] text-blue-700 shadow-sm mb-5">
            FREE TRIAL
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-slate-950 tracking-tight text-center">
            Take a free diagnostic mock
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
            Not sure where you stand? Start with one free full-length mock — GRE or GMAT — and get a strategy call on your report.
          </p>

          <button 
            onClick={() => setIsBookSessionOpen(true)}
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-9 py-4 text-lg font-extrabold text-white shadow-xl shadow-indigo-500/25 transition hover:opacity-95 hover:scale-[1.02] duration-200"
          >
            Take the Free Diagnostic
          </button>
        </div>
      </section>

      <CallToAction />
      <CustomFAQ faqs={testSeriesFaqs} title="Test Series FAQs" />
      <Footer />
      <BookSessionDialog open={isBookSessionOpen} onOpenChange={setIsBookSessionOpen} />
    </div>
  );
};

export default TestSeriesComponent;
