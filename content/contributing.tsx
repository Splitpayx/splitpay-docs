// Contribution guidelines and PR standards
import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { Callout } from "@/components/Callout";
import { TocItem } from "@/types/docs";

export const contributingDocs: Record<
  string,
  { content: React.ReactNode; toc: TocItem[] }
> = {
  "contributing/development": {
    toc: [
      { id: "local-dev", text: "Local Developer Environment", level: 2 },
      { id: "code-standards", text: "Code Quality Standards", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Guidelines for setting up a local development environment and contributing to the SplitPay ecosystem.
        </p>

        <h2 id="local-dev" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Local Developer Environment
        </h2>
        <p className="text-[var(--text-secondary)]">
          Ensure you have Rust, Cargo, Node.js, and the Stellar CLI configured. Clone the relevant repository from the <a href="https://github.com/Splitpayx" target="_blank" rel="noreferrer" className="text-[var(--accent)] underline">Splitpayx organization</a>.
        </p>

        <h2 id="code-standards" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Code Quality Standards
        </h2>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1">
          <li><strong>Rust:</strong> Format code using <code className="text-xs">cargo fmt --all --check</code> and run <code className="text-xs">cargo clippy</code>.</li>
          <li><strong>TypeScript:</strong> Adhere to strict TypeScript checks with zero compiler warnings.</li>
        </ul>
      </div>
    ),
  },

  "contributing/repository-structure": {
    toc: [
      { id: "org-overview", text: "Splitpayx GitHub Organization", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Overview of repositories under the <code className="text-xs font-mono">Splitpayx</code> GitHub organization.
        </p>

        <h2 id="org-overview" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Splitpayx GitHub Organization
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] my-4">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[var(--bg-card)] text-[var(--text-secondary)] border-b border-[var(--border-default)]">
              <tr>
                <th className="p-3 font-sans">Repository</th>
                <th className="p-3 font-sans">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">splitpay-contracts</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Soroban smart contract written in Rust</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">splitpay-web</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Next.js decentralized web application</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">splitpay-mobile</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">React Native mobile application (Scaffolding)</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">splitpay-sdk</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Shared client SDK (Client inside web, package planned)</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--accent)] font-semibold">splitpay-docs</td>
                <td className="p-3 font-sans text-[var(--text-secondary)]">Official developer documentation platform</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },

  "contributing/testing": {
    toc: [
      { id: "running-contract-tests", text: "Running Smart Contract Tests", level: 2 },
      { id: "running-web-tests", text: "Running Web Application Tests", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          SplitPay mandates thorough automated testing before any code merge.
        </p>

        <h2 id="running-contract-tests" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Running Smart Contract Tests
        </h2>
        <p className="text-[var(--text-secondary)]">
          The contract suite includes 27 unit, integration, and invariant tests covering overflow, unauthorized access, and remainder allocations:
        </p>
        <CodeBlock
          language="bash"
          code={`cd splitpay-contracts
cargo test`}
        />

        <h2 id="running-web-tests" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Running Web Application Tests
        </h2>
        <CodeBlock
          language="bash"
          code={`cd splitpay-web
npm test`}
        />
      </div>
    ),
  },

  "contributing/pull-requests": {
    toc: [
      { id: "pr-workflow", text: "Pull Request Workflow", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Standard GitHub workflow for submitting pull requests to SplitPay repositories.
        </p>

        <h2 id="pr-workflow" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Pull Request Workflow
        </h2>
        <ol className="list-decimal pl-5 text-xs text-[var(--text-secondary)] space-y-1.5">
          <li>Fork the target repository and create a feature branch (<code className="text-xs">git checkout -b feat/my-feature</code>).</li>
          <li>Ensure all tests pass and linters report zero errors.</li>
          <li>Submit a pull request with a descriptive title referencing any open issues.</li>
          <li>Await review from the core maintainers.</li>
        </ol>
      </div>
    ),
  },

  "contributing/security": {
    toc: [
      { id: "security-principles", text: "Security Guidelines for Contributors", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Critical security rules for developers writing contract or client code.
        </p>

        <h2 id="security-principles" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Security Guidelines for Contributors
        </h2>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1">
          <li>Never use unchecked math or floating-point division in contract code.</li>
          <li>Always assert caller authority with <code className="text-xs">require_auth()</code> before mutating state.</li>
          <li>Never invent mock balances in client applications; always query on-chain state or verified events.</li>
        </ul>
      </div>
    ),
  },
};
