"use client";

import { useSession } from "next-auth/react";
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

export default function DashboardPage() {
  const { data: session } = useSession();
  const role = session?.user?.role || "TENANT";

  if (role === "OWNER") return <OwnerDashboard name={session?.user?.firstName || "Owner"} />;
  if (role === "RM") return <RMDashboard name={session?.user?.firstName || "RM"} />;
  if (role === "ADMIN" || role === "SUPER_ADMIN") return <AdminDashboard name={session?.user?.firstName || "Admin"} />;
  return <TenantDashboard name={session?.user?.firstName || "User"} />;
}

function TenantDashboard({ name }: { name: string }) {
  const daysCompleted = 78;
  const totalDays = 365;

  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <Heading level={2}>Welcome back, {name}</Heading>
          <Text muted className="mt-1">Here&apos;s your deposit overview for today.</Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Deposit Status" value="Active" icon="✅" trend="up" change="Since Mar 15, 2026" />
          <StatCard title="Property" value="3BHK Koramangala" icon="🏠" />
          <StatCard title="Days Remaining" value={`${totalDays - daysCompleted}`} icon="📅" trend="neutral" change={`${daysCompleted} of ${totalDays} completed`} />
          <StatCard title="Total Saved" value="₹3,60,000" icon="💰" trend="up" change="vs paying ₹45K/mo rent" />
        </div>

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
          <Card padding="lg">
            <Heading level={4} className="mb-4">Your Property</Heading>
            <div className="flex gap-4">
              <div className="w-28 h-28 rounded-xl overflow-hidden relative shrink-0">
                <Image src="/images/property-1.jpg" alt="Property" fill className="object-cover" sizes="112px" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-bold text-navy-900 dark:text-white">3BHK Premium Apartment</h3>
                <Text size="sm" muted className="mt-1">Koramangala 5th Block, Bangalore</Text>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge>1,850 sq.ft</Badge>
                  <Badge>3 BHK</Badge>
                  <Badge>12th Floor</Badge>
                </div>
                <Text size="xs" muted className="mt-3">Deposit: <span className="font-bold text-navy-900 dark:text-white">₹84,00,000</span></Text>
              </div>
            </div>
          </Card>

          <Card padding="lg">
            <div className="flex items-center justify-between mb-4">
              <Heading level={4}>Recent Activity</Heading>
              <Link href="/dashboard/deposit" className="text-xs text-gold-600 hover:text-gold-500 font-medium">View All</Link>
            </div>
            <Timeline items={[
              { title: "Monthly payout ₹45,000 credited to owner", description: "Automated via NACH mandate", date: "Jun 1, 2026", status: "completed" },
              { title: "Quarterly fund report available", description: "View investment breakdown", date: "May 28, 2026", status: "completed" },
              { title: "KYC Tier 2 verified", description: "Financial verification complete", date: "May 15, 2026", status: "completed" },
            ]} />
          </Card>
        </div>

        <Card padding="lg">
          <Heading level={4} className="mb-4">Quick Actions</Heading>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link href="/dashboard/properties"><Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2"><span className="text-xl">🏠</span><span className="text-xs">Browse</span></Button></Link>
            <Link href="/dashboard/deposit"><Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2"><span className="text-xl">💰</span><span className="text-xs">Deposit</span></Button></Link>
            <Link href="/dashboard/kyc"><Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2"><span className="text-xl">📋</span><span className="text-xs">KYC</span></Button></Link>
            <Link href="/dashboard/support"><Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2"><span className="text-xl">💬</span><span className="text-xs">Support</span></Button></Link>
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}

function OwnerDashboard({ name }: { name: string }) {
  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <Heading level={2}>Welcome back, {name}</Heading>
          <Text muted className="mt-1">Your property earnings at a glance.</Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Monthly Income" value="₹45,000" icon="💳" trend="up" change="Credited Jun 1" />
          <StatCard title="Total Earned" value="₹1,35,000" icon="📈" trend="up" change="3 months" />
          <StatCard title="Properties Listed" value="1" icon="🏠" />
          <StatCard title="Tenant Status" value="Active" icon="✅" trend="up" change="KYC Tier 2 verified" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card padding="lg">
            <Heading level={4} className="mb-4">Your Property</Heading>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-navy-100 dark:border-navy-800">
                <Text size="sm" muted>Property</Text>
                <Text size="sm" weight="bold">3BHK Koramangala 5th Block</Text>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-navy-100 dark:border-navy-800">
                <Text size="sm" muted>Tenant</Text>
                <Text size="sm" weight="bold">Aditya Jain (KYC-2)</Text>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-navy-100 dark:border-navy-800">
                <Text size="sm" muted>Deposit Held</Text>
                <Text size="sm" weight="bold">₹84,00,000</Text>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-navy-100 dark:border-navy-800">
                <Text size="sm" muted>Lease Period</Text>
                <Text size="sm" weight="bold">Mar 2026 — Mar 2027</Text>
              </div>
              <div className="flex justify-between items-center py-2">
                <Text size="sm" muted>Next Payout</Text>
                <Text size="sm" weight="bold" className="!text-gold-600 dark:!text-gold-400">Jul 1, 2026</Text>
              </div>
            </div>
          </Card>

          <Card padding="lg">
            <Heading level={4} className="mb-4">Payout History</Heading>
            <Timeline items={[
              { title: "₹45,000 credited", description: "June payout — NACH auto-debit", date: "Jun 1, 2026", status: "completed" },
              { title: "₹45,000 credited", description: "May payout — NACH auto-debit", date: "May 1, 2026", status: "completed" },
              { title: "₹45,000 credited", description: "April payout — NACH auto-debit", date: "Apr 1, 2026", status: "completed" },
              { title: "Lease activated", description: "Tenant deposit confirmed", date: "Mar 15, 2026", status: "completed" },
            ]} />
          </Card>
        </div>

        <Card padding="lg">
          <Heading level={4} className="mb-4">Quick Actions</Heading>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link href="/dashboard/payouts"><Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2"><span className="text-xl">💳</span><span className="text-xs">Payouts</span></Button></Link>
            <Link href="/dashboard/documents"><Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2"><span className="text-xl">📄</span><span className="text-xs">Documents</span></Button></Link>
            <Link href="/dashboard/properties"><Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2"><span className="text-xl">🏠</span><span className="text-xs">Property</span></Button></Link>
            <Link href="/dashboard/support"><Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2"><span className="text-xl">💬</span><span className="text-xs">Support</span></Button></Link>
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}

function RMDashboard({ name }: { name: string }) {
  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <Heading level={2}>Welcome back, {name}</Heading>
          <Text muted className="mt-1">Manage your assigned clients and properties.</Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Active Clients" value="8" icon="👥" trend="up" change="+2 this month" />
          <StatCard title="Properties Managed" value="12" icon="🏠" />
          <StatCard title="Pending KYC" value="3" icon="📋" trend="neutral" change="Awaiting docs" />
          <StatCard title="This Month" value="₹3.6 Cr" icon="💰" trend="up" change="Deposits facilitated" />
        </div>

        <Card padding="lg">
          <Heading level={4} className="mb-4">Pending Tasks</Heading>
          <div className="space-y-2">
            {[
              { task: "Review KYC documents — Priya Sharma", priority: "High", due: "Today" },
              { task: "Schedule property viewing — Whitefield Villa", priority: "Medium", due: "Tomorrow" },
              { task: "Follow up on deposit — Rahul Mehta", priority: "High", due: "Today" },
            ].map((t) => (
              <div key={t.task} className="flex items-center justify-between p-3 rounded-lg border border-navy-100 dark:border-navy-800">
                <div>
                  <Text size="sm">{t.task}</Text>
                  <Text size="xs" muted className="mt-0.5">Due: {t.due}</Text>
                </div>
                <Badge variant={t.priority === "High" ? "danger" : "default"}>{t.priority}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card padding="lg">
          <Heading level={4} className="mb-4">Quick Actions</Heading>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link href="/dashboard/clients"><Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2"><span className="text-xl">👥</span><span className="text-xs">Clients</span></Button></Link>
            <Link href="/dashboard/tasks"><Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2"><span className="text-xl">✅</span><span className="text-xs">Tasks</span></Button></Link>
            <Link href="/dashboard/properties"><Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2"><span className="text-xl">🏠</span><span className="text-xs">Properties</span></Button></Link>
            <Link href="/dashboard/analytics"><Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2"><span className="text-xl">📊</span><span className="text-xs">Analytics</span></Button></Link>
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}

function AdminDashboard({ name }: { name: string }) {
  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <Heading level={2}>Admin Panel — {name}</Heading>
          <Text muted className="mt-1">Platform overview and management.</Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Users" value="47" icon="👥" trend="up" change="+12 this month" />
          <StatCard title="Active Deposits" value="₹8.4 Cr" icon="💰" trend="up" change="+₹2.3 Cr this quarter" />
          <StatCard title="Properties" value="20" icon="🏠" trend="up" change="18 active" />
          <StatCard title="Yield Rate" value="7.52%" icon="📈" trend="up" change="Weighted avg" />
        </div>

        <Card padding="lg">
          <Heading level={4} className="mb-4">Quick Actions</Heading>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link href="/dashboard/users"><Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2"><span className="text-xl">👥</span><span className="text-xs">Users</span></Button></Link>
            <Link href="/dashboard/deposits"><Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2"><span className="text-xl">💰</span><span className="text-xs">Deposits</span></Button></Link>
            <Link href="/dashboard/properties"><Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2"><span className="text-xl">🏠</span><span className="text-xs">Properties</span></Button></Link>
            <Link href="/dashboard/analytics"><Button variant="outline" fullWidth className="flex-col !h-auto py-4 gap-2"><span className="text-xl">📊</span><span className="text-xs">Analytics</span></Button></Link>
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}
