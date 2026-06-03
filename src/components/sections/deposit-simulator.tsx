"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function formatIndianCurrency(value: number): string {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(1)} L`;
  return `₹${value.toLocaleString("en-IN")}`;
}

export function DepositSimulator() {
  const [propertyValue, setPropertyValue] = useState(15000000);
  const [depositPercent, setDepositPercent] = useState(70);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const depositAmount = propertyValue * (depositPercent / 100);
  const annualYield = 0.075;
  const monthlyPayout = Math.round((depositAmount * annualYield) / 12);
  const annualRentEquivalent = monthlyPayout * 12;
  const threeYearBurn = annualRentEquivalent * 3;

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-navy-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-800 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-navy-500 mb-3"><span className="text-navy-600 mr-2">{"//04"}</span> Your numbers</p>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Calculate your position
          </h2>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Controls */}
            <div className="space-y-10">
              <div>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-navy-300">Property Value</span>
                  <span className="font-display font-bold text-white">{formatIndianCurrency(propertyValue)}</span>
                </div>
                <input
                  type="range"
                  min={5000000}
                  max={50000000}
                  step={500000}
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full h-[2px] bg-navy-700 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold-500 [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(201,169,97,0.4)] [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-navy-500 mt-2">
                  <span>₹50 L</span>
                  <span>₹5 Cr</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-navy-300">Deposit Percentage</span>
                  <span className="font-display font-bold text-white">{depositPercent}%</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={80}
                  step={5}
                  value={depositPercent}
                  onChange={(e) => setDepositPercent(Number(e.target.value))}
                  className="w-full h-[2px] bg-navy-700 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold-500 [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(201,169,97,0.4)] [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-navy-500 mt-2">
                  <span>50%</span>
                  <span>80%</span>
                </div>
              </div>

              {/* Deposit amount display */}
              <div className="pt-6 border-t border-navy-800">
                <div className="text-xs text-navy-500 uppercase tracking-wider">Your Deposit</div>
                <div className="text-3xl font-display font-bold text-gold-400 mt-2">
                  {formatIndianCurrency(depositAmount)}
                </div>
              </div>
            </div>

            {/* Statement — like a private banking document */}
            <div className="bg-navy-900/50 border border-navy-800 p-8">
              <div className="text-[9px] uppercase tracking-[0.3em] text-navy-500 mb-6 pb-3 border-b border-navy-800">
                Investment Summary — 12 Month Term
              </div>

              <div className="space-y-4">
                <StatementRow label="Monthly owner payout" value={`${formatIndianCurrency(monthlyPayout)}`} />
                <StatementRow label="Annual yield generated" value={formatIndianCurrency(annualRentEquivalent)} />
                <StatementRow label="Your monthly rent" value="₹0" highlight />

                <div className="h-px bg-navy-800 my-5" />

                <StatementRow label="Deposit returned at term end" value={formatIndianCurrency(depositAmount)} />
                <StatementRow label="Net earnings on deposit" value={`+${formatIndianCurrency(Math.round(depositAmount * annualYield))}`} highlight />
              </div>

              {/* The dramatic comparison */}
              <div className="mt-8 pt-6 border-t border-navy-800">
                <div className="text-[9px] uppercase tracking-[0.3em] text-navy-500 mb-4">
                  3-Year Cost Comparison
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-red-400">Traditional rent</span>
                      <span className="text-red-400">{formatIndianCurrency(threeYearBurn)} lost</span>
                    </div>
                    <div className="h-2 bg-navy-800 overflow-hidden">
                      <motion.div
                        className="h-full bg-red-500/70"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100%" } : {}}
                        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-gold-400">NWTR</span>
                      <span className="text-gold-400">₹0 lost</span>
                    </div>
                    <div className="h-2 bg-navy-800 overflow-hidden">
                      <div className="h-full bg-gold-500/50 w-[1%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatementRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-baseline">
      <span className="text-sm text-navy-400">{label}</span>
      <span className={`font-display font-bold ${highlight ? "text-gold-400" : "text-white"}`}>
        {value}
      </span>
    </div>
  );
}
