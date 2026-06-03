"use client";

import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { StatCard } from "@/components/ui/stat-card";
import { PageTransition } from "@/components/motion/transitions";

export default function AnalyticsPage() {
  const bars = [40, 52, 48, 61, 55, 72, 68, 78, 85, 92, 88, 100];

  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <Heading level={2}>Platform Analytics</Heading>
          <Text muted className="mt-1">Revenue, growth, and deposit volume trends.</Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard title="MRR" value="₹18.7L" icon="📈" trend="up" change="+12% MoM" />
          <StatCard title="AUM" value="₹117 Cr" icon="💰" trend="up" change="+₹8.5 Cr this month" />
          <StatCard title="Active Properties" value="156" icon="🏠" trend="up" change="+12 new listings" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card padding="lg">
            <Heading level={4} className="mb-2">Monthly Revenue</Heading>
            <Text size="xs" muted className="mb-6">₹18.7L MRR — +12% month over month</Text>
            <div className="flex items-end gap-1.5 h-32">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-gold-600 to-gold-400 transition-all hover:from-gold-500 hover:to-gold-300" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-navy-400">
              <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            </div>
          </Card>

          <Card padding="lg">
            <Heading level={4} className="mb-2">User Growth</Heading>
            <Text size="xs" muted className="mb-6">1,247 total users — 89 new this month</Text>
            <div className="flex items-end gap-1.5 h-32">
              {[20, 28, 35, 42, 48, 55, 60, 68, 74, 80, 88, 95].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-navy-700 to-navy-500 dark:from-navy-600 dark:to-navy-400 transition-all" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-navy-400">
              <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            </div>
          </Card>
        </div>

        <Card padding="lg">
          <Heading level={4} className="mb-2">Deposit Volume (AUM Growth)</Heading>
          <Text size="xs" muted className="mb-6">₹117 Cr total deposits under management</Text>
          <div className="flex items-end gap-2 h-32">
            {[10, 18, 25, 38, 45, 52, 60, 70, 78, 85, 92, 100].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-emerald-600 to-emerald-400 transition-all" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-navy-400">
            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}
