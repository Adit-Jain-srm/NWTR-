import { prisma } from "@/lib/prisma";
import { success, error } from "@/lib/api-response";
import { requireRole } from "@/lib/permissions";
import { NextRequest } from "next/server";

export async function GET() {
  const { error: err, session } = await requireRole("OWNER", "ADMIN", "SUPER_ADMIN");
  if (err) return err;

  const where = session!.user.role === "ADMIN" || session!.user.role === "SUPER_ADMIN" ? {} : { ownerId: session!.user.id };

  const payouts = await prisma.payout.findMany({
    where, orderBy: { scheduledDate: "desc" },
    include: { deposit: { select: { id: true, property: { select: { title: true } } } } },
  });
  return success(payouts);
}

export async function POST(req: NextRequest) {
  const { error: err } = await requireRole("ADMIN", "SUPER_ADMIN");
  if (err) return err;

  const { depositId, amount, scheduledDate } = await req.json();
  if (!depositId || !amount || !scheduledDate) return error("VAL_REQUIRED", "Missing fields", 400);

  const deposit = await prisma.deposit.findUnique({ where: { id: depositId } });
  if (!deposit) return error("DEP_NOT_FOUND", "Deposit not found", 404);

  const payout = await prisma.payout.create({
    data: { depositId, ownerId: deposit.ownerId, amount, scheduledDate: new Date(scheduledDate) },
  });
  return success(payout, 201);
}
