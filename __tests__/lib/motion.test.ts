import { describe, it, expect } from "vitest";
import { EASING, DURATION, STAGGER, fadeUpVariants, scaleInVariants, staggerContainerVariants } from "@/lib/motion";

describe("Motion constants", () => {
  describe("EASING", () => {
    it("default easing is a 4-element tuple", () => {
      expect(EASING.default).toHaveLength(4);
      expect(EASING.default.every((v) => typeof v === "number")).toBe(true);
    });
    it("spring has correct structure", () => {
      expect(EASING.spring.type).toBe("spring");
      expect(EASING.spring.stiffness).toBeGreaterThan(0);
      expect(EASING.spring.damping).toBeGreaterThan(0);
    });
  });

  describe("DURATION", () => {
    it("micro < fast < standard < dramatic < storytelling", () => {
      expect(DURATION.micro).toBeLessThan(DURATION.fast);
      expect(DURATION.fast).toBeLessThan(DURATION.standard);
      expect(DURATION.standard).toBeLessThan(DURATION.dramatic);
      expect(DURATION.dramatic).toBeLessThan(DURATION.storytelling);
    });
    it("all values are positive", () => {
      for (const val of Object.values(DURATION)) {
        expect(val).toBeGreaterThan(0);
      }
    });
  });

  describe("STAGGER", () => {
    it("fast < list < cards < metrics", () => {
      expect(STAGGER.fast).toBeLessThan(STAGGER.list);
      expect(STAGGER.list).toBeLessThan(STAGGER.cards);
      expect(STAGGER.cards).toBeLessThan(STAGGER.metrics);
    });
  });

  describe("Variants", () => {
    it("fadeUpVariants has hidden and visible states", () => {
      expect(fadeUpVariants.hidden.opacity).toBe(0);
      expect(fadeUpVariants.visible.opacity).toBe(1);
      expect(fadeUpVariants.hidden.y).toBeGreaterThan(0);
    });
    it("scaleInVariants starts scaled down", () => {
      expect(scaleInVariants.hidden.scale).toBeLessThan(1);
      expect(scaleInVariants.visible.scale).toBe(1);
    });
    it("staggerContainerVariants has staggerChildren", () => {
      expect(staggerContainerVariants.visible.transition.staggerChildren).toBeGreaterThan(0);
    });
  });
});
