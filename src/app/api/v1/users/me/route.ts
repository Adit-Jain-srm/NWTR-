import { prisma } from "@/lib/prisma";
import { success, error } from "@/lib/api-response";
import { requireAuth } from "@/lib/permissions";
import { NextRequest } from "next/server";

export async function GET() {
  const { error: err, session } = await requireAuth();
  if (err) return err;

  const user = await prisma.user.findUnique({
    where: { id: session!.user.id },
    select: { id: true, email: true, phone: true, firstName: true, lastName: true, role: true, kycTier: true, status: true, avatar: true, createdAt: true },
  });
  if (!user) return error("USER_NOT_FOUND", "User not found", 404);
  return success(user);
}

export async function PATCH(req: NextRequest) {
  const { error: err, session } = await requireAuth();
  if (err) return err;

  const body = await req.json();
  const allowed = ["firstName", "lastName", "phone", "avatar"];
  const data: Record<string, unknown> = {};
  for (const key of allowed) { if (body[key] !== undefined) data[key] = body[key]; }

  const updated = await prisma.user.update({
    where: { id: session!.user.id }, data,
    select: { id: true, email: true, firstName: true, lastName: true, phone: true, avatar: true },
  });
  return success(updated);
}
