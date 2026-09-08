import { runYieldGuard } from "./agent/orchestrator.js";
import { MockDeFi, MockWallet } from "./tools/mock.js";

async function main() {
  console.log("\n🛡️  YIELDGUARD DEMO");
  console.log("AI proposes. Policy decides. Wallet executes. Blockchain verifies.\n");

  const intent =
    "Put my idle USDC to work. Max 30% per protocol. Verified contracts only.";

  console.log("USER:", intent);
  console.log("\n🔎 Scanning DeFi opportunities...");
  console.log("⚠️  High-yield unverified pool rejected.");
  console.log("✓ Approved Stable Pool selected.");
  console.log("🛡️  Running deterministic policy checks...");

  const result = await runYieldGuard(
    intent,
    new MockDeFi(),
    new MockWallet()
  );

  console.log("\nRESULT:");
  console.log(JSON.stringify(result, null, 2));
  console.log("\n✓ Demo complete. Execution is simulated.\n");
}

main().catch(console.error);
