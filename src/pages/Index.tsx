import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { GreShortcut } from "@/components/GreShortcut";
import { StudentScoreCarousel } from "@/components/StudentScoreCarousel";
import { SeekMethod } from "@/components/SeekMethod";
import { AboutMe } from "@/components/AboutMe";
import { UniversityMarquee } from "@/components/UniversityMarquee";
import { SupportTabs } from "@/components/SupportTabs";
import { BookDemoForm } from "@/components/BookDemoForm";
import { WebinarSection } from "@/components/WebinarSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ScrollToSection } from "@/components/ScrollToSection";
import { FeaturesDiagram } from "@/components/FeaturesDiagram";
import { MethodTimeline } from "@/components/MethodTimeline";
import { SeekAdvantageCards } from "@/components/SeekAdvantageCards";
import { Sparkles, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToSection />
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* GRE SHORTCUT SECTION */}
        <GreShortcut />

        {/* TOP ACHIEVERS SECTION */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background via-blue-50/20 to-background relative overflow-hidden">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* LEFT COLUMN: Text & Key Highlights */}
              <div className="lg:col-span-5 text-left space-y-6">
                <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-600 text-base md:text-lg font-extrabold uppercase tracking-[0.14em] shadow-sm mb-4">
                  <Sparkles className="w-4 h-4 text-blue-600 stroke-[2.5]" />
                  <span>OUR STUDENTS' SUCCESS</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-foreground tracking-tight leading-[1.15]">
                  Real Students. <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                    Real Score Gains.
                  </span>
                </h2>

                <p className="text-muted-foreground font-normal leading-relaxed" style={{ fontSize: "20px" }}>
                  Meet our top-performing learners who turned Quant confusion into high scores. With our logic-based strategies and personalized 1-on-1 mentoring, students consistently conquer their target GRE & GMAT scores.
                </p>

                {/* Feature Highlights */}
                <div className="space-y-4 pt-3">
                  <div className="flex items-center gap-3.5 text-lg md:text-xl font-bold text-foreground">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0 font-extrabold text-sm">
                      ✓
                    </div>
                    <span>Average +120 points score improvement</span>
                  </div>
                  <div className="flex items-center gap-3.5 text-lg md:text-xl font-bold text-foreground">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0 font-extrabold text-sm">
                      ✓
                    </div>
                    <span>Logic-based shortcuts without formulas</span>
                  </div>
                  <div className="flex items-center gap-3.5 text-lg md:text-xl font-bold text-foreground">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0 font-extrabold text-sm">
                      ✓
                    </div>
                    <span>Direct 1-on-1 mentoring & doubt clearing</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href="#book-demo"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-extrabold text-base shadow-lg shadow-blue-500/20 hover:bg-primary/90 hover:scale-105 transition-all duration-200"
                  >
                    <span>Start Your Success Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* RIGHT COLUMN: Student Score Card Carousel */}
              <div className="lg:col-span-7 w-full overflow-visible">
                <StudentScoreCarousel type="gre" />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES DIAGRAM SECTION */}
        <FeaturesDiagram />

        {/* METHODOLOGY STICKY SCROLL TIMELINE */}
        <MethodTimeline />

       
       

        {/* WHAT YOU GET ONLY WITH SEEK YOUR Y (EXCLUSIVE ADVANTAGE CARDS) */}
        <SeekAdvantageCards />

        {/* 1-ON-1 TUTORING SECTION */}
        <SupportTabs />

        {/* MEET YOUR MENTOR */}
        <AboutMe />

        {/* B-SCHOOL GRE ACCEPTANCE MARQUEE */}
        <UniversityMarquee />

        {/* BOOK A DEMO */}
        <BookDemoForm />

        {/* WEBINARS & MASTERCLASSES */}
        <WebinarSection />

        {/* FAQ */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
