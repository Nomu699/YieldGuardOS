import { DEFAULT_POLICY } from "../policy/default-policy.js";
import { evaluateTransaction } from "../policy/engine.js";
import { DeFiTool, WalletTool } from "../tools/interfaces.js";

export async function runYieldGuard(
  intent: string,
  defi: DeFiTool,
  wallet: WalletTool
) {
  const balance = await wallet.getUsdcBalance();
  const candidates = await defi.findCandidates("USDC");

  const candidate = candidates.find((c) => c.contractVerified);

  if (!candidate) {
    return { status: "BLOCKED", reason: "No policy-compliant candidate found." };
  }

  const proposal = {
    protocol: candidate.protocol,
    amountUsd: Math.min(balance, 100),
    postPositionPct: candidate.postPositionPct,
    slippageBps: candidate.slippageBps,
    contractVerified: candidate.contractVerified,
    liquidityUsd: candidate.liquidityUsd
  };

  const risk = evaluateTransaction(proposal, DEFAULT_POLICY);

  if (risk.decision === "BLOCK") {
    return { status: "BLOCKED", risk };
  }

  if (risk.decision === "CONFIRM") {
    return { status: "CONFIRMATION_REQUIRED", risk, proposal };
  }

  const prepared = await wallet.prepareDeposit(candidate.protocol, proposal.amountUsd);
  const result = await wallet.execute(prepared);
  const verified = await wallet.verify(result.txHash);

  return {
    status: verified ? "CONFIRMED" : "VERIFICATION_FAILED",
    txHash: result.txHash,
    protocol: candidate.protocol,
    amountUsd: proposal.amountUsd
  };
}
