import React, { useState } from "react";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import { TrendingUp } from "lucide-react";

const testimonialsFaqs = [
  {
    question: "Are these student score improvements verified?",
    answer: "Yes, every single score improvement and success testimonial published on our website is from verified students who prepared with our courses or tutoring."
  },
  {
    question: "How can I check student admitted profiles or case studies?",
    answer: "You can view detailed admit case studies on our Admissions page, or read about detailed score journeys directly under our Success Stories section."
  },
  {
    question: "Do you offer video interviews with alumni?",
    answer: "Yes, we regularly conduct video interviews and fireside chats with alumni who secured admission at top global business schools and universities."
  }
];
import ManyaPhoto from "@/assets/student_pics/Manya.jpeg";
import PraffulPhoto from "@/assets/student_pics/Prafful.jpeg";
import ArjunPhoto from "@/assets/student_pics/Arjun M S.jpeg";
import BalagopalPhoto from "@/assets/student_pics/Balagopal Jayakumar.jpeg";
import SabhyataPhoto from "@/assets/student_pics/Sabhyata.jpeg";
import Person1 from "@/assets/person1.jpg";
import Person2 from "@/assets/person2.jpg";

export const TestimonialsPage: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);

  const greScores = [
    {
      name: "Priya M.",
      test: "GRE",
      before: "305",
      after: "331",
      program: "MS CS • Georgia Tech",
      avatar: Person1,
      quote: "Quant went from weakness to 168.",
      color: "from-blue-600 to-blue-500",
    },
    {
      name: "Riya S.",
      test: "GRE",
      before: "302",
      after: "328",
      program: "MBA • Columbia",
      avatar: ManyaPhoto,
      quote: "Switched from GMAT — best call ever.",
      color: "from-blue-600 to-blue-500",
    },
    {
      name: "Bala J.",
      test: "GRE",
      before: "310",
      after: "326",
      program: "Admitted • Trivandrum",
      avatar: BalagopalPhoto,
      quote: "Tutoring slots were very flexible.",
      color: "from-emerald-600 to-teal-500",
    },
    {
      name: "Prafful S.",
      test: "GRE",
      before: "308",
      after: "323",
      program: "MBA • BITS Pilani",
      avatar: PraffulPhoto,
      quote: "Concept clarity in Geometry was top-notch.",
      color: "from-indigo-600 to-violet-500",
    },
    {
      name: "Sabhyata R.",
      test: "GRE",
      before: "310",
      after: "320",
      program: "Admitted • NIIT University",
      avatar: SabhyataPhoto,
      quote: "Mocks and strategy reviews were key.",
      color: "from-rose-600 to-pink-500",
    },
    {
      name: "Manya P.",
      test: "GRE",
      before: "312",
      after: "324",
      program: "MBA • Punjab College",
      avatar: ManyaPhoto,
      quote: "Brilliant logic shortcuts for DI.",
      color: "from-blue-700 to-indigo-500",
    },
    {
      name: "Arjun M.",
      test: "GRE",
      before: "305",
      after: "322",
      program: "MS • DTU Delhi",
      avatar: ArjunPhoto,
      quote: "Personal feedback on error logs was a game changer.",
      color: "from-blue-900 to-slate-900",
    },
  ];

  const gmatScores = [
    {
      name: "Sahil K.",
      test: "GMAT",
      before: "565",
      after: "705",
      program: "MBA • ISB",
      avatar: PraffulPhoto,
      quote: "Weekend batch fit my job perfectly.",
      color: "from-[#0052CC] to-blue-500",
    },
    {
      name: "Arjun K.",
      test: "GMAT",
      before: "545",
      after: "695",
      program: "MBA • INSEAD",
      avatar: ArjunPhoto,
      quote: "DI module carried my percentile.",
      color: "from-blue-900 to-slate-900",
    },
    {
      name: "Manya P.",
      test: "GMAT",
      before: "690",
      after: "750",
      program: "MBA • Punjab College",
      avatar: ManyaPhoto,
      quote: "Brilliant logic shortcuts for DI.",
      color: "from-blue-700 to-indigo-500",
    },
    {
      name: "Prafful S.",
      test: "GMAT",
      before: "680",
      after: "740",
      program: "MBA • BITS Pilani",
      avatar: PraffulPhoto,
      quote: "Concept clarity in Geometry was top-notch.",
      color: "from-indigo-600 to-violet-500",
    },
    {
      name: "Sabhyata R.",
      test: "GMAT",
      before: "630",
      after: "710",
      program: "Admitted • NIIT University",
      avatar: SabhyataPhoto,
      quote: "Mocks and strategy reviews were key.",
      color: "from-rose-600 to-pink-500",
    },
  ];

  const textTestimonials = [
    {
      name: "Priya M.",
      score: "GRE 331",
      avatar: Person1,
      bgColor: "bg-violet-50/60",
      text: (
        <>
          I'd done two other courses before this. The difference is the way concepts are taught — as logic, not formulas. Quant went from my weakness to a <strong className="font-bold text-foreground">168</strong>.
        </>
      ),
    },
    {
      name: "Sahil K.",
      score: "GMAT 705",
      avatar: PraffulPhoto,
      bgColor: "bg-blue-50/60",
      text: (
        <>
          Daily live classes meant I couldn't slack off. The weekly mock analysis sessions alone are worth the fee.
        </>
      ),
    },
    {
      name: "Dev J.",
      score: "GRE 334",
      avatar: BalagopalPhoto,
      bgColor: "bg-teal-50/60",
      text: (
        <>
          Aman personally reviewed my error log every week during tutoring. That level of attention is rare anywhere.
        </>
      ),
    },
    {
      name: "Neha G.",
      score: "GMAT 715",
      avatar: SabhyataPhoto,
      bgColor: "bg-violet-50/60",
      text: (
        <>
          The <strong className="font-bold text-foreground">DI module saved my GMAT</strong>. Nobody else takes Data Insights this seriously.
        </>
      ),
    },
    {
      name: "Riya S.",
      score: "GRE 328",
      avatar: ManyaPhoto,
      bgColor: "bg-blue-50/60",
      text: (
        <>
          They told me honestly that GRE was the smarter route for my MBA target. From diagnostic to <strong className="font-bold text-foreground">Columbia admit in 9 months</strong> — prep, essays and interviews all in one place.
        </>
      ),
    },
    {
      name: "Vikram T.",
      score: "GRE 319",
      avatar: Person2,
      bgColor: "bg-teal-50/60",
      text: (
        <>
          As a working professional the flexible tutoring slots were a lifesaver. Worth every rupee.
        </>
      ),
    },
  ];

  return (
    <div className="bg-slate-50/50 text-foreground min-h-screen">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/70 via-slate-50 to-white pt-[76px] md:pt-[84px] pb-24 text-slate-900 border-b border-slate-200/60">
        {/* Soft decorative glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(rgba(15,23,42,0.06) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>
        
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight text-slate-900 mb-6">
            Success stories
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mb-8">
            Real students, real score jumps, real admits — for MBA and MS alike. Here's what
            happens when prep is built on logic and accountability.
          </p>

          <button 
            onClick={() => setIsBookSessionOpen(true)}
            className="rounded-[14px] bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 hover:opacity-95 text-white font-bold px-8 py-4 shadow-lg shadow-indigo-500/20 transition duration-200"
          >
            Book a Free Demo
          </button>
        </div>
      </section>

      {/* Hear It From Them (Videos) */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/40" />
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">WATCH</span>
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground tracking-tight">
            Hear it from them
          </h2>
          
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Two-minute stories from students who made the jump. (10-second demo clips as placeholders.)
          </p>

          <div className="grid gap-8 md:grid-cols-2 max-w-[1000px] mx-auto text-left">
            {/* Video Card 1 */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-soft flex flex-col">
              <div className="aspect-video w-full bg-slate-950 overflow-hidden">
                <video
                  controls
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">Riya S. — GRE 302 → 328</h3>
                <p className="text-sm text-slate-500 mt-1">Columbia MBA admit • switched from GMAT to GRE with us</p>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-soft flex flex-col">
              <div className="aspect-video w-full bg-slate-950 overflow-hidden">
                <video
                  controls
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">Sahil K. — GMAT Focus 565 → 705</h3>
                <p className="text-sm text-slate-500 mt-1">ISB admit • working professional, weekend batch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Score Improvements (Two Opposite Direction Continuous Smooth Marquees) */}
      <section className="py-20 bg-slate-50/50 overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/40" />
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">RESULTS</span>
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground tracking-tight">
            Score improvements
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mt-4">
            See how our students improved their GMAT & GRE scores to secure top admits.
          </p>
        </div>

        {/* Global styles for the opposite direction marquees */}
        <style>{`
          @keyframes marquee-scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 20px)); }
          }
          @keyframes marquee-scroll-right {
            0% { transform: translateX(calc(-50% - 20px)); }
            100% { transform: translateX(0); }
          }
          .score-marquee-scroll-left {
            display: flex;
            gap: 40px;
            width: max-content;
            animation: marquee-scroll-left 50s linear infinite;
          }
          .score-marquee-scroll-right {
            display: flex;
            gap: 40px;
            width: max-content;
            animation: marquee-scroll-right 50s linear infinite;
          }
          .score-marquee-scroll-left:hover,
          .score-marquee-scroll-right:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Marquees Stack */}
        <div className="space-y-12 relative w-full overflow-hidden py-4 select-none">
          {/* Gradient fade overlay on left and right edges (desktop only) */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 via-slate-50/60 to-transparent z-10 pointer-events-none" />
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 via-slate-50/60 to-transparent z-10 pointer-events-none" />

          {/* ROW 1: GRE Score Improvements (Right to Left) */}
          <div className="space-y-6">
            <div className="flex justify-center items-center text-center px-4 pt-2">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-blue-200/80 bg-blue-50/90 px-6 py-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-[0.22em] text-blue-700 shadow-sm backdrop-blur-sm">
                <TrendingUp className="h-4 w-4 text-blue-600 stroke-[2.5]" />
                GRE Score Improvements
              </span>
            </div>
            <div className="w-full overflow-hidden">
              <div className="score-marquee-scroll-left">
                {/* Duplicate array once to enable a seamless infinite scroll loop */}
                {[...greScores, ...greScores].map((score, idx) => (
                  <div
                    key={`gre-${idx}`}
                    className="relative w-[280px] h-[340px] shrink-0 rounded-[28px] overflow-hidden shadow-lg border border-white/10 group cursor-pointer transition-all duration-300 hover:translate-y-[-6px] hover:shadow-xl"
                  >
                    {/* Full-bleed Photo Background */}
                    <div className="absolute inset-0 w-full h-full">
                      <img
                        src={score.avatar}
                        alt={score.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Dark bottom gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                    </div>

                    {/* Foreground Content */}
                    <div className="relative z-10 w-full h-full flex flex-col justify-end p-5 pb-6 text-center text-white">
                      <div className="space-y-3.5">
                        <div className="space-y-1">
                          <h4 className="text-lg font-bold tracking-wide text-white drop-shadow-sm">
                            {score.name}
                          </h4>
                          <p className="text-sm text-slate-300 font-medium tracking-wide">
                            {score.program}
                          </p>
                        </div>

                        {/* Highlighted score text */}
                        <div className="flex items-center justify-center gap-2 select-none font-display">
                          <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">{score.test}</span>
                          <span className="text-sm text-slate-300 font-semibold">{score.before}</span>
                          <span className="text-xs text-slate-400">→</span>
                          <span className="bg-blue-600 text-white font-extrabold text-base px-3.5 py-1 rounded-full shadow-md tracking-wider">
                            {score.after}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ROW 2: GMAT Score Improvements (Left to Right) */}
          <div className="space-y-6 pt-4">
            <div className="flex justify-center items-center text-center px-4">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-indigo-200/80 bg-indigo-50/90 px-6 py-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-[0.22em] text-indigo-700 shadow-sm backdrop-blur-sm">
                <TrendingUp className="h-4 w-4 text-indigo-600 stroke-[2.5]" />
                GMAT Score Improvements
              </span>
            </div>
            <div className="w-full overflow-hidden">
              <div className="score-marquee-scroll-right">
                {/* Duplicate array once to enable a seamless infinite scroll loop */}
                {[...gmatScores, ...gmatScores].map((score, idx) => (
                  <div
                    key={`gmat-${idx}`}
                    className="relative w-[280px] h-[340px] shrink-0 rounded-[28px] overflow-hidden shadow-lg border border-white/10 group cursor-pointer transition-all duration-300 hover:translate-y-[-6px] hover:shadow-xl"
                  >
                    {/* Full-bleed Photo Background */}
                    <div className="absolute inset-0 w-full h-full">
                      <img
                        src={score.avatar}
                        alt={score.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Dark bottom gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                    </div>

                    {/* Foreground Content */}
                    <div className="relative z-10 w-full h-full flex flex-col justify-end p-5 pb-6 text-center text-white">
                      <div className="space-y-3.5">
                        <div className="space-y-1">
                          <h4 className="text-lg font-bold tracking-wide text-white drop-shadow-sm">
                            {score.name}
                          </h4>
                          <p className="text-sm text-slate-300 font-medium tracking-wide">
                            {score.program}
                          </p>
                        </div>

                        {/* Highlighted score text */}
                        <div className="flex items-center justify-center gap-2 select-none font-display">
                          <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">{score.test}</span>
                          <span className="text-sm text-slate-300 font-semibold">{score.before}</span>
                          <span className="text-xs text-slate-400">→</span>
                          <span className="bg-blue-600 text-white font-extrabold text-base px-3.5 py-1 rounded-full shadow-md tracking-wider">
                            {score.after}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* In Their Own Words (Text Reviews Grid) */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/40" />
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">REVIEWS</span>
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground tracking-tight">
            In their own words
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12 text-left">
            {textTestimonials.map((item, idx) => (
              <div
                key={idx}
                className={`${item.bgColor} rounded-[24px] border border-slate-200/50 shadow-soft p-8 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition duration-300`}
              >
                <div>
                  {/* Blue Stars */}
                  <div className="flex gap-1 text-blue-600 text-lg mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 text-[15px] leading-relaxed mb-6 font-normal">
                    "{item.text}"
                  </p>
                </div>

                {/* User avatar and name info */}
                <div className="flex items-center gap-4 border-t border-slate-100 pt-5 mt-auto">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                    <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[15px]">{item.name}</h4>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{item.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <CustomFAQ faqs={testimonialsFaqs} title="Testimonials & Success FAQs" />
      <Footer />
      <BookSessionDialog open={isBookSessionOpen} onOpenChange={setIsBookSessionOpen} />
    </div>
  );
};
