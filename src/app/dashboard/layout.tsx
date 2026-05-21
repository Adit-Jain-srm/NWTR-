"use client";

import { Sidebar } from "@/components/dashboard/sidebar";
import { MobileBottomNav } from "@/components/dashboard/mobile-bottom-nav";
import { ChatWidget } from "@/components/ai/chat-widget";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { ToastProvider } from "@/components/toast-provider";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const role = "TENANT";

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen bg-surface-50 dark:bg-navy-950">
          <Sidebar role={role} />
          <div className="lg:pl-64">
            <header className="sticky top-0 z-40 glass dark:glass-dark border-b border-navy-100 dark:border-navy-700 px-6 py-4">
              <div className="flex items-center justify-between">
                <h2 className="font-display font-bold text-navy-900 dark:text-white text-lg">Dashboard</h2>
                <div className="flex items-center gap-3">
                  <ThemeToggle />
                  <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-xs font-bold text-navy-900">
                    D
                  </div>
                </div>
              </div>
            </header>
            <main className="p-6 lg:p-8 pb-24 lg:pb-8">{children}</main>
          </div>
          <MobileBottomNav />
          <ChatWidget />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}
