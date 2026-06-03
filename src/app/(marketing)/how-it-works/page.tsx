import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { HowItWorks } from "@/components/sections/how-it-works";
import { DepositSimulator } from "@/components/sections/deposit-simulator";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "How It Works", description: "Understand how NWTR's deposit-based rental model works — from deposit to refund." };

const steps = [
  { n: "01", title: "Browse Properties", desc: "Explore verified listings in prime locations" },
  { n: "02", title: "Check Eligibility", desc: "Quick financial verification for your tier" },
  { n: "03", title: "Make Deposit", desc: "Transfer 50-80% of property value into NBFC escrow" },
  { n: "04", title: "Move In", desc: "Sign agreement and start living — zero rent" },
  { n: "05", title: "Live Rent-Free", desc: "Deposit generates yield funding owner payouts" },
  { n: "06", title: "Get Full Refund", desc: "Entire deposit returned at lease end" },
];

export default function HowItWorksPage() {
  return (
    <>
      <Section className="pt-32 pb-16 bg-white dark:bg-navy-950">
        <Container size="sm" className="text-center">
          <Heading level={1}>How NWTR Works</Heading>
          <Text muted className="mt-5 text-lg">A revolutionary model that preserves your wealth while giving you premium living.</Text>
        </Container>
      </Section>

      <Section spacing="sm" className="bg-surface-50 dark:bg-navy-900">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="bg-white dark:bg-navy-800 rounded-xl border border-navy-100 dark:border-navy-700 p-6">
                <span className="text-3xl font-display font-bold text-gold-400">{s.n}</span>
                <h3 className="mt-3 text-base font-display font-bold text-navy-900 dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-navy-500 dark:text-navy-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <HowItWorks />
      <DepositSimulator />
    </>
  );
}
