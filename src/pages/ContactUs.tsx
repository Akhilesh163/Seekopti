import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Send, MapPin, User, Phone, Mail, BookOpen } from "lucide-react";
import { useContactFormSubmit } from "@/hooks/useContactFormSubmit";

const emptyForm = { name: "", email: "", phone: "", message: "", course: "" };

const infoCards = [
  {
    title: "Office Address",
    description: "S-3, Third Floor, Metro Plaza, Gorewada Square, Nagpur, Maharashtra – 440013",
    Icon: MapPin,
    wrapperClassName: "group relative rounded-[24px] border border-indigo-300/80 bg-gradient-to-br from-indigo-50 via-indigo-100 to-violet-100 p-8 text-center transition-all duration-300 overflow-hidden shadow-md hover:shadow-2xl hover:border-indigo-500",
    iconClassName: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-700 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2",
    titleClassName: "font-bold text-indigo-950",
    textClassName: "mt-3 text-sm text-indigo-900/85 font-medium",
  },
];

const ContactUs = () => {
  const [formData, setFormData] = useState(emptyForm);

  const { isSubmitting, submit } = useContactFormSubmit({
    formSource: "Contact Us",
    successMessage: "Message sent! We'll get back to you within 24–48 hours.",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit(
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        course: formData.course,
      },
      () => setFormData(emptyForm),
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <header className="relative overflow-hidden bg-background pt-[76px] md:pt-[84px] pb-24 text-slate-900 border-b border-slate-200/70">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-slate-400/10 blur-[140px] pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-300/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] rounded-full bg-slate-200/10 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(rgba(15,23,42,0.03) 1px, transparent 1px)",
              backgroundSize: "25px 25px",
            }}
          />
        </div>

        <div className="mx-auto max-w-[1200px] px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/15 to-indigo-500/15 border border-blue-200/60 text-slate-700 text-xs md:text-sm font-semibold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Let's Connect
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4 leading-[1.1] font-display bg-gradient-to-r from-blue-900 to-indigo-800 bg-clip-text text-transparent">
            Get In Touch With Us
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Have questions about our prep programs? We're here to guide you every step of the way.
          </p>
        </div>
      </header>

      <main className="section-padding -mt-12 pb-20">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* Top info cards - overlap hero */}
          <div className="mt-12 mb-10">
            <div className="mx-auto max-w-[1200px] px-2">
              <div className="grid grid-cols-1 gap-6">
                {infoCards.map((card) => (
                  <div key={card.title} className={card.wrapperClassName}>
                    <div className={card.iconClassName}>
                      <card.Icon className="w-6 h-6" />
                    </div>
                    <h3 className={`${card.titleClassName} flex items-center justify-center gap-2`}> 
                      <card.Icon className="w-4 h-4 text-indigo-700" />
                      {card.title}
                    </h3>
                    <p className={card.textClassName}>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form card */}
          <div className="rounded-[32px] bg-transparent p-0 overflow-hidden border border-blue-100/50 transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="hidden md:block relative overflow-hidden">
                <img src="/assets/gre-asset/contactUI.webp" alt="contact" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>

              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-slate-900 mb-3">Send your enquiry</h2>
                  <p className="text-base text-slate-600 leading-relaxed">We'll respond within 24–48 hours with personalized guidance for your prep journey.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-5">
                    <div>
                      <Label htmlFor="contact-name" className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2">
                        <User className="w-4 h-4 text-slate-500" />
                        Your Name
                      </Label>
                      <Input id="contact-name" name="name" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} required className="mt-0 rounded-xl border-2 border-blue-100/50 bg-blue-50/50 px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200/50 transition-all duration-300" />
                    </div>
                    <div>
                      <Label htmlFor="contact-phone" className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2">
                        <Phone className="w-4 h-4 text-slate-500" />
                        Phone Number
                      </Label>
                      <Input id="contact-phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))} className="mt-0 rounded-xl border-2 border-blue-100/50 bg-blue-50/50 px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200/50 transition-all duration-300" />
                    </div>
                    <div>
                      <Label htmlFor="contact-email" className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2">
                        <Mail className="w-4 h-4 text-slate-500" />
                        Your Email
                      </Label>
                      <Input id="contact-email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} required className="mt-0 rounded-xl border-2 border-blue-100/50 bg-blue-50/50 px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200/50 transition-all duration-300" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-course" className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2">
                        <BookOpen className="w-4 h-4 text-slate-500" />
                        Course
                      </Label>
                      <Select value={formData.course} onValueChange={(val) => setFormData((p) => ({ ...p, course: val }))}>
                        <SelectTrigger id="contact-course" className="min-h-[54px] h-auto py-2.5 px-4 border-border/80 focus:ring-primary/20 focus:border-primary transition-all rounded-xl text-left bg-background [&>span]:line-clamp-none flex items-center justify-between gap-3">
                          <SelectValue placeholder="Interested in" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl shadow-lg border-border/80 max-h-[320px] p-1.5">
                          <SelectItem value="GRE Live Class" className="py-3 px-3 cursor-pointer rounded-lg focus:bg-primary/5 focus:text-primary transition-colors">
                            <div className="flex flex-col gap-0.5">
                              <span className="font-bold text-sm text-foreground">GRE Live Class</span>
                              <span className="text-xs text-muted-foreground font-normal">Interactive Live Batch Training</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="GRE Self-Paced" className="py-3 px-3 cursor-pointer rounded-lg focus:bg-primary/5 focus:text-primary transition-colors">
                            <div className="flex flex-col gap-0.5">
                              <span className="font-bold text-sm text-foreground">GRE Self-Paced</span>
                              <span className="text-xs text-muted-foreground font-normal">On-Demand Comprehensive Video Course</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="GRE Private Tutoring" className="py-3 px-3 cursor-pointer rounded-lg focus:bg-primary/5 focus:text-primary transition-colors">
                            <div className="flex flex-col gap-0.5">
                              <span className="font-bold text-sm text-foreground">GRE Private Tutoring</span>
                              <span className="text-xs text-muted-foreground font-normal">1-on-1 Personalized Tutors</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="GMAT Live Class" className="py-3 px-3 cursor-pointer rounded-lg focus:bg-primary/5 focus:text-primary transition-colors">
                            <div className="flex flex-col gap-0.5">
                              <span className="font-bold text-sm text-foreground">GMAT Live Class</span>
                              <span className="text-xs text-muted-foreground font-normal">Interactive Live Batch Training</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="GMAT Self-Paced" className="py-3 px-3 cursor-pointer rounded-lg focus:bg-primary/5 focus:text-primary transition-colors">
                            <div className="flex flex-col gap-0.5">
                              <span className="font-bold text-sm text-foreground">GMAT Self-Paced</span>
                              <span className="text-xs text-muted-foreground font-normal">On-Demand Comprehensive Video Course</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="GMAT Private Tutoring" className="py-3 px-3 cursor-pointer rounded-lg focus:bg-primary/5 focus:text-primary transition-colors">
                            <div className="flex flex-col gap-0.5">
                              <span className="font-bold text-sm text-foreground">GMAT Private Tutoring</span>
                              <span className="text-xs text-muted-foreground font-normal">1-on-1 Personalized Tutors</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="Admissions Consulting" className="py-3 px-3 cursor-pointer rounded-lg focus:bg-primary/5 focus:text-primary transition-colors">
                            <div className="flex flex-col gap-0.5">
                              <span className="font-bold text-sm text-foreground">Admissions Consulting</span>
                              <span className="text-xs text-muted-foreground font-normal">B-School Application & Essay Mentoring</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3.5 font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : (
                        <>
                          <Send className="w-5 h-5 mr-2 inline" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating call button */}
      <a
        href="tel:+917307870773"
        aria-label="Call us"
        className="fixed right-6 bottom-6 z-[100] h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl shadow-blue-500/40 hover:shadow-blue-500/60 flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 6.18 2 2 0 0 1 5 4h3a2 2 0 0 1 2 1.72c.12 1.01.37 2 .74 2.94a2 2 0 0 1-.45 2.11L9.91 12.91a16 16 0 0 0 6.18 6.18l1.06-1.06a2 2 0 0 1 2.11-.45c.94.37 1.93.62 2.94.74A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>

      <Footer />
    </div>
  );
};

export default ContactUs;
