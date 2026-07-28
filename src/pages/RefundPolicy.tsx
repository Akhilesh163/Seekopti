import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="section-padding pt-[84px]">
        <div className="container-narrow max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold font-display leading-[1.1] tracking-tight text-foreground mb-4">
              Refund Policy
            </h1>
            <p className="text-muted-foreground">Seek Your Y</p>
          </div>

          <div className="glass-card p-8 md:p-10 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. No Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                All purchases of our Services are final. We do not offer refunds for any products or services, including but not limited to video lectures, PDFs, tests, and tutoring sessions.
              </p>
            </section>

            <div className="border-t border-border pt-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Free Demos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To help you make an informed decision, we provide free demo lessons. We encourage you to review these demos before purchasing any of our Services.
                </p>
              </section>
            </div>

            <div className="border-t border-border pt-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Exceptional Cases</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Refunds may be considered only in exceptional circumstances, such as:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Seek Your Y is unable to provide the purchased service.</li>
                  <li>The student is unable to access the course due to a verified technical issue or lack of support from our end.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  In such cases, a refund request must be submitted within seven (7) days of the purchase date. All requests will be reviewed on a case-by-case basis, and we reserve the right to approve or deny refund requests at our sole discretion.
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

export default RefundPolicy;
