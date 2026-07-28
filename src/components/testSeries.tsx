import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Calculator, Languages, Mic, BarChart3, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";

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

const TestSeriesComponent: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);

  const greCards = [
    {
      title: "10 full-length mocks",
      description: "Adaptive, exam-interface mocks matching real difficulty, timing (12Q/18min ... 15Q/26min) and scoring.",
      icon: FileText,
      gradient: "from-blue-600 to-blue-400",
    },
    {
      title: "10 Quant sectionals",
      description: "Arithmetic to Data Analysis — topic-weighted exactly like ETS.",
      icon: Calculator,
      gradient: "from-orange-500 to-pink-500",
    },
    {
      title: "10 Verbal sectionals",
      description: "RC, Critical Reasoning, TC and SE in real section proportions.",
      icon: Languages,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Live analysis",
      description: "Group analysis session after each mock weekend + error-log templates.",
      icon: Mic,
      gradient: "from-purple-600 to-indigo-600",
    },
  ];

  const gmatCards = [
    {
      title: "10 full-length mocks",
      description: "Focus interface, 205–805 scoring, and the review-&-edit tool included.",
      icon: FileText,
      gradient: "from-blue-600 to-blue-400",
    },
    {
      title: "10 DI sectionals",
      description: "All five DI types — DS, MSR, tables, graphics, two-part — the section that decides percentiles.",
      icon: BarChart3,
      gradient: "from-purple-600 to-indigo-600",
    },
    {
      title: "10 Quant + Verbal sectionals",
      description: "Five of each, calibrated to GMAC difficulty curves.",
      icon: Calculator,
      gradient: "from-orange-500 to-pink-500",
    },
    {
      title: "Live analysis",
      description: "Faculty-led mock debriefs on strategy, pacing and answer-changing tactics.",
      icon: Mic,
      gradient: "from-purple-600 to-indigo-600",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/70 via-slate-50 to-white pt-[76px] md:pt-[84px] pb-24 text-slate-900 border-b border-slate-200/60">
        {/* Soft decorative glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(rgba(15,23,42,0.06) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>
        
        <div className="max-w-[1200px] mx-auto px-6 text-left relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.1] tracking-tight mb-6 text-slate-900"
            >
              GRE & GMAT Test Series
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8"
            >
              30 realistic tests per exam — 10 full-length adaptive mocks plus 20 sectionals — with the analytics to turn every attempt into a score improvement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="inline-flex items-center justify-center rounded-[14px] bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-500/20 transition hover:opacity-95 duration-200"
              >
                Book a Free Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. GRE TEST SERIES SECTION */}
      <section className="py-20 px-6 bg-slate-50/50">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/40" />
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">GRE</span>
            <div className="h-px w-12 bg-primary/40" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground tracking-tight text-center">
            GRE Test Series — ₹4,999
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground font-normal leading-relaxed max-w-3xl mx-auto mb-14">
            Section-adaptive mocks calibrated to the shorter GRE, with percentile benchmarking against thousands of test-takers.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-12">
            {greCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.1)" }}
                  className="bg-card rounded-[24px] border border-border/50 p-6 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 shadow-soft"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr ${card.gradient}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <button 
            onClick={() => setIsBookSessionOpen(true)}
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 hover:shadow-xl duration-200"
          >
            Get GRE Test Series — ₹4,999
          </button>
        </div>
      </section>

      {/* 3. GMAT TEST SERIES SECTION */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/40" />
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">GMAT</span>
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground tracking-tight text-center">
            GMAT Focus Test Series — ₹5,999
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground font-normal leading-relaxed max-w-3xl mx-auto mb-14">
            Question-adaptive Focus Edition mocks with sectional and sub-sectional gap analysis across Quant, Verbal and DI.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-12">
            {gmatCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.1)" }}
                  className="bg-card rounded-[24px] border border-border/50 p-6 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 shadow-soft"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr ${card.gradient}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <button 
            onClick={() => setIsBookSessionOpen(true)}
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 hover:shadow-xl duration-200"
          >
            Get GMAT Test Series — ₹5,999
          </button>
        </div>
      </section>

      {/* 4. VALUE CHECK SECTION */}
      <section className="py-20 px-6 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/40" />
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">VALUE CHECK</span>
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground tracking-tight text-center">
            Why this is the <span className="text-primary">best-value</span> series anywhere
          </h2>

          {/* Table Container */}
          <div className="mt-12 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-soft text-left">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm md:text-base">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="px-6 py-4 bg-slate-50 w-1/4"></th>
                    <th className="px-6 py-4 bg-[#0052CC] text-white font-bold text-center text-lg rounded-t-none">
                      Seek Your Y
                    </th>
                    <th className="px-6 py-4 bg-slate-950 text-white font-bold text-center text-lg rounded-t-none">
                      Official Mocks
                    </th>
                    <th className="px-6 py-4 bg-slate-600 text-white font-bold text-center text-lg rounded-t-none">
                      Other Prep
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900 bg-slate-50/30">Total tests</td>
                    <td className="px-6 py-5 text-[#0052CC] font-bold text-center bg-blue-50/10">30 tests</td>
                    <td className="px-6 py-5 text-slate-700 text-center">3–4 mocks</td>
                    <td className="px-6 py-5 text-slate-700 text-center">15–25 tests</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900 bg-slate-50/30">Full-length mocks</td>
                    <td className="px-6 py-5 text-[#0052CC] font-bold text-center bg-blue-50/10">10 adaptive mocks</td>
                    <td className="px-6 py-5 text-slate-700 text-center">3–4 mocks</td>
                    <td className="px-6 py-5 text-slate-700 text-center">5–10 mocks</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900 bg-slate-50/30">Sectional drills</td>
                    <td className="px-6 py-5 text-[#0052CC] font-bold text-center bg-blue-50/10">20 sectionals</td>
                    <td className="px-6 py-5 text-slate-700 text-center">None</td>
                    <td className="px-6 py-5 text-slate-700 text-center">10–15 sectionals</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900 bg-slate-50/30">Live mock debriefs</td>
                    <td className="px-6 py-5 text-[#0052CC] font-bold text-center bg-blue-50/10">Faculty-led strategy review</td>
                    <td className="px-6 py-5 text-slate-700 text-center">None</td>
                    <td className="px-6 py-5 text-slate-700 text-center">None / Recorded only</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900 bg-slate-50/30">Performance tracking</td>
                    <td className="px-6 py-5 text-[#0052CC] font-bold text-center bg-blue-50/10">Advanced gap analysis</td>
                    <td className="px-6 py-5 text-slate-700 text-center">Basic score report</td>
                    <td className="px-6 py-5 text-slate-700 text-center">Standard report</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900 bg-slate-50/30">Approx. price</td>
                    <td className="px-6 py-5 text-[#0052CC] font-extrabold text-center bg-blue-50/10 text-lg">
                      ₹4,999 (GRE) / ₹5,999 (GMAT)
                    </td>
                    <td className="px-6 py-5 text-slate-700 text-center">
                      ₹9,200 (GMAT) / ₹10,000 (GRE)
                    </td>
                    <td className="px-6 py-5 text-slate-700 text-center">
                      ₹6,000 – ₹12,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DIAGNOSTIC CTA */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/40" />
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">FREE TRIAL</span>
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground tracking-tight text-center">
            Take a free diagnostic mock
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            Not sure where you stand? Start with one free full-length mock — GRE or GMAT — and get a strategy call on your report.
          </p>

          <button 
            onClick={() => setIsBookSessionOpen(true)}
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 hover:shadow-xl duration-200"
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
