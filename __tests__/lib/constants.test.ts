import { describe, it, expect } from "vitest";
import { DEPOSIT, APP, KYC_TIERS, ROLES, NAV_LINKS } from "@/lib/constants";

describe("DEPOSIT constants", () => {
  it("has valid percentage range", () => {
    expect(DEPOSIT.minPercentage).toBe(50);
    expect(DEPOSIT.maxPercentage).toBe(80);
    expect(DEPOSIT.recommendedPercentage).toBe(75);
    expect(DEPOSIT.recommendedPercentage).toBeGreaterThanOrEqual(DEPOSIT.minPercentage);
    expect(DEPOSIT.recommendedPercentage).toBeLessThanOrEqual(DEPOSIT.maxPercentage);
  });

  it("has valid tenure range", () => {
    expect(DEPOSIT.minTenureMonths).toBe(6);
    expect(DEPOSIT.maxTenureMonths).toBe(36);
    expect(DEPOSIT.defaultTenureMonths).toBe(12);
  });

  it("has valid yield rate (between 5% and 15%)", () => {
    expect(DEPOSIT.blendedYieldRate).toBeGreaterThan(0.05);
    expect(DEPOSIT.blendedYieldRate).toBeLessThan(0.15);
  });

  it("platform margin + owner share <= 1", () => {
    expect(DEPOSIT.platformMarginRate + (1 - DEPOSIT.platformMarginRate)).toBe(1);
  });
});

describe("APP constants", () => {
  it("has required fields", () => {
    expect(APP.name).toBe("NWTR");
    expect(APP.url).toContain("https://");
    expect(APP.foundedYear).toBe(2026);
  });
});

describe("KYC_TIERS", () => {
  it("has 4 tiers (0-3)", () => {
    expect(Object.keys(KYC_TIERS)).toHaveLength(4);
    expect(KYC_TIERS[0].name).toBe("Unverified");
    expect(KYC_TIERS[3].name).toBe("Advanced");
  });

  it("each tier has unlocks array", () => {
    for (const tier of Object.values(KYC_TIERS)) {
      expect(Array.isArray(tier.unlocks)).toBe(true);
      expect(tier.unlocks.length).toBeGreaterThan(0);
    }
  });
});

describe("NAV_LINKS", () => {
  it("has links for all roles", () => {
    expect(NAV_LINKS.public.length).toBeGreaterThan(0);
    expect(NAV_LINKS.tenant.length).toBeGreaterThan(0);
    expect(NAV_LINKS.owner.length).toBeGreaterThan(0);
    expect(NAV_LINKS.rm.length).toBeGreaterThan(0);
    expect(NAV_LINKS.admin.length).toBeGreaterThan(0);
  });

  it("all links have href and label", () => {
    for (const [, links] of Object.entries(NAV_LINKS)) {
      for (const link of links) {
        expect(link.href).toBeTruthy();
        expect(link.label).toBeTruthy();
      }
    }
  });
});
