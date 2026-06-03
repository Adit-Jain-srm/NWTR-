import { prisma } from "@/lib/prisma";
import { success, error } from "@/lib/api-response";
import { requireRole } from "@/lib/permissions";
import { NextRequest } from "next/server";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await prisma.property.findUnique({
    where: { id, deletedAt: null },
    include: { owner: { select: { id: true, firstName: true, lastName: true } } },
  });
  if (!property) return error("PROP_NOT_FOUND", "Property not found", 404);
  return success(property);
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { error: err, session } = await requireRole("OWNER", "ADMIN", "SUPER_ADMIN");
  if (err) return err;

  const property = await prisma.property.findUnique({ where: { id } });
  if (!property) return error("PROP_NOT_FOUND", "Property not found", 404);
  if (session!.user.role === "OWNER" && property.ownerId !== session!.user.id) {
    return error("AUTH_FORBIDDEN", "Can only update own properties", 403);
  }

  const body = await req.json();
  const updated = await prisma.property.update({ where: { id }, data: body });
  return success(updated);
}
