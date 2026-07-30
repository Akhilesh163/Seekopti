import React, { useState } from "react";
import { motion } from "framer-motion";
import { Activity, BookOpen, BarChart3, Zap, Sparkles, ArrowRight, Check } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ProgramHero } from "@/components/ProgramHero";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";
import { WebinarSection } from "@/components/WebinarSection";

const gmatSelfPacedFaqs = [
  {
    question: "How long is the GMAT Self-Paced course valid for?",
    answer: "The self-paced GMAT Focus program is valid for 6 months from your purchase date, allowing you to prepare thoroughly at your own speed."
  },
  {
    question: "Is the new GMAT Focus Data Insights (DI) section covered?",
    answer: "Yes, our self-paced course features a dedicated comprehensive module covering all GMAT Focus Data Insights (DI) question formats, along with integrated mock practice."
  },
  {
    question: "Can I upgrade my self-paced package to live prep or tutoring?",
    answer: "Yes! You can easily upgrade to our GMAT Live Batch or 1-on-1 Tutoring at any point in your preparation."
  },
  {
    question: "How do I clear my doubts during self-study?",
    answer: "You get full access to our online student doubt portal and community, where GMAT experts answer your questions within 24 hours."
  }
];

const GmatSelfPaced: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<"quant" | "verbal" | "mixed">("mixed");
  
  const trackOptions = {
    quant: [
      {
        id: "quant-1",
        title: "Complete Quant Focus Syllabus",
        desc: "All Arithmetic, Algebra and Problem Solving logic tailored to the GMAT Focus format."
      },
      {
        id: "quant-2",
        title: "2,000+ Practice Questions",
        desc: "Categorized by difficulty (Easy, Medium, Hard) with video step-by-step explanations."
      },
      {
        id: "quant-3",
        title: "Timed Sectional Drills",
        desc: "Build pacing and speed under actual 45-minute timed sectional conditions."
      }
    ],
    verbal: [
      {
        id: "verbal-1",
        title: "Reading Comp & Critical Reasoning",
        desc: "Master GMAT RC passages and CR assumption/weakening question types without fluff."
      },
      {
        id: "verbal-2",
        title: "1,500+ Verbal Practice Questions",
        desc: "Topic-wise practice sets with deep analytical reasoning breakdowns."
      },
      {
        id: "verbal-3",
        title: "Sectional Verbal Tests",
        desc: "Full timed verbal sectional tests to refine elimination strategies."
      }
    ],
    mixed: [
      {
        id: "mixed-1",
        title: "Full Focus Syllabus (Quant + Verbal + DI)",
        desc: "Covers all 3 sections of the GMAT Focus Edition from foundations to advanced."
      },
      {
        id: "mixed-2",
        title: "4,000+ Practice Questions",
        desc: "Exhaustive question bank covering all Focus Edition question types."
      },
      {
        id: "mixed-3",
        title: "Full GMAT Test Series Included",
        desc: "Full-length adaptive mock exams mirroring GMAC official interface."
      }
    ]
  };

  const getCardColors = (index: number) => {
    const themes = [
      {
        bg: "bg-gradient-to-br from-purple-50/90 via-indigo-50/60 to-pink-50/70",
        border: "border-2 border-purple-200/90 hover:border-purple-400",
        icon: "bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-lg shadow-purple-500/30",
        title: "text-purple-950",
        desc: "text-purple-900/90",
        glow: "from-purple-400 to-pink-400",
      },
      {
        bg: "bg-gradient-to-br from-blue-50/90 via-sky-50/60 to-cyan-50/70",
        border: "border-2 border-blue-200/90 hover:border-blue-400",
        icon: "bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30",
        title: "text-blue-950",
        desc: "text-blue-900/90",
        glow: "from-blue-400 to-cyan-400",
      },
      {
        bg: "bg-gradient-to-br from-emerald-50/90 via-teal-50/60 to-green-50/70",
        border: "border-2 border-emerald-200/90 hover:border-emerald-400",
        icon: "bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-500/30",
        title: "text-emerald-950",
        desc: "text-emerald-900/90",
        glow: "from-emerald-400 to-teal-400",
      },
    ];
    return themes[index % themes.length];
  };

  const plans = [
    {
      id: 'quant-verbal',
      title: 'Quant or Verbal Track',
      price: '₹14,999',
      subtitle: '6-month access • single track',
      bullets: [
        'Quant, Verbal or DI module',
        '1,000+ practice questions',
        'Sectional tests included',
        'Doubt forum access',
      ],
    },
    {
      id: 'complete-mixed',
      title: 'Complete (Mixed)',
      price: '₹24,999',
      subtitle: '12-month access • full Focus Edition',
      recommended: true,
      bullets: [
        'Complete Quant + Verbal + DI',
        '3,000+ practice questions',
        'Full GMAT Test Series included',
        'Monthly live strategy session',
      ],
    },
    {
      id: 'complete-tutoring',
      title: 'Complete + 1-on-1',
      price: '₹39,999',
      subtitle: '12-month access • 4 1-on-1 calls',
      bullets: [
        'Everything in Full Course',
        'Monthly 1-on-1 mentor call',
        'Personalised study plan',
      ],
    },
  ];

  return (
    <div className="bg-background text-foreground flex flex-col gap-8">
      <ProgramHero type="gmat" />

      {/* OVERVIEW BANNER CARD */}
      <section className="py-12 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="rounded-[32px] border-2 border-blue-200/80 bg-gradient-to-br from-blue-50/90 via-indigo-50/60 to-white p-8 md:p-12 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-600 text-white text-xs md:text-sm font-extrabold uppercase tracking-widest shadow-md mb-5">
                <Sparkles className="w-4 h-4 stroke-[2.5]" />
                <span>SELF-PACED GMAT PREPARATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-950 tracking-tight leading-[1.15] mb-5">
                Self-Paced GMAT Online Prep <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Built Around Your Schedule</span>
              </h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4" style={{ fontSize: "24px" }}>
                Learn at your own pace with Seekyoury’s self-paced GMAT online prep program. Anytime, anywhere, and at your leisure – our program ensures you are not bound by a schedule, making it ideal for working professionals and busy students.
              </p>
              <p className="text-slate-600 font-semibold leading-relaxed mb-6" style={{ fontSize: "22px" }}>
                Get access to world-class preparation material, practice tests, and expert guidance through a dedicated portal designed for high-scoring GMAT aspirants.
              </p>
              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-9 py-4 text-white font-extrabold text-lg shadow-xl shadow-indigo-500/25 hover:opacity-95 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Talk to a GMAT Expert</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-50/30">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600 block mb-3">
            CHOOSE YOUR TRACK
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-foreground tracking-tight leading-tight">
            Pick your track
          </h2>
          <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto mt-4 mb-10">
            Already strong in one section? Prep only what you need — or take the full course.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "mixed", label: "Mixed (Quant + Verbal)" },
              { id: "quant", label: "Quant Only" },
              { id: "verbal", label: "Verbal Only" },
            ].map((track) => (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track.id as "quant" | "verbal" | "mixed")}
                className={`px-9 py-3.5 rounded-full font-bold text-base md:text-lg transition-all duration-300 border ${
                  selectedTrack === track.id
                    ? "bg-blue-600 border-blue-600 text-white shadow-md"
                    : "bg-white border-slate-200 text-slate-800 hover:bg-slate-50"
                }`}
              >
                {track.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
            {trackOptions[selectedTrack].map((option, idx) => {
              const cardColors = getCardColors(idx);
              const cardIcons = [BookOpen, Zap, Activity];
              const IconComp = cardIcons[idx % cardIcons.length];
              return (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`relative overflow-hidden rounded-[28px] ${cardColors.border} ${cardColors.bg} p-8 flex flex-col gap-4 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1`}
                >
                  {/* Decorative background glow circle */}
                  <div className={`absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br ${cardColors.glow} opacity-15 blur-2xl pointer-events-none`} />

                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${cardColors.icon}`}>
                    <IconComp className="h-7 w-7 text-white stroke-[2.2]" />
                  </div>
                  <h3 className={`text-2xl font-extrabold font-display ${cardColors.title}`}>
                    {option.title}
                  </h3>
                  <p className={`text-lg md:text-[21px] leading-relaxed font-medium ${cardColors.desc}`}>
                    {option.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setIsBookSessionOpen(true)}
              className="rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-9 py-4 text-white font-extrabold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Book a Session
            </button>
          </div>
        </div>
      </section>
      
      {/* TRACK COMPARISON / PRICING SECTION - Matched to GRE Pricing Design */}
      <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/50 text-blue-600 text-sm md:text-base font-extrabold uppercase tracking-[0.14em] shadow-sm mb-4">
              PRICING
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-slate-950 tracking-tight text-center">
              Plans & Pricing
            </h2>
            <p className="mt-4 leading-7 text-slate-600 font-medium text-center" style={{ fontSize: "21px" }}>
              Priced below every major alternative — without cutting a single corner.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 mb-14 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-[32px] border-2 border-blue-300/80 bg-gradient-to-b from-blue-50/70 via-indigo-50/30 to-white p-8 md:p-10 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group ${
                  plan.recommended ? "ring-2 ring-blue-500/50" : ""
                }`}
              >
                {/* Floating Top Badge */}
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-1.5 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-blue-500/30">
                    Best value
                  </div>
                )}

                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold font-display text-slate-950 mb-6">
                    {plan.title}
                  </h3>

                  {/* Price display */}
                  <div className="mb-2">
                    <p className="text-4xl md:text-5xl font-black text-blue-600 font-display tracking-tight">
                      {plan.price}
                    </p>
                  </div>

                  <p className="text-slate-600 font-bold mb-8" style={{ fontSize: "18px" }}>
                    {plan.subtitle}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {plan.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-600">
                            <Check className="h-3.5 w-3.5 stroke-[3]" />
                          </div>
                        </div>
                        <span className="text-slate-800 font-semibold text-base md:text-lg">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button 
                    onClick={() => setIsBookSessionOpen(true)}
                    className="w-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-4 text-white font-extrabold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <CustomFAQ faqs={gmatSelfPacedFaqs} title="GMAT Self-Paced FAQs" />
      <Footer />
      <BookSessionDialog open={isBookSessionOpen} onOpenChange={setIsBookSessionOpen} />
    </div>
  );
};

export default GmatSelfPaced;
