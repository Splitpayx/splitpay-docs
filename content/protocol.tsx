// Math and rounding specifications
// Protocol event topics and payload schemas
// Error variants and numerical codes
// Storage footprint and expiration ledger settings
// Soroban smart contract architecture and function signatures
import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { Callout } from "@/components/Callout";
import { TocItem } from "@/types/docs";

export const protocolDocs: Record<
  string,
  { content: React.ReactNode; toc: TocItem[] }
> = {
  "protocol/contract-overview": {
    toc: [
      { id: "overview", text: "Overview & Compilation Target", level: 2 },
      { id: "storage-architecture", text: "Storage Architecture", level: 2 },
      { id: "sep41-token-integration", text: "SEP-41 Token Integration", level: 2 },
      { id: "event-system", text: "Structured Event System", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          The SplitPay smart contract (<code className="text-xs">splitpay-contracts</code>) is written in <strong>Rust</strong> targeting the <strong>Soroban v22</strong> smart contract runtime on Stellar.
        </p>

        <h2 id="overview" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Overview & Compilation Target
        </h2>
        <p className="text-[var(--text-secondary)]">
          The contract compiles into a standalone WebAssembly (WASM) bytecode package (<code className="text-xs">target/wasm32-unknown-unknown/release/splitpay.wasm</code>). It has zero external server dependencies and operates autonomously on the Stellar ledger.
        </p>

        <h2 id="storage-architecture" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Storage Architecture
        </h2>
        <p className="text-[var(--text-secondary)]">
          SplitPay uses Soroban&apos;s typed key-value storage deliberately to maintain predictable ledger footprint sizes:
        </p>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] my-4">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[var(--bg-card)] text-[var(--text-secondary)] border-b border-[var(--border-default)]">
              <tr>
                <th className="p-3">Data Key</th>
                <th className="p-3">Type</th>
                <th className="p-3">Storage Scope</th>
                <th className="p-3 font-sans">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">Config</td>
                <td className="p-3 text-[var(--text-secondary)]">ContractConfig</td>
                <td className="p-3 text-cyan-300">Instance</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Contract admin identity</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">Pool(u64)</td>
                <td className="p-3 text-[var(--text-secondary)]">Pool</td>
                <td className="p-3 text-emerald-300">Persistent</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Pool configuration (owner, asset, status)</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">Member(u64, Address)</td>
                <td className="p-3 text-[var(--text-secondary)]">Member</td>
                <td className="p-3 text-emerald-300">Persistent</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Individual member basis points</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">PoolMembers(u64)</td>
                <td className="p-3 text-[var(--text-secondary)]">Vec&lt;Address&gt;</td>
                <td className="p-3 text-emerald-300">Persistent</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Ordered list of member addresses in pool</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">Payment(u64)</td>
                <td className="p-3 text-[var(--text-secondary)]">Payment</td>
                <td className="p-3 text-emerald-300">Persistent</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Payment record and status</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">Distribution(u64, Address)</td>
                <td className="p-3 text-[var(--text-secondary)]">Distribution</td>
                <td className="p-3 text-emerald-300">Persistent</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Historical payout record per recipient</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">PaymentRecipients(u64)</td>
                <td className="p-3 text-[var(--text-secondary)]">Vec&lt;Address&gt;</td>
                <td className="p-3 text-emerald-300">Persistent</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">List of recipients in settled payment</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="sep41-token-integration" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          SEP-41 Token Integration
        </h2>
        <p className="text-[var(--text-secondary)]">
          SplitPay does not implement custom token ledger balances. Instead, it interacts directly with any Stellar Asset Contract conforming to the official <strong>SEP-41 token interface</strong> using <code className="text-xs">soroban_sdk::token::Client</code>.
        </p>

        <h2 id="event-system" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Structured Event System
        </h2>
        <p className="text-[var(--text-secondary)]">
          Every state-changing method publishes structured events onto the ledger for indexing:
        </p>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1 font-mono">
          <li>(&quot;pool_created&quot;, pool_id) → (owner, asset, created_at)</li>
          <li>(&quot;member_added&quot;, pool_id) → (address, share_bps)</li>
          <li>(&quot;member_removed&quot;, pool_id) → address</li>
          <li>(&quot;share_updated&quot;, pool_id) → (address, old_share, new_share)</li>
          <li>(&quot;pool_status_changed&quot;, pool_id) → status</li>
          <li>(&quot;payment_created&quot;, payment_id) → (pool_id, payer, amount)</li>
          <li>(&quot;payment_settled&quot;, payment_id) → (pool_id, payer, amount)</li>
          <li>(&quot;distribution_created&quot;, payment_id) → (recipient, amount, share_bps)</li>
        </ul>
      </div>
    ),
  },

  "protocol/methods": {
    toc: [
      { id: "initialize", text: "initialize", level: 2 },
      { id: "create_pool", text: "create_pool", level: 2 },
      { id: "add_member", text: "add_member", level: 2 },
      { id: "remove_member", text: "remove_member", level: 2 },
      { id: "update_member_share", text: "update_member_share", level: 2 },
      { id: "set_pool_status", text: "set_pool_status", level: 2 },
      { id: "get_pool", text: "get_pool", level: 2 },
      { id: "get_member", text: "get_member", level: 2 },
      { id: "get_pool_members", text: "get_pool_members", level: 2 },
      { id: "create_payment", text: "create_payment", level: 2 },
      { id: "settle_payment", text: "settle_payment", level: 2 },
      { id: "get_payment", text: "get_payment", level: 2 },
      { id: "get_distribution", text: "get_distribution", level: 2 },
      { id: "get_distributions", text: "get_distributions", level: 2 },
    ],
    content: (
      <div className="space-y-8">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Exhaustive technical reference of all public methods exposed by the <code className="text-xs">SplitPayContract</code> implementation.
        </p>

        {/* initialize */}
        <div id="initialize" className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-base font-bold text-[var(--accent)]">initialize(env, admin: Address)</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-muted)] font-mono">Admin Only</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">Initializes the contract config with a designated administrator address.</p>
          <ul className="text-xs text-[var(--text-secondary)] space-y-1 list-disc pl-5">
            <li><strong>Authorization:</strong> <code className="text-xs">admin.require_auth()</code></li>
            <li><strong>Errors:</strong> <code className="text-xs">Error::AlreadyInitialized (1)</code> if previously called.</li>
          </ul>
          <CodeBlock language="rust" code={`pub fn initialize(env: Env, admin: Address) -> Result<(), Error>`} />
        </div>

        {/* create_pool */}
        <div id="create_pool" className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-base font-bold text-[var(--accent)]">create_pool(env, pool_id: u64, owner: Address, asset: Address)</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">Creates a new payment pool with an initial status of Active.</p>
          <ul className="text-xs text-[var(--text-secondary)] space-y-1 list-disc pl-5">
            <li><strong>Authorization:</strong> <code className="text-xs">owner.require_auth()</code></li>
            <li><strong>State Changes:</strong> Sets <code className="text-xs">Pool</code> in storage, initializes empty member address list, emits <code className="text-xs">pool_created</code>.</li>
            <li><strong>Errors:</strong> <code className="text-xs">Error::NotInitialized (2)</code>, <code className="text-xs">Error::PoolAlreadyExists (16)</code>.</li>
          </ul>
          <CodeBlock language="rust" code={`pub fn create_pool(env: Env, pool_id: u64, owner: Address, asset: Address) -> Result<(), Error>`} />
        </div>

        {/* add_member */}
        <div id="add_member" className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-base font-bold text-[var(--accent)]">add_member(env, pool_id: u64, address: Address, share_bps: u32)</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">Adds a member address and their allocation share in basis points (10,000 = 100%).</p>
          <ul className="text-xs text-[var(--text-secondary)] space-y-1 list-disc pl-5">
            <li><strong>Authorization:</strong> Pool owner (<code className="text-xs">pool.owner.require_auth()</code>)</li>
            <li><strong>Validation:</strong> <code className="text-xs">share_bps &gt; 0 &amp;&amp; share_bps &lt;= 10000</code>; cumulative shares cannot exceed 10,000.</li>
            <li><strong>Errors:</strong> <code className="text-xs">Error::PoolNotFound (3)</code>, <code className="text-xs">Error::MemberAlreadyExists (6)</code>, <code className="text-xs">Error::InvalidShare (9)</code>, <code className="text-xs">Error::InvalidTotalShares (10)</code>.</li>
          </ul>
          <CodeBlock language="rust" code={`pub fn add_member(env: Env, pool_id: u64, address: Address, share_bps: u32) -> Result<(), Error>`} />
        </div>

        {/* remove_member */}
        <div id="remove_member" className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-base font-bold text-[var(--accent)]">remove_member(env, pool_id: u64, address: Address)</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">Removes an existing member from the pool.</p>
          <ul className="text-xs text-[var(--text-secondary)] space-y-1 list-disc pl-5">
            <li><strong>Authorization:</strong> Pool owner (<code className="text-xs">pool.owner.require_auth()</code>)</li>
            <li><strong>Errors:</strong> <code className="text-xs">Error::PoolNotFound (3)</code>, <code className="text-xs">Error::MemberNotFound (5)</code>.</li>
          </ul>
          <CodeBlock language="rust" code={`pub fn remove_member(env: Env, pool_id: u64, address: Address) -> Result<(), Error>`} />
        </div>

        {/* update_member_share */}
        <div id="update_member_share" className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-base font-bold text-[var(--accent)]">update_member_share(env, pool_id: u64, address: Address, share_bps: u32)</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">Updates the basis points allocation for an existing pool member.</p>
          <ul className="text-xs text-[var(--text-secondary)] space-y-1 list-disc pl-5">
            <li><strong>Authorization:</strong> Pool owner (<code className="text-xs">pool.owner.require_auth()</code>)</li>
            <li><strong>Validation:</strong> Total new shares across all members cannot exceed 10,000 BPS.</li>
            <li><strong>Errors:</strong> <code className="text-xs">Error::MemberNotFound (5)</code>, <code className="text-xs">Error::InvalidTotalShares (10)</code>.</li>
          </ul>
          <CodeBlock language="rust" code={`pub fn update_member_share(env: Env, pool_id: u64, address: Address, share_bps: u32) -> Result<(), Error>`} />
        </div>

        {/* set_pool_status */}
        <div id="set_pool_status" className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-base font-bold text-[var(--accent)]">set_pool_status(env, pool_id: u64, status: PoolStatus)</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">Toggles pool status between Active (1) and Inactive (2).</p>
          <ul className="text-xs text-[var(--text-secondary)] space-y-1 list-disc pl-5">
            <li><strong>Authorization:</strong> Pool owner (<code className="text-xs">pool.owner.require_auth()</code>)</li>
            <li><strong>Errors:</strong> <code className="text-xs">Error::PoolNotFound (3)</code>.</li>
          </ul>
          <CodeBlock language="rust" code={`pub fn set_pool_status(env: Env, pool_id: u64, status: PoolStatus) -> Result<(), Error>`} />
        </div>

        {/* get_pool */}
        <div id="get_pool" className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-base font-bold text-[var(--accent)]">get_pool(env, pool_id: u64) -&gt; Result&lt;Pool, Error&gt;</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-950/40 text-blue-400 border border-blue-500/20 font-mono">Read Only</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">Retrieves details of a registered pool.</p>
          <CodeBlock language="rust" code={`pub fn get_pool(env: Env, pool_id: u64) -> Result<Pool, Error>`} />
        </div>

        {/* get_member */}
        <div id="get_member" className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-base font-bold text-[var(--accent)]">get_member(env, pool_id: u64, address: Address) -&gt; Result&lt;Member, Error&gt;</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-950/40 text-blue-400 border border-blue-500/20 font-mono">Read Only</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">Retrieves a specific member record within a pool.</p>
          <CodeBlock language="rust" code={`pub fn get_member(env: Env, pool_id: u64, address: Address) -> Result<Member, Error>`} />
        </div>

        {/* get_pool_members */}
        <div id="get_pool_members" className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-base font-bold text-[var(--accent)]">get_pool_members(env, pool_id: u64) -&gt; Result&lt;Vec&lt;Member&gt;, Error&gt;</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-950/40 text-blue-400 border border-blue-500/20 font-mono">Read Only</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">Returns an ordered vector of all configured members in a pool.</p>
          <CodeBlock language="rust" code={`pub fn get_pool_members(env: Env, pool_id: u64) -> Result<Vec<Member>, Error>`} />
        </div>

        {/* create_payment */}
        <div id="create_payment" className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-base font-bold text-[var(--accent)]">create_payment(env, payment_id: u64, pool_id: u64, payer: Address, amount: i128)</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">Records an unsettled payment targeting a pool. Verifies that total shares equal exactly 10,000 BPS before accepting.</p>
          <ul className="text-xs text-[var(--text-secondary)] space-y-1 list-disc pl-5">
            <li><strong>Authorization:</strong> <code className="text-xs">payer.require_auth()</code></li>
            <li><strong>Validation:</strong> <code className="text-xs">amount &gt; 0</code>, pool must be <code className="text-xs">Active</code>, sum of shares must be <code className="text-xs">10,000</code>.</li>
            <li><strong>Errors:</strong> <code className="text-xs">Error::InvalidAmount (11)</code>, <code className="text-xs">Error::PaymentAlreadyExists (13)</code>, <code className="text-xs">Error::InvalidPoolStatus (8)</code>, <code className="text-xs">Error::InvalidTotalShares (10)</code>.</li>
          </ul>
          <CodeBlock language="rust" code={`pub fn create_payment(env: Env, payment_id: u64, pool_id: u64, payer: Address, amount: i128) -> Result<(), Error>`} />
        </div>

        {/* settle_payment */}
        <div id="settle_payment" className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-base font-bold text-[var(--accent)]">settle_payment(env, payment_id: u64)</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-500/20 font-mono">Atomic Settlement</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">Atomically pulls funds from payer via SEP-41 token transfer, calculates exact distributions with deterministic remainder handling, and disburses tokens to all members.</p>
          <ul className="text-xs text-[var(--text-secondary)] space-y-1 list-disc pl-5">
            <li><strong>Authorization:</strong> <code className="text-xs">payment.payer.require_auth()</code></li>
            <li><strong>State Changes:</strong> Sets <code className="text-xs">payment.status = PaymentStatus::Settled</code>, persists <code className="text-xs">Distribution</code> structs, emits <code className="text-xs">payment_settled</code>.</li>
            <li><strong>Errors:</strong> <code className="text-xs">Error::PaymentNotFound (4)</code>, <code className="text-xs">Error::PaymentAlreadySettled (14)</code>, <code className="text-xs">Error::InvalidPoolStatus (8)</code>, <code className="text-xs">Error::InvalidTotalShares (10)</code>.</li>
          </ul>
          <CodeBlock language="rust" code={`pub fn settle_payment(env: Env, payment_id: u64) -> Result<(), Error>`} />
        </div>

        {/* get_payment */}
        <div id="get_payment" className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-base font-bold text-[var(--accent)]">get_payment(env, payment_id: u64) -&gt; Result&lt;Payment, Error&gt;</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-950/40 text-blue-400 border border-blue-500/20 font-mono">Read Only</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">Retrieves status and details of a payment.</p>
          <CodeBlock language="rust" code={`pub fn get_payment(env: Env, payment_id: u64) -> Result<Payment, Error>`} />
        </div>

        {/* get_distribution */}
        <div id="get_distribution" className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-base font-bold text-[var(--accent)]">get_distribution(env, payment_id: u64, recipient: Address) -&gt; Result&lt;Distribution, Error&gt;</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-950/40 text-blue-400 border border-blue-500/20 font-mono">Read Only</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">Retrieves the immutable distribution record for a specific recipient in a settled payment.</p>
          <CodeBlock language="rust" code={`pub fn get_distribution(env: Env, payment_id: u64, recipient: Address) -> Result<Distribution, Error>`} />
        </div>

        {/* get_distributions */}
        <div id="get_distributions" className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-base font-bold text-[var(--accent)]">get_distributions(env, payment_id: u64) -&gt; Result&lt;Vec&lt;Distribution&gt;, Error&gt;</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-950/40 text-blue-400 border border-blue-500/20 font-mono">Read Only</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">Returns all distributions for a settled payment.</p>
          <CodeBlock language="rust" code={`pub fn get_distributions(env: Env, payment_id: u64) -> Result<Vec<Distribution>, Error>`} />
        </div>
      </div>
    ),
  },

  "protocol/data-structures": {
    toc: [
      { id: "enums", text: "Protocol Enums", level: 2 },
      { id: "structs", text: "Protocol Structs", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Complete Rust source code for all data structures defined in <code className="text-xs">contracts/splitpay/src/types.rs</code>.
        </p>

        <h2 id="enums" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Protocol Enums
        </h2>
        <CodeBlock
          language="rust"
          filename="contracts/splitpay/src/types.rs"
          code={`#[contracttype]
#[derive(Copy, Clone, Debug, Eq, PartialEq)]
#[repr(u32)]
pub enum PoolStatus {
    Active = 1,
    Inactive = 2,
}

#[contracttype]
#[derive(Copy, Clone, Debug, Eq, PartialEq)]
#[repr(u32)]
pub enum PaymentStatus {
    Pending = 1,
    Settled = 2,
}`}
        />

        <h2 id="structs" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Protocol Structs
        </h2>
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
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Member {
    pub pool_id: u64,
    pub address: Address,
    pub share_bps: u32,
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Payment {
    pub id: u64,
    pub pool_id: u64,
    pub payer: Address,
    pub asset: Address,
    pub amount: i128,
    pub status: PaymentStatus,
    pub created_at: u64,
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Distribution {
    pub payment_id: u64,
    pub recipient: Address,
    pub amount: i128,
    pub share_bps: u32,
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct ContractConfig {
    pub admin: Address,
}`}
        />
      </div>
    ),
  },

  "protocol/authorization": {
    toc: [
      { id: "auth-model", text: "Soroban Authorization Model", level: 2 },
      { id: "matrix", text: "Permission Matrix", level: 2 },
      { id: "impersonation-prevention", text: "Impersonation Prevention", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          The SplitPay contract enforces cryptographic authority at the Soroban host boundary. No entity can act on behalf of another address without explicit signatures.
        </p>

        <h2 id="auth-model" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Soroban Authorization Model
        </h2>
        <p className="text-[var(--text-secondary)]">
          Soroban requires authorization via <code className="text-xs">Address::require_auth()</code>. If a transaction payload is submitted without a valid signature corresponding to that address, the contract execution immediately aborts with an authorization failure.
        </p>

        <h2 id="matrix" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Permission Matrix
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] my-4">
          <table className="w-full text-left text-xs">
            <thead className="bg-[var(--bg-card)] text-[var(--text-secondary)] border-b border-[var(--border-default)]">
              <tr>
                <th className="p-3">Method</th>
                <th className="p-3">Required Authorizer</th>
                <th className="p-3">Code Check</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              <tr>
                <td className="p-3 font-mono text-[var(--accent)] font-semibold">initialize</td>
                <td className="p-3 text-[var(--text-secondary)]">Contract Administrator</td>
                <td className="p-3 font-mono text-xs">admin.require_auth()</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--accent)] font-semibold">create_pool</td>
                <td className="p-3 text-[var(--text-secondary)]">Designated Pool Owner</td>
                <td className="p-3 font-mono text-xs">owner.require_auth()</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--accent)] font-semibold">add_member</td>
                <td className="p-3 text-[var(--text-secondary)]">Pool Owner</td>
                <td className="p-3 font-mono text-xs">pool.owner.require_auth()</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--accent)] font-semibold">remove_member</td>
                <td className="p-3 text-[var(--text-secondary)]">Pool Owner</td>
                <td className="p-3 font-mono text-xs">pool.owner.require_auth()</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--accent)] font-semibold">update_member_share</td>
                <td className="p-3 text-[var(--text-secondary)]">Pool Owner</td>
                <td className="p-3 font-mono text-xs">pool.owner.require_auth()</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--accent)] font-semibold">set_pool_status</td>
                <td className="p-3 text-[var(--text-secondary)]">Pool Owner</td>
                <td className="p-3 font-mono text-xs">pool.owner.require_auth()</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--accent)] font-semibold">create_payment</td>
                <td className="p-3 text-[var(--text-secondary)]">Payer</td>
                <td className="p-3 font-mono text-xs">payer.require_auth()</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--accent)] font-semibold">settle_payment</td>
                <td className="p-3 text-[var(--text-secondary)]">Payment Payer</td>
                <td className="p-3 font-mono text-xs">payment.payer.require_auth()</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="impersonation-prevention" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Impersonation Prevention
        </h2>
        <p className="text-[var(--text-secondary)]">
          Even if an attacker passes an arbitrary address to <code className="text-xs">owner</code> or <code className="text-xs">payer</code>, the runtime check rejects the transaction unless the corresponding cryptographic key signed the operation.
        </p>
      </div>
    ),
  },

  "protocol/settlement": {
    toc: [
      { id: "settlement-mechanics", text: "Settlement Mechanics", level: 2 },
      { id: "source-code-walkthrough", text: "Source Code Walkthrough", level: 2 },
      { id: "two-step-transfer", text: "Two-Step Token Transfer", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          The settlement function transforms a pending payment into finalized token transfers and immutable distribution records.
        </p>

        <h2 id="settlement-mechanics" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Settlement Mechanics
        </h2>
        <p className="text-[var(--text-secondary)]">
          Settlement can only be invoked once per payment. Re-executing causes <code className="text-xs">Error::PaymentAlreadySettled</code>.
        </p>

        <h2 id="source-code-walkthrough" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Source Code Walkthrough
        </h2>
        <CodeBlock
          language="rust"
          filename="contracts/splitpay/src/contract.rs"
          code={`// 1. Authenticate payer
let mut payment = get_payment(&env, payment_id)?;
payment.payer.require_auth();

// 2. Validate active pool & 10,000 BPS
let members = get_pool_members(&env, payment.pool_id)?;
let mut total_shares: u32 = 0;
for m in members.iter() {
    total_shares = total_shares.checked_add(m.share_bps).ok_or(Error::ArithmeticOverflow)?;
}
if total_shares != MAX_BPS {
    return Err(Error::InvalidTotalShares);
}

// 3. Compute allocations & assign remainder to index 0
let mut allocations = Vec::new(&env);
let mut allocated_sum: i128 = 0;
for m in members.iter() {
    let alloc = payment.amount.checked_mul(m.share_bps as i128)?
        .checked_div(BPS_DENOMINATOR)?;
    allocated_sum = allocated_sum.checked_add(alloc)?;
    allocations.push_back(alloc);
}
let remainder = payment.amount.checked_sub(allocated_sum)?;
if remainder > 0 && !allocations.is_empty() {
    let first = allocations.get(0).unwrap().checked_add(remainder)?;
    allocations.set(0, first);
}`}
        />

        <h2 id="two-step-transfer" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Two-Step Token Transfer
        </h2>
        <p className="text-[var(--text-secondary)]">
          The contract uses a clean two-step transfer model:
        </p>
        <ol className="list-decimal pl-5 text-xs text-[var(--text-secondary)] space-y-1.5">
          <li><strong>Step 1:</strong> Total payment amount is transferred from <code className="text-xs">payment.payer</code> to <code className="text-xs">contract_address</code>.</li>
          <li><strong>Step 2:</strong> Contract loops through members and transfers their calculated <code className="text-xs">alloc</code> directly to their address.</li>
        </ol>
      </div>
    ),
  },

  "protocol/share-calculation": {
    toc: [
      { id: "integer-arithmetic", text: "Checked Integer Arithmetic", level: 2 },
      { id: "overflow-protection", text: "Overflow & Truncation Protection", level: 2 },
      { id: "formula", text: "Mathematical Invariant Formula", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Financial calculations in SplitPay must never panic or silently overflow. All mathematical operations use Rust&apos;s checked methods.
        </p>

        <h2 id="integer-arithmetic" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Checked Integer Arithmetic
        </h2>
        <p className="text-[var(--text-secondary)]">
          Every multiplication, division, addition, and subtraction in the contract is checked:
        </p>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1">
          <li><code className="text-xs">checked_mul()</code> prevents multiplication overflow when multiplying large payments by BPS.</li>
          <li><code className="text-xs">checked_div()</code> handles integer division by 10,000.</li>
          <li><code className="text-xs">checked_add()</code> and <code className="text-xs">checked_sub()</code> prevent underflow and overflow.</li>
        </ul>

        <h2 id="overflow-protection" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Overflow & Truncation Protection
        </h2>
        <p className="text-[var(--text-secondary)]">
          Any arithmetic failure results in <code className="text-xs">Error::ArithmeticOverflow (17)</code>, aborting the transaction before any token transfer can occur.
        </p>

        <h2 id="formula" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Mathematical Invariant Formula
        </h2>
        <div className="my-3 p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] font-mono text-xs text-slate-300">
          <div>sum(distributions) == gross_payment_amount</div>
          <div className="mt-2 text-[var(--text-muted)] text-[11px]">
            Guaranteed for all integer amounts &gt; 0 and all valid 10,000 BPS pool splits.
          </div>
        </div>
      </div>
    ),
  },

  "protocol/remainder-handling": {
    toc: [
      { id: "the-rounding-challenge", text: "The Rounding Problem", level: 2 },
      { id: "deterministic-remainder-policy", text: "Deterministic Remainder Policy", level: 2 },
      { id: "concrete-example", text: "Concrete Math Walkthrough", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Because integer division drops fractional remainders, protocols must have a strict, deterministic rule for fractional tokens (stroops) so that zero funds disappear.
        </p>

        <h2 id="the-rounding-challenge" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          The Rounding Problem
        </h2>
        <p className="text-[var(--text-secondary)]">
          Consider an odd payment of <strong>100 stroops</strong> split across 3 members with shares of 3,333 BPS, 3,333 BPS, and 3,334 BPS (total = 10,000 BPS):
        </p>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1 font-mono">
          <li>Member 0: 100 * 3,333 / 10,000 = 33 stroops</li>
          <li>Member 1: 100 * 3,333 / 10,000 = 33 stroops</li>
          <li>Member 2: 100 * 3,334 / 10,000 = 33 stroops</li>
          <li className="text-rose-400">Sum of raw allocations = 99 stroops (1 stroop difference!)</li>
        </ul>

        <h2 id="deterministic-remainder-policy" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Deterministic Remainder Policy
        </h2>
        <p className="text-[var(--text-secondary)]">
          SplitPay solves this deterministically: the difference between total payment and allocated sum is added to <strong>member index 0</strong> (the primary pool member):
        </p>
        <CodeBlock
          language="rust"
          filename="contracts/splitpay/src/contract.rs"
          code={`let remainder = total_amount.checked_sub(allocated_sum)?;
if remainder > 0 && !allocations.is_empty() {
    let first_alloc = allocations.get(0).unwrap();
    let new_first = first_alloc.checked_add(remainder)?;
    allocations.set(0, new_first);
}`}
        />

        <h2 id="concrete-example" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Concrete Math Walkthrough
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] my-4">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[var(--bg-card)] text-[var(--text-secondary)] border-b border-[var(--border-default)]">
              <tr>
                <th className="p-3">Member</th>
                <th className="p-3">Share</th>
                <th className="p-3">Raw Calculation</th>
                <th className="p-3">Remainder Policy</th>
                <th className="p-3 text-[var(--accent)] font-bold">Final Allocation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              <tr>
                <td className="p-3 font-semibold text-[var(--text-primary)]">Member 0</td>
                <td className="p-3">3,333 BPS</td>
                <td className="p-3">33</td>
                <td className="p-3 text-emerald-400">+1 (Remainder)</td>
                <td className="p-3 font-bold text-emerald-300">34 stroops</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[var(--text-primary)]">Member 1</td>
                <td className="p-3">3,333 BPS</td>
                <td className="p-3">33</td>
                <td className="p-3 text-[var(--text-muted)]">+0</td>
                <td className="p-3 font-bold text-emerald-300">33 stroops</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[var(--text-primary)]">Member 2</td>
                <td className="p-3">3,334 BPS</td>
                <td className="p-3">33</td>
                <td className="p-3 text-[var(--text-muted)]">+0</td>
                <td className="p-3 font-bold text-emerald-300">33 stroops</td>
              </tr>
              <tr className="bg-[var(--bg-card)]/50 font-semibold">
                <td className="p-3 text-[var(--text-primary)]">Total</td>
                <td className="p-3">10,000 BPS</td>
                <td className="p-3">99</td>
                <td className="p-3">+1</td>
                <td className="p-3 text-[var(--accent)]">100 stroops (Exact)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },

  "protocol/security": {
    toc: [
      { id: "invariants", text: "Formal Financial Invariants", level: 2 },
      { id: "audit-status", text: "Security Audit Status", level: 2 },
      { id: "threat-analysis", text: "Threat Vector Analysis", level: 2 },
      { id: "responsible-disclosure", text: "Responsible Disclosure", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Security in SplitPay is grounded in compile-time type safety, authorization assertions, and mathematical invariants verified through automated unit and fuzz tests.
        </p>

        <h2 id="invariants" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Formal Financial Invariants
        </h2>
        <ol className="list-decimal pl-5 text-xs text-[var(--text-secondary)] space-y-2">
          <li><strong>Invariant 1 (BPS Exactness):</strong> <code className="text-xs">sum(member.share_bps) == 10,000</code>. A pool cannot accept payments unless its shares sum to exactly 10,000 basis points.</li>
          <li><strong>Invariant 2 (Zero Loss):</strong> <code className="text-xs">sum(distributions.amount) == payment.amount</code>. Every asset unit is distributed without truncation leakage.</li>
          <li><strong>Invariant 3 (Idempotent Settlement):</strong> A payment cannot be settled more than once.</li>
          <li><strong>Invariant 4 (Historical Immutability):</strong> Mutating pool members after settlement has zero effect on past payment receipts.</li>
          <li><strong>Invariant 5 (Strict Authorization):</strong> Only authorized actors can mutate pool state or release payment funds.</li>
        </ol>

        <h2 id="audit-status" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Security Audit Status
        </h2>
        <Callout type="warning" title="Audit Status">
          The SplitPay contract has undergone internal testing (27 automated unit, integration, and invariant tests) on Stellar Testnet, but <strong>has not yet undergone an external third-party security audit</strong>. It is currently deployed strictly for testing and development.
        </Callout>

        <h2 id="threat-analysis" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Threat Vector Analysis
        </h2>
        <div className="space-y-3 text-xs text-[var(--text-secondary)]">
          <p>
            <strong>Reentrancy:</strong> Soroban does not support reentrancy between contracts in the manner of Ethereum EVM call depth attacks. Furthermore, SplitPay executes external token transfers sequentially after calculating state snapshots.
          </p>
          <p>
            <strong>Private Key Custody:</strong> SplitPay contracts and client applications never store, hold, or bridge private keys. Key signing is delegated entirely to user wallets.
          </p>
        </div>

        <h2 id="responsible-disclosure" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Responsible Disclosure
        </h2>
        <p className="text-[var(--text-secondary)] text-xs">
          If you discover a potential vulnerability, please report it via private security advisory on GitHub or email the core maintainers. Do not file public GitHub issues for security vulnerabilities.
        </p>
      </div>
    ),
  },
};
