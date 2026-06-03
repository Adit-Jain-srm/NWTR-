import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About", description: "NWTR is building the future of intelligent renting in India." };

export default function AboutPage() {
  return (
    <>
      <Section className="pt-32 pb-16 bg-white dark:bg-navy-950">
        <Container size="sm" className="text-center">
          <Text size="sm" weight="semibold" className="!text-gold-700 uppercase tracking-wider">About Us</Text>
          <Heading level={1} className="mt-4">Redefining Rental for India</Heading>
          <Text muted className="mt-5 text-lg">Founded on a simple insight: security deposits sitting idle at 0% return can be made to work for everyone.</Text>
        </Container>
      </Section>

      <Section spacing="md" className="bg-surface-50 dark:bg-navy-900">
        <Container size="sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <Heading level={3}>Mission</Heading>
              <Text muted className="mt-3">Create a trust-driven rental ecosystem where tenants preserve wealth, owners earn predictable income, and capital works intelligently.</Text>
            </div>
            <div>
              <Heading level={3}>Vision</Heading>
              <Text muted className="mt-3">A world where renting is not a financial drain but a sophisticated capital allocation decision. Starting with India&apos;s premium urban markets.</Text>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="md" className="bg-white dark:bg-navy-950">
        <Container size="sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "2026", label: "Founded" },
              { val: "Bangalore", label: "First Market" },
              { val: "NBFC", label: "Regulated" },
              { val: "HNI", label: "Target Segment" },
            ].map((f) => (
              <div key={f.label}>
                <div className="text-2xl font-display font-bold text-gold-600">{f.val}</div>
                <div className="text-xs text-navy-500 dark:text-navy-400 mt-1">{f.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
