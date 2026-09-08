type Decision = "ALLOW" | "CONFIRM" | "BLOCK";

function checkPolicy(amountUsd: number): Decision {
  const MAX_TRANSACTION_USD = 300;

  if (amountUsd > MAX_TRANSACTION_USD) {
    return "BLOCK";
  }

  if (amountUsd > 100) {
    return "CONFIRM";
  }

  return "ALLOW";
}

function runDemo(amountUsd: number) {
  const decision = checkPolicy(amountUsd);

  console.log("────────────────────────────");
  console.log(`YieldGuard request: $${amountUsd} USDC`);
  console.log(`Policy decision: ${decision}`);

  if (decision === "ALLOW") {
    console.log("✅ Transaction is allowed.");
  }

  if (decision === "CONFIRM") {
    console.log("⚠️ User confirmation required.");
  }

  if (decision === "BLOCK") {
    console.log("🛑 Transaction blocked by policy.");
  }
}

console.log("🛡️ YieldGuard Policy Demo");
console.log("AI proposes. Policy decides. Wallet executes.");

runDemo(100);
runDemo(200);
runDemo(500);
