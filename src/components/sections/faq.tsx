"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

const faqData = [
  {
    category: "For Tenants",
    questions: [
      {
        q: "How does NWTR work for tenants?",
        a: "You make a one-time deposit (50-80% of property value) and live in a premium property for one year with zero monthly rent. At the end of the lease, your entire deposit is returned to you.",
      },
      {
        q: "Is my deposit safe?",
        a: "Absolutely. Your deposit is held in a segregated escrow account managed by an RBI-registered NBFC. It is invested only in government-backed instruments (FDs, T-Bills, G-Secs) with guaranteed returns.",
      },
      {
        q: "What if I need to exit early?",
        a: "Early exit is possible with a notice period. A partial penalty may apply depending on the remaining tenure, but the majority of your deposit is returned within 30 days of vacating.",
      },
    ],
  },
  {
    category: "For Owners",
    questions: [
      {
        q: "How do I receive my monthly payouts?",
        a: "Payouts are automatically credited to your registered bank account via NACH mandate on the 1st of every month. You can track all payouts in your owner dashboard.",
      },
      {
        q: "What kind of tenants will NWTR place?",
        a: "Only financially verified HNI tenants who pass our 3-tier KYC process (identity, financial, advanced verification). These are professionals, founders, and high-net-worth individuals.",
      },
    ],
  },
  {
    category: "About Security",
    questions: [
      {
        q: "What regulatory framework governs NWTR?",
        a: "NWTR operates under RBI guidelines via our NBFC partnership, follows SEBI regulations for investment instruments, is RERA registered for property transactions, and complies with the DPDP Act 2023 for data protection.",
      },
      {
        q: "What happens if NWTR shuts down?",
        a: "Your deposit is held in a ring-fenced escrow — it is legally yours and cannot be used for company operations. In any event, the scheduled bank holding the escrow would return funds directly to you.",
      },
    ],
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <Section className="bg-surface-50">
      <Container size="default">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-medium text-gold-700 uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-navy-900">
            Common Questions
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-8">
          {faqData.map((category) => (
            <div key={category.category}>
              <h3 className="text-sm font-semibold text-navy-400 uppercase tracking-wider mb-4">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.questions.map((item) => {
                  const id = `${category.category}-${item.q}`;
                  const isOpen = openIndex === id;

                  return (
                    <div
                      key={id}
                      className="bg-white rounded-xl border border-navy-100 overflow-hidden"
                    >
                      <button
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-navy-50/50 transition-colors"
                        onClick={() => setOpenIndex(isOpen ? null : id)}
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm font-medium text-navy-800 pr-4">
                          {item.q}
                        </span>
                        <motion.span
                          className="text-navy-400 flex-shrink-0"
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          +
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <div className="px-5 pb-5 text-sm text-navy-600 leading-relaxed">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
