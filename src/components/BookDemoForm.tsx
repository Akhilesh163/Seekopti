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
    <section className="section-padding bg-gradient-to-b from-background via-blue-50/20 to-background relative overflow-hidden mesh-pink-orange" id="book-demo">
      {/* Decorative colorful glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-400/5 blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-pink-400/5 blur-3xl pointer-events-none -z-10" />
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="pill pill-blue mb-4">BOOK A DEMO</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
              Start Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Journey</span> Today
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-[540px]">
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
                <div key={benefit.text} className="flex items-start gap-4 p-4 bg-card border border-border/60 hover:border-primary/30 rounded-2xl hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-0.5 shadow-sm">
                    <CheckCircle className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-base font-bold text-foreground block leading-tight">{benefit.text}</span>
                    <span className="text-base text-muted-foreground mt-1.5 block leading-snug">{benefit.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 md:p-10 relative overflow-hidden border border-primary/15 shadow-elevated">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent" />
            
            <div className="mb-8">
              <h3 className="text-2xl font-extrabold text-foreground mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Fill the Form</h3>
              <p className="text-sm text-muted-foreground">Book your free 30-minute consultation with Aman</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="demo-name" className="text-sm font-semibold text-foreground/80 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-muted-foreground/75" />
                  Name
                </Label>
                <Input
                  id="demo-name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-11 px-3.5 border-border/80 focus-visible:ring-primary/20 focus-visible:border-primary transition-all rounded-lg placeholder:text-muted-foreground/60"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="demo-email" className="text-sm font-semibold text-foreground/80 flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-muted-foreground/75" />
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
                  className="h-11 px-3.5 border-border/80 focus-visible:ring-primary/20 focus-visible:border-primary transition-all rounded-lg placeholder:text-muted-foreground/60"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="demo-phone" className="text-sm font-semibold text-foreground/80 flex items-center gap-1.5">
                  <PhoneIcon className="w-4 h-4 text-muted-foreground/75" />
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
                  className="h-11 px-3.5 border-border/80 focus-visible:ring-primary/20 focus-visible:border-primary transition-all rounded-lg placeholder:text-muted-foreground/60"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="demo-course" className="text-sm font-semibold text-foreground/80 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-muted-foreground/75" />
                  Course
                </Label>
                <Select
                  value={formData.course}
                  onValueChange={(val) => setFormData((p) => ({ ...p, course: val }))}
                >
                  <SelectTrigger 
                    id="demo-course" 
                    className="min-h-[54px] h-auto py-2.5 px-4 border-border/80 focus:ring-primary/20 focus:border-primary transition-all rounded-xl text-left bg-background [&>span]:line-clamp-none flex items-center justify-between gap-3"
                  >
                    <SelectValue placeholder="Interested in" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl shadow-lg border-border/80 max-h-[320px] p-1.5">
                    <SelectItem value="GRE Online" className="py-3 px-3 cursor-pointer rounded-lg focus:bg-primary/5 focus:text-primary transition-colors">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-bold text-sm text-foreground">GRE Online</span>
                        <span className="text-xs text-muted-foreground font-normal">Live Online Coaching & Interactive Sessions</span>
                      </div>
                    </SelectItem>
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

              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-12 rounded-xl font-bold bg-gradient-to-r from-primary to-accent hover:opacity-95 text-white shadow-md shadow-primary/10 transition-all flex items-center justify-center gap-2 group mt-6" 
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
