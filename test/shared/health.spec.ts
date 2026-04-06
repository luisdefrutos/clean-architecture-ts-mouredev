import { describe, expect, it } from "vitest";
import { health } from "../../src/shared/health";

describe("health", () => {
  it('should return "ok"', () => {
    expect(health()).toBe("ok");
  });
});
