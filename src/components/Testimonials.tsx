import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import priyaImage from "@/assets/person1.jpg";
import vikramImage from "@/assets/person2.jpg";
import praffulImage from "@/assets/student_pics/Prafful.jpeg";
import balagopalImage from "@/assets/student_pics/Balagopal Jayakumar.jpeg";
import sabhyataImage from "@/assets/student_pics/Sabhyata.jpeg";
import manyaImage from "@/assets/student_pics/Manya.jpeg";

const testimonials = [
  {
    name: "Priya M.",
    role: "GRE 331",
    image: priyaImage,
    quote:
      "I'd done two other courses before this. The difference is the way concepts are taught — as logic, not formulas. Quant went from my weakness to a 168.",
    accent: "purple",
  },
  {
    name: "Sahil K.",
    role: "GMAT 705",
    image: praffulImage,
    quote:
      "Aman personally reviewed my error log every week during tutoring. That level of attention is rare anywhere.",
    accent: "blue",
  },
  {
    name: "Dev J.",
    role: "GRE 334",
    image: balagopalImage,
    quote: "The DI module saved my GMAT. Nobody else takes Data Insights this seriously.",
    accent: "emerald",
  },
  {
    name: "Neha G.",
    role: "GMAT 715",
    image: sabhyataImage,
    quote:
      "They told me honestly that GRE was the smarter route for my MBA target. From diagnostic to Columbia admit in 9 months — prep, essays and interviews all in one place.",
    accent: "amber",
  },
  {
    name: "Riya S.",
    role: "GRE 328",
    image: manyaImage,
    quote: "As a working professional the flexible tutoring slots were a lifesaver. Worth every rupee.",
    accent: "indigo",
  },
  {
    name: "Vikram T.",
    role: "GRE 319",
    image: vikramImage,
    quote: "The clarity, structure and personal support made the whole prep journey feel achievable and focused.",
    accent: "rose",
  },
  {
    name: "Annant Mehta",
    role: "GRE 320 → MS, Texas A&M University, USA",
    image: "/assets/gre-asset/girl.webp",
    quote:
      "The tailored approach and insightful strategies provided by the team were absolutely crucial. I achieved 170 in Quant and 150 in Verbal — and I owe a lot of that to the focused preparation structure at Seek Your Y. I highly recommend this coaching to anyone serious about graduate school.",
    accent: "blue",
  },
  {
    name: "Vishnu Singh",
    role: "GMAT 730 → Paris School of Business",
    image: "/assets/gre-asset/girl.webp",
    quote:
      "Working closely with Amit Kumar as my Verbal Faculty was instrumental in achieving a remarkable GMAT score. His expertise and insightful strategies were invaluable throughout my preparation journey. I highly recommend his guidance.",
    accent: "indigo",
  },
  {
    name: "Saransh Walia",
    role: "GRE 329 → Alberta University of Arts",
    image: "/assets/gre-asset/girl.webp",
    quote:
      "Thanks to Amit Kumar's exceptional guidance as my GRE Verbal Faculty, I achieved 329. From day one, his approachable demeanor and genuine interest in my progress created an environment where I actually wanted to study harder.",
    accent: "purple",
  },
  {
    name: "Devshri Sharma",
    role: "GMAT 720 → INSEAD",
    image: "/assets/gre-asset/girl.webp",
    quote:
      "Studying under the guidance of Amit Kumar was an invaluable experience. I scored 720, surpassing my own expectations, thanks to his effective teaching methods and insightful strategies.",
    accent: "blue",
  },
  {
    name: "Sneha Reddy",
    role: "IELTS 8.5 Band",
    image: "/assets/gre-asset/girl.webp",
    quote:
      "The personalized attention I received during my IELTS preparation was unparalleled. The faculty's deep understanding of exam patterns and their ability to tailor lessons to my specific weaknesses in Writing and Speaking were the difference-maker.",
    accent: "emerald",
  },
  {
    name: "Arjun Mehta",
    role: "IELTS 8.0 Band",
    image: "/assets/gre-asset/girl.webp",
    quote:
      "Achieving an 8.0 band in IELTS felt like a distant dream until I joined Seek Your Y. The intensive training sessions and focus on nuanced vocabulary for the Writing section made all the difference.",
    accent: "amber",
  },
  {
    name: "Rahul Verma",
    role: "IELTS 8.0 Band (from 6.5)",
    image: "/assets/gre-asset/girl.webp",
    quote:
      "The mock test series for IELTS at Seek Your Y was a game-changer. It perfectly simulated the pressure of the actual exam. The faculty's feedback on my Speaking module was specific and actionable — I jumped from 6.5 to 8.0.",
    accent: "rose",
  },
  {
    name: "Keshav Goyal",
    role: "SAT → Top US Undergraduate",
    image: "/assets/gre-asset/girl.webp",
    quote:
      "I completed my entire SAT syllabus in just 20 days under Mr. Pradeep's guidance. The clarity and depth of instruction were exactly what I needed to excel.",
    accent: "blue",
  },
  {
    name: "Mehakjot Kaur Massoun",
    role: "SAT → Top-50 US College",
    image: "/assets/gre-asset/girl.webp",
    quote:
      "As someone who knew nothing about the process of going abroad — and never thought it was a possibility for me — getting into a top-50 US college felt impossible. Seek Your Y changed that, step by step.",
    accent: "indigo",
  },
];

const accentStyles: Record<
  string,
  {
    card: string;
    overlay: string;
    glowTop: string;
    glowBottom: string;
    quote: string;
    badge: string;
  }
> = {
  purple: {
    card: "border-2 border-purple-200/80 bg-gradient-to-br from-purple-50/95 via-fuchsia-50/85 to-indigo-50/90 shadow-[0_18px_45px_rgba(139,92,246,0.14)]",
    overlay: "from-purple-500/10 via-fuchsia-500/10 to-indigo-500/10",
    glowTop: "bg-purple-400/25",
    glowBottom: "bg-indigo-400/20",
    quote: "text-purple-500/20",
    badge: "bg-purple-100 text-purple-700",
  },
  blue: {
    card: "border-2 border-sky-200/80 bg-gradient-to-br from-sky-50/95 via-blue-50/85 to-cyan-50/90 shadow-[0_18px_45px_rgba(56,189,248,0.14)]",
    overlay: "from-blue-500/10 via-cyan-500/10 to-sky-500/10",
    glowTop: "bg-blue-400/25",
    glowBottom: "bg-cyan-400/20",
    quote: "text-blue-500/20",
    badge: "bg-sky-100 text-sky-700",
  },
  emerald: {
    card: "border-2 border-emerald-200/80 bg-gradient-to-br from-emerald-50/95 via-teal-50/85 to-cyan-50/90 shadow-[0_18px_45px_rgba(16,185,129,0.14)]",
    overlay: "from-emerald-500/10 via-teal-500/10 to-cyan-500/10",
    glowTop: "bg-emerald-400/25",
    glowBottom: "bg-teal-400/20",
    quote: "text-emerald-500/20",
    badge: "bg-emerald-100 text-emerald-700",
  },
  amber: {
    card: "border-2 border-amber-200/80 bg-gradient-to-br from-amber-50/95 via-orange-50/85 to-yellow-50/90 shadow-[0_18px_45px_rgba(251,191,36,0.14)]",
    overlay: "from-amber-500/10 via-orange-500/10 to-yellow-500/10",
    glowTop: "bg-amber-400/25",
    glowBottom: "bg-orange-400/20",
    quote: "text-amber-500/20",
    badge: "bg-amber-100 text-amber-700",
  },
  indigo: {
    card: "border-2 border-indigo-200/80 bg-gradient-to-br from-indigo-50/95 via-blue-50/85 to-sky-50/90 shadow-[0_18px_45px_rgba(79,70,229,0.14)]",
    overlay: "from-indigo-500/10 via-violet-500/10 to-blue-500/10",
    glowTop: "bg-indigo-400/25",
    glowBottom: "bg-violet-400/20",
    quote: "text-indigo-500/20",
    badge: "bg-indigo-100 text-indigo-700",
  },
  rose: {
    card: "border-2 border-rose-200/80 bg-gradient-to-br from-rose-50/95 via-fuchsia-50/85 to-violet-50/90 shadow-[0_18px_45px_rgba(236,72,153,0.14)]",
    overlay: "from-rose-500/10 via-pink-500/10 to-violet-500/10",
    glowTop: "bg-rose-400/25",
    glowBottom: "bg-pink-400/20",
    quote: "text-rose-500/20",
    badge: "bg-rose-100 text-rose-700",
  },
};

export default function Testimonials(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(2);

  const prev = () => setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  const next = () => setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));

  return (
    <section
      id="testimonials"
      className="relative min-h-[680px] overflow-hidden py-16 sm:py-20 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.2),transparent_22%),linear-gradient(180deg,#f8fcff_0%,#eef6ff_55%,#f8fbff_100%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.95),rgba(240,249,255,0.92),rgba(255,255,255,0.96))]" />
      <div className="pointer-events-none absolute inset-x-0 top-20 hidden lg:block">
        <div className="mx-auto h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-10 hidden lg:block">
        <div className="mx-auto h-52 w-52 rounded-full bg-sky-300/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-18">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm md:text-base font-semibold uppercase tracking-[0.18em] shadow-lg shadow-blue-500/20">
            <Sparkles className="w-4 h-4 text-white stroke-[2.5]" />
            <span>What our students say</span>
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            The most colorful reviews, built for clarity and trust.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg text-slate-600 leading-8">
            Every card blends soft pastel glow, bold typography, and a vivid accent palette for a premium testimonial experience.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[40px]">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(${-activeIndex * 100}%)` }}>
              {testimonials.map((person) => {
                const accent = accentStyles[person.accent] ?? accentStyles.blue;
                return (
                  <article key={person.name} className="flex-[0_0_100%] min-w-0 px-4 py-4 sm:px-8">
                    <div className={`relative overflow-hidden rounded-[32px] p-8 sm:p-10 shadow-[0_24px_60px_rgba(15,23,42,0.1)] hover:shadow-[0_28px_70px_rgba(37,99,235,0.16)] transition-all duration-500 ${accent.card}`}>
                      <div className={`absolute inset-0 rounded-[32px] bg-gradient-to-br ${accent.overlay}`} />
                      <div className={`absolute -top-10 -right-10 h-36 w-36 rounded-full blur-3xl ${accent.glowTop}`} />
                      <div className={`absolute -bottom-10 -left-10 h-28 w-28 rounded-full blur-3xl ${accent.glowBottom}`} />
                      <div className="relative z-10">
                        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8 mb-8">
                          <div className="flex items-center gap-4">
                            <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-white/90 bg-white shadow-xl shadow-slate-200/40">
                              <img src={person.image} alt={person.name} className="h-full w-full object-cover" />
                            </div>
                            <div>
                              <p className="text-lg font-bold text-slate-900">{person.name}</p>
                              <p className="mt-1 text-sm font-semibold tracking-[0.02em] text-slate-600">{person.role}</p>
                            </div>
                          </div>
                          <span className={`inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase ${accent.badge}`}>
                            Top review
                          </span>
                        </div>

                        <div className="mb-8">
                          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-200/60">
                            <span className="text-blue-600">★★★★★</span>
                            <span>5.0 rating</span>
                          </div>
                          <p className="text-base sm:text-lg leading-8 text-slate-700 italic">“{person.quote}”</p>
                        </div>

                        <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                          <span className="rounded-2xl bg-white/80 px-4 py-2 shadow-sm">Study plan clarity</span>
                          <span className="rounded-2xl bg-white/80 px-4 py-2 shadow-sm">Personal coaching</span>
                          <span className="rounded-2xl bg-white/80 px-4 py-2 shadow-sm">Result-driven prep</span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            className="hidden md:flex absolute top-1/2 -left-4 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/90 border border-blue-100 text-blue-600 shadow-sm transition-transform duration-300 hover:-translate-x-1 hover:bg-blue-600 hover:text-white lg:-left-8"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={next}
            className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/90 border border-blue-100 text-blue-600 shadow-sm transition-transform duration-300 hover:translate-x-1 hover:bg-blue-600 hover:text-white lg:-right-8"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-10 bg-blue-600" : "w-2 bg-slate-300 hover:bg-blue-300"
              }`}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(56,189,248,0.2)]"
          >
            Book a free consultation
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

