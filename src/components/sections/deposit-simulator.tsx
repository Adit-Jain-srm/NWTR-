"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { GradientBorder } from "@/components/motion/gradient-border";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { cn } from "@/lib/utils";

function formatCurrency(value: number): string {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(1)} L`;
  return `₹${value.toLocaleString("en-IN")}`;
}

export function DepositSimulator() {
  const [propertyValue, setPropertyValue] = useState(10000000);
  const [depositPercent, setDepositPercent] = useState(70);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const depositAmount = propertyValue * (depositPercent / 100);
  const annualYield = 0.075;
  const monthlyPayout = Math.round((depositAmount * annualYield) / 12);
  const annualSavings = monthlyPayout * 12;
  const threeYearSavings = monthlyPayout * 36;

  return (
    <Section className="bg-white dark:bg-navy-950 overflow-hidden">
      <Container size="lg">
        <div ref={sectionRef} className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            className="text-xs font-semibold text-gold-600 dark:text-gold-400 uppercase tracking-[0.2em]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Calculator
          </motion.span>
          <SplitTextReveal
            tag="h2"
            splitType="words"
            staggerAmount={0.05}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 dark:text-white"
          >
            See How Much You Save
          </SplitTextReveal>
          <motion.p
            className="mt-4 text-navy-500 dark:text-navy-300"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Adjust the sliders to compare NWTR vs traditional renting.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <GradientBorder borderRadius={24} borderWidth={1} animationDuration={4}>
            <div className="bg-surface-50/80 dark:bg-navy-900/90 backdrop-blur-xl p-8 sm:p-10 rounded-3xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Sliders */}
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-navy-600 dark:text-navy-300 font-medium">Property Value</span>
                      <span className="font-display font-bold text-navy-900 dark:text-white">{formatCurrency(propertyValue)}</span>
                    </div>
                    <input
                      type="range"
                      min={5000000}
                      max={50000000}
                      step={500000}
                      value={propertyValue}
                      onChange={(e) => setPropertyValue(Number(e.target.value))}
                      className="w-full h-2 bg-navy-200 dark:bg-navy-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold-500 [&::-webkit-slider-thumb]:shadow-gold [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-navy-400 mt-1">
                      <span>₹50L</span>
                      <span>₹5Cr</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-navy-600 dark:text-navy-300 font-medium">Deposit Percentage</span>
                      <span className="font-display font-bold text-navy-900 dark:text-white">{depositPercent}%</span>
                    </div>
                    <input
                      type="range"
                      min={50}
                      max={80}
                      step={5}
                      value={depositPercent}
                      onChange={(e) => setDepositPercent(Number(e.target.value))}
                      className="w-full h-2 bg-navy-200 dark:bg-navy-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold-500 [&::-webkit-slider-thumb]:shadow-gold [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-navy-400 mt-1">
                      <span>50%</span>
                      <span>80%</span>
                    </div>
                  </div>

                  {/* Visual representation */}
                  <div className="p-4 rounded-xl bg-navy-50 dark:bg-navy-800/50 border border-navy-100 dark:border-navy-700">
                    <div className="text-xs text-navy-400 uppercase tracking-wider mb-2">Your Deposit</div>
                    <div className="text-2xl font-display font-bold text-navy-900 dark:text-white">
                      {formatCurrency(depositAmount)}
                    </div>
                    <div className="mt-2 h-1 rounded-full bg-navy-200 dark:bg-navy-700 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gold-500"
                        animate={{ width: `${depositPercent}%` }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-3">
                  <ResultRow label="Owner Monthly Payout" value={`${formatCurrency(monthlyPayout)}/mo`} />
                  <ResultRow label="Your Monthly Rent" value="₹0" highlight="gold" />
                  <ResultRow label="Annual Savings" value={formatCurrency(annualSavings)} />

                  <div className="h-px bg-navy-100 dark:bg-navy-800 my-4" />

                  <ResultRow label="3-Year Savings vs Renting" value={formatCurrency(threeYearSavings)} highlight="gold" large />
                  <ResultRow label="Deposit Returned" value="100%" highlight="emerald" />

                  {/* Visual comparison */}
                  <div className="mt-6 p-4 rounded-xl bg-navy-50 dark:bg-navy-800/50 border border-navy-100 dark:border-navy-700">
                    <p className="text-xs text-navy-400 uppercase tracking-wider font-medium mb-4">3-Year Cost Comparison</p>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-red-500 font-medium">Traditional Rent</span>
                          <span className="text-navy-500">{formatCurrency(threeYearSavings)} burned</span>
                        </div>
                        <div className="h-3 bg-red-100 dark:bg-red-500/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full"
                            animate={{ width: "100%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-emerald-500 font-medium">NWTR (Net Cost)</span>
                          <span className="text-navy-500">₹0 lost</span>
                        </div>
                        <div className="h-3 bg-emerald-100 dark:bg-emerald-500/10 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-400 rounded-full w-[2%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GradientBorder>
        </motion.div>
      </Container>
    </Section>
  );
}

function ResultRow({ label, value, highlight, large }: {
  label: string; value: string; highlight?: "gold" | "emerald"; large?: boolean;
}) {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-sm text-navy-600 dark:text-navy-300">{label}</span>
      <span className={cn(
        "font-display font-bold",
        large ? "text-xl" : "text-base",
        highlight === "gold" && "text-gold-600 dark:text-gold-400",
        highlight === "emerald" && "text-emerald-500",
        !highlight && "text-navy-900 dark:text-white",
      )}>
        {value}
      </span>
    </div>
  );
}
