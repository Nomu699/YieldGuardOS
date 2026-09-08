export type RiskDecision = "ALLOW" | "CONFIRM" | "BLOCK";

export interface Policy {
  maxTransactionUsd: number;
  maxProtocolExposurePct: number;
  maxSlippageBps: number;
  requireVerifiedContract: boolean;
  minLiquidityUsd: number;
}

export interface TransactionProposal {
  protocol: string;
  amountUsd: number;
  postPositionPct: number;
  slippageBps: number;
  contractVerified: boolean;
  liquidityUsd: number;
}
