"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { DataTable } from "@/components/ui/data-table";
import { StatCard } from "@/components/ui/stat-card";
import { PageTransition } from "@/components/motion/transitions";

const users = [
  { id: "1", name: "Aditya Jain", email: "aditya@nwtr.in", role: "TENANT", kyc: 2, status: "Active" },
  { id: "2", name: "Rajesh Kumar", email: "rajesh@nwtr.in", role: "OWNER", kyc: 3, status: "Active" },
  { id: "3", name: "Priya Sharma", email: "priya@nwtr.in", role: "TENANT", kyc: 1, status: "Pending" },
  { id: "4", name: "Ankit Verma", email: "ankit@nwtr.in", role: "RM", kyc: 3, status: "Active" },
  { id: "5", name: "Neha Gupta", email: "neha@nwtr.in", role: "OWNER", kyc: 3, status: "Active" },
  { id: "6", name: "Vikram Singh", email: "vikram@nwtr.in", role: "ADMIN", kyc: 3, status: "Active" },
  { id: "7", name: "Ravi Patel", email: "ravi@nwtr.in", role: "TENANT", kyc: 0, status: "Onboarding" },
  { id: "8", name: "Deepika Nair", email: "deepika@nwtr.in", role: "OWNER", kyc: 3, status: "Active" },
];

export default function UsersPage() {
  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <Heading level={2}>User Management</Heading>
          <Text muted className="mt-1">View and manage all platform users.</Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Users" value="1,247" icon="👥" trend="up" change="+89 this month" />
          <StatCard title="Tenants" value="892" icon="🔑" />
          <StatCard title="Owners" value="312" icon="🏡" />
          <StatCard title="Pending KYC" value="23" icon="⏳" trend="down" change="-8 this week" />
        </div>

        <Card padding="none">
          <DataTable
            columns={[
              { key: "name", header: "Name", className: "font-medium" },
              { key: "email", header: "Email", className: "text-navy-500 dark:text-navy-400" },
              { key: "role", header: "Role", render: (row) => <Badge variant="outline">{row.role as string}</Badge> },
              { key: "kyc", header: "KYC Tier", render: (row) => <span>Tier {row.kyc as number}</span> },
              { key: "status", header: "Status", render: (row) => {
                const s = row.status as string;
                return <Badge variant={s === "Active" ? "success" : s === "Pending" ? "warning" : "default"} dot>{s}</Badge>;
              }},
            ]}
            data={users}
            keyField="id"
          />
        </Card>
      </div>
    </PageTransition>
  );
}
