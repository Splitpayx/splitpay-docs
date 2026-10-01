// Homepage brandmark
// SplitPay documentation homepage landing view
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { SearchModal } from "@/components/SearchModal";
import {
  Layers,
  ArrowRight,
  Cpu,
  Globe,
  Smartphone,
  Box,
  Server,
  ShieldCheck,
  Zap,
  CheckCircle,
  ExternalLink,
  Terminal,
  Code2
} from "lucide-react";

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-app)] text-[var(--text-primary)]">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-14 pb-20 lg:pt-20 lg:pb-28 border-b border-[var(--border-default)]">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1E3358_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.jpg"
              alt="SplitPay Logo"
              width={64}
              height={64}
              className="rounded-2xl shadow-xl ring-2 ring-[var(--accent)]/40 object-cover"
              priority
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-xs font-semibold text-[var(--accent)]">
            <span className="flex h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
            Soroban v22 Smart Contract Documentation
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] font-['Space_Grotesk'] max-w-4xl mx-auto leading-tight">
            Collaborative Payment Distribution on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-cyan-400">
              Stellar
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            SplitPay is an automated, non-custodial payment splitting protocol powered by Soroban smart contracts. Funds are distributed atomically and mathematically verified in a single transaction.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/docs/introduction/overview"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-semibold shadow-lg shadow-[#14B8A6]/20 transition-all hover:scale-[1.02]"
            >
              <span>Explore Documentation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/docs/getting-started/quick-start"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-sm font-semibold text-[var(--text-primary)] transition-all"
            >
              <Terminal className="h-4 w-4 text-[var(--accent)]" />
              <span>5-Minute Quick Start</span>
            </Link>

            <Link
              href="/docs/protocol/methods"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-sm font-semibold text-[var(--text-primary)] transition-all"
            >
              <Code2 className="h-4 w-4 text-cyan-400" />
              <span>Contract Methods</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Protocol Core Guarantees */}
      <section className="py-16 border-b border-[var(--border-default)] bg-[var(--bg-subtle)]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] font-['Space_Grotesk']">
              Core Protocol Invariants
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Formal guarantees implemented in Rust and verified by comprehensive automated test suites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center mb-4">
                <CheckCircle className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)] font-['Space_Grotesk'] mb-2">
                10,000 Basis Points Rule
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Pools strictly require member shares to sum to exactly 10,000 BPS (100.00%). Floating-point division is forbidden to ensure deterministic integer execution.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-cyan-950/40 text-cyan-400 flex items-center justify-center mb-4 border border-cyan-500/20">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)] font-['Space_Grotesk'] mb-2">
                Deterministic Remainder Handling
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Integer division differences are deterministically awarded to the primary member (index 0). Zero stroops are lost; sum of distributions equals the gross payment.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-emerald-950/40 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)] font-['Space_Grotesk'] mb-2">
                Immutable Distribution Snapshots
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Payment settlements snapshot the active pool split at execution time. Future changes to members or shares never alter historical disbursements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Repositories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] font-['Space_Grotesk']">
              The SplitPay Ecosystem
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Modular architecture organized under the Splitpayx organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* splitpay-contract */}
            <Link
              href="/docs/protocol/contract-overview"
              className="group p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] hover:border-[var(--accent)] hover:bg-[var(--bg-card-hover)] transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-9 w-9 rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-500/20">
                    Active (Testnet)
                  </span>
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] font-['Space_Grotesk'] transition-colors">
                  splitpay-contracts
                </h3>
                <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                  Soroban smart contract written in Rust. Enforces on-chain pool rules, SEP-41 token transfers, and immutable distributions.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center text-xs font-semibold text-[var(--accent)]">
                <span>View Contract Architecture</span>
                <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* splitpay-web */}
            <Link
              href="/docs/web/overview"
              className="group p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] hover:border-[var(--accent)] hover:bg-[var(--bg-card-hover)] transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-9 w-9 rounded-lg bg-cyan-950/40 text-cyan-400 flex items-center justify-center">
                    <Globe className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-500/20">
                    Active (Next.js 16)
                  </span>
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] font-['Space_Grotesk'] transition-colors">
                  splitpay-web
                </h3>
                <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                  Next.js App Router web application with native Freighter wallet connection, dev keypair signer, and interactive pool management.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center text-xs font-semibold text-[var(--accent)]">
                <span>View Web Documentation</span>
                <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* splitpay-mobile */}
            <Link
              href="/docs/mobile/overview"
              className="group p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] hover:border-[var(--accent)] hover:bg-[var(--bg-card-hover)] transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-9 w-9 rounded-lg bg-amber-950/40 text-amber-400 flex items-center justify-center">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-950/40 text-amber-400 border border-amber-500/20">
                    Scaffolding / Planned
                  </span>
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] font-['Space_Grotesk'] transition-colors">
                  splitpay-mobile
                </h3>
                <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                  React Native mobile client planned to deliver native wallet signing and pool monitoring on iOS and Android devices.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center text-xs font-semibold text-[var(--accent)]">
                <span>View Mobile Roadmap</span>
                <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* splitpay-sdk */}
            <Link
              href="/docs/sdk/overview"
              className="group p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] hover:border-[var(--accent)] hover:bg-[var(--bg-card-hover)] transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-9 w-9 rounded-lg bg-indigo-950/40 text-indigo-400 flex items-center justify-center">
                    <Box className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-950/40 text-blue-400 border border-blue-500/20">
                    Client Implemented
                  </span>
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] font-['Space_Grotesk'] transition-colors">
                  splitpay-sdk
                </h3>
                <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                  Typed TypeScript client implemented in web library (<code className="text-[11px]">SplitPayContractClient</code>), with standalone npm package planned.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center text-xs font-semibold text-[var(--accent)]">
                <span>View Client & SDK Reference</span>
                <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* splitpay-api */}
            <Link
              href="/docs/api/overview"
              className="group p-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] hover:border-[var(--accent)] hover:bg-[var(--bg-card-hover)] transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-9 w-9 rounded-lg bg-purple-950/40 text-purple-400 flex items-center justify-center">
                    <Server className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-950/40 text-purple-400 border border-purple-500/20">
                    Planned Service
                  </span>
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] font-['Space_Grotesk'] transition-colors">
                  splitpay-api
                </h3>
                <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                  Optional off-chain indexing and notification service. All financial settlement rules remain strictly on-chain on Stellar.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center text-xs font-semibold text-[var(--accent)]">
                <span>View API Architecture</span>
                <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* splitpay-docs */}
            <div className="p-6 rounded-2xl border border-[var(--accent)]/40 bg-[var(--accent-subtle)]/20 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Image
                    src="/logo.jpg"
                    alt="SplitPay"
                    width={36}
                    height={36}
                    className="rounded-lg object-cover ring-1 ring-[var(--accent)]"
                  />
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--accent)]/20 text-[var(--accent)] border border-[var(--accent)]/30 font-semibold">
                    Current Platform
                  </span>
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] font-['Space_Grotesk']">
                  splitpay-docs
                </h3>
                <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                  Official developer documentation hub for SplitPay protocol specifications, contract interfaces, guides, and integration tutorials.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">
                Maintained by SplitPay Core Contributors
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border-default)] bg-[var(--bg-subtle)] py-8 mt-auto text-xs text-[var(--text-muted)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[var(--text-primary)] font-['Space_Grotesk']">
              SplitPay Protocol
            </span>
            <span>—</span>
            <span>Non-Custodial Stellar & Soroban Collaborative Payments</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="http://splitpay.samkiel.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors"
            >
              Live Application
            </a>
            <span>•</span>
            <a
              href="https://github.com/Splitpayx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors"
            >
              GitHub Organization
            </a>
            <span>•</span>
            <a
              href="https://stellar.expert/explorer/testnet"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors"
            >
              Stellar Expert
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
