"use client";

import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/motion/transitions";

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
          <div className="space-y-3">
            {[
              "How do I extend my lease tenure?",
              "What happens if I need to exit early?",
              "How do I update my bank details for refund?",
              "Where can I view my investment breakdown?",
            ].map((q) => (
              <div key={q} className="flex items-center justify-between p-3 rounded-lg border border-navy-100 dark:border-navy-800 hover:border-gold-200 dark:hover:border-gold-500/30 transition-colors cursor-pointer">
                <Text size="sm">{q}</Text>
                <span className="text-navy-400">→</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}
