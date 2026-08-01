import React, { useEffect, useRef, useState } from "react";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import {
  ArrowRight,
  BarChart3,
  Clock3,
  Globe2,
  Play,
  ShieldCheck,
  Trophy,
  Users,
  Calculator,
  BookOpen,
  PenTool,
  Sparkles,
  PlayCircle,
  Video,
  UserCheck,
  CheckCircle2,
  GraduationCap,
  Layers,
  RotateCcw,
} from "lucide-react";
import { ProgramHero } from "@/components/ProgramHero";
import ManyaPhoto from "@/assets/student_pics/Manya.jpeg";
import PraffulPhoto from "@/assets/student_pics/Prafful.jpeg";
import ArjunPhoto from "@/assets/student_pics/Arjun M S.jpeg";
import BalagopalPhoto from "@/assets/student_pics/Balagopal Jayakumar.jpeg";
import SabhyataPhoto from "@/assets/student_pics/Sabhyata.jpeg";

const AboutGre = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);
  const [activeMode, setActiveMode] = useState("classroom");
  const [activeGreFocus, setActiveGreFocus] = useState("concepts");
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [openSyllabusSection, setOpenSyllabusSection] = useState<string | null>(null);
  const [isReviewPaused, setIsReviewPaused] = useState(false);
  const reviewListRef = useRef<HTMLDivElement | null>(null);
  const reviewCardsRef = useRef<HTMLDivElement[]>([]);
  const hasInitializedReviewCarousel = useRef(false);

  const studentReviews = [
    {
      name: "Nishtha",
      title: "GRE teacher",
      image: ManyaPhoto,
      rating: 5,
      text: "Nishtha ma'am is excellent at explaining concepts in a simple and easy to understand way. She is patient, supportive, and always encourages me to do my best.",
      footer: "Sandeep, 1 week ago",
    },
    {
      name: "Dhruv",
      title: "GRE teacher",
      image: PraffulPhoto,
      rating: 5,
      text: "Hello Dhruv, thank you for the excellent teaching and support you've given to our 10 years old son Thomas. Your clear explanations and friendly approach have made math enjoyable for him.",
      footer: "Fabio, 2 months ago",
    },
    {
      name: "Pratyush",
      title: "GRE teacher",
      image: ArjunPhoto,
      rating: 5,
      text: "Pratyush has been an excellent calculus tutor for my son. He explains complex concepts in a clear, patient, and easy-to-understand manner, which has greatly improved my son's confidence.",
      footer: "Devesh, 2 weeks ago",
    },
    {
      name: "Dhruv",
      title: "GRE teacher",
      image: BalagopalPhoto,
      rating: 5,
      text: "Handling a 5 year old homeschooler with ease. Dhruv is an amazing teacher. I sincerely appreciate his patience with my daughter and the fun learning vibe.",
      footer: "Sreethy, 3 months ago",
    },
  ];

  const reviewCardGradients = [
    "from-cyan-100 via-sky-100 to-blue-100",
    "from-fuchsia-100 via-pink-100 to-violet-100",
    "from-emerald-100 via-lime-100 to-teal-100",
    "from-amber-100 via-orange-100 to-rose-100",
    "from-slate-100 via-sky-100 to-indigo-100",
    "from-rose-100 via-orange-100 to-amber-100",
  ];

  useEffect(() => {
    if (isReviewPaused || studentReviews.length <= 1) return;

    const timeout = window.setTimeout(() => {
      setActiveReviewIndex((prev) => (prev + 1) % studentReviews.length);
    }, 4500);

    return () => window.clearTimeout(timeout);
  }, [activeReviewIndex, isReviewPaused, studentReviews.length]);

  useEffect(() => {
    if (!hasInitializedReviewCarousel.current) {
      hasInitializedReviewCarousel.current = true;
      return;
    }

    const reviewList = reviewListRef.current;
    if (!reviewList) return;

    const rect = reviewList.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const isVisible = rect.top < viewportHeight && rect.bottom > 0;
    if (!isVisible) return;

    reviewCardsRef.current[activeReviewIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeReviewIndex]);

  const results = [
    {
      name: "Manya Sharma",
      school: "Punjab College",
      score: "324",
      avatar: "M",
    },
    {
      name: "Anant Govil",
      school: "DTU - Delhi Technological University",
      score: "323",
      avatar: "A",
    },
    {
      name: "Shaurya Srivastava",
      school: "NIIT University",
      score: "322",
      avatar: "S",
    },
    {
      name: "Eshan Singh",
      school: "DYPiemr",
      score: "321",
      avatar: "E",
    },
  ];

  const features = [
    {
      title: "Top Results",
      description: "Proven GRE success with 320+ scorers and expert coaching.",
      iconPath: "/assets/gre-icons/since-1993.svg",
    },
    {
      title: "Smart Analytics",
      description: "Actionable progress tracking and score insights for every student.",
      iconPath: "/assets/gre-icons/analytics.svg",
    },
    {
      title: "Hybrid Learning",
      description: "Switch easily between online and offline sessions for flexibility.",
      iconPath: "/assets/gre-icons/teacher.svg",
    },
    {
      title: "Practice Modules",
      description: "Section-based drills and full mocks to sharpen accuracy and speed.",
      iconPath: "/assets/gre-icons/books.svg",
    },
    {
      title: "Expert Faculty",
      description: "Mentorship from GRE experts with years of admissions experience.",
      iconPath: "/assets/gre-icons/student.svg",
    },
    {
      title: "Personalized Attention",
      description: "Dedicated doubt-solving and individualized study planning.",
      iconPath: "/assets/gre-icons/qa.svg",
    },
  ];

  const greFaqs = [
    {
      question: "Do MBA programs really accept the GRE?",
      answer: "Yes! Over 90% of business schools worldwide, including top-tier programs like Harvard, Stanford, Wharton, and ISB, accept GRE scores at par with GMAT scores."
    },
    {
      question: "Is the GRE easier than the GMAT?",
      answer: "Many students find the GRE friendlier because it lacks the complex Data Insights section of the GMAT and has a more straightforward Quant style, though it has a heavier focus on vocabulary."
    },
    {
      question: "What's a good GRE score?",
      answer: "A score of 320+ is generally considered strong for top-tier graduate programs. For elite business schools, a score of 325+ is highly competitive."
    },
    {
      question: "How long should I prepare?",
      answer: "On average, students prepare for 2 to 3 months. A structured plan with 80-120 hours of focused study is typically enough to reach target scores."
    },
    {
      question: "How often can I retake the GRE?",
      answer: "You can take the GRE once every 21 days, up to 5 times within any continuous rolling 12-month period."
    },
    {
      question: "Does the GRE have negative marking?",
      answer: "No, the GRE does not have negative marking. It is always in your best interest to answer every question, even if you have to make an educated guess."
    }
  ];

  const grePrepModes = [
    {
      id: "classroom",
      title: "GRE Classroom Coaching",
      label: "Hybrid",
      description: "Structured GRE classroom prep under the guidance and mentorship of faculty. Ensures high accountability and in-depth understanding of concepts.",
      bullets: [
        "48 hours (24 classes) of classroom training by experienced GRE tutors",
        "7 full-length GRE mock tests and 15 sectional tests",
        "GRE study material, Vocabulary app and webinars (foundation and advanced)",
        "Unlimited doubt-clearing sessions from 7 AM to midnight every day",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
      cta: {
        demo: {
          label: "BOOK A DEMO",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-w.png",
          href: "#",
        },
        knowMore: {
          label: "KNOW MORE",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-g.png",
          href: "https://www.jamboreeindia.com/gre-online-prep",
        },
      },
    },
    {
      id: "online",
      title: "GRE Online Coaching",
      label: "Online",
      description: "GRE online prep is a comprehensive classroom program with live classes conducted by faculty. Best suited for students who want the best of classes but have difficulty in travelling.",
      bullets: [
        "48 hours (24 classes) of GRE online training from anywhere.",
        "7 full-length GRE practice tests and test review with GRE teachers",
        "Sectional tests and topic-wise exercises",
        "Comprehensive GRE books to cover all areas of learning and practice",
        "Unlimited doubt-clearing sessions from 7 AM to midnight every day",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
      cta: {
        demo: {
          label: "BOOK A DEMO",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-w.png",
          href: "#",
        },
        knowMore: {
          label: "KNOW MORE",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-g.png",
          href: "https://www.jamboreeindia.com/gre-online-prep",
        },
      },
    },
    {
      id: "self-paced",
      title: "GRE Self-Paced Online Coaching",
      label: "Self-Paced Online",
      description: "GRE Self-paced program consists of detailed concept videos and practice exercises that the student can work with at their own pace. Best suited for highly motivated students who keep track of their performance and regularity.",
      bullets: [
        "48 hours of pre-recorded HD classroom videos",
        "7 full-length GRE mock tests",
        "Sectional tests and topic-wise exercises",
        "GRE study material available on the student portal",
        "5 hours of one-on-one doubt-clearing sessions with GRE tutor",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
      cta: {
        demo: {
          label: "BOOK A DEMO",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-w.png",
          href: "#",
        },
        knowMore: {
          label: "KNOW MORE",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-g.png",
          href: "https://www.jamboreeindia.com/gre-online-prep",
        },
      },
    },
    {
      id: "private",
      title: "GRE Private Tutoring",
      label: "Hybrid",
      description: "GRE tutor for personalized GRE preparation based on individual requirements. This is best suited for students who have unpredictable schedules or need personalized attention in certain topics or retest takers wanting to improve their GRE scores in a certain area.",
      bullets: [
        "40 hours of one-on-one classes over 3 months with the best GRE tutors in India",
        "Student GRE portal access for 1-year for tests and practice with advanced analytics",
        "Customized GRE roadmap to achieve best GRE score possible",
        "7 full-length GRE mock tests, 15 sectional tests and additional topic-wise exercises",
        "Comprehensive GRE books that covers learning and practice",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
      cta: {
        demo: {
          label: "BOOK A DEMO",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-w.png",
          href: "#",
        },
        knowMore: {
          label: "KNOW MORE",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-g.png",
          href: "https://www.jamboreeindia.com/gre-online-prep",
        },
      },
    },
  ];

  const greFocusAreas = [
    {
      id: "concepts",
      title: "Concepts Tested on the Exam",
      short: "Master the core GRE concepts that actually appear on the test.",
      image: "/assets/gre-asset/board.webp",
      headline: "Build confidence in the concepts that matter most on the GRE.",
      description:
        "Our GRE coaching teaches you exactly what you need to ace the GRE prep — nothing more, nothing less. Every lesson is designed to strengthen the fundamentals and sharpen the reasoning behind the exam's most tested ideas.",
      points: [
        "Foundation-first teaching for verbal and quantitative reasoning",
        "Concept drills mapped to the latest GRE question patterns",
        "Clear explanations that make tricky topics easy to retain",
      ],
    },
    {
      id: "faculty",
      title: "GRE Courses by Our Expert Faculty",
      short: "Learn from GRE specialists who simplify complex topics and guide your prep.",
      image: "/assets/gre-asset/teacher.webp",
      headline: "Learn from mentors who know how to turn strategy into results.",
      description:
        "GRE test prep with topic-based exercises to help gain mastery of concepts. Our expert faculty keeps each session practical, focused, and aligned with the way the exam is actually structured.",
      points: [
        "Live classes with faculty who teach for clarity and speed",
        "Structured topic-wise practice to build mastery over time",
        "Personalized guidance for weak areas and score improvement",
      ],
    },
    {
      id: "accuracy",
      title: "Accuracy and Speed",
      short: "Improve precision and pacing so you can perform confidently under timing pressure.",
      image: "/assets/gre-asset/plan.png",
      headline: "Train for accuracy and speed without burning out.",
      description:
        "Accuracy and speed are the difference between a good GRE score and a great one. Our practice framework helps you build the rhythm, control, and timing needed to perform with confidence on test day.",
      points: [
        "Timed practice sets that sharpen decision-making under pressure",
        "Error analysis to improve accuracy and reduce avoidable mistakes",
        "Smart pacing strategies for verbal and quantitative sections",
      ],
    },
  ];

  const activeFocus = greFocusAreas.find((item) => item.id === activeGreFocus) ?? greFocusAreas[0];
  reviewCardsRef.current = [];

  const handlePrevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + studentReviews.length) % studentReviews.length);
  };

  const handleNextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % studentReviews.length);
  };

  return (
    <div className="bg-slate-50 text-foreground">
      <ProgramHero type="gre" />

      {/* WHAT SERVICES WE PROVIDE SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/20 to-slate-50 relative overflow-hidden border-b border-slate-200" id="services">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-600 text-base md:text-lg font-extrabold uppercase tracking-[0.14em] shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-blue-600 stroke-[2.5]" />
              <span>WHAT SERVICES WE PROVIDE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display text-foreground tracking-tight mt-2 mb-4">
              Tailored <span className="text-blue-600">GRE Prep</span> for <br /> Your Target Score
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Choose the learning format that best fits your schedule, score goal, and preparation style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {/* 1. GRE Self Paced Course — Purple / Pink / Indigo */}
            <div className="rounded-[28px] border-2 border-purple-200/80 bg-gradient-to-br from-purple-50/80 via-pink-50/50 to-indigo-50/70 p-8 shadow-md hover:shadow-xl hover:border-purple-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-lg mb-6">
                  <PlayCircle className="w-7 h-7" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-white bg-purple-600 px-3.5 py-1.5 rounded-full shadow-sm">Self-Study</span>
                <h3 className="text-2xl font-extrabold text-purple-950 mt-4 mb-3">GRE Self Paced Course</h3>
                <p className="text-purple-900/80 leading-relaxed mb-6 font-normal" style={{ fontSize: "19px" }}>
                  Study on your own schedule with structured video modules, targeted drills, and complete topic coverage.
                </p>
                <ul className="space-y-3.5 mb-8">
                  <li className="flex items-center gap-2.5 text-purple-950 font-semibold" style={{ fontSize: "18px" }}>
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                    100+ Hours of HD Video Lessons
                  </li>
                  <li className="flex items-center gap-2.5 text-purple-950 font-semibold" style={{ fontSize: "18px" }}>
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                    Topic-wise Practice Drills & Tests
                  </li>
                  <li className="flex items-center gap-2.5 text-purple-950 font-semibold" style={{ fontSize: "18px" }}>
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                    Comprehensive Quant & Verbal Modules
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

            {/* 2. GRE Live Classes — Blue / Sky / Cyan */}
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
                <h3 className="text-2xl font-extrabold text-blue-950 mt-4 mb-3">GRE Live Classes</h3>
                <p className="text-blue-900/80 leading-relaxed mb-6 font-normal" style={{ fontSize: "19px" }}>
                  Interactive scheduled live training with top trainers, peer accountability, and real-time doubt clearance.
                </p>
                <ul className="space-y-3.5 mb-8">
                  <li className="flex items-center gap-2.5 text-blue-950 font-semibold" style={{ fontSize: "18px" }}>
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    Daily Interactive Live Masterclasses
                  </li>
                  <li className="flex items-center gap-2.5 text-blue-950 font-semibold" style={{ fontSize: "18px" }}>
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    Live Mock Test Review & Strategy
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

            {/* 3. GRE Private Tutoring — Teal / Emerald / Green */}
            <div className="rounded-[28px] border-2 border-teal-200/80 bg-gradient-to-br from-teal-50/80 via-emerald-50/50 to-green-50/70 p-8 shadow-md hover:shadow-xl hover:border-teal-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400 opacity-15 blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-400 flex items-center justify-center text-white shadow-lg mb-6">
                  <UserCheck className="w-7 h-7" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-white bg-teal-600 px-3.5 py-1.5 rounded-full shadow-sm">1-on-1 Mentoring</span>
                <h3 className="text-2xl font-extrabold text-teal-950 mt-4 mb-3">GRE Private Tutoring</h3>
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
                    Custom Strategy & Weakness Diagnosis
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

     

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="w-full">
            <div className="space-y-8 flex flex-col">


              {/* Premium GRE Exam Pattern Table */}
              <div className="overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50">
                <div className="border-b border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-5 md:px-8 text-white text-center">
                  <p className="text-xs md:text-sm uppercase tracking-[0.24em] text-slate-300 font-semibold mb-2">Value Check</p>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">Why this is the best-value series anywhere</h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100/90 border-b-2 border-slate-300 text-sm md:text-base font-semibold uppercase tracking-wider text-slate-700">
                        <th className="px-6 py-5.5 md:py-6">&nbsp;</th>
                        <th className="px-6 py-5.5 md:py-6">Seek Your Y</th>
                        <th className="px-6 py-5.5 md:py-6">Official Mocks</th>
                        <th className="px-6 py-5.5 md:py-6">Other Prep</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-300 text-base">
                      {[
                        { label: "Total tests", seek: "30 tests", official: "3–4 mocks", other: "15–25 tests" },
                        { label: "Full-length mocks", seek: "10 adaptive mocks", official: "3–4 mocks", other: "5–10 mocks" },
                        { label: "Sectional drills", seek: "20 sectionals", official: "None", other: "10–15 sectionals" },
                        { label: "Live mock debriefs", seek: "Faculty-led strategy review", official: "None", other: "Recorded only" },
                        { label: "Performance tracking", seek: "Advanced gap analysis", official: "Basic score report", other: "Standard report" },
                        { label: "Approx. price", seek: "₹4,999 (GRE) / ₹5,999 (GMAT)", official: "₹9,200 (GMAT) / ₹10,000 (GRE)", other: "₹6,000 – ₹12,000" },
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50/80" : "bg-white"}>
                          <td className="px-6 py-5 md:py-6 font-semibold text-slate-900">{row.label}</td>
                          <td className="px-6 py-5 md:py-6 text-slate-700">{row.seek}</td>
                          <td className="px-6 py-5 md:py-6 text-slate-700">{row.official}</td>
                          <td className="px-6 py-5 md:py-6 text-slate-700">{row.other}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50">
                {/* Header Title Bar */}
                <div className="border-b border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-5 md:px-8 text-white text-center">
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">GRE Exam Pattern</h3>
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
                          section: "Analytical Writing",
                          detail: '"Analyze an Issue"',
                          questions: "1 essay task",
                          time: "30 min",
                          scoreScale: "0 - 6",
                          icon: PenTool,
                          iconBg: "bg-purple-100 text-purple-700",
                        },
                        {
                          section: "Verbal Reasoning",
                          detail: "Section 1",
                          questions: "12 questions",
                          time: "18 min",
                          scoreScale: "130 - 170",
                          icon: BookOpen,
                          iconBg: "bg-blue-100 text-blue-700",
                        },
                        {
                          section: "Verbal Reasoning",
                          detail: "Section 2 (adaptive)",
                          questions: "15 questions",
                          time: "23 min",
                          scoreScale: "130 - 170",
                          icon: BookOpen,
                          iconBg: "bg-indigo-100 text-indigo-700",
                        },
                        {
                          section: "Quantitative Reasoning",
                          detail: "Section 1",
                          questions: "12 questions",
                          time: "21 min",
                          scoreScale: "130 - 170",
                          icon: Calculator,
                          iconBg: "bg-emerald-100 text-emerald-700",
                        },
                        {
                          section: "Quantitative Reasoning",
                          detail: "Section 2 (adaptive)",
                          questions: "15 questions",
                          time: "26 min",
                          scoreScale: "130 - 170",
                          icon: Calculator,
                          iconBg: "bg-teal-100 text-teal-700",
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
                            55 Questions
                          </span>
                        </td>
                        <td className="px-6 py-6.5 md:py-7">
                          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full font-bold text-base md:text-lg shadow-sm">
                            <Clock3 className="w-4 h-4" />
                            ~1 hr 58 min
                          </span>
                        </td>
                        <td className="px-6 py-6.5 md:py-7">
                          <span className="inline-block px-5 py-2 bg-emerald-600 text-white rounded-full font-bold text-base md:text-lg shadow-sm">
                            260 - 340
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft">
                <div className="relative aspect-auto min-h-[340px] sm:min-h-0 sm:aspect-video overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFF] to-transparent">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,_102,_241,_0.14),_transparent_45%)]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg">
                      <Play className="h-8 w-8" />
                    </div>
                    <div className="mt-4 max-w-[24rem] rounded-3xl border border-white/70 bg-white/90 px-5 py-4 shadow-sm">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">GRE Overview</p>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">Watch a crisp preview of our GRE preparation approach and student success stories.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                      <Globe2 className="h-4 w-4" />
                      GRE for Global MS
                    </div>
                    <h3 className="text-3xl font-semibold text-foreground">The GRE advantage for your next master’s application</h3>
                    <p className="font-medium text-slate-800 leading-relaxed" style={{ fontSize: "clamp(1.125rem, 1.4vw, 1.35rem)" }}>
                      GRE gives you a flexible, globally accepted score report that works for top MS programs while keeping your application options open across business, engineering and science.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {/* Card 1: Accepted worldwide — purple/indigo */}
                    <div className="rounded-3xl border border-purple-200/60 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 p-5 shadow-sm relative overflow-hidden">
                      <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 opacity-10 blur-xl pointer-events-none" />
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 shadow-md">
                          <BarChart3 className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-[22px] font-bold text-purple-900 leading-snug">Accepted worldwide</p>
                          <p className="text-sm text-purple-800/70 mt-1">GRE is accepted by 1,200+ programs globally.</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2: Flexible timetable — blue/cyan */}
                    <div className="rounded-3xl border border-blue-200/60 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 p-5 shadow-sm relative overflow-hidden">
                      <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-10 blur-xl pointer-events-none" />
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-md">
                          <Clock3 className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-[22px] font-bold text-blue-900 leading-snug">Flexible timetable</p>
                          <p className="text-sm text-blue-800/70 mt-1">Choose the test date that fits your study pace.</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 3: Send only your best — teal/emerald */}
                    <div className="rounded-3xl border border-teal-200/60 bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 p-5 shadow-sm relative overflow-hidden">
                      <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400 opacity-10 blur-xl pointer-events-none" />
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-400 shadow-md">
                          <ShieldCheck className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-[22px] font-bold text-teal-900 leading-snug">Send only your best</p>
                          <p className="text-sm text-teal-800/70 mt-1">Report scores selectively to schools after you decide.</p>
                        </div>
                      </div>
                    </div>
                  </div>
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

          {/* GRE FOR MBA Section */}
          <div className="mt-20 text-center max-w-[1200px] mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary/40" />
              <span style={{ fontSize: "18px" }} className="font-bold uppercase tracking-[0.14em] text-primary">GRE FOR MBA</span>
              <div className="h-px w-12 bg-primary/40" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground tracking-tight text-center mt-4 mb-3">
              The smarter route to your <span className="text-primary">MBA</span>
            </h2>

            <p
              className="text-muted-foreground max-w-[1100px] mx-auto leading-relaxed mb-10 px-2 sm:px-0"
              style={{ fontSize: "clamp(1.15rem, 1.5vw, 1.35rem)" }}
            >
              Determined to do an MBA from ISB, Singapore, the M7 or the Ivy League? You don't need
              the GMAT for that. Over the last 18 months, a growing share of applicants have switched to
              the GRE — and for good reason. Here is a clear, side-by-side view of how the GRE compares
              to the GMAT, from test structure and timing to admissions value and flexibility.
            </p>

            {/* Comparison Table */}
            <div className="overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50">
              {/* Header Title Bar */}
              <div className="border-b border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-5 md:px-8 text-white text-center">
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">GRE Advantage & Overview</h3>
                <p className="text-xs md:text-sm text-slate-300 font-medium mt-1">Breakdown of exam features, advantages & MBA acceptance</p>
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
                        spec: "1 hr 58 min", 
                        highlight: "Fastest test duration",
                        icon: Clock3,
                        iconBg: "bg-blue-100 text-blue-700"
                      },
                      { 
                        feature: "Sections", 
                        spec: "Quant + Verbal + 1 short essay", 
                        highlight: "No Data Insights",
                        icon: Layers,
                        iconBg: "bg-indigo-100 text-indigo-700"
                      },
                      { 
                        feature: "Data Insights section", 
                        spec: "None — no DS, MSR or graph analysis", 
                        highlight: "Save months of prep",
                        icon: BarChart3,
                        iconBg: "bg-purple-100 text-purple-700"
                      },
                      { 
                        feature: "Quant style", 
                        spec: "More standard, formula-friendly math", 
                        highlight: "High accuracy focus",
                        icon: Calculator,
                        iconBg: "bg-emerald-100 text-emerald-700"
                      },
                      { 
                        feature: "Also usable for MS/PhD", 
                        spec: "Yes — one score, two doors", 
                        highlight: "Dual career paths",
                        icon: GraduationCap,
                        iconBg: "bg-teal-100 text-teal-700"
                      },
                      { 
                        feature: "Accepted at ISB, M7, Ivy League, INSEAD, NUS/NTU", 
                        spec: "Yes (100% accepted at par with GMAT)", 
                        highlight: "Global MBA ready",
                        icon: Globe2,
                        iconBg: "bg-sky-100 text-sky-700"
                      },
                      { 
                        feature: "Retakes & Gap", 
                        spec: "GRE: up to 5 times/year, 21-day gap", 
                        highlight: "Flexible retakes",
                        icon: RotateCcw,
                        iconBg: "bg-violet-100 text-violet-700"
                      },
                    ].map((row, idx) => {
                      const Icon = row.icon;
                      return (
                        <tr key={idx} className="hover:bg-blue-50/40 transition-colors duration-150 group">
                          <td className="px-6 py-5 md:py-5.5">
                            <div className="flex items-center gap-3.5">
                              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${row.iconBg} shrink-0 shadow-xs`}>
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

            {/* Syllabus Section */}
            <div className="mt-24 max-w-[1200px] mx-auto text-left">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-12 bg-primary/40" />
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">SYLLABUS</span>
                  <div className="h-px w-12 bg-primary/40" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground tracking-tight text-center mt-4 mb-3">
                  The complete GRE syllabus
                </h2>
                <p className="text-lg md:text-xl font-medium text-slate-800 max-w-3xl mx-auto leading-relaxed">
                  Everything ETS tests, organised so you never have to dig through the official site. Click any section to expand.
                </p>
              </div>

              <div className="space-y-4 w-full">
                {/* Quantitative Reasoning Accordion */}
                <div className={`rounded-[20px] bg-white shadow-soft transition-all duration-200 overflow-hidden ${
                  openSyllabusSection === "quant" 
                    ? "border border-slate-200 border-l-[6px] border-l-primary" 
                    : "border border-slate-200/80"
                }`}>
                  <button
                    type="button"
                    onClick={() => setOpenSyllabusSection(openSyllabusSection === "quant" ? null : "quant")}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-50/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Calculator className="h-6 w-6 stroke-[2]" />
                      </div>
                      <div>
                        <span className="text-lg font-bold text-foreground block">Quantitative Reasoning</span>
                        <span className="text-xs md:text-sm text-slate-500 font-medium hidden sm:inline">
                          27 questions • 47 min • on-screen calculator provided
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 font-medium sm:hidden">
                        27 Qs • 47 min
                      </span>
                      <span className="text-primary font-semibold text-2xl leading-none">
                        {openSyllabusSection === "quant" ? "−" : "+"}
                      </span>
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openSyllabusSection === "quant" ? "max-h-[1000px] border-t border-slate-100 p-6" : "max-h-0 p-0"
                  }`}>
                    <p className="text-lg md:text-xl font-medium text-slate-800 mb-6">
                      Tests basic math skills and the ability to reason quantitatively. Four content areas:
                    </p>
                    
                    <div className="space-y-6">
                      {[
                        {
                          title: "Arithmetic",
                          pills: ["Integers & divisibility", "Primes & factorisation", "Fractions & decimals", "Exponents & roots", "Percent", "Ratio & proportion", "Estimation", "Number lines & absolute value"]
                        },
                        {
                          title: "Algebra",
                          pills: ["Algebraic expressions", "Linear & quadratic equations", "Inequalities", "Functions", "Word problems", "Coordinate geometry & graphs"]
                        },
                        {
                          title: "Geometry",
                          pills: ["Lines & angles", "Triangles (incl. 30-60-90, 45-45-90)", "Circles", "Quadrilaterals & polygons", "3-D figures", "Area, perimeter & volume", "Pythagorean theorem"]
                        },
                        {
                          title: "Data Analysis",
                          pills: ["Mean, median, mode & range", "Standard deviation & percentiles", "Tables, graphs & charts", "Probability", "Permutations & combinations", "Normal distribution basics"]
                        },
                        {
                          title: "Question types",
                          pills: ["Quantitative Comparison", "Multiple choice (one answer)", "Multiple choice (one or more answers)", "Numeric Entry", "Data Interpretation sets"]
                        }
                      ].map((section) => (
                        <div key={section.title} className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{section.title}</h4>
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
                <div className={`rounded-[20px] bg-white shadow-soft transition-all duration-200 overflow-hidden ${
                  openSyllabusSection === "verbal" 
                    ? "border border-slate-200 border-l-[6px] border-l-primary" 
                    : "border border-slate-200/80"
                }`}>
                  <button
                    type="button"
                    onClick={() => setOpenSyllabusSection(openSyllabusSection === "verbal" ? null : "verbal")}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-50/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <BookOpen className="h-6 w-6 stroke-[2]" />
                      </div>
                      <div>
                        <span className="text-lg font-bold text-foreground block">Verbal Reasoning</span>
                        <span className="text-xs md:text-sm text-slate-500 font-medium hidden sm:inline">
                          27 questions • 41 min • includes Critical Reasoning
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 font-medium sm:hidden">
                        27 Qs • 41 min
                      </span>
                      <span className="text-primary font-semibold text-2xl leading-none">
                        {openSyllabusSection === "verbal" ? "−" : "+"}
                      </span>
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openSyllabusSection === "verbal" ? "max-h-[1000px] border-t border-slate-100 p-6" : "max-h-0 p-0"
                  }`}>
                    <p className="text-lg md:text-xl font-medium text-slate-800 mb-6">
                      Tests the ability to analyze and evaluate written material, synthesize information, and recognize relationships between words and concepts.
                    </p>
                    
                    <div className="space-y-6">
                      {[
                        {
                          title: "Reading Comprehension",
                          pills: ["Passage reading", "Informational reasoning", "Tone & attitude", "Structure & main idea", "Critical Reasoning"]
                        },
                        {
                          title: "Text Completion",
                          pills: ["Single-blank sentences", "Double-blank sentences", "Triple-blank sentences", "Contextual vocabulary"]
                        },
                        {
                          title: "Sentence Equivalence",
                          pills: ["Synonym pairs", "Sentence context", "Vocabulary in context"]
                        },
                        {
                          title: "Question types",
                          pills: ["Reading Comprehension", "Text Completion", "Sentence Equivalence"]
                        }
                      ].map((section) => (
                        <div key={section.title} className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{section.title}</h4>
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

                {/* Analytical Writing Accordion */}
                <div className={`rounded-[20px] bg-white shadow-soft transition-all duration-200 overflow-hidden ${
                  openSyllabusSection === "awa" 
                    ? "border border-slate-200 border-l-[6px] border-l-primary" 
                    : "border border-slate-200/80"
                }`}>
                  <button
                    type="button"
                    onClick={() => setOpenSyllabusSection(openSyllabusSection === "awa" ? null : "awa")}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-50/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                        <PenTool className="h-6 w-6 stroke-[2]" />
                      </div>
                      <div>
                        <span className="text-lg font-bold text-foreground block">Analytical Writing (AWA)</span>
                        <span className="text-xs md:text-sm text-slate-500 font-medium hidden sm:inline">
                          1 task • 30 min • scored 0-6
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 font-medium sm:hidden">
                        1 task • 30 min
                      </span>
                      <span className="text-primary font-semibold text-2xl leading-none">
                        {openSyllabusSection === "awa" ? "−" : "+"}
                      </span>
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openSyllabusSection === "awa" ? "max-h-[1000px] border-t border-slate-100 p-6" : "max-h-0 p-0"
                  }`}>
                    <p className="text-lg md:text-xl font-medium text-slate-800 mb-6">
                      Tests critical thinking and analytical writing skills. Measures your ability to articulate and support complex ideas, construct and evaluate arguments, and sustain a focused and coherent discussion.
                    </p>
                    
                    <div className="space-y-6">
                      {[
                        {
                          title: "Task Details",
                          pills: ["Analyze an Issue task"]
                        },
                        {
                          title: "Skills Tested",
                          pills: ["Constructing a claim", "Supporting with evidence", "Maintaining focus and cohesion", "Standard written English grammar"]
                        }
                      ].map((section) => (
                        <div key={section.title} className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{section.title}</h4>
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
              {/* BOOK A SESSION CTA */}
              <div className="mt-12 flex justify-center">
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
        </section>


            <section className="py-20 md:py-28 bg-gradient-to-b from-background via-blue-50/20 to-background border-t border-b border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08),_transparent_35%)] pointer-events-none" />
        <div className="mx-auto max-w-[1180px] relative px-4">
          <div className="rounded-[36px] border border-slate-200/80 bg-white/80 p-6 sm:p-8 md:p-10 shadow-[0_20px_70px_-28px_rgba(2,8,23,0.22)] backdrop-blur-sm">
            <div className="text-center mb-8 md:mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">GMAT Tutor Reviews</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground">What our students say</h2>
              <p className="mt-3 mx-auto max-w-2xl text-base md:text-lg leading-8 text-muted-foreground">
                Read the experiences of students who improved their GMAT score with Seekyoury coaching.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/80 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.24)]">
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-sky-100/70 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-100/80 to-transparent pointer-events-none" />

              <div className="flex items-center justify-center pt-6">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-blue-500/20">
                  GRE Tutor Reviews
                </span>
              </div>

              <style>{`
                @keyframes gmatReviewMarquee {
                  0% { transform: translate3d(0, 0, 0); }
                  100% { transform: translate3d(-50%, 0, 0); }
                }
              `}</style>

              <div className="relative overflow-hidden px-4 pb-8 pt-6">
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

                <div className="flex gap-5 md:gap-6 w-max min-w-full will-change-transform" style={{ animationName: "gmatReviewMarquee", animationDuration: "70s", animationTimingFunction: "linear", animationIterationCount: "infinite", animationPlayState: "running" }}>
                  {[...studentReviews, ...studentReviews].map((review, index) => (
                    <div key={`${review.name}-${review.footer}-${index}`} className="w-[320px] md:w-[360px] flex-shrink-0 rounded-[32px] border border-blue-200/80 bg-gradient-to-br from-blue-100 via-sky-50 to-cyan-100 p-5 md:p-6 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.28)] transition-transform duration-300 hover:-translate-y-1">
                      <div className="flex items-center gap-4">
                        <img src={review.image} alt={review.name} className="h-16 w-16 md:h-18 md:w-18 rounded-full object-cover ring-2 ring-white shadow-sm" />
                        <div>
                          <p className="text-xl md:text-2xl font-semibold text-slate-950">{review.name}</p>
                          <p className="text-base md:text-lg text-slate-700">{review.title}</p>
                          <div className="mt-2 flex items-center gap-1 text-amber-500 text-lg">
                            {Array.from({ length: review.rating }).map((_, starIndex) => (
                              <span key={starIndex}>★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="mt-5 text-base md:text-lg leading-8 text-slate-700">{review.text}</p>
                      <p className="mt-5 text-base md:text-base font-semibold text-slate-900">{review.footer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


        <CallToAction />
        <CustomFAQ faqs={greFaqs} />
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

export default AboutGre;
