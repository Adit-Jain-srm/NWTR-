import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About NWTR",
  description: "NWTR is building the future of intelligent renting in India — a premium proptech-fintech platform for the financially aware.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="pt-32 pb-16 bg-white">
          <Container size="narrow" className="text-center">
            <span className="text-sm font-medium text-gold-700 uppercase tracking-wider">About Us</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-navy-900">
              Redefining Rental for India
            </h1>
            <p className="mt-6 text-lg text-navy-600 leading-relaxed">
              NWTR was founded on a simple insight: in a country where security deposits are a norm,
              why not make that capital work for everyone?
            </p>
          </Container>
        </Section>

        {/* Mission */}
        <Section className="py-16 bg-surface-50">
          <Container size="narrow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-display font-bold text-navy-900">Our Mission</h2>
                <p className="mt-4 text-navy-600 leading-relaxed">
                  To create a trust-driven rental ecosystem where tenants preserve wealth,
                  owners earn predictable income, and capital works intelligently for all parties.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-navy-900">Our Vision</h2>
                <p className="mt-4 text-navy-600 leading-relaxed">
                  A world where renting is not a financial drain but a sophisticated capital allocation decision.
                  Starting with India&apos;s premium urban markets.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Key facts */}
        <Section className="py-16 bg-white">
          <Container size="narrow">
            <h2 className="text-2xl font-display font-bold text-navy-900 text-center mb-12">Key Facts</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-display font-bold text-gold-600">2026</div>
                <div className="text-sm text-navy-500 mt-1">Founded</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-gold-600">Bangalore</div>
                <div className="text-sm text-navy-500 mt-1">First Market</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-gold-600">NBFC</div>
                <div className="text-sm text-navy-500 mt-1">Regulated Structure</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-gold-600">HNI</div>
                <div className="text-sm text-navy-500 mt-1">Target Segment</div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Values */}
        <Section className="py-16 bg-navy-900 text-white">
          <Container size="narrow">
            <h2 className="text-2xl font-display font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-display font-bold">Trust First</h3>
                <p className="mt-2 text-sm text-navy-300">Every decision is evaluated through the lens of depositor trust.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-display font-bold">Intelligence</h3>
                <p className="mt-2 text-sm text-navy-300">Financial sophistication accessible to every premium renter.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-display font-bold">Fairness</h3>
                <p className="mt-2 text-sm text-navy-300">A model where all three parties genuinely benefit.</p>
              </div>
            </div>
          </Container>
        </Section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
