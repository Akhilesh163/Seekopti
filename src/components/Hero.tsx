import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Play, Users, ShieldCheck, GraduationCap, TrendingUp } from "lucide-react";
import { StatCounter } from "./StatCounter";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import mentorImage from "@/assets/mentor.webp";
import carouselImg1 from "@/assets/student_pics/Arjun M S.jpeg";
import carouselImg2 from "@/assets/student_pics/Prafful.jpeg";
import carouselImg3 from "@/assets/student_pics/Sabhyata.jpeg";
import carouselImg4 from "@/assets/student_pics/Balagopal Jayakumar.jpeg";
import carouselImg5 from "@/assets/student_pics/Manya.jpeg";

export const Hero = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [mentorImage, carouselImg1, carouselImg2, carouselImg3, carouselImg4, carouselImg5];

  // Auto-rotate carousel images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-[84px] md:pt-10 min-h-[calc(100vh-84px)] flex flex-col justify-between relative overflow-x-hidden bg-background">
      {/* Rich colorful background blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Blue-purple top-right blob */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, #3b82f6 40%, transparent 70%)' }} />
        {/* Teal bottom-left blob */}
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #14b8a6 0%, #06b6d4 50%, transparent 75%)' }} />
        {/* Amber mid-left blob */}
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #f59e0b 0%, #f97316 60%, transparent 80%)' }} />
        {/* Primary radial glow behind mentor */}
        <div className="absolute top-0 right-0 w-full md:w-[70%] h-[100vh]"
          style={{
            background: `
              radial-gradient(circle at 68% 38%, rgba(99,102,241,0.18) 0%, rgba(59,130,246,0.12) 40%, rgba(20,184,166,0.06) 70%, transparent 90%),
              linear-gradient(to bottom, transparent 70%, hsl(var(--background)) 100%)
            `,
          }}
        />
      </div>

      {/* Dot Grid - Top Right */}
      <div className="hidden md:block absolute top-[110px] right-[4%] pointer-events-none -z-10 opacity-30">
        <svg width="130" height="130" viewBox="0 0 130 130">
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 26 + 13}
                cy={row * 26 + 13}
                r={2.5}
                fill="hsl(var(--primary) / 0.3)"
              />
            ))
          )}
        </svg>
      </div>

      {/* Arc Lines - Right Edge */}
      <div className="hidden md:block absolute top-[8%] right-0 pointer-events-none -z-10 opacity-20">
        <svg width="220" height="600" viewBox="0 0 220 600" fill="none">
          <path d="M 200 0 Q 80 300 200 600" stroke="hsl(var(--primary))" strokeWidth="1.2" />
          <path d="M 165 0 Q 45 300 165 600" stroke="hsl(var(--primary))" strokeWidth="1.2" />
          <path d="M 130 0 Q 10 300 130 600" stroke="hsl(var(--primary))" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 grid grid-cols-1 xl:grid-cols-[1fr_1.3fr] gap-10 xl:gap-6 pt-2 xl:pt-10 pb-16 items-center">
        {/* LEFT COLUMN: CONTENT */}
        <div className="max-w-[620px] flex flex-col justify-center order-2 xl:order-1">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-foreground leading-[1.1] tracking-tight mb-6">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="block">Understand the why.</motion.span>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
              className="block bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 bg-clip-text text-transparent"
            >The score follows.</motion.span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl font-normal text-muted-foreground leading-relaxed max-w-[540px] mb-8"
          >
            Logic-first GRE & GMAT preparation — from your first concept to your final mock. Self-paced courses, live classes, one-on-one mentoring and admissions guidance, led by Aman.
          </motion.p>

          {/* CTA Button Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12"
          >
            {/* Primary button */}
            <motion.button
              whileHover={{ y: -2, boxShadow: "0 12px 30px rgba(99,102,241,0.4)" }}
              onClick={() => setIsBookSessionOpen(true)}
              className="h-[60px] px-8 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 hover:opacity-95 text-white font-bold text-sm rounded-[14px] flex items-center justify-center gap-2.5 transition-all duration-200 shadow-lg shadow-indigo-500/25"
            >
              <Calendar className="w-5 h-5 stroke-[2.5]" />
              Book a free demo
            </motion.button>

            {/* Secondary button */}
            <motion.button
              whileHover={{ y: -2, backgroundColor: "hsl(var(--muted) / 0.5)" }}
              onClick={() => { document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" }); }}
              className="h-[60px] px-8 bg-white border-2 border-indigo-200 text-indigo-700 font-semibold text-sm rounded-[14px] flex items-center justify-center gap-2.5 transition-colors duration-200 hover:border-indigo-400"
            >
              <Play className="w-5 h-5 fill-indigo-600 stroke-indigo-600" />
              Explore Courses
            </motion.button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap sm:flex-nowrap gap-6 md:gap-10 border-t border-indigo-100 pt-8"
          >
            <StatCounter value="1000+" label="students mentored" icon={Users} color="blue" />
            <StatCounter value="10+" label="avg. GRE point gain" icon={ShieldCheck} color="emerald" />
            <StatCounter value="9+" label="Years of Experience" icon={GraduationCap} color="violet" />
          </motion.div>
        </div>

        {/* RIGHT COLUMN: PORTRAIT & FLOATING CARDS */}
        <div className="relative flex flex-col xl:flex-row items-center justify-center mt-10 md:mt-4 xl:mt-0 w-full overflow-visible order-1 xl:order-2">
          {/* Portrait Container */}
          <div className="relative flex justify-center items-center h-[340px] sm:h-[480px] lg:h-[560px] xl:h-[720px] w-full max-w-[360px] md:max-w-[480px] lg:max-w-[560px] xl:max-w-none scale-[0.9] sm:scale-100 origin-center overflow-hidden xl:overflow-visible">
            {/* Portrait Frame Oval Background with Carousel */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-[12%] left-1/4 transform -translate-x-[36%] xl:-translate-x-[30%] w-[240px] h-[340px] md:w-[320px] md:h-[460px] lg:w-[360px] lg:h-[500px] xl:w-[340px] xl:h-[480px] rounded-full z-[1] overflow-hidden shadow-2xl"
            >
              {/* Carousel Images */}
              <div className="relative w-full h-full">
                {carouselImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <img
                      src={image}
                      alt={`Photo ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-transparent to-background/40 pointer-events-none" />

              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {carouselImages.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-white w-6"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Bottom fade-out on image */}
            <div className="absolute bottom-0 left-0 right-0 h-24 xl:h-48 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none z-10" />

            {/* Floating Card 1: Score Improvement (Left Top) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -8, 0] 
              }}
              transition={{
                x: { duration: 0.5, delay: 0.4 },
                y: { repeat: Infinity, duration: 4.0, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex absolute top-[8%] -left-4 sm:left-[2%] md:-left-[5%] lg:left-[0%] xl:left-[6%] z-20 bg-card rounded-[12px] sm:rounded-[15px] p-2 sm:p-3 shadow-soft border border-border/80 flex items-center gap-1.5 sm:gap-2.5 w-[145px] sm:w-[190px] xl:w-[220px] cursor-pointer"
            >
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600 shrink-0">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-muted-foreground uppercase tracking-wider">
                  Score Improvement
                </h4>
                <p className="text-base font-bold text-foreground mt-0.5 leading-tight">
                  +120 Avg Increase
                </p>
              </div>
            </motion.div>

            {/* Floating Card 2: 1:1 Personalised (Right Middle) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -10, 0] 
              }}
              transition={{
                x: { duration: 0.5, delay: 0.5 },
                y: { repeat: Infinity, duration: 4.6, ease: "easeInOut", delay: 0.4 }
              }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-[42%] -right-4 sm:right-[2%] md:-right-[5%] lg:right-[0%] xl:right-[6%] z-20 bg-card rounded-[12px] sm:rounded-[15px] p-2 sm:p-3 shadow-soft border border-border/80 flex items-center gap-1.5 sm:gap-2.5 w-[145px] sm:w-[190px] xl:w-[220px] cursor-pointer"
            >
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Users className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-muted-foreground uppercase tracking-wider">
                  1:1 Personalised
                </h4>
                <p className="text-base font-bold text-foreground mt-0.5 leading-tight">
                  Tailored Mentorship
                </p>
              </div>
            </motion.div>

            {/* Floating Card 3: Proven Result (Left Bottom) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -6, 0] 
              }}
              transition={{
                x: { duration: 0.5, delay: 0.6 },
                y: { repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.2 }
              }}
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex absolute bottom-[24%] -left-4 sm:left-[2%] md:-left-[5%] lg:left-[-2%] xl:left-[4%] z-20 bg-card rounded-[12px] sm:rounded-[15px] p-2 sm:p-3 shadow-soft border border-border/80 flex items-center gap-1.5 sm:gap-2.5 w-[145px] sm:w-[190px] xl:w-[220px] cursor-pointer"
            >
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-muted-foreground uppercase tracking-wider">
                  Proven Result
                </h4>
                <p className="text-base font-bold text-foreground mt-0.5 leading-tight">
                  700+ GMAT/GRE
                </p>
              </div>
            </motion.div>

            {/* SOCIAL PROOF OVERLAY CARD - DESKTOP ONLY */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="hidden xl:flex absolute bottom-[8%] left-[20%] w-[480px] bg-card rounded-[20px] p-5 shadow-elevated border border-border/80 z-30 flex-row items-center gap-4 text-white"
            >
              {/* User Avatars Grid */}
              <div className="flex -space-x-3.5 shrink-0">
                <img
                  className="w-10 h-10 rounded-full border-2 border-card object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&auto=format&q=80"
                  alt="Alumni 1"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-card object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&auto=format&q=80"
                  alt="Alumni 2"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-card object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&auto=format&q=80"
                  alt="Alumni 3"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-card object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&fit=crop&auto=format&q=80"
                  alt="Alumni 4"
                />
                <div className="w-10 h-10 rounded-full border-2 border-card bg-primary flex items-center justify-center text-xs font-black text-primary-foreground">
                  +9K
                </div>
              </div>
              <div>
                <p className="text-base font-bold text-foreground leading-snug">
                  Join 4000+ successful learners now.
                </p>
              </div>
            </motion.div>
          </div>

          {/* SOCIAL PROOF BADGE - MOBILE ONLY */}
          <div className="flex flex-col items-center w-full -mt-8 md:mt-2 px-4 xl:hidden">
            {/* Social Proof Static Card */}
            <div className="bg-card rounded-[14px] p-2.5 border border-border/80 shadow-soft flex items-center justify-center gap-3 w-full max-w-[290px]">
              {/* User Avatars Grid */}
              <div className="flex -space-x-2 shrink-0">
                <img
                  className="w-7 h-7 rounded-full border-2 border-card object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&auto=format&q=80"
                  alt="Alumni 1"
                />
                <img
                  className="w-7 h-7 rounded-full border-2 border-card object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&auto=format&q=80"
                  alt="Alumni 2"
                />
                <img
                  className="w-7 h-7 rounded-full border-2 border-card object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&auto=format&q=80"
                  alt="Alumni 3"
                />
                <div className="w-7 h-7 rounded-full border-2 border-card bg-primary flex items-center justify-center text-[8px] font-black text-primary-foreground">
                  +9K
                </div>
              </div>
              <p className="text-sm font-bold text-foreground leading-snug">
                Join 4000+ successful learners now.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BookSessionDialog open={isBookSessionOpen} onOpenChange={setIsBookSessionOpen} />
    </section>
  );
};
