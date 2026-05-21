import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireRole } from "@/lib/permissions";
import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  phone: z.string().optional(),
  role: z.enum(["TENANT", "OWNER"]).default("TENANT"),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) return errorResponse("VAL_REQUIRED_FIELD", "Validation failed", 400, parsed.error.issues);

  const existing = await prisma.user.findUnique({ where: { email: parsed.data.email } });
  if (existing) return errorResponse("USER_ALREADY_EXISTS", "A user with this email already exists", 409);

  const hashedPassword = await bcrypt.hash(parsed.data.password, 12);

  const user = await prisma.user.create({
    data: {
      ...parsed.data,
      password: hashedPassword,
    },
    select: { id: true, email: true, firstName: true, lastName: true, role: true },
  });

  return successResponse(user, 201);
}

export async function GET() {
  const { error } = await requireRole("ADMIN", "SUPER_ADMIN");
  if (error) return error;

  const users = await prisma.user.findMany({
    where: { deletedAt: null },
    select: {
      id: true, email: true, firstName: true, lastName: true,
      role: true, status: true, kycTier: true, createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return successResponse(users);
}
