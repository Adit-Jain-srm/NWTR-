"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { DataTable } from "@/components/ui/data-table";
import { StatCard } from "@/components/ui/stat-card";
import { PageTransition } from "@/components/motion/transitions";
import { formatCurrency } from "@/lib/utils";

const deposits = [
  { id: "DEP-001", tenant: "Aditya Jain", property: "3BHK Koramangala", amount: 8400000, status: "Active", date: "Mar 15, 2026" },
  { id: "DEP-002", tenant: "Priya Sharma", property: "2BHK HSR Layout", amount: 5100000, status: "Pending", date: "Jun 1, 2026" },
  { id: "DEP-003", tenant: "Ravi Patel", property: "4BHK Indiranagar", amount: 17500000, status: "Confirmed", date: "May 20, 2026" },
];

export default function DepositsPage() {
  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <Heading level={2}>Deposit Management</Heading>
          <Text muted className="mt-1">Monitor all active and pending deposits.</Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard title="Active Deposits" value="156" icon="💰" trend="up" change="+5 this month" />
          <StatCard title="Total AUM" value="₹117 Cr" icon="🏦" trend="up" change="+₹8.5 Cr" />
          <StatCard title="Pending" value="3" icon="⏳" trend="neutral" change="Awaiting confirmation" />
        </div>

        <Card padding="none">
          <DataTable
            columns={[
              { key: "id", header: "ID", className: "font-mono text-xs !text-navy-400" },
              { key: "tenant", header: "Tenant" },
              { key: "property", header: "Property" },
              { key: "amount", header: "Amount", render: (row) => <span className="font-display font-bold">{formatCurrency(row.amount as number)}</span> },
              { key: "status", header: "Status", render: (row) => {
                const s = row.status as string;
                return <Badge variant={s === "Active" ? "success" : s === "Pending" ? "warning" : "premium"} dot>{s}</Badge>;
              }},
              { key: "date", header: "Date" },
            ]}
            data={deposits}
            keyField="id"
          />
        </Card>
      </div>
    </PageTransition>
  );
}
