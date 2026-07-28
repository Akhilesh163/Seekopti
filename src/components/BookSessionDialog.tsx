import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { buildMessageWithPhone, useContactFormSubmit } from "@/hooks/useContactFormSubmit";
import { Calendar, User, Mail, Phone, GraduationCap, ArrowRight } from "lucide-react";

type BookSessionDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
};

export function BookSessionDialog({
  open,
  onOpenChange,
  title = "Book a session",
  description = "Select your target exam and fill in your details to book a consultation with Aman.",
}: BookSessionDialogProps) {
  const initialState = useMemo(
    () => ({ name: "", email: "", phone: "", exam: "" }),
    [],
  );
  const [formData, setFormData] = useState(initialState);

  const { isSubmitting, submit } = useContactFormSubmit({
    formSource: "Book a session",
    successMessage: "Thanks! Your session request is submitted. We'll contact you soon.",
  });

  const canSubmit =
    formData.name.trim().length > 0 &&
    formData.email.trim().length > 0 &&
    formData.phone.trim().length > 0 &&
    formData.exam !== "" &&
    !isSubmitting;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const ok = await submit(
      {
        name: formData.name,
        email: formData.email,
        message: buildMessageWithPhone(`Target Exam: ${formData.exam}`, formData.phone) || "Book a session request",
      },
      () => {
        setFormData(initialState);
        onOpenChange(false);
      },
    );

    if (!ok) return;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] rounded-2xl sm:rounded-2xl border-primary/15 shadow-2xl p-6 sm:p-8 overflow-hidden">
        <DialogHeader className="text-left">
          <div className="flex flex-col items-start pb-2">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 shadow-sm">
              <Calendar className="w-6 h-6" />
            </div>
            <DialogTitle className="text-2xl font-bold tracking-tight text-foreground bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-2 text-base leading-relaxed">
              {description}
            </DialogDescription>
          </div>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-6 pt-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="book-session-name" className="text-sm font-semibold text-foreground/80 flex items-center gap-1.5">
                <User className="w-4 h-4 text-muted-foreground/75" />
                Name
              </Label>
              <Input
                id="book-session-name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                required
                className="h-11 px-3.5 border-border/80 focus-visible:ring-primary/20 focus-visible:border-primary transition-all rounded-lg placeholder:text-muted-foreground/60"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="book-session-phone" className="text-sm font-semibold text-foreground/80 flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-muted-foreground/75" />
                Phone
              </Label>
              <Input
                id="book-session-phone"
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                required
                className="h-11 px-3.5 border-border/80 focus-visible:ring-primary/20 focus-visible:border-primary transition-all rounded-lg placeholder:text-muted-foreground/60"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="book-session-email" className="text-sm font-semibold text-foreground/80 flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-muted-foreground/75" />
              Email
            </Label>
            <Input
              id="book-session-email"
              name="email"
              type="email"
              placeholder="you@email.com"
              value={formData.email}
              onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
              required
              className="h-11 px-3.5 border-border/80 focus-visible:ring-primary/20 focus-visible:border-primary transition-all rounded-lg placeholder:text-muted-foreground/60"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="book-session-exam" className="text-sm font-semibold text-foreground/80 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-muted-foreground/75" />
              Course
            </Label>
            <Select
              value={formData.exam}
              onValueChange={(val) => setFormData((p) => ({ ...p, exam: val }))}
            >
              <SelectTrigger 
                id="book-session-exam" 
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

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end pt-4 border-t border-border/40">
            <Button 
              type="button" 
              variant="ghost" 
              onClick={() => onOpenChange(false)} 
              disabled={isSubmitting}
              className="h-11 font-medium hover:bg-muted rounded-xl transition-colors"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="h-11 rounded-xl px-8 font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-95 text-white shadow-md shadow-primary/10 transition-all flex items-center justify-center gap-2 group" 
              disabled={!canSubmit}
            >
              {isSubmitting ? (
                "Booking..."
              ) : (
                <>
                  <span>Book Session</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
