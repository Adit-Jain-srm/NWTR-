"use client";

import { Suspense, lazy, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";

const R3FCanvas = lazy(() =>
  import("@/components/three/r3f-canvas").then((m) => ({ default: m.R3FCanvas }))
);
const VaultMesh = lazy(() =>
  import("@/components/three/hero-vault-scene").then((m) => ({ default: m.VaultMesh }))
);

const trustBadges = [
  { label: "NBFC Secured", icon: "shield" },
  { label: "RBI Compliant", icon: "check" },
  { label: "100% Refundable", icon: "return" },
];

const iconMap: Record<string, React.ReactNode> = {
  shield: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
    </svg>
  ),
  check: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  return: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 10h13a4 4 0 0 1 0 8H7" /><path d="M3 10l4-4M3 10l4 4" />
    </svg>
  ),
};

export function Hero() {
  const [showScene, setShowScene] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowScene(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,97,0.05)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,97,0.08)_0%,_transparent_50%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(201,169,97,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIxIi8+PC9zdmc+')]" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[calc(100vh-5rem)]">
          {/* Left: Text content */}
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge variant="premium" className="mb-6 text-xs px-3 py-1 tracking-wider">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" />
                Now Live in Bangalore
              </Badge>
            </motion.div>

            {/* Headline with split-text */}
            <SplitTextReveal
              tag="h1"
              splitType="words"
              staggerAmount={0.06}
              duration={1}
              delay={0.5}
              trigger="mount"
              className="font-serif text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1.05] tracking-tight text-white"
            >
              Your Deposit Earns. You Live Free.
            </SplitTextReveal>

            {/* Subheadline */}
            <motion.p
              className="mt-6 text-base sm:text-lg text-navy-300 leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Place a one-time deposit. Live in premium Bangalore properties for 12 months.
              Zero rent. Full refund. Backed by NBFC-grade infrastructure.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <MagneticButton strength={0.25}>
                <Button
                  variant="primary"
                  size="lg"
                  className="shadow-gold hover:shadow-gold-lg transition-all duration-300 text-base font-semibold"
                >
                  Start Your Journey
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="ml-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white/80 hover:text-white border border-white/15 hover:border-white/30 hover:bg-white/5 backdrop-blur-sm"
                >
                  See How It Works
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.9 + i * 0.1 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm px-3 py-1.5 text-xs text-white/70"
                >
                  <span className="text-gold-400">{iconMap[badge.icon]}</span>
                  <span>{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D Scene */}
          <div className="relative h-[400px] lg:h-[600px] hidden md:block">
            {showScene && (
              <Suspense fallback={<HeroSceneFallback />}>
                <R3FCanvas
                  className="w-full h-full"
                  camera={{ position: [0, 0, 5], fov: 45 }}
                >
                  <ambientLight intensity={0.3} />
                  <pointLight position={[5, 5, 5]} intensity={0.8} color="#C9A961" />
                  <pointLight position={[-5, -3, 3]} intensity={0.4} color="#4A6FA5" />
                  <VaultMesh />
                </R3FCanvas>
              </Suspense>
            )}

            {/* Glow behind 3D scene */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gold-500/10 blur-[80px] pointer-events-none" />
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-navy-400">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center p-1">
            <motion.div
              className="w-1 h-2 rounded-full bg-gold-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function HeroSceneFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-48 h-48">
        <motion.div
          className="absolute inset-0 rounded-full border border-gold-500/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-4 rounded-full border border-gold-500/15"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-8 rounded-full border border-gold-500/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-gold-500/30 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
