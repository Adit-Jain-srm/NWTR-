"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { formatCurrency } from "@/lib/utils";

export function DepositSimulator() {
  const [propertyValue, setPropertyValue] = useState(10000000); // 1 Cr default
  const [depositPercent, setDepositPercent] = useState(70);

  const depositAmount = propertyValue * (depositPercent / 100);
  const annualYield = 0.075;
  const monthlyPayout = Math.round((depositAmount * annualYield) / 12);
  const yearlyRentEquivalent = monthlyPayout * 12;
  const threeYearSavings = yearlyRentEquivalent * 3;

  return (
    <Section className="bg-white">
      <Container size="default">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-medium text-gold-700 uppercase tracking-wider">
            Interactive Calculator
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-navy-900">
            See How Much You Save
          </h2>
          <p className="mt-4 text-navy-600">
            Adjust the sliders to see how NWTR compares to traditional renting.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto bg-surface-50 rounded-2xl border border-navy-100 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Sliders */}
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-navy-700">
                      Property Value
                    </label>
                    <span className="text-sm font-display font-bold text-navy-900">
                      {formatCurrency(propertyValue)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5000000}
                    max={50000000}
                    step={500000}
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    className="w-full h-2 bg-navy-100 rounded-full appearance-none cursor-pointer accent-gold-500"
                  />
                  <div className="flex justify-between text-xs text-navy-400 mt-1">
                    <span>₹50L</span>
                    <span>₹5Cr</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-navy-700">
                      Deposit Percentage
                    </label>
                    <span className="text-sm font-display font-bold text-navy-900">
                      {depositPercent}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={80}
                    step={5}
                    value={depositPercent}
                    onChange={(e) => setDepositPercent(Number(e.target.value))}
                    className="w-full h-2 bg-navy-100 rounded-full appearance-none cursor-pointer accent-gold-500"
                  />
                  <div className="flex justify-between text-xs text-navy-400 mt-1">
                    <span>50%</span>
                    <span>80%</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-4">
                <ResultRow label="Your Deposit" value={formatCurrency(depositAmount)} highlight />
                <ResultRow label="Monthly Rent Equivalent" value={`${formatCurrency(monthlyPayout)}/mo`} />
                <ResultRow label="Owner Receives" value={`${formatCurrency(monthlyPayout)}/mo`} />
                <ResultRow label="Your Monthly Rent" value="₹0" accent />
                <div className="h-px bg-navy-100 dark:bg-navy-700 my-2" />
                <ResultRow label="3-Year Savings vs. Renting" value={formatCurrency(threeYearSavings)} accent />
                <ResultRow label="Deposit Returned After Tenure" value="100%" />
                
                {/* Visual comparison */}
                <div className="mt-6 pt-4 border-t border-navy-100 dark:border-navy-700">
                  <p className="text-xs text-navy-400 mb-3 uppercase tracking-wider">3-Year Comparison</p>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-red-500 font-medium">Traditional Rent</span>
                        <span className="text-navy-600">{formatCurrency(threeYearSavings)} lost</span>
                      </div>
                      <div className="h-3 bg-red-100 dark:bg-red-500/20 rounded-full overflow-hidden">
                        <div className="h-full bg-red-400 rounded-full" style={{ width: "100%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-emerald-500 font-medium">NWTR (Net Cost)</span>
                        <span className="text-navy-600">₹0 lost</span>
                      </div>
                      <div className="h-3 bg-emerald-100 dark:bg-emerald-500/20 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 rounded-full" style={{ width: "2%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

function ResultRow({
  label,
  value,
  highlight,
  accent,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-navy-600">{label}</span>
      <span
        className={`font-display font-bold ${
          highlight
            ? "text-lg text-navy-900"
            : accent
            ? "text-lg text-gold-700"
            : "text-sm text-navy-800"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
