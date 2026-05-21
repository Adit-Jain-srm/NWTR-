import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HowItWorks } from "@/components/sections/how-it-works";
import { DepositSimulator } from "@/components/sections/deposit-simulator";
import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Understand how NWTR's deposit-based rental model works. See the complete flow from deposit to refund.",
};

const steps = [
  { number: "01", title: "Browse Premium Properties", description: "Explore verified listings in prime locations, curated for HNI lifestyles." },
  { number: "02", title: "Check Eligibility", description: "Quick financial verification to match you with the right property tier." },
  { number: "03", title: "Make Your Deposit", description: "Transfer 50-80% of property value into an NBFC-regulated escrow account." },
  { number: "04", title: "Move In", description: "Sign the agreement and start living in your premium home — zero monthly rent." },
  { number: "05", title: "Live Rent-Free", description: "Your deposit generates yield that funds owner payouts. You pay nothing." },
  { number: "06", title: "Get Full Refund", description: "At lease end, your entire deposit is returned to you. Full circle." },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="pt-32 pb-16 bg-white">
          <Container size="narrow" className="text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-navy-900">
              How NWTR Works
            </h1>
            <p className="mt-6 text-lg text-navy-600 leading-relaxed">
              A revolutionary rental model that preserves your wealth while giving you premium living.
            </p>
          </Container>
        </Section>

        <Section className="py-16 bg-surface-50">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="bg-white rounded-xl border border-navy-100 p-6">
                  <span className="text-3xl font-display font-bold text-gold-400">{step.number}</span>
                  <h3 className="mt-3 text-lg font-display font-bold text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-navy-500 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <HowItWorks />
        <DepositSimulator />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
