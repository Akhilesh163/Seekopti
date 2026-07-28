import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Plus, Minus, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookSessionDialog } from "@/components/BookSessionDialog";

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface CustomFAQProps {
  faqs: FAQItem[];
  title?: string;
}

export const CustomFAQ: React.FC<CustomFAQProps> = ({
  faqs,
  title = "Frequently asked questions",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  return (
    <section className="section-padding bg-gradient-to-b from-background via-blue-50/20 to-background relative overflow-hidden mesh-purple-teal" id="faq">
      {/* Decorative colorful glows matching landing page */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-400/5 blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-purple-400/5 blur-3xl pointer-events-none -z-10" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-[80%] max-w-[1400px] mx-auto">
          {/* Centered Heading */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-600 text-base md:text-lg font-extrabold uppercase tracking-[0.14em] shadow-sm mb-4">
              <HelpCircle className="w-4 h-4 text-blue-600 stroke-[2.5]" />
              <span>FAQ</span>
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-display tracking-tight">
              {title === "Frequently asked questions" ? (
                <>
                  Frequently Asked <span className="headline-primary">Questions</span>
                </>
              ) : (
                title
              )}
            </h2>
          </div>

          {/* FAQ Accordion List without card borders */}
          <div className="divide-y divide-slate-300 border-t border-b border-slate-300 dark:divide-slate-700 dark:border-slate-700">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={idx} className="py-1">
                  {/* Trigger Button */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left text-lg md:text-xl font-bold py-5 cursor-pointer focus:outline-none hover:no-underline transition-colors"
                  >
                    <span className={`font-display font-bold tracking-tight pr-4 transition-colors ${
                      isOpen ? "text-blue-600" : "text-slate-900 hover:text-blue-600"
                    }`}>
                      {faq.question}
                    </span>
                    <div className="shrink-0 ml-2">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-blue-600 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-5 h-5 text-slate-800 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {/* Collapsible Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="text-base text-slate-600 pb-6 leading-relaxed pt-1">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Still have questions CTA block matching landing page */}
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
