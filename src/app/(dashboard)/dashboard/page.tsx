"use client";

import { StatCard } from "@/components/ui/stat-card";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/ui/timeline";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/motion/transitions";
import Image from "next/image";
import Link from "next/link";

export default function TenantDashboard() {
  const daysCompleted = 78;
  const totalDays = 365;

  return (
    <PageTransition>
      <div className="space-y-8">
        {/* Welcome */}
        <div>
          <Heading level={2}>Welcome back, Aditya</Heading>
          <Text muted className="mt-1">Here&apos;s your deposit overview for today.</Text>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Deposit Status" value="Active" icon="✅" trend="up" change="Since Mar 15, 2026" />
          <StatCard title="Property" value="3BHK Koramangala" icon="🏠" />
          <StatCard title="Days Remaining" value={`${totalDays - daysCompleted}`} icon="📅" trend="neutral" change={`${daysCompleted} of ${totalDays} completed`} />
          <StatCard title="Total Saved" value="₹3,60,000" icon="💰" trend="up" change="vs paying ₹45K/mo rent" />
        </div>

        {/* Tenure Progress */}
        <Card padding="lg">
          <div className="flex items-center justify-between mb-4">
            <Heading level={4}>Lease Tenure Progress</Heading>
            <Badge variant="success" dot>Active</Badge>
          </div>
          <ProgressBar value={daysCompleted} max={totalDays} showValue label={`${daysCompleted} days of ${totalDays}`} size="lg" />
          <div className="mt-4 grid grid-cols-3 text-center text-xs text-navy-500 dark:text-navy-400">
            <div>Start: Mar 15, 2026</div>
            <div>Today: Jun 3, 2026</div>
            <div>End: Mar 15, 2027</div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Property Card */}
          <Card padding="lg">
            <Heading level={4} className="mb-4">Your Property</Heading>
            <div className="flex gap-4">
              <div className="w-28 h-28 rounded-xl overflow-hidden relative shrink-0">
                <Image src="/images/property-1.jpg" alt="Property" fill className="object-cover" sizes="112px" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-bold text-navy-900 dark:text-white">3BHK Premium Apartment</h3>
                <Text size="sm" muted className="mt-1">📍 Koramangala 5th Block, Bangalore</Text>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge>1,850 sq.ft</Badge>
                  <Badge>3 BHK</Badge>
                  <Badge>12th Floor</Badge>
                </div>
                <div className="mt-3">
                  <Text size="xs" muted>Deposit: <span className="font-bold text-navy-900 dark:text-white">₹84,00,000</span></Text>
                </div>
              </div>
            </div>
          </Card>

          {/* Activity Timeline */}
          <Card padding="lg">
            <div className="flex items-center justify-between mb-4">
              <Heading level={4}>Recent Activity</Heading>
              <Link href="#" className="text-xs text-gold-600 hover:text-gold-500 font-medium">View All →</Link>
            </div>
            <Timeline items={[
              { title: "Monthly payout ₹45,000 credited to owner", description: "Automated via NACH mandate", date: "Jun 1, 2026", status: "completed" },
              { title: "Quarterly fund report available", description: "View investment breakdown", date: "May 28, 2026", status: "completed" },
              { title: "KYC Tier 2 verified", description: "Financial verification complete", date: "May 15, 2026", status: "completed" },
              { title: "Tenure renewal window opens", description: "60 days before expiry", date: "Jan 15, 2027", status: "pending" },
            ]} />
          </Card>
        </div>

        {/* Quick Actions */}
        <Card padding="lg">
          <Heading level={4} className="mb-4">Quick Actions</Heading>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link href="/dashboard/properties">
              <Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2">
                <span className="text-xl">🏠</span>
                <span className="text-xs">Browse Properties</span>
              </Button>
            </Link>
            <Link href="/dashboard/deposit">
              <Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2">
                <span className="text-xl">💰</span>
                <span className="text-xs">Deposit Details</span>
              </Button>
            </Link>
            <Link href="/dashboard/kyc">
              <Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2">
                <span className="text-xl">📋</span>
                <span className="text-xs">KYC Status</span>
              </Button>
            </Link>
            <Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2">
              <span className="text-xl">💬</span>
              <span className="text-xs">Support</span>
            </Button>
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}
