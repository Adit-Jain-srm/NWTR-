import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { DepositSimulator } from "@/components/sections/deposit-simulator";
import { CTASection } from "@/components/sections/cta-section";
import { FAQ } from "@/components/sections/faq";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Tenants",
  description: "Live in premium properties with zero monthly rent. Make a deposit, live rent-free, get your full deposit back.",
};

const journey = [
  { step: "Browse", desc: "Discover premium verified listings in your preferred location" },
  { step: "Deposit", desc: "Make a one-time deposit (50-80% of property value)" },
  { step: "Live", desc: "Enjoy premium living for 1 year with zero monthly rent" },
  { step: "Refund", desc: "Get 100% of your deposit back at tenure end" },
];

const benefits = [
  { title: "Save ₹6-18L/year", description: "The money you'd spend on rent stays yours. Zero burn." },
  { title: "Premium Properties Only", description: "Access to HNI-grade homes in Koramangala, Indiranagar, HSR, and more." },
  { title: "Wealth Preservation", description: "Your deposit isn't an expense — it's capital preservation with full return." },
  { title: "No Broker Hassle", description: "Dedicated RM handles everything from viewing to agreement signing." },
  { title: "NBFC-Protected Deposit", description: "Your money sits in a regulated escrow, not with a landlord." },
  { title: "Flexible Exit Options", description: "Need to leave early? Pro-rated refund with reasonable notice." },
];

export default function ForTenantsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="pt-32 pb-16 bg-gradient-to-b from-gold-50/50 to-white">
          <Container size="narrow" className="text-center">
            <span className="text-sm font-medium text-gold-700 uppercase tracking-wider">For Tenants</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-navy-900">
              Live Premium. Pay Zero Rent.
            </h1>
            <p className="mt-6 text-lg text-navy-600 leading-relaxed">
              The smartest way to rent. Your deposit works for you while you live in luxury.
            </p>
          </Container>
        </Section>

        {/* Journey */}
        <Section className="py-16 bg-white">
          <Container>
            <h2 className="text-2xl font-display font-bold text-navy-900 text-center mb-12">Your Journey</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {journey.map((item, i) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center font-display font-bold text-gold-700">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 font-display font-bold text-navy-900">{item.step}</h3>
                  <p className="mt-2 text-xs text-navy-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Benefits */}
        <Section className="py-16 bg-surface-50">
          <Container>
            <h2 className="text-2xl font-display font-bold text-navy-900 text-center mb-12">Why Tenants Love NWTR</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="bg-white rounded-xl border border-navy-100 p-6">
                  <h3 className="font-display font-bold text-navy-900">{b.title}</h3>
                  <p className="mt-2 text-sm text-navy-500">{b.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <DepositSimulator />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
