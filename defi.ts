import { runYieldGuard } from "../agent/orchestrator.js";
import { DeFiTool, WalletTool } from "../tools/interfaces.js";

export function runDefiWorkflow(
  intent: string,
  defi: DeFiTool,
  wallet: WalletTool
) {
  return runYieldGuard(intent, defi, wallet);
}
