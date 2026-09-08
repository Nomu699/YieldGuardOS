import { Candidate, DeFiTool, WalletTool } from "./interfaces.js";

export class MockDeFi implements DeFiTool {
  async findCandidates(_asset: string): Promise<Candidate[]> {
    return [
      {
        protocol: "Unverified High-Yield Pool",
        estimatedYieldPct: 18.4,
        liquidityUsd: 800_000,
        contractVerified: false,
        postPositionPct: 20,
        slippageBps: 12
      },
      {
        protocol: "Approved Stable Pool",
        estimatedYieldPct: 7.2,
        liquidityUsd: 4_500_000,
        contractVerified: true,
        postPositionPct: 10,
        slippageBps: 18
      }
    ];
  }
}

export class MockWallet implements WalletTool {
  async getUsdcBalance(): Promise<number> {
    return 1_000;
  }

  async prepareDeposit(protocol: string, amountUsd: number) {
    return { protocol, amountUsd, mode: "simulation" };
  }

  async execute(_prepared: unknown) {
    return { txHash: "0xDEMO_YIELDGUARD_1234" };
  }

  async verify(_txHash: string): Promise<boolean> {
    return true;
  }
}
