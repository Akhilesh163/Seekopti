import { useState } from "react";
import { GraduationCap, Users, Award, Play } from "lucide-react";
import { motion } from "framer-motion";
import amanImage from "@/assets/aman.png";
import { Button } from "@/components/ui/button";
import { BookSessionDialog } from "@/components/BookSessionDialog";

export const AboutMe = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const handleScrollToDemo = () => {
    const demoSection = document.getElementById("book-demo");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-20 pb-20 px-8 md:px-16 lg:px-24 xl:px-16 bg-gradient-to-b from-background via-blue-50/20 to-background relative overflow-hidden mesh-blue-indigo" id="about">
      {/* Decorative background blobs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_1.3fr] gap-12 lg:gap-16 items-center">
          {/* LEFT: Premium Image Container with Floating Cards */}
          <div className="relative justify-self-center w-full max-w-[420px] aspect-[4/5] scale-[0.85] sm:scale-100 origin-center my-6 sm:my-0">
            {/* Background decorative solid offset card */}
            <div className="absolute inset-0 bg-primary/5 rounded-[40px] translate-x-4 translate-y-4 -z-10 border border-primary/10" />

            {/* Main Mentor Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full h-full rounded-[38px] overflow-hidden border-2 border-white shadow-elevated relative group"
            >
              <img
                src={amanImage}
                alt="Aman - Founder of SeekYourY"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* FLOATING CARD 1: Students Mentored */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -top-6 -left-6 z-20"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05 }}
                className="bg-card/90 backdrop-blur-md border border-border/80 rounded-[20px] p-4 flex items-center gap-3.5 shadow-soft max-w-[200px]"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Users className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <p className="text-sm font-black text-foreground leading-none">4000+</p>
                  <p className="text-xs font-medium text-muted-foreground mt-1">Students Mentored</p>
                </div>
              </motion.div>
            </motion.div>

            {/* FLOATING CARD 2: Experience */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 z-20"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                whileHover={{ scale: 1.05 }}
                className="bg-card/90 backdrop-blur-md border border-border/80 rounded-[20px] p-4 flex items-center gap-3.5 shadow-soft max-w-[200px]"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                  <GraduationCap className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <p className="text-sm font-black text-foreground leading-none">8+ Years</p>
                  <p className="text-xs font-medium text-muted-foreground mt-1">Experience</p>
                </div>
              </motion.div>
            </motion.div>

            {/* FLOATING CARD 3: Percentile Achievers */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-1/3 -left-10 z-20"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                whileHover={{ scale: 1.05 }}
                className="bg-card/90 backdrop-blur-md border border-border/80 rounded-[20px] p-4 flex items-center gap-3.5 shadow-soft max-w-[200px]"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-600 shrink-0">
                  <Award className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <p className="text-sm font-black text-foreground leading-none">96th %ile</p>
                  <p className="text-xs font-medium text-muted-foreground mt-1">Percentile Achievers</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: Content Column */}
          <div className="flex flex-col justify-center">
            {/* Pill Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center self-start gap-2.5 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-600 text-base md:text-lg font-extrabold uppercase tracking-[0.14em] shadow-sm mb-6"
            >
              <GraduationCap className="w-4 h-4 text-blue-600 stroke-[2.5]" />
              <span>MEET YOUR MENTOR</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-3xl md:text-4xl font-bold font-display text-foreground leading-[1.1] tracking-tight mb-8"
            >
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Aman</span>
            </motion.h2>

            {/* Paragraphs */}
            <div className="space-y-6 font-medium text-slate-950 dark:text-slate-950 leading-[1.5] mb-10 max-w-[1040px]">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.14 }}
                style={{ fontSize: "22px" }}
              >
                For the past nine years I've dedicated myself to one mission: helping students understand the{" "}
                <strong className="text-black font-extrabold">why</strong>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ fontSize: "22px" }}
              >
                I've mentored over a thousand students through the GRE and the GMAT — not by handing them formulas, but by
                showing them what each question is really asking.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.26 }}
                style={{ fontSize: "22px" }}
              >
                I don't just teach strategies. I build confidence. That is the difference students notice in week one, and the
                reason their scores move by week six.
              </motion.p>
            </div>

            {/* Book Free Demo Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.38 }}
            >
              <Button
                size="lg"
                className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-soft hover-lift"
                onClick={() => setIsBookDemoOpen(true)}
              >
                <Play className="w-4 h-4 fill-current" />
                Book a Session
              </Button>
            </motion.div>
          </div>
        </div>

        {/* BOOK DEMO DIALOG */}
        <BookSessionDialog
          open={isBookDemoOpen}
          onOpenChange={setIsBookDemoOpen}
          title="Book a free demo"
          description="Share your details and we'll schedule a free 30-minute consultation with Aman."
        />
      </div>
    </section>
  );
};
