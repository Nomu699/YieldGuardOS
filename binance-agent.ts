export const BINANCE_AGENT_OS = {
  name: "YieldGuard",
  mode: "policy-controlled",
  workflow: [
    "intent",
    "research",
    "risk",
    "simulation",
    "approval",
    "execution",
    "verification",
  ],
};

export function createBinanceAgentContext() {
  return {
    agent: BINANCE_AGENT_OS,
    safety: {
      maxTransactionUsd: 300,
      maxProtocolExposurePct: 30,
      maxSlippageBps: 50,
      verifiedContractsOnly: true,
      minLiquidityUsd: 100000,
    },
    executionMode: "simulation",
  };
}
