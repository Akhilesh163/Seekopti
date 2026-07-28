import { useState } from "react";
import { Calculator, BookOpen, Target, ArrowRight, FileText, Play } from "lucide-react";
import { BookSessionDialog } from "@/components/BookSessionDialog";

const LMS_GMAT_QUANT = "https://lms.seekyoury.com/learn/Quants-For-GMAT";
const LMS_GRE_QUANT = "https://lms.seekyoury.com/learn/Quants-for-GRE";
const LMS_TEST_SERIES = "https://lms.seekyoury.com/learn/view-all?show=mock-tests&type=2";

const courses = [
  {
    id: 1,
    title: "GMAT Quant",
    desc: "(Self Paced) Comprehensive GMAT Quant with concept videos, step-by-step explanations, and targeted practice quizzes.",
    icon: Calculator,
    iconBg: "bg-pastel-green",
    iconColor: "text-emerald-600",
    features: ["Concept Videos", "Practice Quizzes", "Up-to-date Resources"],
    cta: "explore" as const,
    href: LMS_GMAT_QUANT,
  },
  {
    id: 2,
    title: "GRE Quant",
    desc: "(Self Paced) Comprehensive GRE Quant prep with logic-based approach and test-day execution strategies.",
    icon: Target,
    iconBg: "bg-pastel-purple",
    iconColor: "text-purple-600",
    features: ["Logic-based Learning", "Test Strategies", "Score Improvement"],
    cta: "explore" as const,
    href: LMS_GRE_QUANT,
  },
  {
    id: 3,
    title: "Test Series",
    desc: "High-quality GMAT & GRE Quant test series to help you practice and improve your test-taking skills.",
    icon: FileText,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    features: ["Detailed Analytics", "Performance Tracking"],
    cta: "explore" as const,
    href: LMS_TEST_SERIES,
  },
  {
    id: 4,
    title: "Personalized 1-ON-1 Guidance",
    desc: "Get personalized guidance with one-on-one sessions tailored to your specific needs and goals.",
    icon: BookOpen,
    iconBg: "bg-pastel-blue",
    iconColor: "text-blue-600",
    features: ["Customized Study Plan", "Direct Access to Aman", "Personalized Feedback"],
    cta: "demo" as const,
  },
];

export const ProductJourney = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  return (
    <section className="section-padding bg-background-alt" id="programs">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-600 text-base md:text-lg font-extrabold uppercase tracking-[0.14em] shadow-sm mb-4">
            <BookOpen className="w-4 h-4 text-blue-600 stroke-[2.5]" />
            <span>COURSES</span>
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground max-w-3xl mx-auto">
            Choose Your <span className="headline-primary">Journey</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: "20px" }}>
            Whether you're starting from scratch or fine-tuning for test day, we have the right course for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="glass-card p-8 hover-lift group flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${course.iconBg} flex items-center justify-center mb-6`}>
                <course.icon className={`w-8 h-8 ${course.iconColor}`} />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3">{course.title}</h3>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed flex-grow">{course.desc}</p>

              <ul className="space-y-2 mb-6">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-base text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {course.cta === "explore" ? (
                <button
                  type="button"
                  onClick={() => setIsBookDemoOpen(true)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all mt-auto text-left bg-transparent border-none p-0 cursor-pointer outline-none font-sans"
                >
                  Book a Session
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsBookDemoOpen(true)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all mt-auto text-left bg-transparent border-none p-0 cursor-pointer outline-none font-sans"
                >
                  <Play className="w-4 h-4" />
                  Book a Session
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <BookSessionDialog
        open={isBookDemoOpen}
        onOpenChange={setIsBookDemoOpen}
        title="Book a free demo"
        description="Share your details and we'll schedule a free 30-minute consultation with Aman."
      />
    </section>
  );
};
