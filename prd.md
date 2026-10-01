# SplitPay Documentation PRD

## 1. Objective

Build the official documentation platform for SplitPay.

The documentation must explain the SplitPay protocol, architecture, smart contract, web application, mobile application, SDK, and future API in a clear and technically accurate way.

The documentation is the public technical source of truth for the SplitPay ecosystem.

Primary product:

https://splitpay.samkiel.dev/

---

# 2. Documentation Principles

Documentation must be:

* Accurate
* Concise
* Developer-friendly
* Easy to navigate
* Version-aware
* Searchable
* Example-driven
* Honest about limitations

Never document functionality that does not exist.

Do not invent contract methods, APIs, SDK functions, environment variables, or product capabilities.

Documentation must reflect the actual implementation.

---

# 3. Documentation Structure

The documentation should be organized approximately as:

```text
Introduction
│
├── Overview
├── What is SplitPay?
├── How SplitPay Works
└── Architecture

Getting Started
│
├── Quick Start
├── Requirements
├── Wallet Setup
├── Testnet Setup
└── First Payment

Concepts
│
├── Pools
├── Members
├── Shares
├── Payments
├── Settlement
├── Distributions
└── Transactions

Protocol
│
├── Contract Overview
├── Contract Architecture
├── Contract Methods
├── Data Structures
├── Authorization
├── Settlement Logic
├── Share Calculation
├── Remainder Handling
└── Security Model

Web
│
├── Overview
├── Setup
├── Environment Variables
├── Development
├── Stellar Integration
└── Deployment

Mobile
│
├── Overview
├── Setup
├── Wallet Integration
├── Development
└── Deployment

SDK
│
├── Overview
├── Installation
├── Configuration
├── API Reference
└── Examples

API
│
├── Overview
├── Authentication
├── Endpoints
└── Examples

Guides
│
├── Create a Pool
├── Configure Splits
├── Create a Payment
├── Settle a Payment
├── Read Contract State
└── Verify Transactions

Reference
│
├── Contract Reference
├── Types
├── Errors
├── Networks
└── Environment Variables

Contributing
│
├── Development Setup
├── Repository Structure
├── Code Standards
├── Testing
├── Pull Requests
└── Security

FAQ
```

Sections should only be created when the underlying functionality exists.

---

# 4. Source of Truth

The documentation repository must maintain a clear relationship with the actual implementations.

Primary sources:

```text
splitpay-contract
splitpay-web
splitpay-mobile
splitpay-sdk
splitpay-api
```

When documenting contract functionality, inspect the actual Rust contract.

When documenting web functionality, inspect the actual Next.js application.

When documenting mobile functionality, inspect the actual React Native application.

When documenting SDK functionality, inspect the actual SDK.

Never rely on assumptions from old documentation when the implementation has changed.

---

# 5. Stellar

SplitPay is built on Stellar and Soroban.

Documentation should explain:

* Stellar basics relevant to SplitPay
* Soroban
* Stellar assets
* Contract interaction
* Wallet signing
* RPC
* Testnet
* Mainnet considerations
* Transaction lifecycle

Link to official Stellar documentation where appropriate.

Do not duplicate large sections of Stellar's documentation unnecessarily.

Explain only what developers need to understand SplitPay.

---

# 6. SplitPay Architecture

Provide a clear architecture diagram:

```text
                 Stellar Network
                       │
              SplitPay Contract
                       │
          ┌────────────┼────────────┐
          │            │            │
     splitpay-web  splitpay-mobile  splitpay-sdk
          │            │            │
          └────────────┼────────────┘
                       │
                 splitpay-api
                where required
```

The exact architecture must reflect the current implementation.

Explain:

* On-chain state
* Off-chain metadata
* Contract responsibilities
* Client responsibilities
* Wallet responsibilities
* Optional backend/indexing responsibilities

---

# 7. Contract Documentation

Document the actual SplitPay Soroban contract.

Current contract concepts include:

* Pools
* Members
* Shares
* Payments
* Distributions
* Pool status
* Authorization
* Settlement

Document every public method with:

* Purpose
* Parameters
* Return value
* Authorization requirements
* State changes
* Errors
* Example usage

Current known methods:

```text
initialize
create_pool
add_member
remove_member
update_member_share
set_pool_status
get_pool
get_member
get_pool_members
create_payment
settle_payment
get_payment
get_distribution
get_distributions
```

Verify these against the actual contract before publishing.

---

# 8. Financial Model

Explain the SplitPay financial model clearly.

Document:

```text
10,000 BPS = 100%
```

Example:

```text
60% = 6000 BPS
40% = 4000 BPS
```

Explain integer arithmetic.

Explain deterministic remainder handling.

Explain why financial calculations use integer amounts rather than floating-point values.

Explain that the contract is authoritative for settlement.

---

# 9. Settlement

Document the payment lifecycle:

```text
Create Payment
      ↓
Payment Created
      ↓
Settlement
      ↓
Distribution
      ↓
Payment Settled
```

Explain:

* payer authorization
* asset transfer
* recipient distribution
* snapshot behavior
* settlement immutability
* duplicate settlement protection

Do not claim properties that are not verified in the contract implementation.

---

# 10. Security

Document the security model.

Include:

* Authorization
* Wallet signing
* Contract authorization
* Payment settlement
* Historical distribution immutability
* No private-key custody
* Contract limitations
* Transaction footprint considerations

Clearly distinguish:

```text
Implemented security
```

from:

```text
Recommended operational security
```

Do not claim the contract has been audited unless an actual audit exists.

---

# 11. Testnet

Provide a complete Testnet getting-started guide.

Include:

* Wallet setup
* Testnet assets
* Network configuration
* Contract address
* Environment variables
* Creating a pool
* Creating a payment
* Settlement
* Transaction verification

Contract addresses must be configuration-driven and updated when deployment changes.

Do not hard-code outdated addresses into conceptual documentation.

---

# 12. Web Documentation

Document the `splitpay-web` repository.

Include:

* Requirements
* Installation
* Environment variables
* Development
* Stellar wallet setup
* Contract configuration
* Build
* Deployment
* Architecture

Explain that the web application is a Next.js full-stack application.

Do not document the old Node.js backend architecture.

---

# 13. Mobile Documentation

Document the `splitpay-mobile` repository.

Include:

* Requirements
* Installation
* Development
* iOS setup
* Android setup
* Wallet integration
* Testnet configuration
* Build
* Deployment

The mobile application must use the same SplitPay protocol as the web application.

---

# 14. SDK Documentation

Document `splitpay-sdk` once functionality exists.

Include:

* Installation
* Configuration
* Client initialization
* Pool operations
* Payment operations
* Distribution queries
* Error handling
* Examples

Do not document SDK methods before they actually exist.

---

# 15. API Documentation

`splitpay-api` is optional infrastructure.

Only document it when the repository contains actual API functionality.

Clearly explain whether an endpoint:

* Reads blockchain data
* Provides indexing
* Stores metadata
* Performs application-level operations

The API must never be described as the financial authority if Stellar is the source of truth.

---

# 16. Guides

Guides should be task-oriented.

Examples:

```text
Create your first pool
Add pool members
Configure a 60/40 split
Create a payment
Settle a payment
Inspect a distribution
Read a pool from Soroban
Verify a transaction
Integrate SplitPay into an application
```

Every guide should have:

1. Goal
2. Requirements
3. Steps
4. Expected result
5. Troubleshooting where relevant

---

# 17. Code Examples

Examples must be:

* Small
* Runnable where possible
* Based on real APIs
* Type-safe
* Up to date

Never create fake code examples that reference nonexistent methods.

Use TypeScript examples for web/SDK integration.

Use Rust examples where contract interaction requires it.

---

# 18. Search

Documentation should provide full-text search.

Search should find:

* Concepts
* Contract methods
* Guides
* Errors
* Configuration
* API references

---

# 19. Navigation

Navigation should make the following path obvious:

```text
Understand SplitPay
        ↓
Get Started
        ↓
Build With SplitPay
        ↓
Protocol Reference
        ↓
Integration Reference
```

Developers should be able to reach the contract reference quickly.

---

# 20. Versioning

The documentation architecture should allow future versions.

At minimum distinguish:

```text
Testnet
Mainnet
```

When protocol versions become necessary, support:

```text
v1
v2
...
```

Do not introduce complex versioning infrastructure before it is needed.

---

# 21. Visuals

Use diagrams where they improve understanding.

Important diagrams:

* SplitPay architecture
* Payment lifecycle
* Settlement flow
* Pool/member relationship
* Client-to-contract interaction

Keep diagrams simple and technical.

---

# 22. Responsive Design

The documentation website must work well on:

* Desktop
* Tablet
* Mobile

Code examples must remain usable on narrow screens.

Navigation must work properly on mobile.

---

# 23. SEO and Metadata

Include appropriate:

* Page titles
* Descriptions
* Open Graph metadata
* Favicon
* Sitemap
* Robots configuration

The documentation should be indexable by search engines.

---

# 24. V1 Non-Goals

Do not build:

* Community forum
* Authentication system
* Documentation comments
* Complex CMS
* User accounts
* Analytics dashboard
* AI chatbot
* In-app support system

Keep the documentation platform simple.

---

# 25. Definition of Done

The documentation platform is complete when:

```text
Developer visits docs
        ↓
Understands SplitPay
        ↓
Understands the architecture
        ↓
Sets up Testnet
        ↓
Creates a pool
        ↓
Creates a payment
        ↓
Understands settlement
        ↓
Can read the contract reference
        ↓
Can integrate SplitPay
```

All technical claims must match the actual repositories.

The documentation must not contain obsolete Paystack/backend architecture from the original SplitPay application.
