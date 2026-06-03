"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Timeline } from "@/components/ui/timeline";
import { DataTable } from "@/components/ui/data-table";
import { StatCard } from "@/components/ui/stat-card";
import { PageTransition } from "@/components/motion/transitions";
import { formatCurrency } from "@/lib/utils";

const payouts = [
  { id: "PAY-001", date: "Jun 1, 2026", amount: "₹45,000", status: "Completed" },
  { id: "PAY-002", date: "May 1, 2026", amount: "₹45,000", status: "Completed" },
  { id: "PAY-003", date: "Apr 1, 2026", amount: "₹45,000", status: "Completed" },
  { id: "PAY-004", date: "Jul 1, 2026", amount: "₹45,000", status: "Scheduled" },
];

const investmentBreakdown = [
  { instrument: "Fixed Deposits", allocation: "35%", rate: "6.8%", amount: "₹29,40,000" },
  { instrument: "Government Bonds", allocation: "25%", rate: "7.5%", amount: "₹21,00,000" },
  { instrument: "Treasury Bills", allocation: "20%", rate: "7.1%", amount: "₹16,80,000" },
  { instrument: "AAA Corporate Bonds", allocation: "15%", rate: "8.2%", amount: "₹12,60,000" },
  { instrument: "Liquid Fund", allocation: "5%", rate: "5.5%", amount: "₹4,20,000" },
];

export default function MyDeposit() {
  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <Heading level={2}>My Deposit</Heading>
          <Text muted className="mt-1">Track your deposit, investments, and payout history.</Text>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Deposit Amount" value="₹84,00,000" icon="💰" />
          <StatCard title="Status" value="Active" icon="✅" trend="up" change="Yielding since Mar 15" />
          <StatCard title="Monthly Payout" value="₹45,000" icon="💳" trend="up" change="To owner on 1st" />
          <StatCard title="Return Date" value="Mar 15, 2027" icon="📅" trend="neutral" change="287 days remaining" />
        </div>

        {/* Deposit Details */}
        <Card padding="lg">
          <div className="flex items-center justify-between mb-6">
            <Heading level={4}>Deposit Overview</Heading>
            <Badge variant="success" dot>Active · Yielding</Badge>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div>
              <Text size="xs" muted>Property</Text>
              <Text weight="bold" className="!text-navy-900 dark:!text-white">3BHK Koramangala</Text>
            </div>
            <div>
              <Text size="xs" muted>Deposit %</Text>
              <Text weight="bold" className="!text-navy-900 dark:!text-white">70%</Text>
            </div>
            <div>
              <Text size="xs" muted>Tenure</Text>
              <Text weight="bold" className="!text-navy-900 dark:!text-white">12 Months</Text>
            </div>
            <div>
              <Text size="xs" muted>Blended Yield</Text>
              <Text weight="bold" className="!text-navy-900 dark:!text-white">7.5% p.a.</Text>
            </div>
          </div>
          <ProgressBar value={78} max={365} showValue label="Tenure Progress" size="lg" />
        </Card>

        {/* Investment Breakdown */}
        <Card padding="lg">
          <Heading level={4} className="mb-4">Investment Allocation</Heading>
          <Text size="sm" muted className="mb-6">Your deposit is allocated across sovereign-grade instruments for maximum safety.</Text>
          <div className="space-y-3">
            {investmentBreakdown.map((inv) => (
              <div key={inv.instrument} className="flex items-center justify-between p-3 rounded-lg bg-surface-50 dark:bg-navy-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold-500" />
                  <div>
                    <Text size="sm" weight="medium" className="!text-navy-900 dark:!text-white">{inv.instrument}</Text>
                    <Text size="xs" muted>{inv.allocation} · {inv.rate} p.a.</Text>
                  </div>
                </div>
                <Text size="sm" weight="bold" className="!text-navy-900 dark:!text-white">{inv.amount}</Text>
              </div>
            ))}
          </div>
        </Card>

        {/* Payout History */}
        <Card padding="lg">
          <div className="flex items-center justify-between mb-4">
            <Heading level={4}>Owner Payout History</Heading>
            <Text size="xs" muted>Auto-credited on 1st of each month</Text>
          </div>
          <DataTable
            columns={[
              { key: "id", header: "ID", className: "font-mono text-xs" },
              { key: "date", header: "Date" },
              { key: "amount", header: "Amount", className: "font-bold" },
              { key: "status", header: "Status", render: (row) => (
                <Badge variant={row.status === "Completed" ? "success" : "warning"} dot>
                  {row.status as string}
                </Badge>
              )},
            ]}
            data={payouts}
            keyField="id"
          />
        </Card>
      </div>
    </PageTransition>
  );
}
