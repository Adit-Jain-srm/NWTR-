"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/motion/tilt-card";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const tenantBenefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M3 12l9-9 9 9M5 10v10h14V10" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
    title: "Premium Living",
    desc: "Access top-tier properties in Bangalore's prime locations without monthly rent",
    gradient: "from-emerald-500/10 to-emerald-500/5",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12M8 10h8M9 14h6" />
      </svg>
    ),
    title: "Zero Monthly Rent",
    desc: "Your deposit works for you — live free for the entire 12-month lease period",
    gradient: "from-gold-500/10 to-gold-500/5",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M3 10h13a4 4 0 010 8H7M3 10l4-4M3 10l4 4" />
      </svg>
    ),
    title: "Full Refund",
    desc: "100% deposit returned at tenure end, guaranteed by NBFC escrow account",
    gradient: "from-blue-500/10 to-blue-500/5",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M2 12h4l3-9 6 18 3-9h4" />
      </svg>
    ),
    title: "Wealth Preservation",
    desc: "Capital isn't burned on rent — it's preserved, invested, and returned with care",
    gradient: "from-purple-500/10 to-purple-500/5",
  },
];

const ownerBenefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
    title: "Guaranteed Income",
    desc: "Monthly payouts from NWTR regardless of tenant circumstances or market conditions",
    gradient: "from-emerald-500/10 to-emerald-500/5",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Verified HNI Tenants",
    desc: "Only financially verified high-net-worth tenants with 3-tier KYC clearance",
    gradient: "from-gold-500/10 to-gold-500/5",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Zero Vacancy Risk",
    desc: "No vacancy anxiety, no default risk, no property damage disputes to worry about",
    gradient: "from-blue-500/10 to-blue-500/5",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Dedicated RM",
    desc: "Personal Relationship Manager for seamless onboarding and property management",
    gradient: "from-purple-500/10 to-purple-500/5",
  },
];

export function ValueProposition() {
  const tenantRef = useRef<HTMLDivElement>(null);
  const ownerRef = useRef<HTMLDivElement>(null);
  const tenantInView = useInView(tenantRef, { once: true, amount: 0.3 });
  const ownerInView = useInView(ownerRef, { once: true, amount: 0.3 });

  return (
    <Section className="bg-white dark:bg-navy-950 overflow-hidden">
      <Container>
        {/* For Tenants */}
        <div ref={tenantRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-32 lg:mb-40">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={tenantInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-semibold text-gold-600 dark:text-gold-400 uppercase tracking-[0.2em]">
              For Tenants
            </span>
            <SplitTextReveal
              tag="h2"
              splitType="words"
              staggerAmount={0.05}
              duration={0.8}
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 dark:text-white leading-tight"
            >
              Live Premium. Pay Zero Rent.
            </SplitTextReveal>
            <motion.p
              className="mt-5 text-navy-500 dark:text-navy-300 leading-relaxed text-base"
              initial={{ opacity: 0 }}
              animate={tenantInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Make a one-time deposit and enjoy premium living for an entire year.
              Your money stays yours — returned in full at the end, every time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={tenantInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button variant="outline" size="md" className="mt-8 group">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tenantBenefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                animate={tenantInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard maxTilt={8} glareOpacity={0.08} className="h-full">
                  <div className={cn(
                    "h-full rounded-xl border border-navy-100 dark:border-navy-800 p-5",
                    "bg-gradient-to-br", b.gradient,
                    "hover:border-gold-200 dark:hover:border-gold-500/30",
                    "transition-colors duration-300"
                  )}>
                    <div className="text-gold-600 dark:text-gold-400">{b.icon}</div>
                    <h3 className="mt-3 font-display font-bold text-navy-900 dark:text-white text-sm">{b.title}</h3>
                    <p className="mt-1.5 text-xs text-navy-500 dark:text-navy-400 leading-relaxed">{b.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* For Owners */}
        <div ref={ownerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
            {ownerBenefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                animate={ownerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard maxTilt={8} glareOpacity={0.08} className="h-full">
                  <div className={cn(
                    "h-full rounded-xl border border-navy-100 dark:border-navy-800 p-5",
                    "bg-gradient-to-br", b.gradient,
                    "hover:border-gold-200 dark:hover:border-gold-500/30",
                    "transition-colors duration-300"
                  )}>
                    <div className="text-gold-600 dark:text-gold-400">{b.icon}</div>
                    <h3 className="mt-3 font-display font-bold text-navy-900 dark:text-white text-sm">{b.title}</h3>
                    <p className="mt-1.5 text-xs text-navy-500 dark:text-navy-400 leading-relaxed">{b.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={ownerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-semibold text-gold-600 dark:text-gold-400 uppercase tracking-[0.2em]">
              For Property Owners
            </span>
            <SplitTextReveal
              tag="h2"
              splitType="words"
              staggerAmount={0.05}
              duration={0.8}
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 dark:text-white leading-tight"
            >
              Guaranteed Income. Zero Vacancy.
            </SplitTextReveal>
            <motion.p
              className="mt-5 text-navy-500 dark:text-navy-300 leading-relaxed text-base"
              initial={{ opacity: 0 }}
              animate={ownerInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              List your property and receive predictable monthly payouts from NWTR.
              No more chasing rent. No more vacancy anxiety. Just income.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={ownerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button variant="outline" size="md" className="mt-8 group">
                List Your Property
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
