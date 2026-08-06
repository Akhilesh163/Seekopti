import React, { useState } from "react";
import { Play, Video, Sparkles } from "lucide-react";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import amanImage from "@/assets/aman.png";

interface WebinarItem {
  id: string;
  title: string;
  mentorName: string;
  mentorAvatar: string;
  isLive?: boolean;
  theme: {
    cardBg: string;
    borderColor: string;
    glow: string;
    buttonBg: string;
    titleColor: string;
  };
}

export const WebinarSection: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);
  const [selectedWebinar, setSelectedWebinar] = useState<string>("");

  const handleWatchWebinar = (webinarTitle: string) => {
    setSelectedWebinar(webinarTitle);
    setIsBookSessionOpen(true);
  };

  const featuredWebinar: WebinarItem = {
    id: "featured",
    title: "TOP X GMAC - The all new GMAT Focus Edition",
    mentorName: "Aman",
    mentorAvatar: amanImage,
    isLive: true,
    theme: {
      cardBg: "bg-gradient-to-br from-blue-50/90 via-indigo-50/60 to-cyan-50/70",
      borderColor: "border-2 border-blue-200/90 hover:border-blue-400",
      glow: "from-blue-400 to-cyan-400",
      buttonBg: "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-blue-500/25 hover:shadow-blue-500/40",
      titleColor: "text-slate-950",
    },
  };

  const webinarList: WebinarItem[] = [
    {
      id: "1",
      title: "The Anatomy of a GMAT 780 / GRE 335+",
      mentorName: "Aman",
      mentorAvatar: amanImage,
      theme: {
        cardBg: "bg-gradient-to-br from-purple-50/90 via-pink-50/60 to-indigo-50/70",
        borderColor: "border-2 border-purple-200/90 hover:border-purple-400",
        glow: "from-purple-400 to-pink-400",
        buttonBg: "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-purple-500/25 hover:shadow-purple-500/40",
        titleColor: "text-purple-950",
      },
    },
    {
      id: "2",
      title: "Cracking the ISB Code",
      mentorName: "Aman",
      mentorAvatar: amanImage,
      theme: {
        cardBg: "bg-gradient-to-br from-blue-50/90 via-sky-50/60 to-cyan-50/70",
        borderColor: "border-2 border-blue-200/90 hover:border-blue-400",
        glow: "from-blue-400 to-cyan-400",
        buttonBg: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-blue-500/25 hover:shadow-blue-500/40",
        titleColor: "text-blue-950",
      },
    },
    {
      id: "3",
      title: "Complete Roadmap to the IVY Leagues / M7s",
      mentorName: "Aman",
      mentorAvatar: amanImage,
      theme: {
        cardBg: "bg-gradient-to-br from-emerald-50/90 via-teal-50/60 to-green-50/70",
        borderColor: "border-2 border-emerald-200/90 hover:border-emerald-400",
        glow: "from-emerald-400 to-teal-400",
        buttonBg: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-emerald-500/25 hover:shadow-emerald-500/40",
        titleColor: "text-emerald-950",
      },
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/30 via-indigo-50/20 to-purple-50/30 relative overflow-hidden">
      {/* Decorative background glow circles */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-600 text-white text-xs md:text-sm font-extrabold uppercase tracking-widest mb-4 shadow-md">
            <Sparkles className="w-4 h-4 stroke-[2.5]" />
            <span>Exclusive masterclasses & webinars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-950 tracking-tight leading-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Watch a session before you enrol.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
            Watch insider sessions on scoring top percentiles, crafting ISB applications, and conquering MBA admissions.
          </p>
        </div>

        {/* Main Grid: Left Featured + Right List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT COLUMN: Featured Large Webinar Card */}
          <div className={`lg:col-span-6 rounded-[32px] ${featuredWebinar.theme.borderColor} ${featuredWebinar.theme.cardBg} p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group`}>
            {/* Background glow orb */}
            <div className={`absolute -top-6 -right-6 w-40 h-40 rounded-full bg-gradient-to-br ${featuredWebinar.theme.glow} opacity-20 blur-2xl pointer-events-none`} />

            <div>
              {/* Thumbnail Container with Grid Overlay & Play Button */}
              <div 
                onClick={() => handleWatchWebinar(featuredWebinar.title)}
                className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 group cursor-pointer border-2 border-blue-400/40 shadow-xl mb-6 p-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"
              >
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  {/* Background Grid Composite */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/95 to-blue-950/90 flex items-center justify-center p-6 text-center">
                    <div className="space-y-3 z-10">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-300 text-xs font-black uppercase tracking-widest backdrop-blur-md">
                        GMAT 100%-ile Secrets
                      </div>
                      <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-snug">
                        GMAT 100%-ile <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-orange-400 to-pink-400">
                          Secrets from Aman
                        </span>
                      </h4>
                    </div>
                  </div>

                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />

                  {/* Big Center Play Icon Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-all duration-300 border-2 border-white/40">
                      <Play className="w-8 h-8 md:w-10 md:h-10 fill-white translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className={`text-2xl md:text-3xl font-extrabold ${featuredWebinar.theme.titleColor} tracking-tight leading-snug mb-6`}>
                {featuredWebinar.title}
              </h3>
            </div>

            {/* Mentor & Button Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-900/10">
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md px-4 py-2 rounded-2xl border border-blue-100 shadow-xs">
                <img
                  src={featuredWebinar.mentorAvatar}
                  alt={featuredWebinar.mentorName}
                  className="w-11 h-11 rounded-full object-cover border-2 border-blue-500 shadow-xs"
                />
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Hosted by</p>
                  <p className="text-base font-extrabold text-slate-950">{featuredWebinar.mentorName}</p>
                </div>
              </div>

              <button
                onClick={() => handleWatchWebinar(featuredWebinar.title)}
                className={`px-8 py-3.5 rounded-2xl font-extrabold text-base shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer ${featuredWebinar.theme.buttonBg}`}
              >
                Watch Webinar
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Stack of 3 Webinars */}
          <div className="lg:col-span-6 flex flex-col gap-5 justify-between">
            {webinarList.map((webinar) => (
              <div
                key={webinar.id}
                className={`rounded-[28px] ${webinar.theme.borderColor} ${webinar.theme.cardBg} p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between gap-4 relative overflow-hidden group`}
              >
                {/* Background glow orb */}
                <div className={`absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br ${webinar.theme.glow} opacity-20 blur-2xl pointer-events-none`} />

                <h3 
                  className={`text-xl md:text-2xl font-extrabold ${webinar.theme.titleColor} tracking-tight leading-snug cursor-pointer hover:opacity-90 transition-opacity`}
                  onClick={() => handleWatchWebinar(webinar.title)}
                >
                  {webinar.title}
                </h3>

                <div className="flex items-center justify-between gap-4 pt-2 border-t border-slate-900/10">
                  <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-200/60 shadow-xs">
                    <img
                      src={webinar.mentorAvatar}
                      alt={webinar.mentorName}
                      className="w-9 h-9 rounded-full object-cover border-2 border-blue-500 shadow-xs"
                    />
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Hosted by</p>
                      <p className="text-sm font-extrabold text-slate-950">{webinar.mentorName}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleWatchWebinar(webinar.title)}
                    className={`px-6 py-3 rounded-xl font-extrabold text-sm md:text-base shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer shrink-0 ${webinar.theme.buttonBg}`}
                  >
                    Watch Webinar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Book / Watch Webinar Registration Dialog */}
      <BookSessionDialog
        open={isBookSessionOpen}
        onOpenChange={setIsBookSessionOpen}
        title={selectedWebinar ? `Watch: ${selectedWebinar}` : "Register to Watch Webinar"}
        description="Fill out your details to get instant access to the masterclass recording and strategy guide."
      />
    </section>
  );
};
