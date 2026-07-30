import React, { useState } from "react";
import { CustomFAQ } from "@/components/CustomFAQ";
import { BookOpen, Zap, Activity, Gift, ChevronDown, CheckCircle2, Sparkles, Target, Clock, Building2, ArrowRight, Trophy, BarChart3, Laptop, GraduationCap, Headphones } from "lucide-react";
import { ProgramHero } from "@/components/ProgramHero";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import analyticsIcon from "@/assets/paced-icon/analytics.webp";
import booksIcon from "@/assets/paced-icon/books.webp";
import qaIcon from "@/assets/paced-icon/qa.webp";
import since1993Icon from "@/assets/paced-icon/since-1993.webp";
import studentIcon from "@/assets/paced-icon/student.webp";
import teacherIcon from "@/assets/paced-icon/teacher.webp";

const GrePrivateTut: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);

  const grePrivateTutFaqs = [
    {
      question: "How personalized is the GRE private tutoring program?",
      answer: "Extremely personalized. We design a completely custom study plan based on your current score, target score, timeline, strengths, weaknesses, and availability."
    },
    {
      question: "Who will be my mentor?",
      answer: "You will get 1-on-1 direct coaching from Aman, an experienced prep expert with a proven history of helping students score 325+ on the GRE."
    },
    {
      question: "How flexible is the scheduling for sessions?",
      answer: "We offer highly flexible timings. You can schedule sessions in coordination with your tutor to comfortably fit around your work or college commitments."
    },
    {
      question: "Can I choose to focus only on my weak areas?",
      answer: "Yes, absolutely! The entire curriculum can be tailored to focus on your specific areas of improvement, whether it's Quant word problems, Verbal RC, or time management."
    },
    {
      question: "How do we track my progress?",
      answer: "We track your progress through diagnostic tests, section-wise drills, full simulated mock exams, and direct performance reviews with your mentor."
    }
  ];

  const cards = [
    { icon: since1993Icon, title: "Unmatched Scores on the GRE since 1993" },
    { icon: analyticsIcon, title: "Smart Analytics help you track and evaluate your performance" },
    { icon: teacherIcon, title: "Flexibility to move between online and offline mode of learning as per your convenience & availability" },
    { icon: booksIcon, title: "Targeted study plan & exhaustive Full-Length tests to maximize speed and accuracy" },
    { icon: studentIcon, title: "Mentoring and Coaching by the best and most experienced faculty" },
    { icon: qaIcon, title: "Personalized attention through Unlimited Doubt Clearing Sessions" },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <ProgramHero type="gre" />

      {/* DESCRIPTION - Professional Colorful Feature Cards */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          {/* Header Banner Card */}
          <div className="rounded-[32px] border-2 border-blue-200/80 bg-gradient-to-br from-blue-50/90 via-indigo-50/60 to-white p-8 md:p-12 shadow-lg mb-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-600 text-white text-xs md:text-sm font-extrabold uppercase tracking-widest shadow-md mb-5">
                <Sparkles className="w-4 h-4 stroke-[2.5]" />
                <span>1-ON-1 PRIVATE TUTORING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-950 tracking-tight leading-[1.15] mb-5">
                Elite GRE Coaching <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Tailored Exclusively To You</span>
              </h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4" style={{ fontSize: "24px" }}>
                GRE private tutoring is the most personalised form of GRE prep which ensures that you work with the best GRE tutors in India, build a customized study plan and learn in a 1-1 classroom setting. These classes can be done in-person or online or hybrid based on availability.
              </p>
              <p className="text-slate-600 font-semibold leading-relaxed" style={{ fontSize: "22px" }}>
                Students looking for a very high GRE score or those with uncertain work schedules generally opt for a GRE tutor. The tutor ensures high concept clarity, focused practice and regular test reviews.
              </p>
            </div>
          </div>

          {/* 4 Colorful Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Personalized Roadmap */}
            <div className="rounded-[28px] border-2 border-purple-200/80 bg-gradient-to-br from-purple-50/80 via-pink-50/50 to-indigo-50/70 p-8 shadow-md hover:shadow-xl hover:border-purple-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-lg mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-900 bg-purple-100/70 px-3 py-1 rounded-full border border-purple-200/80">Custom Strategy</span>
                <h3 className="text-2xl font-extrabold text-purple-950 mt-4 mb-2">Personalized GRE Roadmap</h3>
                <div className="inline-block text-purple-700 font-bold mb-3" style={{ fontSize: "19px" }}>Custom 1-on-1 Prep Strategy</div>
                <p className="text-purple-900/80 leading-relaxed font-normal" style={{ fontSize: "22px" }}>
                  Build a custom GRE prep roadmap to achieve the best GRE scores possible in direct consultation with expert GRE faculty.
                </p>
              </div>
            </div>

            {/* Card 2: Comprehensive Study Material */}
            <div className="rounded-[28px] border-2 border-blue-200/80 bg-gradient-to-br from-blue-50/80 via-sky-50/50 to-cyan-50/70 p-8 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg mb-6">
                  <BookOpen className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200/80">Full Material</span>
                <h3 className="text-2xl font-extrabold text-blue-950 mt-4 mb-2">Comprehensive Study Material</h3>
                <div className="inline-block text-blue-700 font-bold mb-3" style={{ fontSize: "19px" }}>Books & Full Test Series</div>
                <p className="text-blue-900/80 leading-relaxed font-normal" style={{ fontSize: "22px" }}>
                  GRE books, sectional tests and full length tests ensure you cover all areas of your prep thoroughly.
                </p>
              </div>
            </div>

            {/* Card 3: Maximum Flexibility */}
            <div className="rounded-[28px] border-2 border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-teal-50/50 to-green-50/70 p-8 shadow-md hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-lg mb-6">
                  <Clock className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200/80">Your Schedule</span>
                <h3 className="text-2xl font-extrabold text-emerald-950 mt-4 mb-2">Flexibility</h3>
                <div className="inline-block text-emerald-700 font-bold mb-3" style={{ fontSize: "19px" }}>Tailored Session Timings</div>
                <p className="text-emerald-900/80 leading-relaxed font-normal" style={{ fontSize: "22px" }}>
                  Choose classes based on your personal availability, work schedule and current level of prep.
                </p>
              </div>
            </div>

            {/* Card 4: Both Online & Offline */}
            <div className="rounded-[28px] border-2 border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-orange-50/50 to-yellow-50/70 p-8 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-lg mb-6">
                  <Building2 className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-200/80">Hybrid Learning</span>
                <h3 className="text-2xl font-extrabold text-amber-950 mt-4 mb-2">Both Online & Offline</h3>
                <div className="inline-block text-amber-700 font-bold mb-3" style={{ fontSize: "19px" }}>In-Person, Hybrid or Online</div>
                <p className="text-amber-900/80 leading-relaxed font-normal" style={{ fontSize: "22px" }}>
                  You can choose in-person or online 1-on-1 sessions as per your convenience and location.
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

      {/* WHY CHOOSE - CARDS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-blue-500/10 border-2 border-blue-400/50 text-blue-600 text-xl md:text-2xl font-black uppercase tracking-[0.16em] shadow-sm mb-5">
              WHY CHOOSE US
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 mb-4 tracking-tight leading-[1.2]">
              Why Choose Seekyoury for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">GRE Private Tutoring</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto">
              Experience personalized GRE preparation backed by 30+ years of expertise
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Trophy,
                title: "Unmatched Scores Since 1993",
                description: "Proven track record spanning over 3 decades with thousands of 320+ GRE scorers.",
                bg: "bg-gradient-to-br from-blue-50/90 via-sky-50/60 to-cyan-50/70",
                border: "border-2 border-blue-200/90 hover:border-blue-400",
                iconBg: "bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30",
                titleColor: "text-blue-950",
                descColor: "text-blue-900/90",
                glow: "from-blue-400 to-cyan-400",
              },
              {
                icon: BarChart3,
                title: "Smart Performance Analytics",
                description: "AI-driven diagnostic analytics track accuracy, pacing, and target area performance.",
                bg: "bg-gradient-to-br from-purple-50/90 via-indigo-50/60 to-pink-50/70",
                border: "border-2 border-purple-200/90 hover:border-purple-400",
                iconBg: "bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-lg shadow-purple-500/30",
                titleColor: "text-purple-950",
                descColor: "text-purple-900/90",
                glow: "from-purple-400 to-pink-400",
              },
              {
                icon: Laptop,
                title: "Online & Offline Flexibility",
                description: "Seamlessly switch between online live sessions and physical classroom labs based on your convenience.",
                bg: "bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-yellow-50/70",
                border: "border-2 border-amber-200/90 hover:border-amber-400",
                iconBg: "bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30",
                titleColor: "text-amber-950",
                descColor: "text-amber-900/90",
                glow: "from-amber-400 to-orange-400",
              },
              {
                icon: BookOpen,
                title: "Exhaustive Practice & Mocks",
                description: "Targeted study plans combined with full-length ETS-style simulated mock exams to maximize score accuracy.",
                bg: "bg-gradient-to-br from-emerald-50/90 via-teal-50/60 to-green-50/70",
                border: "border-2 border-emerald-200/90 hover:border-emerald-400",
                iconBg: "bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-500/30",
                titleColor: "text-emerald-950",
                descColor: "text-emerald-900/90",
                glow: "from-emerald-400 to-teal-400",
              },
              {
                icon: GraduationCap,
                title: "Master Faculty Mentoring",
                description: "Direct 1-on-1 coaching by senior GRE experts with decades of proven teaching excellence.",
                bg: "bg-gradient-to-br from-rose-50/90 via-pink-50/60 to-red-50/70",
                border: "border-2 border-rose-200/90 hover:border-rose-400",
                iconBg: "bg-gradient-to-tr from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30",
                titleColor: "text-rose-950",
                descColor: "text-rose-900/90",
                glow: "from-rose-400 to-pink-400",
              },
              {
                icon: Headphones,
                title: "Unlimited 1-on-1 Doubt Support",
                description: "Get personalized 1-on-1 assistance for any tricky problem, concept gap, or strategy query.",
                bg: "bg-gradient-to-br from-indigo-50/90 via-violet-50/60 to-purple-50/70",
                border: "border-2 border-indigo-200/90 hover:border-indigo-400",
                iconBg: "bg-gradient-to-tr from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30",
                titleColor: "text-indigo-950",
                descColor: "text-indigo-900/90",
                glow: "from-indigo-400 to-violet-400",
              },
            ].map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className={`group relative rounded-[28px] ${card.border} ${card.bg} p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
                >
                  {/* Glowing background blur shape */}
                  <div className={`absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br ${card.glow} opacity-20 blur-2xl pointer-events-none`} />

                  <div className="relative">
                    <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${card.iconBg} transition-all duration-300`}>
                      <IconComponent className="h-8 w-8 text-white stroke-[2.2]" />
                    </div>
                    <h3 className={`text-2xl font-extrabold ${card.titleColor} leading-tight mb-3`}>{card.title}</h3>
                    <p className={`text-base md:text-lg leading-relaxed ${card.descColor} font-medium`}>{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <button 
              onClick={() => setIsBookSessionOpen(true)}
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-9 py-4 text-lg font-extrabold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Book a Free Session
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-b from-background via-muted/10 to-background border-t border-border">
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
            {/* Booster Card */}
            <div className="relative rounded-[32px] border-2 border-blue-300/80 bg-gradient-to-b from-blue-50/70 via-indigo-50/30 to-white p-8 md:p-10 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold font-display text-slate-950 mb-6">Booster</h3>
                <div className="mb-2">
                  <p className="text-4xl md:text-5xl font-black text-blue-600 font-display tracking-tight">₹24,999</p>
                </div>
                <p className="text-slate-600 font-bold mb-8" style={{ fontSize: "18px" }}>8 sessions • single section • ~₹3,125/session</p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 stroke-[3]">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-slate-800 font-semibold leading-snug" style={{ fontSize: "19px" }}>8 × 60-min 1-on-1 sessions</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 stroke-[3]">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-slate-800 font-semibold leading-snug" style={{ fontSize: "19px" }}>Custom drills & homework</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 stroke-[3]">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-slate-800 font-semibold leading-snug" style={{ fontSize: "19px" }}>WhatsApp doubt support</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setIsBookSessionOpen(true)}
                className="w-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 py-4 text-white font-extrabold text-lg shadow-xl shadow-indigo-500/25 hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer mt-4"
              >
                Get Started
              </button>
            </div>

            {/* Complete Card (Recommended) */}
            <div className="relative rounded-[32px] border-2 border-blue-300/80 bg-gradient-to-b from-blue-50/70 via-indigo-50/30 to-white p-8 md:p-10 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group ring-2 ring-blue-500/50">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-1.5 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-blue-500/30">
                BEST VALUE
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold font-display text-slate-950 mb-6 mt-2">Complete</h3>
                <div className="mb-2">
                  <p className="text-4xl md:text-5xl font-black text-blue-600 font-display tracking-tight">₹44,999</p>
                </div>
                <p className="text-slate-600 font-bold mb-8" style={{ fontSize: "18px" }}>16 sessions • full GRE • ~₹2,812/session</p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 stroke-[3]">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-slate-800 font-semibold leading-snug" style={{ fontSize: "19px" }}>16 × 60-min 1-on-1 sessions</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 stroke-[3]">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-slate-800 font-semibold leading-snug" style={{ fontSize: "19px" }}>Self-paced course + 30-test series</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 stroke-[3]">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-slate-800 font-semibold leading-snug" style={{ fontSize: "19px" }}>Mock reviews after every test</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 stroke-[3]">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-slate-800 font-semibold leading-snug" style={{ fontSize: "19px" }}>Priority doubt support</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setIsBookSessionOpen(true)}
                className="w-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 py-4 text-white font-extrabold text-lg shadow-xl shadow-indigo-500/25 hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer mt-4"
              >
                Get Started
              </button>
            </div>

            {/* Elite Card */}
            <div className="relative rounded-[32px] border-2 border-blue-300/80 bg-gradient-to-b from-blue-50/70 via-indigo-50/30 to-white p-8 md:p-10 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold font-display text-slate-950 mb-6">Elite 330+</h3>
                <div className="mb-2">
                  <p className="text-4xl md:text-5xl font-black text-blue-600 font-display tracking-tight">₹69,999</p>
                </div>
                <p className="text-slate-600 font-bold mb-8" style={{ fontSize: "18px" }}>24 sessions • directly with Aman</p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 stroke-[3]">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-slate-800 font-semibold leading-snug" style={{ fontSize: "19px" }}>24 sessions with Aman himself</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 stroke-[3]">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-slate-800 font-semibold leading-snug" style={{ fontSize: "19px" }}>Everything in Complete</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 stroke-[3]">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-slate-800 font-semibold leading-snug" style={{ fontSize: "19px" }}>MBA/MS admissions strategy session</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setIsBookSessionOpen(true)}
                className="w-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 py-4 text-white font-extrabold text-lg shadow-xl shadow-indigo-500/25 hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer mt-4"
              >
                Get Started
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background py-20 border-t border-border">
        {/* Decorative glows */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none -z-10" />
        
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-sm font-bold text-primary uppercase tracking-wide">Ready to Transform Your GRE Prep?</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
                Find Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Y</span> Today
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Get personalized GRE tutoring with a 1-on-1 strategy session. We'll assess your current level, understand your goals, and create a roadmap to your target score.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { title: "Free strategy consultation", desc: "30-minute session with GRE experts" },
                  { title: "Personalized study roadmap", desc: "Custom plan tailored to your timeline" },
                  { title: "No commitment required", desc: "Pure guidance, zero obligations" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg hover:shadow-xl hover:brightness-95 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Book Your Free Demo
              </button>
            </div>

            {/* Right Visual Card */}
            <div className="relative">
              {/* Gradient card background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-card to-background border border-border shadow-xl"></div>
              
              {/* Accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-primary to-accent"></div>

              <div className="relative p-10 lg:p-12">
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
      <CustomFAQ faqs={grePrivateTutFaqs} />
      <Footer />
      <BookSessionDialog open={isBookSessionOpen} onOpenChange={setIsBookSessionOpen} />
    </div>
  );
};

export default GrePrivateTut;
