import { prisma } from "@/lib/prisma";
import { success, paginated, error } from "@/lib/api-response";
import { requireRole } from "@/lib/permissions";
import { NextRequest } from "next/server";
import { z } from "zod";

const searchSchema = z.object({
  city: z.string().optional(),
  locality: z.string().optional(),
  minBhk: z.coerce.number().optional(),
  maxBhk: z.coerce.number().optional(),
  minValue: z.coerce.number().optional(),
  maxValue: z.coerce.number().optional(),
  page: z.coerce.number().default(1),
  pageSize: z.coerce.number().default(20),
});

export async function GET(req: NextRequest) {
  const params = Object.fromEntries(req.nextUrl.searchParams);
  const parsed = searchSchema.safeParse(params);
  if (!parsed.success) return error("VAL_INVALID", "Invalid parameters", 400);

  const { city, locality, minBhk, maxBhk, minValue, maxValue, page, pageSize } = parsed.data;
  const where = {
    deletedAt: null,
    ...(city && { city: { contains: city, mode: "insensitive" as const } }),
    ...(locality && { locality: { contains: locality, mode: "insensitive" as const } }),
    ...(minBhk && { bhk: { gte: minBhk } }),
    ...(maxBhk && { bhk: { lte: maxBhk } }),
    ...(minValue && { marketValue: { gte: minValue } }),
    ...(maxValue && { marketValue: { lte: maxValue } }),
  };

  const [data, total] = await Promise.all([
    prisma.property.findMany({ where, skip: (page - 1) * pageSize, take: pageSize, orderBy: { createdAt: "desc" }, include: { owner: { select: { id: true, firstName: true, lastName: true } } } }),
    prisma.property.count({ where }),
  ]);

  return paginated(data, page, pageSize, total);
}

export async function POST(req: NextRequest) {
  const { error: err, session } = await requireRole("OWNER", "ADMIN", "SUPER_ADMIN");
  if (err) return err;

  const body = await req.json();
  const property = await prisma.property.create({
    data: { ...body, ownerId: session!.user.id, amenities: body.amenities || [], images: body.images || [] },
  });
  return success(property, 201);
}
