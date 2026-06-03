"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GradientText } from "@/components/ui/gradient-text";
import { FadeIn } from "@/components/motion/transitions";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";

const trustBadges = [
  { label: "NBFC Secured", icon: "🛡️" },
  { label: "RBI Compliant", icon: "✓" },
  { label: "100% Refundable", icon: "↩" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Dark cinematic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-[0.12] mix-blend-luminosity" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/80" />

      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-[15%] w-80 h-80 rounded-full bg-gold-500/8 blur-[100px]"
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-[10%] w-96 h-96 rounded-full bg-gold-500/5 blur-[120px]"
          animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <FadeIn delay={0.1}>
            <Badge variant="premium" className="mb-8 text-sm px-4 py-1.5">
              Introducing a New Way to Rent
            </Badge>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight text-white">
              The Future of{" "}
              <GradientText gradient="gold">Intelligent Renting</GradientText>
            </h1>
          </FadeIn>

          {/* Subheadline */}
          <FadeIn delay={0.35}>
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-navy-300 max-w-2xl mx-auto leading-relaxed">
              Deposit your way to premium living. Zero monthly rent.
              Full refund guaranteed. Powered by NBFC-grade financial infrastructure.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.5}>
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="shadow-gold hover:shadow-gold-lg transition-shadow">
                Start Your Journey
              </Button>
              <Button variant="ghost" size="lg" className="text-white border border-white/20 hover:bg-white/10">
                See How It Works
              </Button>
            </div>
          </FadeIn>

          {/* Trust badges */}
          <StaggerChildren className="mt-12 flex flex-wrap items-center justify-center gap-3" staggerDelay={0.1}>
            {trustBadges.map((badge) => (
              <StaggerItem key={badge.label}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm text-white/80">
                  <span>{badge.icon}</span>
                  <span>{badge.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        {/* Floating property cards */}
        <div className="mt-16 lg:mt-20 relative h-48 sm:h-64 hidden md:block">
          <FloatingCard className="absolute left-[5%] top-4" delay={0} label="3BHK Koramangala" value="₹45,000/mo saved" />
          <FloatingCard className="absolute left-[35%] top-0" delay={0.5} label="4BHK Indiranagar" value="₹72,000/mo saved" />
          <FloatingCard className="absolute right-[5%] top-8" delay={1} label="Penthouse HSR" value="₹1,20,000/mo saved" />
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-2.5 rounded-full bg-gold-400"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function FloatingCard({ className, delay, label, value }: { className?: string; delay: number; label: string; value: string }) {
  return (
    <motion.div
      className={`${className} glass-dark rounded-xl p-4 sm:p-5 shadow-lg w-52 sm:w-60`}
      animate={{ y: [0, -10, 0], rotate: [0, 0.5, 0] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div className="text-sm font-medium text-white">{label}</div>
      <div className="text-xs text-gold-400 mt-1.5 font-semibold">{value}</div>
    </motion.div>
  );
}
