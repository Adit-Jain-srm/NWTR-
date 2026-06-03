import { prisma } from "@/lib/prisma";
import { success, error } from "@/lib/api-response";
import { requireRole } from "@/lib/permissions";
import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  phone: z.string().optional(),
  role: z.enum(["TENANT", "OWNER"]).default("TENANT"),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) return error("VAL_INVALID", "Validation failed", 400, parsed.error.issues);

  const existing = await prisma.user.findUnique({ where: { email: parsed.data.email } });
  if (existing) return error("USER_EXISTS", "Email already registered", 409);

  const hashed = await bcrypt.hash(parsed.data.password, 12);
  const user = await prisma.user.create({
    data: { ...parsed.data, password: hashed },
    select: { id: true, email: true, firstName: true, lastName: true, role: true, kycTier: true },
  });

  return success(user, 201);
}

export async function GET() {
  const { error: err, session } = await requireRole("ADMIN", "SUPER_ADMIN");
  if (err) return err;

  const users = await prisma.user.findMany({
    where: { deletedAt: null },
    select: { id: true, email: true, firstName: true, lastName: true, role: true, status: true, kycTier: true, createdAt: true },
    orderBy: { createdAt: "desc" },
  });

  return success(users);
}
