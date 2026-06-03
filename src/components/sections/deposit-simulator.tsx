"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Slider } from "@/components/ui/slider";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { formatCurrency } from "@/lib/utils";

export function DepositSimulator() {
  const [propertyValue, setPropertyValue] = useState(10000000);
  const [depositPercent, setDepositPercent] = useState(70);

  const depositAmount = propertyValue * (depositPercent / 100);
  const annualYield = 0.075;
  const monthlyPayout = Math.round((depositAmount * annualYield) / 12);
  const threeYearSavings = monthlyPayout * 36;

  return (
    <Section className="bg-white dark:bg-navy-950">
      <Container size="lg">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <Text size="sm" weight="semibold" className="!text-gold-700 uppercase tracking-wider">Calculator</Text>
          <Heading level={2} className="mt-3">See How Much You Save</Heading>
          <Text muted className="mt-4">Adjust the sliders to compare NWTR vs traditional renting.</Text>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto bg-surface-50 dark:bg-navy-900 rounded-2xl border border-navy-100 dark:border-navy-800 p-8 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-8">
                <Slider label="Property Value" value={propertyValue} onChange={setPropertyValue} min={5000000} max={50000000} step={500000} formatValue={formatCurrency} />
                <Slider label="Deposit Percentage" value={depositPercent} onChange={setDepositPercent} min={50} max={80} step={5} formatValue={(v) => `${v}%`} />
              </div>
              <div className="space-y-4">
                <Row label="Your Deposit" value={formatCurrency(depositAmount)} bold />
                <Row label="Equivalent Monthly Rent" value={`${formatCurrency(monthlyPayout)}/mo`} />
                <Row label="Owner Receives" value={`${formatCurrency(monthlyPayout)}/mo`} />
                <Row label="Your Monthly Rent" value="₹0" gold />
                <div className="h-px bg-navy-100 dark:bg-navy-800 my-3" />
                <Row label="3-Year Savings vs Renting" value={formatCurrency(threeYearSavings)} gold />
                <Row label="Deposit Returned" value="100%" />

                <div className="mt-6 pt-4 border-t border-navy-100 dark:border-navy-800">
                  <p className="text-xs text-navy-400 mb-3 uppercase tracking-wider font-medium">3-Year Comparison</p>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-red-500 font-medium">Traditional Rent</span>
                        <span className="text-navy-500">{formatCurrency(threeYearSavings)} lost</span>
                      </div>
                      <div className="h-3 bg-red-100 dark:bg-red-500/10 rounded-full overflow-hidden">
                        <div className="h-full bg-red-400 rounded-full w-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
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
        </ScrollReveal>
      </Container>
    </Section>
  );
}

function Row({ label, value, bold, gold }: { label: string; value: string; bold?: boolean; gold?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-navy-600 dark:text-navy-300">{label}</span>
      <span className={`font-display font-bold ${bold ? "text-lg text-navy-900 dark:text-white" : gold ? "text-lg text-gold-700 dark:text-gold-400" : "text-sm text-navy-800 dark:text-navy-200"}`}>
        {value}
      </span>
    </div>
  );
}
