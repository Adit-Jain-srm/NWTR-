"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { GradientText } from "@/components/ui/gradient-text";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { FadeIn } from "@/components/motion/fade-in";

const trustBadges = [
  { label: "NBFC Secured", icon: "🛡️" },
  { label: "RBI Compliant", icon: "✓" },
  { label: "100% Refundable", icon: "↩" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900" />
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-15 mix-blend-luminosity" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/80" />

      {/* Floating ambient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-gold-500/10 blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full bg-gold-500/5 blur-3xl"
          animate={{ y: [0, 15, 0], scale: [1, 0.95, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={0.1}>
            <Badge variant="premium" className="mb-6">
              Introducing a New Way to Rent
            </Badge>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
              The Future of{" "}
              <GradientText gradient="gold" as="span">
                Intelligent Renting
              </GradientText>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="mt-6 text-lg sm:text-xl text-navy-300 max-w-2xl mx-auto leading-relaxed">
              Deposit your way to premium living. Zero monthly rent.
              Full refund guaranteed. Powered by NBFC-grade financial infrastructure.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="shadow-gold hover:shadow-[0_8px_32px_rgba(201,169,97,0.5)] transition-shadow">
                Start Your Journey
              </Button>
              <Button variant="ghost" size="lg" className="text-white border border-white/20 hover:bg-white/10">
                See How It Works
              </Button>
            </div>
          </FadeIn>

          <StaggerChildren className="mt-12 flex flex-wrap items-center justify-center gap-3" staggerDelay={0.1}>
            {trustBadges.map((badge) => (
              <StaggerItem key={badge.label}>
                <Badge variant="default" className="text-sm px-4 py-2">
                  <span className="mr-1">{badge.icon}</span>
                  {badge.label}
                </Badge>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        {/* Floating property cards */}
        <div className="mt-16 relative h-64 hidden lg:block">
          <FloatingCard
            className="absolute left-[10%] top-0"
            delay={0}
            label="3BHK Koramangala"
            value="₹45,000/mo saved"
          />
          <FloatingCard
            className="absolute left-[40%] top-8"
            delay={0.5}
            label="4BHK Indiranagar"
            value="₹72,000/mo saved"
          />
          <FloatingCard
            className="absolute right-[10%] top-4"
            delay={1}
            label="Penthouse HSR"
            value="₹1,20,000/mo saved"
          />
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <motion.div
              className="w-1.5 h-2.5 rounded-full bg-gold-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function FloatingCard({
  className,
  delay,
  label,
  value,
}: {
  className?: string;
  delay: number;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      className={`${className} glass-dark rounded-xl p-4 shadow-glass w-56`}
      animate={{
        y: [0, -8, 0],
        rotate: [0, 0.5, 0],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <div className="text-sm font-medium text-white">{label}</div>
      <div className="text-xs text-gold-400 mt-1 font-semibold">{value}</div>
    </motion.div>
  );
}
