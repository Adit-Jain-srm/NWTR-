"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";

const tenantBenefits = [
  { icon: "🏠", title: "Premium Living", desc: "Access top-tier properties in prime locations without monthly rent" },
  { icon: "💰", title: "Zero Monthly Rent", desc: "Your deposit works for you — live free for the entire lease" },
  { icon: "↩️", title: "Full Refund", desc: "100% deposit returned at tenure end, guaranteed by NBFC escrow" },
  { icon: "📈", title: "Wealth Preservation", desc: "Your capital isn't burned on rent — it's preserved and returned" },
];

const ownerBenefits = [
  { icon: "💳", title: "Guaranteed Income", desc: "Monthly payouts from NWTR regardless of tenant circumstances" },
  { icon: "✅", title: "Verified Tenants", desc: "Only financially verified HNI tenants with KYC-cleared profiles" },
  { icon: "🛡️", title: "Zero Vacancy Risk", desc: "No vacancy anxiety, no default risk, no damage disputes" },
  { icon: "🤝", title: "RM Support", desc: "Dedicated Relationship Manager for seamless property management" },
];

export function ValueProposition() {
  return (
    <Section className="bg-white dark:bg-navy-950">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24 lg:mb-32">
          <ScrollReveal direction="left">
            <div>
              <Text size="sm" weight="semibold" className="!text-gold-700 uppercase tracking-wider">For Tenants</Text>
              <Heading level={2} className="mt-3">Live Premium. Pay Zero Rent.</Heading>
              <Text muted className="mt-4">Make a one-time deposit and enjoy premium living for an entire year. Your money stays yours — returned in full at the end.</Text>
              <Button variant="outline" size="md" className="mt-8">Learn More →</Button>
            </div>
          </ScrollReveal>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tenantBenefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="rounded-xl border border-navy-100 dark:border-navy-800 p-5 hover:border-gold-200 dark:hover:border-gold-500/30 hover:shadow-md transition-all duration-300">
                  <span className="text-2xl">{b.icon}</span>
                  <h3 className="mt-3 font-display font-bold text-navy-900 dark:text-white text-sm">{b.title}</h3>
                  <p className="mt-1 text-xs text-navy-500 dark:text-navy-400">{b.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
            {ownerBenefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="rounded-xl border border-navy-100 dark:border-navy-800 p-5 hover:border-gold-200 dark:hover:border-gold-500/30 hover:shadow-md transition-all duration-300">
                  <span className="text-2xl">{b.icon}</span>
                  <h3 className="mt-3 font-display font-bold text-navy-900 dark:text-white text-sm">{b.title}</h3>
                  <p className="mt-1 text-xs text-navy-500 dark:text-navy-400">{b.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <ScrollReveal direction="right" className="order-1 lg:order-2">
            <div>
              <Text size="sm" weight="semibold" className="!text-gold-700 uppercase tracking-wider">For Property Owners</Text>
              <Heading level={2} className="mt-3">Guaranteed Income. Zero Vacancy.</Heading>
              <Text muted className="mt-4">List your property and receive predictable monthly payouts from NWTR. No more chasing rent.</Text>
              <Button variant="outline" size="md" className="mt-8">List Your Property →</Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
