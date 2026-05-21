"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const payouts = [
  { id: "PO-2601", date: "May 1, 2026", amount: "₹32,000", property: "Prestige Lakeside", status: "Completed" },
  { id: "PO-2602", date: "May 1, 2026", amount: "₹45,000", property: "Brigade Metropolis", status: "Completed" },
  { id: "PO-2503", date: "Apr 1, 2026", amount: "₹32,000", property: "Prestige Lakeside", status: "Completed" },
  { id: "PO-2504", date: "Apr 1, 2026", amount: "₹45,000", property: "Brigade Metropolis", status: "Completed" },
  { id: "PO-2505", date: "Jun 1, 2026", amount: "₹32,000", property: "Prestige Lakeside", status: "Scheduled" },
  { id: "PO-2506", date: "Jun 1, 2026", amount: "₹45,000", property: "Brigade Metropolis", status: "Scheduled" },
];

function getStatusVariant(status: string) {
  switch (status) {
    case "Completed": return "success" as const;
    case "Scheduled": return "premium" as const;
    case "Failed": return "warning" as const;
    default: return "default" as const;
  }
}

export default function OwnerPayoutsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-navy-900">Payout History</h1>
        <p className="mt-1 text-navy-500">Track all your rental income payouts</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-5 pb-5">
            <p className="text-sm text-navy-500">Total Earned</p>
            <p className="text-2xl font-bold text-navy-900 mt-1">₹6,84,000</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-5 pb-5">
            <p className="text-sm text-navy-500">This Month</p>
            <p className="text-2xl font-bold text-navy-900 mt-1">₹77,000</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-5 pb-5">
            <p className="text-sm text-navy-500">Next Scheduled</p>
            <p className="text-2xl font-bold text-navy-900 mt-1">₹77,000</p>
            <p className="text-xs text-navy-400 mt-0.5">Jun 1, 2026</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-navy-100">
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">ID</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Date</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Amount</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Property</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {payouts.map((row) => (
                <tr key={row.id} className="border-b border-navy-50 last:border-0">
                  <td className="px-6 py-4 text-sm text-navy-700 font-mono">{row.id}</td>
                  <td className="px-6 py-4 text-sm text-navy-700">{row.date}</td>
                  <td className="px-6 py-4 text-sm text-navy-700 font-medium">{row.amount}</td>
                  <td className="px-6 py-4 text-sm text-navy-700">{row.property}</td>
                  <td className="px-6 py-4">
                    <Badge variant={getStatusVariant(row.status)}>{row.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
