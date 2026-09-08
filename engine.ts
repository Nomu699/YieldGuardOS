import { Policy, RiskDecision, TransactionProposal } from "./types.js";

export function evaluateTransaction(
  tx: TransactionProposal,
  policy: Policy
): { decision: RiskDecision; reasons: string[] } {
  const reasons: string[] = [];

  if (policy.requireVerifiedContract && !tx.contractVerified) {
    reasons.push("Contract is not verified.");
  }

  if (tx.postPositionPct > policy.maxProtocolExposurePct) {
    reasons.push(
      `Protocol exposure ${tx.postPositionPct}% exceeds ${policy.maxProtocolExposurePct}%.`
    );
  }

  if (tx.slippageBps > policy.maxSlippageBps) {
    reasons.push(
      `Slippage ${tx.slippageBps} bps exceeds ${policy.maxSlippageBps} bps.`
    );
  }

  if (tx.liquidityUsd < policy.minLiquidityUsd) {
    reasons.push(
      `Liquidity $${tx.liquidityUsd} is below $${policy.minLiquidityUsd}.`
    );
  }

  if (reasons.length > 0) {
    return { decision: "BLOCK", reasons };
  }

  if (tx.amountUsd > policy.maxTransactionUsd) {
    reasons.push(
      `Transaction $${tx.amountUsd} exceeds autonomous limit $${policy.maxTransactionUsd}.`
    );
    return { decision: "CONFIRM", reasons };
  }

  return { decision: "ALLOW", reasons: ["All policy checks passed."] };
}
