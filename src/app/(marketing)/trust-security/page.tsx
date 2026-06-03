import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Trust & Security", description: "How NWTR protects your deposit with NBFC-grade infrastructure and regulatory compliance." };

const protections = [
  { title: "Segregated Escrow", desc: "Your deposit sits in a ring-fenced escrow. Cannot be used for NWTR operations." },
  { title: "NBFC-Managed Investments", desc: "Funds only in ultra-safe: bank FDs (6-7%), government bonds (7-8%), liquid funds (5-6%)." },
  { title: "Insurance Coverage", desc: "Both property and deposit insured against unforeseen events." },
  { title: "Quarterly Audits", desc: "Independent auditors verify fund allocation. Reports available to all depositors." },
];

export default function TrustSecurityPage() {
  return (
    <>
      <Section className="pt-32 pb-16 bg-white dark:bg-navy-950">
        <Container size="sm" className="text-center">
          <Text size="sm" weight="semibold" className="!text-gold-700 uppercase tracking-wider">Trust & Security</Text>
          <Heading level={1} className="mt-4">Institutional-Grade Security</Heading>
          <Text muted className="mt-5 text-lg">Your deposit is protected by the same framework governing banks and financial institutions in India.</Text>
        </Container>
      </Section>

      <Section spacing="md" dark>
        <Container size="sm">
          <Heading level={2} className="!text-white text-center mb-8">How Your Deposit Is Protected</Heading>
          <div className="space-y-5">
            {protections.map((p, i) => (
              <div key={p.title} className="glass-dark rounded-xl p-6 border border-white/5">
                <h3 className="font-display font-bold text-gold-400">{i + 1}. {p.title}</h3>
                <p className="mt-2 text-sm text-navy-300">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
