"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";

const MESSAGES = [
  "₹2.3 Cr deposited this week",
  "47 properties verified in Bangalore",
  "12 viewings scheduled today",
  "₹18.7L monthly payouts disbursed",
  "3 new HNI tenants onboarded",
  "100% deposits returned on time",
];

export function ActivityTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-navy-900/95 dark:bg-navy-950/95 border-y border-navy-800/50 py-2.5 overflow-hidden">
      <Container>
        <div className="flex items-center justify-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-xs sm:text-sm text-navy-200 font-medium text-center"
            >
              {MESSAGES[index]}
            </motion.p>
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
}
