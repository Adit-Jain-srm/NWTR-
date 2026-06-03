"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { DataTable } from "@/components/ui/data-table";
import { StatCard } from "@/components/ui/stat-card";
import { PageTransition } from "@/components/motion/transitions";

const clients = [
  { id: "1", name: "Aditya Jain", role: "Tenant", kyc: "Tier 2", status: "Active", assigned: "Mar 10, 2026" },
  { id: "2", name: "Rajesh Kumar", role: "Owner", kyc: "Tier 3", status: "Active", assigned: "Feb 5, 2026" },
  { id: "3", name: "Priya Sharma", role: "Tenant", kyc: "Tier 1", status: "Pending KYC", assigned: "May 20, 2026" },
  { id: "4", name: "Neha Gupta", role: "Owner", kyc: "Tier 3", status: "Active", assigned: "Apr 12, 2026" },
  { id: "5", name: "Ravi Patel", role: "Tenant", kyc: "Tier 0", status: "Onboarding", assigned: "Jun 1, 2026" },
  { id: "6", name: "Deepika Nair", role: "Owner", kyc: "Tier 2", status: "Active", assigned: "Jan 18, 2026" },
];

export default function ClientsPage() {
  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <Heading level={2}>My Clients</Heading>
          <Text muted className="mt-1">Manage assigned tenants and property owners.</Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <StatCard title="Total Clients" value="6" icon="👥" />
          <StatCard title="Active" value="4" icon="✅" trend="up" change="All verified" />
          <StatCard title="Pending KYC" value="1" icon="⏳" trend="neutral" change="Needs Tier 2" />
          <StatCard title="Onboarding" value="1" icon="🆕" trend="neutral" change="New this week" />
        </div>

        <Card padding="none">
          <DataTable
            columns={[
              { key: "name", header: "Name", className: "font-medium" },
              { key: "role", header: "Role", render: (row) => <Badge variant="outline">{row.role as string}</Badge> },
              { key: "kyc", header: "KYC", render: (row) => <Badge variant="premium">{row.kyc as string}</Badge> },
              { key: "status", header: "Status", render: (row) => {
                const s = row.status as string;
                return <Badge variant={s === "Active" ? "success" : s === "Pending KYC" ? "warning" : "default"} dot>{s}</Badge>;
              }},
              { key: "assigned", header: "Assigned" },
            ]}
            data={clients}
            keyField="id"
          />
        </Card>
      </div>
    </PageTransition>
  );
}
