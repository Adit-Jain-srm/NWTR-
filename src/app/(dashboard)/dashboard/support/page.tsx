"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/motion/transitions";

const faqs = [
  {
    q: "How do I extend my lease tenure?",
    a: "You can request a tenure extension up to 60 days before your current lease ends. Navigate to Dashboard → Deposit → Request Extension. Extensions are subject to owner approval and may require a top-up deposit if property value has appreciated. Your RM will guide you through the process.",
  },
  {
    q: "What happens if I need to exit early?",
    a: "Early exit is possible with a 30-day notice period. A partial penalty (typically 2-5% of deposit) applies based on remaining tenure. The majority of your deposit (95%+) is returned within 30 business days of vacating. Contact your RM to initiate the process.",
  },
  {
    q: "How do I update my bank details for refund?",
    a: "Go to Dashboard → Settings → Bank Details. You can update your bank account for deposit refund at any time. Changes require re-verification via a ₹1 test transfer. For security, bank detail changes take 48 hours to activate and you'll receive confirmation via email and SMS.",
  },
  {
    q: "Where can I view my investment breakdown?",
    a: "Your deposit allocation is visible under Dashboard → Deposit → Investment Breakdown. You'll see the split across FDs, G-Secs, and T-Bills, along with current yield rates and projected returns. Quarterly statements are also available for download in the Documents section.",
  },
];

export default function SupportPage() {
  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <Heading level={2}>Support</Heading>
          <Text muted className="mt-1">Get help from our team or AI assistant.</Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card padding="lg">
            <div className="text-center">
              <span className="text-4xl mb-4 block">💬</span>
              <Heading level={4}>AI Assistant</Heading>
              <Text size="sm" muted className="mt-2">Get instant answers about deposits, properties, and how NWTR works.</Text>
              <Button variant="primary" size="md" className="mt-6">Open AI Chat</Button>
            </div>
          </Card>

          <Card padding="lg">
            <div className="text-center">
              <span className="text-4xl mb-4 block">🤝</span>
              <Heading level={4}>Your Relationship Manager</Heading>
              <Text size="sm" muted className="mt-2">Ankit Verma is your dedicated RM for personalized support.</Text>
              <div className="mt-4 p-3 rounded-lg bg-surface-50 dark:bg-navy-800/50">
                <Text size="sm" weight="medium" className="!text-navy-900 dark:!text-white">Ankit Verma</Text>
                <Text size="xs" muted>ankit@nwtr.in · +91 98765 43212</Text>
              </div>
              <Button variant="outline" size="md" className="mt-4">Contact RM</Button>
            </div>
          </Card>
        </div>

        <Card padding="lg">
          <Heading level={4} className="mb-4">Frequently Asked Questions</Heading>
          <div className="space-y-2">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-navy-100 dark:border-navy-800 hover:border-gold-200 dark:hover:border-gold-500/30 transition-colors overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <Text size="sm" weight="medium">{question}</Text>
        <motion.span
          className="text-navy-400 shrink-0 ml-3"
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 text-sm text-navy-600 dark:text-navy-300 leading-relaxed border-t border-navy-50 dark:border-navy-800 pt-3">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
