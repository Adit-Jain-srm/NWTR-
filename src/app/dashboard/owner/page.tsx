"use client";

import { StatCard } from "@/components/dashboard/stat-card";
import { PageTransition } from "@/components/motion/page-transition";

export default function OwnerDashboard() {
  return (
    <PageTransition>
      <div className="space-y-8">
      <h1 className="text-2xl font-display font-bold text-navy-900">Welcome back, Rajesh</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Payouts" value="₹2,70,000" icon="💳" trend="up" change="+₹45,000 this month" />
        <StatCard title="Properties Listed" value="3" icon="🏠" />
        <StatCard title="Occupancy Rate" value="100%" icon="📈" trend="up" change="All occupied" />
        <StatCard title="Next Payout" value="Jun 1" icon="📅" trend="neutral" change="₹1,35,000 total" />
      </div>

      <div className="bg-white rounded-xl border border-navy-100 p-6">
        <h2 className="font-display font-bold text-navy-900 mb-4">Recent Payouts</h2>
        <div className="space-y-3">
          {[
            { property: "3BHK Koramangala", amount: "₹45,000", date: "May 1, 2026" },
            { property: "4BHK Indiranagar", amount: "₹72,000", date: "May 1, 2026" },
            { property: "2BHK HSR Layout", amount: "₹18,000", date: "May 1, 2026" },
          ].map((p) => (
            <div key={p.property} className="flex items-center justify-between py-2 border-b border-navy-50 last:border-0">
              <div>
                <p className="text-sm font-medium text-navy-800">{p.property}</p>
                <p className="text-xs text-navy-400">{p.date}</p>
              </div>
              <span className="font-display font-bold text-emerald-500">{p.amount}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </PageTransition>
  );
}
