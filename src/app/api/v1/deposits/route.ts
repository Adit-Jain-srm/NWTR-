import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireRole } from "@/lib/permissions";
import { NextRequest } from "next/server";
import { z } from "zod";

const depositSchema = z.object({
  propertyId: z.string().uuid(),
  percentage: z.number().min(50).max(80),
  tenure: z.number().int().min(6).max(36).default(12),
});

export async function GET(req: NextRequest) {
  const { error, session } = await requireRole("TENANT", "OWNER", "ADMIN", "SUPER_ADMIN");
  if (error) return error;

  const userId = session!.user.id;
  const role = session!.user.role;

  const where = role === "ADMIN" || role === "SUPER_ADMIN"
    ? {}
    : role === "OWNER"
    ? { ownerId: userId }
    : { tenantId: userId };

  const deposits = await prisma.deposit.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: {
      property: { select: { id: true, title: true, city: true, locality: true } },
      tenant: { select: { id: true, firstName: true, lastName: true } },
      owner: { select: { id: true, firstName: true, lastName: true } },
    },
  });

  return successResponse(deposits);
}

export async function POST(req: NextRequest) {
  const { error, session } = await requireRole("TENANT", "ADMIN", "SUPER_ADMIN");
  if (error) return error;

  const body = await req.json();
  const parsed = depositSchema.safeParse(body);
  if (!parsed.success) return errorResponse("VAL_REQUIRED_FIELD", "Validation failed", 400, parsed.error.issues);

  const property = await prisma.property.findUnique({ where: { id: parsed.data.propertyId } });
  if (!property) return errorResponse("PROP_NOT_FOUND", "Property not found", 404);
  if (property.status !== "LISTED") return errorResponse("PROP_ALREADY_OCCUPIED", "Property is not available", 422);

  const amount = Number(property.marketValue) * (parsed.data.percentage / 100);
  const annualYield = 0.075;
  const monthlyPayout = (amount * annualYield) / 12;

  const deposit = await prisma.deposit.create({
    data: {
      tenantId: session!.user.id,
      ownerId: property.ownerId,
      propertyId: property.id,
      amount,
      percentage: parsed.data.percentage,
      tenure: parsed.data.tenure,
      monthlyPayout: Math.round(monthlyPayout),
    },
  });

  return successResponse(deposit, 201);
}
