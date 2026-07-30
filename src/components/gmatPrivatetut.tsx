import React, { useState } from "react";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";
import { Activity, ArrowRight, BookOpen, Gift, Zap, ChevronDown, CheckCircle2, Check, Sparkles } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ProgramHero } from "@/components/ProgramHero";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import analyticsIcon from "@/assets/paced-icon/analytics.webp";
import booksIcon from "@/assets/paced-icon/books.webp";
import qaIcon from "@/assets/paced-icon/qa.webp";
import since1993Icon from "@/assets/paced-icon/since-1993.webp";
import studentIcon from "@/assets/paced-icon/student.webp";
import teacherIcon from "@/assets/paced-icon/teacher.webp";

const GmatPrivateTut: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);

  const gmatPrivateTutFaqs = [
    {
      question: "How personalized is the GMAT private tutoring program?",
      answer: "Extremely personalized. We design a custom-tailored study timeline and weekly dashboard based on your current GMAT Focus diagnostic score, target score, timeline, strengths, weaknesses, and availability."
    },
    {
      question: "Who will be my GMAT mentor?",
      answer: "You will get 1-on-1 direct coaching from Aman, an experienced test-prep specialist who has guided hundreds of students to GMAT Focus scores of 645+."
    },
    {
      question: "How flexible is the scheduling for 1-on-1 GMAT sessions?",
      answer: "We offer highly flexible timings. You can schedule sessions in coordination with your tutor to comfortably fit around your work or college commitments."
    },
    {
      question: "Can we focus only on my weak areas (e.g. Data Insights)?",
      answer: "Yes, absolutely! The entire curriculum can be tailored to focus on your specific areas of improvement, whether it's Quant, Verbal, or Data Insights."
    },
    {
      question: "How do we track GMAT mock performance and progress?",
      answer: "We track your progress through detailed analytics of your practice drills, periodic diagnostic mock tests, and regular feedback reviews with your mentor."
    }
  ];

  const cards = [
    { icon: since1993Icon, title: "Unmatched scores on the GMAT since 1993" },
    { icon: analyticsIcon, title: "Smart analytics help you track and evaluate your performance" },
    { icon: teacherIcon, title: "Powerful adaptive technology platform streamlines your preparation" },
    { icon: booksIcon, title: "Targeted study plan & exhaustive full-length tests to maximize speed and accuracy" },
    { icon: studentIcon, title: "Mentoring and coaching by the best and most experienced faculty" },
    { icon: qaIcon, title: "Personalized attention through unlimited doubt-clearing sessions" },
  ];



  const plans = [
    {
      id: 'booster',
      title: 'Booster',
      price: '₹29,999',
      subtitle: '8 sessions • single section',
      bullets: [
        '8 × 60-min 1-on-1 sessions',
        'Custom drills & homework',
        'WhatsApp doubt support',
      ],
    },
    {
      id: 'complete',
      title: 'Complete',
      price: '₹54,999',
      subtitle: '16 sessions • full GMAT Focus',
      bullets: [
        '16 × 60-min 1-on-1 sessions',
        'Self-paced course + test series',
        'Mock reviews after every test',
        'Priority doubt support',
      ],
      recommended: true,
    },
    {
      id: 'elite',
      title: 'Elite 735+',
      price: '₹84,999',
      subtitle: '24 sessions • directly with Aman',
      bullets: [
        '24 sessions with Aman himself',
        'Everything in Complete',
        'B-school strategy session',
      ],
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <ProgramHero type="gmat" />

      

      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="rounded-[32px] border-2 border-blue-200/80 bg-gradient-to-br from-blue-50/90 via-indigo-50/60 to-white p-8 md:p-12 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-600 text-white text-xs md:text-sm font-extrabold uppercase tracking-widest shadow-md mb-5">
                <Sparkles className="w-4 h-4 stroke-[2.5]" />
                <span>GMAT PRIVATE TUTORING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-950 tracking-tight leading-[1.15] mb-5">
                GMAT Private Tutoring That Works
              </h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4" style={{ fontSize: 24 }}>
                Experience expert-led GMAT coaching from anywhere, with personalised live sessions, real-time problem discussion, and a structured plan designed for high-scoring aspirants.
              </p>
              <p className="text-slate-600 font-semibold leading-relaxed mb-8" style={{ fontSize: 22 }}>
                Get access to one-on-one mentoring, live course correction, and a goal-driven plan that keeps your GMAT prep on track.
              </p>
              <div className="grid gap-4 sm:grid-cols-3 mb-8">
                <div className="rounded-[28px] border border-fuchsia-300/90 bg-gradient-to-br from-fuchsia-200 via-fuchsia-100 to-fuchsia-50 p-5 shadow-[0_20px_40px_-20px_rgba(139,92,246,0.35)]">
                  <p className="text-base md:text-lg font-semibold text-slate-950">Interactive trainer-led sessions</p>
                  <p className="mt-2 text-slate-600">Personalised doubt resolution and live problem solving.</p>
                </div>
                <div className="rounded-[28px] border border-sky-300/90 bg-gradient-to-br from-sky-200 via-sky-100 to-sky-50 p-5 shadow-[0_20px_40px_-20px_rgba(14,165,233,0.35)]">
                  <p className="text-base md:text-lg font-semibold text-slate-950">Performance analytics & weekly mocks</p>
                  <p className="mt-2 text-slate-600">Review scores, pace, and strategy with expert feedback.</p>
                </div>
                <div className="rounded-[28px] border border-emerald-300/90 bg-gradient-to-br from-emerald-200 via-emerald-100 to-emerald-50 p-5 shadow-[0_20px_40px_-20px_rgba(16,185,129,0.35)]">
                  <p className="text-base md:text-lg font-semibold text-slate-950">Flexible session timings</p>
                  <p className="mt-2 text-slate-600">Schedule coaching around your work or study routine.</p>
                </div>
              </div>
              <button
                onClick={() => setIsBookSessionOpen(true)}
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-9 py-4 text-white font-extrabold text-lg shadow-xl shadow-indigo-500/25 hover:opacity-95 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Talk to a GMAT Expert</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

     
    
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <p className="text-center text-2xl md:text-3xl font-semibold uppercase tracking-[0.34em] text-primary">Why 1-on-1</p>
          <h2 className="mt-2 text-center text-5xl md:text-6xl font-extrabold text-primary">Why 1-on-1 works</h2>
          <div className="mx-auto mt-4 h-1.5 w-32 rounded-full bg-gradient-to-r from-primary to-accent" />

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-[28px] border-2 border-blue-200/80 bg-gradient-to-br from-blue-50/90 via-sky-50/70 to-cyan-50/70 p-8 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-15 blur-2xl pointer-events-none" />
              <div className="flex flex-col items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-blue-950">Real diagnosis</h3>
                <p className="mt-3 text-base md:text-lg leading-relaxed text-blue-900/80">Mock data + live observation reveals whether your issue is concepts, process or pacing.</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border-2 border-indigo-200/80 bg-gradient-to-br from-indigo-50/90 via-violet-50/70 to-purple-50/70 p-8 shadow-md hover:shadow-xl hover:border-indigo-400 transition-all duration-300 md:scale-[1.02]">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-indigo-400 to-violet-400 opacity-15 blur-2xl pointer-events-none" />
              <div className="flex flex-col items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-500 text-white shadow-lg">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-indigo-950">Targeted fixes</h3>
                <p className="mt-3 text-base md:text-lg leading-relaxed text-indigo-900/80">Every session attacks your specific faltering points — nothing generic, nothing wasted.</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border-2 border-emerald-200/80 bg-gradient-to-br from-emerald-50/90 via-teal-50/70 to-green-50/70 p-8 shadow-md hover:shadow-xl hover:border-emerald-400 transition-all duration-300">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 opacity-15 blur-2xl pointer-events-none" />
              <div className="flex flex-col items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 text-white shadow-lg">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-emerald-950">Faster improvement</h3>
                <p className="mt-3 text-base md:text-lg leading-relaxed text-emerald-900/80">Our 1-on-1 students typically improve 2x faster than self-study on the same schedule.</p>
              </div>
            </div>
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


<section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-blue-500/10 border-2 border-blue-400/50 text-blue-600 text-xl md:text-2xl font-black uppercase tracking-[0.16em] shadow-sm mb-5">
              PRICING
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-slate-950 tracking-tight text-center">
              Plans & Pricing
            </h2>
            <p className="mt-4 leading-7 text-slate-600 font-medium" style={{ fontSize: "23px" }}>
              Priced below every major alternative — without cutting a single corner.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 mb-14 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-[32px] border-2 border-blue-300/80 bg-gradient-to-b from-blue-50/70 via-indigo-50/30 to-white p-8 md:p-10 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group ${plan.recommended ? 'ring-2 ring-blue-500/50' : ''}`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-1.5 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-blue-500/30">
                    Recommended
                  </div>
                )}

                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold font-display text-slate-950 mb-6">{plan.title}</h3>
                  <div className="mb-2">
                    <p className="text-4xl md:text-5xl font-black text-blue-600 font-display tracking-tight">{plan.price}</p>
                  </div>
                  <p className="text-slate-600 font-bold mb-8" style={{ fontSize: "18px" }}>{plan.subtitle}</p>

                  <ul className="space-y-4 mb-10">
                    {plan.bullets.map((b, i) => (
                      <li key={`${plan.id}-${i}`} className="flex items-start gap-3.5">
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 stroke-[3]">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </div>
                        <span className="text-slate-800 font-semibold leading-snug" style={{ fontSize: "19px" }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setIsBookSessionOpen(true)}
                  className="w-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 py-4 text-white font-extrabold text-lg shadow-xl shadow-indigo-500/25 hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer mt-4"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>



      <CallToAction />
      <CustomFAQ faqs={gmatPrivateTutFaqs} />
      <Footer />
      <BookSessionDialog open={isBookSessionOpen} onOpenChange={setIsBookSessionOpen} />
    </div>
  );
};
export default GmatPrivateTut;
