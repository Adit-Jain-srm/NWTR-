"use client";

import { Suspense, lazy, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";

const R3FCanvas = lazy(() =>
  import("@/components/three/r3f-canvas").then((m) => ({ default: m.R3FCanvas }))
);
const ParticleField = lazy(() =>
  import("@/components/three/particle-field").then((m) => ({ default: m.ParticleField }))
);

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,97,0.08)_0%,_transparent_60%)]" />

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      {/* R3F Particle background */}
      <div className="absolute inset-0 opacity-40">
        {isInView && (
          <Suspense fallback={null}>
            <R3FCanvas camera={{ position: [0, 0, 8], fov: 50 }} className="w-full h-full">
              <ParticleField count={150} color="#C9A961" size={0.015} spread={15} speed={0.1} />
            </R3FCanvas>
          </Suspense>
        )}
      </div>

      {/* Ambient glow orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <SplitTextReveal
            tag="h2"
            splitType="words"
            staggerAmount={0.06}
            duration={0.9}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-tight"
          >
            Ready to Rent Intelligently?
          </SplitTextReveal>

          <motion.p
            className="mt-6 text-lg text-navy-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Join the future of premium living. Your deposit stays yours — always.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <MagneticButton strength={0.3}>
              <Button
                variant="primary"
                size="lg"
                className="shadow-gold hover:shadow-gold-lg transition-all duration-300 text-base font-semibold"
              >
                I&apos;m a Tenant
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="ml-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Button
                variant="ghost"
                size="lg"
                className="text-white/80 hover:text-white border border-white/15 hover:border-white/30 hover:bg-white/5"
              >
                I&apos;m an Owner
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.p
            className="mt-10 text-sm text-navy-400 flex items-center justify-center gap-3 flex-wrap"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-emerald-400">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              100% refundable
            </span>
            <span className="w-1 h-1 rounded-full bg-navy-600" />
            <span className="inline-flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-emerald-400">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              NBFC regulated
            </span>
            <span className="w-1 h-1 rounded-full bg-navy-600" />
            <span className="inline-flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-emerald-400">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              No hidden charges
            </span>
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
