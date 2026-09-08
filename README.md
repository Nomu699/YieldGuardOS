# YieldGuard 🛡️

### Autonomous DeFi, controlled by your policy.

YieldGuard is an AI-powered onchain workflow agent for the Binance Agent OS Mini Hackathon — **Onchain Workflows**.

**Core idea:**

> AI proposes. Policy decides. Wallet executes. Blockchain verifies.

YieldGuard converts a natural-language DeFi intent into a policy-controlled workflow:

`Intent → Research → Risk → Simulation → Approval → Execution → Verification`

## MVP

The starter repo demonstrates one workflow:

> "Deploy 100 USDC into my approved DeFi strategy."

It includes:
- deterministic policy/risk engine
- agent/orchestrator interfaces
- DeFi and wallet tool interfaces
- mock adapters for a safe local demo
- staking / DeFi / onchain workflow boundaries
- tests for critical policy rules

## Safety model

The LLM is never the final authority for transaction safety.

Hard rules are enforced in code:
- maximum transaction amount
- maximum protocol exposure
- verified-contract requirement
- maximum slippage

For the hackathon demo, execution defaults to **mock/simulation mode**. Connect the real Agent OS / Agentic Wallet adapter only after configuring the required credentials and permissions.

## Quick start

```bash
npm install
npm run demo
npm test
```

## Project structure

```text
agent/        Agent orchestration and prompts
policy/       Deterministic policy engine
tools/        Wallet / DeFi / onchain interfaces
workflows/    Staking, DeFi and onchain workflow entry points
tests/        Safety and workflow tests
```

## Hackathon pitch

YieldGuard is a policy-controlled AI agent that researches DeFi opportunities, enforces deterministic user rules, executes approved onchain workflows, and verifies the resulting state.
