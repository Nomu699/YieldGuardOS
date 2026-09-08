export interface StakingWorkflow {
  stake(asset: string, amountUsd: number): Promise<unknown>;
}

// TODO: Connect this interface to an Agent OS staking/onchain skill.
