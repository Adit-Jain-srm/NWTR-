"use client";

import { StatCard } from "@/components/dashboard/stat-card";
import { PageTransition } from "@/components/motion/page-transition";

export default function AdminDashboard() {
  return (
    <PageTransition>
      <div className="space-y-8">
      <h1 className="text-2xl font-display font-bold text-navy-900">Platform Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard title="Total Users" value="1,247" icon="👥" trend="up" change="+89 this month" />
        <StatCard title="Properties" value="342" icon="🏠" trend="up" change="+24 listed" />
        <StatCard title="Active Deposits" value="156" icon="💰" trend="up" change="₹117 Cr AUM" />
        <StatCard title="Monthly Revenue" value="₹18.7L" icon="📈" trend="up" change="+12% MoM" />
        <StatCard title="Pending KYC" value="23" icon="⏳" trend="down" change="-8 from last week" />
        <StatCard title="Payout Volume" value="₹72L" icon="💳" trend="up" change="May 2026" />
      </div>

      <div className="bg-white rounded-xl border border-navy-100 p-6">
        <h2 className="font-display font-bold text-navy-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Approve Properties", icon: "✅" },
            { label: "Verify KYC", icon: "🔍" },
            { label: "Schedule Payouts", icon: "📅" },
            { label: "View Audit Logs", icon: "📋" },
          ].map((a) => (
            <button key={a.label} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-navy-100 hover:border-gold-300 hover:bg-gold-50/50 transition-all">
              <span className="text-2xl">{a.icon}</span>
              <span className="text-xs font-medium text-navy-700">{a.label}</span>
            </button>
          ))}
        </div>
      </div>
      </div>
    </PageTransition>
  );
}
