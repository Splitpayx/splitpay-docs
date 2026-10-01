import React from "react";
import { Callout } from "@/components/Callout";
import { TocItem } from "@/types/docs";

export const mobileDocs: Record<
  string,
  { content: React.ReactNode; toc: TocItem[] }
> = {
  "mobile/overview": {
    toc: [
      { id: "current-status", text: "Current Status", level: 2 },
      { id: "target-architecture", text: "Target Architecture", level: 2 },
      { id: "planned-features", text: "Planned Features", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          The <code className="text-xs font-mono">splitpay-mobile</code> repository represents the upcoming cross-platform mobile client for SplitPay.
        </p>

        <Callout type="warning" title="Implementation Status: Scaffolding / Planning">
          The mobile client is currently in the <strong>scaffolding and planning phase</strong>. The repository contains architectural specifications, PRD documentation, and brand assets. Core application code has not yet been committed.
        </Callout>

        <h2 id="current-status" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Current Status
        </h2>
        <p className="text-[var(--text-secondary)]">
          Development is scheduled to begin following contract interface stabilization on Testnet. The mobile client will consume the identical Soroban smart contract interface used by <code className="text-xs">splitpay-web</code>.
        </p>

        <h2 id="target-architecture" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Target Architecture
        </h2>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1.5">
          <li><strong>Framework:</strong> React Native / Expo.</li>
          <li><strong>Language:</strong> TypeScript.</li>
          <li><strong>Blockchain SDK:</strong> <code className="text-xs">@stellar/stellar-sdk</code> (React Native compatible shims for crypto and buffer).</li>
          <li><strong>Contract Interface:</strong> Shared typed methods from <code className="text-xs">splitpay-sdk</code>.</li>
        </ul>

        <h2 id="planned-features" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Planned Features
        </h2>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1">
          <li>Instant biometric signing via device secure enclaves.</li>
          <li>QR code scanning for quick pool creation and payment invoice settlement.</li>
          <li>Push notifications for settled distributions and incoming member payouts.</li>
        </ul>
      </div>
    ),
  },

  "mobile/setup": {
    toc: [
      { id: "prerequisites", text: "Planned Prerequisites", level: 2 },
      { id: "status", text: "Repository Setup Status", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Prerequisites and environment requirements for the upcoming mobile client.
        </p>

        <h2 id="prerequisites" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Planned Prerequisites
        </h2>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1.5">
          <li>Node.js v20+</li>
          <li>Android Studio &amp; Android SDK (Platform 34+)</li>
          <li>Xcode 15+ (for macOS developers targeting iOS)</li>
          <li>CocoaPods (iOS dependency management)</li>
        </ul>

        <h2 id="status" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Repository Setup Status
        </h2>
        <Callout type="info" title="Not Currently Implemented">
          Mobile setup commands (e.g. <code className="text-xs">npm start</code> or <code className="text-xs">npx react-native run-android</code>) are <strong>not currently implemented</strong> in the repository. Setup guides will be published once code scaffolding is merged.
        </Callout>
      </div>
    ),
  },

  "mobile/development": {
    toc: [
      { id: "development-plan", text: "Mobile Development Roadmap", level: 2 },
      { id: "wallet-parity", text: "Wallet Connection Parity", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Development milestones and protocol integration parity plan for the mobile application.
        </p>

        <h2 id="development-plan" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Mobile Development Roadmap
        </h2>
        <ol className="list-decimal pl-5 text-xs text-[var(--text-secondary)] space-y-2">
          <li><strong>Phase 1:</strong> Initial React Native / Expo repository scaffolding with shared styling and navigation.</li>
          <li><strong>Phase 2:</strong> Integration of <code className="text-xs">@stellar/stellar-sdk</code> with mobile cryptographic polyfills.</li>
          <li><strong>Phase 3:</strong> Mobile wallet connection via WalletConnect / Albedo deep-linking.</li>
          <li><strong>Phase 4:</strong> Contract invocation parity with web application (pool creation, member management, payment settlement).</li>
        </ol>

        <h2 id="wallet-parity" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Wallet Connection Parity
        </h2>
        <p className="text-[var(--text-secondary)]">
          The mobile client will support both local keypair storage in encrypted device storage (<code className="text-xs">Keychain</code> on iOS, <code className="text-xs">Keystore</code> on Android) and mobile wallet deep-linking.
        </p>
      </div>
    ),
  },

  "mobile/deployment": {
    toc: [
      { id: "deployment-plan", text: "Deployment Strategy", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Release and distribution strategy for mobile application builds.
        </p>

        <h2 id="deployment-plan" className="text-xl font-bold text-[var(--text-primary)] pt-4 border-t border-[var(--border-subtle)]">
          Deployment Strategy
        </h2>
        <p className="text-[var(--text-secondary)]">
          Mobile releases will initially be distributed via:
        </p>
        <ul className="list-disc pl-5 text-xs text-[var(--text-secondary)] space-y-1">
          <li><strong>iOS:</strong> Apple TestFlight for public community testing on Stellar Testnet.</li>
          <li><strong>Android:</strong> Google Play Internal Testing and standalone signed APK releases on GitHub.</li>
        </ul>
        <Callout type="info" title="Current Status">
          Mobile builds are not yet compiled or published. Production app store deployments will be scheduled alongside protocol Mainnet release.
        </Callout>
      </div>
    ),
  },
};
