"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";

const tenantBenefits = [
  { icon: "🏠", title: "Premium Living", description: "Access top-tier properties in prime locations without monthly rent burden" },
  { icon: "💰", title: "Zero Monthly Rent", description: "Your deposit works for you. Live for free for the entire lease period" },
  { icon: "↩️", title: "Full Refund", description: "Get 100% of your deposit back at the end of tenure, guaranteed" },
  { icon: "📈", title: "Wealth Preservation", description: "Your capital isn't burned on rent — it's preserved and returned" },
];

const ownerBenefits = [
  { icon: "💳", title: "Guaranteed Income", description: "Monthly payouts from NWTR, regardless of tenant circumstances" },
  { icon: "✅", title: "Verified Tenants", description: "Only financially verified HNI tenants with KYC-cleared profiles" },
  { icon: "🛡️", title: "Zero Risk", description: "No vacancy anxiety, no default risk, no damage disputes" },
  { icon: "🤝", title: "RM Support", description: "Dedicated Relationship Manager for seamless property management" },
];

export function ValueProposition() {
  return (
    <Section className="bg-white">
      <Container>
        {/* For Tenants */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 lg:mb-32">
          <ScrollReveal direction="left">
            <div>
              <span className="text-sm font-medium text-gold-700 uppercase tracking-wider">For Tenants</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-navy-900">
                Live Premium. Pay Zero Rent.
              </h2>
              <p className="mt-4 text-navy-600 leading-relaxed">
                Make a one-time deposit and enjoy premium living for an entire year.
                Your money stays yours — returned in full at the end.
              </p>
              <Button variant="outline" size="md" className="mt-8">
                Learn More →
              </Button>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.1}>
            {tenantBenefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="rounded-xl border border-navy-100 p-5 hover:border-gold-200 hover:shadow-glass transition-all duration-300">
                  <span className="text-2xl">{benefit.icon}</span>
                  <h3 className="mt-3 font-display font-bold text-navy-900 text-sm">{benefit.title}</h3>
                  <p className="mt-1 text-xs text-navy-500">{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        {/* For Owners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1" staggerDelay={0.1}>
            {ownerBenefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="rounded-xl border border-navy-100 p-5 hover:border-gold-200 hover:shadow-glass transition-all duration-300">
                  <span className="text-2xl">{benefit.icon}</span>
                  <h3 className="mt-3 font-display font-bold text-navy-900 text-sm">{benefit.title}</h3>
                  <p className="mt-1 text-xs text-navy-500">{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <ScrollReveal direction="right" className="order-1 lg:order-2">
            <div>
              <span className="text-sm font-medium text-gold-700 uppercase tracking-wider">For Owners</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-navy-900">
                Guaranteed Income. Zero Vacancy.
              </h2>
              <p className="mt-4 text-navy-600 leading-relaxed">
                List your property and receive predictable monthly payouts from NWTR.
                No more chasing rent. No more vacancy months.
              </p>
              <Button variant="outline" size="md" className="mt-8">
                List Your Property →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
