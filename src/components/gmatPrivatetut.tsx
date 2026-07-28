import React, { useState } from "react";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";
import { Activity, BookOpen, Gift, Zap, ChevronDown, CheckCircle2 } from "lucide-react";
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
          <div className="w-full">
            <div className="prose max-w-none text-lg text-slate-950 font-bold">
              <h2 className="text-3xl font-black text-slate-950 mb-4">GMAT Private Tutoring That Works</h2>
              <p className="text-slate-950 font-bold leading-relaxed">Our private tutoring program gives you 1-on-1 coaching with GMAT experts, personalised lesson plans, and targeted support to improve your scores quickly.</p>
              <ul className="mt-6 space-y-3 list-disc pl-5 text-slate-950 font-bold">
                <li>Custom study plan built around your current score and goals.</li>
                <li>Live sessions, feedback, and section-level strategy reviews.</li>
                <li>Performance monitoring with mock tests and adaptive corrections.</li>
              </ul>
              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="mt-6 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary shadow hover:brightness-95 transition"
              >
                TALK TO A GMAT EXPERT
              </button>
            </div>
          </div>
        </div>
      </section>

     
    
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-primary">Why 1-on-1</p>
          <h2 className="mt-2 text-center text-4xl font-extrabold text-foreground">Why 1-on-1 works</h2>
          <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-primary to-accent" />

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft">
              <div className="absolute left-6 right-6 -top-3 h-2 rounded-t-[12px] bg-gradient-to-r from-primary to-accent" />
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-card shadow-sm">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Real diagnosis</h3>
                  <p className="mt-3 text-sm text-muted-foreground">Mock data + live observation reveals whether your issue is concepts, process or pacing.</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft md:scale-105 md:ring-1 md:ring-primary/20">
              <div className="absolute left-6 right-6 -top-3 h-2 rounded-t-[12px] bg-gradient-to-r from-primary to-accent" />
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-card shadow-sm">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Targeted fixes</h3>
                  <p className="mt-3 text-sm text-muted-foreground">Every session attacks your specific faltering points — nothing generic, nothing wasted.</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft">
              <div className="absolute left-6 right-6 -top-3 h-2 rounded-t-[12px] bg-gradient-to-r from-primary to-accent" />
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-card shadow-sm">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Faster improvement</h3>
                  <p className="mt-3 text-sm text-muted-foreground">Our 1-on-1 students typically improve 2x faster than self-study on the same schedule.</p>
                </div>
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


<section className="py-12 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-primary">Pricing</p>
          <h2 className="mt-2 text-center text-4xl font-extrabold text-foreground">Packages</h2>
          <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-primary to-accent" />

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative overflow-hidden rounded-[28px] bg-card p-8 transition-transform hover:translate-y-[-6px] ${plan.recommended ? 'ring-1 ring-primary/20' : 'border border-border'}`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <div className="absolute left-6 right-6 -top-3 h-2 rounded-t-[18px] bg-gradient-to-r from-primary to-accent shadow-glow" />

                {plan.recommended && (
                  <div className="absolute left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground px-4 py-1 text-sm font-semibold text-primary-foreground">Recommended</div>
                )}

                <div className="flex flex-col h-full">
                  <h3 className="text-lg font-semibold text-foreground">{plan.title}</h3>

                  <div className="mt-6 flex items-baseline gap-4">
                    <p className="text-4xl font-extrabold text-primary leading-none">{plan.price}</p>
                    <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                  </div>

                  <ul className="mt-6 space-y-4 flex-1">
                    {plan.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <svg className="mt-1 h-4 w-4 flex-shrink-0 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="leading-6">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <button 
                      onClick={() => setIsBookSessionOpen(true)}
                      className="w-full rounded-[14px] px-8 py-4 text-sm font-semibold text-primary-foreground bg-primary shadow-lg hover:brightness-105 transition"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="mx-auto max-w-[900px] rounded-2xl border border-border bg-card/50 p-6 text-muted-foreground">How we compare: GMAT private tutoring typically costs ₹3,000–5,000/hour in India and $250+/hour with US firms. Our Complete package works out to ~₹3,437/session with course and mocks included.</div>
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
