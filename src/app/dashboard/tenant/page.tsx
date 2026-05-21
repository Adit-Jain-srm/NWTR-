"use client";

import { StatCard } from "@/components/dashboard/stat-card";
import { PageTransition } from "@/components/motion/page-transition";
import Image from "next/image";

export default function TenantDashboard() {
  return (
    <PageTransition>
      <div className="space-y-8">
      <h1 className="text-2xl font-display font-bold text-navy-900">Welcome back, Aditya</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Deposit Status" value="Active" icon="✅" trend="up" change="Since Mar 2026" />
        <StatCard title="Property" value="3BHK Koramangala" icon="🏠" />
        <StatCard title="Days Remaining" value="287" icon="📅" trend="neutral" change="of 365 days" />
        <StatCard title="Total Saved" value="₹5,40,000" icon="💰" trend="up" change="vs paying rent" />
      </div>

      <div className="bg-white dark:bg-navy-800 rounded-xl border border-navy-100 dark:border-navy-700 p-6">
        <h2 className="font-display font-bold text-navy-900 dark:text-white mb-4">Your Property</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden relative">
            <Image src="/images/property-1.jpg" alt="Your property" fill className="object-cover" sizes="192px" />
          </div>
          <div>
            <h3 className="font-display font-bold text-navy-900">3BHK Premium Apartment</h3>
            <p className="text-sm text-navy-500 mt-1">Koramangala 5th Block, Bangalore</p>
            <div className="mt-3 flex gap-4 text-xs text-navy-500">
              <span>1,850 sq.ft</span><span>3 BHK</span><span>12th Floor</span>
            </div>
            <p className="mt-3 text-sm"><span className="text-navy-400">Deposit:</span> <span className="font-bold text-navy-900">₹75,00,000</span></p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-navy-100 p-6">
        <h2 className="font-display font-bold text-navy-900 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {[
            { text: "Monthly payout of ₹45,000 credited to owner", time: "2 days ago" },
            { text: "Agreement renewal reminder sent", time: "1 week ago" },
            { text: "KYC Tier 2 verification completed", time: "2 weeks ago" },
          ].map((a) => (
            <div key={a.text} className="flex items-center justify-between py-2 border-b border-navy-50 last:border-0">
              <span className="text-sm text-navy-700">{a.text}</span>
              <span className="text-xs text-navy-400">{a.time}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </PageTransition>
  );
}
