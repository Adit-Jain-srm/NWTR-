"use client";

import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/utils";

const faqData = [
  { category: "For Tenants", items: [
    { q: "How does NWTR work for tenants?", a: "Make a one-time deposit (50-80% of property value) and live in a premium property for one year with zero monthly rent. At tenure end, your entire deposit is returned." },
    { q: "Is my deposit safe?", a: "Absolutely. Your deposit is in a segregated escrow managed by an RBI-registered NBFC. Invested only in FDs, T-Bills, and G-Secs with guaranteed returns." },
    { q: "What if I need to exit early?", a: "Early exit with notice period. A partial penalty applies based on remaining tenure, but majority of deposit is returned within 30 days." },
  ]},
  { category: "For Owners", items: [
    { q: "How do I receive monthly payouts?", a: "Auto-credited to your bank via NACH mandate on the 1st of every month. Track all payouts in your owner dashboard." },
    { q: "What tenants will NWTR place?", a: "Only financially verified HNI tenants who pass 3-tier KYC (identity, financial, advanced). Professionals, founders, high-net-worth individuals." },
  ]},
  { category: "Security", items: [
    { q: "What regulatory framework governs NWTR?", a: "RBI via NBFC partnership, SEBI for investment instruments, RERA for property transactions, DPDP Act 2023 for data protection." },
    { q: "What if NWTR shuts down?", a: "Your deposit is in a ring-fenced escrow — legally yours, cannot be used for company operations. The scheduled bank would return funds directly." },
  ]},
];

export function FAQ() {
  return (
    <Section className="bg-surface-50 dark:bg-navy-900">
      <Container size="md">
        <ScrollReveal className="text-center mb-12">
          <Text size="sm" weight="semibold" className="!text-gold-700 uppercase tracking-wider">FAQ</Text>
          <Heading level={2} className="mt-3">Common Questions</Heading>
        </ScrollReveal>

        <div className="space-y-8">
          {faqData.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-semibold text-navy-400 dark:text-navy-500 uppercase tracking-wider mb-3">{group.category}</h3>
              <Accordion.Root type="single" collapsible className="space-y-2">
                {group.items.map((item, i) => (
                  <FAQItem key={i} value={`${group.category}-${i}`} question={item.q} answer={item.a} />
                ))}
              </Accordion.Root>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FAQItem({ value, question, answer }: { value: string; question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Accordion.Item value={value} className="bg-white dark:bg-navy-800 rounded-xl border border-navy-100 dark:border-navy-700 overflow-hidden">
      <Accordion.Trigger
        className="w-full flex items-center justify-between p-5 text-left hover:bg-navy-50/50 dark:hover:bg-navy-700/30 transition-colors group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-medium text-navy-800 dark:text-navy-100 pr-4">{question}</span>
        <motion.span className="text-navy-400 shrink-0 text-lg" animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
          +
        </motion.span>
      </Accordion.Trigger>
      <Accordion.Content forceMount>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}>
              <div className="px-5 pb-5 text-sm text-navy-600 dark:text-navy-300 leading-relaxed">{answer}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </Accordion.Content>
    </Accordion.Item>
  );
}
