"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { TiltCard } from "@/components/motion/tilt-card";

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
      </svg>
    ),
    title: "NBFC Regulated",
    desc: "Funds managed through RBI-registered NBFC with strict compliance protocols",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
    title: "Escrow Protected",
    desc: "Every deposit held in segregated escrow accounts with scheduled banks",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M2 12h4l3-9 6 18 3-9h4" />
      </svg>
    ),
    title: "SEBI Instruments",
    desc: "Invested only in government-backed FDs, T-Bills, and AAA-rated securities",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    title: "Legal Framework",
    desc: "Registered agreements, e-signed contracts, full RERA compliance coverage",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Insurance Backed",
    desc: "Property and deposit insurance coverage for all unforeseen circumstances",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: "Full Audit Trail",
    desc: "Real-time fund tracking, quarterly compliance reports, and full transparency",
  },
];

export function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <Section className="bg-surface-50 dark:bg-navy-900 overflow-hidden">
      <Container>
        <div ref={sectionRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            className="text-xs font-semibold text-gold-600 dark:text-gold-400 uppercase tracking-[0.2em]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Trust & Security
          </motion.span>
          <SplitTextReveal
            tag="h2"
            splitType="words"
            staggerAmount={0.05}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 dark:text-white"
          >
            Your Money. Institutionally Protected.
          </SplitTextReveal>
          <motion.p
            className="mt-4 text-navy-500 dark:text-navy-300 text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            NWTR operates with the same rigor as private banks and wealth management firms.
          </motion.p>
        </div>

        {/* Animated shield in center */}
        <motion.div
          className="relative w-32 h-32 mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatedShield inView={isInView} />
          <div className="absolute inset-0 bg-gold-500/10 rounded-full blur-[40px]" />
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard maxTilt={5} glareOpacity={0.05} className="h-full">
                <div className="h-full bg-white dark:bg-navy-800 rounded-xl border border-navy-100 dark:border-navy-700 p-6 hover:border-gold-200/50 dark:hover:border-gold-500/20 transition-colors duration-300">
                  <div className="text-gold-600 dark:text-gold-400">{f.icon}</div>
                  <h3 className="mt-4 font-display font-bold text-navy-900 dark:text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-navy-500 dark:text-navy-400 leading-relaxed">{f.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Partner logos placeholder */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-8 opacity-40"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.4 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {["RBI", "SEBI", "NBFC", "RERA"].map((org) => (
            <div key={org} className="text-xs font-bold tracking-widest text-navy-400 dark:text-navy-500 uppercase">
              {org}
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

function AnimatedShield({ inView }: { inView: boolean }) {
  return (
    <svg viewBox="0 0 100 120" className="w-full h-full" fill="none">
      <motion.path
        d="M50 5L10 25V55C10 82 50 115 50 115S90 82 90 55V25L50 5Z"
        stroke="#C9A961"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      />
      <motion.path
        d="M35 58L45 68L68 45"
        stroke="#10B981"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.8 }}
      />
      <motion.circle
        cx="50"
        cy="60"
        r="25"
        stroke="#C9A961"
        strokeWidth="1"
        opacity={0.3}
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.5, ease: "linear", delay: 0.8 }}
      />
    </svg>
  );
}
