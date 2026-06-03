"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy-900 dark:bg-navy-950" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px]" />

      <Container className="relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <Heading level={2} className="!text-white text-4xl lg:text-5xl">Ready to Rent Intelligently?</Heading>
          <Text className="mt-5 !text-navy-300 text-lg">Join the future of premium living. Your deposit stays yours.</Text>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" className="shadow-gold">I&apos;m a Tenant</Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 border border-white/15">I&apos;m an Owner</Button>
          </div>

          <p className="mt-8 text-sm text-navy-400">
            100% refundable deposit · NBFC regulated · No hidden charges
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
