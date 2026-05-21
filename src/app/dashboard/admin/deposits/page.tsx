"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const deposits = [
  { id: "DEP-1001", tenant: "Rahul Sharma", property: "Prestige Lakeside Habitat", amount: "₹2,40,000", status: "Active", date: "Jan 15, 2025" },
  { id: "DEP-1002", tenant: "Priya Menon", property: "Brigade Metropolis", amount: "₹3,60,000", status: "Active", date: "Feb 5, 2025" },
  { id: "DEP-1003", tenant: "Ankit Patel", property: "Sobha Dream Acres", amount: "₹1,80,000", status: "Pending", date: "May 18, 2026" },
  { id: "DEP-1004", tenant: "Neha Gupta", property: "Embassy Springs", amount: "₹4,50,000", status: "In Review", date: "May 10, 2026" },
  { id: "DEP-1005", tenant: "Karthik Rajan", property: "Mantri Serenity", amount: "₹1,60,000", status: "Active", date: "Mar 1, 2025" },
  { id: "DEP-1006", tenant: "Meera Das", property: "Puravankara Westend", amount: "₹1,20,000", status: "Cancelled", date: "Apr 20, 2025" },
];

function getStatusVariant(status: string) {
  switch (status) {
    case "Active": return "success" as const;
    case "Pending": return "premium" as const;
    case "In Review": return "warning" as const;
    case "Cancelled": return "default" as const;
    default: return "default" as const;
  }
}

export default function AdminDepositsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-navy-900">Deposits</h1>
        <p className="mt-1 text-navy-500">All deposit guarantees on the platform</p>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-navy-100">
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">ID</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Tenant</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Property</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Amount</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Status</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {deposits.map((deposit) => (
                <tr key={deposit.id} className="border-b border-navy-50 last:border-0">
                  <td className="px-6 py-4 text-sm text-navy-700 font-mono">{deposit.id}</td>
                  <td className="px-6 py-4 text-sm text-navy-700 font-medium">{deposit.tenant}</td>
                  <td className="px-6 py-4 text-sm text-navy-700">{deposit.property}</td>
                  <td className="px-6 py-4 text-sm text-navy-700 font-medium">{deposit.amount}</td>
                  <td className="px-6 py-4">
                    <Badge variant={getStatusVariant(deposit.status)}>{deposit.status}</Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-navy-700">{deposit.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
