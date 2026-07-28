import { useState, useEffect } from "react";
import {
  Users,
  Zap,
  FileText,
  Target,
  MessageSquare,
  Calendar,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookSessionDialog } from "@/components/BookSessionDialog";

// Avatars
import avatar1 from "@/assets/person1.jpg";
import avatar2 from "@/assets/person2.jpg";
import avatar3 from "@/assets/person3.jpg";

// Course & Showcase Images
import CourseGre from "/assets/gre-asset/course_gre_.webp";
import CourseGmat from "/assets/gre-asset/course_gmat.webp";
import CourseSat from "/assets/gre-asset/course_sat.webp";
import CourseIelts from "/assets/gre-asset/course_ielts.webp";

const tutoringSlides = [
  {
    src: CourseGre,
    title: "1-on-1 Personalized Mentoring",
    subtitle: "Customized roadmap tailored to your specific score goals & learning style",
  },
  {
    src: CourseGmat,
    title: "Targeted Practice & Strategy",
    subtitle: "Focus directly on weak areas with expert-guided practice & feedback",
  },
  {
    src: CourseSat,
    title: "Real-Time Doubt Resolution",
    subtitle: "Logic-based shortcuts without formulas or rote memorization",
  },
  {
    src: CourseIelts,
    title: "Trackable Score Progression",
    subtitle: "Proven framework yielding average +120 point score jumps",
  },
];

const doubtSlides = [
  {
    src: CourseGmat,
    title: "Instant Expert Matching",
    subtitle: "Connect with verified expert tutors in seconds anytime",
  },
  {
    src: CourseGre,
    title: "Step-by-Step Solutions",
    subtitle: "Receive clear, intuitive solution breakdowns for complex problems",
  },
  {
    src: CourseSat,
    title: "Ask Any Question Instantly",
    subtitle: "Type, upload an image, or snap a photo of your practice doubt",
  },
  {
    src: CourseIelts,
    title: "24/7 Academic Support",
    subtitle: "Never stay stuck on a problem during your test preparation",
  },
];

const supportTabs = [
  {
    id: "tutoring",
    label: "1-on-1 Tutoring",
    shortLabel: "1:1",
    icon: Users,
    content: "Personalized attention tailored to your specific weaknesses and learning style.",
    gradient: "from-blue-600 to-indigo-600 shadow-blue-500/20",
    ctaText: "Book a Session",
    headingNormal: "Personalized 1-on-1",
    headingAccent: "Tutoring",
    listItems: [
      {
        title: "Customized study plans",
        desc: "Plans designed just for you based on your goals and learning pace.",
        icon: FileText,
        cardBg: "bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-50/30",
        borderColor: "border-blue-200/90 hover:border-blue-400",
        iconBg: "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/30",
        badge: "Tailored to You",
        badgeBg: "bg-blue-100/90 text-blue-700 border border-blue-200/80",
      },
      {
        title: "Targeted practice sessions",
        desc: "Focus on weak areas with expert-guided practice and feedback.",
        icon: Target,
        cardBg: "bg-gradient-to-r from-emerald-50 via-teal-50/50 to-emerald-50/30",
        borderColor: "border-emerald-200/90 hover:border-emerald-400",
        iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/30",
        badge: "High Yield",
        badgeBg: "bg-emerald-100/90 text-emerald-700 border border-emerald-200/80",
      },
    ],
  },
  {
    id: "doubts",
    label: "Instant Doubt Solving",
    shortLabel: "Doubts",
    icon: Zap,
    content: "Stuck on a question? Get step-by-step explanations from expert tutors in seconds.",
    gradient: "from-purple-600 to-pink-600 shadow-purple-500/20",
    ctaText: "Ask Your Doubt Now",
    headingNormal: "Get Instant Answers.",
    headingAccent: "Keep Learning.",
    listItems: [
      {
        title: "Ask Any Question",
        desc: "Type, upload image, or voice your doubt anytime.",
        icon: MessageSquare,
        cardBg: "bg-gradient-to-r from-purple-50 via-pink-50/50 to-purple-50/30",
        borderColor: "border-purple-200/90 hover:border-purple-400",
        iconBg: "bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-md shadow-purple-500/30",
        badge: "24/7 Available",
        badgeBg: "bg-purple-100/90 text-purple-700 border border-purple-200/80",
      },
      {
        title: "Expert Tutors Online",
        desc: "Connect instantly with verified experts for live 1-on-1 help.",
        icon: Users,
        cardBg: "bg-gradient-to-r from-amber-50 via-orange-50/50 to-amber-50/30",
        borderColor: "border-amber-200/90 hover:border-amber-400",
        iconBg: "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/30",
        badge: "Instant Connect",
        badgeBg: "bg-amber-100/90 text-amber-800 border border-amber-200/80",
      },
    ],
  },
];

/* ─── 1-Second Auto Changing Image Slideshow Component ─── */
const ImageSlideshow: React.FC<{ slides: typeof tutoringSlides }> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2000); // Changes image every 2 seconds (2000ms)
    return () => clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[currentIndex];

  return (
    <div className="relative w-full h-[360px] sm:h-[420px] md:h-[450px] rounded-[32px] overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl flex flex-col justify-end">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={activeSlide.src}
            alt={activeSlide.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Title, Subtitle and Progress Dots */}
      <div className="relative z-10 p-6 md:p-8 text-left text-white space-y-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-blue-600/90 text-white shadow-sm">
            0{currentIndex + 1} / 0{slides.length}
          </span>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-white w-5" : "bg-white/40 w-2"
                }`}
              />
            ))}
          </div>
        </div>

        <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight drop-shadow-sm">
          {activeSlide.title}
        </h4>
        <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
          {activeSlide.subtitle}
        </p>
      </div>
    </div>
  );
};

export const SupportTabs = () => {
  const [activeTab, setActiveTab] = useState("tutoring");
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  const activeContent = supportTabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden" id="tutoring">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl pointer-events-none -z-10" />

      {/* Increased Max Width Container */}
      <div className="max-w-[1360px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-400 text-base md:text-lg font-extrabold uppercase tracking-[0.14em] shadow-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-400 stroke-[2.5]" />
            <span>PRIVATE TUTORING</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-3xl md:text-5xl font-extrabold font-display text-white leading-[1.25] tracking-tight mb-6"
          >
            Personalized 1-on-1 <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-indigo-300 bg-clip-text text-transparent inline-block pb-3 pt-1">Tutoring</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-slate-300 leading-relaxed max-w-[660px] mx-auto"
            style={{ fontSize: "20px" }}
          >
            Get dedicated support from Aman to tackle your specific challenges and maximize your score.
          </motion.p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {supportTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-7 py-4 rounded-full text-base md:text-lg font-extrabold transition-all duration-300 border shadow-sm ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-600 text-white border-transparent scale-105 shadow-lg shadow-indigo-500/30"
                  : "bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/80 hover:border-slate-700"
              }`}
            >
              <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? "text-white" : "text-blue-400"}`} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Box */}
        <div className="min-h-[520px] relative">
          <AnimatePresence mode="wait">
            {activeContent && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-slate-200/80 rounded-[32px] p-6 md:p-12 shadow-2xl transition-all duration-300"
              >
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                  {/* Left Column: Text & Features */}
                  <div className="lg:col-span-6 flex flex-col text-left">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 mb-4 leading-[1.25] tracking-tight">
                      {activeContent.headingNormal}{" "}
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block pb-3 pt-1">{activeContent.headingAccent}</span>
                    </h3>
                    <p className="text-lg md:text-xl text-slate-700 font-medium mt-5 mb-8 leading-relaxed">
                      {activeContent.content}
                    </p>

                    {/* Feature Cards */}
                    <div className="space-y-4 mb-8">
                      {activeContent.listItems.map((item, idx) => (
                        <div
                          key={idx}
                          className={`${item.cardBg} border ${item.borderColor} rounded-2xl p-5 flex items-center gap-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group`}
                        >
                          <div className={`w-13 h-13 rounded-2xl ${item.iconBg} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                            <item.icon className="w-6.5 h-6.5 stroke-[2]" />
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-lg md:text-xl font-extrabold text-slate-950 leading-snug">{item.title}</h4>
                              {item.badge && (
                                <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full ${item.badgeBg} uppercase tracking-wider`}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button & Social Proof */}
                    <div className="flex flex-wrap items-center gap-6">
                      <Button
                        onClick={() => setIsBookDemoOpen(true)}
                        className="h-14 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-base md:text-lg rounded-[16px] flex items-center justify-center gap-2.5 transition-all duration-200 shadow-lg shadow-blue-600/25 border-0"
                      >
                        {activeTab === "tutoring" ? (
                          <Calendar className="w-5 h-5" />
                        ) : (
                          <Zap className="w-5 h-5 fill-current" />
                        )}
                        <span>{activeContent.ctaText}</span>
                      </Button>

                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          <img src={avatar1} alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                          <img src={avatar2} alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                          <img src={avatar3} alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                        </div>
                        <div className="text-sm md:text-base text-slate-950 font-bold leading-tight">
                          <span className="font-extrabold text-slate-950 text-base md:text-lg block">4.9/5 ★</span>
                          <span className="text-slate-600 font-medium">Trusted by 4000+ students</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: 1-Second Auto Changing Image Slideshow */}
                  <div className="lg:col-span-6 w-full">
                    <ImageSlideshow slides={activeTab === "tutoring" ? tutoringSlides : doubtSlides} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Book Session Dialog Modal */}
      <BookSessionDialog
        open={isBookDemoOpen}
        onOpenChange={setIsBookDemoOpen}
        title="Book a free session"
        description="Share your details and we'll schedule a free 30-minute consultation with Aman."
      />
    </section>
  );
};
