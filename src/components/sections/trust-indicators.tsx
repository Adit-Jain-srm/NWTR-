"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";

const securityFeatures = [
  {
    icon: "🏦",
    title: "NBFC Regulated",
    description: "Funds managed through RBI-registered NBFC partner with strict compliance oversight",
  },
  {
    icon: "🔐",
    title: "Escrow Protected",
    description: "Every deposit held in segregated escrow accounts with scheduled banks",
  },
  {
    icon: "📊",
    title: "SEBI-Compliant Instruments",
    description: "Invested only in government-backed FDs, T-Bills, and AAA-rated securities",
  },
  {
    icon: "📋",
    title: "Legal Framework",
    description: "Registered agreements, e-signed contracts, RERA compliance, dispute resolution",
  },
  {
    icon: "🛡️",
    title: "Insurance Backed",
    description: "Property and deposit insurance to cover unforeseen circumstances",
  },
  {
    icon: "✓",
    title: "Audit Trail",
    description: "Complete transparency with real-time fund tracking and quarterly compliance reports",
  },
];

export function TrustIndicators() {
  return (
    <Section className="bg-surface-50">
      <Container>
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-gold-700 uppercase tracking-wider">
            Trust & Security
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-navy-900">
            Your Money. Institutionally Protected.
          </h2>
          <p className="mt-4 text-navy-600">
            NWTR operates with the same rigor as private banks and wealth management firms.
            Every rupee is accounted for, protected, and working.
          </p>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="bg-white rounded-xl border border-navy-100 p-6 h-full hover:shadow-glass transition-all duration-300">
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="mt-4 font-display font-bold text-navy-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-navy-500 leading-relaxed">{feature.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Partner logos */}
        <ScrollReveal className="mt-16 text-center">
          <p className="text-xs text-navy-400 uppercase tracking-wider mb-6">
            Regulated & Partnered With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            <span className="text-sm font-medium text-navy-500">RBI</span>
            <span className="text-sm font-medium text-navy-500">SEBI</span>
            <span className="text-sm font-medium text-navy-500">NBFC Partner</span>
            <span className="text-sm font-medium text-navy-500">RERA</span>
            <span className="text-sm font-medium text-navy-500">DPDP Act</span>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
