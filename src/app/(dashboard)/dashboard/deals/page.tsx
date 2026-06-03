"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/motion/transitions";

const stages = ["Visit", "Interest", "KYC Complete", "Agreement", "Deposit", "Active"] as const;
type Stage = typeof stages[number];

interface Deal {
  id: string;
  tenant: string;
  property: string;
  value: string;
  stage: Stage;
  daysInStage: number;
  slaMax: number;
  blocker?: string;
  commission: string;
}

const deals: Deal[] = [
  { id: "D-001", tenant: "Priya Sharma", property: "3BHK Koramangala", value: "₹72,00,000", stage: "KYC Complete", daysInStage: 3, slaMax: 5, commission: "₹1,08,000" },
  { id: "D-002", tenant: "Rahul Mehta", property: "4BHK Indiranagar", value: "₹1,05,00,000", stage: "Agreement", daysInStage: 7, slaMax: 7, blocker: "Awaiting owner signature", commission: "₹1,57,500" },
  { id: "D-003", tenant: "Vikram Reddy", property: "Villa Whitefield", value: "₹1,80,00,000", stage: "Visit", daysInStage: 1, slaMax: 3, commission: "₹2,70,000" },
  { id: "D-004", tenant: "Ananya Iyer", property: "Penthouse HSR", value: "₹1,20,00,000", stage: "Interest", daysInStage: 4, slaMax: 5, commission: "₹1,80,000" },
  { id: "D-005", tenant: "Karthik Nair", property: "3BHK JP Nagar", value: "₹56,00,000", stage: "Deposit", daysInStage: 2, slaMax: 3, commission: "₹84,000" },
  { id: "D-006", tenant: "Aditya Jain", property: "3BHK Koramangala", value: "₹84,00,000", stage: "Active", daysInStage: 78, slaMax: 365, commission: "₹1,26,000" },
];

const historicalDeals = [
  { id: "D-H01", tenant: "Meera Kapoor", property: "2BHK HSR", value: "₹45,00,000", outcome: "Closed", duration: "18 days", commission: "₹67,500" },
  { id: "D-H02", tenant: "Suresh Patel", property: "3BHK Whitefield", value: "₹62,00,000", outcome: "Closed", duration: "24 days", commission: "₹93,000" },
  { id: "D-H03", tenant: "Neha Gupta", property: "4BHK Indiranagar", value: "₹98,00,000", outcome: "Lost", duration: "31 days", commission: "—" },
];

const stageColors: Record<Stage, string> = {
  "Visit": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Interest": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "KYC Complete": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Agreement": "bg-gold-500/10 text-gold-400 border-gold-500/20",
  "Deposit": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Active": "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
};

export default function DealsPage() {
  const [selectedStage, setSelectedStage] = useState<Stage | "All">("All");

  const filtered = selectedStage === "All" ? deals : deals.filter(d => d.stage === selectedStage);
  const pipelineValue = deals.reduce((sum, d) => sum + parseInt(d.value.replace(/[₹,]/g, "")), 0);
  const totalCommission = deals.reduce((sum, d) => sum + parseInt(d.commission.replace(/[₹,]/g, "")), 0);

  return (
    <PageTransition>
      <div className="space-y-8">
        <div className="flex items-start justify-between">
          <div>
            <Heading level={2}>Deal Tracker</Heading>
            <Text muted className="mt-1">Track active deals through each stage.</Text>
          </div>
          <Button variant="primary" size="sm">+ New Deal</Button>
        </div>

        {/* Pipeline summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card padding="md">
            <Text size="xs" muted className="uppercase tracking-wider">Active Deals</Text>
            <div className="text-2xl font-display font-bold text-white mt-1">{deals.filter(d => d.stage !== "Active").length}</div>
          </Card>
          <Card padding="md">
            <Text size="xs" muted className="uppercase tracking-wider">Pipeline Value</Text>
            <div className="text-2xl font-display font-bold text-gold-400 mt-1">₹{(pipelineValue / 10000000).toFixed(1)} Cr</div>
          </Card>
          <Card padding="md">
            <Text size="xs" muted className="uppercase tracking-wider">Projected Commission</Text>
            <div className="text-2xl font-display font-bold text-emerald-400 mt-1">₹{(totalCommission / 100000).toFixed(1)} L</div>
          </Card>
          <Card padding="md">
            <Text size="xs" muted className="uppercase tracking-wider">Avg. Closure Time</Text>
            <div className="text-2xl font-display font-bold text-white mt-1">21 days</div>
          </Card>
        </div>

        {/* Stage filter */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedStage("All")}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${selectedStage === "All" ? "bg-white/10 border-white/20 text-white" : "border-navy-700 text-navy-400 hover:text-white"}`}
          >
            All ({deals.length})
          </button>
          {stages.map(stage => {
            const count = deals.filter(d => d.stage === stage).length;
            return (
              <button
                key={stage}
                onClick={() => setSelectedStage(stage)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${selectedStage === stage ? "bg-white/10 border-white/20 text-white" : "border-navy-700 text-navy-400 hover:text-white"}`}
              >
                {stage} ({count})
              </button>
            );
          })}
        </div>

        {/* Active deals */}
        <div className="space-y-3">
          {filtered.map(deal => (
            <Card key={deal.id} padding="md" className="hover:border-gold-500/20 transition-colors">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <Text size="sm" weight="bold" className="!text-white truncate">{deal.tenant}</Text>
                      <Badge className={stageColors[deal.stage]}>{deal.stage}</Badge>
                    </div>
                    <Text size="xs" muted className="mt-0.5">{deal.property} · {deal.id}</Text>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-right">
                  <div>
                    <Text size="xs" muted>Value</Text>
                    <Text size="sm" weight="bold" className="!text-white">{deal.value}</Text>
                  </div>
                  <div>
                    <Text size="xs" muted>Days in stage</Text>
                    <Text size="sm" weight="bold" className={deal.daysInStage >= deal.slaMax ? "!text-red-400" : "!text-white"}>
                      {deal.daysInStage}/{deal.slaMax}
                    </Text>
                  </div>
                  <div>
                    <Text size="xs" muted>Commission</Text>
                    <Text size="sm" weight="bold" className="!text-emerald-400">{deal.commission}</Text>
                  </div>
                </div>
              </div>

              {deal.blocker && (
                <div className="mt-3 flex items-center gap-2 py-2 px-3 bg-red-500/5 border border-red-500/10 rounded-lg">
                  <span className="text-red-400 text-xs font-medium">Blocker:</span>
                  <span className="text-xs text-red-300">{deal.blocker}</span>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Historical deals */}
        <Card padding="lg">
          <Heading level={4} className="mb-4">Closed Deals</Heading>
          <div className="space-y-2">
            {historicalDeals.map(deal => (
              <div key={deal.id} className="flex items-center justify-between py-3 border-b border-navy-800 last:border-0">
                <div>
                  <Text size="sm" weight="medium" className="!text-white">{deal.tenant}</Text>
                  <Text size="xs" muted>{deal.property} · {deal.duration}</Text>
                </div>
                <div className="flex items-center gap-4">
                  <Text size="sm" className="!text-navy-300">{deal.value}</Text>
                  <Badge variant={deal.outcome === "Closed" ? "success" : "danger"}>{deal.outcome}</Badge>
                  <Text size="sm" weight="bold" className={deal.outcome === "Closed" ? "!text-emerald-400" : "!text-navy-500"}>{deal.commission}</Text>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}
