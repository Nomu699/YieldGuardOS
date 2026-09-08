export const BINANCE_AGENT_OS_CONFIG = {
  name: "YieldGuard",
  endpoint: "https://agent.binance.com/mcp/agentic",
  executionMode: "simulation",
  requiresPolicyApproval: true,
};

export function buildAgentRequest(intent: string) {
  return {
    intent,
    policyApprovalRequired: BINANCE_AGENT_OS_CONFIG.requiresPolicyApproval,
    executionMode: BINANCE_AGENT_OS_CONFIG.executionMode,
  };
}
