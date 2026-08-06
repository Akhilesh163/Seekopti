import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import { Play, HelpCircle, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What exactly does Seek Your Y offer?",
    answer:
      "Six things: a self-paced course, live online classes, one-on-one private tutoring, a full test series, live doubt-solving sessions, and admissions consulting — for both the GRE and the GMAT.",
  },
  {
    question: "Do you teach only Quant?",
    answer:
      "No. We cover the complete GRE (Quant, Verbal and Analytical Writing) and the complete GMAT Focus Edition (Quant, Verbal and Data Insights). Logic-first teaching is our method — it isn't a restriction on the syllabus.",
  },
  {
    question: "Are the classes live or recorded?",
    answer:
      "Both, and you choose. The self-paced course is fully recorded and available immediately. Live classes are taught in real time in small batches. Every live-class student also gets the recorded course, so nothing is missed if you skip a session.",
  },
  {
    question: "How do I enrol in a course?",
    answer:
      "Book a free demo, take a short diagnostic, and we'll recommend the track that fits your target score and timeline. You enrol online and get access the same day.",
  },
  {
    question: "How long is my course valid for?",
    answer:
      "Six months from the date of enrolment — and that applies to everything: self-paced course, live class recordings, study material and test series.",
  },
  {
    question: "Do you offer one-on-one mentoring?",
    answer:
      "Yes, and it's a core part of what we do. Private tutoring is built entirely around your diagnostic, your weak areas and your calendar. Sessions can be online or in person at our Nagpur centre.",
  },
  {
    question: "How much time should I study outside class?",
    answer:
      "Plan for roughly 2 to 2.5 hours a day alongside the course. You'll get a written action plan with daily targets, so you always know what \"enough\" looks like.",
  },
  {
    question: "Do I need to buy any other books or material?",
    answer:
      "No. Everything you need — concept videos, notes, question banks and mocks — is included in your enrolment.",
  },
];

export const FAQ = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <section className="section-padding bg-gradient-to-b from-background via-blue-50/20 to-background relative overflow-hidden mesh-purple-teal" id="faq">
      {/* Decorative colorful glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-400/5 blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-purple-400/5 blur-3xl pointer-events-none -z-10" />
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-[80%] max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-600 text-base md:text-lg font-extrabold uppercase tracking-[0.14em] shadow-sm mb-4">
              <HelpCircle className="w-4 h-4 text-blue-600 stroke-[2.5]" />
              <span>FAQ</span>
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Frequently Asked <span className="headline-primary">Questions</span>
            </h2>
          </div>

          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={setOpenItem}
            className="divide-y divide-slate-300 border-t border-b border-slate-300 dark:divide-slate-700 dark:border-slate-700"
          >
            {faqs.map((faq, index) => {
              const itemValue = `item-${index}`;
              const isOpen = openItem === itemValue;

              return (
                <AccordionItem
                  key={index}
                  value={itemValue}
                  className="border-b-0 py-1"
                >
                  <AccordionTrigger
                    className={cn(
                      "text-left text-lg md:text-xl font-bold py-5 hover:no-underline transition-colors flex items-center justify-between gap-4 [&>svg]:hidden",
                      isOpen ? "text-blue-600" : "text-slate-900 hover:text-blue-600"
                    )}
                  >
                    <span className="flex-1 text-left">{faq.question}</span>
                    <div className="shrink-0 ml-2">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-blue-600 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-5 h-5 text-slate-800 stroke-[2.5]" />
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-slate-600 pb-6 leading-relaxed pt-1">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          {/* Still have questions CTA */}
          <div className="text-center mt-16 pt-8 border-t border-border/40">
            <p className="text-muted-foreground mb-4 text-base">
              Still have questions about our methodology or programs?
            </p>
            <Button
              size="lg"
              className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-soft hover-lift"
              onClick={() => setIsBookDemoOpen(true)}
            >
              <Play className="w-4 h-4 fill-current" />
              Book Free Demo
            </Button>
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
