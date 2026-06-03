"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";

const faqData = [
  {
    category: "For Tenants",
    items: [
      {
        q: "How does NWTR work for tenants?",
        a: "Make a one-time deposit (50-80% of property value) and live in a premium property for one year with zero monthly rent. At tenure end, your entire deposit is returned — no deductions, no hidden fees.",
      },
      {
        q: "Is my deposit safe?",
        a: "Absolutely. Your deposit is held in a segregated escrow account managed by an RBI-registered NBFC. Funds are invested only in FDs, T-Bills, and G-Secs with guaranteed returns. Your money cannot be used for NWTR's operations.",
      },
      {
        q: "What if I need to exit early?",
        a: "Early exit is possible with a notice period. A partial penalty applies based on remaining tenure, but the majority of your deposit (typically 95%+) is returned within 30 business days.",
      },
      {
        q: "What kind of properties are available?",
        a: "Premium 2-4 BHK apartments and villas in Bangalore's top neighborhoods — Koramangala, Indiranagar, HSR Layout, Whitefield, and more. All properties are verified and maintained.",
      },
    ],
  },
  {
    category: "For Owners",
    items: [
      {
        q: "How do I receive monthly payouts?",
        a: "Payouts are auto-credited to your bank account via NACH mandate on the 1st of every month. Track all payouts, statements, and tax documents in your owner dashboard.",
      },
      {
        q: "What tenants will NWTR place?",
        a: "Only financially verified HNI tenants who pass our 3-tier KYC — identity verification, financial assessment, and advanced background checks. Think professionals, founders, and high-net-worth individuals.",
      },
    ],
  },
  {
    category: "Security & Compliance",
    items: [
      {
        q: "What regulatory framework governs NWTR?",
        a: "RBI via NBFC partnership for fund management, SEBI for investment instruments, RERA for property transactions, and the DPDP Act 2023 for data protection. We maintain full compliance across all frameworks.",
      },
      {
        q: "What if NWTR shuts down?",
        a: "Your deposit is in a ring-fenced escrow — legally yours. It cannot be used for company operations under any circumstance. In an unlikely shutdown scenario, the scheduled bank would return funds directly to you.",
      },
    ],
  },
];

export function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <Section className="bg-surface-50 dark:bg-navy-900">
      <Container size="md">
        <div ref={sectionRef} className="text-center mb-14">
          <motion.span
            className="text-xs font-semibold text-gold-600 dark:text-gold-400 uppercase tracking-[0.2em]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            FAQ
          </motion.span>
          <SplitTextReveal
            tag="h2"
            splitType="words"
            staggerAmount={0.05}
            className="mt-4 text-3xl sm:text-4xl font-serif font-bold text-navy-900 dark:text-white"
          >
            Common Questions
          </SplitTextReveal>
        </div>

        <div className="space-y-10">
          {faqData.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + gi * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xs font-semibold text-navy-400 dark:text-navy-500 uppercase tracking-wider mb-3 pl-1">
                {group.category}
              </h3>
              <div className="space-y-2">
                {group.items.map((item, i) => (
                  <FAQItem key={`${gi}-${i}`} question={item.q} answer={item.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-navy-800 rounded-xl border border-navy-100 dark:border-navy-700 overflow-hidden transition-colors hover:border-navy-200 dark:hover:border-navy-600">
      <button
        className="w-full flex items-center justify-between p-5 text-left group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium text-navy-800 dark:text-navy-100 pr-4 group-hover:text-navy-900 dark:group-hover:text-white transition-colors">
          {question}
        </span>
        <motion.div
          className="shrink-0 w-6 h-6 rounded-full border border-navy-200 dark:border-navy-600 flex items-center justify-center"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-navy-400">
            <path d="M6 2v8M2 6h8" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm text-navy-600 dark:text-navy-300 leading-relaxed border-t border-navy-50 dark:border-navy-700/50 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
