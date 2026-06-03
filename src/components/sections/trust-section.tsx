"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { SecurityBadge, PartnerLogos } from "@/components/ui/security-badge";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";

const features = [
  { icon: "🏦", title: "NBFC Regulated", desc: "Funds managed through RBI-registered NBFC with strict compliance" },
  { icon: "🔐", title: "Escrow Protected", desc: "Every deposit in segregated escrow accounts with scheduled banks" },
  { icon: "📊", title: "SEBI Instruments", desc: "Invested only in government-backed FDs, T-Bills, and AAA securities" },
  { icon: "📋", title: "Legal Framework", desc: "Registered agreements, e-signed contracts, RERA compliance" },
  { icon: "🛡️", title: "Insurance Backed", desc: "Property and deposit insurance for unforeseen circumstances" },
  { icon: "✓", title: "Full Audit Trail", desc: "Real-time fund tracking and quarterly compliance reports" },
];

export function TrustSection() {
  return (
    <Section className="bg-surface-50 dark:bg-navy-900">
      <Container>
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <Text size="sm" weight="semibold" className="!text-gold-700 uppercase tracking-wider">Trust & Security</Text>
          <Heading level={2} className="mt-3">Your Money. Institutionally Protected.</Heading>
          <Text muted className="mt-4">NWTR operates with the same rigor as private banks and wealth management firms.</Text>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="bg-white dark:bg-navy-800 rounded-xl border border-navy-100 dark:border-navy-700 p-6 h-full hover:shadow-md transition-shadow">
                <span className="text-3xl">{f.icon}</span>
                <h3 className="mt-4 font-display font-bold text-navy-900 dark:text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-navy-500 dark:text-navy-400 leading-relaxed">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <ScrollReveal className="mt-14">
          <PartnerLogos className="opacity-60" />
        </ScrollReveal>
      </Container>
    </Section>
  );
}
