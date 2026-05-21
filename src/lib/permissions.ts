import { Role } from "@prisma/client";
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export type Permission = 
  | "properties:read" | "properties:create" | "properties:update" | "properties:delete" | "properties:verify"
  | "deposits:read" | "deposits:create" | "deposits:cancel" | "deposits:manage"
  | "payouts:read" | "payouts:schedule" | "payouts:execute"
  | "users:read" | "users:manage"
  | "kyc:submit" | "kyc:verify"
  | "admin:access";

const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  TENANT: ["properties:read", "deposits:read", "deposits:create", "deposits:cancel", "kyc:submit"],
  OWNER: ["properties:read", "properties:create", "properties:update", "deposits:read", "payouts:read", "kyc:submit"],
  RM: ["properties:read", "properties:verify", "deposits:read", "payouts:read", "users:read", "kyc:verify"],
  ADMIN: ["properties:read", "properties:create", "properties:update", "properties:delete", "properties:verify", "deposits:read", "deposits:manage", "payouts:read", "payouts:schedule", "payouts:execute", "users:read", "users:manage", "kyc:verify", "admin:access"],
  SUPER_ADMIN: ["properties:read", "properties:create", "properties:update", "properties:delete", "properties:verify", "deposits:read", "deposits:create", "deposits:cancel", "deposits:manage", "payouts:read", "payouts:schedule", "payouts:execute", "users:read", "users:manage", "kyc:submit", "kyc:verify", "admin:access"],
};

export function hasPermission(role: Role, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}

export function hasRole(userRole: Role, requiredRoles: Role[]): boolean {
  return requiredRoles.includes(userRole);
}

export async function requireAuth() {
  const session = await auth();
  if (!session?.user) {
    return { error: NextResponse.json({ success: false, error: { code: "AUTH_REQUIRED", message: "Authentication required" } }, { status: 401 }), session: null };
  }
  return { error: null, session };
}

export async function requireRole(...roles: Role[]) {
  const { error, session } = await requireAuth();
  if (error) return { error, session: null };
  if (!hasRole(session!.user.role as Role, roles)) {
    return { error: NextResponse.json({ success: false, error: { code: "AUTH_INSUFFICIENT_ROLE", message: "Insufficient permissions" } }, { status: 403 }), session: null };
  }
  return { error: null, session: session! };
}
