import { StatCard } from "@/components/dashboard/stat-card";

export default function RMDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-display font-bold text-navy-900">RM Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Active Leads" value="12" icon="🎯" trend="up" change="+3 this week" />
        <StatCard title="Properties Managed" value="8" icon="🏠" />
        <StatCard title="Verifications Pending" value="4" icon="⏳" trend="neutral" change="2 urgent" />
        <StatCard title="Deals Closed" value="23" icon="🤝" trend="up" change="+2 this month" />
      </div>

      <div className="bg-white rounded-xl border border-navy-100 p-6">
        <h2 className="font-display font-bold text-navy-900 mb-4">Pending Tasks</h2>
        <div className="space-y-3">
          {[
            { task: "Verify KYC for Priya Sharma (Tier 2)", priority: "High", due: "Today" },
            { task: "Property inspection at Whitefield 4BHK", priority: "Medium", due: "Tomorrow" },
            { task: "Follow up with Rahul Mehta on deposit", priority: "High", due: "Today" },
          ].map((t) => (
            <div key={t.task} className="flex items-center justify-between py-3 border-b border-navy-50 last:border-0">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 rounded border-navy-300 accent-gold-500" readOnly />
                <span className="text-sm text-navy-700">{t.task}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs px-2 py-1 rounded-full ${t.priority === "High" ? "bg-red-50 text-red-500" : "bg-gold-50 text-gold-700"}`}>{t.priority}</span>
                <span className="text-xs text-navy-400">{t.due}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
