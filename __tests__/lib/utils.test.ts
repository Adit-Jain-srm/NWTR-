import { describe, it, expect } from "vitest";
import { cn, formatCurrency, formatCurrencyFull, formatPercentage, formatDate, formatRelativeTime } from "@/lib/utils";

describe("cn (class name merge)", () => {
  it("merges basic classes", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });
  it("handles conditional classes", () => {
    expect(cn("base", false && "hidden", "visible")).toBe("base visible");
  });
  it("merges tailwind conflicts", () => {
    expect(cn("px-4", "px-6")).toBe("px-6");
  });
  it("handles undefined/null", () => {
    expect(cn("base", undefined, null, "end")).toBe("base end");
  });
});

describe("formatCurrency", () => {
  it("formats crores (>=1Cr)", () => {
    expect(formatCurrency(10000000)).toBe("₹1 Cr");
    expect(formatCurrency(25000000)).toBe("₹2.5 Cr");
  });
  it("formats lakhs (>=1L)", () => {
    expect(formatCurrency(500000)).toBe("₹5L");
    expect(formatCurrency(8500000)).toBe("₹85L");
  });
  it("formats smaller amounts in INR", () => {
    expect(formatCurrency(45000)).toContain("45,000");
  });
  it("handles zero", () => {
    expect(formatCurrency(0)).toContain("0");
  });
  it("handles edge case at boundary (1Cr exactly)", () => {
    expect(formatCurrency(10000000)).toBe("₹1 Cr");
  });
});

describe("formatCurrencyFull", () => {
  it("formats with full INR notation", () => {
    const result = formatCurrencyFull(8400000);
    expect(result).toContain("84");
    expect(result).toContain("₹");
  });
});

describe("formatPercentage", () => {
  it("formats with 1 decimal by default", () => {
    expect(formatPercentage(7.5)).toBe("7.5%");
  });
  it("formats with custom decimals", () => {
    expect(formatPercentage(7.567, 2)).toBe("7.57%");
  });
  it("handles zero", () => {
    expect(formatPercentage(0)).toBe("0.0%");
  });
});

describe("formatDate", () => {
  it("formats ISO date string", () => {
    const result = formatDate("2026-03-15");
    expect(result).toContain("Mar");
    expect(result).toContain("2026");
  });
  it("formats Date object", () => {
    const result = formatDate(new Date(2026, 2, 15));
    expect(result).toContain("15");
  });
});

describe("formatRelativeTime", () => {
  it("returns 'Today' for today", () => {
    expect(formatRelativeTime(new Date())).toBe("Today");
  });
  it("returns 'Yesterday' for yesterday", () => {
    const yesterday = new Date(Date.now() - 86400000);
    expect(formatRelativeTime(yesterday)).toBe("Yesterday");
  });
  it("returns 'X days ago' for recent dates", () => {
    const fiveDaysAgo = new Date(Date.now() - 5 * 86400000);
    expect(formatRelativeTime(fiveDaysAgo)).toBe("5 days ago");
  });
});
