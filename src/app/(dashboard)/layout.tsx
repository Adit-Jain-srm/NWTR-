"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { CommandPalette } from "@/components/composite/command-palette";
import { AIChatWidget } from "@/components/ai/chat-widget";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Logo } from "@/components/ui/logo";
import { useTheme } from "@/components/providers/theme-provider";
import { useUIStore } from "@/lib/stores/ui-store";
import { cn } from "@/lib/utils";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const role = "TENANT" as const;
  const { sidebarCollapsed } = useUIStore();
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-surface-50 dark:bg-navy-950">
      {/* Sidebar */}
      <Sidebar role={role} />

      {/* Main content area */}
      <div className={cn("transition-all duration-300", sidebarCollapsed ? "lg:pl-[68px]" : "lg:pl-64")}>
        {/* Header */}
        <header className="sticky top-0 z-40 glass dark:glass-dark border-b border-navy-100 dark:border-navy-800 px-4 sm:px-6 py-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Mobile logo */}
              <div className="lg:hidden">
                <Logo size="sm" />
              </div>
              <Breadcrumb className="hidden sm:flex" />
            </div>

            <div className="flex items-center gap-3">
              {/* Cmd+K hint */}
              <button
                onClick={() => useUIStore.getState().openCommandPalette()}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-navy-200 dark:border-navy-700 text-xs text-navy-400 hover:border-navy-300 dark:hover:border-navy-600 transition-colors"
              >
                <span>Search</span>
                <kbd className="px-1.5 py-0.5 rounded bg-navy-100 dark:bg-navy-800 text-[10px] font-mono">⌘K</kbd>
              </button>

              {/* Theme toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-navy-100 dark:hover:bg-navy-800 transition-colors text-navy-500 dark:text-navy-400"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>

              {/* User avatar */}
              <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-xs font-bold text-navy-900">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8 pb-24 lg:pb-8">
          {children}
        </main>
      </div>

      {/* Mobile bottom nav */}
      <MobileNav role={role} />

      {/* Command palette */}
      <CommandPalette />

      {/* AI Chat */}
      <AIChatWidget />
    </div>
  );
}
