"use client";

import { Sidebar } from "@/components/dashboard/sidebar";
import { ChatWidget } from "@/components/ai/chat-widget";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const role = "TENANT";

  return (
    <div className="min-h-screen bg-surface-50">
      <Sidebar role={role} />
      <div className="lg:pl-64">
        <header className="sticky top-0 z-40 glass border-b border-navy-100 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-bold text-navy-900 text-lg">Dashboard</h2>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-xs font-bold text-navy-900">
                D
              </div>
            </div>
          </div>
        </header>
        <main className="p-6 lg:p-8">{children}</main>
      </div>
      <ChatWidget />
    </div>
  );
}
