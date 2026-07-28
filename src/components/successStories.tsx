import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Check } from "lucide-react";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const SuccessStories: React.FC = () => {
  const successFaqs = [
    {
      question: "Are these student reviews and scores verified?",
      answer: "Yes, all testimonials, case studies, and score improvements published on our website are from verified learners who prepared with us or used our consulting."
    },
    {
      question: "What is the average score improvement of your students?",
      answer: "On average, our GRE students see an improvement of +10 to +15 points, while GMAT students see a gain of +80 to +120 points on their exams."
    },
    {
      question: "Which global universities have your alumni entered?",
      answer: "Our alumni have successfully secured admission and scholarships at top-tier global institutions, including Harvard, Wharton, Stanford, Columbia, INSEAD, LBS, ISB, NUS, and NTU."
    },
    {
      question: "Can I connect with an alumni who matches my target profile?",
      answer: "Yes! If you are enrolled in our programs, we can request a virtual chat or email introduction with an alumnus who studied at your target school or program."
    },
    {
      question: "What makes your teaching and consulting methodology so successful?",
      answer: "We focus on a logic-first, concept-driven prep that avoids rote learning. In admissions, we align your unique personal narratives directly with the specific values and expectations of target schools."
    }
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 pt-[76px] md:pt-[84px] pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - heading + text */}
          <div className="relative">
            <p className="inline-block rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary shadow-sm">EMPOWERING GLOBAL DREAMS</p>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-foreground leading-tight relative">23 Years. 500+ Students. <br/> One Relentless Belief: Every Student Has Untapped Potential.</h2>
            <div className="mt-3 w-40 h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 rounded-full shadow-sm" />

            <p className="mt-6 text-lg text-muted-foreground max-w-lg pl-6 border-l-4 border-primary/20">
              Seek Your Y was founded with a clear and ambitious vision: that world-class education guidance should be accessible to all, not just a privileged few. We combine rigorous academic coaching with genuine mentorship to help students reach their goals.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <Link to="/programs">
                <Button className="rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 hover:opacity-95 text-white px-6 py-3">Start Your Journey</Button>
              </Link>

              <div className="flex items-center gap-3">
                <div className="rounded-full bg-white p-3 shadow-sm">
                  <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 6.18 2 2 0 0 1 5 4h3a2 2 0 0 1 2 1.72c.12 1.01.37 2 .74 2.94a2 2 0 0 1-.45 2.11L9.91 12.91a16 16 0 0 0 6.18 6.18l1.06-1.06a2 2 0 0 1 2.11-.45c.94.37 1.93.62 2.94.74A2 2 0 0 1 22 16.92z" stroke="#0f172a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">FREE CONSULTATION</div>
                  <div className="font-semibold">+91 7307870773</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - stacked images */}
          <div className="relative md:h-[420px]">
            <div className="absolute -top-12 right-8 w-56 h-56 rounded-full overflow-hidden shadow-2xl border-8 border-white">
              <img src="/assets/gre-asset/teacher.webp" alt="student" className="w-full h-full object-cover" />
            </div>

            <div className="absolute left-0 top-28 w-64 h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-white -translate-x-6">
              <img src="/assets/gre-asset/course_gmat.webp" alt="campus" className="w-full h-full object-cover" />
            </div>

            <div className="absolute right-0 bottom-0 w-64 h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white translate-x-6">
              <img src="/assets/gre-asset/contactUI.webp" alt="group" className="w-full h-full object-cover" />
            </div>

            <div className="absolute bottom-6 -right-2">
              <div className="rounded-full bg-gradient-to-br from-blue-600 via-indigo-500 to-violet-500 w-16 h-16 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 6.18 2 2 0 0 1 5 4h3a2 2 0 0 1 2 1.72c.12 1.01.37 2 .74 2.94a2 2 0 0 1-.45 2.11L9.91 12.91a16 16 0 0 0 6.18 6.18l1.06-1.06a2 2 0 0 1 2.11-.45c.94.37 1.93.62 2.94.74A2 2 0 0 1 22 16.92z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

     
     

      {/* Driving Global Excellence */}
      <section className="pt-12 pb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-primary/40" />
          <span className="rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary shadow-sm">
            OUR PURPOSE
          </span>
          <div className="h-px w-12 bg-primary/40" />
        </div>
        <h3 className="text-center text-3xl md:text-4xl font-extrabold text-foreground mb-8">Driving <span className="text-primary">Global Excellence</span></h3>
        <div className="mx-auto max-w-[1200px] px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[24px] p-10 shadow-soft border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <img src="/assets/gre-asset/analytics.png" alt="icon" className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-4">Our Mission</h4>
              <p className="text-muted-foreground leading-relaxed">To democratize access to world-class education by providing unparalleled guidance, rigorous test preparation, and strategic mentorship. We strive to empower students to break geographical barriers and realize their true academic and professional potential on a global stage.</p>
            </div>

            <div className="bg-white rounded-[24px] p-10 shadow-soft border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                <img src="/assets/gre-asset/board.webp" alt="icon" className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-4">Our Vision</h4>
              <p className="text-muted-foreground leading-relaxed">To become the most trusted and impactful educational consultancy in the country. We envision a future where every ambitious student, regardless of their background, has the roadmap, resources, and mentorship necessary to succeed at the world's leading institutions and corporations.</p>
            </div>
          </div>
            </div>

          </section>

      {/* Stats band */}
      <div className="bg-[#12223e] text-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="mx-auto mb-4 w-16 h-16 rounded bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"></rect></svg>
              </div>
              <div className="text-4xl font-extrabold">500</div>
              <div className="text-xs mt-2 text-rose-200">+ TOTAL COURSES</div>
            </div>

            <div>
              <div className="mx-auto mb-4 w-16 h-16 rounded bg-destructive/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-destructive" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
              <div className="text-4xl font-extrabold">1900</div>
              <div className="text-xs mt-2 text-rose-200">+ OUR STUDENTS</div>
            </div>

            <div>
              <div className="mx-auto mb-4 w-16 h-16 rounded bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
              <div className="text-4xl font-extrabold">750</div>
              <div className="text-xs mt-2 text-rose-200">+ SKILLED LECTURERS</div>
            </div>

            <div>
              <div className="mx-auto mb-4 w-16 h-16 rounded bg-destructive/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-destructive" viewBox="0 0 24 24" fill="none" xmlns="www.w3.org/2000/svg"><path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
              <div className="text-4xl font-extrabold">30</div>
              <div className="text-xs mt-2 text-rose-200">+ WIN AWARDS</div>
            </div>
          </div>
        </div>
      </div>

            {/* Experts carousel - auto scroll */}
            <div className="mx-auto max-w-[1200px] px-6 py-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-primary/40" />
                <span className="rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary shadow-sm">
                  OUR EXPERTS
                </span>
                <div className="h-px w-12 bg-primary/40" />
              </div>
              <h3 className="text-center text-3xl md:text-4xl font-extrabold text-foreground mb-8">Meet Our Experts</h3>
              <ExpertsCarousel />
            </div>

      {/* Why Choose Seek Your Y */}
      <section className="bg-[#f7f8fb]">
        <div className="mx-auto max-w-[1200px] px-6 pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary shadow-sm">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-destructive" />
              Why Choose Us?
            </p>
            <h2 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
              Why Choose <span className="text-primary">Seek-Your-Y?</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            <div className="group bg-white rounded-xl p-8 pt-16 md:p-10 md:pt-20 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-300 relative mt-16 flex flex-col items-center text-center group-hover:bg-[#f8fafc]">
              <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                <div className="relative w-28 h-28 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-full opacity-60 scale-105 shadow-[0_0_20px_#d0dbe8] bg-[#d0dbe8]" />
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center relative z-10 border border-white">
                    <svg className="lucide lucide-chart-line w-10 h-10 transition-colors duration-300 text-[#5a7496] group-hover:text-[#3b5370]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] z-0 select-none pointer-events-none group-hover:scale-110 transition-transform duration-500">
                <svg className="lucide lucide-chart-line w-48 h-48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between items-center w-full">
                <p className="text-[#8ba0c2] group-hover:text-[#475b75] italic leading-relaxed text-[16px] md:text-[18px] font-medium mb-10 max-w-[280px] transition-colors duration-300">
                  Benefit from our proven track record of success, with many of our students achieving outstanding scores and securing admission to prestigious universities worldwide.
                </p>
                <h3 className="font-extrabold text-[13px] tracking-widest uppercase mt-auto pb-2 transition-colors duration-300 text-[#5a7496] group-hover:text-[#2f4259]">
                  Proven Track Record
                </h3>
              </div>
            </div>

            <div className="group bg-white rounded-xl p-8 pt-16 md:p-10 md:pt-20 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-300 relative mt-16 flex flex-col items-center text-center group-hover:bg-[#f8fafc]">
              <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                <div className="relative w-28 h-28 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-full opacity-60 scale-105 shadow-[0_0_20px_#d9f6ea] bg-[#d9f6ea]" />
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center relative z-10 border border-white">
                    <svg className="lucide lucide-plus w-10 h-10 transition-colors duration-300 text-[#2e7d5a] group-hover:text-[#19543b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] z-0 select-none pointer-events-none group-hover:scale-110 transition-transform duration-500">
                <svg className="lucide lucide-plus w-48 h-48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between items-center w-full">
                <p className="text-[#8ba0c2] group-hover:text-[#475b75] italic leading-relaxed text-[16px] md:text-[18px] font-medium mb-10 max-w-[280px] transition-colors duration-300">
                  We adopt a holistic approach to education, focusing not only on exam preparation but also on enhancing critical thinking, problem-solving skills, and confidence.
                </p>
                <h3 className="font-extrabold text-[13px] tracking-widest uppercase mt-auto pb-2 transition-colors duration-300 text-[#1f6c3e] group-hover:text-[#134a2b]">
                  Holistic Approach
                </h3>
              </div>
            </div>

            <div className="group bg-white rounded-xl p-8 pt-16 md:p-10 md:pt-20 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-300 relative mt-16 flex flex-col items-center text-center group-hover:bg-[#f8fafc]">
              <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                <div className="relative w-28 h-28 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-full opacity-60 scale-105 shadow-[0_0_20px_#f7d6dc] bg-[#f7d6dc]" />
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center relative z-10 border border-white">
                    <svg className="lucide lucide-bookmark w-10 h-10 transition-colors duration-300 text-[#be2d50] group-hover:text-[#8a193a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 4h12v16l-6-4-6 4V4z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] z-0 select-none pointer-events-none group-hover:scale-110 transition-transform duration-500">
                <svg className="lucide lucide-bookmark w-48 h-48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 4h12v16l-6-4-6 4V4z" />
                </svg>
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between items-center w-full">
                <p className="text-[#8ba0c2] group-hover:text-[#475b75] italic leading-relaxed text-[16px] md:text-[18px] font-medium mb-10 max-w-[280px] transition-colors duration-300">
                  Experience a supportive learning environment where students are encouraged to thrive academically under the guidance of dedicated mentors.
                </p>
                <h3 className="font-extrabold text-[13px] tracking-widest uppercase mt-auto pb-2 transition-colors duration-300 text-[#be2d50] group-hover:text-[#8a193a]">
                  Supportive Learning Environment
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <CustomFAQ faqs={successFaqs} />
      <Footer />
    </section>
  );
};

export default SuccessStories;

/* Experts carousel component */
function ExpertsCarousel() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [active, setActive] = useState(0);

  const experts = [
    {
      name: "Satish Anand",
      title: "CEO & Co-Founder",
      quote: "Guiding you to your global education dreams through proven strategies.",
      img: "/assets/gre-asset/teacher.webp",
      bio: `Satish brings 23+ years of teaching and mentorship experience to every interaction. A six-time Josh Talks speaker and two-time Josh Skills Expert, he has authored books on learning and personal effectiveness.`,
      color: "bg-white text-black",
    },
    {
      name: "Krati Yadav",
      title: "Co-Founder",
      quote: "Making the world your classroom with personalized guidance.",
      img: "/assets/gre-asset/teacher.webp",
      bio: `Krati is the operational and mentorship heart of our organisation, focused on student wellbeing and institutional partnerships.`,
      color: "bg-emerald-500 text-white",
    },
    {
      name: "Pradeep Swami",
      title: "Quant Faculty, GRE & SAT",
      quote: "Numbers speak louder than words when handled correctly.",
      img: "/assets/gre-asset/course_gmat.webp",
      bio: `Pradeep is known for patience and conceptual clarity; he helps students hit quant targets.`,
      color: "bg-violet-600 text-white",
    },
    {
      name: "Amit Raghuvanshi",
      title: "Verbal Faculty & Admissions Counselor",
      quote: "Mastering words and crafting narratives that open global doors.",
      img: "/assets/gre-asset/contactUI.webp",
      bio: `Amit is widely regarded as one of the best verbal coaches; he specializes in SOPs, LORs and profile building.`,
      color: "bg-orange-400 text-white",
    },
  ];

  useEffect(() => {
    if (!carouselApi) return;
    // update active when carousel selection changes
    const onSelect = () => setActive(carouselApi.selectedScrollSnap());
    carouselApi.on("select", onSelect);
    setActive(carouselApi.selectedScrollSnap());

    const id = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 4500);

    return () => {
      window.clearInterval(id);
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  return (
    <div>
      <div className="flex justify-center gap-6 mb-6">
        {experts.map((e, i) => (
          <button
            key={i}
            onClick={() => {
              carouselApi?.scrollTo(i);
              setActive(i);
            }}
            className={`px-6 py-3 rounded-t-[18px] shadow-sm transition-all ${
              active === i
                ? "bg-white text-black -translate-y-2 shadow-md"
                : `opacity-95 ${e.color}`
            }`}
          >
            <span className="font-semibold">{e.name}</span>
          </button>
        ))}
      </div>

      <Carousel opts={{ loop: true }} setApi={(api) => setCarouselApi(api)}>
        <CarouselContent>
          {experts.map((e, i) => (
            <CarouselItem key={i} className="px-4">
              <div className="bg-white rounded-3xl p-10 shadow-xl overflow-hidden md:grid md:grid-cols-2 gap-8 items-start">
                <div className="flex flex-col">
                  <div className="text-4xl md:text-5xl text-muted-foreground italic mb-6">“{e.quote}”</div>
                  <div className="mt-auto w-full md:w-72">
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-900">
                      <img src={e.img} alt={e.name} className="w-full h-72 object-cover" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-6xl md:text-5xl font-extrabold text-foreground leading-tight mb-2">{e.name}</h3>
                  <div className="text-lg font-semibold text-muted-foreground mb-6">{e.title}</div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{e.bio}</p>
                  <hr className="border-t border-border/20 mb-6" />

                  <h4 className="text-2xl font-bold mb-4">{e.name}'s Achievements</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white">
                        <Check size={16} />
                      </span>
                      <span className="text-muted-foreground">Delivered 6 inspiring Josh Talks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white">
                        <Check size={16} />
                      </span>
                      <span className="text-muted-foreground">Authored 2 Top Selling Books internationally</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white">
                        <Check size={16} />
                      </span>
                      <span className="text-muted-foreground">23+ years of teaching and mentoring experience</span>
                    </li>
                  </ul>

                  <div className="mt-4">
                    <Link to="#" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 shadow hover:opacity-95">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-3" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
