// Protocol introduction and architectural principles
import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { Callout } from "@/components/Callout";
import { Layers, ShieldCheck, Zap, ArrowRight, Check } from "lucide-react";
import { TocItem } from "@/types/docs";

export const introductionDocs: Record<
  string,
  { content: React.ReactNode; toc: TocItem[] }
> = {
  "introduction/overview": {
    toc: [
      { id: "what-is-splitpay", text: "What is SplitPay?", level: 2 },
      { id: "why-stellar-soroban", text: "Why Stellar & Soroban?", level: 2 },
      { id: "ecosystem-overview", text: "Ecosystem Overview", level: 2 },
      { id: "core-principles", text: "Core Architectural Principles", level: 2 },
      { id: "next-steps", text: "Next Steps", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          <strong>SplitPay</strong> is an open, trustless, collaborative payment splitting and fund distribution protocol built natively on the <strong>Stellar network</strong> using <strong>Soroban smart contracts</strong>.
        </p>

        <Callout type="important" title="Production Source of Truth">
          The Soroban smart contract is the sole financial authority of the SplitPay protocol. Client applications (such as <code className="text-xs">splitpay-web</code>) and SDKs provide interfaces and off-chain caching, but never determine balances, authorizations, or distribution shares independently.
        </Callout>

        <h2 id="what-is-splitpay" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          What is SplitPay?
        </h2>
        <p className="text-[var(--text-secondary)]">
          SplitPay eliminates trusted financial intermediaries for multi-party groups. Instead of one freelancer, team lead, or agency founder receiving client payments into a private wallet and manually computing and disbursing individual cuts, SplitPay routes incoming funds through an immutable on-chain pool.
        </p>
        <p className="text-[var(--text-secondary)]">
          When a payment is executed, the contract atomically calculates exact proportional disbursements and transfers assets directly to recipient addresses in a single blockchain transaction.
        </p>

        <h2 id="why-stellar-soroban" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Why Stellar & Soroban?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)]">
            <h3 className="font-semibold text-sm text-[var(--text-primary)] mb-1 flex items-center gap-2">
              <Zap className="h-4 w-4 text-[var(--accent)]" /> Sub-Second Finality
            </h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Transactions settle in ~5 seconds with deterministic fees, making split payments practical even for small, frequent payouts.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)]">
            <h3 className="font-semibold text-sm text-[var(--text-primary)] mb-1 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" /> Rust & WASM Safety
            </h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Soroban smart contracts are compiled to WebAssembly from Rust, providing type safety, memory safety, and checked integer arithmetic.
            </p>
          </div>
        </div>

        <h2 id="ecosystem-overview" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Ecosystem Overview
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] my-4">
          <table className="w-full text-left text-xs">
            <thead className="bg-[var(--bg-card)] text-[var(--text-secondary)] border-b border-[var(--border-default)]">
              <tr>
                <th className="p-3">Repository</th>
                <th className="p-3">Technology</th>
                <th className="p-3">Role in Ecosystem</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              <tr>
                <td className="p-3 font-mono text-[var(--accent)] font-semibold">splitpay-contracts</td>
                <td className="p-3 text-[var(--text-secondary)]">Rust / Soroban v22</td>
                <td className="p-3 text-[var(--text-secondary)]">On-chain financial authority, SEP-41 token interactions, immutable distributions</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950/40 text-emerald-400 border border-emerald-500/20">Active (Testnet)</span></td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--accent)] font-semibold">splitpay-web</td>
                <td className="p-3 text-[var(--text-secondary)]">Next.js 16 / React 19</td>
                <td className="p-3 text-[var(--text-secondary)]">Decentralized web application, Freighter wallet signing, pool management</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950/40 text-emerald-400 border border-emerald-500/20">Active</span></td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--accent)] font-semibold">splitpay-mobile</td>
                <td className="p-3 text-[var(--text-secondary)]">React Native</td>
                <td className="p-3 text-[var(--text-secondary)]">Cross-platform mobile client for pool monitoring and on-the-go payment signing</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-[10px] bg-amber-950/40 text-amber-400 border border-amber-500/20">Planning / Scaffolding</span></td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--accent)] font-semibold">splitpay-sdk</td>
                <td className="p-3 text-[var(--text-secondary)]">TypeScript</td>
                <td className="p-3 text-[var(--text-secondary)]">Shared contract invocation library (First-party client inside web, standalone planned)</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-[10px] bg-blue-950/40 text-blue-400 border border-blue-500/20">Client Implemented</span></td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--accent)] font-semibold">splitpay-api</td>
                <td className="p-3 text-[var(--text-secondary)]">Node.js / REST</td>
                <td className="p-3 text-[var(--text-secondary)]">Off-chain indexing, webhook dispatches, and metadata cache</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-[10px] bg-purple-950/40 text-purple-400 border border-purple-500/20">Planned</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="core-principles" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Core Architectural Principles
        </h2>
        <ul className="space-y-3 text-[var(--text-secondary)] list-disc pl-5">
          <li>
            <strong>Financial Truth Lives On-Chain:</strong> All pool definitions, member shares, payments, and settled distributions reside in Soroban contract storage.
          </li>
          <li>
            <strong>Non-Custodial Architecture:</strong> SplitPay does not hold, custody, or bridge private keys. Users sign all invocations via Freighter or local keypairs.
          </li>
          <li>
            <strong>No Custom Token:</strong> SplitPay works directly with standard Stellar assets via the Stellar Asset Contract (SEP-41), including native XLM and fiat stablecoins like USDC.
          </li>
          <li>
            <strong>10,000 Basis Points Precision:</strong> Splits are calculated in integer basis points (where 10,000 BPS equals 100.00%) with a deterministic zero-loss remainder policy.
          </li>
        </ul>

        <h2 id="next-steps" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Next Steps
        </h2>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/docs/getting-started/quick-start"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-xs font-semibold"
          >
            <span>Proceed to Quick Start</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="/docs/protocol/contract-overview"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-default)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-xs font-semibold text-[var(--text-primary)]"
          >
            <span>Read Contract Overview</span>
          </a>
        </div>
      </div>
    ),
  },

  "introduction/what-is-splitpay": {
    toc: [
      { id: "the-problem", text: "The Problem with Traditional Payouts", level: 2 },
      { id: "the-splitpay-solution", text: "The SplitPay Solution", level: 2 },
      { id: "use-cases", text: "Target Use Cases", level: 2 },
      { id: "comparison-table", text: "Comparison: Manual vs SplitPay", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Collaborative projects routinely struggle with a fundamental problem: how to receive collective earnings without placing total trust in a single individual or paying exorbitant fees to centralized intermediaries.
        </p>

        <h2 id="the-problem" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          The Problem with Traditional Payouts
        </h2>
        <p className="text-[var(--text-secondary)]">
          In typical collaborative workflows—such as software consulting agencies, freelance collectives, musical co-creators, or DAO working groups—one person provides their personal or company bank account/wallet address.
        </p>

        <div className="p-4 rounded-xl border border-rose-500/30 bg-rose-950/20 text-xs text-rose-200 space-y-2 my-4">
          <div className="font-semibold text-rose-300">Common Vulnerabilities:</div>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Single Point of Failure:</strong> The middleman can delay transfers, misplace funds, or default on agreements.</li>
            <li><strong>Manual Math Errors:</strong> Calculating percentages manually across varying currency amounts frequently leads to rounding errors.</li>
            <li><strong>Accounting Opacity:</strong> Team members lack verifiable proof of the gross payment amount received from the client.</li>
            <li><strong>Multiple Gas/Transfer Fees:</strong> Funds are transferred once to the middleman, then transferred again in separate transactions to each member.</li>
          </ul>
        </div>

        <h2 id="the-splitpay-solution" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          The SplitPay Solution
        </h2>
        <p className="text-[var(--text-secondary)]">
          SplitPay transforms collaborative disbursement into an autonomous, verifiable smart contract transaction. Clients pay directly into a pool identifier, and the contract dispatches the exact agreed allocations to all participants in a single atomic transaction.
        </p>

        <div className="my-6 p-4 rounded-xl border border-[var(--border-default)] bg-[var(--code-bg)] font-mono text-xs text-slate-300">
          <div className="text-[var(--accent)] font-semibold mb-2"># Payment Routing Flow</div>
          <div>Payer (Client)</div>
          <div className="pl-4 text-[var(--text-muted)]">│</div>
          <div className="pl-4 text-[var(--text-muted)]">▼ [Single Transaction: settle_payment]</div>
          <div>SplitPay Soroban Contract</div>
          <div className="pl-4 text-[var(--text-muted)]">├── Transfers total gross amount from Payer</div>
          <div className="pl-4 text-[var(--text-muted)]">├── Snapshots active 10,000 BPS member split</div>
          <div className="pl-4 text-[var(--text-muted)]">├── Atomically transfers Share A to Member 1</div>
          <div className="pl-4 text-[var(--text-muted)]">├── Atomically transfers Share B to Member 2</div>
          <div className="pl-4 text-[var(--text-muted)]">└── Persists immutable distribution receipt on-chain</div>
        </div>

        <h2 id="use-cases" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Target Use Cases
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)]">
            <h3 className="font-semibold text-sm text-[var(--text-primary)] mb-1">Freelance Teams & Agencies</h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Designers, developers, and project managers can establish a client pool (e.g. 50% dev, 30% design, 20% PM) and receive automated payouts upon client invoice approval.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)]">
            <h3 className="font-semibold text-sm text-[var(--text-primary)] mb-1">DAO Working Groups</h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Decentralized teams executing project bounties receive direct disbursements from treasury grants without multi-sig overhead for each individual contributor.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)]">
            <h3 className="font-semibold text-sm text-[var(--text-primary)] mb-1">Content & IP Royalties</h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Co-authors, podcast co-hosts, and digital content collaborators receive programmatic splits from sponsor payments in USDC or XLM.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)]">
            <h3 className="font-semibold text-sm text-[var(--text-primary)] mb-1">Vendor Revenue Sharing</h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Affiliate partners and platform operators can settle joint customer payments with transparent, provable on-chain settlement receipts.
            </p>
          </div>
        </div>

        <h2 id="comparison-table" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Comparison: Manual vs SplitPay
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] my-4">
          <table className="w-full text-left text-xs">
            <thead className="bg-[var(--bg-card)] text-[var(--text-secondary)] border-b border-[var(--border-default)]">
              <tr>
                <th className="p-3">Dimension</th>
                <th className="p-3">Manual / Intermediary</th>
                <th className="p-3 text-[var(--accent)]">SplitPay Protocol</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              <tr>
                <td className="p-3 font-medium text-[var(--text-primary)]">Custody</td>
                <td className="p-3 text-rose-300">Middleman controls 100% of funds</td>
                <td className="p-3 text-emerald-300">Non-custodial; direct to member wallets</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[var(--text-primary)]">Execution Speed</td>
                <td className="p-3 text-[var(--text-secondary)]">Days (bank delays, manual transfers)</td>
                <td className="p-3 text-emerald-300">~5 seconds (single Soroban tx)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[var(--text-primary)]">Math Verification</td>
                <td className="p-3 text-[var(--text-secondary)]">Spreadsheets, error-prone</td>
                <td className="p-3 text-emerald-300">Checked 10,000 BPS integer math in Rust</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[var(--text-primary)]">Audit Trail</td>
                <td className="p-3 text-[var(--text-secondary)]">Private screenshots, disputed invoices</td>
                <td className="p-3 text-emerald-300">Immutable ledger records & Soroban events</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },

  "introduction/how-it-works": {
    toc: [
      { id: "lifecycle-overview", text: "Protocol Lifecycle Overview", level: 2 },
      { id: "step-1-pool-creation", text: "Step 1: Pool Creation", level: 2 },
      { id: "step-2-member-configuration", text: "Step 2: Member & Share Configuration", level: 2 },
      { id: "step-3-payment-creation", text: "Step 3: Payment Creation", level: 2 },
      { id: "step-4-atomic-settlement", text: "Step 4: Atomic Settlement & Snapshot", level: 2 },
      { id: "step-5-querying-distribution", text: "Step 5: Querying Historical Distributions", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          The SplitPay protocol follows a deterministic lifecycle designed to guarantee that no payment can be settled unless the pool configuration is strictly valid.
        </p>

        <h2 id="lifecycle-overview" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Protocol Lifecycle Overview
        </h2>
        <div className="my-4 p-4 rounded-xl border border-[var(--border-default)] bg-[var(--code-bg)] font-mono text-xs text-slate-300">
          <div className="flex items-center gap-2 text-[var(--accent)] font-semibold mb-2">
            <span>[1] CREATE POOL</span> → <span>[2] ADD MEMBERS (10,000 BPS)</span> → <span>[3] CREATE PAYMENT</span> → <span>[4] SETTLE PAYMENT</span> → <span>[5] DISTRIBUTED</span>
          </div>
          <div className="text-[var(--text-muted)] text-[11px] space-y-1">
            <div>• CREATE: Allocates on-chain pool record with owner address and asset contract.</div>
            <div>• CONFIGURE: Adds recipients and percentage shares until sum equals exactly 10,000 BPS.</div>
            <div>• PAYMENT: Payer registers payment record with amount &gt; 0.</div>
            <div>• SETTLE: Atomically transfers funds and disburses shares directly to member addresses.</div>
            <div>• FINALIZED: Payment marked Settled; historical distributions become permanently immutable.</div>
          </div>
        </div>

        <h2 id="step-1-pool-creation" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Step 1: Pool Creation
        </h2>
        <p className="text-[var(--text-secondary)]">
          The creator calls <code className="text-xs">create_pool(pool_id, owner, asset)</code>. The contract verifies that the caller authorized the transaction and that the pool ID does not already exist. The pool is initialized in the <code className="text-xs">Active</code> status with an empty member roster.
        </p>
        <CodeBlock
          language="rust"
          filename="contracts/splitpay/src/contract.rs"
          code={`let pool = Pool {
    id: pool_id,
    owner: owner.clone(),
    asset: asset.clone(),
    status: PoolStatus::Active,
    created_at: env.ledger().timestamp(),
};
set_pool(&env, &pool);
events::pool_created(&env, pool_id, &owner, &asset, created_at);`}
        />

        <h2 id="step-2-member-configuration" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Step 2: Member & Share Configuration
        </h2>
        <p className="text-[var(--text-secondary)]">
          The pool owner registers member addresses and their percentage shares in basis points using <code className="text-xs">add_member(pool_id, address, share_bps)</code>.
        </p>
        <Callout type="warning" title="10,000 Basis Points Constraint">
          The contract strictly enforces that the sum of all members&apos; basis points cannot exceed 10,000 during addition, and must equal <strong>exactly 10,000 BPS</strong> before any payment can be accepted or settled.
        </Callout>

        <h2 id="step-3-payment-creation" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Step 3: Payment Creation
        </h2>
        <p className="text-[var(--text-secondary)]">
          A payer initiates a payment targeting the pool using <code className="text-xs">create_payment(payment_id, pool_id, payer, amount)</code>. The contract asserts:
        </p>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1">
          <li>Payer authorized the call (<code className="text-xs">payer.require_auth()</code>).</li>
          <li>Amount is strictly greater than zero (<code className="text-xs">amount &gt; 0</code>).</li>
          <li>The pool status is <code className="text-xs">PoolStatus::Active</code>.</li>
          <li>Total configured member shares currently equal 10,000 BPS.</li>
        </ul>

        <h2 id="step-4-atomic-settlement" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Step 4: Atomic Settlement & Snapshot
        </h2>
        <p className="text-[var(--text-secondary)]">
          Calling <code className="text-xs">settle_payment(payment_id)</code> triggers the settlement engine:
        </p>
        <ol className="list-decimal pl-5 text-xs text-[var(--text-secondary)] space-y-2">
          <li>Validates that the payment has not already been settled (<code className="text-xs">Error::PaymentAlreadySettled</code>).</li>
          <li>Snapshots the member shares at that exact ledger timestamp.</li>
          <li>Computes integer allocations using checked arithmetic and allocates any remainder stroops to member index 0.</li>
          <li>Invokes the Stellar Asset Contract to pull total funds from the payer to the contract address.</li>
          <li>Dispatches individual token transfers to each member address.</li>
          <li>Persists a <code className="text-xs">Distribution</code> record for each recipient and marks the payment <code className="text-xs">Settled</code>.</li>
        </ol>

        <h2 id="step-5-querying-distribution" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Step 5: Querying Historical Distributions
        </h2>
        <p className="text-[var(--text-secondary)]">
          Anyone can query historical distributions using <code className="text-xs">get_distributions(payment_id)</code> or inspect individual allocations with <code className="text-xs">get_distribution(payment_id, recipient)</code>. Even if the pool configuration is modified later, historical distributions remain completely unchanged.
        </p>
      </div>
    ),
  },

  "introduction/architecture": {
    toc: [
      { id: "system-architecture-diagram", text: "System Architecture Diagram", level: 2 },
      { id: "layer-responsibilities", text: "Layer Responsibilities", level: 2 },
      { id: "on-chain-vs-off-chain", text: "On-Chain vs Off-Chain Boundary", level: 2 },
      { id: "data-flow", text: "End-to-End Data Flow", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          SplitPay adheres to a strict separation of concerns: the blockchain contract is the financial authority, while web and mobile applications act as non-custodial presentation and transaction preparation clients.
        </p>

        <h2 id="system-architecture-diagram" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          System Architecture Diagram
        </h2>
        <div className="my-4 p-5 rounded-2xl border border-[var(--border-default)] bg-[var(--code-bg)] font-mono text-xs text-slate-300 overflow-x-auto">
          <pre className="leading-relaxed">
{`                        Stellar Network (Testnet)
                                   │
                           SplitPay Contract
                       (Soroban WASM in Rust)
                                   │
              ┌────────────────────┼────────────────────┐
              │                    │                    │
        splitpay-web        splitpay-mobile        splitpay-sdk
      (Next.js 16 dApp)     (React Native)      (TypeScript Client)
              │                    │                    │
              └────────────────────┼────────────────────┘
                                   │
                              splitpay-api
                      (Optional Indexing / Metadata)`}
          </pre>
        </div>

        <h2 id="layer-responsibilities" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Layer Responsibilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)]">
            <h3 className="font-semibold text-sm text-[var(--accent)] mb-2 font-mono">
              1. SplitPay Contract (Soroban)
            </h3>
            <ul className="text-xs text-[var(--text-secondary)] space-y-1 list-disc pl-4">
              <li>On-chain pool & member configuration storage</li>
              <li>10,000 BPS validation enforcement</li>
              <li>Atomic token pull & disbursement (SEP-41)</li>
              <li>Deterministic integer remainder handling</li>
              <li>Immutable historical distribution receipts</li>
              <li>Structured event emission</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)]">
            <h3 className="font-semibold text-sm text-cyan-400 mb-2 font-mono">
              2. Web Application (Next.js 16)
            </h3>
            <ul className="text-xs text-[var(--text-secondary)] space-y-1 list-disc pl-4">
              <li>Freighter extension & Dev Keypair wallet integration</li>
              <li>Simulation of contract calls via Horizon / Soroban RPC</li>
              <li>XDR assembly, signing, and submission polling</li>
              <li>Interactive pool creation with live BPS validation</li>
              <li>Transaction status tracking and receipt presentation</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)]">
            <h3 className="font-semibold text-sm text-amber-400 mb-2 font-mono">
              3. Mobile Client (React Native)
            </h3>
            <ul className="text-xs text-[var(--text-secondary)] space-y-1 list-disc pl-4">
              <li>Mobile-optimized pool explorer and balance inspector</li>
              <li>Deep-link wallet signing (WalletConnect / Albedo)</li>
              <li>Shared business rules via common SDK library</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)]">
            <h3 className="font-semibold text-sm text-purple-400 mb-2 font-mono">
              4. API & Indexer (Optional Infrastructure)
            </h3>
            <ul className="text-xs text-[var(--text-secondary)] space-y-1 list-disc pl-4">
              <li>Off-chain metadata (display names, avatars, memos)</li>
              <li>Ingestion and indexing of contract events</li>
              <li>Webhook dispatching for payment settlements</li>
              <li>Fast cached queries without direct ledger reads</li>
            </ul>
          </div>
        </div>

        <h2 id="on-chain-vs-off-chain" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          On-Chain vs Off-Chain Boundary
        </h2>
        <p className="text-[var(--text-secondary)]">
          To maintain high performance and low storage footprints on Stellar, only essential financial and authorization state is stored on-chain:
        </p>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] my-4">
          <table className="w-full text-left text-xs">
            <thead className="bg-[var(--bg-card)] text-[var(--text-secondary)] border-b border-[var(--border-default)]">
              <tr>
                <th className="p-3">On-Chain (Soroban Contract)</th>
                <th className="p-3">Off-Chain (Client / API)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              <tr>
                <td className="p-3 text-emerald-300 font-medium">Pool ID, Owner Address, Asset Address</td>
                <td className="p-3 text-[var(--text-secondary)]">Pool name, description, category tags</td>
              </tr>
              <tr>
                <td className="p-3 text-emerald-300 font-medium">Member Addresses & Basis Points (BPS)</td>
                <td className="p-3 text-[var(--text-secondary)]">Member avatars, nicknames, email notifications</td>
              </tr>
              <tr>
                <td className="p-3 text-emerald-300 font-medium">Payment ID, Gross Amount, Settlement Status</td>
                <td className="p-3 text-[var(--text-secondary)]">Invoice PDFs, project milestone descriptions</td>
              </tr>
              <tr>
                <td className="p-3 text-emerald-300 font-medium">Historical Distributions (Recipient, Amount, BPS)</td>
                <td className="p-3 text-[var(--text-secondary)]">Analytics charts, aggregated accounting exports</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="data-flow" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          End-to-End Data Flow
        </h2>
        <p className="text-[var(--text-secondary)]">
          When an action (such as creating a pool or settling a payment) is performed from <code className="text-xs">splitpay-web</code>:
        </p>
        <ol className="list-decimal pl-5 text-xs text-[var(--text-secondary)] space-y-1.5">
          <li><strong>Form Validation:</strong> Web client validates address formatting and ensures total shares equal 10,000 BPS.</li>
          <li><strong>Transaction Assembly:</strong> Client calls <code className="text-xs">prepareInvocationTx()</code> using the Stellar SDK.</li>
          <li><strong>RPC Simulation:</strong> The transaction is sent to <code className="text-xs">https://soroban-testnet.stellar.org</code> via <code className="text-xs">simulateTransaction</code> to estimate footprints and fees.</li>
          <li><strong>Wallet Signing:</strong> Assembled transaction XDR is signed by the user&apos;s Freighter wallet or local dev keypair.</li>
          <li><strong>Broadcast & Polling:</strong> Signed XDR is broadcast to the network; the web app polls <code className="text-xs">getTransaction</code> until status is <code className="text-xs">SUCCESS</code>.</li>
        </ol>
      </div>
    ),
  },
};
