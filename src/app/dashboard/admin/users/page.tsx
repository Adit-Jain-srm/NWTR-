"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const users = [
  { name: "Rahul Sharma", email: "rahul.s@email.com", role: "Tenant", kycTier: "Tier 3", status: "Active" },
  { name: "Priya Menon", email: "priya.m@email.com", role: "Tenant", kycTier: "Tier 3", status: "Active" },
  { name: "Mr. Rajesh Iyer", email: "rajesh.i@email.com", role: "Owner", kycTier: "Tier 2", status: "Active" },
  { name: "Ankit Patel", email: "ankit.p@email.com", role: "Tenant", kycTier: "Tier 1", status: "Pending KYC" },
  { name: "Neha Gupta", email: "neha.g@email.com", role: "Tenant", kycTier: "Tier 1", status: "In Review" },
  { name: "Mrs. Sunita Reddy", email: "sunita.r@email.com", role: "Owner", kycTier: "Tier 2", status: "Active" },
  { name: "Vikram Singh", email: "vikram.s@email.com", role: "RM", kycTier: "—", status: "Active" },
  { name: "Deepa Nair", email: "deepa.n@email.com", role: "Admin", kycTier: "—", status: "Active" },
];

function getStatusVariant(status: string) {
  switch (status) {
    case "Active": return "success" as const;
    case "Pending KYC": return "warning" as const;
    case "In Review": return "premium" as const;
    case "Suspended": return "default" as const;
    default: return "default" as const;
  }
}

function getRoleBadge(role: string) {
  switch (role) {
    case "Admin": return "premium" as const;
    case "RM": return "default" as const;
    default: return "default" as const;
  }
}

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-navy-900">Users</h1>
        <p className="mt-1 text-navy-500">Manage all platform users</p>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-navy-100">
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Name</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Email</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Role</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">KYC Tier</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Status</th>
                <th className="text-left px-6 py-3 text-xs uppercase text-navy-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i} className="border-b border-navy-50 last:border-0">
                  <td className="px-6 py-4 text-sm text-navy-700 font-medium">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-navy-500">{user.email}</td>
                  <td className="px-6 py-4">
                    <Badge variant={getRoleBadge(user.role)}>{user.role}</Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-navy-700">{user.kycTier}</td>
                  <td className="px-6 py-4">
                    <Badge variant={getStatusVariant(user.status)}>{user.status}</Badge>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-sm text-gold-600 hover:text-gold-700 font-medium">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
