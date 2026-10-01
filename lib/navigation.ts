// Navigation registry indexing all 12 modules and 58 ecosystem documentation topics
import { DocSection } from "@/types/docs";

export const DOC_SECTIONS: DocSection[] = [
  {
    title: "Introduction",
    slug: "introduction",
    items: [
      {
        title: "Overview",
        slug: "introduction/overview",
        description: "High-level overview of the SplitPay collaborative payment protocol on Stellar.",
        category: "Introduction",
        keywords: ["overview", "protocol", "stellar", "soroban", "intro"]
      },
      {
        title: "What is SplitPay?",
        slug: "introduction/what-is-splitpay",
        description: "Understanding the problem SplitPay solves for agencies, DAOs, teams, and freelancers.",
        category: "Introduction",
        keywords: ["what is splitpay", "problem", "solution", "trustless"]
      },
      {
        title: "How it Works",
        slug: "introduction/how-it-works",
        description: "Step-by-step lifecycle from pool creation to atomic settlement on Soroban.",
        category: "Introduction",
        keywords: ["how it works", "lifecycle", "settlement flow", "steps"]
      },
      {
        title: "Architecture",
        slug: "introduction/architecture",
        description: "System diagram, on-chain vs off-chain responsibilities, and repository boundaries.",
        category: "Introduction",
        keywords: ["architecture", "diagram", "on-chain", "off-chain", "ecosystem"]
      }
    ]
  },
  {
    title: "Getting Started",
    slug: "getting-started",
    items: [
      {
        title: "Quick Start",
        slug: "getting-started/quick-start",
        description: "5-minute guide to setting up your environment, funding an account, and creating a pool.",
        category: "Getting Started",
        keywords: ["quick start", "setup", "tutorial", "first pool"]
      },
      {
        title: "Requirements",
        slug: "getting-started/requirements",
        description: "Prerequisites including Node.js, Rust, Stellar CLI, and Freighter Wallet.",
        category: "Getting Started",
        keywords: ["requirements", "prerequisites", "node", "rust", "stellar-cli"]
      },
      {
        title: "Wallet Setup",
        slug: "getting-started/wallet-setup",
        description: "Setting up Freighter wallet or local dev keypairs for Stellar Testnet.",
        category: "Getting Started",
        keywords: ["wallet", "freighter", "keypair", "friendbot", "secret key"]
      },
      {
        title: "Testnet Setup",
        slug: "getting-started/testnet",
        description: "Configuring Stellar Testnet RPC, Horizon, Friendbot funding, and explorer verification.",
        category: "Getting Started",
        keywords: ["testnet", "soroban-testnet", "rpc", "friendbot", "stellar.expert"]
      },
      {
        title: "First Payment",
        slug: "getting-started/first-payment",
        description: "Executing your first end-to-end payment creation and settlement on Testnet.",
        category: "Getting Started",
        keywords: ["first payment", "settle", "testnet payment", "run through"]
      }
    ]
  },
  {
    title: "Concepts",
    slug: "concepts",
    items: [
      {
        title: "Pools",
        slug: "concepts/pools",
        description: "Rules-based on-chain containers that define payment distribution configurations.",
        category: "Concepts",
        keywords: ["pools", "pool_id", "owner", "asset", "rules"]
      },
      {
        title: "Members",
        slug: "concepts/members",
        description: "Stellar accounts registered in a pool with assigned basis points.",
        category: "Concepts",
        keywords: ["members", "recipients", "address", "shares"]
      },
      {
        title: "Shares (BPS)",
        slug: "concepts/shares",
        description: "Basis points accounting model (10,000 BPS = 100%) and integer mathematics.",
        category: "Concepts",
        keywords: ["shares", "bps", "basis points", "10000", "percentages"]
      },
      {
        title: "Payments",
        slug: "concepts/payments",
        description: "On-chain payment records and atomic settlement states (Pending vs Settled).",
        category: "Concepts",
        keywords: ["payments", "payment_id", "pending", "settled", "amount"]
      },
      {
        title: "Settlement",
        slug: "concepts/settlement",
        description: "Atomic two-step settlement engine guaranteeing simultaneous fund transfer.",
        category: "Concepts",
        keywords: ["settlement", "atomic", "transfer", "soroban token client"]
      },
      {
        title: "Distributions",
        slug: "concepts/distributions",
        description: "Immutable historical records of payouts received by each member per payment.",
        category: "Concepts",
        keywords: ["distributions", "payout", "receipt", "immutable snapshot"]
      },
      {
        title: "Transactions",
        slug: "concepts/transactions",
        description: "Soroban transaction lifecycle, footprint considerations, and ledger confirmation.",
        category: "Concepts",
        keywords: ["transactions", "xdr", "simulation", "hash", "horizon"]
      }
    ]
  },
  {
    title: "Protocol",
    slug: "protocol",
    items: [
      {
        title: "Contract Overview",
        slug: "protocol/contract-overview",
        description: "Detailed architecture of the SplitPay Soroban smart contract (v22).",
        category: "Protocol",
        keywords: ["contract overview", "soroban", "rust", "smart contract"]
      },
      {
        title: "Contract Methods",
        slug: "protocol/methods",
        description: "Exhaustive reference of all 14 public methods implemented in the contract.",
        category: "Protocol",
        keywords: ["methods", "create_pool", "add_member", "settle_payment", "get_pool"]
      },
      {
        title: "Data Structures",
        slug: "protocol/data-structures",
        description: "Soroban contract types: Pool, Member, Payment, Distribution, and Enums.",
        category: "Protocol",
        keywords: ["data structures", "types", "pool struct", "payment struct", "enums"]
      },
      {
        title: "Authorization",
        slug: "protocol/authorization",
        description: "Detailed breakdown of require_auth checks and administrative privileges.",
        category: "Protocol",
        keywords: ["authorization", "require_auth", "security", "admin", "owner"]
      },
      {
        title: "Settlement Logic",
        slug: "protocol/settlement",
        description: "Atomic execution flow, validation checks, and SEP-41 token interactions.",
        category: "Protocol",
        keywords: ["settlement logic", "atomic execution", "sep-41", "token client"]
      },
      {
        title: "Share Calculation",
        slug: "protocol/share-calculation",
        description: "Formula, integer arithmetic constraints, and strict overflow protection.",
        category: "Protocol",
        keywords: ["share calculation", "integer math", "bps", "checked_mul", "checked_div"]
      },
      {
        title: "Remainder Handling",
        slug: "protocol/remainder-handling",
        description: "Deterministic zero-loss policy awarding remainder stroops to index 0.",
        category: "Protocol",
        keywords: ["remainder handling", "rounding", "stroops", "zero loss", "member 0"]
      },
      {
        title: "Security Model",
        slug: "protocol/security",
        description: "Formal invariants, audit status, non-custodial assurances, and threat vector analysis.",
        category: "Protocol",
        keywords: ["security", "invariants", "non-custodial", "audit status"]
      }
    ]
  },
  {
    title: "Web Application",
    slug: "web",
    items: [
      {
        title: "Overview",
        slug: "web/overview",
        description: "Next.js 16 full-stack decentralized web interface for SplitPay.",
        category: "Web",
        keywords: ["web overview", "nextjs", "react 19", "tailwind", "dapp"]
      },
      {
        title: "Setup & Installation",
        slug: "web/setup",
        description: "Cloning, installing dependencies, and running the development server.",
        category: "Web",
        keywords: ["web setup", "installation", "npm install", "run dev"]
      },
      {
        title: "Environment Variables",
        slug: "web/environment",
        description: "Configuring NEXT_PUBLIC_STELLAR_NETWORK, RPC URLs, and Contract IDs.",
        category: "Web",
        keywords: ["environment variables", ".env.local", "contract id", "rpc url"]
      },
      {
        title: "Development & Routing",
        slug: "web/development",
        description: "App Router architecture, pages (/pools, /payments, /wallet), and component patterns.",
        category: "Web",
        keywords: ["web development", "app router", "routes", "dashboard", "pools page"]
      },
      {
        title: "Production Deployment",
        slug: "web/deployment",
        description: "Building production bundle with Turbopack and deploying to Vercel/Cloudflare.",
        category: "Web",
        keywords: ["web deployment", "production build", "vercel", "next build"]
      }
    ]
  },
  {
    title: "Mobile Application",
    slug: "mobile",
    items: [
      {
        title: "Overview",
        slug: "mobile/overview",
        description: "Status and architecture plan for the React Native mobile application.",
        category: "Mobile",
        keywords: ["mobile overview", "react native", "status", "scaffolding"]
      },
      {
        title: "Setup & Prerequisites",
        slug: "mobile/setup",
        description: "Expected environment setup, Node, React Native CLI, and mobile dependencies.",
        category: "Mobile",
        keywords: ["mobile setup", "react native cli", "android sdk", "xcode"]
      },
      {
        title: "Development Plan",
        slug: "mobile/development",
        description: "Phased roadmap for mobile wallet connection and contract invocation parity.",
        category: "Mobile",
        keywords: ["mobile development", "roadmap", "walletconnect", "stellar"]
      },
      {
        title: "Deployment Plan",
        slug: "mobile/deployment",
        description: "Release strategy for iOS TestFlight and Android Play Store internal testing.",
        category: "Mobile",
        keywords: ["mobile deployment", "testflight", "play store", "release"]
      }
    ]
  },
  {
    title: "SDK",
    slug: "sdk",
    items: [
      {
        title: "Overview & Status",
        slug: "sdk/overview",
        description: "Current TypeScript client implementation and standalone SDK roadmap.",
        category: "SDK",
        keywords: ["sdk overview", "typescript", "splitpay-sdk", "status"]
      },
      {
        title: "Installation",
        slug: "sdk/installation",
        description: "Installing the SplitPay client modules and Stellar SDK peer dependencies.",
        category: "SDK",
        keywords: ["sdk installation", "npm install", "@stellar/stellar-sdk"]
      },
      {
        title: "Configuration",
        slug: "sdk/configuration",
        description: "Initializing SplitPayContractClient with RPC endpoints and network passphrases.",
        category: "SDK",
        keywords: ["sdk configuration", "client init", "network passphrase", "rpc"]
      },
      {
        title: "API Reference",
        slug: "sdk/api-reference",
        description: "Methods of SplitPayContractClient: simulation, preparation, and submission.",
        category: "SDK",
        keywords: ["sdk api reference", "simulateCall", "prepareCreatePool", "submitSignedTx"]
      },
      {
        title: "Examples",
        slug: "sdk/examples",
        description: "Working code recipes for creating pools, managing members, and settling payments.",
        category: "SDK",
        keywords: ["sdk examples", "code recipe", "typescript example"]
      }
    ]
  },
  {
    title: "API Infrastructure",
    slug: "api",
    items: [
      {
        title: "Overview & Status",
        slug: "api/overview",
        description: "Off-chain indexing architecture, scope boundaries, and implementation status.",
        category: "API",
        keywords: ["api overview", "indexing", "off-chain", "status"]
      },
      {
        title: "Planned Endpoints",
        slug: "api/endpoints",
        description: "Specification for upcoming metadata, indexing, and webhook endpoints.",
        category: "API",
        keywords: ["api endpoints", "indexing api", "rest", "webhooks"]
      },
      {
        title: "Integration Examples",
        slug: "api/examples",
        description: "Consuming off-chain indexed data alongside authoritative on-chain contract state.",
        category: "API",
        keywords: ["api examples", "querying", "metadata"]
      }
    ]
  },
  {
    title: "Guides",
    slug: "guides",
    items: [
      {
        title: "Create a Pool",
        slug: "guides/create-a-pool",
        description: "Walkthrough of deploying a new payment pool via web UI or CLI.",
        category: "Guides",
        keywords: ["guide create pool", "step by step", "pool creation"]
      },
      {
        title: "Configure Splits",
        slug: "guides/configure-splits",
        description: "Setting up a 60/40 or custom multi-recipient allocation totaling 10,000 BPS.",
        category: "Guides",
        keywords: ["guide configure splits", "60/40", "bps configuration", "shares"]
      },
      {
        title: "Create a Payment",
        slug: "guides/create-a-payment",
        description: "Initiating a pending payment record on-chain for a configured pool.",
        category: "Guides",
        keywords: ["guide create payment", "pending payment", "deposit"]
      },
      {
        title: "Settle a Payment",
        slug: "guides/settle-a-payment",
        description: "Triggering atomic settlement to disburse funds to all pool members.",
        category: "Guides",
        keywords: ["guide settle payment", "atomic distribution", "settlement"]
      },
      {
        title: "Verify a Transaction",
        slug: "guides/verify-a-transaction",
        description: "Inspecting contract events and token transfers on Stellar Expert Explorer.",
        category: "Guides",
        keywords: ["guide verify transaction", "stellar expert", "explorer", "events"]
      },
      {
        title: "Read Contract State",
        slug: "guides/read-contract-state",
        description: "Querying pools, member allocations, and settled payments via Stellar CLI and SDK.",
        category: "Guides",
        keywords: ["guide read state", "stellar contract invoke", "read-only"]
      }
    ]
  },
  {
    title: "Reference",
    slug: "reference",
    items: [
      {
        title: "Contract Reference",
        slug: "reference/contract",
        description: "Complete signature, parameter, and return specification of the contract interface.",
        category: "Reference",
        keywords: ["contract reference", "soroban methods", "signatures"]
      },
      {
        title: "Types Reference",
        slug: "reference/types",
        description: "Complete Rust and TypeScript type mappings for all contract structures.",
        category: "Reference",
        keywords: ["types reference", "rust types", "typescript types", "mappings"]
      },
      {
        title: "Errors Reference",
        slug: "reference/errors",
        description: "Numerical error codes (1-17), error symbols, causes, and recommended solutions.",
        category: "Reference",
        keywords: ["errors reference", "error codes", "AlreadyInitialized", "InvalidTotalShares"]
      },
      {
        title: "Networks",
        slug: "reference/networks",
        description: "RPC endpoints, network passphrases, Horizon URLs, and official asset contracts.",
        category: "Reference",
        keywords: ["networks", "testnet", "mainnet", "horizon", "rpc endpoints"]
      },
      {
        title: "Environment Variables",
        slug: "reference/environment-variables",
        description: "Comprehensive catalog of all environment flags across the SplitPay ecosystem.",
        category: "Reference",
        keywords: ["environment variables", ".env", "NEXT_PUBLIC_", "config"]
      }
    ]
  },
  {
    title: "Contributing",
    slug: "contributing",
    items: [
      {
        title: "Development Setup",
        slug: "contributing/development",
        description: "Setting up a full local developer workstation across all SplitPay repositories.",
        category: "Contributing",
        keywords: ["contributing development", "local setup", "git clone"]
      },
      {
        title: "Repository Structure",
        slug: "contributing/repository-structure",
        description: "Guide to the Splitpayx GitHub organization and codebase boundaries.",
        category: "Contributing",
        keywords: ["repository structure", "Splitpayx", "codebases", "monorepo vs polyrepo"]
      },
      {
        title: "Testing Standards",
        slug: "contributing/testing",
        description: "Running Vitest and Cargo test suites, testing invariants and error conditions.",
        category: "Contributing",
        keywords: ["testing standards", "cargo test", "vitest", "coverage"]
      },
      {
        title: "Pull Requests",
        slug: "contributing/pull-requests",
        description: "Branching model, commit conventions, linting rules, and review process.",
        category: "Contributing",
        keywords: ["pull requests", "github workflow", "commit conventions"]
      },
      {
        title: "Security Guidelines",
        slug: "contributing/security",
        description: "Reporting vulnerabilities, invariant compliance, and safe cryptographic practices.",
        category: "Contributing",
        keywords: ["security guidelines", "responsible disclosure", "vulnerabilities"]
      }
    ]
  },
  {
    title: "FAQ",
    slug: "faq",
    items: [
      {
        title: "Frequently Asked Questions",
        slug: "faq",
        description: "Answers to common questions about fees, assets, settlement, and compatibility.",
        category: "FAQ",
        keywords: ["faq", "frequently asked questions", "fees", "assets", "gas"]
      }
    ]
  }
];

// Helper to flatten pages for prev/next and search indexing
export const ALL_DOC_PAGES: { title: string; slug: string; description: string; category: string; keywords?: string[] }[] =
  DOC_SECTIONS.flatMap(s => s.items);

export function getPageBySlug(slug: string) {
  const index = ALL_DOC_PAGES.findIndex(p => p.slug === slug);
  if (index === -1) return null;
  const page = ALL_DOC_PAGES[index];
  const prev = index > 0 ? ALL_DOC_PAGES[index - 1] : undefined;
  const next = index < ALL_DOC_PAGES.length - 1 ? ALL_DOC_PAGES[index + 1] : undefined;
  return { ...page, prev, next };
}
