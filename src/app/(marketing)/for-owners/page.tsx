import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "For Owners", description: "Guaranteed monthly payouts. Verified HNI tenants. Zero vacancy risk." };

const benefits = [
  "Guaranteed monthly income", "Zero vacancy risk", "HNI-verified tenants",
  "No property damage risk", "Dedicated RM support", "Higher effective returns",
];

export default function ForOwnersPage() {
  return (
    <>
      <Section className="pt-32 pb-16 bg-gradient-to-b from-navy-50/30 to-white dark:from-navy-900 dark:to-navy-950">
        <Container size="sm" className="text-center">
          <Text size="sm" weight="semibold" className="!text-gold-700 uppercase tracking-wider">For Property Owners</Text>
          <Heading level={1} className="mt-4">Guaranteed Income. Zero Vacancy.</Heading>
          <Text muted className="mt-5 text-lg">List your premium property and receive predictable monthly payouts powered by NBFC-grade infrastructure.</Text>
          <Button variant="primary" size="lg" className="mt-8 shadow-gold">List Your Property</Button>
        </Container>
      </Section>

      <Section spacing="md" className="bg-white dark:bg-navy-950">
        <Container size="sm">
          <div className="bg-navy-900 dark:bg-navy-800 rounded-2xl p-8 sm:p-10 text-white text-center">
            <Heading level={3} className="!text-white">Estimated Monthly Payout</Heading>
            <Text className="!text-navy-300 mt-1">Based on ₹1 Cr property, 70% deposit</Text>
            <div className="mt-6 text-5xl font-display font-bold text-gold-400">₹43,750/mo</div>
            <Text className="!text-navy-400 mt-2 text-sm">Guaranteed, on the 1st of every month</Text>
          </div>
        </Container>
      </Section>

      <Section spacing="md" className="bg-surface-50 dark:bg-navy-900">
        <Container>
          <Heading level={2} className="text-center mb-10">Why Owners Choose NWTR</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b} className="bg-white dark:bg-navy-800 rounded-xl border border-navy-100 dark:border-navy-700 p-5 flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span>
                <span className="text-sm text-navy-700 dark:text-navy-200 font-medium">{b}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
