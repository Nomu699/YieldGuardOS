# Architecture

```text
User Intent
    |
    v
AI Orchestrator
    |
    +--> DeFi Research
    |
    +--> Wallet / Portfolio State
    |
    v
Transaction Proposal
    |
    v
Deterministic Policy Engine
    |
    +--> BLOCK
    +--> CONFIRM
    +--> ALLOW
    |
    v
Agentic Wallet Adapter
    |
    v
Onchain Transaction
    |
    v
State / Transaction Verification
```

The key design principle is separation of concerns:

- AI handles intent, research and planning.
- Code enforces hard safety rules.
- Wallet handles signing/execution.
- Blockchain state is used for final verification.
