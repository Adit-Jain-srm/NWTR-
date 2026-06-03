"use client";

import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress-bar";
import { PageTransition } from "@/components/motion/transitions";

const monthlyTargets = {
  deals: { target: 5, actual: 3, label: "Deals Closed", unit: "" },
  value: { target: 500, actual: 357, label: "Deposit Value (₹L)", unit: "L" },
  conversion: { target: 60, actual: 52, label: "Conversion Rate (%)", unit: "%" },
  avgTime: { target: 21, actual: 19, label: "Avg. Closure (days)", unit: " days" },
};

const stageConversions = [
  { from: "Visit", to: "Interest", rate: 78 },
  { from: "Interest", to: "KYC", rate: 65 },
  { from: "KYC", to: "Agreement", rate: 82 },
  { from: "Agreement", to: "Deposit", rate: 71 },
  { from: "Deposit", to: "Active", rate: 95 },
];

const leaderboard = [
  { rank: 1, name: "Priya Mehta", deals: 6, value: "₹4.2 Cr", trend: "up" },
  { rank: 2, name: "Ankit Verma", deals: 3, value: "₹3.6 Cr", trend: "same", isYou: true },
  { rank: 3, name: "Ravi Kumar", deals: 4, value: "₹2.8 Cr", trend: "up" },
  { rank: 4, name: "Sneha Iyer", deals: 2, value: "₹2.1 Cr", trend: "down" },
  { rank: 5, name: "Deepak Joshi", deals: 2, value: "₹1.9 Cr", trend: "down" },
];

const commissionData = {
  earned: 267000,
  projected: 425000,
  quarterly: 890000,
  incentiveThreshold: 500000,
};

export default function PerformancePage() {
  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <Heading level={2}>Performance</Heading>
          <Text muted className="mt-1">Your metrics, targets, and team ranking.</Text>
        </div>

        {/* Monthly targets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(monthlyTargets).map(([key, data]) => {
            const pct = Math.round((data.actual / data.target) * 100);
            const onTrack = pct >= 80;
            return (
              <Card key={key} padding="md">
                <div className="flex items-start justify-between mb-3">
                  <Text size="xs" muted className="uppercase tracking-wider">{data.label}</Text>
                  <Badge variant={onTrack ? "success" : "warning"} className="text-[9px]">
                    {pct}%
                  </Badge>
                </div>
                <div className="text-2xl font-display font-bold text-white">
                  {data.actual}{data.unit || ""}<span className="text-sm text-navy-400 font-normal"> / {data.target}{data.unit || ""}</span>
                </div>
                <div className="mt-3">
                  <ProgressBar value={data.actual} max={data.target} size="sm" />
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Conversion funnel */}
          <Card padding="lg">
            <Heading level={4} className="mb-6">Stage Conversion Rates</Heading>
            <div className="space-y-4">
              {stageConversions.map((stage) => (
                <div key={stage.from} className="flex items-center gap-3">
                  <div className="w-28 text-xs text-navy-300 truncate">{stage.from}</div>
                  <div className="flex-1">
                    <div className="h-6 bg-navy-800 rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-gradient-to-r from-gold-600/80 to-gold-400/80 rounded-full flex items-center justify-end pr-2"
                        style={{ width: `${stage.rate}%` }}
                      >
                        <span className="text-[10px] font-bold text-navy-900">{stage.rate}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-20 text-xs text-navy-400 text-right">{stage.to}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Leaderboard */}
          <Card padding="lg">
            <div className="flex items-center justify-between mb-6">
              <Heading level={4}>Team Ranking</Heading>
              <Text size="xs" muted>This month</Text>
            </div>
            <div className="space-y-2">
              {leaderboard.map((rm) => (
                <div
                  key={rm.rank}
                  className={`flex items-center justify-between p-3 rounded-lg transition-colors ${rm.isYou ? "bg-gold-500/5 border border-gold-500/20" : "hover:bg-navy-800/50"}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-bold w-6 ${rm.rank <= 3 ? "text-gold-400" : "text-navy-500"}`}>
                      #{rm.rank}
                    </span>
                    <div>
                      <Text size="sm" weight="medium" className="!text-white">
                        {rm.name} {rm.isYou && <span className="text-gold-400 text-xs">(You)</span>}
                      </Text>
                      <Text size="xs" muted>{rm.deals} deals · {rm.value}</Text>
                    </div>
                  </div>
                  <span className="text-xs">
                    {rm.trend === "up" && <span className="text-emerald-400">↑</span>}
                    {rm.trend === "down" && <span className="text-red-400">↓</span>}
                    {rm.trend === "same" && <span className="text-navy-500">—</span>}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Commission */}
        <Card padding="lg">
          <Heading level={4} className="mb-6">Commission & Incentives</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <Text size="xs" muted className="uppercase tracking-wider">Earned (This Month)</Text>
              <div className="text-2xl font-display font-bold text-emerald-400 mt-2">
                ₹{(commissionData.earned / 1000).toFixed(0)}K
              </div>
            </div>
            <div>
              <Text size="xs" muted className="uppercase tracking-wider">Projected (Month-End)</Text>
              <div className="text-2xl font-display font-bold text-gold-400 mt-2">
                ₹{(commissionData.projected / 1000).toFixed(0)}K
              </div>
            </div>
            <div>
              <Text size="xs" muted className="uppercase tracking-wider">Quarterly Total</Text>
              <div className="text-2xl font-display font-bold text-white mt-2">
                ₹{(commissionData.quarterly / 100000).toFixed(1)}L
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-navy-800">
            <div className="flex items-center justify-between mb-2">
              <Text size="sm" className="!text-navy-300">Progress to incentive bonus (₹5L threshold)</Text>
              <Text size="sm" weight="bold" className="!text-gold-400">
                {Math.round((commissionData.quarterly / commissionData.incentiveThreshold) * 100)}%
              </Text>
            </div>
            <ProgressBar
              value={commissionData.quarterly}
              max={commissionData.incentiveThreshold}
              size="lg"
            />
            <Text size="xs" muted className="mt-2">
              ₹{((commissionData.incentiveThreshold - commissionData.quarterly) / 1000).toFixed(0)}K more to unlock quarterly bonus
            </Text>
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}
