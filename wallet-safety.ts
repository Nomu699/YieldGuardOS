export type SafetyDecision = "ALLOW" | "CONFIRM" | "BLOCK";

export function checkWalletSafety(amountUsd: number): SafetyDecision {
  if (amountUsd > 300) {
    return "BLOCK";
  }

  if (amountUsd > 100) {
    return "CONFIRM";
  }

  return "ALLOW";
}
