"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { useUIStore } from "@/lib/stores/ui-store";
import { NAV_LINKS } from "@/lib/constants";
import type { Role } from "@prisma/client";

interface SidebarProps {
  role: Role;
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const { sidebarCollapsed, toggleSidebar } = useUIStore();

  const roleKey = role.toLowerCase() as keyof typeof NAV_LINKS;
  const links = NAV_LINKS[roleKey] || NAV_LINKS.tenant;

  return (
    <aside
      className={cn(
        "hidden lg:flex flex-col bg-navy-900 dark:bg-navy-950 min-h-screen fixed left-0 top-0 z-40 transition-all duration-300",
        sidebarCollapsed ? "w-[68px]" : "w-64"
      )}
    >
      <div className={cn("p-5 border-b border-navy-800", sidebarCollapsed && "px-3")}>
        {sidebarCollapsed ? (
          <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center cursor-pointer" onClick={toggleSidebar}>
            <div className="w-4 h-4 rounded-sm bg-navy-900" />
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <Logo variant="light" size="sm" />
            <button onClick={toggleSidebar} className="text-navy-400 hover:text-white p-1 rounded" aria-label="Collapse sidebar">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
            </button>
          </div>
        )}
      </div>

      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/dashboard" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              title={sidebarCollapsed ? link.label : undefined}
              className={cn(
                "flex items-center gap-3 rounded-lg text-sm font-medium transition-all",
                sidebarCollapsed ? "justify-center px-2 py-2.5" : "px-3 py-2.5",
                isActive
                  ? "bg-gold-500/10 text-gold-400 border-l-2 border-gold-500 ml-0"
                  : "text-navy-300 hover:text-white hover:bg-navy-800"
              )}
            >
              <span className="text-base shrink-0">{link.icon}</span>
              {!sidebarCollapsed && <span>{link.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className={cn("p-3 border-t border-navy-800", sidebarCollapsed && "px-2")}>
        <button className={cn("flex items-center gap-3 rounded-lg text-sm text-navy-400 hover:text-white hover:bg-navy-800 w-full transition-all", sidebarCollapsed ? "justify-center px-2 py-2.5" : "px-3 py-2.5")}>
          <span className="text-base">🚪</span>
          {!sidebarCollapsed && <span>Sign Out</span>}
        </button>
      </div>
    </aside>
  );
}
