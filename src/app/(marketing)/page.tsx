"use client";

import { OpeningStatement } from "@/components/sections/opening-statement";
import { ContrastSplit } from "@/components/sections/contrast-split";
import { MoneyFlow } from "@/components/sections/money-flow";
import { ProofNumbers } from "@/components/sections/proof-numbers";
import { DepositSimulator } from "@/components/sections/deposit-simulator";
import { SecurityArchitecture } from "@/components/sections/security-architecture";
import { ExclusiveClose } from "@/components/sections/exclusive-close";
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
        <OpeningStatement />
        <ContrastSplit />
        <MoneyFlow />
        <ProofNumbers />
        <DepositSimulator />
        <SecurityArchitecture />
        <ExclusiveClose />
      </motion.div>
    </>
  );
}
