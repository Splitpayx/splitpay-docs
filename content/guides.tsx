// Soroban RPC simulation and transaction footprint guide
// Custom SEP-41 token integration
// End-to-end integration and operations guides
import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { Callout } from "@/components/Callout";
import { TocItem } from "@/types/docs";

export const guidesDocs: Record<
  string,
  { content: React.ReactNode; toc: TocItem[] }
> = {
  "guides/create-a-pool": {
    toc: [
      { id: "goal-and-prerequisites", text: "Goal & Requirements", level: 2 },
      { id: "step-1-select-asset", text: "Step 1: Choose Supported Asset", level: 2 },
      { id: "step-2-cli-invoke", text: "Step 2: Deploy Pool via Stellar CLI", level: 2 },
      { id: "step-3-web-ui", text: "Step 3: Alternative — Create via Web UI", level: 2 },
      { id: "expected-result", text: "Expected Result & Verification", level: 2 },
      { id: "troubleshooting", text: "Troubleshooting", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Learn how to deploy a new SplitPay payment pool on Stellar Testnet.
        </p>

        <h2 id="goal-and-prerequisites" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Goal &amp; Requirements
        </h2>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1">
          <li><strong>Goal:</strong> Deploy an on-chain Pool with unique ID, designated owner, and supported asset.</li>
          <li><strong>Requirements:</strong> Stellar CLI installed, funded Testnet account, and deployed SplitPay contract ID.</li>
        </ul>

        <h2 id="step-1-select-asset" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Step 1: Choose Supported Asset
        </h2>
        <p className="text-[var(--text-secondary)]">
          On Stellar Testnet, use the native XLM Stellar Asset Contract:
        </p>
        <div className="my-2 p-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-default)] font-mono text-xs text-[var(--accent)] break-all">
          CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC
        </div>

        <h2 id="step-2-cli-invoke" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Step 2: Deploy Pool via Stellar CLI
        </h2>
        <CodeBlock
          language="bash"
          code={`CONTRACT="CCOXHXGFTYVRRCJ7U32QZJCWXDTNQLRMDS3IAGW5MGFEWOUEXNYYKLHF"
ASSET="CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC"
OWNER_ADDR=$(stellar keys address deployer)

stellar contract invoke \\
  --id "$CONTRACT" \\
  --source deployer \\
  --network testnet \\
  -- \\
  create_pool \\
  --pool_id 1 \\
  --owner "$OWNER_ADDR" \\
  --asset "$ASSET"`}
        />

        <h2 id="step-3-web-ui" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Step 3: Alternative — Create via Web UI
        </h2>
        <p className="text-[var(--text-secondary)]">
          Alternatively, open <a href="http://splitpay.samkiel.dev/pools/new" target="_blank" rel="noreferrer" className="text-[var(--accent)] underline">splitpay.samkiel.dev/pools/new</a>, connect your Freighter wallet, fill in the pool ID and asset address, and sign the invocation.
        </p>

        <h2 id="expected-result" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Expected Result &amp; Verification
        </h2>
        <p className="text-[var(--text-secondary)]">
          Verify the pool exists by querying contract state:
        </p>
        <CodeBlock
          language="bash"
          code={`stellar contract invoke \\
  --id "$CONTRACT" \\
  --source deployer \\
  --network testnet \\
  -- \\
  get_pool \\
  --pool_id 1`}
        />

        <h2 id="troubleshooting" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Troubleshooting
        </h2>
        <div className="space-y-2 text-xs text-[var(--text-secondary)]">
          <p><strong>Error: PoolAlreadyExists (16):</strong> A pool with this ID already exists. Increment your <code className="text-xs">pool_id</code> to an unused integer.</p>
          <p><strong>Error: NotInitialized (2):</strong> The SplitPay contract has not had its administrator initialized. Run <code className="text-xs">initialize</code> first.</p>
        </div>
      </div>
    ),
  },

  "guides/configure-splits": {
    toc: [
      { id: "split-goal", text: "Goal & Allocation Rules", level: 2 },
      { id: "example-60-40", text: "Configuring a 60/40 Split", level: 2 },
      { id: "updating-splits", text: "Updating Member Shares Later", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Configure multi-recipient shares in a pool ensuring the cumulative sum strictly equals 10,000 basis points.
        </p>

        <h2 id="split-goal" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Goal &amp; Allocation Rules
        </h2>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1">
          <li>Every share is expressed in basis points (10,000 BPS = 100%).</li>
          <li>Cumulative shares cannot exceed 10,000 during intermediate additions.</li>
          <li>Payments will fail unless total pool shares equal exactly 10,000 BPS.</li>
        </ul>

        <h2 id="example-60-40" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Configuring a 60/40 Split
        </h2>
        <CodeBlock
          language="bash"
          code={`CONTRACT="CCOXHXGFTYVRRCJ7U32QZJCWXDTNQLRMDS3IAGW5MGFEWOUEXNYYKLHF"

# Member 1: Alice (60% = 6,000 BPS)
stellar contract invoke \\
  --id "$CONTRACT" \\
  --source deployer \\
  --network testnet \\
  -- \\
  add_member \\
  --pool_id 1 \\
  --address "GA...ALICE_ADDRESS" \\
  --share_bps 6000

# Member 2: Bob (40% = 4,000 BPS)
stellar contract invoke \\
  --id "$CONTRACT" \\
  --source deployer \\
  --network testnet \\
  -- \\
  add_member \\
  --pool_id 1 \\
  --address "GB...BOB_ADDRESS" \\
  --share_bps 4000`}
        />

        <h2 id="updating-splits" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Updating Member Shares Later
        </h2>
        <p className="text-[var(--text-secondary)]">
          To modify an existing member&apos;s share, use <code className="text-xs">update_member_share</code>. The contract verifies that with the updated share, total pool BPS does not exceed 10,000.
        </p>
      </div>
    ),
  },

  "guides/create-a-payment": {
    toc: [
      { id: "overview", text: "Payment Initiation Overview", level: 2 },
      { id: "cli-execution", text: "Creating via Stellar CLI", level: 2 },
      { id: "verifying-pending-state", text: "Verifying Pending Payment State", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Create an on-chain pending payment record linked to an active pool.
        </p>

        <h2 id="overview" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Payment Initiation Overview
        </h2>
        <p className="text-[var(--text-secondary)]">
          Creating a payment establishes an on-chain intent to disburse tokens. The amount is specified in the asset&apos;s smallest unit (stroops for XLM, where 1 XLM = 10,000,000 stroops).
        </p>

        <h2 id="cli-execution" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Creating via Stellar CLI
        </h2>
        <CodeBlock
          language="bash"
          code={`CONTRACT="CCOXHXGFTYVRRCJ7U32QZJCWXDTNQLRMDS3IAGW5MGFEWOUEXNYYKLHF"

# Create Payment #1 for 50 XLM (500,000,000 stroops) targeting Pool #1
stellar contract invoke \\
  --id "$CONTRACT" \\
  --source payer \\
  --network testnet \\
  -- \\
  create_payment \\
  --payment_id 1 \\
  --pool_id 1 \\
  --payer "$(stellar keys address payer)" \\
  --amount 500000000`}
        />

        <h2 id="verifying-pending-state" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Verifying Pending Payment State
        </h2>
        <CodeBlock
          language="bash"
          code={`stellar contract invoke \\
  --id "$CONTRACT" \\
  --source payer \\
  --network testnet \\
  -- \\
  get_payment \\
  --payment_id 1`}
        />
        <p className="text-xs text-[var(--text-secondary)]">
          Confirm that <code className="text-xs">status</code> returns <code className="text-xs">PaymentStatus::Pending (1)</code>.
        </p>
      </div>
    ),
  },

  "guides/settle-a-payment": {
    toc: [
      { id: "settlement-overview", text: "Settlement Overview", level: 2 },
      { id: "execution", text: "Executing Settle Payment", level: 2 },
      { id: "what-happens", text: "What Happens During Execution", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Execute atomic settlement to transfer assets and distribute proportional shares to all pool members.
        </p>

        <h2 id="settlement-overview" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Settlement Overview
        </h2>
        <p className="text-[var(--text-secondary)]">
          Settling a payment executes the atomic fund transfer and distribution snapshot. The transaction must be authorized by the payment&apos;s payer.
        </p>

        <h2 id="execution" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Executing Settle Payment
        </h2>
        <CodeBlock
          language="bash"
          code={`CONTRACT="CCOXHXGFTYVRRCJ7U32QZJCWXDTNQLRMDS3IAGW5MGFEWOUEXNYYKLHF"

stellar contract invoke \\
  --id "$CONTRACT" \\
  --source payer \\
  --network testnet \\
  -- \\
  settle_payment \\
  --payment_id 1`}
        />

        <h2 id="what-happens" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          What Happens During Execution
        </h2>
        <ol className="list-decimal pl-5 text-xs text-[var(--text-secondary)] space-y-1.5">
          <li>Payer account is debited 500,000,000 stroops (50 XLM).</li>
          <li>Alice receives 300,000,000 stroops (30 XLM).</li>
          <li>Bob receives 200,000,000 stroops (20 XLM).</li>
          <li>Payment #1 status transitions to <code className="text-xs">Settled (2)</code>.</li>
        </ol>
      </div>
    ),
  },

  "guides/verify-a-transaction": {
    toc: [
      { id: "stellar-expert", text: "Inspecting on Stellar Expert", level: 2 },
      { id: "verifying-events", text: "Verifying Emitted Events", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Verify settlement transactions, emitted events, and member transfers on the public block explorer.
        </p>

        <h2 id="stellar-expert" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Inspecting on Stellar Expert
        </h2>
        <p className="text-[var(--text-secondary)]">
          Locate your settlement transaction hash and navigate to:
        </p>
        <p className="text-xs font-mono text-[var(--accent)] break-all">
          https://stellar.expert/explorer/testnet/tx/&lt;TRANSACTION_HASH&gt;
        </p>
        <p className="text-xs text-[var(--text-secondary)]">
          Review the <strong>Contract Invocations</strong> tab to confirm the invocation of <code className="text-xs">settle_payment</code> and verify the asset transfer operations to each member.
        </p>

        <h2 id="verifying-events" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Verifying Emitted Events
        </h2>
        <p className="text-[var(--text-secondary)]">
          Look for <code className="text-xs">payment_settled</code> and <code className="text-xs">distribution_created</code> topics in the transaction effects list.
        </p>
      </div>
    ),
  },

  "guides/read-contract-state": {
    toc: [
      { id: "cli-state-queries", text: "Reading State with Stellar CLI", level: 2 },
      { id: "sdk-state-queries", text: "Reading State with TypeScript Client", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Query pools, member configurations, payments, and historical distributions without paying transaction fees.
        </p>

        <h2 id="cli-state-queries" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Reading State with Stellar CLI
        </h2>
        <p className="text-[var(--text-secondary)]">
          Because read-only methods do not modify ledger storage, they execute as zero-fee simulations:
        </p>
        <CodeBlock
          language="bash"
          code={`CONTRACT="CCOXHXGFTYVRRCJ7U32QZJCWXDTNQLRMDS3IAGW5MGFEWOUEXNYYKLHF"

# Query all members of pool 1
stellar contract invoke --id "$CONTRACT" --source any_account --network testnet -- \\
  get_pool_members --pool_id 1

# Query payment 1 details
stellar contract invoke --id "$CONTRACT" --source any_account --network testnet -- \\
  get_payment --payment_id 1

# Query distributions of payment 1
stellar contract invoke --id "$CONTRACT" --source any_account --network testnet -- \\
  get_distributions --payment_id 1`}
        />

        <h2 id="sdk-state-queries" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Reading State with TypeScript Client
        </h2>
        <CodeBlock
          language="typescript"
          code={`import { splitPayClient } from "@/lib/contract/splitpay";

const pool = await splitPayClient.getPool(1);
const members = await splitPayClient.getPoolMembers(1);
const payment = await splitPayClient.getPayment(1);
const distributions = await splitPayClient.getDistributions(1);`}
        />
      </div>
    ),
  },
};
