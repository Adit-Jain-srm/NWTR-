"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const payouts = [
  { id: "PO-3001", owner: "Mr. Rajesh Iyer", amount: "₹32,000", scheduled: "Jun 1, 2026", status: "Scheduled" },
  { id: "PO-3002", owner: "Mrs. Sunita Reddy", amount: "₹45,000", scheduled: "Jun 1, 2026", status: "Scheduled" },
  { id: "PO-3003", owner: "Mr. Rajesh Iyer", amount: "₹32,000", scheduled: "May 1, 2026", status: "Completed" },
  { id: "PO-3004", owner: "Mrs. Sunita Reddy", amount: "₹45,000", scheduled: "May 1, 2026", status: "Completed" },
  { id: "PO-3005", owner: "Vikram Nair", amount: "₹28,000", scheduled: "May 1, 2026", status: "Failed" },
  { id: "PO-3006", owner: "Vikram Nair", amount: "₹28,000", scheduled: "May 5, 2026", status: "Completed" },
];

function getStatusVariant(status: string) {
  switch (status) {
    case "Completed": return "success" as const;
    case "Scheduled": return "premium" as const;
    case "Failed": return "warning" as const;
    default: return "default" as const;
  }
}

export default function AdminPayoutsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-navy-900">Payouts</h1>
          <p className="mt-1 text-navy-500">Manage owner payout disbursements</p>
        </div>
        <Button>Schedule Batch</Button>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-navy-100">
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">ID</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Owner</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Amount</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Scheduled</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {payouts.map((payout) => (
                <tr key={payout.id} className="border-b border-navy-50 last:border-0">
                  <td className="px-6 py-4 text-sm text-navy-700 font-mono">{payout.id}</td>
                  <td className="px-6 py-4 text-sm text-navy-700 font-medium">{payout.owner}</td>
                  <td className="px-6 py-4 text-sm text-navy-700 font-medium">{payout.amount}</td>
                  <td className="px-6 py-4 text-sm text-navy-700">{payout.scheduled}</td>
                  <td className="px-6 py-4">
                    <Badge variant={getStatusVariant(payout.status)}>{payout.status}</Badge>
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
