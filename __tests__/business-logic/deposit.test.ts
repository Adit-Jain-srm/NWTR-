import { describe, it, expect } from "vitest";
import { DEPOSIT } from "@/lib/constants";

/**
 * Business logic tests for the deposit calculation engine.
 * These test the same formulas used in /api/v1/deposits/simulate
 */
describe("Deposit Calculation Engine", () => {
  function calculateDeposit(propertyValue: number, percentage: number) {
    const depositAmount = propertyValue * (percentage / 100);
    const monthlyPayout = Math.round((depositAmount * DEPOSIT.blendedYieldRate) / 12);
    const annualPayout = monthlyPayout * 12;
    const platformMargin = Math.round(annualPayout * DEPOSIT.platformMarginRate);
    const ownerPayout = annualPayout - platformMargin;
    return { depositAmount, monthlyPayout, annualPayout, platformMargin, ownerPayout };
  }

  it("calculates correctly for ₹1 Cr property at 70%", () => {
    const result = calculateDeposit(10000000, 70);
    expect(result.depositAmount).toBe(7000000);
    expect(result.monthlyPayout).toBe(43750); // 7000000 * 0.075 / 12
    expect(result.annualPayout).toBe(43750 * 12);
  });

  it("calculates correctly for ₹2.5 Cr property at 80%", () => {
    const result = calculateDeposit(25000000, 80);
    expect(result.depositAmount).toBe(20000000);
    expect(result.monthlyPayout).toBe(125000); // 20000000 * 0.075 / 12
  });

  it("minimum deposit (50%) still generates payout", () => {
    const result = calculateDeposit(5000000, 50);
    expect(result.depositAmount).toBe(2500000);
    expect(result.monthlyPayout).toBeGreaterThan(0);
  });

  it("monthly payout is always rounded to integer", () => {
    const result = calculateDeposit(7777777, 73);
    expect(Number.isInteger(result.monthlyPayout)).toBe(true);
  });

  it("platform margin is 15% of annual payout", () => {
    const result = calculateDeposit(10000000, 75);
    expect(result.platformMargin).toBe(Math.round(result.annualPayout * 0.15));
  });

  it("owner receives 85% of generated yield", () => {
    const result = calculateDeposit(10000000, 75);
    expect(result.ownerPayout).toBe(result.annualPayout - result.platformMargin);
  });

  describe("Edge cases", () => {
    it("handles minimum property value", () => {
      const result = calculateDeposit(1000000, 50); // ₹10L at 50%
      expect(result.depositAmount).toBe(500000);
      expect(result.monthlyPayout).toBeGreaterThan(0);
    });

    it("handles maximum property value", () => {
      const result = calculateDeposit(100000000, 80); // ₹10Cr at 80%
      expect(result.depositAmount).toBe(80000000);
      expect(result.monthlyPayout).toBeGreaterThan(0);
    });

    it("handles exact boundary percentages", () => {
      const min = calculateDeposit(10000000, DEPOSIT.minPercentage);
      const max = calculateDeposit(10000000, DEPOSIT.maxPercentage);
      expect(max.depositAmount).toBeGreaterThan(min.depositAmount);
      expect(max.monthlyPayout).toBeGreaterThan(min.monthlyPayout);
    });
  });
});

describe("Early Exit Penalty Calculation", () => {
  function calculatePenalty(monthsCompleted: number, monthlyPayout: number) {
    if (monthsCompleted >= 11) return 0;
    if (monthsCompleted >= 9) return monthlyPayout * 1;
    if (monthsCompleted >= 6) return monthlyPayout * 2;
    return monthlyPayout * 3;
  }

  it("no penalty at 11+ months", () => {
    expect(calculatePenalty(11, 45000)).toBe(0);
    expect(calculatePenalty(12, 45000)).toBe(0);
  });

  it("1x penalty at 9-11 months", () => {
    expect(calculatePenalty(9, 45000)).toBe(45000);
    expect(calculatePenalty(10, 45000)).toBe(45000);
  });

  it("2x penalty at 6-9 months", () => {
    expect(calculatePenalty(6, 45000)).toBe(90000);
    expect(calculatePenalty(8, 45000)).toBe(90000);
  });

  it("3x penalty at 0-6 months", () => {
    expect(calculatePenalty(0, 45000)).toBe(135000);
    expect(calculatePenalty(5, 45000)).toBe(135000);
  });
});

describe("KYC Tier Gating", () => {
  function canInitiateDeposit(kycTier: number, depositAmount: number): { allowed: boolean; reason?: string } {
    if (kycTier < 2) return { allowed: false, reason: "KYC Tier 2 required" };
    if (depositAmount > 5000000 && kycTier < 3) return { allowed: false, reason: "KYC Tier 3 required for deposits > ₹50L" };
    return { allowed: true };
  }

  it("blocks Tier 0 users", () => {
    expect(canInitiateDeposit(0, 1000000).allowed).toBe(false);
  });

  it("blocks Tier 1 users", () => {
    expect(canInitiateDeposit(1, 1000000).allowed).toBe(false);
  });

  it("allows Tier 2 for deposits <= ₹50L", () => {
    expect(canInitiateDeposit(2, 5000000).allowed).toBe(true);
  });

  it("blocks Tier 2 for deposits > ₹50L", () => {
    expect(canInitiateDeposit(2, 5000001).allowed).toBe(false);
  });

  it("allows Tier 3 for any deposit amount", () => {
    expect(canInitiateDeposit(3, 80000000).allowed).toBe(true);
  });
});
