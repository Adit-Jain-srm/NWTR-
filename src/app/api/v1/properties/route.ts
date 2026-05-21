import { prisma } from "@/lib/prisma";
import { successResponse, paginatedResponse, errorResponse } from "@/lib/api-response";
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
  status: z.string().optional(),
  page: z.coerce.number().default(1),
  pageSize: z.coerce.number().default(20),
});

export async function GET(req: NextRequest) {
  const params = Object.fromEntries(req.nextUrl.searchParams);
  const parsed = searchSchema.safeParse(params);
  if (!parsed.success) return errorResponse("VAL_INVALID_FORMAT", "Invalid query parameters", 400);

  const { city, locality, minBhk, maxBhk, minValue, maxValue, status, page, pageSize } = parsed.data;

  const where = {
    deletedAt: null,
    ...(city && { city: { contains: city, mode: "insensitive" as const } }),
    ...(locality && { locality: { contains: locality, mode: "insensitive" as const } }),
    ...(minBhk && { bhk: { gte: minBhk } }),
    ...(maxBhk && { bhk: { lte: maxBhk } }),
    ...(minValue && { marketValue: { gte: minValue } }),
    ...(maxValue && { marketValue: { lte: maxValue } }),
    ...(status ? { status: status as never } : { status: { in: ["LISTED", "VERIFIED"] as never } }),
  };

  const [properties, total] = await Promise.all([
    prisma.property.findMany({
      where,
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      include: { owner: { select: { id: true, firstName: true, lastName: true } } },
    }),
    prisma.property.count({ where }),
  ]);

  return paginatedResponse(properties, { page, pageSize, totalItems: total });
}

const createSchema = z.object({
  title: z.string().min(5).max(200),
  description: z.string().optional(),
  bhk: z.number().int().min(1).max(10),
  area: z.number().int().min(100),
  address: z.object({ line1: z.string(), line2: z.string().optional(), pincode: z.string() }),
  city: z.string(),
  locality: z.string(),
  marketValue: z.number().min(1000000),
  amenities: z.array(z.string()).optional(),
  images: z.array(z.string()).optional(),
});

export async function POST(req: NextRequest) {
  const { error, session } = await requireRole("OWNER", "ADMIN", "SUPER_ADMIN");
  if (error) return error;

  const body = await req.json();
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) return errorResponse("VAL_REQUIRED_FIELD", "Validation failed", 400, parsed.error.issues);

  const property = await prisma.property.create({
    data: {
      ...parsed.data,
      marketValue: parsed.data.marketValue,
      amenities: parsed.data.amenities ?? [],
      images: parsed.data.images ?? [],
      ownerId: session!.user.id,
    },
  });

  return successResponse(property, 201);
}
