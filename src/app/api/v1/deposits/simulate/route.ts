import { success } from "@/lib/api-response";
import { DEPOSIT } from "@/lib/constants";
import { NextRequest } from "next/server";
import { z } from "zod";

const schema = z.object({
  propertyValue: z.number().min(1000000),
  depositPercent: z.number().min(DEPOSIT.minPercentage).max(DEPOSIT.maxPercentage),
  tenure: z.number().int().min(6).max(36).default(12),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) return success({ error: "Invalid input" }, 400);

  const { propertyValue, depositPercent, tenure } = parsed.data;
  const depositAmount = propertyValue * (depositPercent / 100);
  const monthlyPayout = Math.round((depositAmount * DEPOSIT.blendedYieldRate) / 12);
  const totalPayouts = monthlyPayout * tenure;

  return success({
    depositAmount, depositPercent, propertyValue, tenure,
    annualYield: DEPOSIT.blendedYieldRate * 100,
    monthlyPayout,
    totalPayoutsToOwner: totalPayouts,
    tenantMonthlyCost: 0,
    tenantTotalSavings: totalPayouts,
    depositReturnedAtEnd: depositAmount,
  });
}
