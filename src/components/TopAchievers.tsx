import React, { useState, useEffect } from "react";
import { Users, Award, GraduationCap, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { StatCounter } from "./StatCounter";
import { BookSessionDialog } from "@/components/BookSessionDialog";

// Student photos
import PraffulPhoto from "@/assets/student_pics/Prafful.jpeg";
import ArjunPhoto from "@/assets/student_pics/Arjun M S.jpeg";
import SabhyataPhoto from "@/assets/student_pics/Sabhyata.jpeg";
import ManyaPhoto from "@/assets/student_pics/Manya.jpeg";
import BalagopalPhoto from "@/assets/student_pics/Balagopal Jayakumar.jpeg";

const achievers = [
  {
    name: "Praful",
    role: "GRE Student",
    image: PraffulPhoto,
    score: "Quant 156 -> 169",
  },
  {
    name: "Arjun",
    role: "GRE Student",
    image: ArjunPhoto,
    score: "Quant 160 -> 168",
  },
  {
    name: "Sabhyata",
    role: "GRE Student",
    image: SabhyataPhoto,
    score: "Quant 155 -> 160",
  },
  {
    name: "Manya",
    role: "GRE Student",
    image: ManyaPhoto,
    score: "Quant 150 -> 166",
  },
  {
    name: "Balagopal",
    role: "GMAT Student",
    image: BalagopalPhoto,
    score: "Quant 158 -> 170",
  },
];

export const TopAchievers: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);
  const len = achievers.length;
  
  // Clone cards: prepend last 2, append first 2
  // Index:
  // 0: original 3 (Manya)
  // 1: original 4 (Balagopal)
  // 2: original 0 (Praful)
  // 3: original 1 (Arjun) - Initial center
  // 4: original 2 (Sabhyata)
  // 5: original 3 (Manya)
  // 6: original 4 (Balagopal)
  // 7: original 0 (Praful)
  // 8: original 1 (Arjun)
  const extendedAchievers = [
    achievers[len - 2],
    achievers[len - 1],
    ...achievers,
    achievers[0],
    achievers[1]
  ];

  const [slideIndex, setSlideIndex] = useState(3); // Arjun initially centered
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardWidth, setCardWidth] = useState(320);
  const gap = 24;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(320);
      } else {
        setCardWidth(380);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    if (slideIndex <= 1) return; // block moving past prepended boundary
    setSlideIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (slideIndex >= 7) return; // block moving past appended boundary
    setSlideIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    // If we transitioned to the cloned Praful at index 7, snap back to original Praful at index 2
    if (slideIndex === 7) {
      setIsTransitioning(false);
      setSlideIndex(2);
    }
    // If we transitioned to the cloned Balagopal at index 1, snap back to original Balagopal at index 6
    else if (slideIndex === 1) {
      setIsTransitioning(false);
      setSlideIndex(6);
    }
  };

  // Re-enable transition after snapping completes
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 30); // short tick to reset transition
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  // Autoplay sliding right to left, reset timer on slideIndex changes
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <section 
      id="top-achievers" 
      className="py-20 px-6 bg-slate-50/30 border-t border-slate-100 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto text-center relative">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-600 text-base md:text-lg font-extrabold uppercase tracking-[0.14em] shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-blue-600 stroke-[2.5]" />
            <span>OUR STUDENTS' SUCCESS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground tracking-tight">
            Our Top Performers
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed" style={{ fontSize: "20px" }}>
            Real score jumps from students who prepared built on logic and dedication.
          </p>
        </div>

        {/* Carousel Outer Wrapper with Hidden Overflow */}
        <div className="relative w-full max-w-[1100px] mx-auto overflow-hidden px-4 py-8">
          
          {/* Slider Controls overlaying the sides */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-30 px-2 sm:px-6">
            <button
              onClick={handlePrev}
              className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/90 border border-slate-200 text-slate-800 shadow-elevated hover:bg-white transition active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/90 border border-slate-200 text-slate-800 shadow-elevated hover:bg-white transition active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Cards Sliding Track */}
          <div 
            className="relative flex items-center"
            onTransitionEnd={handleTransitionEnd}
            style={{
              left: "50%",
              transform: `translateX(calc(-${cardWidth / 2}px - ${slideIndex * (cardWidth + gap)}px))`,
              transition: isTransitioning ? "transform 800ms cubic-bezier(0.25, 1, 0.5, 1)" : "none",
              gap: `${gap}px`,
              width: `${extendedAchievers.length * (cardWidth + gap)}px`
            }}
          >
            {extendedAchievers.map((achiever, idx) => {
              const isActive = idx === slideIndex;
              const isLeft = idx === slideIndex - 1;
              const isRight = idx === slideIndex + 1;

              let cardClass = "";
              if (isActive) {
                cardClass = "scale-100 opacity-100 z-20 cursor-default";
              } else if (isLeft || isRight) {
                cardClass = "scale-90 opacity-60 z-10 cursor-pointer hover:opacity-85";
              } else {
                cardClass = "scale-75 opacity-20 z-0 pointer-events-none";
              }

              return (
                <div
                  key={`${achiever.name}-${idx}`}
                  className={`relative flex-shrink-0 rounded-[28px] md:rounded-[36px] overflow-hidden flex flex-col justify-end p-6 md:p-8 bg-cover bg-center ${cardClass}`}
                  style={{ 
                    backgroundImage: `url(${achiever.image})`,
                    width: `${cardWidth}px`,
                    height: cardWidth === 380 ? "520px" : "440px",
                    boxShadow: isActive ? "0 25px 50px -12px rgba(0, 0, 0, 0.3)" : "0 8px 24px -8px rgba(0, 0, 0, 0.15)",
                    transition: isTransitioning ? "all 800ms cubic-bezier(0.25, 1, 0.5, 1)" : "none"
                  }}
                  onClick={() => {
                    if (isLeft) {
                      handlePrev();
                    } else if (isRight) {
                      handleNext();
                    }
                  }}
                >
                  {/* Dark Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent rounded-[28px] md:rounded-[36px]" />

                  {/* Content (above overlay) */}
                  <div className="relative z-10 flex flex-col items-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                      {achiever.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                      {achiever.role}
                    </p>
                    
                    {/* Oversized High-Focus Score Badge matching user reference design */}
                    <div className={`mt-5 transition-all duration-500 ${
                      isActive ? "scale-105" : "opacity-90 scale-95"
                    }`}>
                      {(() => {
                        const scoreText = achiever.score;
                        const delimiter = scoreText.includes("->") ? "->" : scoreText.includes("→") ? "→" : null;
                        if (!delimiter) {
                          return (
                            <div className="bg-[#1c84ff] text-white font-black text-2xl px-6 py-3 rounded-2xl shadow-2xl">
                              {scoreText}
                            </div>
                          );
                        }

                        const [leftPart, rightPart] = scoreText.split(delimiter).map(s => s.trim());
                        const words = leftPart.split(" ");
                        let prefix = "";
                        let beforeScore = leftPart;

                        if (words.length > 1) {
                          prefix = words.slice(0, -1).join(" ");
                          beforeScore = words[words.length - 1];
                        }

                        return (
                          <div className="inline-flex items-center bg-[#1c84ff] border border-blue-400/40 rounded-2xl pl-5 sm:pl-6 pr-1.5 py-2 shadow-2xl text-white font-extrabold select-none">
                            {prefix && (
                              <span className="text-xs font-bold uppercase tracking-wider text-blue-100 mr-2 opacity-95">
                                {prefix}
                              </span>
                            )}
                            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mr-3 flex items-center gap-1.5">
                              {beforeScore} <span className="text-blue-200 font-normal">→</span>
                            </span>
                            <span className="bg-white text-slate-950 font-black text-3xl sm:text-4xl md:text-[2.5rem] px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl shadow-2xl border border-slate-100 -my-3 sm:-my-4 flex items-center justify-center leading-none">
                              {rightPart}
                            </span>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-24 mt-16 border-t border-slate-100 pt-14 max-w-[1000px] mx-auto px-4">
          <StatCounter value="4000+" label="Students Mentored" icon={Users} color="blue" />
          <StatCounter value="96th" label="Percentile Achievers" icon={Award} color="violet" />
          <StatCounter value="8+" label="Years Experience" icon={GraduationCap} color="emerald" />
        </div>

        {/* BOOK A SESSION CTA */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => setIsBookSessionOpen(true)}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-extrabold text-lg shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>Book a Session</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <Award className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>
      </div>

      <BookSessionDialog
        open={isBookSessionOpen}
        onOpenChange={setIsBookSessionOpen}
        title="Book a free session"
        description="Share your details and we'll schedule a 1-on-1 strategy session with our mentors."
      />
    </section>
  );
};
