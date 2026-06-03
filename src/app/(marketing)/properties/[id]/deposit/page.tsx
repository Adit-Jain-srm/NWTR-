"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Timeline } from "@/components/ui/timeline";
import { Alert } from "@/components/ui/alert";
import { PageTransition } from "@/components/motion/transitions";
import { formatCurrency } from "@/lib/utils";
import { DEPOSIT } from "@/lib/constants";
import { useToast } from "@/components/providers/toast-provider";

const steps = ["Eligibility", "Configure", "Review", "Confirm"];

export default function DepositCheckoutPage() {
  const [step, setStep] = useState(0);
  const [depositPercent, setDepositPercent] = useState<number>(75);
  const [tenure, setTenure] = useState(12);
  const [agreed, setAgreed] = useState(false);
  const { success: toastSuccess } = useToast();

  const propertyValue = 12000000;
  const depositAmount = propertyValue * (depositPercent / 100);
  const monthlyPayout = Math.round((depositAmount * DEPOSIT.blendedYieldRate) / 12);

  function next() {
    if (step < 3) setStep(step + 1);
    if (step === 3) toastSuccess("Deposit initiated! Our RM will contact you within 24 hours.");
  }

  return (
    <PageTransition>
      <section className="pt-28 pb-16">
        <Container size="md">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              {steps.map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${i <= step ? "bg-gold-500 text-navy-900" : "bg-navy-100 dark:bg-navy-800 text-navy-400"}`}>
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span className={`text-xs font-medium hidden sm:inline ${i <= step ? "text-navy-900 dark:text-white" : "text-navy-400"}`}>{s}</span>
                </div>
              ))}
            </div>
            <ProgressBar value={step + 1} max={4} size="sm" />
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
              {step === 0 && (
                <Card padding="lg">
                  <Heading level={3}>Eligibility Check</Heading>
                  <Text muted className="mt-2 mb-6">Verify your readiness for a deposit-based rental.</Text>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
                      <Text size="sm">KYC Status</Text>
                      <Badge variant="success" dot>Tier 2 Verified</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
                      <Text size="sm">Income Verification</Text>
                      <Badge variant="success" dot>₹40L+ Annual</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
                      <Text size="sm">Credit Score</Text>
                      <Badge variant="success" dot>750+ (Excellent)</Badge>
                    </div>
                  </div>
                  <Alert variant="success" className="mt-6">You meet all eligibility requirements for this property.</Alert>
                  <Button variant="primary" size="lg" fullWidth className="mt-6" onClick={next}>Continue to Configuration →</Button>
                </Card>
              )}

              {step === 1 && (
                <Card padding="lg">
                  <Heading level={3}>Configure Your Deposit</Heading>
                  <Text muted className="mt-2 mb-6">Set your deposit percentage and tenure.</Text>
                  <div className="space-y-8">
                    <Slider label="Deposit Percentage" value={depositPercent} onChange={setDepositPercent} min={DEPOSIT.minPercentage} max={DEPOSIT.maxPercentage} step={5} formatValue={(v) => `${v}%`} />
                    <div>
                      <Text size="sm" weight="medium" className="mb-3 !text-navy-700 dark:!text-navy-200">Tenure</Text>
                      <div className="grid grid-cols-3 gap-3">
                        {[12, 24, 36].map((t) => (
                          <button key={t} onClick={() => setTenure(t)} className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${tenure === t ? "border-gold-500 bg-gold-50 dark:bg-gold-500/10 text-gold-700 dark:text-gold-400" : "border-navy-200 dark:border-navy-700 text-navy-600 dark:text-navy-300"}`}>
                            {t} months
                          </button>
                        ))}
                      </div>
                    </div>
                    <Card variant="glass" padding="md" className="!bg-surface-50 dark:!bg-navy-800/50">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div><Text size="xs" muted>Deposit Amount</Text><Text weight="bold" className="!text-navy-900 dark:!text-white">{formatCurrency(depositAmount)}</Text></div>
                        <div><Text size="xs" muted>Monthly to Owner</Text><Text weight="bold" className="!text-navy-900 dark:!text-white">{formatCurrency(monthlyPayout)}/mo</Text></div>
                        <div><Text size="xs" muted>Your Monthly Rent</Text><Text weight="bold" className="!text-gold-600">₹0</Text></div>
                        <div><Text size="xs" muted>Total Savings ({tenure}mo)</Text><Text weight="bold" className="!text-emerald-500">{formatCurrency(monthlyPayout * tenure)}</Text></div>
                      </div>
                    </Card>
                  </div>
                  <Button variant="primary" size="lg" fullWidth className="mt-6" onClick={next}>Review Summary →</Button>
                </Card>
              )}

              {step === 2 && (
                <Card padding="lg">
                  <Heading level={3}>Review & Confirm</Heading>
                  <Text muted className="mt-2 mb-6">Please review your deposit configuration before proceeding.</Text>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between p-3 rounded-lg bg-surface-50 dark:bg-navy-800/50"><Text size="sm" muted>Property</Text><Text size="sm" weight="bold" className="!text-navy-900 dark:!text-white">3BHK Koramangala</Text></div>
                    <div className="flex justify-between p-3 rounded-lg bg-surface-50 dark:bg-navy-800/50"><Text size="sm" muted>Deposit Amount</Text><Text size="sm" weight="bold" className="!text-navy-900 dark:!text-white">{formatCurrency(depositAmount)}</Text></div>
                    <div className="flex justify-between p-3 rounded-lg bg-surface-50 dark:bg-navy-800/50"><Text size="sm" muted>Deposit %</Text><Text size="sm" weight="bold" className="!text-navy-900 dark:!text-white">{depositPercent}%</Text></div>
                    <div className="flex justify-between p-3 rounded-lg bg-surface-50 dark:bg-navy-800/50"><Text size="sm" muted>Tenure</Text><Text size="sm" weight="bold" className="!text-navy-900 dark:!text-white">{tenure} months</Text></div>
                    <div className="flex justify-between p-3 rounded-lg bg-surface-50 dark:bg-navy-800/50"><Text size="sm" muted>Monthly Payout</Text><Text size="sm" weight="bold" className="!text-navy-900 dark:!text-white">{formatCurrency(monthlyPayout)}/mo</Text></div>
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 w-4 h-4 rounded accent-gold-500" />
                    <Text size="xs" muted>I understand my deposit will be invested in NBFC-regulated instruments (FDs, G-Secs, T-Bills) and returned in full at tenure end. I agree to the terms of the NWTR Deposit Agreement.</Text>
                  </label>
                  <Button variant="primary" size="lg" fullWidth className="mt-6 shadow-gold" onClick={next} disabled={!agreed}>Confirm Deposit →</Button>
                </Card>
              )}

              {step === 3 && (
                <Card padding="lg" className="text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}>
                    <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-4xl mb-6">✓</div>
                  </motion.div>
                  <Heading level={3}>Deposit Initiated!</Heading>
                  <Text muted className="mt-2 mb-8">Your deposit process has been started. Here&apos;s what happens next:</Text>
                  <Timeline items={[
                    { title: "RM Contact", description: "Our Relationship Manager will call within 24 hours", status: "active" as const, date: "Within 24 hrs" },
                    { title: "Agreement Signing", description: "E-sign the tri-party deposit agreement", status: "pending" as const, date: "Day 2-3" },
                    { title: "Fund Transfer", description: "Transfer deposit to designated escrow account", status: "pending" as const, date: "Day 3-5" },
                    { title: "Move In", description: "Keys handed over, start your rent-free living!", status: "pending" as const, date: "Day 7-10" },
                  ]} />
                  <Button variant="primary" size="lg" className="mt-8">Go to Dashboard</Button>
                </Card>
              )}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>
    </PageTransition>
  );
}
