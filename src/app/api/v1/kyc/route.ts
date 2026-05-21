import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireRole } from "@/lib/permissions";
import { NextRequest } from "next/server";
import { z } from "zod";

const submitSchema = z.object({
  tier: z.enum(["TIER_1", "TIER_2", "TIER_3"]),
  documents: z.record(z.string(), z.string()),
});

export async function GET() {
  const { error, session } = await requireRole("TENANT", "OWNER", "RM", "ADMIN", "SUPER_ADMIN");
  if (error) return error;

  const role = session!.user.role;
  const where = role === "ADMIN" || role === "SUPER_ADMIN" || role === "RM"
    ? {}
    : { userId: session!.user.id };

  const records = await prisma.kYCRecord.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: { user: { select: { id: true, firstName: true, lastName: true, email: true } } },
  });

  return successResponse(records);
}

export async function POST(req: NextRequest) {
  const { error, session } = await requireRole("TENANT", "OWNER");
  if (error) return error;

  const body = await req.json();
  const parsed = submitSchema.safeParse(body);
  if (!parsed.success) return errorResponse("VAL_REQUIRED_FIELD", "Validation failed", 400, parsed.error.issues);

  const record = await prisma.kYCRecord.create({
    data: {
      userId: session!.user.id,
      tier: parsed.data.tier,
      documents: parsed.data.documents,
    },
  });

  return successResponse(record, 201);
}
