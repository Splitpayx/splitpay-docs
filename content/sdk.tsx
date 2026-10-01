// Standalone SDK package roadmap
// SDK transaction submission and confirmation polling
// splitpay-sdk typed Soroban client
import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { Callout } from "@/components/Callout";
import { TocItem } from "@/types/docs";

export const sdkDocs: Record<
  string,
  { content: React.ReactNode; toc: TocItem[] }
> = {
  "sdk/overview": {
    toc: [
      { id: "sdk-status", text: "Current SDK Status & Architecture", level: 2 },
      { id: "contract-client", text: "The SplitPayContractClient Implementation", level: 2 },
      { id: "features", text: "Client Capabilities", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          The SplitPay client layer provides TypeScript bindings for interacting with the SplitPay Soroban smart contract.
        </p>

        <Callout type="info" title="Implementation Status">
          The primary typed client is currently implemented within <code className="text-xs font-mono">splitpay-web/lib/contract/splitpay.ts</code> as <code className="text-xs font-mono">SplitPayContractClient</code>. A standalone npm package (<code className="text-xs font-mono">@splitpay/sdk</code>) is planned as the contract interface achieves final stabilization.
        </Callout>

        <h2 id="sdk-status" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Current SDK Status &amp; Architecture
        </h2>
        <p className="text-[var(--text-secondary)]">
          Instead of inventing an unreleased package, this documentation directly covers the <strong>actual typed client</strong> running in production in <code className="text-xs">splitpay-web</code>.
        </p>

        <h2 id="contract-client" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          The SplitPayContractClient Implementation
        </h2>
        <p className="text-[var(--text-secondary)]">
          The client manages:
        </p>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1">
          <li><strong>Read Simulation:</strong> Simulates read-only methods (<code className="text-xs">get_pool</code>, <code className="text-xs">get_pool_members</code>, <code className="text-xs">get_payment</code>, <code className="text-xs">get_distributions</code>) via Soroban RPC.</li>
          <li><strong>Transaction Assembly:</strong> Generates XDR strings for state-mutating calls ready for wallet signing.</li>
          <li><strong>Broadcast &amp; Polling:</strong> Submits signed XDR and polls until on-chain ledger inclusion.</li>
        </ul>

        <h2 id="features" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Client Capabilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
          <div className="p-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)]">
            <div className="text-xs font-bold text-[var(--accent)] mb-1">Full Type Safety</div>
            <p className="text-[11px] text-[var(--text-secondary)]">Converts raw ScVal values to native TypeScript structs automatically.</p>
          </div>
          <div className="p-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)]">
            <div className="text-xs font-bold text-[var(--accent)] mb-1">Simulated Footprints</div>
            <p className="text-[11px] text-[var(--text-secondary)]">Assembles accurate resource fee and footprint estimations.</p>
          </div>
          <div className="p-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)]">
            <div className="text-xs font-bold text-[var(--accent)] mb-1">Wallet Agnostic</div>
            <p className="text-[11px] text-[var(--text-secondary)]">Outputs standard XDR signable by Freighter, dev keypairs, or hardware wallets.</p>
          </div>
        </div>
      </div>
    ),
  },

  "sdk/installation": {
    toc: [
      { id: "peer-dependencies", text: "Peer Dependencies", level: 2 },
      { id: "source-import", text: "Importing the Client Module", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          How to integrate the SplitPay contract client into your TypeScript or Next.js project.
        </p>

        <h2 id="peer-dependencies" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Peer Dependencies
        </h2>
        <p className="text-[var(--text-secondary)]">
          The client requires the official Stellar SDK:
        </p>
        <CodeBlock
          language="bash"
          code={`npm install @stellar/stellar-sdk @stellar/freighter-api`}
        />

        <h2 id="source-import" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Importing the Client Module
        </h2>
        <p className="text-[var(--text-secondary)]">
          In applications utilizing the SplitPay codebase, import directly from the contract client module:
        </p>
        <CodeBlock
          language="typescript"
          code={`import { splitPayClient, SplitPayContractClient } from "@/lib/contract/splitpay";`}
        />
      </div>
    ),
  },

  "sdk/configuration": {
    toc: [
      { id: "initialization", text: "Initializing the Client", level: 2 },
      { id: "custom-contract-id", text: "Overriding Contract ID Dynamically", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Configure RPC endpoints and contract identifiers for the SplitPay client.
        </p>

        <h2 id="initialization" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Initializing the Client
        </h2>
        <CodeBlock
          language="typescript"
          code={`import { SplitPayContractClient } from "@/lib/contract/splitpay";

// Initialize with a specific contract ID or fall back to environment config
const client = new SplitPayContractClient(
  "CCOXHXGFTYVRRCJ7U32QZJCWXDTNQLRMDS3IAGW5MGFEWOUEXNYYKLHF"
);`}
        />

        <h2 id="custom-contract-id" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Overriding Contract ID Dynamically
        </h2>
        <p className="text-[var(--text-secondary)]">
          The client supports runtime overrides (persisted to <code className="text-xs">localStorage</code> in browser environments):
        </p>
        <CodeBlock
          language="typescript"
          code={`client.setContractId("CNEWCONTRACTID123...");
const activeId = client.getContractId();`}
        />
      </div>
    ),
  },

  "sdk/api-reference": {
    toc: [
      { id: "read-methods", text: "Read Methods (Simulations)", level: 2 },
      { id: "write-methods", text: "Write Preparation Methods (XDR Generators)", level: 2 },
      { id: "submission", text: "Submission & Polling Methods", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Complete API reference for <code className="text-xs font-mono">SplitPayContractClient</code>.
        </p>

        <h2 id="read-methods" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Read Methods (Simulations)
        </h2>
        <div className="space-y-4">
          <div>
            <div className="font-mono text-xs text-[var(--accent)] font-semibold">getPool(poolId: string | number): Promise&lt;Pool | null&gt;</div>
            <p className="text-xs text-[var(--text-secondary)] mt-1">Queries details for a specific pool.</p>
          </div>
          <div>
            <div className="font-mono text-xs text-[var(--accent)] font-semibold">getPoolMembers(poolId: string | number): Promise&lt;Member[]&gt;</div>
            <p className="text-xs text-[var(--text-secondary)] mt-1">Returns all configured members and their basis points.</p>
          </div>
          <div>
            <div className="font-mono text-xs text-[var(--accent)] font-semibold">getMember(poolId: string | number, memberAddress: string): Promise&lt;Member | null&gt;</div>
            <p className="text-xs text-[var(--text-secondary)] mt-1">Queries a single member&apos;s share in a pool.</p>
          </div>
          <div>
            <div className="font-mono text-xs text-[var(--accent)] font-semibold">getPayment(paymentId: string | number): Promise&lt;Payment | null&gt;</div>
            <p className="text-xs text-[var(--text-secondary)] mt-1">Queries a payment record and its current status (Pending or Settled).</p>
          </div>
          <div>
            <div className="font-mono text-xs text-[var(--accent)] font-semibold">getDistributions(paymentId: string | number): Promise&lt;Distribution[]&gt;</div>
            <p className="text-xs text-[var(--text-secondary)] mt-1">Returns all historical distributions disbursed for a settled payment.</p>
          </div>
        </div>

        <h2 id="write-methods" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Write Preparation Methods (XDR Generators)
        </h2>
        <div className="space-y-4">
          <div>
            <div className="font-mono text-xs text-cyan-300 font-semibold">prepareCreatePool(signerAddress, poolId, ownerAddress, assetAddress): Promise&lt;string&gt;</div>
            <p className="text-xs text-[var(--text-secondary)] mt-1">Generates signed-ready XDR to create a pool.</p>
          </div>
          <div>
            <div className="font-mono text-xs text-cyan-300 font-semibold">prepareAddMember(signerAddress, poolId, memberAddress, shareBps): Promise&lt;string&gt;</div>
            <p className="text-xs text-[var(--text-secondary)] mt-1">Generates XDR to add a member and basis points allocation.</p>
          </div>
          <div>
            <div className="font-mono text-xs text-cyan-300 font-semibold">prepareCreatePayment(signerAddress, paymentId, poolId, payerAddress, amount): Promise&lt;string&gt;</div>
            <p className="text-xs text-[var(--text-secondary)] mt-1">Generates XDR to register a pending payment record on-chain.</p>
          </div>
          <div>
            <div className="font-mono text-xs text-cyan-300 font-semibold">prepareSettlePayment(signerAddress, paymentId): Promise&lt;string&gt;</div>
            <p className="text-xs text-[var(--text-secondary)] mt-1">Generates XDR to execute atomic fund distribution.</p>
          </div>
        </div>

        <h2 id="submission" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Submission &amp; Polling Methods
        </h2>
        <div>
          <div className="font-mono text-xs text-emerald-400 font-semibold">submitSignedTx(signedXdr: string): Promise&lt;{"{ txHash: string }"}&gt;</div>
          <p className="text-xs text-[var(--text-secondary)] mt-1">Submits signed XDR to the network and polls until inclusion in a ledger.</p>
        </div>
      </div>
    ),
  },

  "sdk/examples": {
    toc: [
      { id: "example-query-pool", text: "Example: Query a Pool & Members", level: 2 },
      { id: "example-settle-payment", text: "Example: Settle a Payment", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Runnable TypeScript code recipes using <code className="text-xs">splitPayClient</code>.
        </p>

        <h2 id="example-query-pool" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Example: Query a Pool &amp; Members
        </h2>
        <CodeBlock
          language="typescript"
          code={`import { splitPayClient } from "@/lib/contract/splitpay";

async function inspectPool(poolId: number) {
  // Query pool metadata
  const pool = await splitPayClient.getPool(poolId);
  if (!pool) {
    console.error("Pool not found");
    return;
  }
  console.log(\`Pool #\${pool.id} Owner:\`, pool.owner);

  // Query member roster
  const members = await splitPayClient.getPoolMembers(poolId);
  for (const m of members) {
    console.log(\`Member \${m.address}: \${m.shareBps / 100}% (\${m.shareBps} BPS)\`);
  }
}`}
        />

        <h2 id="example-settle-payment" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Example: Settle a Payment
        </h2>
        <CodeBlock
          language="typescript"
          code={`import { splitPayClient } from "@/lib/contract/splitpay";

async function executeSettlement(payerAddress: string, paymentId: number, signFn: (xdr: string) => Promise<string>) {
  // 1. Prepare invocation XDR
  const rawXdr = await splitPayClient.prepareSettlePayment(payerAddress, paymentId);

  // 2. Sign XDR with wallet (Freighter or Keypair)
  const signedXdr = await signFn(rawXdr);

  // 3. Submit and poll for confirmation
  const { txHash } = await splitPayClient.submitSignedTx(signedXdr);
  console.log("Settled on-chain! Tx hash:", txHash);

  // 4. Query resulting distributions
  const receipts = await splitPayClient.getDistributions(paymentId);
  console.log("Disbursed to members:", receipts);
}`}
        />
      </div>
    ),
  },
};
