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
    { label: "GMAT QUANT", href: LMS_GMAT_QUANT, external: true },
    { label: "GRE QUANT", href: LMS_GRE_QUANT, external: true },
    { label: "Private Tutoring", href: "/tutoring" },
    { label: "Test Series", href: LMS_TEST_SERIES, external: true },
  ],
  Company: [
    { label: "About Aman", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
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
      <div className="container-narrow pt-20 md:pt-28 lg:pt-32 pb-8 md:pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6 isolate">
              <BrandLogo variant="onDark" size="lg" />
            </Link>
            <p className="text-base text-white/70 mb-4 max-w-sm">
              Led by Aman with 8+ years of experience mentoring 4000+ students to conquer GMAT & GRE Quant.
            </p>
            <p className="text-base text-white/70 mb-6 max-w-sm italic">
              "Quant doesn't have To be scary."
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
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
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
