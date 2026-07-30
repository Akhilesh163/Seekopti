import React, { useState } from "react";
import {
  BookOpen,
  Zap,
  Activity,
  Gift,
  ChevronDown,
  BarChart3,
  PlayCircle,
  ShieldCheck,
  UserCheck,
  Smartphone,
  Building2,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { ProgramHero } from "@/components/ProgramHero";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";
import { WebinarSection } from "@/components/WebinarSection";

const selfPacedFaqs = [
  {
    question: "How long is the self-paced course valid for?",
    answer: "Each course comes with 6 months of validity from the date of purchase, giving you plenty of study time."
  },
  {
    question: "Are mock tests included in the self-paced plan?",
    answer: "Yes, our self-paced plans include the full GMAT/GRE Quant test series with simulated full-length mocks."
  },
  {
    question: "Can I upgrade to private tutoring later if I get stuck?",
    answer: "Absolutely. You can upgrade to a private tutoring or live prep tier at any point during your preparation."
  },
  {
    question: "How do I get my doubts resolved?",
    answer: "You get access to our online student doubt forum where you can post queries and receive expert assistance."
  }
];
import analyticsIcon from "@/assets/paced-icon/analytics.webp";
import booksIcon from "@/assets/paced-icon/books.webp";
import qaIcon from "@/assets/paced-icon/qa.webp";
import since1993Icon from "@/assets/paced-icon/since-1993.webp";
import studentIcon from "@/assets/paced-icon/student.webp";
import teacherIcon from "@/assets/paced-icon/teacher.webp";

const SelfPaced = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);

  const [selectedTrack, setSelectedTrack] = useState("quant");

  const topScorers = [
    { name: "Anant Govil", school: "DTU - DELHI TECHNOLOGICAL UNIVERSITY", score: "323" },
    { name: "Shaurya Srivastava", school: "NIIT UNIVERSITY", score: "322" },
    { name: "Eshan Singh", school: "DYPIEMR", score: "321" },
    { name: "Soumojit Dalui", school: "SRM, CHENNAI", score: "320" },
  ];

  const features = [
    "Concept videos: 40+ hours of GRE prep recordings",
    "Sectional and full length tests to simulate exam conditions",
    "Faculty support: personal doubt-clearing sessions",
    "Online study material and app access",
    "Access to local centers for mock tests and labs",
  ];

  const featureCards = [
    {
      icon: since1993Icon,
      badge: "Proven Legacy",
      title: "Unmatched Scores on the GRE since 1993",
      description: "Proven track record with thousands of 320+ scores."
    },
    {
      icon: analyticsIcon,
      badge: "Smart Insights",
      title: "Smart analytics help you track and evaluate performance",
      description: "Identify weak spots and track score trajectory."
    },
    {
      icon: teacherIcon,
      badge: "Adaptive Prep",
      title: "Powerful adaptive technology platform streamlines prep",
      description: "AI-driven practice tailored to your exact level."
    },
    {
      icon: booksIcon,
      badge: "Structured Plan",
      title: "Targeted study plan & exhaustive full-length tests",
      description: "Comprehensive coverage of Quant and Verbal concepts."
    },
    {
      icon: studentIcon,
      badge: "Expert Mentoring",
      title: "Mentoring and coaching by expert faculty",
      description: "Learn strategies from master GRE instructors."
    },
    {
      icon: qaIcon,
      badge: "Personal Support",
      title: "Personalized attention through doubt-clearing sessions",
      description: "Never stay stuck on a problem for long."
    }
  ];

  const tracks = [
    {
      id: "quant",
      name: "Quant Track",
      price: "₹8,999",
      period: "6-month access",
      accent: "from-blue-600 to-indigo-600",
      features: [
        "80+ Quant video lessons",
        "2,000+ practice questions",
        "10 Quant sectional tests",
        "Doubt forum access"
      ]
    },
    {
      id: "mixed",
      name: "Complete (Mixed)",
      price: "₹14,999",
      period: "12-month access",
      accent: "from-blue-600 via-indigo-600 to-violet-600",
      badge: "BEST VALUE",
      features: [
        "Full Quant + Verbal (incl. CR) course",
        "4,000+ practice questions",
        "Full 30-test GRE Test Series included",
        "AWA templates + 2 essay reviews",
        "Monthly live strategy session"
      ]
    },
    {
      id: "verbal",
      name: "Verbal Track",
      price: "₹8,999",
      period: "6-month access",
      accent: "from-blue-600 to-indigo-600",
      features: [
        "70+ Verbal video lessons (RC, CR, SC)",
        "Vocab program + app quizzes",
        "10 Verbal sectional tests",
        "Doubt forum access"
      ]
    }
  ];



  const trackOptions = {
    quant: [
      {
        id: "quant-syllabus",
        icon: "📊",
        title: "Full ETS Quant syllabus",
        description: "Arithmetic, Algebra, Geometry and Data Analysis — every topic, with QC, Numeric Entry and multi-answer strategies.",
      },
      {
        id: "quant-logic",
        icon: "🧠",
        title: "Logic over formulas",
        description: "Aman's signature approach: estimation, elimination and number sense that saves minutes.",
      },
      {
        id: "quant-drills",
        icon: "⏱️",
        title: "Timed drills",
        description: "Section-length drills (12Q/21min and 15Q/26min) that build 165+ pace.",
      },
    ],
    verbal: [
      {
        id: "verbal-rc",
        icon: "📖",
        title: "RC + Critical Reasoning",
        description: "A repeatable process for Reading Comprehension and CR questions — assumptions, strengthen/weaken, paradox and conclusion.",
      },
      {
        id: "verbal-tc",
        icon: "✏️",
        title: "TC & SE mastery",
        description: "Text Completion (1–3 blanks) and Sentence Equivalence with logic-based cluing — not blind vocab guessing.",
      },
      {
        id: "verbal-vocab",
        icon: "💡",
        title: "High-frequency vocab",
        description: "Curated word lists with mnemonics, usage and daily quizzes — no 3,500-word grid.",
      },
    ],
    mixed: [
      {
        id: "mixed-syllabus",
        icon: "📚",
        title: "150+ video lessons",
        description: "Every Quant and Verbal concept on the ETS syllabus — arithmetic to data analysis, RC and Critical Reasoning to Sentence Equivalence — taught logic-first.",
      },
      {
        id: "mixed-practice",
        icon: "🎯",
        title: "4,000+ practice questions",
        description: "Topic-wise sets, timed drills and full sectional tests with detailed video solutions.",
      },
      {
        id: "mixed-analytics",
        icon: "📈",
        title: "Smart analytics + AWA",
        description: "Track accuracy, pace and weak topics — plus AWA templates and 2 evaluated essays.",
      },
    ],
  };

  const getTrackIcon = (icon) => {
    const iconMap = {
      "📊": <BookOpen className="h-8 w-8" />,
      "🧠": <Zap className="h-8 w-8" />,
      "⏱️": <Activity className="h-8 w-8" />,
      "📖": <BookOpen className="h-8 w-8" />,
      "✏️": <Activity className="h-8 w-8" />,
      "💡": <Zap className="h-8 w-8" />,
      "📚": <BookOpen className="h-8 w-8" />,
      "🎯": <Activity className="h-8 w-8" />,
      "📈": <BarChart3 className="h-8 w-8" />,
    };
    return iconMap[icon] || null;
  };

  const getCardColors = (index: number) => {
    const colors = [
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
        bg: "bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-yellow-50/70",
        border: "border-2 border-amber-200/90 hover:border-amber-400",
        icon: "bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30",
        title: "text-amber-950",
        desc: "text-amber-900/90",
        glow: "from-amber-400 to-orange-400",
      },
    ];
    return colors[index % 3];
  };

  return (
    <div className="bg-background text-foreground">
      <ProgramHero type="gre" />

      {/* MAIN CONTENT - Professional Colorful Feature Cards */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          {/* Header Card / Intro Banner */}
          <div className="rounded-[32px] border-2 border-blue-200/80 bg-gradient-to-br from-blue-50/90 via-indigo-50/60 to-white p-8 md:p-12 shadow-lg mb-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-600 text-white text-xs md:text-sm font-extrabold uppercase tracking-widest shadow-md mb-5">
                <Sparkles className="w-4 h-4 stroke-[2.5]" />
                <span>SELF-PACED PREPARATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-950 tracking-tight leading-[1.15] mb-5">
                Flexible GRE Coaching Built Around <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Your Schedule</span>
              </h2>
              <p className="text-slate-700 font-medium leading-relaxed" style={{ fontSize: "24px" }}>
                GRE Self-paced coaching allows students to prepare for the GRE at their convenience. These are pre-recorded videos that cover all concepts tested on the GRE with examples of applications of those concepts. GRE online training in a self-paced environment ensures that students can speed up or slow down their preparation based on their schedules.
              </p>
            </div>
          </div>

          {/* 5 Colorful Professional Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Concept Videos */}
            <div className="rounded-[28px] border-2 border-purple-200/80 bg-gradient-to-br from-purple-50/80 via-pink-50/50 to-indigo-50/70 p-8 shadow-md hover:shadow-xl hover:border-purple-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-lg mb-6">
                  <PlayCircle className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-900 bg-purple-100/70 px-3 py-1 rounded-full border border-purple-200/80">Video Recordings</span>
                <h3 className="text-2xl font-extrabold text-purple-950 mt-4 mb-2">Concept Videos</h3>
                <div className="inline-block text-purple-700 font-bold mb-3" style={{ fontSize: "19px" }}>40+ hours of GRE prep recordings</div>
                <p className="text-purple-900/80 leading-relaxed font-normal" style={{ fontSize: "22px" }}>
                  Step-by-step video lessons covering all Quant & Verbal concepts with real exam application examples.
                </p>
              </div>
            </div>

            {/* Card 2: Simulated Exam Tests */}
            <div className="rounded-[28px] border-2 border-blue-200/80 bg-gradient-to-br from-blue-50/80 via-sky-50/50 to-cyan-50/70 p-8 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg mb-6">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200/80">Exam Conditions</span>
                <h3 className="text-2xl font-extrabold text-blue-950 mt-4 mb-2">Sectional & Full-Length Mocks</h3>
                <div className="inline-block text-blue-700 font-bold mb-3" style={{ fontSize: "19px" }}>Simulate real exam environment</div>
                <p className="text-blue-900/80 leading-relaxed font-normal" style={{ fontSize: "22px" }}>
                  Timed sectional tests and full-length simulated mock exams engineered to mirror ETS testing.
                </p>
              </div>
            </div>

            {/* Card 3: Faculty Support */}
            <div className="rounded-[28px] border-2 border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-teal-50/50 to-green-50/70 p-8 shadow-md hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-lg mb-6">
                  <UserCheck className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200/80">Personal Doubt Clearing</span>
                <h3 className="text-2xl font-extrabold text-emerald-950 mt-4 mb-2">Faculty Support</h3>
                <div className="inline-block text-emerald-700 font-bold mb-3" style={{ fontSize: "19px" }}>Personal 1-on-1 doubt sessions</div>
                <p className="text-emerald-900/80 leading-relaxed font-normal" style={{ fontSize: "22px" }}>
                  Direct access to master faculty for personal doubt-resolution and strategy guidance.
                </p>
              </div>
            </div>

            {/* Card 4: Online Study Material & App */}
            <div className="rounded-[28px] border-2 border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-orange-50/50 to-yellow-50/70 p-8 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-lg mb-6">
                  <Smartphone className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-200/80">Digital Access</span>
                <h3 className="text-2xl font-extrabold text-amber-950 mt-4 mb-2">Study Material & App Access</h3>
                <div className="inline-block text-amber-700 font-bold mb-3" style={{ fontSize: "19px" }}>Learn anytime on web & app</div>
                <p className="text-amber-900/80 leading-relaxed font-normal" style={{ fontSize: "22px" }}>
                  24/7 access to online study portals, practice question repositories, and mobile app features.
                </p>
              </div>
            </div>

            {/* Card 5: Local Test Centers */}
            <div className="rounded-[28px] border-2 border-rose-200/80 bg-gradient-to-br from-rose-50/80 via-pink-50/50 to-red-50/70 p-8 shadow-md hover:shadow-xl hover:border-rose-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group md:col-span-2 lg:col-span-1">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-lg mb-6">
                  <Building2 className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-900 bg-rose-100/70 px-3 py-1 rounded-full border border-rose-200/80">Physical Test Centers</span>
                <h3 className="text-2xl font-extrabold text-rose-950 mt-4 mb-2">Local Center Access</h3>
                <div className="inline-block text-rose-700 font-bold mb-3" style={{ fontSize: "19px" }}>Mock tests & computer labs</div>
                <p className="text-rose-900/80 leading-relaxed font-normal" style={{ fontSize: "22px" }}>
                  Access local accredited centers for proctored mock tests and dedicated computer lab facilities.
                </p>
              </div>
            </div>

              <div className="rounded-[28px] border-2 border-rose-200/80 bg-gradient-to-br from-rose-50/80 via-pink-50/50 to-red-50/70 p-8 shadow-md hover:shadow-xl hover:border-rose-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group md:col-span-2 lg:col-span-1">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-lg mb-6">
                  <Building2 className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-900 bg-rose-100/70 px-3 py-1 rounded-full border border-rose-200/80">Physical Test Centers</span>
                <h3 className="text-2xl font-extrabold text-rose-950 mt-4 mb-2">Local Center Access</h3>
                <div className="inline-block text-rose-700 font-bold mb-3" style={{ fontSize: "19px" }}>Mock tests & computer labs</div>
                <p className="text-rose-900/80 leading-relaxed font-normal" style={{ fontSize: "22px" }}>
                  Access local accredited centers for proctored mock tests and dedicated computer lab facilities.
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

      {/* WHAT YOU GET Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white text-sm md:text-base font-black uppercase tracking-[0.22em] shadow-lg shadow-blue-500/20 mb-5">
              <Sparkles className="w-4 h-4" />
              WHAT YOU GET
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-slate-950 tracking-tight">Built for Maximum GRE Improvement</h2>
            <p className="mt-4 text-xl text-slate-600 font-medium max-w-2xl mx-auto">Everything you need to excel in GRE Quant, Verbal and Analytical Writing.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card, index) => {
              const colors = [
                {
                  shell: "border-purple-200/80 bg-gradient-to-br from-purple-50/90 via-fuchsia-50/70 to-indigo-50/80",
                  icon: "bg-gradient-to-br from-purple-600 to-indigo-500",
                  title: "text-purple-950",
                  desc: "text-purple-900/80",
                  badge: "text-purple-900 bg-purple-100/80 border-purple-200/80",
                },
                {
                  shell: "border-blue-200/80 bg-gradient-to-br from-blue-50/90 via-sky-50/70 to-cyan-50/80",
                  icon: "bg-gradient-to-br from-blue-600 to-cyan-500",
                  title: "text-blue-950",
                  desc: "text-blue-900/80",
                  badge: "text-blue-900 bg-blue-100/80 border-blue-200/80",
                },
                {
                  shell: "border-emerald-200/80 bg-gradient-to-br from-emerald-50/90 via-teal-50/70 to-green-50/80",
                  icon: "bg-gradient-to-br from-emerald-600 to-teal-500",
                  title: "text-emerald-950",
                  desc: "text-emerald-900/80",
                  badge: "text-emerald-900 bg-emerald-100/80 border-emerald-200/80",
                },
                {
                  shell: "border-amber-200/80 bg-gradient-to-br from-amber-50/90 via-orange-50/70 to-yellow-50/80",
                  icon: "bg-gradient-to-br from-amber-500 to-orange-500",
                  title: "text-amber-950",
                  desc: "text-amber-900/80",
                  badge: "text-amber-900 bg-amber-100/80 border-amber-200/80",
                },
                {
                  shell: "border-rose-200/80 bg-gradient-to-br from-rose-50/90 via-pink-50/70 to-red-50/80",
                  icon: "bg-gradient-to-br from-rose-500 to-pink-500",
                  title: "text-rose-950",
                  desc: "text-rose-900/80",
                  badge: "text-rose-900 bg-rose-100/80 border-rose-200/80",
                },
                {
                  shell: "border-indigo-200/80 bg-gradient-to-br from-indigo-50/90 via-violet-50/70 to-slate-50/80",
                  icon: "bg-gradient-to-br from-indigo-600 to-violet-500",
                  title: "text-indigo-950",
                  desc: "text-indigo-900/80",
                  badge: "text-indigo-900 bg-indigo-100/80 border-indigo-200/80",
                },
              ][index % 6];

              return (
                <div
                  key={index}
                  className={`group relative rounded-[28px] border-2 ${colors.shell} p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
                >
                  <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-white/70 to-transparent opacity-70 blur-2xl pointer-events-none" />
                  <div className="mb-6 flex items-center gap-4">
                    <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${colors.icon} text-white shadow-lg ring-2 ring-white/80 overflow-hidden`}>
                      <img src={card.icon} alt={card.title} className="h-9 w-9 object-contain drop-shadow-md" />
                    </div>
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] ${colors.badge}`}>{card.badge}</span>
                  </div>
                  <h3 className={`text-2xl font-extrabold ${colors.title} mt-4 mb-3 leading-tight`}>{card.title}</h3>
                  <p className={`text-lg font-medium leading-relaxed ${colors.desc}`}>{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRACK COMPARISON / PRICING SECTION - Matched to Image 2 Design */}
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

          {/* Pricing Cards Grid */}
          <div className="grid gap-8 lg:grid-cols-3 mb-14 items-stretch">
            {tracks.map((track) => (
              <div
                key={track.id}
                className={`relative rounded-[32px] border-2 border-blue-300/80 bg-gradient-to-b from-blue-50/70 via-indigo-50/30 to-white p-8 md:p-10 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group ${
                  track.badge ? "ring-2 ring-blue-500/50" : ""
                }`}
              >
                {/* Floating Top Badge */}
                {track.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-1.5 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-blue-500/30">
                    {track.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold font-display text-slate-950 mb-6">
                    {track.name}
                  </h3>

                  {/* Price display */}
                  <div className="mb-2">
                    <p className="text-4xl md:text-5xl font-black text-blue-600 font-display tracking-tight">
                      {track.price}
                    </p>
                  </div>

                  <p className="text-slate-600 font-bold mb-8" style={{ fontSize: "18px" }}>
                    {track.period}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {track.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3.5">
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                        <span className="text-slate-800 font-semibold leading-snug" style={{ fontSize: "19px" }}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setIsBookSessionOpen(true)}
                  className="w-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 py-4 text-white font-extrabold text-lg shadow-xl shadow-indigo-500/25 hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer mt-4"
                >
                  Enroll Now
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CallToAction />
      <CustomFAQ faqs={selfPacedFaqs} title="Self-Paced Course FAQs" />
      <Footer />
      <BookSessionDialog isOpen={isBookSessionOpen} onClose={() => setIsBookSessionOpen(false)} />
    </div>
  );
};

export default SelfPaced;
