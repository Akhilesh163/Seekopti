import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/BrandLogo";
import { BookSessionDialog } from "./BookSessionDialog";
import {
  Lightbulb,
  Target,
  LineChart,
  Video,
  Users,
  Sparkles,
  Calendar,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

/* ─── Content Data ──────────────────────────────────────────────── */
interface TimelineItem {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
  cardActiveBg: string;
  cardInactiveBg: string;
  accentBorder: string;
  tagBg: string;
  visual: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    title: "Conceptual Clarity",
    description:
      "We break down every complex topic into intuitive frameworks so that concepts finally click. No rote memorization — only deep understanding that lasts.",
    icon: Lightbulb,
    gradient: "from-blue-600 to-indigo-600",
    iconColor: "bg-blue-50 text-blue-600 border-blue-200/50",
    cardActiveBg: "bg-white border-2 border-blue-500 shadow-xl shadow-blue-500/15",
    cardInactiveBg: "bg-white border-2 border-blue-200/90 hover:border-blue-400",
    accentBorder: "bg-gradient-to-b from-blue-500 to-indigo-600",
    tagBg: "bg-blue-50 text-blue-700 border border-blue-200 shadow-xs",
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-transparent flex items-center justify-center p-8">
        <div className="space-y-5 w-full max-w-[340px]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-foreground">Concept Maps</span>
          </div>
          {["Number Properties", "Algebra & Equations", "Geometry Fundamentals", "Data Interpretation"].map((topic, i) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl px-4 py-3 shadow-sm"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
              <span className="text-base font-medium text-foreground">{topic}</span>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Strategic Problem-Solving",
    description:
      "Learn pattern recognition and smart shortcuts tailored for every question type. Approach each problem with confidence and a clear plan of attack.",
    icon: Target,
    gradient: "from-indigo-600 to-violet-600",
    iconColor: "bg-indigo-50 text-indigo-600 border-indigo-200/50",
    cardActiveBg: "bg-white border-2 border-indigo-500 shadow-xl shadow-indigo-500/15",
    cardInactiveBg: "bg-white border-2 border-indigo-200/90 hover:border-indigo-400",
    accentBorder: "bg-gradient-to-b from-indigo-500 to-violet-600",
    tagBg: "bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-xs",
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-indigo-600/10 via-violet-600/5 to-transparent flex items-center justify-center p-8">
        <div className="space-y-4 w-full max-w-[340px]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-foreground">Strategy Framework</span>
          </div>
          {[
            { label: "Identify Pattern", pct: "95%" },
            { label: "Apply Framework", pct: "88%" },
            { label: "Verify & Optimize", pct: "92%" },
          ].map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
              className="bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-xl px-4 py-3 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-base font-medium text-foreground">{step.label}</span>
                <span className="text-base font-bold text-indigo-600">{step.pct}</span>
              </div>
              <div className="h-1.5 bg-indigo-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: step.pct }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.6, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Score-Driven Results",
    description:
      "Practice with purpose. Our structured drills and analytics help you build consistency that shows up in your actual test scores — no more random plateaus.",
    icon: LineChart,
    gradient: "from-emerald-500 to-teal-600",
    iconColor: "bg-emerald-50 text-emerald-600 border-emerald-200/50",
    cardActiveBg: "bg-white border-2 border-emerald-500 shadow-xl shadow-emerald-500/15",
    cardInactiveBg: "bg-white border-2 border-emerald-200/90 hover:border-emerald-400",
    accentBorder: "bg-gradient-to-b from-emerald-500 to-teal-600",
    tagBg: "bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs",
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-emerald-600/10 via-teal-600/5 to-transparent flex items-center justify-center p-8">
        <div className="space-y-4 w-full max-w-[340px]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
              <LineChart className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-foreground">Score Progression</span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-xl p-4 shadow-sm">
            <div className="flex items-end justify-between gap-2 h-28">
              {[40, 52, 58, 65, 72, 80, 88, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                  className="flex-1 bg-gradient-to-t from-emerald-500 to-teal-400 rounded-t-md min-w-[8px]"
                />
              ))}
            </div>
            <div className="flex justify-between mt-3 text-muted-foreground" style={{ fontSize: "0.85rem" }}>
              <span>Week 1</span>
              <span>Week 8</span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1 bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-xl px-4 py-3 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-emerald-600">+120</div>
              <div className="text-muted-foreground" style={{ fontSize: "0.85rem" }}>Avg Improvement</div>
            </div>
            <div className="flex-1 bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-xl px-4 py-3 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-emerald-600">80%</div>
              <div className="text-muted-foreground" style={{ fontSize: "0.85rem" }}>Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Expert-Led Live Classes",
    description:
      "Interactive, scheduled sessions with real-time doubt solving, peer learning, and accountability. Never feel lost — our mentors guide you every step.",
    icon: Video,
    gradient: "from-rose-500 to-pink-600",
    iconColor: "bg-rose-50 text-rose-600 border-rose-200/50",
    cardActiveBg: "bg-white border-2 border-rose-500 shadow-xl shadow-rose-500/15",
    cardInactiveBg: "bg-white border-2 border-rose-200/90 hover:border-rose-400",
    accentBorder: "bg-gradient-to-b from-rose-500 to-pink-600",
    tagBg: "bg-rose-50 text-rose-700 border-rose-200 shadow-xs",
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-rose-600/10 via-pink-600/5 to-transparent flex items-center justify-center p-8">
        <div className="space-y-4 w-full max-w-[340px]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-lg">
              <Video className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-foreground">Live Session</span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-rose-100 rounded-xl p-5 shadow-sm relative overflow-hidden">
            <div className="absolute top-3 right-3 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-rose-600 font-bold" style={{ fontSize: "0.85rem" }}>LIVE</span>
            </div>
            <div className="space-y-3 mt-2">
              <div className="h-3 bg-rose-100 rounded-full w-3/4" />
              <div className="h-3 bg-rose-100 rounded-full w-1/2" />
              <div className="flex items-center gap-2 mt-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-300 to-pink-400 border-2 border-white shadow-sm -ml-2 first:ml-0" />
                ))}
                <span className="text-muted-foreground ml-1" style={{ fontSize: "0.85rem" }}>+24 students</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1 bg-white/80 backdrop-blur-sm border border-rose-100 rounded-xl px-3 py-3 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-rose-600">100+</div>
              <div className="text-muted-foreground" style={{ fontSize: "0.85rem" }}>Hours Live</div>
            </div>
            <div className="flex-1 bg-white/80 backdrop-blur-sm border border-rose-100 rounded-xl px-3 py-3 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-rose-600">Daily</div>
              <div className="text-muted-foreground" style={{ fontSize: "0.85rem" }}>Sessions</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "1-on-1 Private Mentoring",
    description:
      "Personalized attention tailored directly to your score goals, weak areas, and timeline. Work with a dedicated mentor who knows your journey inside out.",
    icon: Users,
    gradient: "from-amber-500 to-orange-600",
    iconColor: "bg-amber-50 text-amber-600 border-amber-200/50",
    cardActiveBg: "bg-white border-2 border-amber-500 shadow-xl shadow-amber-500/15",
    cardInactiveBg: "bg-white border-2 border-amber-200/90 hover:border-amber-400",
    accentBorder: "bg-gradient-to-b from-amber-500 to-orange-600",
    tagBg: "bg-amber-50 text-amber-700 border-amber-200 shadow-xs",
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-amber-600/10 via-orange-600/5 to-transparent flex items-center justify-center p-8">
        <div className="space-y-4 w-full max-w-[340px]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-foreground">Your Personal Plan</span>
          </div>
          {[
            { label: "Diagnostic Assessment", status: "✓", color: "text-emerald-600" },
            { label: "Custom Study Plan", status: "✓", color: "text-emerald-600" },
            { label: "Weekly 1-on-1 Sessions", status: "Active", color: "text-amber-600" },
            { label: "Score Goal: 330+", status: "→", color: "text-amber-600" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center justify-between bg-white/80 backdrop-blur-sm border border-amber-100 rounded-xl px-4 py-3 shadow-sm"
            >
              <span className="text-base font-medium text-foreground">{item.label}</span>
              <span className={`font-bold ${item.color}`} style={{ fontSize: "0.9rem" }}>{item.status}</span>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
];

/* ─── Main Section Component ────────────────────────────────────── */
export const MethodTimeline: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isHandingOff = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardElements = container.querySelectorAll(".timeline-card");
      if (cardElements.length === 0) return;

      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;

      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const maxScroll = scrollHeight - clientHeight;

      if (scrollTop >= maxScroll - 10) {
        setActiveCard(cardElements.length - 1);
        return;
      }

      let closestIndex = 0;
      let minDistance = Infinity;

      cardElements.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const distance = Math.abs(cardRect.top - containerTop - 80);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCard(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // ── Scroll handoff: when inner container is at bottom/top, pass scroll to page ──
    const handleWheel = (e: WheelEvent) => {
      const scrollTop = container.scrollTop;
      const maxScroll = container.scrollHeight - container.clientHeight;
      const atBottom = scrollTop >= maxScroll - 2;
      const atTop = scrollTop <= 2;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      if ((atBottom && scrollingDown) || (atTop && scrollingUp)) {
        // Prevent inner container from consuming the event
        e.preventDefault();
        if (isHandingOff.current) return;
        isHandingOff.current = true;
        setTimeout(() => { isHandingOff.current = false; }, 800);
        window.scrollBy({ top: e.deltaY * 3, behavior: "smooth" });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-background via-blue-50/20 to-indigo-50/20 dark:from-background dark:via-blue-950/10 dark:to-background relative overflow-hidden" id="methodology">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-600 text-base md:text-lg font-extrabold uppercase tracking-[0.14em] shadow-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600 stroke-[2.5]" />
            <span>OUR METHODOLOGY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-3xl md:text-5xl font-extrabold font-display text-foreground leading-[1.1] tracking-tight mb-5"
          >
            How We Take You From{" "}
            <span className="text-primary">Confused</span> to{" "}
            <span className="text-primary">Confident</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-muted-foreground leading-relaxed"
            style={{ fontSize: "20px" }}
          >
            Our proven system builds clarity, strategy, and results — step by step.
          </motion.p>
        </div>

        {/* Sticky Scroll Container - DESKTOP ONLY */}
        <div
          ref={containerRef}
          className="hidden lg:flex method-timeline-container relative justify-between gap-8 overflow-y-auto rounded-[32px] border border-border/80 bg-[#E0EFF2] backdrop-blur-md shadow-elevated p-4"
          style={{ height: "42rem" }}
        >
          {/* Custom scrollbar styling */}
          <style>{`
            .method-timeline-container::-webkit-scrollbar { width: 6px; }
            .method-timeline-container::-webkit-scrollbar-track { background: transparent; }
            .method-timeline-container::-webkit-scrollbar-thumb { background: hsl(var(--border)); border-radius: 999px; }
            .method-timeline-container::-webkit-scrollbar-thumb:hover { background: hsl(var(--primary) / 0.3); }
          `}</style>

          {/* LEFT SIDE: Colorful Formatted Cards */}
          <div className="relative flex-1 px-6 py-8">
            {/* Vertical timeline line */}
            <div className="absolute left-[2.25rem] top-10 bottom-10 w-0.5 bg-border/60 z-0" />

            {timelineData.map((item, index) => {
              const isActive = activeCard === index;
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="timeline-card relative pl-14 my-10 first:mt-0 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[1.35rem] top-6 z-10">
                    <motion.div
                      animate={{
                        scale: isActive ? 1.2 : 0.8,
                        opacity: isActive ? 1 : 0.6,
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={cn(
                        "w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-sm",
                        isActive
                          ? "border-primary bg-primary shadow-md shadow-primary/40"
                          : "border-border bg-background"
                      )}
                    >
                      <div
                        className={cn(
                          "w-2.5 h-2.5 rounded-full transition-colors duration-300",
                          isActive ? "bg-white" : "bg-muted-foreground/40"
                        )}
                      />
                    </motion.div>
                  </div>

                  {/* Formatted Colorful Left Card */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.02 : 0.98,
                      opacity: isActive ? 1 : 0.9,
                      y: isActive ? 0 : 4,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className={cn(
                      "relative rounded-2xl border p-6 text-left transition-all duration-300 overflow-hidden backdrop-blur-sm shadow-sm hover:shadow-md hover:scale-[1.01]",
                      isActive ? item.cardActiveBg : item.cardInactiveBg
                    )}
                  >
                    {/* Left Accent Bar */}
                    <div
                      className={cn(
                        "absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl transition-opacity duration-300",
                        item.accentBorder,
                        isActive ? "opacity-100" : "opacity-40"
                      )}
                    />

                    {/* Card Header: Icon, Step Tag & Title */}
                    <div className="flex items-center gap-3.5 mb-3">
                      <div
                        className={cn(
                          "w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-md transition-all duration-300 text-white bg-gradient-to-br",
                          item.gradient
                        )}
                      >
                        <Icon className="w-5.5 h-5.5 stroke-[2.2]" />
                      </div>
                      <div>
                        <span className={cn(
                          "text-[11px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full border inline-block mb-1 shadow-xs",
                          item.tagBg
                        )}>
                          STEP 0{index + 1}
                        </span>
                        <h3 className="text-2xl md:text-[25px] font-black text-slate-950 dark:text-slate-950 text-left leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Description - Grey Text (+20% size = 19px font-medium) */}
                    <p className="text-lg md:text-[19px] font-medium text-slate-600 dark:text-slate-600 leading-relaxed text-left max-w-xl mt-2">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
            {/* Spacer at bottom */}
            <div className="h-[28rem]" />
          </div>

          {/* RIGHT SIDE: Sticky visual panel */}
          <div className="sticky top-0 hidden lg:flex items-center justify-center w-[400px] xl:w-[440px] shrink-0 p-6">
            <div className="w-full h-[32rem] rounded-[28px] border border-border/80 bg-background overflow-hidden shadow-soft relative">
              {/* Logo watermark */}
              <div className="absolute top-4 right-4 z-20 opacity-30">
                <BrandLogo size="nav" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  {timelineData[activeCard].visual}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW (lg:hidden): Full-width stacked methodology cards */}
        <div className="lg:hidden mt-8 space-y-6 bg-[#E0EFF2] rounded-[32px] p-4 sm:p-6 border border-border/80">
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={cn(
                  "border rounded-[24px] overflow-hidden shadow-soft p-5 sm:p-6 text-left relative",
                  item.cardActiveBg
                )}
              >
                {/* Accent Bar */}
                <div className={cn("absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl", item.accentBorder)} />

                {/* Header: Step Pill & Title */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div
                    className={cn(
                      "w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-md text-white bg-gradient-to-br",
                      item.gradient
                    )}
                  >
                    <Icon className="w-5.5 h-5.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className={cn(
                      "text-[11px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full border inline-block mb-1 shadow-xs",
                      item.tagBg
                    )}>
                      STEP 0{index + 1}
                    </span>
                    <h3 className="text-2xl md:text-[25px] font-black text-slate-950 dark:text-slate-950 text-left">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg md:text-[19px] font-medium text-slate-600 dark:text-slate-600 leading-relaxed text-left mb-5">
                  {item.description}
                </p>

                {/* Graphic Visual */}
                <div className="w-full rounded-2xl border border-border/60 bg-background overflow-hidden min-h-[220px] flex items-center justify-center p-2">
                  <div className="w-full max-w-[340px] flex items-center justify-center">
                    {item.visual}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center flex justify-center z-10 relative">
          <button
            onClick={() => setIsBookSessionOpen(true)}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-primary text-primary-foreground font-extrabold text-base md:text-lg shadow-lg shadow-blue-500/20 hover:bg-primary/90 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-white" />
            <span>Book a Session</span>
            <ArrowRight className="w-5 h-5 text-white/90" />
          </button>
        </div>
      </div>

      <BookSessionDialog
        open={isBookSessionOpen}
        onOpenChange={setIsBookSessionOpen}
        title="Book a Session"
        description="Select your target exam and fill in your details to book a consultation with Aman."
      />
    </section>
  );
};
