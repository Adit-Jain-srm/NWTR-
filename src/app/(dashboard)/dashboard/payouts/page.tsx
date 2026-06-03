"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { DataTable } from "@/components/ui/data-table";
import { StatCard } from "@/components/ui/stat-card";
import { PageTransition } from "@/components/motion/transitions";
import { formatCurrency } from "@/lib/utils";

const payouts = [
  { id: "PAY-001", property: "3BHK Koramangala", amount: 45000, date: "Jun 1, 2026", status: "Completed" },
  { id: "PAY-002", property: "4BHK Indiranagar", amount: 72000, date: "Jun 1, 2026", status: "Completed" },
  { id: "PAY-003", property: "2BHK HSR Layout", amount: 18000, date: "Jun 1, 2026", status: "Completed" },
  { id: "PAY-004", property: "3BHK Koramangala", amount: 45000, date: "May 1, 2026", status: "Completed" },
  { id: "PAY-005", property: "4BHK Indiranagar", amount: 72000, date: "May 1, 2026", status: "Completed" },
  { id: "PAY-006", property: "2BHK HSR Layout", amount: 18000, date: "Jul 1, 2026", status: "Scheduled" },
];

export default function PayoutsPage() {
  const totalEarned = payouts.filter(p => p.status === "Completed").reduce((sum, p) => sum + p.amount, 0);
  const thisMonth = payouts.filter(p => p.date.includes("Jun") && p.status === "Completed").reduce((sum, p) => sum + p.amount, 0);

  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <Heading level={2}>Payout History</Heading>
          <Text muted className="mt-1">Track all monthly payouts from your properties.</Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard title="Total Earned" value={formatCurrency(totalEarned)} icon="💰" trend="up" change="All time" />
          <StatCard title="This Month" value={formatCurrency(thisMonth)} icon="💳" trend="up" change="Jun 2026" />
          <StatCard title="Next Payout" value="Jul 1, 2026" icon="📅" trend="neutral" change={formatCurrency(18000)} />
        </div>

        <Card padding="none">
          <DataTable
            columns={[
              { key: "id", header: "ID", className: "font-mono text-xs !text-navy-400" },
              { key: "property", header: "Property" },
              { key: "amount", header: "Amount", render: (row) => <span className="font-display font-bold">{formatCurrency(row.amount as number)}</span> },
              { key: "date", header: "Date" },
              { key: "status", header: "Status", render: (row) => <Badge variant={row.status === "Completed" ? "success" : "warning"} dot>{row.status as string}</Badge> },
            ]}
            data={payouts}
            keyField="id"
          />
        </Card>
      </div>
    </PageTransition>
  );
}
