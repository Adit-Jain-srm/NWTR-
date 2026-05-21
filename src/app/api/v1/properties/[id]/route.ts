import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireRole } from "@/lib/permissions";
import { NextRequest } from "next/server";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await prisma.property.findUnique({
    where: { id, deletedAt: null },
    include: {
      owner: { select: { id: true, firstName: true, lastName: true, phone: true } },
      deposits: { where: { status: "ACTIVE" }, select: { id: true, status: true, tenantId: true } },
    },
  });

  if (!property) return errorResponse("PROP_NOT_FOUND", "Property not found", 404);
  return successResponse(property);
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { error, session } = await requireRole("OWNER", "ADMIN", "SUPER_ADMIN");
  if (error) return error;

  const property = await prisma.property.findUnique({ where: { id } });
  if (!property) return errorResponse("PROP_NOT_FOUND", "Property not found", 404);
  if (session!.user.role === "OWNER" && property.ownerId !== session!.user.id) {
    return errorResponse("AUTH_INSUFFICIENT_ROLE", "You can only update your own properties", 403);
  }

  const body = await req.json();
  const updated = await prisma.property.update({ where: { id }, data: body });
  return successResponse(updated);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { error } = await requireRole("ADMIN", "SUPER_ADMIN");
  if (error) return error;

  await prisma.property.update({ where: { id }, data: { deletedAt: new Date() } });
  return successResponse(null, 204);
}
