"use client";

import { Hero } from "@/components/sections/hero";
import { ActivityTicker } from "@/components/sections/activity-ticker";
import { StatsBar } from "@/components/sections/stats-bar";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ValueProposition } from "@/components/sections/value-proposition";
import { TrustSection } from "@/components/sections/trust-section";
import { DepositSimulator } from "@/components/sections/deposit-simulator";
import { FAQ } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta-section";
import { PagePreloader } from "@/components/motion/page-preloader";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      <PagePreloader onComplete={() => setPreloaderDone(true)} duration={2} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={preloaderDone ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <ActivityTicker />
        <StatsBar />
        <HowItWorks />
        <ValueProposition />
        <TrustSection />
        <DepositSimulator />
        <FAQ />
        <CTASection />
      </motion.div>
    </>
  );
}
