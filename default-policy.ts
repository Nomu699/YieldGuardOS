import { Policy } from "./types.js";

export const DEFAULT_POLICY: Policy = {
  maxTransactionUsd: 300,
  maxProtocolExposurePct: 30,
  maxSlippageBps: 50,
  requireVerifiedContract: true,
  minLiquidityUsd: 100_000
};
