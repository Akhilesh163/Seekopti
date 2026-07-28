import React, { useState } from "react";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";
import { WebinarSection } from "@/components/WebinarSection";
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
const GmatLive: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);

  const gmatLiveFaqs = [
    {
      question: "How are the GMAT live interactive classes conducted?",
      answer: "Our GMAT live classes are conducted online via live video sessions with interactive whiteboards. You can ask questions, engage in chat, and get real-time feedback from your instructor."
    },
    {
      question: "What happens if I miss a live class?",
      answer: "No worries! Every live class is recorded and uploaded to your student dashboard within 24 hours. You will have unlimited access to review them whenever you want."
    },
    {
      question: "Are study materials and practice tests included?",
      answer: "Yes, you get comprehensive prep material, including dedicated GMAT Focus textbooks, question banks, and 5+ full-length computer-adaptive mock tests."
    },
    {
      question: "How do I get my doubts resolved outside of class hours?",
      answer: "You can post your queries in our interactive student groups. We also host scheduled live doubt-clearing sessions where you can work directly with our expert GMAT tutors."
    },
    {
      question: "Can I try a demo session before fully committing?",
      answer: "Absolutely! You can book a free live demo session to experience the portal interface, check our teaching method, and plan your GMAT strategy."
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



  return (
    <div className="bg-background text-foreground">
      <ProgramHero type="gmat" />

      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="w-full">
            <div className="prose max-w-none">
              <h2 className="text-2xl md:text-3xl font-extrabold font-display text-slate-950 mb-4">Live GMAT Online Prep That Fits Your Schedule</h2>
              <p className="text-lg md:text-xl text-slate-950 font-bold leading-relaxed mb-4">Experience expert-led GMAT classes from anywhere, with live sessions, real-time problem discussions, and a structured plan designed for high scoring aspirants.</p>
              <ul className="mt-6 space-y-4 list-disc pl-6 text-lg md:text-xl text-slate-950 font-bold">
                <li>Interactive trainer-led sessions with personalised doubt resolution.</li>
                <li>Performance analytics, weekly mocks, and strategy reviews.</li>
                <li>Flexible timings that suit both working professionals and students.</li>
              </ul>
              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="mt-6 rounded-full px-8 py-3.5 text-base font-bold text-primary-foreground bg-primary shadow-md hover:brightness-95 transition hover:scale-105 transform"
              >
                TALK TO A GMAT EXPERT
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/50 text-blue-600 text-sm md:text-base font-extrabold uppercase tracking-[0.14em] shadow-sm mb-4">
              WHAT YOU GET
            </div>
            <h2 className="mt-2 text-center text-4xl md:text-5xl font-extrabold text-foreground">Built for the Focus Edition</h2>
            <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-primary to-accent" />
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft hover:shadow-elevated transform transition duration-200 hover:-translate-y-2">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-gradient-to-br from-primary/10 to-accent/10 p-3 shadow-sm">
                    <BookOpen className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Live concept classes</h3>
                  <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">Quant, Verbal and DI taught live, with recordings available the same day.</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transform transition duration-200 hover:shadow-elevated hover:-translate-y-2 md:scale-105 md:ring-1 md:ring-primary/20">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-4 shadow-md">
                    <Activity className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">DI-first curriculum</h3>
                  <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">Most courses treat Data Insights as an afterthought. Ours gives all five DI question types equal weight from week one.</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft hover:shadow-elevated transform transition duration-200 hover:-translate-y-2">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-gradient-to-br from-primary/10 to-accent/10 p-3 shadow-sm">
                    <Zap className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Weekly mock + analysis</h3>
                  <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">A full Focus-style mock every weekend, followed by a live breakdown of strategy, pacing and the review-&amp;edit tool.</p>
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

      <section className="py-12 bg-[hsl(var(--card-bg, 0 0% 100%))]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/50 text-blue-600 text-sm md:text-base font-extrabold uppercase tracking-[0.14em] shadow-sm mb-4">
              BATCHES
            </div>
            <h2 className="mt-2 text-center text-4xl font-extrabold text-foreground">Upcoming batches</h2>
          </div>
          <p className="mt-3 text-center text-muted-foreground">Sample schedule — to be replaced with live batch data.</p>

          <div className="mt-8">
            <div className="mx-auto max-w-[1100px] rounded-3xl bg-card p-0 shadow-elevated overflow-x-auto">
              <div className="grid grid-cols-5 min-w-[600px] items-center gap-0 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-t-3xl">
                <div className="px-6 py-4 font-semibold text-sm md:text-base">Batch</div>
                <div className="px-6 py-4 font-semibold text-sm md:text-base">Starts</div>
                <div className="px-6 py-4 font-semibold text-sm md:text-base">Schedule</div>
                <div className="px-6 py-4 font-semibold text-sm md:text-base">Duration</div>
                <div className="px-6 py-4 font-semibold text-sm md:text-base">Mode</div>
              </div>

              <div className="divide-y divide-border bg-card min-w-[600px]">
                <div className="grid grid-cols-5 items-center px-6 py-6 bg-card hover:bg-card/95 transition">
                  <div className="text-foreground py-2 md:py-0 font-semibold text-sm md:text-base">Weekday Evening</div>
                  <div className="text-muted-foreground py-2 md:py-0 text-sm md:text-base">Aug 10, 2026</div>
                  <div className="text-muted-foreground py-2 md:py-0 text-sm md:text-base">Mon/Wed/Fri, 8–10 PM IST</div>
                  <div className="text-muted-foreground py-2 md:py-0 text-sm md:text-base">12 weeks</div>
                  <div className="text-muted-foreground py-2 md:py-0 text-sm md:text-base">Online (live)</div>
                </div>

                <div className="grid grid-cols-5 items-center px-6 py-6 bg-card hover:bg-card/95 transition">
                  <div className="text-foreground py-2 md:py-0 font-semibold text-sm md:text-base">Weekend Intensive</div>
                  <div className="text-muted-foreground py-2 md:py-0 text-sm md:text-base">Aug 15, 2026</div>
                  <div className="text-muted-foreground py-2 md:py-0 text-sm md:text-base">Sat–Sun, 10 AM–1 PM IST</div>
                  <div className="text-muted-foreground py-2 md:py-0 text-sm md:text-base">14 weeks</div>
                  <div className="text-muted-foreground py-2 md:py-0 text-sm md:text-base">Online (live)</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg hover:brightness-95 transition"
              >
                Reserve a Seat
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <p className="inline-flex items-center rounded-full bg-card/60 px-4 py-2 text-sm font-semibold text-primary">READY TO TRANSFORM YOUR GRE PREP?</p>
              <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-foreground">Find Your <span className="text-primary">Y</span> Today</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">Get personalized GRE tutoring with a 1-on-1 strategy session. We’ll assess your current level, understand your goals, and create a roadmap to your target score.</p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Free strategy consultation</div>
                    <div className="text-sm text-muted-foreground">30-minute session with GRE experts</div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="mt-1 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Personalized study roadmap</div>
                    <div className="text-sm text-muted-foreground">Custom plan tailored to your timeline</div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="mt-1 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">No commitment required</div>
                    <div className="text-sm text-muted-foreground">Pure guidance, zero obligations</div>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <button 
                  onClick={() => setIsBookSessionOpen(true)}
                  className="rounded-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg"
                >
                  Book Your Free Demo
                </button>
              </div>
            </div>

            <div>
              <div className="rounded-3xl bg-card p-6 shadow-elevated relative">
                <div className="absolute -top-3 left-6 right-6 h-2 rounded-t-[12px] bg-gradient-to-r from-primary to-accent" />
                <div className="space-y-6">
                  {/* Card 1: 80% Success */}
                  <div className="rounded-2xl bg-gradient-to-br from-blue-50/90 via-sky-50/60 to-cyan-50/70 p-6 border-2 border-blue-200/90 shadow-md relative overflow-hidden group">
                    <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-15 blur-xl pointer-events-none" />
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">80%</span>
                      <span className="text-blue-950 font-extrabold text-lg md:text-xl">Success</span>
                    </div>
                    <p className="text-base text-blue-900/90 font-medium leading-relaxed mt-2">
                      Students achieve their target scores with personalized tutoring
                    </p>
                  </div>

                  {/* Card 2: +120 Avg. Gain */}
                  <div className="rounded-2xl bg-gradient-to-br from-purple-50/90 via-indigo-50/60 to-pink-50/70 p-6 border-2 border-purple-200/90 shadow-md relative overflow-hidden group">
                    <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-15 blur-xl pointer-events-none" />
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">+120</span>
                      <span className="text-purple-950 font-extrabold text-lg md:text-xl">Avg. Gain</span>
                    </div>
                    <p className="text-base text-purple-900/90 font-medium leading-relaxed mt-2">
                      Average score improvement with our complete program
                    </p>
                  </div>

                  {/* Card 3: 9+ Years */}
                  <div className="rounded-2xl bg-gradient-to-br from-emerald-50/90 via-teal-50/60 to-green-50/70 p-6 border-2 border-emerald-200/90 shadow-md relative overflow-hidden group">
                    <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 opacity-15 blur-xl pointer-events-none" />
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">9+</span>
                      <span className="text-emerald-950 font-extrabold text-lg md:text-xl">Years</span>
                    </div>
                    <p className="text-base text-emerald-900/90 font-medium leading-relaxed mt-2">
                      Expert faculty with proven track record since 1993
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <CallToAction />
      <CustomFAQ faqs={gmatLiveFaqs} />
      <Footer />
      <BookSessionDialog open={isBookSessionOpen} onOpenChange={setIsBookSessionOpen} />
    </div>
  );
};

export default GmatLive;
