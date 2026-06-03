import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import type { Role } from "@prisma/client";

const ROLE_HIERARCHY: Record<Role, number> = {
  TENANT: 1, OWNER: 1, RM: 2, ADMIN: 3, SUPER_ADMIN: 4,
};

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
  if (!roles.includes(session!.user.role as Role)) {
    return { error: NextResponse.json({ success: false, error: { code: "AUTH_INSUFFICIENT_ROLE", message: "Insufficient permissions" } }, { status: 403 }), session: null };
  }
  return { error: null, session: session! };
}

export function hasMinRole(userRole: Role, minRole: Role): boolean {
  return ROLE_HIERARCHY[userRole] >= ROLE_HIERARCHY[minRole];
}
