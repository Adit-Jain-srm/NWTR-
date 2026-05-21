"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
            Ready to Rent Intelligently?
          </h2>
          <p className="mt-6 text-lg text-navy-300">
            Join the future of premium living. Your deposit stays yours.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg">
              I&apos;m a Tenant
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10"
            >
              I&apos;m an Owner
            </Button>
          </div>

          <p className="mt-8 text-sm text-navy-400">
            Your deposit is 100% refundable · NBFC regulated · No hidden charges
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
