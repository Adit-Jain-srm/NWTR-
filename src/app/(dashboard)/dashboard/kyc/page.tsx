"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Input } from "@/components/ui/input";
import { FileUpload } from "@/components/ui/file-upload";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Alert } from "@/components/ui/alert";
import { PageTransition } from "@/components/motion/transitions";

const tiers = [
  { tier: 1, name: "Basic", status: "verified" as const, fields: ["PAN", "Aadhaar OTP", "Phone", "Email"] },
  { tier: 2, name: "Financial", status: "verified" as const, fields: ["Bank Statements", "ITR (2 years)", "Credit Score"] },
  { tier: 3, name: "Advanced", status: "pending" as const, fields: ["Video KYC", "Source of Funds", "Address Proof"] },
];

export default function KYCPage() {
  const currentTier = 2;
  const [files, setFiles] = useState<File[]>([]);

  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <Heading level={2}>KYC Verification</Heading>
          <Text muted className="mt-1">Complete verification to unlock all platform features.</Text>
        </div>

        {/* Progress */}
        <Card padding="lg">
          <div className="flex items-center justify-between mb-4">
            <Heading level={4}>Verification Progress</Heading>
            <Badge variant="premium">Tier {currentTier} Verified</Badge>
          </div>
          <ProgressBar value={currentTier} max={3} showValue label={`Tier ${currentTier} of 3 completed`} size="lg" />
        </Card>

        {/* Tier Cards */}
        <div className="space-y-4">
          {tiers.map((t) => (
            <Card key={t.tier} padding="lg" className={t.tier <= currentTier ? "!border-emerald-200 dark:!border-emerald-500/20" : ""}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <Heading level={4}>Tier {t.tier}: {t.name}</Heading>
                    {t.tier <= currentTier ? (
                      <Badge variant="success" dot>Verified</Badge>
                    ) : t.tier === currentTier + 1 ? (
                      <Badge variant="warning" dot>In Progress</Badge>
                    ) : (
                      <Badge variant="default">Locked</Badge>
                    )}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {t.fields.map((f) => (
                      <Badge key={f} variant={t.tier <= currentTier ? "success" : "outline"}>{f}</Badge>
                    ))}
                  </div>
                </div>
                {t.tier <= currentTier && <span className="text-2xl">✅</span>}
              </div>
            </Card>
          ))}
        </div>

        {/* Tier 3 Submission (if not complete) */}
        {currentTier < 3 && (
          <Card padding="lg">
            <Heading level={4} className="mb-2">Complete Tier 3: Advanced Verification</Heading>
            <Text size="sm" muted className="mb-6">Required for deposits above ₹50L. Upload source of funds documentation.</Text>

            <Alert variant="info" className="mb-6">
              Tier 3 verification includes a video KYC session. After uploading documents, our RM will schedule a call.
            </Alert>

            <div className="space-y-6">
              <Input label="Source of Funds" placeholder="e.g., Salary, Business Income, Investments" />
              <FileUpload
                label="Supporting Documents"
                onFiles={(f) => setFiles([...files, ...f])}
                files={files}
                onRemove={(i) => setFiles(files.filter((_, idx) => idx !== i))}
                accept={{ "application/pdf": [".pdf"], "image/*": [".jpg", ".png"] }}
                maxFiles={5}
              />
              <div className="flex gap-3">
                <Button variant="primary">Submit for Review</Button>
                <Button variant="ghost">Schedule Video KYC</Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </PageTransition>
  );
}
