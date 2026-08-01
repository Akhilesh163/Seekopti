import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import priyaImage from "@/assets/person1.jpg";
import vikramImage from "@/assets/person2.jpg";
import praffulImage from "@/assets/student_pics/testimonial1.avif";
import balagopalImage from "@/assets/student_pics/testimonial2.avif";
import sabhyataImage from "@/assets/student_pics/testimonial3.avif";
import manyaImage from "@/assets/student_pics/testimonial4.avif";

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
    card: "border border-white/40 bg-gradient-to-br from-purple-300/95 via-fuchsia-200/95 to-indigo-300/95 shadow-[0_22px_70px_rgba(147,51,234,0.32)]",
    overlay: "from-purple-700/30 via-fuchsia-700/25 to-indigo-700/30",
    glowTop: "bg-purple-600/60",
    glowBottom: "bg-indigo-600/50",
    quote: "text-purple-500/20",
    badge: "bg-purple-200 text-purple-900",
    stars: "bg-purple-100/95 text-purple-800 border border-purple-200/90",
  },
  blue: {
    card: "border border-white/40 bg-gradient-to-br from-sky-300/95 via-blue-200/95 to-cyan-300/95 shadow-[0_22px_70px_rgba(14,165,233,0.32)]",
    overlay: "from-blue-700/30 via-cyan-700/25 to-sky-700/30",
    glowTop: "bg-blue-600/60",
    glowBottom: "bg-cyan-600/50",
    quote: "text-blue-500/20",
    badge: "bg-sky-200 text-sky-900",
    stars: "bg-sky-100/95 text-sky-800 border border-sky-200/90",
  },
  emerald: {
    card: "border border-white/40 bg-gradient-to-br from-emerald-300/95 via-teal-200/95 to-cyan-300/95 shadow-[0_22px_70px_rgba(5,150,105,0.32)]",
    overlay: "from-emerald-700/30 via-teal-700/25 to-cyan-700/30",
    glowTop: "bg-emerald-600/60",
    glowBottom: "bg-teal-600/50",
    quote: "text-emerald-500/20",
    badge: "bg-emerald-200 text-emerald-900",
    stars: "bg-emerald-100/95 text-emerald-800 border border-emerald-200/90",
  },
  amber: {
    card: "border border-white/40 bg-gradient-to-br from-amber-300/95 via-orange-200/95 to-yellow-300/95 shadow-[0_22px_70px_rgba(245,158,11,0.32)]",
    overlay: "from-amber-700/30 via-orange-700/25 to-yellow-700/30",
    glowTop: "bg-amber-600/60",
    glowBottom: "bg-orange-600/50",
    quote: "text-amber-500/20",
    badge: "bg-amber-200 text-amber-900",
    stars: "bg-amber-100/95 text-amber-800 border border-amber-200/90",
  },
  indigo: {
    card: "border border-white/40 bg-gradient-to-br from-indigo-300/95 via-blue-200/95 to-sky-300/95 shadow-[0_22px_70px_rgba(67,56,202,0.32)]",
    overlay: "from-indigo-700/30 via-violet-700/25 to-blue-700/30",
    glowTop: "bg-indigo-600/60",
    glowBottom: "bg-violet-600/50",
    quote: "text-indigo-500/20",
    badge: "bg-indigo-200 text-indigo-900",
    stars: "bg-indigo-100/95 text-indigo-800 border border-indigo-200/90",
  },
  rose: {
    card: "border border-white/40 bg-gradient-to-br from-rose-300/95 via-fuchsia-200/95 to-violet-300/95 shadow-[0_22px_70px_rgba(219,39,119,0.32)]",
    overlay: "from-rose-700/30 via-pink-700/25 to-violet-700/30",
    glowTop: "bg-rose-600/60",
    glowBottom: "bg-pink-600/50",
    quote: "text-rose-500/20",
    badge: "bg-rose-200 text-rose-900",
    stars: "bg-rose-100/95 text-rose-800 border border-rose-200/90",
  },
};

export default function Testimonials(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(2);

  const prev = () => setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  const next = () => setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));

  return (
    <section
      id="testimonials"
      className="relative min-h-[680px] overflow-hidden py-16 sm:py-20 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.3),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.26),transparent_20%),linear-gradient(180deg,#f4faff_0%,#e7f4ff_55%,#f7fbff_100%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.9),rgba(240,249,255,0.95),rgba(255,255,255,0.92))]" />
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
            <span>Success stories</span>
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Real students. Real score jumps. Real admits.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg text-slate-600 leading-8">
            Real students, real score jumps, real admits — for MBA and MS alike. Here’s what happens when prep is built on logic and accountability.
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
                          <div className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-sm shadow-slate-200/60 ${accent.stars}`}>
                            <span className="text-current">★★★★★</span>
                            <span>5.0 rating</span>
                          </div>
                          <p className="text-base sm:text-lg leading-8 text-slate-700 italic">“{person.quote}”</p>
                        </div>

                        <div className="flex flex-wrap gap-3 text-sm text-slate-700 font-medium">
                          <span className="rounded-2xl bg-white/70 px-4 py-2 shadow-md">Study plan clarity</span>
                          <span className="rounded-2xl bg-white/70 px-4 py-2 shadow-md">Personal coaching</span>
                          <span className="rounded-2xl bg-white/70 px-4 py-2 shadow-md">Result-driven prep</span>
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
            Book a Free Demo
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

