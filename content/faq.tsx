import React from "react";
import { TocItem } from "@/types/docs";

export const faqDocs: Record<
  string,
  { content: React.ReactNode; toc: TocItem[] }
> = {
  faq: {
    toc: [
      { id: "what-assets", text: "What assets does SplitPay support?", level: 2 },
      { id: "who-pays-fees", text: "Who pays blockchain transaction fees?", level: 2 },
      { id: "bps-requirement", text: "Why do pool shares have to equal exactly 10,000 BPS?", level: 2 },
      { id: "odd-amounts", text: "How does SplitPay handle odd payment amounts and division remainders?", level: 2 },
      { id: "can-shares-change", text: "Can pool shares be modified after creation?", level: 2 },
      { id: "are-distributions-immutable", text: "Can past payment distributions ever be altered?", level: 2 },
      { id: "is-it-custodial", text: "Does SplitPay hold or custody user private keys?", level: 2 },
    ],
    content: (
      <div className="space-y-6">
        <p className="lead text-base text-[var(--text-secondary)] leading-relaxed">
          Answers to frequently asked technical and operational questions regarding the SplitPay protocol.
        </p>

        <div className="space-y-6">
          <div id="what-assets" className="pt-4 border-t border-[var(--border-subtle)] space-y-2">
            <h2 className="text-base font-bold text-[var(--text-primary)]">What assets does SplitPay support?</h2>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              SplitPay supports any Stellar Asset Contract (SAC) conforming to the official SEP-41 token standard. On Stellar Testnet, native XLM and test tokens are supported. On Mainnet, native XLM, USDC, EURC, and any standard issued asset can be used.
            </p>
          </div>

          <div id="who-pays-fees" className="pt-4 border-t border-[var(--border-subtle)] space-y-2">
            <h2 className="text-base font-bold text-[var(--text-primary)]">Who pays blockchain transaction fees?</h2>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              The entity signing and submitting the transaction pays the minimal Stellar ledger fee (in XLM). For pool creation or member updates, the pool owner pays. For payment creation and settlement, the payer or settlement invoker pays.
            </p>
          </div>

          <div id="bps-requirement" className="pt-4 border-t border-[var(--border-subtle)] space-y-2">
            <h2 className="text-base font-bold text-[var(--text-primary)]">Why do pool shares have to equal exactly 10,000 BPS?</h2>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Basis points ensure 100.00% exactness without floating-point errors. If a pool were allowed to settle with only 9,000 BPS (90%), 10% of the funds would have undefined ownership. By asserting 10,000 BPS, 100% of the payment is mathematically accounted for.
            </p>
          </div>

          <div id="odd-amounts" className="pt-4 border-t border-[var(--border-subtle)] space-y-2">
            <h2 className="text-base font-bold text-[var(--text-primary)]">How does SplitPay handle odd payment amounts and division remainders?</h2>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              When integer division leaves a remainder difference between the gross payment and the sum of raw allocations, SplitPay deterministically awards the remainder stroops to the first pool member (index 0). Zero stroops are lost.
            </p>
          </div>

          <div id="can-shares-change" className="pt-4 border-t border-[var(--border-subtle)] space-y-2">
            <h2 className="text-base font-bold text-[var(--text-primary)]">Can pool shares be modified after creation?</h2>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Yes. The designated pool owner can add members, remove members, or update shares at any time, provided the resulting cumulative shares do not exceed 10,000 BPS.
            </p>
          </div>

          <div id="are-distributions-immutable" className="pt-4 border-t border-[var(--border-subtle)] space-y-2">
            <h2 className="text-base font-bold text-[var(--text-primary)]">Can past payment distributions ever be altered?</h2>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              No. When a payment settles, the contract takes an immutable snapshot of member shares and records individual distribution structs in persistent ledger storage. Subsequent changes to pool configuration have zero effect on historical distributions.
            </p>
          </div>

          <div id="is-it-custodial" className="pt-4 border-t border-[var(--border-subtle)] space-y-2">
            <h2 className="text-base font-bold text-[var(--text-primary)]">Does SplitPay hold or custody user private keys?</h2>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              No. SplitPay is strictly non-custodial. All operations requiring authority are authorized using cryptographic signatures from browser extensions (e.g. Freighter) or local dev keypairs.
            </p>
          </div>
        </div>
      </div>
    ),
  },
};
