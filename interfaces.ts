export interface Candidate {
  protocol: string;
  estimatedYieldPct: number;
  liquidityUsd: number;
  contractVerified: boolean;
  postPositionPct: number;
  slippageBps: number;
}

export interface DeFiTool {
  findCandidates(asset: string): Promise<Candidate[]>;
}

export interface WalletTool {
  getUsdcBalance(): Promise<number>;
  prepareDeposit(protocol: string, amountUsd: number): Promise<unknown>;
  execute(prepared: unknown): Promise<{ txHash: string }>;
  verify(txHash: string): Promise<boolean>;
}
