import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/permissions";
import { NextRequest } from "next/server";

export async function GET() {
  const { error, session } = await requireAuth();
  if (error) return error;

  const user = await prisma.user.findUnique({
    where: { id: session!.user.id },
    select: {
      id: true,
      email: true,
      phone: true,
      firstName: true,
      lastName: true,
      role: true,
      kycTier: true,
      status: true,
      avatar: true,
      createdAt: true,
    },
  });

  if (!user) return errorResponse("USER_NOT_FOUND", "User not found", 404);
  return successResponse(user);
}

export async function PATCH(req: NextRequest) {
  const { error, session } = await requireAuth();
  if (error) return error;

  const body = await req.json();
  const allowedFields = ["firstName", "lastName", "phone", "avatar"];
  const updateData: Record<string, unknown> = {};

  for (const field of allowedFields) {
    if (body[field] !== undefined) updateData[field] = body[field];
  }

  const updated = await prisma.user.update({
    where: { id: session!.user.id },
    data: updateData,
    select: { id: true, email: true, firstName: true, lastName: true, phone: true, avatar: true },
  });

  return successResponse(updated);
}
