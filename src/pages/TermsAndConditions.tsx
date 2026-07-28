import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="section-padding pt-[84px]">
        <div className="container-narrow max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold font-display leading-[1.1] tracking-tight text-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground">Seek Your Y</p>
          </div>

          <div className="glass-card p-8 md:p-10 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the services provided by Seek Your Y ("Company", "we", "our", or "us"), including but not limited to video lectures, PDFs, and tests for GMAT and GRE Quant ("Services"), you ("User" or "you") agree to comply with and be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, please refrain from using our Services.
              </p>
            </section>

            <div className="border-t border-border pt-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Seek Your Y offers educational content, including video lectures and tests, to assist users in preparing for GMAT and GRE quantitative sections. While we strive for accuracy, we do not guarantee specific results or improvements in test scores.
                </p>
              </section>
            </div>

            <div className="border-t border-border pt-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Account Registration</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Users may be required to create an account to access certain Services. You agree to provide accurate, complete, and up-to-date information during registration and to keep this information current.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Use of Services</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree to use our Services solely for personal, non-commercial purposes. Unauthorized distribution, reproduction, modification, or resale of our content is strictly prohibited.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Prohibited Conduct</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Users shall not engage in any activity that disrupts or interferes with our Services, including but not limited to hacking, transmitting malware, or violating any applicable laws.
                </p>
              </section>
            </div>

            <div className="border-t border-border pt-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Content Ownership</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All content provided by Seek Your Y, including but not limited to videos, text, graphics, and logos, is the intellectual property of the Company or its licensors and is protected by applicable intellectual property laws.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Third-Party Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Questions used in our materials may be sourced from official and unofficial GMAT and GRE sources. While questions may be sourced externally, all solutions and explanatory content are original works of Seek Your Y.
                </p>
              </section>
            </div>

            <div className="border-t border-border pt-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Disclaimers and Limitation of Liability</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">No Warranty</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our Services are provided "as is" without any warranties, express or implied. We do not warrant that the Services will be uninterrupted or error-free.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Limitation of Liability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, Seek Your Y shall not be liable for any indirect, incidental, or consequential damages arising from your use of our Services.
                </p>
              </section>
            </div>

            <div className="border-t border-border pt-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of Maharashtra, India, without regard to its conflict of law principles.
                </p>
              </section>
            </div>

            <div className="border-t border-border pt-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of the Services constitutes acceptance of the revised Terms.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
