"use client";

import { Container } from "@/components/ui/container";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

const stats = [
  { value: 30000, suffix: "+ Cr", label: "Addressable Market" },
  { value: 7.5, suffix: "%", label: "Average Yield", decimals: 1 },
  { value: 100, suffix: "%", label: "Deposit Returned" },
  { value: 0, suffix: "", label: "Monthly Rent", prefix: "₹" },
];

export function StatsBar() {
  return (
    <section className="py-16 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950" />
      <Container className="relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-display font-bold text-white">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals ?? 0}
                    duration={2000}
                  />
                </div>
                <div className="mt-2 text-sm text-navy-300">{stat.label}</div>
                <div className="mt-3 h-px w-12 mx-auto bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
