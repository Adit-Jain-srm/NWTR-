import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireRole } from "@/lib/permissions";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { error, session } = await requireRole("OWNER", "ADMIN", "SUPER_ADMIN");
  if (error) return error;

  const role = session!.user.role;
  const where = role === "ADMIN" || role === "SUPER_ADMIN"
    ? {}
    : { ownerId: session!.user.id };

  const payouts = await prisma.payout.findMany({
    where,
    orderBy: { scheduledDate: "desc" },
    include: {
      deposit: { select: { id: true, propertyId: true, property: { select: { title: true } } } },
    },
  });

  return successResponse(payouts);
}

export async function POST(req: NextRequest) {
  const { error } = await requireRole("ADMIN", "SUPER_ADMIN");
  if (error) return error;

  const body = await req.json();
  const { depositId, amount, scheduledDate } = body;

  if (!depositId || !amount || !scheduledDate) {
    return errorResponse("VAL_REQUIRED_FIELD", "depositId, amount, and scheduledDate are required", 400);
  }

  const deposit = await prisma.deposit.findUnique({ where: { id: depositId } });
  if (!deposit) return errorResponse("DEP_NOT_FOUND", "Deposit not found", 404);

  const payout = await prisma.payout.create({
    data: {
      depositId,
      ownerId: deposit.ownerId,
      amount,
      scheduledDate: new Date(scheduledDate),
    },
  });

  return successResponse(payout, 201);
}
