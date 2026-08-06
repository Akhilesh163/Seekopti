import React, { useState } from "react";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { BookOpen, Zap, Activity, Gift, ChevronDown, Sparkles, Video, MessageSquare, BookOpenCheck, ArrowRight, Clock, Headphones, Timer, BarChart3, Users, PackageCheck } from "lucide-react";
import { ProgramHero } from "@/components/ProgramHero";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import analyticsIcon from "@/assets/paced-icon/analytics.webp";
import booksIcon from "@/assets/paced-icon/books.webp";
import qaIcon from "@/assets/paced-icon/qa.webp";
import since1993Icon from "@/assets/paced-icon/since-1993.webp";
import studentIcon from "@/assets/paced-icon/student.webp";
import teacherIcon from "@/assets/paced-icon/teacher.webp";

const GreLive: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);

  const greLiveFaqs = [
    {
      question: "How are the GRE live interactive classes conducted?",
      answer: "Our GRE live classes are conducted online via live video sessions with interactive whiteboards. You can ask questions, engage in chat, and get real-time feedback from your instructor."
    },
    {
      question: "What happens if I miss a live class?",
      answer: "No worries! Every live class is recorded and uploaded to your student dashboard within 24 hours. You will have unlimited access to review them whenever you want."
    },
    {
      question: "Are study materials and practice tests included?",
      answer: "Yes, you get comprehensive prep material, including dedicated GRE Quant/Verbal textbooks, question banks, and 5+ full-length computer-adaptive mock tests."
    },
    {
      question: "How do I get my doubts resolved outside of class hours?",
      answer: "You can post your queries in our interactive student groups. We also host scheduled live doubt-clearing sessions where you can work directly with our expert tutors."
    },
    {
      question: "Can I try a demo session before fully committing?",
      answer: "Absolutely! You can book a free live demo session to experience the portal interface, check our teaching method, and plan your GRE strategy."
    }
  ];

  const topScorers = [
    { name: "Siddhant Tomar", school: "BTECH IT", score: "328" },
    { name: "Manya Sharma", school: "PUNJAB COLLEGE", score: "324" },
    { name: "Anant Govil", school: "DTU - DELHI TECHNOLOGICAL UNIVERSITY", score: "323" },
    { name: "Shaurya Srivastava", school: "NIIT UNIVERSITY", score: "322" },
  ];

  const featureCards = [
    {
      icon: Video,
      title: "Daily live classes",
      description:
        "Concept sessions covering the full ETS syllabus — Quant, RC, Critical Reasoning, TC/SE and AWA — with same-day recordings.",
    },
    {
      icon: Headphones,
      title: "Live doubt-solving",
      description: "Dedicated doubt hours every week — no question waits more than 24 hours.",
    },
    {
      icon: Timer,
      title: "Timed drills in class",
      description: "Solve under exam pressure with the batch, then break down every trap together.",
    },
    {
      icon: BarChart3,
      title: "Weekly mock analysis",
      description:
        "Full mock every weekend followed by a live analysis session on strategy and pacing.",
    },
    {
      icon: Users,
      title: "Small batches",
      description: "Capped batch size so faculty know your name, weak areas and your target.",
    },
    {
      icon: PackageCheck,
      title: "Everything included",
      description: "Self-paced course access, 30-test series and study material bundled with every batch.",
    },
  ];



  return (
    <div className="bg-background text-foreground">
      <ProgramHero type="gre" />

      {/* MAIN CONTENT - Professional Colorful Feature Cards */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          {/* Header Card / Intro Banner */}
          <div className="rounded-[32px] border-2 border-blue-200/80 bg-gradient-to-br from-blue-50/90 via-indigo-50/60 to-white p-8 md:p-12 shadow-lg mb-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="relative z-10 mx-auto text-center">
              <div className="mx-auto max-w-4xl">
                <div className="inline-flex items-center justify-center gap-2.5 px-5 py-2 rounded-full bg-blue-600 text-white text-xs md:text-sm font-extrabold uppercase tracking-widest shadow-md mb-5">
                  <Sparkles className="w-4 h-4 stroke-[2.5]" />
                  <span>LIVE INTERACTIVE CLASSES</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-950 tracking-tight leading-[1.15] mb-5 text-center">
                  Master the GRE with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Expert Live Coaching</span>
                </h2>
              </div>
              <p className="mx-auto w-full max-w-none text-slate-700 font-medium leading-relaxed mb-4 text-center" style={{ fontSize: "24px" }}>
                GRE online classes are live, scheduled sessions that combine classroom rigor with online convenience. Our live GRE training provides in-depth concept clarity, application practice and continuous doubt resolution so you progress with confidence.
              </p>
              <p className="mx-auto w-full max-w-none text-slate-700 font-medium leading-relaxed text-center" style={{ fontSize: "24px" }}>
                Students attending live online classes get access to structured schedules, live doubt-clearing, recordings and an integrated LMS to revise lessons at their own pace.
              </p>
            </div>
          </div>

          {/* 6 Colorful Professional Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Card 1: Comprehensive GRE Online Course */}
            <div className="rounded-[28px] border-2 border-purple-200/80 bg-gradient-to-br from-purple-50/80 via-pink-50/50 to-indigo-50/70 p-8 shadow-md hover:shadow-xl hover:border-purple-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-lg mb-6">
                  <Video className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-900 bg-purple-100/70 px-3 py-1 rounded-full border border-purple-200/80">48 Hours Live</span>
                <h3 className="text-2xl font-extrabold text-purple-950 mt-4 mb-2">Comprehensive GRE Course</h3>
                <div className="inline-block text-purple-700 font-bold mb-3" style={{ fontSize: "19px" }}>48 hrs of GRE live online classes with faculty</div>
                <p className="text-purple-900/80 leading-relaxed font-normal" style={{ fontSize: "22px" }}>
                  Interactive live sessions with top faculty for in-depth understanding, problem solving, and application practice.
                </p>
              </div>
            </div>

            {/* Card 2: Unlimited Doubt-Clearing Sessions */}
            <div className="rounded-[28px] border-2 border-blue-200/80 bg-gradient-to-br from-blue-50/80 via-sky-50/50 to-cyan-50/70 p-8 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg mb-6">
                  <Clock className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200/80">7 AM to Midnight</span>
                <h3 className="text-2xl font-extrabold text-blue-950 mt-4 mb-2">Unlimited Doubt Clearing</h3>
                <div className="inline-block text-blue-700 font-bold mb-3" style={{ fontSize: "19px" }}>Faculty assistance 7am to midnight daily</div>
                <p className="text-blue-900/80 leading-relaxed font-normal" style={{ fontSize: "22px" }}>
                  Schedule live 1-on-1 doubt-clearing sessions whenever you need help clearing tricky concept bottlenecks.
                </p>
              </div>
            </div>

            {/* Card 3: GRE Practice Tests & Books */}
            <div className="rounded-[28px] border-2 border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-teal-50/50 to-green-50/70 p-8 shadow-md hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-lg mb-6">
                  <BookOpenCheck className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200/80">Books & Mocks</span>
                <h3 className="text-2xl font-extrabold text-emerald-950 mt-4 mb-2">Practice Tests & Books</h3>
                <div className="inline-block text-emerald-700 font-bold mb-3" style={{ fontSize: "19px" }}>Complete prep kit & test series</div>
                <p className="text-emerald-900/80 leading-relaxed font-normal" style={{ fontSize: "22px" }}>
                  Includes study books, full-length computer-adaptive tests, and online preparation tools for full test readiness.
                </p>
              </div>
            </div>

            {/* Card 4: Live Mentoring & Strategy */}
            <div className="rounded-[28px] border-2 border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-orange-50/50 to-yellow-50/70 p-8 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-500 flex items-center justify-center text-white shadow-lg mb-6">
                  <Users className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-200/80">Live Mentorship</span>
                <h3 className="text-2xl font-extrabold text-amber-950 mt-4 mb-2">Personalized Guidance</h3>
                <div className="inline-block text-amber-700 font-bold mb-3" style={{ fontSize: "19px" }}>One-on-one mentor support throughout your prep</div>
                <p className="text-amber-900/80 leading-relaxed font-normal" style={{ fontSize: "22px" }}>
                  Get strategy guidance, progress tracking, and feedback tailored to your strengths and weak areas.
                </p>
              </div>
            </div>

            {/* Card 5: Performance Tracking */}
            <div className="rounded-[28px] border-2 border-rose-200/80 bg-gradient-to-br from-rose-50/80 via-pink-50/50 to-red-50/70 p-8 shadow-md hover:shadow-xl hover:border-rose-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-600 to-pink-500 flex items-center justify-center text-white shadow-lg mb-6">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-900 bg-rose-100/70 px-3 py-1 rounded-full border border-rose-200/80">Progress Insights</span>
                <h3 className="text-2xl font-extrabold text-rose-950 mt-4 mb-2">Performance Tracking</h3>
                <div className="inline-block text-rose-700 font-bold mb-3" style={{ fontSize: "19px" }}>Measure improvement with detailed analytics</div>
                <p className="text-rose-900/80 leading-relaxed font-normal" style={{ fontSize: "22px" }}>
                  Follow your mock performance, topic-wise accuracy, and readiness score with actionable insights.
                </p>
              </div>
            </div>

            {/* Card 6: Flexible Revision Access */}
            <div className="rounded-[28px] border-2 border-slate-200/80 bg-gradient-to-br from-slate-50/80 via-zinc-50/50 to-stone-50/70 p-8 shadow-md hover:shadow-xl hover:border-slate-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-slate-400 to-zinc-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-700 to-zinc-600 flex items-center justify-center text-white shadow-lg mb-6">
                  <BookOpen className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100/70 px-3 py-1 rounded-full border border-slate-200/80">Revision Access</span>
                <h3 className="text-2xl font-extrabold text-slate-950 mt-4 mb-2">Flexible Study Replays</h3>
                <div className="inline-block text-slate-700 font-bold mb-3" style={{ fontSize: "19px" }}>Revisit live sessions and class notes anytime</div>
                <p className="text-slate-900/80 leading-relaxed font-normal" style={{ fontSize: "22px" }}>
                  Review recorded sessions, revise concepts, and keep your prep moving even on busy days.
                </p>
              </div>
            </div>
          </div>

          {/* Action CTA Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => setIsBookSessionOpen(true)}
              className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-10 py-4 text-white font-extrabold text-lg shadow-xl shadow-indigo-500/25 hover:opacity-95 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>Book a Free Session</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Everything, live - Feature Cards Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/50 text-blue-600 text-sm md:text-base font-extrabold uppercase tracking-[0.14em] shadow-sm mb-4">
              WHAT YOU GET
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-foreground mb-6">Everything, live</h2>
            <div className="flex justify-center">
              <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full" />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card, index) => {
              const themes = [
                {
                  bg: "bg-gradient-to-br from-blue-50/90 via-sky-50/60 to-cyan-50/70",
                  border: "border-2 border-blue-200/90 hover:border-blue-400",
                  icon: "bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30",
                  title: "text-blue-950",
                  desc: "text-blue-900/90",
                },
                {
                  bg: "bg-gradient-to-br from-purple-50/90 via-indigo-50/60 to-pink-50/70",
                  border: "border-2 border-purple-200/90 hover:border-purple-400",
                  icon: "bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-lg shadow-purple-500/30",
                  title: "text-purple-950",
                  desc: "text-purple-900/90",
                },
                {
                  bg: "bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-yellow-50/70",
                  border: "border-2 border-amber-200/90 hover:border-amber-400",
                  icon: "bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30",
                  title: "text-amber-950",
                  desc: "text-amber-900/90",
                },
                {
                  bg: "bg-gradient-to-br from-emerald-50/90 via-teal-50/60 to-green-50/70",
                  border: "border-2 border-emerald-200/90 hover:border-emerald-400",
                  icon: "bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-500/30",
                  title: "text-emerald-950",
                  desc: "text-emerald-900/90",
                },
                {
                  bg: "bg-gradient-to-br from-rose-50/90 via-pink-50/60 to-red-50/70",
                  border: "border-2 border-rose-200/90 hover:border-rose-400",
                  icon: "bg-gradient-to-tr from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30",
                  title: "text-rose-950",
                  desc: "text-rose-900/90",
                },
                {
                  bg: "bg-gradient-to-br from-indigo-50/90 via-violet-50/60 to-purple-50/70",
                  border: "border-2 border-indigo-200/90 hover:border-indigo-400",
                  icon: "bg-gradient-to-tr from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30",
                  title: "text-indigo-950",
                  desc: "text-indigo-900/90",
                },
              ];
              const theme = themes[index % themes.length];
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className={`group relative rounded-[28px] ${theme.border} ${theme.bg} p-8 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col items-center text-center`}
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
                  <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-white/0 via-slate-200/30 to-slate-200/0 opacity-80 blur-2xl pointer-events-none" />
                  <div className={`relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl ${theme.icon} text-white shadow-lg group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300`}>
                    <IconComponent className="h-9 w-9 text-white stroke-[2.2]" />
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-extrabold ${theme.title} tracking-tight mb-3`}>
                    {card.title}
                  </h3>
                  <p className={`text-base md:text-lg leading-relaxed ${theme.desc} font-medium max-w-[290px]`}>
                    {card.description}
                  </p>
                </div>
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

      {/* Upcoming Batches Section */}
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

          <div className="overflow-x-auto rounded-2xl border border-slate-200/60 shadow-md bg-white">
            <table className="w-full min-w-[650px]">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white">
                  <th className="px-7 py-6 text-left font-bold text-base md:text-lg">Batch</th>
                  <th className="px-7 py-6 text-left font-bold text-base md:text-lg">Starts</th>
                  <th className="px-7 py-6 text-left font-bold text-base md:text-lg">Schedule</th>
                  <th className="px-7 py-6 text-left font-bold text-base md:text-lg">Duration</th>
                  <th className="px-7 py-6 text-left font-bold text-base md:text-lg">Mode</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-black/40 hover:bg-blue-50/50 transition-colors duration-200 group">
                  <td className="px-7 py-6 text-slate-950 font-extrabold text-base md:text-lg">
                    <span className="inline-flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:bg-blue-600 transition-colors"></span>
                      Weekday Evening
                    </span>
                  </td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg font-medium">Aug 3, 2026</td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg font-medium">Mon–Fri, 8–9:30 PM IST</td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg"><span className="inline-flex px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm md:text-base font-bold">10 weeks</span></td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg"><span className="inline-flex px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm md:text-base font-bold">Online</span></td>
                </tr>
                <tr className="bg-slate-50/40 border-b border-black/40 hover:bg-blue-50/50 transition-colors duration-200 group">
                  <td className="px-7 py-6 text-slate-950 font-extrabold text-base md:text-lg">
                    <span className="inline-flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-500 group-hover:bg-purple-600 transition-colors"></span>
                      Weekend Intensive
                    </span>
                  </td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg font-medium">Aug 8, 2026</td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg font-medium">Sat–Sun, 10 AM–1 PM IST</td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg"><span className="inline-flex px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm md:text-base font-bold">12 weeks</span></td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg"><span className="inline-flex px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm md:text-base font-bold">Online</span></td>
                </tr>
                <tr className="bg-white border-b border-black/40 hover:bg-blue-50/50 transition-colors duration-200 group">
                  <td className="px-7 py-6 text-slate-950 font-extrabold text-base md:text-lg">
                    <span className="inline-flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500 group-hover:bg-orange-600 transition-colors"></span>
                      Fast-Track Crash
                    </span>
                  </td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg font-medium">Sep 1, 2026</td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg font-medium">Daily, 7–9 PM IST</td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg"><span className="inline-flex px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm md:text-base font-bold">5 weeks</span></td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg"><span className="inline-flex px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm md:text-base font-bold">Online</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setIsBookSessionOpen(true)}
              className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-9 py-3.5 text-white font-extrabold text-lg hover:shadow-lg shadow-md hover:scale-105 transform transition-all duration-300"
            >
              Reserve a Seat
            </button>
          </div>
        </div>
      </section>

      {/* Curriculum & Pricing Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_420px]">
            {/* Left: Curriculum */}
            <div>
              <div className="inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/50 text-blue-600 text-sm md:text-base font-extrabold uppercase tracking-[0.14em] shadow-sm mb-4">
                CURRICULUM
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-foreground mb-8">10 weeks, fully mapped</h2>
              
              <div className="space-y-5">
                <div className="flex gap-4 items-center group">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex-shrink-0 shadow-md group-hover:shadow-lg transition-all">
                    <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl text-slate-950 group-hover:text-blue-600 transition-colors">Weeks 1–3: Quant foundations (arithmetic, algebra) + Vocab sprint</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center group">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex-shrink-0 shadow-md group-hover:shadow-lg transition-all">
                    <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl text-slate-950 group-hover:text-blue-600 transition-colors">Weeks 4–6: Geometry, Data Analysis + RC, Critical Reasoning, TC/SE strategy</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center group">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex-shrink-0 shadow-md group-hover:shadow-lg transition-all">
                    <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl text-slate-950 group-hover:text-blue-600 transition-colors">Weeks 7–8: Sectional tests + AWA "Analyze an Issue" workshops</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center group">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex-shrink-0 shadow-md group-hover:shadow-lg transition-all">
                    <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl text-slate-950 group-hover:text-blue-600 transition-colors">Weeks 9–10: Full mocks + personalised revision plan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Pricing Card */}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-blue-600/20 blur-2xl" />
              <div className="relative rounded-3xl border-2 border-blue-500/40 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-500/60">
                <div className="absolute -top-4 right-8 z-10">
                  <span className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/40">All-inclusive</span>
                </div>

                <h3 className="mt-6 text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-950 to-slate-800 bg-clip-text text-transparent">Live Batch Enrollment</h3>
                
                <div className="mt-8">
                  <p className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">₹29,999</p>
                  <p className="mt-2 text-sm text-slate-600 font-medium">One-time • all material included</p>
                </div>

                <div className="mt-10 space-y-4 border-t border-slate-200/60 pt-8">
                  <div className="flex gap-3 group">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-md">
                        <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-slate-700 group-hover:text-slate-900 transition-colors font-medium">60+ hours of live classes</p>
                  </div>

                  <div className="flex gap-3 group">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-md">
                        <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-slate-700 group-hover:text-slate-900 transition-colors font-medium">Self-paced course access (12 months)</p>
                  </div>

                  <div className="flex gap-3 group">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-md">
                        <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-slate-700 group-hover:text-slate-900 transition-colors font-medium">Full 30-test GRE series</p>
                  </div>

                  <div className="flex gap-3 group">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-md">
                        <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-slate-700 group-hover:text-slate-900 transition-colors font-medium">Doubt hours + mentor check-ins</p>
                  </div>
                </div>

                <button 
                  onClick={() => setIsBookSessionOpen(true)}
                  className="mt-10 w-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-6 py-4 text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-600/50 transition-all duration-300 hover:scale-105 transform"
                >
                  Book a Free Demo Class
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CallToAction />
      <CustomFAQ faqs={greLiveFaqs} />
      <Footer />
      <BookSessionDialog open={isBookSessionOpen} onOpenChange={setIsBookSessionOpen} />
    </div>
  );
};

export default GreLive;