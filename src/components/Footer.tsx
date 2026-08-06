import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import { BrandLogo } from "@/components/BrandLogo";

const LMS_GMAT_QUANT = "https://lms.seekyoury.com/learn/Quants-For-GMAT";
const LMS_GRE_QUANT = "https://lms.seekyoury.com/learn/Quants-for-GRE";
const LMS_TEST_SERIES = "https://lms.seekyoury.com/learn/view-all?show=mock-tests&type=2";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  action?: "book-demo";
};

const footerLinks: Record<string, FooterLink[]> = {
  Courses: [
    { label: "GRE Self-Paced Course", href: "/self-paced" },
    { label: "GRE Live Classes", href: "/gre-live" },
    { label: "GRE Private Tutoring", href: "/tutoring" },
    { label: "GMAT Self-Paced Course", href: "/gmat-self-paced" },
    { label: "GMAT Live Classes", href: "/gmat-live" },
    { label: "GMAT Private Tutoring", href: "/gmat-private-tutoring" },
    { label: "Test Series", href: "/test-series" },
    { label: "Admissions Consulting", href: "/admissions" },
  ],
  Company: [
    { label: "About GRE", href: "/about-gmat" },
    { label: "About GMAT", href: "/about-gmat" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Blog", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
};

export const Footer = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  const renderLink = (link: FooterLink) => {
    if (link.action === "book-demo") {
      return (
        <button
          type="button"
          onClick={() => setIsBookDemoOpen(true)}
          className="text-white/70 hover:text-white transition-colors text-left"
        >
          {link.label}
        </button>
      );
    }

    if (link.external || link.href.startsWith("http")) {
      return (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition-colors"
        >
          {link.label}
        </a>
      );
    }

    return (
      <Link to={link.href} className="text-white/70 hover:text-white transition-colors">
        {link.label}
      </Link>
    );
  };

  return (
    <footer className="bg-black text-white relative">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundImage: "var(--gradient-primary)" }} />
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 lg:pt-32 pb-8 md:pb-12">
        <div className="max-w-[1380px] mx-auto grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6 isolate">
              <BrandLogo variant="onDark" size="lg" />
            </Link>
            <p className="text-base text-white/70 mb-4 max-w-sm">
              It was never about the quant. It's about the prep.
            </p>
            <p className="text-base text-white/70 mb-6 max-w-sm italic">
              Led by Aman — nine years, a thousand-plus students, one question: *why?*
            </p>
            <Button
              size="lg"
              className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
              onClick={() => setIsBookDemoOpen(true)}
            >
              <Play className="w-4 h-4" />
              Book Free Demo
            </Button>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>{renderLink(link)}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-4">Get in touch</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>S-3, Third Floor,</li>
              <li>Metro Plaza, Gorewada Square,</li>
              <li>Nagpur, Maharashtra – 440013</li>
              <li>
                <a href="tel:+917020183495" className="hover:text-white transition-colors">
                  +91 70201 83495
                </a>
              </li>
              <li>Monday to Sunday</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start gap-8">
          <p className="text-sm text-white/50">© 2024 SeekYourY. All rights reserved.</p>
        </div>
      </div>

      <a
        href="https://wa.me/917020183495"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-elevated transition-all hover:scale-110 z-50 bg-[hsl(var(--success-green))] hover:bg-[hsl(var(--success-green))]/90"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>

      <BookSessionDialog
        open={isBookDemoOpen}
        onOpenChange={setIsBookDemoOpen}
        title="Book a free demo"
        description="Share your details and we'll schedule a free 30-minute consultation with Aman."
      />
    </footer>
  );
};
