// Core protocol concepts: basis points, atomic settlement
import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { Callout } from "@/components/Callout";
import { BpsCalculator } from "@/components/BpsCalculator";
import { TocItem } from "@/types/docs";

export const conceptsDocs: Record<
  string,
  { content: React.ReactNode; toc: TocItem[] }
> = {
  "concepts/pools": {
    toc: [
      { id: "what-is-a-pool", text: "What is a Pool?", level: 2 },
      { id: "pool-data-structure", text: "On-Chain Pool Data Structure", level: 2 },
      { id: "pool-lifecycle", text: "Pool Lifecycle & Statuses", level: 2 },
      { id: "pool-ownership", text: "Pool Ownership & Administration", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          A <strong>Pool</strong> is the fundamental organizational primitive in SplitPay. It represents a persistent set of rules for routing and dividing incoming payments.
        </p>

        <Callout type="info" title="Pools are Rule Engines, Not Bank Accounts">
          A SplitPay pool is not a custodial bank account or vault. It does not hold pooled balances. Instead, it is an on-chain configuration contract that routes incoming funds immediately to recipient wallets upon settlement.
        </Callout>

        <h2 id="what-is-a-pool" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          What is a Pool?
        </h2>
        <p className="text-[var(--text-secondary)]">
          Each pool has a unique numerical identifier (<code className="text-xs">pool_id: u64</code>), a designated owner address, an accepted Stellar asset address (such as native XLM SAC or USDC SAC), an operational status, and a list of registered members.
        </p>

        <h2 id="pool-data-structure" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          On-Chain Pool Data Structure
        </h2>
        <p className="text-[var(--text-secondary)]">
          In the Soroban smart contract, pools are defined as:
        </p>
        <CodeBlock
          language="rust"
          filename="contracts/splitpay/src/types.rs"
          code={`#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Pool {
    pub id: u64,
    pub owner: Address,
    pub asset: Address,
    pub status: PoolStatus,
    pub created_at: u64,
}`}
        />

        <h2 id="pool-lifecycle" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Pool Lifecycle & Statuses
        </h2>
        <p className="text-[var(--text-secondary)]">
          A pool exists in one of two operational states governed by the <code className="text-xs">PoolStatus</code> enum:
        </p>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1">
          <li><strong>Active (1):</strong> The pool can configure members, accept pending payment registrations, and execute atomic settlements.</li>
          <li><strong>Inactive (2):</strong> The pool is paused by the owner. It cannot accept new payments or settle pending ones until reactivated.</li>
        </ul>

        <h2 id="pool-ownership" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Pool Ownership & Administration
        </h2>
        <p className="text-[var(--text-secondary)]">
          Only the designated <code className="text-xs">owner</code> address can add members, remove members, update shares, or change the pool&apos;s status. Any unauthorized attempt to mutate pool configuration results in <code className="text-xs">Error::Unauthorized</code>.
        </p>
      </div>
    ),
  },

  "concepts/members": {
    toc: [
      { id: "member-definition", text: "Member Definition", level: 2 },
      { id: "member-data-structure", text: "On-Chain Member Data Structure", level: 2 },
      { id: "member-constraints", text: "Member Constraints & Integrity", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          A <strong>Member</strong> is an active Stellar address registered within a pool to receive a designated percentage allocation from all settled payments.
        </p>

        <h2 id="member-definition" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Member Definition
        </h2>
        <p className="text-[var(--text-secondary)]">
          Members are added by the pool owner via <code className="text-xs">add_member</code>. A pool must have at least one member before accepting payments, and all members must have a non-zero share specified in basis points.
        </p>

        <h2 id="member-data-structure" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          On-Chain Member Data Structure
        </h2>
        <CodeBlock
          language="rust"
          filename="contracts/splitpay/src/types.rs"
          code={`#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Member {
    pub pool_id: u64,
    pub address: Address,
    pub share_bps: u32,
}`}
        />

        <h2 id="member-constraints" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Member Constraints & Integrity
        </h2>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1.5">
          <li><strong>No Duplicate Addresses:</strong> A single Stellar address cannot be added more than once to the same pool. Attempts result in <code className="text-xs">Error::MemberAlreadyExists</code>.</li>
          <li><strong>Non-Zero Shares:</strong> A member&apos;s share must be strictly greater than 0 and less than or equal to 10,000 BPS (<code className="text-xs">Error::InvalidShare</code>).</li>
          <li><strong>Total Cap:</strong> Adding or updating a member cannot cause the cumulative shares of the pool to exceed 10,000 BPS (<code className="text-xs">Error::InvalidTotalShares</code>).</li>
        </ul>
      </div>
    ),
  },

  "concepts/shares": {
    toc: [
      { id: "what-are-basis-points", text: "What are Basis Points (BPS)?", level: 2 },
      { id: "why-avoid-floating-point", text: "Why Floating-Point Math is Prohibited", level: 2 },
      { id: "interactive-calculator", text: "Interactive Basis Points Calculator", level: 2 },
      { id: "math-specification", text: "Mathematical Specification", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          SplitPay uses a strict <strong>basis points (BPS)</strong> financial model to represent fractional ownership and payment allocations without floating-point rounding errors.
        </p>

        <h2 id="what-are-basis-points" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          What are Basis Points (BPS)?
        </h2>
        <p className="text-[var(--text-secondary)]">
          One basis point equals one-hundredth of a percent (0.01%). Consequently:
        </p>
        <div className="my-4 p-4 rounded-xl border border-[var(--border-default)] bg-[var(--code-bg)] font-mono text-xs text-slate-300">
          <div>10,000 BPS = 100.00% (Total Pool Allocation)</div>
          <div> 6,000 BPS =  60.00%</div>
          <div> 4,000 BPS =  40.00%</div>
          <div> 2,500 BPS =  25.00%</div>
          <div>    50 BPS =   0.50%</div>
          <div>     1 BPS =   0.01%</div>
        </div>

        <h2 id="why-avoid-floating-point" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Why Floating-Point Math is Prohibited
        </h2>
        <p className="text-[var(--text-secondary)]">
          IEEE-754 floating-point calculations (e.g. <code className="text-xs">0.1 + 0.2 = 0.30000000000000004</code>) are non-deterministic across different computer architectures and lead to fractional token loss. In financial smart contracts, non-determinism can break blockchain consensus.
        </p>
        <p className="text-[var(--text-secondary)]">
          SplitPay performs all arithmetic in <strong>checked 128-bit integers (<code className="text-xs">i128</code>)</strong> natively on the Soroban runtime.
        </p>

        <h2 id="interactive-calculator" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Interactive Basis Points Calculator
        </h2>
        <p className="text-xs text-[var(--text-secondary)]">
          Test different payment quantities and shares below to see how SplitPay calculates integer divisions and automatically allocates remainder stroops:
        </p>
        <BpsCalculator />

        <h2 id="math-specification" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Mathematical Specification
        </h2>
        <p className="text-[var(--text-secondary)]">
          For any payment amount <code className="text-xs">A</code> and member share <code className="text-xs">S</code> (in BPS):
        </p>
        <div className="my-3 p-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-default)] font-mono text-xs text-emerald-400">
          allocation_raw = (A × S) / 10,000
        </div>
        <p className="text-[var(--text-secondary)]">
          To prevent fractional truncation loss, any difference between the sum of raw allocations and the gross payment amount is deterministically added to the first member (<code className="text-xs">allocations[0]</code>).
        </p>
      </div>
    ),
  },

  "concepts/payments": {
    toc: [
      { id: "payment-model", text: "Payment Lifecycle & Statuses", level: 2 },
      { id: "payment-data-structure", text: "On-Chain Payment Data Structure", level: 2 },
      { id: "immutability", text: "Historical Immutability Guarantee", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          A <strong>Payment</strong> represents an intent to distribute a specific amount of a Stellar asset to a target pool.
        </p>

        <h2 id="payment-model" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Payment Lifecycle & Statuses
        </h2>
        <p className="text-[var(--text-secondary)]">
          Payments transition through two statuses governed by <code className="text-xs">PaymentStatus</code>:
        </p>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1">
          <li><strong>Pending (1):</strong> Created via <code className="text-xs">create_payment</code>. The record exists on-chain awaiting settlement.</li>
          <li><strong>Settled (2):</strong> Finalized via <code className="text-xs">settle_payment</code>. Assets have been transferred and distributions permanently recorded.</li>
        </ul>

        <h2 id="payment-data-structure" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          On-Chain Payment Data Structure
        </h2>
        <CodeBlock
          language="rust"
          filename="contracts/splitpay/src/types.rs"
          code={`#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Payment {
    pub id: u64,
    pub pool_id: u64,
    pub payer: Address,
    pub asset: Address,
    pub amount: i128,
    pub status: PaymentStatus,
    pub created_at: u64,
}`}
        />

        <h2 id="immutability" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Historical Immutability Guarantee
        </h2>
        <Callout type="important" title="Settled Payments are Final">
          A payment marked <code className="text-xs">Settled</code> cannot be settled a second time (<code className="text-xs">Error::PaymentAlreadySettled</code>). Its historical distribution records cannot be overwritten, modified, or deleted.
        </Callout>
      </div>
    ),
  },

  "concepts/settlement": {
    toc: [
      { id: "atomic-execution", text: "Atomic Settlement Mechanism", level: 2 },
      { id: "settlement-steps", text: "Settlement Engine Steps", level: 2 },
      { id: "failure-handling", text: "Reversion & Failure Handling", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Settlement is the atomic heart of SplitPay. In a single blockchain transaction, client funds are transferred into the contract and disbursed to each member in the exact proportions configured.
        </p>

        <h2 id="atomic-execution" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Atomic Settlement Mechanism
        </h2>
        <p className="text-[var(--text-secondary)]">
          Atomicity means all-or-nothing: either all recipients receive their funds and all distribution receipts are persisted, or the entire transaction reverts and no tokens change hands.
        </p>

        <h2 id="settlement-steps" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Settlement Engine Steps
        </h2>
        <ol className="list-decimal pl-5 text-xs text-[var(--text-secondary)] space-y-2">
          <li><strong>Payer Authorization:</strong> <code className="text-xs">payment.payer.require_auth()</code> ensures only the designated payer (or authorized signer) can release funds.</li>
          <li><strong>Total BPS Validation:</strong> Re-validates that total member shares equal exactly 10,000 BPS at the moment of settlement.</li>
          <li><strong>Integer Split Calculation:</strong> Multiplies gross amount by member BPS and divides by 10,000, adding remainder to member 0.</li>
          <li><strong>Token Inflow:</strong> Invokes <code className="text-xs">token::Client::transfer</code> from payer to contract address.</li>
          <li><strong>Token Outflows:</strong> Dispatches transfers from contract address to each member address.</li>
          <li><strong>Receipt Storage:</strong> Stores individual <code className="text-xs">Distribution</code> structs in persistent contract storage.</li>
          <li><strong>Event Publication:</strong> Emits <code className="text-xs">payment_settled</code> and <code className="text-xs">distribution_created</code> events.</li>
        </ol>

        <h2 id="failure-handling" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Reversion & Failure Handling
        </h2>
        <p className="text-[var(--text-secondary)]">
          If the payer lacks sufficient balance or asset trustlines, or if any transfer fails, the Soroban runtime halts execution and rolls back all ledger footprint changes. Funds are never lost or partially stuck inside the contract.
        </p>
      </div>
    ),
  },

  "concepts/distributions": {
    toc: [
      { id: "what-is-a-distribution", text: "What is a Distribution?", level: 2 },
      { id: "distribution-struct", text: "Distribution Struct", level: 2 },
      { id: "snapshot-behavior", text: "Split Snapshot Behavior", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          A <strong>Distribution</strong> is an on-chain receipt documenting the exact amount and percentage share allocated to an individual member for a specific payment.
        </p>

        <h2 id="what-is-a-distribution" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          What is a Distribution?
        </h2>
        <p className="text-[var(--text-secondary)]">
          Distributions are generated during <code className="text-xs">settle_payment</code>. They provide an undeniable on-chain audit trail for accounting, tax verification, and dispute resolution.
        </p>

        <h2 id="distribution-struct" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Distribution Struct
        </h2>
        <CodeBlock
          language="rust"
          filename="contracts/splitpay/src/types.rs"
          code={`#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Distribution {
    pub payment_id: u64,
    pub recipient: Address,
    pub amount: i128,
    pub share_bps: u32,
}`}
        />

        <h2 id="snapshot-behavior" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Split Snapshot Behavior
        </h2>
        <p className="text-[var(--text-secondary)]">
          Suppose Alice and Bob are configured as 60/40 in Pool #1. Payment #1 is settled:
        </p>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1">
          <li>Alice receives 60 XLM (Distribution: payment_id=1, recipient=Alice, amount=60, share_bps=6000)</li>
          <li>Bob receives 40 XLM (Distribution: payment_id=1, recipient=Bob, amount=40, share_bps=4000)</li>
        </ul>
        <p className="text-[var(--text-secondary)]">
          If the pool owner later changes the pool shares to 50/50, Payment #1&apos;s distribution records remain 60/40 forever.
        </p>
      </div>
    ),
  },

  "concepts/transactions": {
    toc: [
      { id: "transaction-lifecycle", text: "Soroban Transaction Lifecycle", level: 2 },
      { id: "footprints-and-auth", text: "Ledger Footprints & Authorization", level: 2 },
      { id: "monitoring-transactions", text: "Monitoring Transactions", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Interactions with the SplitPay smart contract follow the standard Soroban transaction lifecycle on Stellar.
        </p>

        <h2 id="transaction-lifecycle" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Soroban Transaction Lifecycle
        </h2>
        <ol className="list-decimal pl-5 text-xs text-[var(--text-secondary)] space-y-2">
          <li><strong>Build:</strong> Client creates a Transaction with a <code className="text-xs">Contract.call(method, ...args)</code> operation.</li>
          <li><strong>Simulate:</strong> Transaction is submitted to Soroban RPC via <code className="text-xs">simulateTransaction</code> to calculate CPU instructions, RAM limits, and read/write footprints.</li>
          <li><strong>Assemble:</strong> The simulation results and required authorizations are assembled into an executable XDR.</li>
          <li><strong>Sign:</strong> The payer or owner signs the assembled XDR via Freighter or private key.</li>
          <li><strong>Broadcast:</strong> Signed XDR is submitted to the network via <code className="text-xs">sendTransaction</code>.</li>
          <li><strong>Confirmation:</strong> Client polls <code className="text-xs">getTransaction</code> until status is <code className="text-xs">SUCCESS</code>.</li>
        </ol>

        <h2 id="footprints-and-auth" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Ledger Footprints & Authorization
        </h2>
        <p className="text-[var(--text-secondary)]">
          Soroban requires explicit state declaration (read/write footprints) before execution to enable parallel transaction processing. Simulation handles this automatically in the SplitPay SDK.
        </p>
      </div>
    ),
  },
};
