import React, { useEffect, useState } from "react";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import { ArrowRight, BookOpen, Zap, Activity, ShieldCheck, Calculator, BarChart3, Sparkles, PlayCircle, Video, UserCheck, CheckCircle2, Clock3, PenTool, Trophy, GraduationCap, Layers, RotateCcw, Globe2 } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Footer } from "@/components/Footer";
import { ProgramHero } from "@/components/ProgramHero";
import analyticsIcon from "@/assets/paced-icon/analytics.webp";
import booksIcon from "@/assets/paced-icon/books.webp";
import qaIcon from "@/assets/paced-icon/qa.webp";
import since1993Icon from "@/assets/paced-icon/since-1993.webp";
import studentIcon from "@/assets/paced-icon/student.webp";
import teacherIcon from "@/assets/paced-icon/teacher.webp";
import ManyaPhoto from "@/assets/student_pics/Manya.jpeg";
import PraffulPhoto from "@/assets/student_pics/Prafful.jpeg";
import ArjunPhoto from "@/assets/student_pics/Arjun M S.jpeg";
import BalagopalPhoto from "@/assets/student_pics/Balagopal Jayakumar.jpeg";

const AboutGmat: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);
  const [activeMode, setActiveMode] = useState("classroom");
  const [activeGmatFocus, setActiveGmatFocus] = useState("learn");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [openSyllabusSection, setOpenSyllabusSection] = useState<string | null>(null);

  const gmatPrepModes = [
    {
      id: "classroom",
      title: "GMAT Classroom Coaching",
      label: "Hybrid",
      description: "Instructor-led sessions with in-person support, targeted mocks, and live doubt clearing.",
      bullets: [
        "60 hours of classroom coaching with expert GMAT faculty",
        "Weekly mock tests and personalized score reports",
        "Hybrid mode for flexible classroom and online attendance",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
    },
    {
      id: "online",
      title: "GMAT Online Coaching",
      label: "Online",
      description: "Live online classes with structured lessons, analytics, and flexible access from home.",
      bullets: [
        "Interactive live sessions with GMAT specialists",
        "Online practice tests and section-wise review",
        "Access to lesson recordings and study dashboards",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
    },
    {
      id: "self-paced",
      title: "GMAT Self-Paced Coaching",
      label: "Self-Paced",
      description: "Recorded lessons and practice material for learners who want to move at their own pace.",
      bullets: [
        "HD video lessons for every GMAT topic",
        "7 full-length mock tests with explanations",
        "Self-study support and progress tracking",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
    },
    {
      id: "private",
      title: "GMAT Private Tutoring",
      label: "Private",
      description: "One-on-one mentoring for score improvement, strategy, and confidence building.",
      bullets: [
        "Customized lesson plans for your target score",
        "Dedicated expert tutor and regular progress reviews",
        "Focused doubt clearing for verbal, quant, and IR",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
    },
  ];

  const gmatFocusAreas = [
    {
      id: "learn",
      title: "Concept Mastery",
      short: "Build the fundamentals behind every GMAT question.",
      headline: "Learn the core ideas that drive GMAT success.",
      description: "Structured classes, concept drills, and expert guidance make every topic easy to apply on test day.",
      points: [
        "Foundational training for quantitative and verbal reasoning",
        "Topic-by-topic strategy sessions for every question type",
        "Live doubt clearing and revision blocks",
      ],
      image: "/assets/gre-asset/top-learn.png",
    },
    {
      id: "practice",
      title: "Timed Practice",
      short: "Sharpen accuracy and build pacing under exam conditions.",
      headline: "Practice with real GMAT-style questions and mock tests.",
      description: "Timed drills and sectional tests help you get faster, more confident, and adaptive under pressure.",
      points: [
        "Topic-based practice with analytics",
        "Regular full-length mock tests",
        "Error review sessions to fix weak areas",
      ],
      image: "/assets/gre-asset/top-practice.png",
    },
    {
      id: "apply",
      title: "Score Strategy",
      short: "Convert practice into measurable improvement.",
      headline: "Use analytics and mentoring to improve your GMAT score.",
      description: "Personalised score reports, strategy calls, and study-plan adjustments keep you on track toward your goal.",
      points: [
        "Weekly score analytics and growth tracking",
        "Targeted practice based on your performance",
        "Strategy mentoring for test day readiness",
      ],
      image: "/assets/gre-asset/top-apply.png",
    },
  ];

  const activeFocus = gmatFocusAreas.find((item) => item.id === activeGmatFocus) ?? gmatFocusAreas[0];

  const cards = [
    {
      icon: since1993Icon,
      title: "Proven Success",
      description: "High GMAT scores achieved consistently since 1993.",
    },
    {
      icon: analyticsIcon,
      title: "Smart Analytics",
      description: "Actionable insights to improve your performance every week.",
    },
    {
      icon: teacherIcon,
      title: "Expert Faculty",
      description: "Top GMAT instructors with real admissions coaching experience.",
    },
    {
      icon: booksIcon,
      title: "Practice Modules",
      description: "Extensive mocks, drills, and explanation material.",
    },
    {
      icon: studentIcon,
      title: "Personalized Support",
      description: "Doubt clearing, mentoring, and score planning tailored to you.",
    },
    {
      icon: qaIcon,
      title: "Adaptive Strategy",
      description: "Adjust your plan as your strengths and targets evolve.",
    },
  ];

  const studentReviews = [
    {
      name: "Nishtha",
      title: "GMAT teacher",
      image: ManyaPhoto,
      rating: 5,
      text: "Nishtha ma'am is excellent at explaining concepts in a simple and easy to understand way. She is patient, supportive, and always encourages me to do my best.",
      footer: "Sandeep, 1 week ago",
    },
    {
      name: "Dhruv",
      title: "GMAT teacher",
      image: PraffulPhoto,
      rating: 5,
      text: "Hello Dhruv, thank you for the excellent teaching and support you've given to our 10 years old son Thomas. Your clear explanations and friendly approach have made math enjoyable for him.",
      footer: "Fabio, 2 months ago",
    },
    {
      name: "Pratyush",
      title: "GMAT teacher",
      image: ArjunPhoto,
      rating: 5,
      text: "Pratyush has been an excellent calculus tutor for my son. He explains complex concepts in a clear, patient, and easy-to-understand manner, which has greatly improved my son's confidence.",
      footer: "Devesh, 2 weeks ago",
    },
    {
      name: "Balagopal",
      title: "GMAT teacher",
      image: BalagopalPhoto,
      rating: 5,
      text: "Handling a 5 year old homeschooler with ease. Dhruv is an amazing teacher. I sincerely appreciate his patience with my daughter and the fun learning vibe.",
      footer: "Sreethy, 3 months ago",
    },
  ];

  const gmatFaqs = [
    {
      question: "What is the structure of the GMAT Focus Edition?",
      answer: "The GMAT Focus Edition consists of three 45-minute sections: Quantitative Reasoning (21 questions), Verbal Reasoning (23 questions), and Data Insights (20 questions)."
    },
    {
      question: "What is the scoring scale for the GMAT Focus Edition?",
      answer: "Scores range from 205 to 805, with all three sections (Quant, Verbal, Data Insights) contributing equally to your total score."
    },
    {
      question: "What is a competitive GMAT Focus Edition score?",
      answer: "A score of 645+ is highly competitive (equivalent to a 700+ on the old GMAT exam), placing you in the top 10% of test-takers globally."
    },
    {
      question: "How long is a GMAT score valid?",
      answer: "GMAT scores are valid for 5 years from your test date, allowing you to prepare and take the exam well in advance of your applications."
    },
    {
      question: "Can I choose the section order on the GMAT?",
      answer: "Yes! The GMAT Focus Edition offers total flexibility, allowing you to take the sections in any of the 6 possible orders you prefer."
    },
    {
      question: "Does the GMAT Focus Edition have an essay?",
      answer: "No, the Analytical Writing Assessment (AWA) has been completely removed in the GMAT Focus Edition, making the exam shorter and more focused."
    }
  ];

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const interval = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 5000);

    return () => window.clearInterval(interval);
  }, [carouselApi]);

  return (
    <div className="bg-background text-foreground">
      <ProgramHero type="gmat" />

      {/* WHAT SERVICES WE PROVIDE SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/20 to-slate-50 relative overflow-hidden border-b border-slate-200" id="services">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-600 text-base md:text-lg font-extrabold uppercase tracking-[0.14em] shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-blue-600 stroke-[2.5]" />
              <span>WHAT SERVICES WE PROVIDE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display text-foreground tracking-tight mt-2 mb-4">
              Tailored <span className="text-blue-600">GMAT Prep</span> for <br /> Your Target Score
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Choose the learning format that best fits your schedule, score goal, and preparation style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {/* 1. GMAT Self Paced Course — Purple / Pink / Indigo */}
            <div className="rounded-[28px] border-2 border-purple-200/80 bg-gradient-to-br from-purple-50/80 via-pink-50/50 to-indigo-50/70 p-8 shadow-md hover:shadow-xl hover:border-purple-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-lg mb-6">
                  <PlayCircle className="w-7 h-7" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-white bg-purple-600 px-3.5 py-1.5 rounded-full shadow-sm">Self-Study</span>
                <h3 className="text-2xl font-extrabold text-purple-950 mt-4 mb-3">GMAT Self Paced Course</h3>
                <p className="text-purple-900/80 leading-relaxed mb-6 font-normal" style={{ fontSize: "19px" }}>
                  Study on your own schedule with structured video modules, targeted drills, and complete topic coverage.
                </p>
                <ul className="space-y-3.5 mb-8">
                  <li className="flex items-center gap-2.5 text-purple-950 font-semibold" style={{ fontSize: "18px" }}>
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                    Complete HD Video Modules
                  </li>
                  <li className="flex items-center gap-2.5 text-purple-950 font-semibold" style={{ fontSize: "18px" }}>
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                    Topic-wise Drills & Analytics
                  </li>
                  <li className="flex items-center gap-2.5 text-purple-950 font-semibold" style={{ fontSize: "18px" }}>
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                    Quant, Verbal & Data Insights
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setIsBookSessionOpen(true)}
                className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3.5 px-6 transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Self Paced</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* 2. GMAT Live Classes — Blue / Sky / Cyan */}
            <div className="rounded-[28px] border-2 border-blue-300 bg-gradient-to-br from-blue-50/80 via-sky-50/50 to-cyan-50/70 p-8 shadow-xl relative flex flex-col justify-between overflow-visible transform md:-translate-y-2">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-15 blur-2xl pointer-events-none overflow-hidden rounded-full" />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-black uppercase tracking-widest px-5 py-1.5 rounded-full shadow-lg z-20 whitespace-nowrap">
                Most Popular
              </div>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg mb-6 mt-2">
                  <Video className="w-7 h-7" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-white bg-blue-600 px-3.5 py-1.5 rounded-full shadow-sm">Live Training</span>
                <h3 className="text-2xl font-extrabold text-blue-950 mt-4 mb-3">GMAT Live Classes</h3>
                <p className="text-blue-900/80 leading-relaxed mb-6 font-normal" style={{ fontSize: "19px" }}>
                  Interactive scheduled live training with top trainers, peer accountability, and real-time doubt clearance.
                </p>
                <ul className="space-y-3.5 mb-8">
                  <li className="flex items-center gap-2.5 text-blue-950 font-semibold" style={{ fontSize: "18px" }}>
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    Daily Interactive Live Sessions
                  </li>
                  <li className="flex items-center gap-2.5 text-blue-950 font-semibold" style={{ fontSize: "18px" }}>
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    Mock Test Review & Strategy
                  </li>
                  <li className="flex items-center gap-2.5 text-blue-950 font-semibold" style={{ fontSize: "18px" }}>
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    Dedicated Batch Doubt Solving
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setIsBookSessionOpen(true)}
                className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3.5 px-6 transition-all duration-200 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join Live Classes</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* 3. GMAT Private Tutoring — Teal / Emerald / Green */}
            <div className="rounded-[28px] border-2 border-teal-200/80 bg-gradient-to-br from-teal-50/80 via-emerald-50/50 to-green-50/70 p-8 shadow-md hover:shadow-xl hover:border-teal-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-400 flex items-center justify-center text-white shadow-lg mb-6">
                  <UserCheck className="w-7 h-7" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-white bg-teal-600 px-3.5 py-1.5 rounded-full shadow-sm">1-on-1 Mentoring</span>
                <h3 className="text-2xl font-extrabold text-teal-950 mt-4 mb-3">GMAT Private Tutoring</h3>
                <p className="text-teal-900/80 leading-relaxed mb-6 font-normal" style={{ fontSize: "19px" }}>
                  1-on-1 private mentoring customized specifically to your target score, weak areas, and timeline.
                </p>
                <ul className="space-y-3.5 mb-8">
                  <li className="flex items-center gap-2.5 text-teal-950 font-semibold" style={{ fontSize: "18px" }}>
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                    Personalized 1-on-1 Study Roadmap
                  </li>
                  <li className="flex items-center gap-2.5 text-teal-950 font-semibold" style={{ fontSize: "18px" }}>
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                    Custom Strategy & Weakness Fix
                  </li>
                  <li className="flex items-center gap-2.5 text-teal-950 font-semibold" style={{ fontSize: "18px" }}>
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                    Direct Mentor Guidance & Support
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setIsBookSessionOpen(true)}
                className="w-full rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold py-3.5 px-6 transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Private Mentor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="w-full">
            <div className="space-y-8">


              {/* Premium GMAT Exam Pattern Table */}
              <div className="overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50">
                {/* Header Title Bar */}
                <div className="border-b border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-5 md:px-8 text-white text-center">
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">GMAT Exam Pattern</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium mt-1">Breakdown of sections, timing, questions & scoring scale</p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100/90 border-b-2 border-slate-300 text-sm md:text-base font-semibold uppercase tracking-wider text-slate-700">
                        <th className="px-6 py-5.5 md:py-6">Section</th>
                        <th className="px-6 py-5.5 md:py-6">Questions</th>
                        <th className="px-6 py-5.5 md:py-6">Time</th>
                        <th className="px-6 py-5.5 md:py-6">Score Scale</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-300 text-base">
                      {[
                        {
                          section: "Verbal Reasoning",
                          detail: "Reading Comprehension & Critical Reasoning",
                          questions: "36 questions",
                          time: "65 min",
                          scoreScale: "6 - 51",
                          icon: BookOpen,
                          iconBg: "bg-blue-100 text-blue-700",
                        },
                        {
                          section: "Quantitative Reasoning",
                          detail: "Problem Solving & Data Sufficiency",
                          questions: "31 questions",
                          time: "62 min",
                          scoreScale: "6 - 51",
                          icon: Calculator,
                          iconBg: "bg-indigo-100 text-indigo-700",
                        },
                        {
                          section: "Integrated Reasoning",
                          detail: "Multi-Source Reasoning & Table Analysis",
                          questions: "12 questions",
                          time: "30 min",
                          scoreScale: "1 - 8",
                          icon: Activity,
                          iconBg: "bg-emerald-100 text-emerald-700",
                        },
                        {
                          section: "Analytical Writing",
                          detail: "Analysis of an Argument",
                          questions: "2 tasks",
                          time: "30 min",
                          scoreScale: "0 - 6",
                          icon: PenTool,
                          iconBg: "bg-purple-100 text-purple-700",
                        },
                      ].map((row, idx) => {
                        const Icon = row.icon;
                        return (
                          <tr key={idx} className="hover:bg-blue-50/40 transition-colors duration-150 group">
                            <td className="px-6 py-6.5 md:py-7">
                              <div className="flex items-center gap-3.5">
                                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${row.iconBg} shrink-0 shadow-xs`}>
                                  <Icon className="h-5 w-5 stroke-[2]" />
                                </div>
                                <div>
                                  <span className="font-medium text-slate-950 block text-lg md:text-xl">{row.section}</span>
                                  <span className="text-sm md:text-base text-slate-600 font-normal">{row.detail}</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-6.5 md:py-7">
                              <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-900 rounded-full font-normal text-base md:text-lg border border-slate-200/80">
                                {row.questions}
                              </span>
                            </td>
                            <td className="px-6 py-6.5 md:py-7">
                              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-50 text-blue-800 rounded-full font-normal text-base md:text-lg border border-blue-200/80">
                                <Clock3 className="w-4 h-4 text-blue-600" />
                                {row.time}
                              </span>
                            </td>
                            <td className="px-6 py-6.5 md:py-7">
                              <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-800 rounded-full font-normal text-base md:text-lg border border-emerald-200/80">
                                {row.scoreScale}
                              </span>
                            </td>
                          </tr>
                        );
                      })}

                      {/* Summary Total Row */}
                      <tr className="bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 border-t-2 border-primary/30">
                        <td className="px-6 py-6.5 md:py-7">
                          <div className="flex items-center gap-3.5">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shrink-0 shadow-md">
                              <Trophy className="h-5.5 w-5.5" />
                            </div>
                            <div>
                              <span className="font-extrabold text-slate-950 text-xl md:text-2xl block">Total</span>
                              <span className="text-sm md:text-base text-slate-600 font-medium">Overall Exam Structure</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-6.5 md:py-7">
                          <span className="inline-block px-4 py-2 bg-slate-900 text-white rounded-full font-bold text-base md:text-lg shadow-sm">
                            81 Questions / Tasks
                          </span>
                        </td>
                        <td className="px-6 py-6.5 md:py-7">
                          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full font-bold text-base md:text-lg shadow-sm">
                            <Clock3 className="w-4 h-4" />
                            3 hr 7 min
                          </span>
                        </td>
                        <td className="px-6 py-6.5 md:py-7">
                          <span className="inline-block px-5 py-2 bg-emerald-600 text-white rounded-full font-bold text-base md:text-lg shadow-sm">
                            200 - 800
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-[32px] border border-border bg-card p-8 md:p-10 shadow-soft">
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-950">Why GMAT matters</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Global business schools use it to compare applicants.",
                    "Strong GMAT scores improve scholarship chances.",
                    "It shows you can think critically under pressure.",
                    "A strong score boosts confidence in your application.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3.5 rounded-3xl bg-background p-6 border border-border/60">
                      <span className="mt-1.5 h-3 w-3 rounded-full bg-primary shrink-0" />
                      <p className="text-base md:text-lg font-bold text-slate-950 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOOK A SESSION CTA */}
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setIsBookSessionOpen(true)}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-extrabold text-lg shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <span>Book a Session</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRE FOR MBA Section */}
      <section className="py-20 bg-slate-50/50">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/40" />
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">GRE FOR MBA</span>
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-slate-950 tracking-tight text-center mt-4 mb-3">
            The smarter route to your <span className="text-primary">MBA</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-900 max-w-3xl mx-auto leading-relaxed mb-10 font-bold">
            Determined to do an MBA from ISB, Singapore, the M7 or the Ivy League? You don't need
            the GMAT for that. Over the last 18 months a growing share of applicants have switched to
            the GRE — here's why.
          </p>

          {/* Comparison Table */}
          <div className="overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 text-left">
            {/* Header Title Bar */}
            <div className="border-b border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-5 md:px-8 text-white text-center">
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">GMAT Focus Edition Specs</h3>
              <p className="text-xs md:text-sm text-slate-300 font-medium mt-1">Breakdown of exam features, duration, structure & MBA acceptance</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100/90 border-b-2 border-slate-300 text-sm md:text-base font-semibold uppercase tracking-wider text-slate-700">
                    <th className="px-6 py-4">Feature</th>
                    <th className="px-6 py-4">Specification</th>
                    <th className="px-6 py-4">Key Highlight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300 text-base">
                  {[
                    { 
                      feature: "Total time", 
                      spec: "2 hr 15 min", 
                      highlight: "3 sections of 45 min each",
                      icon: Clock3,
                      iconBg: "bg-blue-100 text-blue-700"
                    },
                    { 
                      feature: "Sections", 
                      spec: "Quant + Verbal + Data Insights", 
                      highlight: "Equal section weightage",
                      icon: Layers,
                      iconBg: "bg-indigo-100 text-indigo-700"
                    },
                    { 
                      feature: "Data Insights section", 
                      spec: "20 questions, a full third of your score", 
                      highlight: "DS, MSR & Graph analysis",
                      icon: BarChart3,
                      iconBg: "bg-purple-100 text-purple-700"
                    },
                    { 
                      feature: "Quant style", 
                      spec: "Logic-heavy word problems", 
                      highlight: "Advanced problem solving",
                      icon: Calculator,
                      iconBg: "bg-emerald-100 text-emerald-700"
                    },
                    { 
                      feature: "Also usable for MS/PhD", 
                      spec: "Business school only", 
                      highlight: "MBA & Business Focused",
                      icon: GraduationCap,
                      iconBg: "bg-teal-100 text-teal-700"
                    },
                    { 
                      feature: "Accepted at ISB, M7, Ivy League, INSEAD, NUS/NTU", 
                      spec: "Yes (100% official B-school standard)", 
                      highlight: "Universal acceptance",
                      icon: Globe2,
                      iconBg: "bg-sky-100 text-sky-700"
                    },
                    { 
                      feature: "Retakes & Gap", 
                      spec: "Up to 5 times/year, 16-day gap", 
                      highlight: "Fast retake cycle",
                      icon: RotateCcw,
                      iconBg: "bg-violet-100 text-violet-700"
                    },
                  ].map((row, idx) => {
                    const Icon = row.icon;
                    return (
                      <tr key={idx} className="hover:bg-blue-50/40 transition-colors duration-150 group">
                        <td className="px-6 py-5 md:py-5.5">
                          <div className="flex items-center gap-3.5">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${row.iconBg} shrink-0 shadow-xs`}>
                              <Icon className="h-5 w-5 stroke-[2]" />
                            </div>
                            <span className="font-medium text-slate-950 block text-lg md:text-xl">{row.feature}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5 md:py-5.5">
                          <span className="inline-block px-5 py-2 bg-slate-100 text-slate-900 rounded-full font-normal text-base md:text-lg border border-slate-200/80">
                            {row.spec}
                          </span>
                        </td>
                        <td className="px-6 py-5 md:py-5.5">
                          <span className="inline-flex items-center gap-2.5 px-6 py-2 bg-blue-50 text-blue-950 rounded-full font-medium text-base md:text-lg border border-blue-200/90 shadow-2xs">
                            <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600 stroke-[2.5] shrink-0" />
                            <span>{row.highlight}</span>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* BOOK A SESSION CTA */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setIsBookSessionOpen(true)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-extrabold text-lg shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Book a Session</span>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* GMAT Syllabus Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary/40" />
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">SYLLABUS</span>
              <div className="h-px w-12 bg-primary/40" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground tracking-tight text-center mt-4 mb-3">
              The complete GMAT Focus syllabus
            </h2>
            <p className="text-lg md:text-xl font-medium text-slate-800 max-w-3xl mx-auto leading-relaxed">
              Everything GMAC tests, organised so you never have to dig through the official site. Click any section to expand.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {/* Quantitative Reasoning Accordion */}
            <div className={`rounded-[20px] bg-card shadow-soft transition-all duration-200 overflow-hidden ${
              openSyllabusSection === "quant" 
                ? "border border-border border-l-[6px] border-l-primary" 
                : "border border-border"
            }`}>
              <button
                type="button"
                onClick={() => setOpenSyllabusSection(openSyllabusSection === "quant" ? null : "quant")}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-muted/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Calculator className="h-6 w-6 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-foreground block">Quantitative Reasoning</span>
                    <span className="text-xs md:text-sm text-muted-foreground font-medium hidden sm:inline">
                      21 questions • 45 min • no calculator provided
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground font-medium sm:hidden">
                    21 Qs • 45 min
                  </span>
                  <span className="text-primary font-semibold text-2xl leading-none">
                    {openSyllabusSection === "quant" ? "−" : "+"}
                  </span>
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openSyllabusSection === "quant" ? "max-h-[1000px] border-t border-border p-6" : "max-h-0 p-0"
              }`}>
                <p className="text-lg md:text-xl font-medium text-slate-800 mb-6">
                  Tests arithmetic and algebraic reasoning skills. Two content areas (No Geometry):
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Arithmetic",
                      pills: ["Integers & divisibility", "Fractions, decimals & percents", "Ratio, proportion & percent", "Exponents & roots", "Estimation", "Word problems"]
                    },
                    {
                      title: "Algebra",
                      pills: ["Algebraic expressions", "Linear equations", "Quadratic equations", "Inequalities", "Functions", "Absolute value", "Coordinate geometry & graphs"]
                    },
                    {
                      title: "Question types",
                      pills: ["Problem Solving"]
                    }
                  ].map((section) => (
                    <div key={section.title} className="space-y-2">
                      <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">{section.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {section.pills.map((pill) => (
                          <span key={pill} className="px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-primary/10 text-primary cursor-default hover:bg-primary/20 transition-colors">
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Verbal Reasoning Accordion */}
            <div className={`rounded-[20px] bg-card shadow-soft transition-all duration-200 overflow-hidden ${
              openSyllabusSection === "verbal" 
                ? "border border-border border-l-[6px] border-l-primary" 
                : "border border-border"
            }`}>
              <button
                type="button"
                onClick={() => setOpenSyllabusSection(openSyllabusSection === "verbal" ? null : "verbal")}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-muted/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <BookOpen className="h-6 w-6 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-foreground block">Verbal Reasoning</span>
                    <span className="text-xs md:text-sm text-muted-foreground font-medium hidden sm:inline">
                      23 questions • 45 min • no Sentence Correction
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground font-medium sm:hidden">
                    23 Qs • 45 min
                  </span>
                  <span className="text-primary font-semibold text-2xl leading-none">
                    {openSyllabusSection === "verbal" ? "−" : "+"}
                  </span>
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openSyllabusSection === "verbal" ? "max-h-[1000px] border-t border-border p-6" : "max-h-0 p-0"
              }`}>
                <p className="text-lg md:text-xl font-medium text-slate-800 mb-6">
                  Tests reading comprehension and critical reasoning skills. Two content areas (Sentence Correction has been removed):
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Reading Comprehension",
                      pills: ["Passage reading", "Informational reasoning", "Tone & attitude", "Structure & main idea", "Inference questions"]
                    },
                    {
                      title: "Critical Reasoning",
                      pills: ["Argument structure", "Assumption questions", "Strengthen & weaken", "Inference", "Boldface questions"]
                    },
                    {
                      title: "Question types",
                      pills: ["Reading Comprehension", "Critical Reasoning"]
                    }
                  ].map((section) => (
                    <div key={section.title} className="space-y-2">
                      <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">{section.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {section.pills.map((pill) => (
                          <span key={pill} className="px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-primary/10 text-primary cursor-default hover:bg-primary/20 transition-colors">
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Insights Accordion */}
            <div className={`rounded-[20px] bg-card shadow-soft transition-all duration-200 overflow-hidden ${
              openSyllabusSection === "di" 
                ? "border border-border border-l-[6px] border-l-primary" 
                : "border border-border"
            }`}>
              <button
                type="button"
                onClick={() => setOpenSyllabusSection(openSyllabusSection === "di" ? null : "di")}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-muted/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    <BarChart3 className="h-6 w-6 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-foreground block">Data Insights (DI)</span>
                    <span className="text-xs md:text-sm text-muted-foreground font-medium hidden sm:inline">
                      20 questions • 45 min • on-screen calculator provided
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground font-medium sm:hidden">
                    20 Qs • 45 min
                  </span>
                  <span className="text-primary font-semibold text-2xl leading-none">
                    {openSyllabusSection === "di" ? "−" : "+"}
                  </span>
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openSyllabusSection === "di" ? "max-h-[1000px] border-t border-border p-6" : "max-h-0 p-0"
              }`}>
                <p className="text-lg md:text-xl font-medium text-slate-800 mb-6">
                  Tests data analysis and reasoning skills using multiple formats. Five content areas:
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Content Areas",
                      pills: ["Data Sufficiency", "Multi-Source Reasoning", "Table Analysis", "Graphics Interpretation", "Two-Part Analysis"]
                    },
                    {
                      title: "Skills Tested",
                      pills: ["Synthesizing verbal & quant data", "Data sorting and spreadsheet logic", "Visual parsing of charts and graphs", "Double-decisional logic"]
                    },
                    {
                      title: "Question types",
                      pills: ["Data Sufficiency", "Multi-Source Reasoning", "Table Analysis", "Graphics Interpretation", "Two-Part Analysis"]
                    }
                  ].map((section) => (
                    <div key={section.title} className="space-y-2">
                      <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">{section.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {section.pills.map((pill) => (
                          <span key={pill} className="px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-primary/10 text-primary cursor-default hover:bg-primary/20 transition-colors">
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[36px] border border-border bg-card p-5 sm:p-8 md:p-10 shadow-soft">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">GMAT Prep Modes</p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground">Pick the GMAT preparation mode that works best for you</h2>
              <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-muted-foreground">
                Choose from classroom, online, self-paced or private tutoring. Each plan is designed to fit your study habits and timeline.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {gmatPrepModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`group flex h-full flex-col overflow-hidden rounded-[28px] border p-5 sm:p-6 text-left transition duration-300 ${
                    activeMode === mode.id
                      ? "border-primary bg-primary/10 shadow-soft"
                      : "border-border bg-card hover:border-primary/70 hover:bg-background hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] sm:tracking-[0.24em] text-muted-foreground truncate">{mode.label}</p>
                    <div className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl ${
                      activeMode === mode.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      <span className="text-sm font-bold">{mode.title.split(" ")[1]?.charAt(0) ?? mode.title.charAt(0)}</span>
                    </div>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{mode.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{mode.description}</p>
                  <div className="mt-auto pt-6">
                    <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary transition group-hover:bg-primary/20">
                      Learn More
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-[32px] border border-border bg-background p-6 shadow-soft">
              {gmatPrepModes.filter((mode) => mode.id === activeMode).map((mode) => (
                <div key={mode.id} className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="text-xl font-semibold text-foreground">{mode.title}</span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">{mode.label}</span>
                    </div>
                    <p className="text-muted-foreground">{mode.description}</p>
                    <ul className="mt-6 space-y-3 text-muted-foreground">
                      {mode.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm leading-6">
                          <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:opacity-95 transition">
                        Book a Demo
                      </button>
                      <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-background">
                        Know More
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-center rounded-[2rem] bg-card p-4">
                    <img src={mode.image} alt={mode.title} className="h-auto w-full max-w-[320px] rounded-[2rem] object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[32px] border border-border bg-card p-8 shadow-soft">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">GMAT Tutor Reviews</p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground">What our students say</h2>
              <p className="mt-3 mx-auto max-w-2xl text-sm leading-7 text-muted-foreground">
                Read the experiences of students who improved their GMAT score with Seekyoury coaching.
              </p>
            </div>
            <Carousel
              opts={{
                containScroll: "trimSnaps",
                slidesToScroll: 1,
                loop: true,
                align: "start",
              }}
              setApi={setCarouselApi}
              className="relative"
            >
              <CarouselContent className="flex gap-4">
                {studentReviews.map((review) => (
                  <CarouselItem key={`${review.name}-${review.footer}`} className="min-w-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1rem)]">
                    <div className="rounded-[32px] border border-border bg-background p-6 shadow-soft min-h-full">
                      <div className="flex items-center gap-4">
                        <img src={review.image} alt={review.name} className="h-16 w-16 rounded-full object-cover" />
                        <div>
                          <p className="text-lg font-semibold text-foreground">{review.name}</p>
                          <p className="text-sm text-muted-foreground">{review.title}</p>
                          <div className="mt-2 flex items-center gap-1 text-[hsl(var(--exam-gold))]">
                            {Array.from({ length: review.rating }).map((_, index) => (
                              <span key={index}>★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="mt-5 text-sm leading-7 text-muted-foreground">{review.text}</p>
                      <p className="mt-6 text-sm font-semibold text-foreground">{review.footer}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      <CallToAction />
      <CustomFAQ faqs={gmatFaqs} />
      <Footer />

      <BookSessionDialog
        open={isBookSessionOpen}
        onOpenChange={setIsBookSessionOpen}
        title="Book a free session"
        description="Share your details and we'll schedule a 1-on-1 strategy session with our mentors."
      />
    </div>
  );
};

export default AboutGmat;
