"use client";

import { Card, CardContent } from "@/components/ui/card";

const charts = [
  { title: "Revenue Chart", description: "Monthly platform revenue trends", color: "from-gold-400 to-gold-600" },
  { title: "User Growth", description: "New user registrations over time", color: "from-emerald-400 to-emerald-600" },
  { title: "Deposit Volume", description: "Active deposits by month", color: "from-blue-400 to-blue-600" },
];

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-navy-900">
          Platform Analytics
        </h1>
        <p className="mt-1 text-navy-500">
          Visual insights into platform performance
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {charts.map((chart) => (
          <Card key={chart.title}>
            <CardContent className="pt-6">
              <h3 className="text-sm font-semibold text-navy-900 mb-2">{chart.title}</h3>
              <p className="text-xs text-navy-400 mb-4">{chart.description}</p>
              <div className={`h-48 rounded-lg bg-gradient-to-br ${chart.color} opacity-10 flex items-center justify-center`}>
                <span className="text-navy-400 text-sm font-medium opacity-100">
                  Chart placeholder — Phase E
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
