export interface OnchainActionWorkflow {
  prepare(action: string): Promise<unknown>;
  execute(prepared: unknown): Promise<unknown>;
  verify(result: unknown): Promise<boolean>;
}

// TODO: Connect real Agent OS / Agentic Wallet execution here.
