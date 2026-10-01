# SplitPay Documentation

> The official developer documentation hub for the SplitPay collaborative payment distribution protocol on Stellar and Soroban.

[![GitHub](https://img.shields.io/badge/GitHub-Splitpayx-24292e?style=flat&logo=github)](https://github.com/Splitpayx)
[![Docs](https://img.shields.io/badge/Docs-splitpaydocs.samkiel.dev-14B8A6?style=flat)](http://splitpaydocs.samkiel.dev/)
[![Live App](https://img.shields.io/badge/App-splitpay.samkiel.dev-0F2340?style=flat)](http://splitpay.samkiel.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-16.3.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Stellar](https://img.shields.io/badge/Stellar-Testnet-black?style=flat&logo=stellar)](https://stellar.org/)
[![Soroban](https://img.shields.io/badge/Soroban-Protocol_22-purple?style=flat)](https://soroban.stellar.org/)

**Official Platform URL:** [http://splitpaydocs.samkiel.dev/](http://splitpaydocs.samkiel.dev/)  
**GitHub Organization:** [github.com/Splitpayx](https://github.com/Splitpayx)  
**Production Web Application:** [http://splitpay.samkiel.dev/](http://splitpay.samkiel.dev/)

---

## 🌐 Ecosystem Overview

SplitPay is a trustless, non-custodial collaborative payment splitting and fund distribution protocol built natively on the **Stellar network** using **Soroban smart contracts**.

| Repository | Role in Ecosystem | Technology | Status |
|:---|:---|:---|:---|
| [splitpay-contracts](https://github.com/Splitpayx/splitpay-contracts) | On-chain financial authority, SEP-41 token interactions, immutable distributions | Rust / Soroban v22 | Active (Testnet) |
| [splitpay-web](https://github.com/Splitpayx/splitpay-web) | Decentralized web application, Freighter wallet signing, pool management | Next.js 16 / React 19 | Active |
| [splitpay-mobile](https://github.com/Splitpayx/splitpay-mobile) | Cross-platform mobile client for pool monitoring & payment signing | React Native | Planning / Scaffolding |
| [splitpay-sdk](https://github.com/Splitpayx/splitpay-sdk) | Typed Soroban contract invocation client (first-party client in web, standalone planned) | TypeScript | Client Implemented |
| [splitpay-api](https://github.com/Splitpayx/splitpay-api) | Event indexing pipeline, historical analytics, webhook relays | Node.js / PostgreSQL | Architecture Specified |
| [splitpay-docs](https://github.com/Splitpayx/splitpay-docs) ← *this repo* | Master documentation platform across all ecosystem components | Next.js 16 (App Router) | Active |

---

## 📚 Documentation Hierarchy

The documentation platform covers **58 topics** organized into **12 structured sections**:

```text
http://splitpaydocs.samkiel.dev/
├── docs/introduction/
│   ├── overview                  - High-level protocol mission and trust boundaries
│   ├── what-is-splitpay          - Multi-party splitting without intermediaries
│   ├── how-it-works              - Payer → Pool → Soroban Contract → Recipients flow
│   ├── architecture              - Separation of on-chain authority vs application UX
│   └── terminology               - Pools, Basis Points (BPS), Stroops, SAC, Footprints
├── docs/getting-started/
│   ├── quickstart                - 5-minute guide to creating a pool and splitting funds
│   ├── freighter-wallet          - Freighter browser extension setup & Testnet switching
│   ├── testnet-funding           - Funding addresses via Friendbot RPC
│   └── first-split               - Executing and settling your first payment
├── docs/concepts/
│   ├── pools                     - Multi-party recipient shares & verification rules
│   ├── basis-points              - 10,000 BPS = 100.00% math and strict zero-loss invariants
│   ├── atomic-settlement         - Single-transaction disbursement mechanics
│   ├── pool-lifecycle            - Active vs Paused states and owner permissions
│   └── payment-lifecycle         - Pending record creation, execution, and settled receipts
├── docs/protocol/
│   ├── contract-overview         - Soroban v22 architecture and WASM deployment
│   ├── storage                   - Instance and persistent storage keys & TTL footprints
│   ├── state-transitions         - Deterministic lifecycle state machine
│   ├── functions                 - Complete reference for all 13 contract entrypoints
│   ├── events                    - Soroban event topics (pool_created, payment_settled)
│   └── errors                    - 14 error variants with exact numeric codes (1..14)
├── docs/web/
│   ├── overview                  - Next.js 16 App Router decentralized client architecture
│   ├── env-config                - RPC URLs, Contract IDs, and Network Passphrases
│   ├── wallet-integration        - Freighter API adapter & instant Testnet Dev Keypairs
│   ├── components                - PoolWizard, AllocationList, and Payment modals
│   └── deployment                - Production deployment guides for Vercel and Netlify
├── docs/mobile/
│   ├── overview                  - React Native mobile client architecture
│   ├── setup                     - Development environment & wallet connector
│   ├── screens                   - Pool inspector and payment authorization screens
│   └── roadmap                   - Biometric transaction signing & push notification relay
├── docs/sdk/
│   ├── overview                  - SplitPayContractClient design principles
│   ├── client-reference          - Read simulations, transaction builders, confirmation polling
│   ├── transaction-builders      - Assembling XDR for pool and payment execution
│   ├── error-handling            - Decoding Soroban invokeHostFunction error codes
│   └── code-recipes              - Production TypeScript examples
├── docs/api/
│   ├── overview                  - Indexer architecture & Soroban RPC ingestion pipeline
│   ├── data-models               - PostgreSQL schemas for pools, payments, and member shares
│   ├── endpoints                 - REST endpoints for cached pool queries and receipts
│   └── webhooks                  - Real-time settlement notifications
├── docs/guides/
│   ├── create-a-pool             - Step-by-step pool deployment with 10,000 BPS validation
│   ├── execute-a-payment         - Funding, signing, and settling a multi-recipient payment
│   ├── query-history             - Inspecting historical distributions on Stellar Expert
│   ├── custom-tokens             - Deploying pools with custom Stellar Asset Contracts (SAC)
│   ├── soroban-rpc               - Simulating transaction footprints and fee estimation
│   └── troubleshooting           - Resolving common contract error codes
├── docs/reference/
│   ├── contract                  - Full contract entrypoint signature and authorization table
│   ├── sdk                       - Typed client method and return signature specifications
│   ├── events                    - Event topic structure and data payload schema
│   └── errors                    - Error name, code, description, and recovery steps
├── docs/contributing/
│   ├── guidelines                - Pull request standards, code formatting, and review flow
│   ├── development               - Local setup, test harnesses, and typechecking
│   ├── code-of-conduct           - Community standards and expectations
│   └── security                  - Responsible vulnerability reporting policy
└── docs/faq/
    ├── general                   - What is SplitPay, who is it for, supported assets
    ├── pools-payments            - Modifying pools, maximum members, remainder stroops
    ├── security-audits           - Non-custodial guarantees and smart contract safety
    └── troubleshooting           - Freighter connection failures and transaction timeouts
```

---

## 🛠️ Platform Features

1. **Full Static Site Generation (SSG)**: Pre-renders **62 static routes** at build time using the Next.js 16 App Router, ensuring instant page transitions and sub-100ms response times.
2. **Global Keyboard Search (`Ctrl+K` / `⌘K`)**: Instant client-side search modal indexing contract methods, error codes, conceptual topics, and guides with direct keyboard navigation.
3. **Interactive 10,000 BPS Remainder Calculator**: Embedded simulator demonstrating on-chain integer division and showing real-time allocation of remainder stroops to the primary member (`index 0`).
4. **Responsive Dual-Column Shell**: Sticky desktop sidebar navigation, responsive tablet adaptation (`md:block`), and dedicated mobile drawer with breadcrumbs.
5. **Interactive Table of Contents**: Scrollspy observer tracking headings (`h2`, `h3`) with active visual indicators.
6. **Syntax-Themed Code Blocks**: One-click clipboard copying, language tags, and terminal headers.
7. **Production Aesthetic**: Dark mode interface built with custom HSL tokens matching SplitPay brand guidelines (`#0B1A33` background, `#0F2340` card surfaces, `#14B8A6` teal accents).

---

## 💻 Tech Stack

- **Framework**: [Next.js 16.3.5](https://nextjs.org/) (App Router, Turbopack & Webpack compilation)
- **UI Runtime**: [React 19.2.8](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom CSS custom properties
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Vector Components
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) with strict type safety
- **Deployment**: Static cloud hosting (Vercel / Cloudflare Pages / Netlify)

---

## 🚀 Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) v20.x or newer
- [npm](https://www.npmjs.com/) v10.x or newer

### Installation

```bash
# Clone the repository
git clone https://github.com/Splitpayx/splitpay-docs.git
cd splitpay-docs

# Install dependencies
npm install
```

### Running Locally

```bash
# Start the Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Compile and pre-render all 62 static routes
npm run build

# Start the production server
npm run start
```

---

## 🔒 Source of Truth & Technical Integrity

The documentation platform maintains strict fidelity with the underlying repositories:
- **No Hallucinated Methods**: All contract functions and signatures match [`contracts/splitpay/src/contract.rs`](https://github.com/Splitpayx/splitpay-contracts).
- **Exact Error Codes**: Every error code in the API Reference corresponds to [`contracts/splitpay/src/errors.rs`](https://github.com/Splitpayx/splitpay-contracts).
- **No Legacy Backend References**: Deprecated prototype backends (Node.js/Paystack) are explicitly excluded; SplitPay is purely non-custodial and operates directly with Stellar Horizon and Soroban RPC.

---

## 🤝 Contributing

We welcome contributions from protocol developers and ecosystem contributors. Please review our [Contributing Guidelines](http://splitpaydocs.samkiel.dev/docs/contributing/guidelines) and submit pull requests targeting the `main` branch.

---

## 📄 License

This documentation platform and all related specifications are licensed under the [MIT License](LICENSE).
