// splitpay-api indexer and backend architecture
import React from "react";
import { Callout } from "@/components/Callout";
import { TocItem } from "@/types/docs";

export const apiDocs: Record<
  string,
  { content: React.ReactNode; toc: TocItem[] }
> = {
  "api/overview": {
    toc: [
      { id: "api-status", text: "Implementation Status: Planned", level: 2 },
      { id: "scope-boundary", text: "Scope & Authority Boundary", level: 2 },
      { id: "planned-capabilities", text: "Planned Backend Responsibilities", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          The <code className="text-xs font-mono">splitpay-api</code> service provides an optional off-chain indexing, metadata caching, and webhook notification layer.
        </p>

        <Callout type="warning" title="Implementation Status: Planned Service">
          <code className="text-xs font-mono">splitpay-api</code> is currently in the <strong>planning phase</strong>. It has not yet been deployed to production. The SplitPay decentralized application currently communicates directly with Stellar Soroban RPC nodes without requiring an intermediary backend.
        </Callout>

        <h2 id="scope-boundary" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Scope &amp; Authority Boundary
        </h2>
        <p className="text-[var(--text-secondary)]">
          The API is explicitly designed as a convenience and indexing service:
        </p>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1">
          <li><strong>No Financial Authority:</strong> The API never calculates shares, maintains balances, or issues authorizations. All financial truth resides on Stellar.</li>
          <li><strong>Derived State:</strong> Any cached balance or payment status returned by the API is strictly derived from verified on-chain ledger events.</li>
        </ul>

        <h2 id="planned-capabilities" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Planned Backend Responsibilities
        </h2>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1">
          <li><strong>Off-Chain Metadata:</strong> Associating pool IDs with project descriptions, client logos, and invoice attachments.</li>
          <li><strong>Event Ingestion:</strong> Continuous ingestion of <code className="text-xs">pool_created</code>, <code className="text-xs">payment_settled</code>, and <code className="text-xs">distribution_created</code> events.</li>
          <li><strong>Webhooks:</strong> Real-time HTTP dispatches to external accounting platforms (e.g. QuickBooks, Xero) when a pool payment settles.</li>
        </ul>
      </div>
    ),
  },

  "api/endpoints": {
    toc: [
      { id: "planned-rest-endpoints", text: "Planned REST API Endpoints", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Planned endpoint specifications for the off-chain indexing service.
        </p>

        <h2 id="planned-rest-endpoints" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Planned REST API Endpoints
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] my-4">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[var(--bg-card)] text-[var(--text-secondary)] border-b border-[var(--border-default)]">
              <tr>
                <th className="p-3">Method</th>
                <th className="p-3">Path</th>
                <th className="p-3 font-sans">Scope</th>
                <th className="p-3 font-sans">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              <tr>
                <td className="p-3 text-emerald-400 font-bold">GET</td>
                <td className="p-3 text-[var(--text-primary)]">/v1/pools/:id/metadata</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Fetch off-chain pool metadata (title, logo, tags)</td>
                <td className="p-3"><span className="px-1.5 py-0.5 rounded bg-purple-950/40 text-purple-400 border border-purple-500/20">Planned</span></td>
              </tr>
              <tr>
                <td className="p-3 text-emerald-400 font-bold">POST</td>
                <td className="p-3 text-[var(--text-primary)]">/v1/pools/:id/metadata</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Update off-chain metadata (authenticated by pool owner)</td>
                <td className="p-3"><span className="px-1.5 py-0.5 rounded bg-purple-950/40 text-purple-400 border border-purple-500/20">Planned</span></td>
              </tr>
              <tr>
                <td className="p-3 text-emerald-400 font-bold">GET</td>
                <td className="p-3 text-[var(--text-primary)]">/v1/members/:address/distributions</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Query historical disbursements received across all pools</td>
                <td className="p-3"><span className="px-1.5 py-0.5 rounded bg-purple-950/40 text-purple-400 border border-purple-500/20">Planned</span></td>
              </tr>
              <tr>
                <td className="p-3 text-emerald-400 font-bold">POST</td>
                <td className="p-3 text-[var(--text-primary)]">/v1/webhooks</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Register a webhook URL for settlement notifications</td>
                <td className="p-3"><span className="px-1.5 py-0.5 rounded bg-purple-950/40 text-purple-400 border border-purple-500/20">Planned</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },

  "api/examples": {
    toc: [
      { id: "integration-patterns", text: "Planned Integration Patterns", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          How external applications will query indexed data alongside authoritative smart contract state.
        </p>

        <h2 id="integration-patterns" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Planned Integration Patterns
        </h2>
        <p className="text-[var(--text-secondary)]">
          Applications should query the backend for fast list views, search filtering, and user display names, but verify active pool configuration and settlement finality against the Soroban contract before initiating transactions.
        </p>
      </div>
    ),
  },
};
