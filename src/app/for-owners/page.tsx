import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Owners",
  description: "List your property and receive guaranteed monthly payouts. Verified HNI tenants, zero vacancy risk.",
};

const benefits = [
  { title: "Guaranteed Monthly Income", description: "Receive predictable payouts on the 1st of every month via NACH — no chasing rent." },
  { title: "Zero Vacancy Risk", description: "Properties are matched with verified tenants before listing goes live." },
  { title: "HNI-Verified Tenants", description: "3-tier KYC process ensures only financially stable, responsible tenants." },
  { title: "No Property Damage Risk", description: "Deposits are structured to ensure property care. Insurance covers exceptions." },
  { title: "Dedicated RM Support", description: "Your Relationship Manager handles tenant communication, maintenance requests, and more." },
  { title: "Higher Effective Returns", description: "Factor in zero vacancy + zero brokerage + guaranteed income = better than traditional rental." },
];

const process = [
  { step: "List", title: "List Your Property", desc: "Submit property details and get a valuation within 48 hours." },
  { step: "Verify", title: "KYC & Verification", desc: "Complete property documentation and ownership verification." },
  { step: "Match", title: "Tenant Matching", desc: "We match your property with verified HNI tenants." },
  { step: "Earn", title: "Start Earning", desc: "Receive monthly payouts from day one of the lease." },
];

export default function ForOwnersPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="pt-32 pb-16 bg-gradient-to-b from-navy-50/30 to-white">
          <Container size="narrow" className="text-center">
            <span className="text-sm font-medium text-gold-700 uppercase tracking-wider">For Property Owners</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-navy-900">
              Guaranteed Income. Zero Vacancy.
            </h1>
            <p className="mt-6 text-lg text-navy-600 leading-relaxed">
              List your premium property and receive predictable monthly payouts powered by NBFC-grade infrastructure.
            </p>
            <Button variant="primary" size="lg" className="mt-8">
              List Your Property
            </Button>
          </Container>
        </Section>

        {/* Process */}
        <Section className="py-16 bg-white">
          <Container>
            <h2 className="text-2xl font-display font-bold text-navy-900 text-center mb-12">How It Works for Owners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {process.map((item, i) => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-navy-900 flex items-center justify-center text-white font-display font-bold">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 font-display font-bold text-navy-900 text-sm">{item.title}</h3>
                  <p className="mt-2 text-xs text-navy-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Benefits */}
        <Section className="py-16 bg-surface-50">
          <Container>
            <h2 className="text-2xl font-display font-bold text-navy-900 text-center mb-12">Why Owners Choose NWTR</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="bg-white rounded-xl border border-navy-100 p-6">
                  <h3 className="font-display font-bold text-navy-900">{b.title}</h3>
                  <p className="mt-2 text-sm text-navy-500 leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Payout Calculator */}
        <Section className="py-16 bg-white">
          <Container size="narrow">
            <div className="bg-navy-900 rounded-2xl p-8 sm:p-12 text-white text-center">
              <h2 className="text-2xl font-display font-bold">Estimated Monthly Payout</h2>
              <p className="mt-2 text-navy-300 text-sm">Based on a ₹1 Cr property with 70% deposit</p>
              <div className="mt-8 text-5xl font-display font-bold text-gold-400">₹43,750/mo</div>
              <p className="mt-2 text-navy-400 text-sm">Guaranteed, on the 1st of every month</p>
              <Button variant="primary" size="lg" className="mt-8">
                Get Your Property Valued
              </Button>
            </div>
          </Container>
        </Section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
