// Updated typography for web overview
// splitpay-web environment variables
// splitpay-web architecture and contract client
import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { Callout } from "@/components/Callout";
import { TocItem } from "@/types/docs";

export const webDocs: Record<
  string,
  { content: React.ReactNode; toc: TocItem[] }
> = {
  "web/overview": {
    toc: [
      { id: "web-app-architecture", text: "Web App Architecture", level: 2 },
      { id: "core-capabilities", text: "Core Web Capabilities", level: 2 },
      { id: "modern-stack", text: "Modern Tech Stack", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
          <code className="px-1.5 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-default)] text-xs font-mono text-[var(--accent)] font-semibold">splitpay-web</code> is the primary decentralized user interface for the SplitPay protocol, built as a modern full-stack <strong>Next.js 16</strong> application utilizing the App Router.
        </p>

        <Callout type="important" title="No Legacy Backend Dependencies">
          The current SplitPay web application interacts directly with Stellar Soroban RPC and the on-chain smart contract. It does not use the deprecated Node.js backend or legacy Paystack payment processor from original prototypes.
        </Callout>

        <h2 id="web-app-architecture" className="text-2xl font-bold text-[var(--text-primary)] mt-10 mb-3 pt-6 border-t border-[var(--border-subtle)] font-['Space_Grotesk']">
          Web App Architecture
        </h2>
        <p className="text-sm sm:text-[15px] text-[var(--text-secondary)] leading-relaxed">
          The web application handles client-side wallet connection, transaction assembly, read-only simulation, and state polling:
        </p>

        <CodeBlock
          language="text"
          filename="Data Flow Architecture"
          code={`Next.js 16 App Router UI (/pools, /payments, /wallet)
│
▼
lib/contract/splitpay.ts (Typed Soroban Contract Client)
├── Simulates read calls via Horizon / Soroban RPC
├── Assembles transaction footprint via @stellar/stellar-sdk
├── Signs with Freighter Extension (@stellar/freighter-api) or Dev Keypair
└── Submits signed XDR and polls for on-chain confirmation`}
        />

        <h2 id="core-capabilities" className="text-2xl font-bold text-[var(--text-primary)] mt-10 mb-4 pt-6 border-t border-[var(--border-subtle)] font-['Space_Grotesk']">
          Core Web Capabilities
        </h2>
        <ul className="list-disc pl-5 text-sm sm:text-[15px] text-[var(--text-secondary)] space-y-3 leading-relaxed">
          <li>
            <strong className="text-[var(--text-primary)] font-semibold">Interactive Pool Builder:</strong> Create multi-recipient payment pools with real-time 10,000 basis points balance validation.
          </li>
          <li>
            <strong className="text-[var(--text-primary)] font-semibold">Live Split Preview Calculator:</strong> Preview member allocations and remainder distribution before committing a transaction on-chain.
          </li>
          <li>
            <strong className="text-[var(--text-primary)] font-semibold">Dual Wallet Provider:</strong> Native support for Freighter browser extension alongside instant, in-browser Testnet dev keypairs funded via Friendbot.
          </li>
          <li>
            <strong className="text-[var(--text-primary)] font-semibold">Explorer Deep Linking:</strong> Direct links to Stellar Expert Explorer for verified transaction hashes and contract footprints.
          </li>
        </ul>

        <h2 id="modern-stack" className="text-2xl font-bold text-[var(--text-primary)] mt-10 mb-4 pt-6 border-t border-[var(--border-subtle)] font-['Space_Grotesk']">
          Modern Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
          <div className="p-3.5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] text-center shadow-sm">
            <div className="text-sm font-bold text-[var(--text-primary)] font-['Space_Grotesk']">Next.js 16</div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">App Router</div>
          </div>
          <div className="p-3.5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] text-center shadow-sm">
            <div className="text-sm font-bold text-[var(--text-primary)] font-['Space_Grotesk']">React 19</div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">Server &amp; Client</div>
          </div>
          <div className="p-3.5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] text-center shadow-sm">
            <div className="text-sm font-bold text-[var(--text-primary)] font-['Space_Grotesk']">Tailwind CSS v4</div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">Brand Theme Tokens</div>
          </div>
          <div className="p-3.5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] text-center shadow-sm">
            <div className="text-sm font-bold text-[var(--text-primary)] font-['Space_Grotesk']">Stellar SDK 13</div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">Soroban RPC &amp; XDR</div>
          </div>
        </div>
      </div>
    ),
  },

  "web/setup": {
    toc: [
      { id: "clone-repo", text: "Cloning the Repository", level: 2 },
      { id: "install-dependencies", text: "Installing Dependencies", level: 2 },
      { id: "env-configuration", text: "Configuring Environment", level: 2 },
      { id: "start-dev-server", text: "Running Development Server", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Step-by-step instructions for running the SplitPay web application locally on your machine.
        </p>

        <h2 id="clone-repo" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Cloning the Repository
        </h2>
        <CodeBlock
          language="bash"
          code={`git clone https://github.com/Splitpayx/splitpay-web.git
cd splitpay-web`}
        />

        <h2 id="install-dependencies" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Installing Dependencies
        </h2>
        <CodeBlock
          language="bash"
          code={`npm install`}
        />

        <h2 id="env-configuration" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Configuring Environment
        </h2>
        <p className="text-[var(--text-secondary)]">
          Copy the example environment configuration to <code className="text-xs">.env.local</code>:
        </p>
        <CodeBlock
          language="bash"
          code={`cp .env.example .env.local`}
        />

        <h2 id="start-dev-server" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Running Development Server
        </h2>
        <CodeBlock
          language="bash"
          code={`npm run dev`}
        />
        <p className="text-xs text-[var(--text-secondary)]">
          Open <a href="http://localhost:3000" target="_blank" rel="noreferrer" className="text-[var(--accent)] underline">http://localhost:3000</a> to interact with the application.
        </p>
      </div>
    ),
  },

  "web/environment": {
    toc: [
      { id: "env-variables", text: "Web Environment Variables Catalog", level: 2 },
      { id: "sample-env-file", text: "Sample .env.local File", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Configuration flags used by <code className="text-xs">splitpay-web</code> to target the Stellar Testnet and the deployed Soroban contract.
        </p>

        <h2 id="env-variables" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Web Environment Variables Catalog
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] my-4">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[var(--bg-card)] text-[var(--text-secondary)] border-b border-[var(--border-default)]">
              <tr>
                <th className="p-3">Variable Name</th>
                <th className="p-3">Default Value</th>
                <th className="p-3 font-sans">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">NEXT_PUBLIC_STELLAR_NETWORK</td>
                <td className="p-3 text-[var(--text-secondary)]">testnet</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Target network name</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">NEXT_PUBLIC_STELLAR_RPC_URL</td>
                <td className="p-3 text-[var(--text-secondary)]">https://soroban-testnet.stellar.org</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Soroban JSON-RPC node endpoint</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE</td>
                <td className="p-3 text-[var(--text-secondary)]">&quot;Test SDF Network ; September 2015&quot;</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Network passphrase for XDR signing</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">NEXT_PUBLIC_SPLITPAY_CONTRACT_ID</td>
                <td className="p-3 text-[var(--text-secondary)]">CCOXHXGFTYVRRCJ7U32QZJCWXDTNQLRMDS3IAGW5MGFEWOUEXNYYKLHF</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Deployed SplitPay contract address</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">NEXT_PUBLIC_EXPLORER_URL</td>
                <td className="p-3 text-[var(--text-secondary)]">https://stellar.expert/explorer/testnet</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Explorer base link for transactions and accounts</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="sample-env-file" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Sample .env.local File
        </h2>
        <CodeBlock
          language="bash"
          filename=".env.local"
          code={`# SplitPay Stellar Environment Variables
NEXT_PUBLIC_STELLAR_NETWORK=testnet
NEXT_PUBLIC_STELLAR_RPC_URL=https://soroban-testnet.stellar.org
NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE="Test SDF Network ; September 2015"
NEXT_PUBLIC_SPLITPAY_CONTRACT_ID=CCOXHXGFTYVRRCJ7U32QZJCWXDTNQLRMDS3IAGW5MGFEWOUEXNYYKLHF
NEXT_PUBLIC_EXPLORER_URL=https://stellar.expert/explorer/testnet`}
        />
      </div>
    ),
  },

  "web/development": {
    toc: [
      { id: "route-structure", text: "App Router Routes", level: 2 },
      { id: "client-helpers", text: "Blockchain Integration Layer", level: 2 },
      { id: "testing-strategy", text: "Vitest Testing Strategy", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Guide to extending routes, contract helpers, and components in <code className="text-xs">splitpay-web</code>.
        </p>

        <h2 id="route-structure" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          App Router Routes
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] my-4">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[var(--bg-card)] text-[var(--text-secondary)] border-b border-[var(--border-default)]">
              <tr>
                <th className="p-3">Route Path</th>
                <th className="p-3 font-sans">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">/dashboard</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Overview of owned pools, recent payouts, and quick actions</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">/pools</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Browse and search existing pools</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">/pools/new</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Interactive pool creation wizard with live 10,000 BPS balance validator</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">/pools/[id]</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Inspect on-chain pool status, active members, and shares</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">/payments</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Historical payment transactions and settlement audit logs</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">/payments/new</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Payment initiator with real-time distribution calculation</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">/payments/[id]</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Settlement receipt showing per-member disbursement details</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">/wallet</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Keypair manager, Friendbot funder, and balance inspector</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">/settings</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Contract ID override, RPC endpoint selector, and network details</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="client-helpers" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Blockchain Integration Layer
        </h2>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1 font-mono">
          <li><strong>lib/contract/splitpay.ts:</strong> Typed client (<code className="text-xs">SplitPayContractClient</code>) with read simulations and invocation builders.</li>
          <li><strong>lib/stellar/rpc.ts:</strong> Horizon balance queries, RPC server initialization, and transaction status polling.</li>
          <li><strong>lib/wallet/WalletContext.tsx:</strong> React context managing active signer address, Freighter connection, and keypair state.</li>
          <li><strong>lib/validation/:</strong> 10,000 BPS checks, address format regexes, and integer amount sanity tests.</li>
        </ul>

        <h2 id="testing-strategy" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Vitest Testing Strategy
        </h2>
        <p className="text-[var(--text-secondary)]">
          Run the automated frontend test suite:
        </p>
        <CodeBlock
          language="bash"
          code={`npm test`}
        />
      </div>
    ),
  },

  "web/deployment": {
    toc: [
      { id: "build-process", text: "Production Build Command", level: 2 },
      { id: "deployment-targets", text: "Deploying to Vercel / Cloudflare", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Building and deploying <code className="text-xs">splitpay-web</code> to production cloud infrastructure.
        </p>

        <h2 id="build-process" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Production Build Command
        </h2>
        <CodeBlock
          language="bash"
          code={`# Compile Next.js production bundle
npm run build

# Start the optimized Node server
npm start`}
        />

        <h2 id="deployment-targets" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Deploying to Vercel / Cloudflare
        </h2>
        <p className="text-[var(--text-secondary)]">
          The web application is fully compatible with Vercel, Netlify, and Cloudflare Pages. Ensure all <code className="text-xs">NEXT_PUBLIC_</code> environment variables are configured in your deployment settings.
        </p>
      </div>
    ),
  },
};
