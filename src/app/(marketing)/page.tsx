"use client";

import { OpeningStatement } from "@/components/sections/opening-statement";
import { ContrastSplit } from "@/components/sections/contrast-split";
import { MoneyFlow } from "@/components/sections/money-flow";
import { ProofNumbers } from "@/components/sections/proof-numbers";
import { DepositSimulator } from "@/components/sections/deposit-simulator";
import { SecurityArchitecture } from "@/components/sections/security-architecture";
import { PropertyShowcase } from "@/components/sections/property-showcase";
import { ExclusiveClose } from "@/components/sections/exclusive-close";
import { ScrollCompanion } from "@/components/motion/scroll-companion";
import { SoundToggle } from "@/components/motion/sound-toggle";
import { PagePreloader } from "@/components/motion/page-preloader";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      <PagePreloader onComplete={() => setPreloaderDone(true)} duration={1.2} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={preloaderDone ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        <ScrollCompanion />
        <SoundToggle />
        <div id="opening">
          <OpeningStatement />
        </div>
        <div id="contrast">
          <ContrastSplit />
        </div>
        <div id="how">
          <MoneyFlow />
        </div>
        <div id="proof">
          <ProofNumbers />
        </div>
        <div id="calculator">
          <DepositSimulator />
        </div>
        <div id="properties">
          <PropertyShowcase />
        </div>
        <div id="security">
          <SecurityArchitecture />
        </div>
        <div id="close">
          <ExclusiveClose />
        </div>
      </motion.div>
    </>
  );
}
