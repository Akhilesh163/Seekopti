import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Coins, Wallet, TrendingUp, BookOpen, Briefcase, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import mbs1st from "@/assets/student_pics/mbs1st.jpg";
import mba2nd from "@/assets/student_pics/mba2nd.jpg";
import mbacost from "@/assets/student_pics/mbacost.jpg";
import mbascholarship from "@/assets/student_pics/mbascholarship.jpg";
import mbatestoptionalrecord from "@/assets/student_pics/mbatestoptionalrecord.jpg";
import mbafinance from "@/assets/student_pics/mbafinance.jpg";

const BlogsComponent: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);

  const baseCardClassName = "rounded-[28px] border border-slate-200/80 overflow-hidden flex flex-col transition-all duration-300 shadow-[0_20px_45px_rgba(15,23,42,0.08)] bg-gradient-to-br from-white via-slate-50/80 to-blue-50/60";
  const basePillClassName = "inline-flex w-fit rounded-full bg-gradient-to-r from-slate-700 to-slate-900 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-md";
  const baseOverlayClassName = "absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-slate-500/20";

  const initialBlogs = [
    {
      category: "MBA STRATEGY",
      title: "GRE vs GMAT for MBA in 2026: why applicants keep switching to GRE",
      description: "Same schools, shorter test, no Data Insights. The data behind the great GRE migration — and when the GMAT is still the right call.",
      icon: GraduationCap,
      image: mbs1st,
      meta: "Jul 8, 2026 • 9 min read",
      gradient: "from-[#0A192F] to-[#172A45]",
      cardClassName: "rounded-[28px] border-2 border-blue-200/80 overflow-hidden flex flex-col transition-all duration-300 shadow-[0_20px_45px_rgba(59,130,246,0.14)] bg-gradient-to-br from-blue-50/90 via-indigo-50/60 to-white",
      pillClassName: "inline-flex w-fit rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-md",
      overlayClassName: "absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-indigo-500/20",
    },
    {
      category: "MBA ROI",
      title: "Is an MBA abroad worth it? The honest ROI of ISB, M7 and INSEAD",
      description: "Salaries, opportunity cost, payback periods and the intangibles — a numbers-first look at whether the degree pays for itself.",
      icon: Coins,
      image: mba2nd,
      meta: "Jul 1, 2026 • 11 min read",
      gradient: "from-[#1E3A8A] to-[#3B82F6]",
    },
    {
      category: "MBA COSTS",
      title: "What an MBA really costs in 2026: ISB vs M7 vs Singapore vs Europe",
      description: "Tuition, living expenses, forex and loans — total cost of attendance compared across the schools Indians target most.",
      icon: Wallet,
      image: mbacost,
      meta: "Jun 24, 2026 • 10 min read",
      gradient: "from-[#2563EB] to-[#60A5FA]",
    },
    {
      category: "SCHOLARSHIPS",
      title: "Scholarship Math Explained",
      description: "Merit aid is score-driven. What each extra GRE/GMAT point is statistically worth in scholarship money.",
      icon: TrendingUp,
      image: mbascholarship,
      meta: "May 27, 2026 • 7 min read",
      gradient: "from-[#0F172A] to-[#1E293B]",
    },
    {
      category: "ADMISSIONS",
      title: "Test-optional trends, decoded",
      description: "Some programs went test-optional — yet median scores at top schools keep rising. What it means for your application.",
      icon: BookOpen,
      image: mbatestoptionalrecord,
      meta: "May 20, 2026 • 8 min read",
      gradient: "from-[#1D4ED8] to-[#2563EB]",
    },
    {
      category: "CAREERS",
      title: "Product, finance — and what pays",
      description: "Where ISB, M7 and European grads actually land, with median comp and visa realities for Indian applicants.",
      icon: Briefcase,
      image: mbafinance,
      meta: "May 13, 2026 • 9 min read",
      gradient: "from-[#3B82F6] to-[#1D4ED8]",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/80 via-indigo-50/70 to-violet-50/80 pt-[76px] md:pt-[84px] pb-24 text-slate-900 border-b border-indigo-200/60">
        {/* Soft decorative glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/15 blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-violet-500/15 blur-[100px] pointer-events-none" />
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

        <div className="max-w-[1200px] mx-auto px-6 text-left relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.15] tracking-tight mb-6 text-slate-900"
            >
              The <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Seek Your Y Blog</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed mb-8"
            >
              Strategy deep-dives, MBA cost & ROI breakdowns, study plans and admissions trends — written by the people who teach it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="inline-flex items-center justify-center rounded-[14px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-500/25 transition hover:opacity-95 duration-200"
              >
                Book a Free Session
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. BLOG CARDS GRID SECTION */}
      <section className="py-20 px-6 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(167,139,250,0.14),transparent_26%),linear-gradient(135deg,#f8fbff_0%,#fdfcff_50%,#eef2ff_100%)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initialBlogs.map((blog, idx) => {
              const Icon = blog.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8, scale: 1.01, boxShadow: "0 30px 60px -20px rgba(99, 102, 241, 0.25)" }}
                  className={blog.cardClassName ?? baseCardClassName}
                >
                  {/* Blog Header Image (Gradient box with Image + Icon overlay) */}
                  <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-tr ${blog.gradient}`}>
                    <img src={blog.image} alt={blog.title} className="h-full w-full object-cover scale-105 transition duration-500 group-hover:scale-110" />
                    <div className={blog.overlayClassName ?? baseOverlayClassName} />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.26),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(167,139,250,0.24),transparent_28%)]" />
                  </div>

                  {/* Blog Details */}
                  <div className="p-7 flex flex-col flex-1 justify-between gap-4">
                    <div className="space-y-3">
                      <span className={blog.pillClassName ?? basePillClassName}>
                        {blog.category}
                      </span>
                      <h3 className="text-xl font-black font-display text-slate-950 leading-snug hover:text-blue-700 transition duration-200">
                        {blog.title}
                      </h3>
                      <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                        {blog.description}
                      </p>
                    </div>

                    <div className="text-xs text-slate-500 font-semibold pt-3 border-t border-slate-200/80">
                      {blog.meta}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-14">
            <button 
              className="inline-flex items-center justify-center rounded-2xl border border-indigo-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-8 py-4 font-bold text-white shadow-[0_16px_35px_rgba(79,70,229,0.24)] hover:opacity-95 transition duration-200"
            >
              Load more articles
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* BOOK DEMO DIALOG */}
      <BookSessionDialog open={isBookSessionOpen} onOpenChange={setIsBookSessionOpen} />
    </div>
  );
};

export default BlogsComponent;
