import { describe, expect, it } from "vitest";
import { evaluateTransaction } from "../policy/engine.js";
import { DEFAULT_POLICY } from "../policy/default-policy.js";

const base = {
  protocol: "Approved Stable Pool",
  amountUsd: 100,
  postPositionPct: 10,
  slippageBps: 20,
  contractVerified: true,
  liquidityUsd: 1_000_000
};

describe("YieldGuard Policy Engine", () => {
  it("allows a compliant transaction", () => {
    expect(evaluateTransaction(base, DEFAULT_POLICY).decision).toBe("ALLOW");
  });

  it("blocks unverified contracts", () => {
    expect(
      evaluateTransaction({ ...base, contractVerified: false }, DEFAULT_POLICY).decision
    ).toBe("BLOCK");
  });

  it("blocks excessive protocol exposure", () => {
    expect(
      evaluateTransaction({ ...base, postPositionPct: 50 }, DEFAULT_POLICY).decision
    ).toBe("BLOCK");
  });

  it("requires confirmation above the autonomous amount", () => {
    expect(
      evaluateTransaction({ ...base, amountUsd: 500 }, DEFAULT_POLICY).decision
    ).toBe("CONFIRM");
  });
});
