import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import { SeekAdvantageCards } from "@/components/SeekAdvantageCards";
import CourseGre from "/assets/gre-asset/course_gre_.webp";
import CourseGmat from "/assets/gre-asset/course_gmat.webp";
import CourseSat from "/assets/gre-asset/course_sat.webp";
import CourseIelts from "/assets/gre-asset/course_ielts.webp";
import GREPREP from "@/assets/svgComponent/GREPREP";
import GMATPREP from "@/assets/svgComponent/GMATPREP";
import { MapPin, Sparkles, ArrowRight, Calendar } from "lucide-react";

/* ─── Hero Showcase Universities (Changing Image & Name on Right) ─── */
const heroUniversities = [
  {
    name: "Stanford University",
    fullName: "Stanford Graduate School of Business",
    location: "Stanford, California",
    image: "/assets/Universities/stanford.jpg",
  },
  {
    name: "Wharton",
    fullName: "The Wharton School of Pennsylvania",
    location: "Philadelphia, Pennsylvania",
    image: "/assets/Universities/Wharton.jpg",
  },
  {
    name: "Northwestern Kellogg",
    fullName: "Kellogg School of Management",
    location: "Evanston, Illinois",
    image: "/assets/Universities/Kellogg.jpg",
  },
  {
    name: "Chicago Booth",
    fullName: "University of Chicago Booth School of Business",
    location: "Chicago, Illinois",
    image: "/assets/Universities/Booth.avif",
  },
  {
    name: "Columbia University",
    fullName: "Columbia Business School",
    location: "New York, New York",
    image: "/assets/Universities/Columbia.jpg",
  },
  {
    name: "MIT Sloan",
    fullName: "MIT Sloan School of Management",
    location: "Cambridge, Massachusetts",
    image: "/assets/Universities/MIT Sloan.jpg",
  },
  {
    name: "INSEAD",
    fullName: "The Business School for the World",
    location: "Fontainebleau & Singapore",
    image: "/assets/Universities/INSEAD.jpg",
  },
  {
    name: "London Business School",
    fullName: "London Business School (LBS)",
    location: "London, United Kingdom",
    image: "/assets/Universities/LBS.jpg",
  },
  {
    name: "NUS",
    fullName: "National University of Singapore",
    location: "Singapore",
    image: "/assets/Universities/NUS.jpg",
  },
  {
    name: "NTU",
    fullName: "Nanyang Technological University",
    location: "Singapore",
    image: "/assets/Universities/NTU.jpg",
  },
  {
    name: "ISB",
    fullName: "Indian School of Business",
    location: "Hyderabad & Mohali, India",
    image: "/assets/Universities/ISB.webp",
  },
];

const Admission: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);
  const [activeHeroIdx, setActiveHeroIdx] = useState(0);

  // Auto-change hero university image on the right every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroIdx((prev) => (prev + 1) % heroUniversities.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const currentUni = heroUniversities[activeHeroIdx];

  const admissionsFaqs = [
    {
      question: "What is covered under your admissions consulting services?",
      answer: "We provide end-to-end guidance including profile evaluation, target university shortlisting, essay brainstorming and editing, resume restructuring, letter of recommendation (LOR) strategy, and comprehensive mock interview preparation."
    },
    {
      question: "How do you help with shortlisting target universities?",
      answer: "We analyze your test scores, GPA, professional experience, post-degree career goals, budget, and geographic preferences to curate a balanced list of 'Reach', 'Target', and 'Safe' schools."
    },
    {
      question: "Do you write my statement of purpose (SOP) or essays for me?",
      answer: "No, we do not write essays from scratch. We help you brainstorm personal stories, outline essay structures, edit multiple drafts for clarity, flow, and tone, and ensure your unique voice stands out to admissions committees."
    },
    {
      question: "Can I get assistance with scholarships and financial aid applications?",
      answer: "Yes. We advise you on how to highlight key strengths and leadership experiences within your application essays to maximize your chances of merit-based scholarships."
    },
    {
      question: "How does the interview preparation process work?",
      answer: "We conduct school-specific mock interviews that simulate the actual admissions interview. Tutors provide thorough feedback on your answers, body language, and strategy to build your confidence."
    }
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_25%),radial-gradient(circle_at_90%_10%,rgba(139,92,246,0.16),transparent_24%),linear-gradient(135deg,#f8fbff_0%,#fdfcff_45%,#eef2ff_100%)] text-slate-900">
      <Navbar />
      <main>
        {/* HERO SECTION: 2-Column Layout (Left: Text & CTAs, Right: Dynamic Changing University Image & Name) */}
        <section className="relative overflow-hidden pt-[76px] md:pt-[84px] pb-16 md:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.14),transparent_22%)] pointer-events-none" />
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
              
              {/* LEFT COLUMN: Main Text, Feature Cards & CTA */}
              <div className="lg:col-span-6 flex flex-col text-left space-y-6">
                <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/80 border border-blue-200/80 text-blue-700 text-sm md:text-base font-extrabold uppercase tracking-[0.14em] shadow-[0_12px_32px_rgba(59,130,246,0.12)] self-start backdrop-blur">
                  <Sparkles className="w-4 h-4 text-blue-600 stroke-[2.5]" />
                  <span>GLOBAL ADMISSIONS & PROFILE BUILDING</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.08] tracking-tight text-slate-950">
                  Your Blueprint to a <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500">
                    World-Class University
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                  We don't just coach exams. We architect your entire profile — scores, essays,
                  recommendations, and positioning — so you walk into any top-ranked program as an unforgettable candidate.
                </p>

                {/* Test Prep Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    {
                      title: "GRE Prep",
                      subtitle: "Top scores for Masters & MBA",
                      Icon: GREPREP,
                      cardClass: "border-blue-200/80 bg-gradient-to-br from-blue-50/90 via-indigo-50/60 to-white",
                      iconClass: "bg-gradient-to-br from-blue-600 to-indigo-500 text-white",
                      badgeClass: "text-blue-900 bg-blue-100/70 border-blue-200/80",
                    },
                    {
                      title: "GMAT Prep",
                      subtitle: "Elite Global Business Schools",
                      Icon: GMATPREP,
                      cardClass: "border-violet-200/80 bg-gradient-to-br from-violet-50/90 via-fuchsia-50/60 to-purple-50/70",
                      iconClass: "bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white",
                      badgeClass: "text-violet-900 bg-violet-100/70 border-violet-200/80",
                    },
                  ].map((c) => (
                    <div
                      key={c.title}
                      className={`relative overflow-hidden rounded-[24px] border-2 p-5 text-left shadow-md hover:shadow-xl transition-all duration-300 ${c.cardClass}`}
                    >
                      <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-violet-400 opacity-15 blur-2xl pointer-events-none" />
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 shadow-lg ${c.iconClass}`}>
                        {c.Icon ? <c.Icon /> : "🎯"}
                      </div>
                      <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] ${c.badgeClass}`}>
                        Premium Prep
                      </span>
                      <h4 className="font-extrabold text-base md:text-lg text-slate-950 mt-3">{c.title}</h4>
                      <p className="text-xs md:text-sm text-slate-700 mt-1 font-medium leading-relaxed">{c.subtitle}</p>
                    </div>
                  ))}
                </div>

                {/* Main CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={() => setIsBookSessionOpen(true)}
                    className="px-10 py-4 rounded-full bg-gradient-to-r from-slate-900 via-blue-700 to-violet-600 text-white font-extrabold text-base md:text-lg shadow-[0_18px_40px_rgba(79,70,229,0.24)] hover:opacity-95 transition-all hover:scale-[1.02] flex items-center justify-center gap-2.5"
                  >
                    <span>Start Your Admissions Journey</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* RIGHT COLUMN: Auto-Changing University Card with Name Only */}
              <div className="lg:col-span-6 w-full">
                <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] rounded-[32px] overflow-hidden border border-white/70 shadow-[0_30px_60px_rgba(15,23,42,0.2)] bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeHeroIdx}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.03 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      {/* Actual Campus Image */}
                      <img
                        src={currentUni.image}
                        alt={currentUni.name}
                        className="w-full h-full object-cover object-center"
                      />

                      {/* Dark Gradient Overlay for Sharp Text Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-black/10" />

                      {/* Location Badge Top Left */}
                      <div className="absolute top-6 left-6 z-10">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white/90 bg-white/10 backdrop-blur-lg px-3.5 py-1.5 rounded-full border border-white/20 shadow-lg">
                          <MapPin className="w-3.5 h-3.5 text-blue-400" />
                          <span>{currentUni.location}</span>
                        </span>
                      </div>

                      {/* University Name ONLY at the bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9 text-left text-white z-10 space-y-1">
                        <span className="text-xs font-black uppercase tracking-wider text-blue-300 block">
                          TARGET GLOBAL UNIVERSITY
                        </span>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md">
                          {currentUni.name}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-slate-200/90 font-medium truncate">
                          {currentUni.fullName}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* COURSES GALLERY */}
        <section className="pt-12 pb-16">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="rounded-[36px] border border-blue-100/80 bg-gradient-to-br from-white/90 via-blue-50/70 to-violet-50/70 p-8 md:p-10 shadow-[0_25px_60px_rgba(15,23,42,0.06)]">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-1 rounded-full bg-white/80 border border-blue-200/70 text-base md:text-lg font-extrabold text-blue-700 mb-4 shadow-sm">Test Prep</div>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950">Ace Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500">Entrance Exams</span></h3>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mt-4 leading-relaxed">Expert-led coaching with proven strategies for every major standardized test. Personalized guidance to maximize your scores.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  src: CourseGre,
                  title: "GRE Coaching",
                  desc: "Comprehensive GRE preparation covering Quant & Verbal with formula-free logic techniques.",
                  badge: "GRE",
                  cardClass: "border-blue-200/80 bg-gradient-to-br from-blue-100 via-sky-100 to-indigo-100 shadow-[0_18px_36px_rgba(59,130,246,0.18)]",
                  badgeClass: "text-blue-900 bg-blue-100/70 border-blue-200/80",
                  buttonClass: "inline-flex items-center gap-1 text-base md:text-lg font-extrabold text-blue-700 hover:text-blue-900 hover:-translate-y-0.5 transition duration-200",
                },
                {
                  src: CourseGmat,
                  title: "GMAT Focus Edition",
                  desc: "Specialized GMAT prep focusing on Data Insights, Quant, and Verbal Reasoning.",
                  badge: "GMAT",
                  cardClass: "border-violet-200/80 bg-gradient-to-br from-fuchsia-50 via-violet-100 to-indigo-100 shadow-[0_18px_36px_rgba(139,92,246,0.18)]",
                  badgeClass: "text-violet-900 bg-violet-100/70 border-violet-200/80",
                  buttonClass: "inline-flex items-center gap-1 text-base md:text-lg font-extrabold text-violet-700 hover:text-violet-900 hover:-translate-y-0.5 transition duration-200",
                },
              ].map((course) => (
                <div
                  key={course.title}
                  className={`group relative overflow-hidden rounded-[28px] border-2 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-left ${course.cardClass}`}
                >
                  <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-violet-400 opacity-15 blur-2xl pointer-events-none" />
                  <div className="h-48 overflow-hidden">
                    <img src={course.src} alt={course.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] ${course.badgeClass}`}>
                      {course.badge}
                    </span>
                    <h4 className="font-extrabold text-2xl mt-3 mb-2 text-slate-950">{course.title}</h4>
                    <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed mb-4">{course.desc}</p>
                    <button
                      onClick={() => setIsBookSessionOpen(true)}
                      className={course.buttonClass}
                    >
                      <span>Learn More & Book Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Only With Seek Your Y (Vibrant Cards) */}
        {/* <SeekAdvantageCards /> */}

        <div className="pt-4 pb-8 text-center flex justify-center z-10 relative">
          <button
            onClick={() => setIsBookSessionOpen(true)}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-slate-900 via-blue-700 to-violet-600 text-white font-extrabold text-lg md:text-xl shadow-[0_20px_45px_rgba(79,70,229,0.25)] hover:opacity-95 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-white" />
            <span>Book a Session</span>
            <ArrowRight className="w-5 h-5 text-white/90" />
          </button>
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <CallToAction />

        {/* ADMISSIONS FAQS */}
        <CustomFAQ faqs={admissionsFaqs} title="Admissions Consulting FAQs" />

     
      </main>

      <Footer />

      {/* Book Session Dialog Modal */}
      <BookSessionDialog
        open={isBookSessionOpen}
        onOpenChange={setIsBookSessionOpen}
        title="Start Your Admissions Journey"
        description="Share your details and we'll schedule a free 30-minute profile evaluation consultation."
      />
    </div>
  );
};

export default Admission;