import { successResponse } from "@/lib/api-response";
import { NextRequest } from "next/server";
import { z } from "zod";

const simulateSchema = z.object({
  propertyValue: z.number().min(1000000),
  depositPercent: z.number().min(50).max(80),
  tenure: z.number().int().min(6).max(36).default(12),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = simulateSchema.safeParse(body);
  if (!parsed.success) {
    return successResponse({
      error: "Invalid input",
      details: parsed.error.issues,
    }, 400);
  }

  const { propertyValue, depositPercent, tenure } = parsed.data;
  const depositAmount = propertyValue * (depositPercent / 100);
  const annualYield = 0.075;
  const monthlyPayout = Math.round((depositAmount * annualYield) / 12);
  const totalPayouts = monthlyPayout * tenure;
  const traditionalRentMonthly = monthlyPayout;
  const totalRentBurned = traditionalRentMonthly * tenure;

  return successResponse({
    depositAmount,
    depositPercent,
    propertyValue,
    tenure,
    annualYield: annualYield * 100,
    monthlyPayout,
    totalPayoutsToOwner: totalPayouts,
    tenantMonthlyCost: 0,
    tenantTotalSavings: totalRentBurned,
    depositReturnedAtEnd: depositAmount,
    equivalentMonthlyRent: traditionalRentMonthly,
  });
}
