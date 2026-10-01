// Quickstart and testnet setup documentation
import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { Callout } from "@/components/Callout";
import { TocItem } from "@/types/docs";

export const gettingStartedDocs: Record<
  string,
  { content: React.ReactNode; toc: TocItem[] }
> = {
  "getting-started/quick-start": {
    toc: [
      { id: "step-1-prerequisites", text: "Step 1: Check Prerequisites", level: 2 },
      { id: "step-2-clone-run", text: "Step 2: Clone & Run splitpay-web", level: 2 },
      { id: "step-3-connect-wallet", text: "Step 3: Connect Wallet & Fund Testnet XLM", level: 2 },
      { id: "step-4-create-first-pool", text: "Step 4: Create Your First Pool", level: 2 },
      { id: "step-5-create-and-settle", text: "Step 5: Create & Settle a Payment", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Get started with SplitPay in 5 minutes by launching the decentralized web interface, connecting a Testnet wallet, and executing your first payment split on the Stellar Soroban Testnet.
        </p>

        <h2 id="step-1-prerequisites" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Step 1: Check Prerequisites
        </h2>
        <p className="text-[var(--text-secondary)]">
          Ensure you have <strong>Node.js v18.18+</strong> (or v20+) and <strong>npm</strong> or <strong>pnpm</strong> installed. For interacting with the contract directly via CLI, you will also need the <strong>Stellar CLI</strong>.
        </p>

        <h2 id="step-2-clone-run" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Step 2: Clone & Run splitpay-web
        </h2>
        <CodeBlock
          language="bash"
          code={`# Clone the official web application repository
git clone https://github.com/Splitpayx/splitpay-web.git
cd splitpay-web

# Install dependencies
npm install

# Create local environment configuration
cp .env.example .env.local

# Start the Next.js development server
npm run dev`}
        />
        <p className="text-xs text-[var(--text-secondary)]">
          Visit <a href="http://localhost:3000" className="text-[var(--accent)] underline" target="_blank" rel="noreferrer">http://localhost:3000</a> in your browser.
        </p>

        <h2 id="step-3-connect-wallet" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Step 3: Connect Wallet & Fund Testnet XLM
        </h2>
        <p className="text-[var(--text-secondary)]">
          SplitPay offers two seamless ways to connect:
        </p>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1">
          <li><strong>Freighter Extension:</strong> Connect your Freighter wallet set to <em>Test Net</em>.</li>
          <li><strong>Instant Dev Keypair:</strong> Generate a temporary Testnet keypair in one click directly inside the web app and click <em>Fund via Friendbot</em> to receive 10,000 free Testnet XLM.</li>
        </ul>

        <h2 id="step-4-create-first-pool" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Step 4: Create Your First Pool
        </h2>
        <ol className="list-decimal pl-5 text-xs text-[var(--text-secondary)] space-y-2">
          <li>Navigate to <code className="text-xs">/pools/new</code>.</li>
          <li>Enter a unique integer <strong>Pool ID</strong> (e.g. <code className="text-xs">101</code>).</li>
          <li>Select the payment asset (e.g. Native XLM SAC: <code className="text-xs">CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC</code>).</li>
          <li>Add member addresses and shares (e.g., Alice: <code className="text-xs">6000 BPS</code> (60%), Bob: <code className="text-xs">4000 BPS</code> (40%)).</li>
          <li>Verify the total indicator displays <span className="text-emerald-400 font-bold">10,000 / 10,000 BPS</span>.</li>
          <li>Click <strong>Deploy Pool On-Chain</strong> and approve the transaction.</li>
        </ol>

        <h2 id="step-5-create-and-settle" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Step 5: Create & Settle a Payment
        </h2>
        <p className="text-[var(--text-secondary)]">
          Once your pool is active, go to <code className="text-xs">/payments/new</code>:
        </p>
        <ol className="list-decimal pl-5 text-xs text-[var(--text-secondary)] space-y-2">
          <li>Select Pool <code className="text-xs">#101</code> and enter an amount (e.g. <code className="text-xs">100 XLM</code>).</li>
          <li>Inspect the live allocation preview: Alice will receive <code className="text-xs">60 XLM</code> and Bob will receive <code className="text-xs">40 XLM</code>.</li>
          <li>Click <strong>Initiate Payment</strong> to record the pending payment on-chain.</li>
          <li>Click <strong>Settle Payment</strong> to execute the atomic fund distribution.</li>
          <li>Inspect the generated on-chain transaction hash on <a href="https://stellar.expert/explorer/testnet" className="text-[var(--accent)] underline" target="_blank" rel="noreferrer">Stellar Expert Explorer</a>.</li>
        </ol>
      </div>
    ),
  },

  "getting-started/requirements": {
    toc: [
      { id: "client-requirements", text: "Client & Web Requirements", level: 2 },
      { id: "contract-requirements", text: "Smart Contract Development Requirements", level: 2 },
      { id: "stellar-cli-setup", text: "Stellar CLI Setup", level: 2 },
      { id: "wallet-requirements", text: "Wallet Requirements", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Verify system prerequisites before building or deploying SplitPay contracts and client applications.
        </p>

        <h2 id="client-requirements" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Client & Web Requirements
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] my-4">
          <table className="w-full text-left text-xs">
            <thead className="bg-[var(--bg-card)] text-[var(--text-secondary)] border-b border-[var(--border-default)]">
              <tr>
                <th className="p-3">Software</th>
                <th className="p-3">Required Version</th>
                <th className="p-3">Installation Command / Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              <tr>
                <td className="p-3 font-semibold text-[var(--text-primary)]">Node.js</td>
                <td className="p-3 font-mono">v18.18+ (v20+ recommended)</td>
                <td className="p-3"><a href="https://nodejs.org/" className="text-[var(--accent)] underline" target="_blank" rel="noreferrer">nodejs.org</a></td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[var(--text-primary)]">npm</td>
                <td className="p-3 font-mono">v9.0+</td>
                <td className="p-3 text-[var(--text-secondary)]">Bundled with Node.js</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[var(--text-primary)]">Git</td>
                <td className="p-3 font-mono">v2.30+</td>
                <td className="p-3"><a href="https://git-scm.com/" className="text-[var(--accent)] underline" target="_blank" rel="noreferrer">git-scm.com</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="contract-requirements" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Smart Contract Development Requirements
        </h2>
        <p className="text-[var(--text-secondary)]">
          Required only if compiling, testing, or deploying the Soroban contract in <code className="text-xs">splitpay-contracts</code>:
        </p>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1.5">
          <li><strong>Rust:</strong> 1.80.0 or higher. Install via <code className="text-xs">curl --proto &apos;=https&apos; --tlsv1.2 -sSf https://sh.rustup.rs | sh</code></li>
          <li><strong>WASM Target:</strong> <code className="text-xs">rustup target add wasm32-unknown-unknown</code></li>
          <li><strong>Stellar CLI:</strong> Version 22.0.0 or higher.</li>
        </ul>

        <h2 id="stellar-cli-setup" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Stellar CLI Setup
        </h2>
        <CodeBlock
          language="bash"
          code={`# Install stellar-cli via cargo
cargo install --locked stellar-cli --features opt

# Verify installation
stellar --version

# Add the official Stellar Testnet network configuration
stellar network add \\
  --global testnet \\
  --rpc-url https://soroban-testnet.stellar.org:443 \\
  --network-passphrase "Test SDF Network ; September 2015"`}
        />

        <h2 id="wallet-requirements" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Wallet Requirements
        </h2>
        <p className="text-[var(--text-secondary)]">
          For browser interactions, install the <strong>Freighter Wallet</strong> extension available for Chrome, Firefox, Brave, and Edge from <a href="https://www.freighter.app/" className="text-[var(--accent)] underline" target="_blank" rel="noreferrer">freighter.app</a>. Enable <em>Experimental / Testnet mode</em> in settings.
        </p>
      </div>
    ),
  },

  "getting-started/wallet-setup": {
    toc: [
      { id: "freighter-setup", text: "Setting Up Freighter Wallet", level: 2 },
      { id: "switching-to-testnet", text: "Switching Freighter to Testnet", level: 2 },
      { id: "dev-keypair-alternative", text: "Alternative: Web App Dev Keypairs", level: 2 },
      { id: "friendbot-funding", text: "Funding with Friendbot", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          SplitPay is completely non-custodial. All operations requiring user authority are cryptographically signed using either a browser wallet or a locally generated keypair.
        </p>

        <h2 id="freighter-setup" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Setting Up Freighter Wallet
        </h2>
        <ol className="list-decimal pl-5 text-xs text-[var(--text-secondary)] space-y-2">
          <li>Install the Freighter extension from <a href="https://www.freighter.app" target="_blank" rel="noreferrer" className="text-[var(--accent)] underline">freighter.app</a>.</li>
          <li>Follow the onboarding flow to generate or import your 12-word recovery phrase.</li>
          <li>Set a strong extension password.</li>
        </ol>

        <h2 id="switching-to-testnet" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Switching Freighter to Testnet
        </h2>
        <p className="text-[var(--text-secondary)]">
          By default, Freighter connects to Stellar Public (Mainnet). For SplitPay development:
        </p>
        <ol className="list-decimal pl-5 text-xs text-[var(--text-secondary)] space-y-1.5">
          <li>Open the Freighter extension.</li>
          <li>Click the network dropdown at the top right (currently showing <em>PUBLIC</em>).</li>
          <li>Select <strong>TEST NET</strong>.</li>
        </ol>

        <Callout type="tip" title="Network Passphrase Verification">
          Verify that your network passphrase matches the SDF Testnet passphrase:<br />
          <code className="text-xs font-mono">&quot;Test SDF Network ; September 2015&quot;</code>
        </Callout>

        <h2 id="dev-keypair-alternative" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Alternative: Web App Dev Keypairs
        </h2>
        <p className="text-[var(--text-secondary)]">
          If you do not want to install a browser extension, <code className="text-xs">splitpay-web</code> includes a built-in Testnet keypair generator in <code className="text-xs">/wallet</code>:
        </p>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1">
          <li>Keys are stored exclusively in your browser&apos;s <code className="text-xs">localStorage</code> and never transmitted to any external server.</li>
          <li>Transactions are signed client-side using <code className="text-xs">@stellar/stellar-sdk</code> before being broadcast to the Soroban RPC.</li>
        </ul>

        <h2 id="friendbot-funding" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Funding with Friendbot
        </h2>
        <p className="text-[var(--text-secondary)]">
          Fund any newly created Stellar Testnet address with 10,000 free Testnet XLM via Friendbot:
        </p>
        <CodeBlock
          language="bash"
          code={`# Fund via curl
curl "https://friendbot.stellar.org?addr=<YOUR_PUBLIC_KEY>"

# Or using Stellar CLI
stellar keys fund <IDENTITY_NAME> --network testnet`}
        />
      </div>
    ),
  },

  "getting-started/testnet": {
    toc: [
      { id: "network-parameters", text: "Stellar Testnet Parameters", level: 2 },
      { id: "deployed-contract-ids", text: "Official Testnet Contract IDs", level: 2 },
      { id: "stellar-expert-explorer", text: "Using Stellar Expert Explorer", level: 2 },
      { id: "mainnet-readiness", text: "Testnet vs Mainnet Status", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          The SplitPay protocol is currently deployed and active on the <strong>Stellar Testnet</strong>. All contract state, test assets, and transactions execute in this test environment.
        </p>

        <h2 id="network-parameters" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Stellar Testnet Parameters
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] my-4">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[var(--bg-card)] text-[var(--text-secondary)] border-b border-[var(--border-default)]">
              <tr>
                <th className="p-3">Parameter</th>
                <th className="p-3">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              <tr>
                <td className="p-3 font-sans font-medium text-[var(--text-primary)]">Network Name</td>
                <td className="p-3 text-[var(--accent)]">testnet</td>
              </tr>
              <tr>
                <td className="p-3 font-sans font-medium text-[var(--text-primary)]">Soroban RPC URL</td>
                <td className="p-3 text-[var(--text-secondary)]">https://soroban-testnet.stellar.org:443</td>
              </tr>
              <tr>
                <td className="p-3 font-sans font-medium text-[var(--text-primary)]">Horizon API URL</td>
                <td className="p-3 text-[var(--text-secondary)]">https://horizon-testnet.stellar.org</td>
              </tr>
              <tr>
                <td className="p-3 font-sans font-medium text-[var(--text-primary)]">Network Passphrase</td>
                <td className="p-3 text-[var(--text-secondary)]">&quot;Test SDF Network ; September 2015&quot;</td>
              </tr>
              <tr>
                <td className="p-3 font-sans font-medium text-[var(--text-primary)]">Friendbot URL</td>
                <td className="p-3 text-[var(--text-secondary)]">https://friendbot.stellar.org</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="deployed-contract-ids" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Official Testnet Contract IDs
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] my-4">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[var(--bg-card)] text-[var(--text-secondary)] border-b border-[var(--border-default)]">
              <tr>
                <th className="p-3">Contract Component</th>
                <th className="p-3">Contract ID</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              <tr>
                <td className="p-3 font-sans font-medium text-[var(--text-primary)]">SplitPay Protocol (Active)</td>
                <td className="p-3 text-[var(--accent)] break-all">CCOXHXGFTYVRRCJ7U32QZJCWXDTNQLRMDS3IAGW5MGFEWOUEXNYYKLHF</td>
              </tr>
              <tr>
                <td className="p-3 font-sans font-medium text-[var(--text-primary)]">Native XLM SAC (Testnet)</td>
                <td className="p-3 text-cyan-300 break-all">CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="stellar-expert-explorer" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Using Stellar Expert Explorer
        </h2>
        <p className="text-[var(--text-secondary)]">
          Every pool creation, member adjustment, and payment settlement emits on-chain events and logs observable in real time on the Stellar Expert Testnet Explorer:
        </p>
        <p className="text-xs">
          <a
            href="https://stellar.expert/explorer/testnet/contract/CCOXHXGFTYVRRCJ7U32QZJCWXDTNQLRMDS3IAGW5MGFEWOUEXNYYKLHF"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--accent)] underline font-mono"
          >
            https://stellar.expert/explorer/testnet/contract/CCOXHXGFTYVRRCJ7U32QZJCWXDTNQLRMDS3IAGW5MGFEWOUEXNYYKLHF
          </a>
        </p>

        <h2 id="mainnet-readiness" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Testnet vs Mainnet Status
        </h2>
        <Callout type="warning" title="Testnet Only Protocol">
          SplitPay is currently deployed exclusively on <strong>Stellar Testnet</strong>. Mainnet deployment is planned following full multi-party audit reviews. Do not send real Mainnet funds to Testnet contract addresses.
        </Callout>
      </div>
    ),
  },

  "getting-started/first-payment": {
    toc: [
      { id: "overview", text: "Overview of the Payment Flow", level: 2 },
      { id: "cli-execution", text: "CLI Execution Recipe", level: 2 },
      { id: "web-execution", text: "Web Interface Execution", level: 2 },
      { id: "verifying-distribution", text: "Verifying Resulting Distributions", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Follow this hands-on guide to execute an end-to-end payment creation and settlement on Testnet using either the Stellar CLI or the SplitPay web application.
        </p>

        <h2 id="overview" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Overview of the Payment Flow
        </h2>
        <p className="text-[var(--text-secondary)]">
          Payment settlement in SplitPay occurs in two distinct operations:
        </p>
        <ol className="list-decimal pl-5 text-xs text-[var(--text-secondary)] space-y-1.5">
          <li><code className="text-xs">create_payment</code>: Initiates a pending payment record on-chain with payment ID, pool ID, payer address, and gross amount.</li>
          <li><code className="text-xs">settle_payment</code>: Authenticated by payer or pool owner. Atomically transfers funds and disburses allocations according to active shares.</li>
        </ol>

        <h2 id="cli-execution" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          CLI Execution Recipe
        </h2>
        <CodeBlock
          language="bash"
          code={`CONTRACT="CCOXHXGFTYVRRCJ7U32QZJCWXDTNQLRMDS3IAGW5MGFEWOUEXNYYKLHF"

# 1. Create a payment record (Payment ID: 1, Pool ID: 1, Amount: 1000000000 stroops = 100 XLM)
stellar contract invoke \\
  --id "$CONTRACT" \\
  --source payer_account \\
  --network testnet \\
  -- \\
  create_payment \\
  --payment_id 1 \\
  --pool_id 1 \\
  --payer "<PAYER_STELLAR_ADDRESS>" \\
  --amount 1000000000

# 2. Settle the payment atomically
stellar contract invoke \\
  --id "$CONTRACT" \\
  --source payer_account \\
  --network testnet \\
  -- \\
  settle_payment \\
  --payment_id 1`}
        />

        <h2 id="web-execution" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Web Interface Execution
        </h2>
        <ol className="list-decimal pl-5 text-xs text-[var(--text-secondary)] space-y-2">
          <li>Open <a href="http://splitpay.samkiel.dev/payments/new" target="_blank" rel="noreferrer" className="text-[var(--accent)] underline">http://splitpay.samkiel.dev/payments/new</a>.</li>
          <li>Select your pool from the dropdown.</li>
          <li>Enter the gross amount (e.g. 50 XLM).</li>
          <li>Inspect the interactive breakdown table showing exact amounts per member.</li>
          <li>Click <strong>Sign &amp; Settle Payment</strong> to authorize the two-step transaction with Freighter.</li>
        </ol>

        <h2 id="verifying-distribution" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Verifying Resulting Distributions
        </h2>
        <p className="text-[var(--text-secondary)]">
          Query the resulting immutable distribution receipt on-chain:
        </p>
        <CodeBlock
          language="bash"
          code={`stellar contract invoke \\
  --id "$CONTRACT" \\
  --source payer_account \\
  --network testnet \\
  -- \\
  get_distributions \\
  --payment_id 1`}
        />
        <p className="text-xs text-[var(--text-secondary)]">
          The contract returns a vector of <code className="text-xs">Distribution</code> structs indicating the exact amount transferred to each member.
        </p>
      </div>
    ),
  },
};
