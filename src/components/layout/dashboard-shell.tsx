"use client";

import { useSession } from "next-auth/react";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { CommandPalette } from "@/components/composite/command-palette";
import { AIChatWidget } from "@/components/ai/chat-widget";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Logo } from "@/components/ui/logo";
import { useUIStore } from "@/lib/stores/ui-store";
import { cn } from "@/lib/utils";
import type { Role } from "@prisma/client";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const role = (session?.user?.role || "TENANT") as Role;
  const { sidebarCollapsed } = useUIStore();
  const initials = session?.user?.firstName?.[0] || "U";

  return (
    <div className="min-h-screen bg-navy-950 dark">
      <Sidebar role={role} />

      <div className={cn("transition-all duration-300", sidebarCollapsed ? "lg:pl-[68px]" : "lg:pl-64")}>
        <header className="sticky top-0 z-40 bg-navy-950/90 backdrop-blur-xl border-b border-navy-800/50 px-4 sm:px-6 py-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="lg:hidden">
                <Logo size="sm" variant="light" />
              </div>
              <Breadcrumb className="hidden sm:flex" />
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => useUIStore.getState().openCommandPalette()}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-navy-700 text-xs text-navy-400 hover:border-navy-600 hover:text-navy-300 transition-colors"
              >
                <span>Search</span>
                <kbd className="px-1.5 py-0.5 rounded bg-navy-800 text-[10px] font-mono text-navy-500">⌘K</kbd>
              </button>

              <span className={cn(
                "hidden sm:inline-flex text-[9px] uppercase tracking-wider px-2 py-1 rounded font-medium",
                role === "TENANT" && "bg-gold-500/10 text-gold-400",
                role === "OWNER" && "bg-emerald-500/10 text-emerald-400",
                role === "RM" && "bg-blue-500/10 text-blue-400",
                (role === "ADMIN" || role === "SUPER_ADMIN") && "bg-red-500/10 text-red-400",
              )}>
                {role}
              </span>

              <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-xs font-bold text-navy-900">
                {initials}
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8 pb-24 lg:pb-8">
          {children}
        </main>
      </div>

      <MobileNav role={role} />
      <CommandPalette />
      <AIChatWidget />
    </div>
  );
}
