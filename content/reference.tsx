// Contract and SDK API reference tables
import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { TocItem } from "@/types/docs";

export const referenceDocs: Record<
  string,
  { content: React.ReactNode; toc: TocItem[] }
> = {
  "reference/contract": {
    toc: [
      { id: "interface-summary", text: "Contract Interface Summary", level: 2 },
      { id: "method-table", text: "Public Methods Reference Table", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Quick reference table of all public methods implemented in the SplitPay Soroban smart contract.
        </p>

        <h2 id="interface-summary" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Contract Interface Summary
        </h2>
        <p className="text-[var(--text-secondary)]">
          The contract exposes 14 public methods categorized into Administration, Member Management, and Payment Settlement.
        </p>

        <h2 id="method-table" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Public Methods Reference Table
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] my-4">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[var(--bg-card)] text-[var(--text-secondary)] border-b border-[var(--border-default)]">
              <tr>
                <th className="p-3 font-sans">Method</th>
                <th className="p-3 font-sans">Parameters</th>
                <th className="p-3 font-sans">Return Type</th>
                <th className="p-3 font-sans">Required Auth</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">initialize</td>
                <td className="p-3">admin: Address</td>
                <td className="p-3 text-cyan-300">Result&lt;(), Error&gt;</td>
                <td className="p-3 font-sans text-xs">admin</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">create_pool</td>
                <td className="p-3">pool_id: u64, owner: Address, asset: Address</td>
                <td className="p-3 text-cyan-300">Result&lt;(), Error&gt;</td>
                <td className="p-3 font-sans text-xs">owner</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">add_member</td>
                <td className="p-3">pool_id: u64, address: Address, share_bps: u32</td>
                <td className="p-3 text-cyan-300">Result&lt;(), Error&gt;</td>
                <td className="p-3 font-sans text-xs">pool.owner</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">remove_member</td>
                <td className="p-3">pool_id: u64, address: Address</td>
                <td className="p-3 text-cyan-300">Result&lt;(), Error&gt;</td>
                <td className="p-3 font-sans text-xs">pool.owner</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">update_member_share</td>
                <td className="p-3">pool_id: u64, address: Address, share_bps: u32</td>
                <td className="p-3 text-cyan-300">Result&lt;(), Error&gt;</td>
                <td className="p-3 font-sans text-xs">pool.owner</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">set_pool_status</td>
                <td className="p-3">pool_id: u64, status: PoolStatus</td>
                <td className="p-3 text-cyan-300">Result&lt;(), Error&gt;</td>
                <td className="p-3 font-sans text-xs">pool.owner</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">get_pool</td>
                <td className="p-3">pool_id: u64</td>
                <td className="p-3 text-cyan-300">Result&lt;Pool, Error&gt;</td>
                <td className="p-3 font-sans text-xs text-[var(--text-muted)]">None (Read)</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">get_member</td>
                <td className="p-3">pool_id: u64, address: Address</td>
                <td className="p-3 text-cyan-300">Result&lt;Member, Error&gt;</td>
                <td className="p-3 font-sans text-xs text-[var(--text-muted)]">None (Read)</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">get_pool_members</td>
                <td className="p-3">pool_id: u64</td>
                <td className="p-3 text-cyan-300">Result&lt;Vec&lt;Member&gt;, Error&gt;</td>
                <td className="p-3 font-sans text-xs text-[var(--text-muted)]">None (Read)</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">create_payment</td>
                <td className="p-3">payment_id: u64, pool_id: u64, payer: Address, amount: i128</td>
                <td className="p-3 text-cyan-300">Result&lt;(), Error&gt;</td>
                <td className="p-3 font-sans text-xs">payer</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">settle_payment</td>
                <td className="p-3">payment_id: u64</td>
                <td className="p-3 text-cyan-300">Result&lt;(), Error&gt;</td>
                <td className="p-3 font-sans text-xs">payment.payer</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">get_payment</td>
                <td className="p-3">payment_id: u64</td>
                <td className="p-3 text-cyan-300">Result&lt;Payment, Error&gt;</td>
                <td className="p-3 font-sans text-xs text-[var(--text-muted)]">None (Read)</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">get_distribution</td>
                <td className="p-3">payment_id: u64, recipient: Address</td>
                <td className="p-3 text-cyan-300">Result&lt;Distribution, Error&gt;</td>
                <td className="p-3 font-sans text-xs text-[var(--text-muted)]">None (Read)</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">get_distributions</td>
                <td className="p-3">payment_id: u64</td>
                <td className="p-3 text-cyan-300">Result&lt;Vec&lt;Distribution&gt;, Error&gt;</td>
                <td className="p-3 font-sans text-xs text-[var(--text-muted)]">None (Read)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },

  "reference/types": {
    toc: [
      { id: "rust-types", text: "Rust Contract Types", level: 2 },
      { id: "typescript-types", text: "TypeScript Client Types", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Type mappings between Rust Soroban contract definitions and client TypeScript interfaces.
        </p>

        <h2 id="rust-types" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Rust Contract Types
        </h2>
        <CodeBlock
          language="rust"
          filename="contracts/splitpay/src/types.rs"
          code={`pub enum PoolStatus { Active = 1, Inactive = 2 }
pub enum PaymentStatus { Pending = 1, Settled = 2 }

pub struct Pool {
    pub id: u64,
    pub owner: Address,
    pub asset: Address,
    pub status: PoolStatus,
    pub created_at: u64,
}

pub struct Member {
    pub pool_id: u64,
    pub address: Address,
    pub share_bps: u32,
}

pub struct Payment {
    pub id: u64,
    pub pool_id: u64,
    pub payer: Address,
    pub asset: Address,
    pub amount: i128,
    pub status: PaymentStatus,
    pub created_at: u64,
}

pub struct Distribution {
    pub payment_id: u64,
    pub recipient: Address,
    pub amount: i128,
    pub share_bps: u32,
}`}
        />

        <h2 id="typescript-types" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          TypeScript Client Types
        </h2>
        <CodeBlock
          language="typescript"
          filename="splitpay-web/types/index.ts"
          code={`export enum PoolStatus { Active = 1, Inactive = 2 }
export enum PaymentStatus { Pending = 1, Settled = 2 }

export interface Pool {
  id: string;
  owner: string;
  asset: string;
  status: PoolStatus;
  createdAt: number;
}

export interface Member {
  poolId: string;
  address: string;
  shareBps: number;
}

export interface Payment {
  id: string;
  poolId: string;
  payer: string;
  asset: string;
  amount: bigint;
  status: PaymentStatus;
  createdAt: number;
}

export interface Distribution {
  paymentId: string;
  recipient: string;
  amount: bigint;
  shareBps: number;
}`}
        />
      </div>
    ),
  },

  "reference/errors": {
    toc: [
      { id: "error-codes-table", text: "Complete Error Codes Table", level: 2 },
      { id: "troubleshooting-guide", text: "Detailed Error Troubleshooting", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Exhaustive catalog of all 17 contract errors declared in <code className="text-xs font-mono">contracts/splitpay/src/errors.rs</code>.
        </p>

        <h2 id="error-codes-table" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Complete Error Codes Table
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] my-4">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[var(--bg-card)] text-[var(--text-secondary)] border-b border-[var(--border-default)]">
              <tr>
                <th className="p-3">Code</th>
                <th className="p-3 font-sans">Error Identifier</th>
                <th className="p-3 font-sans">Trigger Condition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              <tr>
                <td className="p-3 text-rose-400 font-bold">1</td>
                <td className="p-3 text-[var(--accent)]">AlreadyInitialized</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Contract admin has already been set.</td>
              </tr>
              <tr>
                <td className="p-3 text-rose-400 font-bold">2</td>
                <td className="p-3 text-[var(--accent)]">NotInitialized</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Operation invoked before contract initialize() was called.</td>
              </tr>
              <tr>
                <td className="p-3 text-rose-400 font-bold">3</td>
                <td className="p-3 text-[var(--accent)]">PoolNotFound</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Specified pool ID does not exist in ledger storage.</td>
              </tr>
              <tr>
                <td className="p-3 text-rose-400 font-bold">4</td>
                <td className="p-3 text-[var(--accent)]">PaymentNotFound</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Specified payment ID does not exist.</td>
              </tr>
              <tr>
                <td className="p-3 text-rose-400 font-bold">5</td>
                <td className="p-3 text-[var(--accent)]">MemberNotFound</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Member address is not registered in the target pool.</td>
              </tr>
              <tr>
                <td className="p-3 text-rose-400 font-bold">6</td>
                <td className="p-3 text-[var(--accent)]">MemberAlreadyExists</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Member address has already been added to this pool.</td>
              </tr>
              <tr>
                <td className="p-3 text-rose-400 font-bold">7</td>
                <td className="p-3 text-[var(--accent)]">Unauthorized</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Caller lacks required authority (owner, admin, or payer).</td>
              </tr>
              <tr>
                <td className="p-3 text-rose-400 font-bold">8</td>
                <td className="p-3 text-[var(--accent)]">InvalidPoolStatus</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Pool is Inactive and cannot accept or settle payments.</td>
              </tr>
              <tr>
                <td className="p-3 text-rose-400 font-bold">9</td>
                <td className="p-3 text-[var(--accent)]">InvalidShare</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Specified share BPS is 0 or exceeds 10,000.</td>
              </tr>
              <tr>
                <td className="p-3 text-rose-400 font-bold">10</td>
                <td className="p-3 text-[var(--accent)]">InvalidTotalShares</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Cumulative shares exceed 10,000 or do not equal 10,000 at payment time.</td>
              </tr>
              <tr>
                <td className="p-3 text-rose-400 font-bold">11</td>
                <td className="p-3 text-[var(--accent)]">InvalidAmount</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Payment amount is zero or negative (&lt;= 0).</td>
              </tr>
              <tr>
                <td className="p-3 text-rose-400 font-bold">12</td>
                <td className="p-3 text-[var(--accent)]">InvalidAsset</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Asset address is invalid or lacks SEP-41 interface.</td>
              </tr>
              <tr>
                <td className="p-3 text-rose-400 font-bold">13</td>
                <td className="p-3 text-[var(--accent)]">PaymentAlreadyExists</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">A payment with this ID already exists.</td>
              </tr>
              <tr>
                <td className="p-3 text-rose-400 font-bold">14</td>
                <td className="p-3 text-[var(--accent)]">PaymentAlreadySettled</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Payment has already been settled and is finalized.</td>
              </tr>
              <tr>
                <td className="p-3 text-rose-400 font-bold">15</td>
                <td className="p-3 text-[var(--accent)]">InvalidPayment</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Payment configuration does not match pool rules.</td>
              </tr>
              <tr>
                <td className="p-3 text-rose-400 font-bold">16</td>
                <td className="p-3 text-[var(--accent)]">PoolAlreadyExists</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">A pool with this numerical ID already exists.</td>
              </tr>
              <tr>
                <td className="p-3 text-rose-400 font-bold">17</td>
                <td className="p-3 text-[var(--accent)]">ArithmeticOverflow</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Integer multiplication, addition, or division overflowed.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="troubleshooting-guide" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Detailed Error Troubleshooting
        </h2>
        <div className="space-y-3 text-xs text-[var(--text-secondary)]">
          <p>
            <strong>How to resolve Error 10 (InvalidTotalShares):</strong> When creating or settling a payment, query <code className="text-xs">get_pool_members(pool_id)</code> and sum all <code className="text-xs">share_bps</code>. The sum must equal exactly 10,000 before <code className="text-xs">create_payment</code> or <code className="text-xs">settle_payment</code> will succeed.
          </p>
        </div>
      </div>
    ),
  },

  "reference/networks": {
    toc: [
      { id: "testnet-config", text: "Stellar Testnet Configuration", level: 2 },
      { id: "mainnet-readiness", text: "Mainnet Considerations", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Official network parameters, RPC endpoints, and asset contracts.
        </p>

        <h2 id="testnet-config" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Stellar Testnet Configuration
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] my-4">
          <table className="w-full text-left text-xs font-mono">
            <tbody className="divide-y divide-[var(--border-subtle)]">
              <tr>
                <td className="p-3 font-sans font-semibold text-[var(--text-primary)]">Soroban RPC URL</td>
                <td className="p-3 text-[var(--accent)]">https://soroban-testnet.stellar.org:443</td>
              </tr>
              <tr>
                <td className="p-3 font-sans font-semibold text-[var(--text-primary)]">Horizon API URL</td>
                <td className="p-3 text-[var(--text-secondary)]">https://horizon-testnet.stellar.org</td>
              </tr>
              <tr>
                <td className="p-3 font-sans font-semibold text-[var(--text-primary)]">Network Passphrase</td>
                <td className="p-3 text-[var(--text-secondary)]">&quot;Test SDF Network ; September 2015&quot;</td>
              </tr>
              <tr>
                <td className="p-3 font-sans font-semibold text-[var(--text-primary)]">SplitPay Contract</td>
                <td className="p-3 text-cyan-300 break-all">CCOXHXGFTYVRRCJ7U32QZJCWXDTNQLRMDS3IAGW5MGFEWOUEXNYYKLHF</td>
              </tr>
              <tr>
                <td className="p-3 font-sans font-semibold text-[var(--text-primary)]">Native XLM SAC</td>
                <td className="p-3 text-cyan-300 break-all">CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="mainnet-readiness" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Mainnet Considerations
        </h2>
        <p className="text-[var(--text-secondary)]">
          SplitPay is not yet deployed on Stellar Public (Mainnet). Mainnet parameters will be published upon protocol v1.0 mainnet governance release.
        </p>
      </div>
    ),
  },

  "reference/environment-variables": {
    toc: [
      { id: "all-env-vars", text: "Global Environment Variables Catalog", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Comprehensive reference of all environment variables across all SplitPay repositories.
        </p>

        <h2 id="all-env-vars" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Global Environment Variables Catalog
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] my-4">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[var(--bg-card)] text-[var(--text-secondary)] border-b border-[var(--border-default)]">
              <tr>
                <th className="p-3">Variable</th>
                <th className="p-3 font-sans">Scope</th>
                <th className="p-3 font-sans">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">NEXT_PUBLIC_STELLAR_NETWORK</td>
                <td className="p-3 font-sans text-xs">Web</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Network identifier (<code className="text-xs">testnet</code>)</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">NEXT_PUBLIC_STELLAR_RPC_URL</td>
                <td className="p-3 font-sans text-xs">Web</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Soroban JSON-RPC node endpoint</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE</td>
                <td className="p-3 font-sans text-xs">Web</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Passphrase for Stellar transaction envelope signing</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">NEXT_PUBLIC_SPLITPAY_CONTRACT_ID</td>
                <td className="p-3 font-sans text-xs">Web</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Active SplitPay Soroban contract address</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">NEXT_PUBLIC_EXPLORER_URL</td>
                <td className="p-3 font-sans text-xs">Web</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Base URL for Stellar Expert explorer links</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">STELLAR_ACCOUNT</td>
                <td className="p-3 font-sans text-xs">Contracts</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Identity name used by deployment shell scripts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
};
