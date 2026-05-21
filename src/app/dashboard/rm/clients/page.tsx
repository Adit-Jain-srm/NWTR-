"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const clients = [
  { name: "Rahul Sharma", role: "Tenant", kyc: "Verified", assignedDate: "Jan 10, 2026" },
  { name: "Priya Menon", role: "Tenant", kyc: "Verified", assignedDate: "Feb 5, 2026" },
  { name: "Ankit Patel", role: "Tenant", kyc: "Pending", assignedDate: "May 15, 2026" },
  { name: "Mr. Rajesh Iyer", role: "Owner", kyc: "Verified", assignedDate: "Dec 1, 2025" },
  { name: "Neha Gupta", role: "Tenant", kyc: "In Review", assignedDate: "May 10, 2026" },
  { name: "Mrs. Sunita Reddy", role: "Owner", kyc: "Verified", assignedDate: "Nov 20, 2025" },
];

function getKycVariant(status: string) {
  switch (status) {
    case "Verified": return "success" as const;
    case "Pending": return "warning" as const;
    case "In Review": return "premium" as const;
    default: return "default" as const;
  }
}

export default function RMClientsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-navy-900">Clients</h1>
        <p className="mt-1 text-navy-500">Manage your assigned clients</p>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-navy-100">
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Name</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Role</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">KYC Status</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Assigned Date</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, i) => (
                <tr key={i} className="border-b border-navy-50 last:border-0">
                  <td className="px-6 py-4 text-sm text-navy-700 font-medium">{client.name}</td>
                  <td className="px-6 py-4 text-sm text-navy-700">{client.role}</td>
                  <td className="px-6 py-4">
                    <Badge variant={getKycVariant(client.kyc)}>{client.kyc}</Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-navy-700">{client.assignedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
