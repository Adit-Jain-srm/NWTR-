"use client";

import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { PageTransition } from "@/components/motion/transitions";

const documents = [
  { name: "Deposit Agreement", type: "PDF", date: "Mar 15, 2026", status: "Signed" },
  { name: "KYC Tier 2 Certificate", type: "PDF", date: "May 15, 2026", status: "Verified" },
  { name: "Property Inspection Report", type: "PDF", date: "Mar 10, 2026", status: "Complete" },
];

export default function DocumentsPage() {
  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <Heading level={2}>Documents</Heading>
          <Text muted className="mt-1">Your agreements, certificates, and uploaded files.</Text>
        </div>

        <div className="space-y-3">
          {documents.map((doc) => (
            <Card key={doc.name} padding="md" className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold-50 dark:bg-gold-500/10 flex items-center justify-center text-sm">📄</div>
                <div>
                  <Text size="sm" weight="medium" className="!text-navy-900 dark:!text-white">{doc.name}</Text>
                  <Text size="xs" muted>{doc.type} · {doc.date}</Text>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="success" dot>{doc.status}</Badge>
                <Button variant="ghost" size="sm">Download</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
