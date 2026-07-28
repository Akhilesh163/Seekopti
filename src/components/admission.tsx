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
import { MapPin, Sparkles, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* HERO SECTION: 2-Column Layout (Left: Text & CTAs, Right: Dynamic Changing University Image & Name) */}
        <section className="overflow-hidden bg-background pt-[76px] md:pt-[84px] pb-16 md:pb-24">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
              
              {/* LEFT COLUMN: Main Text, Feature Cards & CTA */}
              <div className="lg:col-span-6 flex flex-col text-left space-y-6">
                <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-600 text-sm md:text-base font-extrabold uppercase tracking-[0.14em] shadow-sm self-start">
                  <Sparkles className="w-4 h-4 text-blue-600 stroke-[2.5]" />
                  <span>GLOBAL ADMISSIONS & PROFILE BUILDING</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight text-foreground">
                  Your Blueprint to a <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500">
                    World-Class University
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-medium">
                  We don't just coach exams. We architect your entire profile — scores, essays,
                  recommendations, and positioning — so you walk into any top-ranked program as an unforgettable candidate.
                </p>

                {/* Test Prep Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    { title: "GRE Prep", subtitle: "Top scores for Masters & MBA", Icon: GREPREP },
                    { title: "GMAT Prep", subtitle: "Elite Global Business Schools", Icon: GMATPREP },
                  ].map((c) => (
                    <div key={c.title} className="bg-card border border-border/70 rounded-2xl p-5 text-left shadow-soft hover:shadow-md transition-shadow">
                      <div className="w-11 h-11 rounded-xl bg-sky-50 dark:bg-sky-950/50 flex items-center justify-center mb-3">
                        {c.Icon ? <c.Icon /> : "🎯"}
                      </div>
                      <h4 className="font-extrabold text-base md:text-lg text-foreground">{c.title}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1 font-medium">{c.subtitle}</p>
                    </div>
                  ))}
                </div>

                {/* Main CTA Button */}
                <div className="pt-2">
                  <button 
                    onClick={() => setIsBookSessionOpen(true)}
                    className="px-9 py-4 rounded-[16px] bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 text-white font-extrabold text-base md:text-lg shadow-lg shadow-indigo-500/25 hover:opacity-95 transition-all hover:scale-105 flex items-center justify-center gap-2.5"
                  >
                    <span>Start Your Admissions Journey</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* RIGHT COLUMN: Auto-Changing University Card with Name Only */}
              <div className="lg:col-span-6 w-full">
                <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] rounded-[32px] overflow-hidden border border-border/80 shadow-2xl bg-slate-950">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-black/20" />

                      {/* Location Badge Top Left */}
                      <div className="absolute top-6 left-6 z-10">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white/90 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
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
        <section className="pt-12 pb-16 bg-transparent">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-sm font-extrabold text-blue-600 mb-4">Test Prep</div>
              <h3 className="text-3xl md:text-4xl font-extrabold">Ace Your <span className="text-primary">Entrance Exams</span></h3>
              <p className="max-w-2xl mx-auto text-muted-foreground mt-4">Expert-led coaching with proven strategies for every major standardized test. Personalized guidance to maximize your scores.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  src: CourseGre,
                  title: "GRE Coaching",
                  desc: "Comprehensive GRE preparation covering Quant & Verbal with formula-free logic techniques.",
                },
                {
                  src: CourseGmat,
                  title: "GMAT Focus Edition",
                  desc: "Specialized GMAT prep focusing on Data Insights, Quant, and Verbal Reasoning.",
                },
                {
                  src: CourseSat,
                  title: "SAT Prep",
                  desc: "Structured SAT training for high school students targeting top US undergraduate universities.",
                },
                {
                  src: CourseIelts,
                  title: "IELTS & TOEFL Prep",
                  desc: "Language proficiency training covering Speaking, Listening, Reading, and Writing modules.",
                },
              ].map((course) => (
                <div key={course.title} className="bg-card border border-border/70 rounded-2xl overflow-hidden shadow-soft hover:shadow-md transition-shadow text-left">
                  <div className="h-48 overflow-hidden">
                    <img src={course.src} alt={course.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-extrabold text-xl mb-2 text-foreground">{course.title}</h4>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-4">{course.desc}</p>
                    <button
                      onClick={() => setIsBookSessionOpen(true)}
                      className="text-sm font-extrabold text-primary hover:underline flex items-center gap-1"
                    >
                      <span>Learn More & Book Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get Only With Seek Your Y (Vibrant Cards) */}
        <SeekAdvantageCards />

        {/* BLUE CTA SECTION */}
        <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-500 text-white">
          <div className="max-w-[1000px] mx-auto px-4 text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm font-bold text-white mb-4">Expert Guidance</div>
            <h3 className="text-4xl font-extrabold mb-4">Not Sure Which Path Is Right For You?</h3>
            <p className="max-w-2xl mx-auto text-white/90 mb-8 text-lg font-medium">Our expert counselors will evaluate your profile and recommend the perfect program — absolutely free.</p>
            <button
              onClick={() => setIsBookSessionOpen(true)}
              className="px-8 py-3.5 bg-white text-blue-600 font-extrabold rounded-[14px] shadow-lg hover:bg-slate-50 transition-colors text-base"
            >
              Book Free Profile Evaluation
            </button>
          </div>
        </section>

        {/* ADMISSIONS FAQS */}
        <CustomFAQ faqs={admissionsFaqs} title="Admissions Consulting FAQs" />

        {/* BOTTOM CALL TO ACTION */}
        <CallToAction />
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