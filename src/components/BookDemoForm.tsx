import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Play, User, Mail, Phone as PhoneIcon, GraduationCap } from "lucide-react";
import { buildMessageWithPhone, useContactFormSubmit } from "@/hooks/useContactFormSubmit";

const emptyForm = { name: "", email: "", phone: "", course: "" };

export const BookDemoForm = () => {
  const [formData, setFormData] = useState(emptyForm);

  const { isSubmitting, submit } = useContactFormSubmit({
    formSource: "Book a free demo",
    successMessage: "Demo request submitted! We'll contact you within 24 hours.",
  });

  const canSubmit =
    formData.name.trim().length > 0 &&
    formData.email.trim().length > 0 &&
    formData.phone.trim().length > 0 &&
    formData.course !== "" &&
    !isSubmitting;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    await submit(
      {
        name: formData.name,
        email: formData.email,
        message: buildMessageWithPhone(`Selected Course: ${formData.course}`, formData.phone) || "Book a free demo request",
      },
      () => setFormData(emptyForm),
    );
  };

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden" id="book-demo">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl pointer-events-none -z-10" />
      <div className="max-w-[1360px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-400 text-base md:text-lg font-extrabold uppercase tracking-[0.14em] shadow-sm mb-6">
              BOOK A DEMO
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.15]">
              Start Your <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-indigo-300 bg-clip-text text-transparent">Journey</span> Today
            </h2>
            <p className="text-base md:text-lg text-slate-300 mb-8 leading-relaxed max-w-[540px]">
              Book a free 30-minute consultation with Aman to discuss your goals,
              understand your current level, and create a personalized study plan.
            </p>

            <div className="space-y-4 pt-2">
              {[
                { text: "Free personalized assessment", desc: "Understand your starting point with real data" },
                { text: "Custom study plan recommendation", desc: "A tailored path designed for your target score" },
                { text: "No obligation - just guidance", desc: "Zero commitment required, purely helpful advice" },
                { text: "Direct access to Aman", desc: "Learn directly from an expert quant mentor" },
              ].map((benefit) => (
                <div key={benefit.text} className="flex items-start gap-4 p-4 bg-slate-900/80 border border-slate-800 hover:border-blue-400/40 rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-400 mt-0.5 shadow-sm">
                    <CheckCircle className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-base font-bold text-white block leading-tight">{benefit.text}</span>
                    <span className="text-base text-slate-300 mt-1.5 block leading-snug">{benefit.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-[32px] p-8 md:p-10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
            
            <div className="mb-8">
              <h3 className="text-2xl font-extrabold text-slate-950 mb-2">Fill the Form</h3>
              <p className="text-sm text-slate-600">Book your free 30-minute consultation with Aman</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="demo-name" className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-slate-500" />
                  Name
                </Label>
                <Input
                  id="demo-name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-11 px-3.5 border-slate-300 focus-visible:ring-primary/20 focus-visible:border-primary transition-all rounded-lg placeholder:text-slate-400 bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="demo-email" className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-slate-500" />
                  Email
                </Label>
                <Input
                  id="demo-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-11 px-3.5 border-slate-300 focus-visible:ring-primary/20 focus-visible:border-primary transition-all rounded-lg placeholder:text-slate-400 bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="demo-phone" className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                  <PhoneIcon className="w-4 h-4 text-slate-500" />
                  Phone
                </Label>
                <Input
                  id="demo-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-11 px-3.5 border-slate-300 focus-visible:ring-primary/20 focus-visible:border-primary transition-all rounded-lg placeholder:text-slate-400 bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="demo-course" className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-slate-500" />
                  Course
                </Label>
                <Select
                  value={formData.course}
                  onValueChange={(val) => setFormData((p) => ({ ...p, course: val }))}
                >
                  <SelectTrigger 
                    id="demo-course" 
                    className="min-h-[54px] h-auto py-2.5 px-4 border-slate-300 focus:ring-primary/20 focus:border-primary transition-all rounded-xl text-left bg-white [&>span]:line-clamp-none flex items-center justify-between gap-3"
                  >
                    <SelectValue placeholder="Interested in" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl shadow-lg border-border/80 max-h-[320px] p-1.5">
                    <SelectItem value="GRE Private Tutoring" className="py-3 px-3 cursor-pointer rounded-lg focus:bg-primary/5 focus:text-primary transition-colors">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-bold text-sm text-foreground">GRE Private Tutoring</span>
                        <span className="text-xs text-muted-foreground font-normal">1-on-1 Personalized Tutors</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="GMAT Online" className="py-3 px-3 cursor-pointer rounded-lg focus:bg-primary/5 focus:text-primary transition-colors">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-bold text-sm text-foreground">GMAT Online</span>
                        <span className="text-xs text-muted-foreground font-normal">Live Online Coaching & Interactive Sessions</span>
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
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-12 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-95 text-white shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 group mt-6" 
                disabled={!canSubmit}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white stroke-none group-hover:scale-110 transition-transform duration-200" />
                    <span>Free Demo</span>
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
