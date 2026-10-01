"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { TableOfContents } from "./TableOfContents";
import { SearchModal } from "./SearchModal";
import { TocItem } from "@/types/docs";
import { ChevronRight, ChevronLeft, ArrowRight, ArrowLeft, Menu } from "lucide-react";

interface DocsLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  category: string;
  toc?: TocItem[];
  prev?: { title: string; slug: string };
  next?: { title: string; slug: string };
}

export function DocsLayout({
  children,
  title,
  description,
  category,
  toc = [],
  prev,
  next,
}: DocsLayoutProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-app)] text-[var(--text-primary)]">
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Subheader Bar */}
      <div className="md:hidden sticky top-16 z-30 flex items-center justify-between px-4 py-2 bg-[var(--bg-card)]/95 backdrop-blur-md border-b border-[var(--border-default)] text-xs">
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--bg-app)] border border-[var(--border-default)] text-[var(--accent)] font-medium active:scale-95 transition-transform"
        >
          <Menu className="h-3.5 w-3.5" />
          <span>Documentation Menu</span>
        </button>
        <span className="text-[11px] text-[var(--text-muted)] truncate max-w-[180px]">
          {title}
        </span>
      </div>

      {/* Main Container */}
      <div className="mx-auto w-full max-w-7xl flex-1 flex">
        {/* Navigation Sidebar */}
        <Sidebar
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Content Body */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 py-8 lg:py-10 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-6 font-medium">
            <Link href="/docs/introduction/overview" className="hover:text-[var(--text-primary)]">
              Docs
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[var(--text-secondary)]">{category}</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[var(--text-primary)] font-semibold truncate">{title}</span>
          </nav>

          {/* Page Heading */}
          <header className="mb-8 pb-6 border-b border-[var(--border-subtle)]">
            <div className="inline-block px-2.5 py-0.5 mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent-subtle)] border border-[var(--accent-border)] rounded-md">
              {category}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] font-['Space_Grotesk']">
              {title}
            </h1>
            {description && (
              <p className="mt-3 text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                {description}
              </p>
            )}
          </header>

          {/* Page Markdown/JSX Content */}
          <div className="prose prose-invert max-w-none text-sm sm:text-[15px] leading-relaxed">
            {children}
          </div>

          {/* Prev / Next Page Links */}
          <div className="mt-14 pt-8 border-t border-[var(--border-default)] grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prev ? (
              <Link
                href={`/docs/${prev.slug}`}
                className="group flex flex-col p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] hover:border-[var(--accent)] hover:bg-[var(--bg-card-hover)] transition-all shadow-sm"
              >
                <span className="flex items-center gap-1 text-xs text-[var(--text-muted)] group-hover:text-[var(--accent)] mb-1">
                  <ArrowLeft className="h-3 w-3" /> Previous
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)] truncate font-['Space_Grotesk']">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/docs/${next.slug}`}
                className="group flex flex-col items-end p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] hover:border-[var(--accent)] hover:bg-[var(--bg-card-hover)] transition-all shadow-sm"
              >
                <span className="flex items-center gap-1 text-xs text-[var(--text-muted)] group-hover:text-[var(--accent)] mb-1">
                  Next <ArrowRight className="h-3 w-3" />
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)] truncate font-['Space_Grotesk']">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </main>

        {/* Right-hand Table of Contents */}
        <TableOfContents toc={toc} />
      </div>

      {/* Footer */}
      <footer className="border-t border-[var(--border-default)] bg-[var(--bg-subtle)] py-8 mt-16 text-xs text-[var(--text-muted)]">
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
