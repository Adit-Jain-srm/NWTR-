"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  role: string;
}

const navConfig: Record<string, { label: string; href: string; icon: string }[]> = {
  TENANT: [
    { label: "Overview", href: "/dashboard/tenant", icon: "📊" },
    { label: "Properties", href: "/dashboard/tenant/properties", icon: "🏠" },
    { label: "My Deposit", href: "/dashboard/tenant/deposit", icon: "💰" },
    { label: "Documents", href: "/dashboard/tenant/documents", icon: "📄" },
    { label: "Support", href: "/dashboard/tenant/support", icon: "💬" },
  ],
  OWNER: [
    { label: "Overview", href: "/dashboard/owner", icon: "📊" },
    { label: "My Properties", href: "/dashboard/owner/properties", icon: "🏠" },
    { label: "Payouts", href: "/dashboard/owner/payouts", icon: "💳" },
    { label: "Tenants", href: "/dashboard/owner/tenants", icon: "👤" },
    { label: "Support", href: "/dashboard/owner/support", icon: "💬" },
  ],
  RM: [
    { label: "Overview", href: "/dashboard/rm", icon: "📊" },
    { label: "Clients", href: "/dashboard/rm/clients", icon: "👥" },
    { label: "Properties", href: "/dashboard/rm/properties", icon: "🏠" },
    { label: "Tasks", href: "/dashboard/rm/tasks", icon: "✅" },
    { label: "Performance", href: "/dashboard/rm/performance", icon: "📈" },
  ],
  ADMIN: [
    { label: "Overview", href: "/dashboard/admin", icon: "📊" },
    { label: "Users", href: "/dashboard/admin/users", icon: "👥" },
    { label: "Properties", href: "/dashboard/admin/properties", icon: "🏠" },
    { label: "Deposits", href: "/dashboard/admin/deposits", icon: "💰" },
    { label: "Payouts", href: "/dashboard/admin/payouts", icon: "💳" },
    { label: "Analytics", href: "/dashboard/admin/analytics", icon: "📈" },
  ],
};

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const links = navConfig[role] || navConfig.TENANT;

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-navy-900 min-h-screen fixed left-0 top-0">
      <div className="p-6 border-b border-navy-700">
        <Link href="/">
          <span className="font-display text-xl font-bold text-white">NWTR</span>
        </Link>
        <p className="text-xs text-navy-400 mt-1">{role} Portal</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all",
                isActive
                  ? "bg-gold-500/10 text-gold-400 border-l-2 border-gold-500"
                  : "text-navy-300 hover:text-white hover:bg-navy-800"
              )}
            >
              <span className="text-base">{link.icon}</span>
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-navy-700">
        <button className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-navy-400 hover:text-white hover:bg-navy-800 w-full transition-all">
          <span>🚪</span> Sign Out
        </button>
      </div>
    </aside>
  );
}
