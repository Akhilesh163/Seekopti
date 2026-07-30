import React, { useState } from "react";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";
import { WebinarSection } from "@/components/WebinarSection";
import { Activity, BarChart3, BookOpen, Gift, Zap, ChevronDown, CheckCircle2, Sparkles, Clock3 } from "lucide-react";
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

      <section className="py-20 bg-gradient-to-b from-sky-50 via-white to-slate-50">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="w-full">
            <div className="rounded-[32px] border-2 border-blue-200/80 bg-gradient-to-br from-blue-50/90 via-indigo-50/60 to-white p-8 md:p-12 shadow-lg mb-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
              <div className="relative z-10 max-w-4xl">
                <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-600 text-white text-xs md:text-sm font-extrabold uppercase tracking-widest shadow-md mb-5">
                  <Sparkles className="w-4 h-4 stroke-[2.5]" />
                  <span>LIVE GMAT TRAINING</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-950 tracking-tight leading-[1.15] mb-5">
                  Live GMAT Online Prep That Fits <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Your Schedule</span>
                </h2>
                <p className="text-slate-700 font-medium leading-relaxed" style={{ fontSize: 24 }}>
                  Experience expert-led GMAT classes from anywhere, with live sessions, real-time problem discussions, and a structured plan designed for high scoring aspirants.
                </p>

                <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-3 justify-items-stretch">
                  <div className="w-full rounded-[28px] border border-purple-300/80 bg-gradient-to-br from-violet-200 via-fuchsia-200 to-fuchsia-50 p-6 shadow-2xl shadow-slate-200/40">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-700 to-fuchsia-500 text-white shadow-lg mb-4">
                      <BookOpen className="h-7 w-7" />
                    </div>
                    <span className="inline-flex items-center rounded-full bg-purple-100 text-purple-700 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Live Sessions</span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-950 mb-2">Interactive trainer-led sessions</h3>
                    <p className="text-base md:text-lg text-slate-700 leading-7">Personalised doubt resolution, live explanations, and real-time problem solving for every concept.</p>
                  </div>

                  <div className="w-full rounded-[28px] border border-sky-300/80 bg-gradient-to-br from-cyan-200 via-sky-150 to-sky-50 p-6 shadow-2xl shadow-slate-200/40">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-700 to-cyan-500 text-white shadow-lg mb-4">
                      <BarChart3 className="h-7 w-7" />
                    </div>
                    <span className="block rounded-full bg-sky-100 text-sky-700 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Analytics</span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-950 mb-2">Performance analytics & mocks</h3>
                    <p className="text-base md:text-lg text-slate-700 leading-7">Weekly mock tests, score reports, and strategic review sessions to keep your preparation sharp.</p>
                  </div>

                  <div className="w-full rounded-[28px] border border-emerald-300/80 bg-gradient-to-br from-emerald-200 via-teal-150 to-teal-50 p-6 shadow-2xl shadow-slate-200/40">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-700 to-teal-500 text-white shadow-lg mb-4">
                      <Clock3 className="h-7 w-7" />
                    </div>
                    <span className="block rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Flexible</span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-950 mb-2">Flexible timings that suit you</h3>
                    <p className="text-base md:text-lg text-slate-700 leading-7">Multiple batch options and schedules designed for both working professionals and students.</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsBookSessionOpen(true)}
                  className="mt-8 inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-extrabold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                >
                  TALK TO A GMAT EXPERT
                </button>
              </div>
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
            <div className="relative overflow-hidden rounded-[32px] border border-blue-200/70 bg-gradient-to-br from-blue-50/90 via-sky-50/70 to-cyan-50/70 p-8 shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2">
              <div className="absolute -top-6 -right-6 h-28 w-28 rounded-full bg-blue-300/15 blur-2xl pointer-events-none" />
              <div className="flex flex-col items-start gap-5 relative z-10">
                <div className="rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 p-4 shadow-xl shadow-blue-500/20 mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-950">Live concept classes</h3>
                <p className="text-lg md:text-xl text-slate-700 font-medium leading-8">Quant, Verbal and DI taught live, with recordings available the same day.</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-purple-200/70 bg-gradient-to-br from-purple-50/90 via-fuchsia-50/70 to-indigo-50/70 p-8 shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2">
              <div className="absolute -top-6 -right-6 h-28 w-28 rounded-full bg-purple-300/15 blur-2xl pointer-events-none" />
              <div className="flex flex-col items-start gap-5 relative z-10">
                <div className="rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 p-4 shadow-xl shadow-purple-500/20 mb-4">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-950">DI-first curriculum</h3>
                <p className="text-lg md:text-xl text-slate-700 font-medium leading-8">Most courses treat Data Insights as an afterthought. Ours gives all five DI question types equal weight from week one.</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-emerald-200/70 bg-gradient-to-br from-emerald-50/90 via-teal-50/70 to-slate-50/70 p-8 shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2">
              <div className="absolute -top-6 -right-6 h-28 w-28 rounded-full bg-emerald-300/15 blur-2xl pointer-events-none" />
              <div className="flex flex-col items-start gap-5 relative z-10">
                <div className="rounded-full bg-gradient-to-br from-emerald-600 to-teal-500 p-4 shadow-xl shadow-emerald-500/20 mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-950">Weekly mock + analysis</h3>
                <p className="text-lg md:text-xl text-slate-700 font-medium leading-8">A full Focus-style mock every weekend, followed by a live breakdown of strategy, pacing and the review-&amp;edit tool.</p>
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

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/50 text-blue-600 text-sm md:text-base font-extrabold uppercase tracking-[0.14em] shadow-sm mb-4">
              BATCHES
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-foreground mb-6">Upcoming batches</h2>
            <div className="flex justify-center">
              <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full" />
            </div>
            <p className="mt-6 text-xl md:text-2xl text-slate-600 font-medium">Sample schedule — to be replaced with live batch data.</p>
          </div>

          <div className="space-y-8">
            <div className="overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50">
              <div className="border-b border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-5 md:px-8 text-white text-center">
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">GMAT Exam Pattern</h3>
                <p className="text-xs md:text-sm text-slate-300 font-medium mt-1">Breakdown of sections, timing, questions &amp; scoring scale</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/90 border-b-2 border-slate-300 text-sm md:text-base font-semibold uppercase tracking-wider text-slate-700">
                      <th className="px-6 py-5.5 md:py-6">Batch</th>
                      <th className="px-6 py-5.5 md:py-6">Starts</th>
                      <th className="px-6 py-5.5 md:py-6">Schedule</th>
                      <th className="px-6 py-5.5 md:py-6">Duration</th>
                      <th className="px-6 py-5.5 md:py-6">Mode</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300 text-base">
                    <tr className="hover:bg-blue-50/40 transition-colors duration-150 group">
                      <td className="px-6 py-6.5 md:py-7">
                        <div className="flex items-center gap-3.5">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 shrink-0 shadow-xs">
                            <BookOpen className="h-5 w-5 stroke-[2]" />
                          </div>
                          <div>
                            <span className="font-medium text-slate-950 block text-lg md:text-xl">Weekday Evening</span>
                            <span className="text-sm md:text-base text-slate-600 font-normal">Mon–Fri evening batch</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6.5 md:py-7 text-slate-800 font-medium">Aug 3, 2026</td>
                      <td className="px-6 py-6.5 md:py-7 text-slate-800 font-medium">Mon–Fri, 8–9:30 PM IST</td>
                      <td className="px-6 py-6.5 md:py-7">
                        <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full font-normal text-base md:text-lg border border-slate-200/80">10 weeks</span>
                      </td>
                      <td className="px-6 py-6.5 md:py-7">
                        <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-800 rounded-full font-normal text-base md:text-lg border border-emerald-200/80">Online</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/40 transition-colors duration-150 group">
                      <td className="px-6 py-6.5 md:py-7">
                        <div className="flex items-center gap-3.5">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 shrink-0 shadow-xs">
                            <Activity className="h-5 w-5 stroke-[2]" />
                          </div>
                          <div>
                            <span className="font-medium text-slate-950 block text-lg md:text-xl">Weekend Intensive</span>
                            <span className="text-sm md:text-base text-slate-600 font-normal">Sat–Sun focused bootcamp</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6.5 md:py-7 text-slate-800 font-medium">Aug 8, 2026</td>
                      <td className="px-6 py-6.5 md:py-7 text-slate-800 font-medium">Sat–Sun, 10 AM–1 PM IST</td>
                      <td className="px-6 py-6.5 md:py-7">
                        <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full font-normal text-base md:text-lg border border-slate-200/80">12 weeks</span>
                      </td>
                      <td className="px-6 py-6.5 md:py-7">
                        <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-800 rounded-full font-normal text-base md:text-lg border border-emerald-200/80">Online</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/40 transition-colors duration-150 group">
                      <td className="px-6 py-6.5 md:py-7">
                        <div className="flex items-center gap-3.5">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 shrink-0 shadow-xs">
                            <Zap className="h-5 w-5 stroke-[2]" />
                          </div>
                          <div>
                            <span className="font-medium text-slate-950 block text-lg md:text-xl">Fast-Track Crash</span>
                            <span className="text-sm md:text-base text-slate-600 font-normal">Daily rapid-fire online prep</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6.5 md:py-7 text-slate-800 font-medium">Sep 1, 2026</td>
                      <td className="px-6 py-6.5 md:py-7 text-slate-800 font-medium">Daily, 7–9 PM IST</td>
                      <td className="px-6 py-6.5 md:py-7">
                        <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full font-normal text-base md:text-lg border border-slate-200/80">5 weeks</span>
                      </td>
                      <td className="px-6 py-6.5 md:py-7">
                        <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-800 rounded-full font-normal text-base md:text-lg border border-emerald-200/80">Online</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setIsBookSessionOpen(true)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-extrabold text-lg shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Reserve a Seat</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 text-white">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <p className="inline-flex items-center rounded-full bg-card/60 px-4 py-2 text-base md:text-lg font-semibold text-primary">READY TO TRANSFORM YOUR GRE PREP?</p>
              <h2 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold text-foreground">Find Your <span className="text-primary">Y</span> Today</h2>
              <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-xl">Get personalized GRE tutoring with a 1-on-1 strategy session. We’ll assess your current level, understand your goals, and create a roadmap to your target score.</p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Free strategy consultation</div>
                    <div className="text-base text-muted-foreground">30-minute session with GRE experts</div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="mt-1 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Personalized study roadmap</div>
                    <div className="text-base text-muted-foreground">Custom plan tailored to your timeline</div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="mt-1 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">No commitment required</div>
                    <div className="text-base text-muted-foreground">Pure guidance, zero obligations</div>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <button 
                  onClick={() => setIsBookSessionOpen(true)}
                  className="rounded-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-base md:text-lg shadow-lg"
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
