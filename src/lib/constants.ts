export const APP = {
  name: "NWTR",
  fullName: "New Way To Rent",
  tagline: "The Future of Intelligent Renting",
  description: "Deposit your way to premium living. Zero monthly rent. Full refund guaranteed.",
  url: "https://nwtr.in",
  company: "NWTR Technologies Pvt. Ltd.",
  foundedYear: 2026,
  market: "Bangalore",
} as const;

export const DEPOSIT = {
  minPercentage: 50,
  maxPercentage: 80,
  recommendedPercentage: 75,
  minTenureMonths: 6,
  maxTenureMonths: 36,
  defaultTenureMonths: 12,
  blendedYieldRate: 0.075,
  platformMarginRate: 0.15,
  tdsRate: 0.10,
} as const;

export const KYC_TIERS = {
  0: { name: "Unverified", unlocks: ["Registration only"] },
  1: { name: "Basic", unlocks: ["Browsing", "Property search", "AI chat", "Favorites"] },
  2: { name: "Financial", unlocks: ["Eligibility assessment", "Deposit calculator", "Property matching"] },
  3: { name: "Advanced", unlocks: ["Deposit commitment (₹50L+)", "Agreement signing", "Full platform access"] },
} as const;

export const ROLES = {
  TENANT: "Tenant",
  OWNER: "Owner",
  RM: "Relationship Manager",
  ADMIN: "Admin",
  SUPER_ADMIN: "Super Admin",
} as const;

export const NAV_LINKS = {
  public: [
    { href: "/how-it-works", label: "How It Works", icon: "" },
    { href: "/properties", label: "Properties", icon: "" },
    { href: "/for-tenants", label: "For Tenants", icon: "" },
    { href: "/for-owners", label: "For Owners", icon: "" },
    { href: "/trust-security", label: "Trust & Security", icon: "" },
    { href: "/about", label: "About", icon: "" },
  ],
  tenant: [
    { href: "/dashboard", label: "Overview", icon: "📊" },
    { href: "/dashboard/properties", label: "Properties", icon: "🏠" },
    { href: "/dashboard/deposit", label: "My Deposit", icon: "💰" },
    { href: "/dashboard/kyc", label: "KYC", icon: "📋" },
    { href: "/dashboard/documents", label: "Documents", icon: "📄" },
    { href: "/dashboard/support", label: "Support", icon: "💬" },
  ],
  owner: [
    { href: "/dashboard", label: "Overview", icon: "📊" },
    { href: "/dashboard/properties", label: "My Properties", icon: "🏠" },
    { href: "/dashboard/payouts", label: "Payouts", icon: "💳" },
    { href: "/dashboard/tenants", label: "Tenants", icon: "👤" },
    { href: "/dashboard/list-property", label: "List Property", icon: "➕" },
    { href: "/dashboard/support", label: "Support", icon: "💬" },
  ],
  rm: [
    { href: "/dashboard", label: "Overview", icon: "📊" },
    { href: "/dashboard/clients", label: "Clients", icon: "👥" },
    { href: "/dashboard/properties", label: "Properties", icon: "🏠" },
    { href: "/dashboard/tasks", label: "Tasks", icon: "✅" },
    { href: "/dashboard/deals", label: "Deals", icon: "🤝" },
    { href: "/dashboard/performance", label: "Performance", icon: "📈" },
  ],
  admin: [
    { href: "/dashboard", label: "Overview", icon: "📊" },
    { href: "/dashboard/users", label: "Users", icon: "👥" },
    { href: "/dashboard/properties", label: "Properties", icon: "🏠" },
    { href: "/dashboard/deposits", label: "Deposits", icon: "💰" },
    { href: "/dashboard/payouts", label: "Payouts", icon: "💳" },
    { href: "/dashboard/kyc-queue", label: "KYC Queue", icon: "🔍" },
    { href: "/dashboard/analytics", label: "Analytics", icon: "📈" },
    { href: "/dashboard/compliance", label: "Compliance", icon: "🛡️" },
  ],
} as const;
