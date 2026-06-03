import { prisma } from "@/lib/prisma";
import { success, error } from "@/lib/api-response";
import { requireRole } from "@/lib/permissions";
import { NextRequest } from "next/server";
import { z } from "zod";
import { DEPOSIT } from "@/lib/constants";

const createSchema = z.object({
  propertyId: z.string().uuid(),
  percentage: z.number().min(DEPOSIT.minPercentage).max(DEPOSIT.maxPercentage),
  tenure: z.number().int().min(DEPOSIT.minTenureMonths).max(DEPOSIT.maxTenureMonths).default(DEPOSIT.defaultTenureMonths),
});

export async function GET() {
  const { error: err, session } = await requireRole("TENANT", "OWNER", "ADMIN", "SUPER_ADMIN");
  if (err) return err;

  const role = session!.user.role;
  const where = role === "ADMIN" || role === "SUPER_ADMIN" ? {} : role === "OWNER" ? { ownerId: session!.user.id } : { tenantId: session!.user.id };

  const deposits = await prisma.deposit.findMany({
    where, orderBy: { createdAt: "desc" },
    include: {
      property: { select: { id: true, title: true, city: true, locality: true } },
      tenant: { select: { id: true, firstName: true, lastName: true } },
      owner: { select: { id: true, firstName: true, lastName: true } },
    },
  });
  return success(deposits);
}

export async function POST(req: NextRequest) {
  const { error: err, session } = await requireRole("TENANT", "ADMIN", "SUPER_ADMIN");
  if (err) return err;

  const body = await req.json();
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) return error("VAL_INVALID", "Validation failed", 400, parsed.error.issues);

  const property = await prisma.property.findUnique({ where: { id: parsed.data.propertyId } });
  if (!property) return error("PROP_NOT_FOUND", "Property not found", 404);
  if (property.status !== "LISTED") return error("PROP_UNAVAILABLE", "Property not available", 422);

  const amount = Number(property.marketValue) * (parsed.data.percentage / 100);
  const monthlyPayout = Math.round((amount * DEPOSIT.blendedYieldRate) / 12);

  const deposit = await prisma.deposit.create({
    data: {
      tenantId: session!.user.id,
      ownerId: property.ownerId,
      propertyId: property.id,
      amount,
      percentage: parsed.data.percentage,
      tenure: parsed.data.tenure,
      monthlyPayout,
    },
  });

  return success(deposit, 201);
}
