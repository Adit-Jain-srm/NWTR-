import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "For Tenants", description: "Live in premium properties with zero monthly rent. Deposit, live free, get full refund." };

const journey = [
  { step: "1", title: "Browse", desc: "Discover premium verified listings in your preferred location" },
  { step: "2", title: "Deposit", desc: "Make a one-time deposit (50-80% of property value)" },
  { step: "3", title: "Live", desc: "Enjoy premium living for 1 year with zero monthly rent" },
  { step: "4", title: "Refund", desc: "Get 100% of your deposit back at tenure end" },
];

const benefits = [
  "Save ₹6-18L/year in rent", "Premium properties only", "Wealth preservation",
  "No broker hassle — dedicated RM", "NBFC-protected deposit", "Flexible exit options",
];

export default function ForTenantsPage() {
  return (
    <>
      <Section className="pt-32 pb-16 bg-gradient-to-b from-gold-50/40 to-white dark:from-navy-900 dark:to-navy-950">
        <Container size="sm" className="text-center">
          <Text size="sm" weight="semibold" className="!text-gold-700 uppercase tracking-wider">For Tenants</Text>
          <Heading level={1} className="mt-4">Live Premium. Pay Zero Rent.</Heading>
          <Text muted className="mt-5 text-lg">The smartest way to rent. Your deposit works for you while you live in luxury.</Text>
          <Button variant="primary" size="lg" className="mt-8 shadow-gold">Get Started</Button>
        </Container>
      </Section>

      <Section spacing="md" className="bg-white dark:bg-navy-950">
        <Container>
          <Heading level={2} className="text-center mb-10">Your Journey</Heading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {journey.map((j) => (
              <div key={j.step} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-gold-50 dark:bg-gold-500/10 border border-gold-200 dark:border-gold-500/20 flex items-center justify-center font-display font-bold text-gold-700">{j.step}</div>
                <h3 className="mt-4 font-display font-bold text-navy-900 dark:text-white">{j.title}</h3>
                <p className="mt-2 text-xs text-navy-500 dark:text-navy-400">{j.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="md" className="bg-surface-50 dark:bg-navy-900">
        <Container>
          <Heading level={2} className="text-center mb-10">Why Tenants Love NWTR</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b} className="bg-white dark:bg-navy-800 rounded-xl border border-navy-100 dark:border-navy-700 p-5 flex items-center gap-3">
                <span className="text-gold-500 font-bold">✓</span>
                <span className="text-sm text-navy-700 dark:text-navy-200 font-medium">{b}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
