import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useContactFormSubmit } from "@/hooks/useContactFormSubmit";

const emptyForm = { name: "", email: "", phone: "", message: "" };

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
      },
      () => setFormData(emptyForm),
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-50/70 via-slate-50 to-white pt-[76px] md:pt-[84px] pb-20 text-slate-900 border-b border-slate-200/60">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(rgba(15,23,42,0.06) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <div className="mx-auto max-w-[1200px] px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4 leading-[1.1] font-display">
            Contact Us
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Get in touch — we're here to help you navigate your journey.
          </p>
        </div>
      </header>

      <main className="section-padding -mt-12 pb-20">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* Top info cards - overlap hero */}
            <div className="mt-12 mb-10">
            <div className="mx-auto max-w-[1200px] px-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-[24px] bg-white p-8 shadow-soft text-center border border-border/50">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-6 h-6 text-[#1a2b4c] group-hover:text-white transition-colors duration-300" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h3 className="font-semibold">Office Address</h3>
              <p className="mt-3 text-sm text-muted-foreground">Seek Your Y, UGF 24, Arcadium One, Vrindavan Yojana Sector 16, Lucknow</p>
            </div>

            <div className="rounded-[24px] bg-white p-8 shadow-soft text-center border border-border/50">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call w-6 h-6 text-[#1a2b4c] group-hover:text-white transition-colors duration-300" aria-hidden="true"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
              </div>
              <h3 className="font-semibold">Call Us</h3>
              <p className="mt-3 text-sm text-muted-foreground">+91 7307870773</p>
            </div>

            <div className="rounded-[24px] bg-white p-8 shadow-soft text-center border border-border/50">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-6 h-6 text-[#1a2b4c] group-hover:text-white transition-colors duration-300" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
              </div>
              <h3 className="font-semibold">Email Us</h3>
              <p className="mt-3 text-sm text-muted-foreground">seekyoury@gmail.com</p>
            </div>

            <div className="rounded-[24px] bg-white p-8 shadow-soft text-center border border-border/50">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-6 h-6 text-[#1a2b4c] group-hover:text-white transition-colors duration-300" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
              </div>
              <h3 className="font-semibold">Open Time</h3>
              <p className="mt-3 text-sm text-muted-foreground">Tue - Sun (11:00AM - 08:00PM)</p>
            </div>
              </div>
            </div>
          </div>

          {/* Contact form card */}
          <div className="rounded-[28px] bg-white p-0 shadow-elevated overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="hidden md:block">
                <img src="/assets/gre-asset/contactUI.webp" alt="contact" className="h-full w-full object-cover" />
              </div>

              <div className="p-8 md:p-10">
                <h2 className="text-3xl font-bold text-foreground">Send your enquiry</h2>
                <p className="mt-2 text-sm text-muted-foreground">Fill in the particulars to help our team assist you</p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name">Your Name</Label>
                      <Input id="contact-name" name="name" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} required className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Your Email</Label>
                      <Input id="contact-email" name="email" type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} required className="mt-1.5" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input id="contact-phone" name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))} className="mt-1.5" />
                  </div>

                  <div>
                    <Label htmlFor="contact-message">Write Your Message</Label>
                    <Textarea id="contact-message" name="message" placeholder="Write Your Message (Min 15 words, Max 250 words)" value={formData.message} onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))} required className="mt-1.5 min-h-[140px]" />
                  </div>

                  <div className="pt-2">
                    <Button type="submit" className="rounded-full bg-rose-500 hover:bg-rose-600 text-white px-6 py-3" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : (
                        <>
                          <Send className="w-4 h-4 mr-2 inline" />
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
        href="tel:+917020183495"
        aria-label="Call us"
        className="fixed right-6 bottom-6 z-[100] h-16 w-16 rounded-full bg-gradient-to-br from-rose-400 to-orange-400 shadow-lg flex items-center justify-center text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 6.18 2 2 0 0 1 5 4h3a2 2 0 0 1 2 1.72c.12 1.01.37 2 .74 2.94a2 2 0 0 1-.45 2.11L9.91 12.91a16 16 0 0 0 6.18 6.18l1.06-1.06a2 2 0 0 1 2.11-.45c.94.37 1.93.62 2.94.74A2 2 0 0 1 22 16.92z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>

      <Footer />
    </div>
  );
};

export default ContactUs;
