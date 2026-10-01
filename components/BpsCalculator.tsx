// Interactive on-chain 10,000 basis points calculator simulating integer distribution
"use client";

import React, { useState } from "react";
import { Calculator, Check, AlertCircle } from "lucide-react";

export function BpsCalculator() {
  const [totalAmount, setTotalAmount] = useState<number>(100);
  const [share1, setShare1] = useState<number>(6000); // 60%
  const [share2, setShare2] = useState<number>(4000); // 40%

  const totalBps = share1 + share2;
  const isValidBps = totalBps === 10000;

  // Integer division math matching SplitPay Soroban contract
  const alloc1Raw = Math.floor((totalAmount * share1) / 10000);
  const alloc2Raw = Math.floor((totalAmount * share2) / 10000);
  const allocatedSum = alloc1Raw + alloc2Raw;
  const remainder = totalAmount - allocatedSum;

  // Contract remainder policy: remainder is assigned to member 0 (Member 1)
  const alloc1Final = alloc1Raw + remainder;
  const alloc2Final = alloc2Raw;
  const finalSum = alloc1Final + alloc2Final;

  return (
    <div className="my-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--border-subtle)]">
        <div className="p-1.5 rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)]">
          <Calculator className="h-4 w-4" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-[var(--text-primary)] font-['Space_Grotesk']">
            Interactive On-Chain Remainder Calculator
          </h4>
          <p className="text-xs text-[var(--text-secondary)]">
            Live simulation of the Soroban contract&apos;s integer arithmetic and remainder policy.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
            Payment Amount (Units / Stroops)
          </label>
          <input
            type="number"
            min="1"
            value={totalAmount}
            onChange={(e) => setTotalAmount(Math.max(1, parseInt(e.target.value) || 0))}
            className="w-full text-sm font-mono"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
            Member 1 Share (BPS)
          </label>
          <input
            type="number"
            min="0"
            max="10000"
            value={share1}
            onChange={(e) => {
              const val = parseInt(e.target.value) || 0;
              setShare1(val);
              setShare2(Math.max(0, 10000 - val));
            }}
            className="w-full text-sm font-mono"
          />
          <span className="text-[11px] text-[var(--text-muted)] mt-1 block font-mono">
            = {(share1 / 100).toFixed(2)}%
          </span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
            Member 2 Share (BPS)
          </label>
          <input
            type="number"
            min="0"
            max="10000"
            value={share2}
            onChange={(e) => {
              const val = parseInt(e.target.value) || 0;
              setShare2(val);
              setShare1(Math.max(0, 10000 - val));
            }}
            className="w-full text-sm font-mono"
          />
          <span className="text-[11px] text-[var(--text-muted)] mt-1 block font-mono">
            = {(share2 / 100).toFixed(2)}%
          </span>
        </div>
      </div>

      {/* Validation status */}
      <div className="flex items-center justify-between text-xs px-3 py-2 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] mb-4">
        <span className="text-[var(--text-secondary)]">Total BPS Sum:</span>
        <div className="flex items-center gap-1.5 font-mono">
          <span className={isValidBps ? "text-emerald-400 font-bold" : "text-rose-400 font-bold"}>
            {totalBps} / 10,000 BPS
          </span>
          {isValidBps ? (
            <Check className="h-4 w-4 text-emerald-400" />
          ) : (
            <AlertCircle className="h-4 w-4 text-rose-400" />
          )}
        </div>
      </div>

      {/* Distribution output table */}
      <div className="overflow-x-auto rounded-xl border border-[var(--border-default)]">
        <table className="w-full text-left text-xs font-mono">
          <thead className="bg-[var(--bg-subtle)] text-[var(--text-secondary)]">
            <tr>
              <th className="p-2.5">Member</th>
              <th className="p-2.5">Share</th>
              <th className="p-2.5">Raw Integer Allocation</th>
              <th className="p-2.5">Remainder Added</th>
              <th className="p-2.5 font-bold text-[var(--accent)]">Final Disbursement</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-subtle)]">
            <tr>
              <td className="p-2.5 font-semibold text-[var(--text-primary)]">
                Member 0 (Primary)
              </td>
              <td className="p-2.5">{share1} BPS</td>
              <td className="p-2.5 text-[var(--text-secondary)]">{alloc1Raw}</td>
              <td className="p-2.5 text-emerald-400">+{remainder} (Deterministic)</td>
              <td className="p-2.5 font-bold text-emerald-300">{alloc1Final}</td>
            </tr>
            <tr>
              <td className="p-2.5 font-semibold text-[var(--text-primary)]">
                Member 1
              </td>
              <td className="p-2.5">{share2} BPS</td>
              <td className="p-2.5 text-[var(--text-secondary)]">{alloc2Raw}</td>
              <td className="p-2.5 text-[var(--text-muted)]">+0</td>
              <td className="p-2.5 font-bold text-emerald-300">{alloc2Final}</td>
            </tr>
            <tr className="bg-[var(--bg-subtle)]/50 font-semibold">
              <td className="p-2.5 text-[var(--text-primary)]">Protocol Sum</td>
              <td className="p-2.5">{totalBps} BPS</td>
              <td className="p-2.5">{allocatedSum}</td>
              <td className="p-2.5">+{remainder}</td>
              <td className="p-2.5 font-bold text-[var(--accent)]">
                {finalSum} = {totalAmount} (0 Stroop Loss)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
