// Search performance
// SearchModal modal dialog with real-time indexing
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ALL_DOC_PAGES } from "@/lib/navigation";
import { Search, X, ChevronRight, Hash, FileText } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  title: string;
  slug: string;
  category: string;
  snippet: string;
  type: "page" | "keyword" | "method";
}

// Pre-indexed search data with specific technical terms
const SEARCH_ENTRIES: SearchResult[] = [
  ...ALL_DOC_PAGES.map((page) => ({
    title: page.title,
    slug: page.slug,
    category: page.category,
    snippet: page.description,
    type: "page" as const,
  })),
  // Direct technical keyword entries for exact search queries
  {
    title: "create_pool Method",
    slug: "protocol/methods#create_pool",
    category: "Contract Methods",
    snippet: "create_pool(pool_id: u64, owner: Address, asset: Address) -> Result<(), Error>",
    type: "method",
  },
  {
    title: "settle_payment Method",
    slug: "protocol/methods#settle_payment",
    category: "Contract Methods",
    snippet: "settle_payment(payment_id: u64) -> Result<(), Error> — Atomically funds and distributes payment.",
    type: "method",
  },
  {
    title: "Basis Points (BPS) Accounting",
    slug: "concepts/shares",
    category: "Concepts",
    snippet: "10,000 BPS = 100%. Total shares must equal exactly 10,000 before any payment is settled.",
    type: "keyword",
  },
  {
    title: "Deterministic Remainder Policy",
    slug: "protocol/remainder-handling",
    category: "Protocol",
    snippet: "Any remainder stroops from integer division are deterministically assigned to member at index 0.",
    type: "keyword",
  },
  {
    title: "Distributions & Payment Snapshots",
    slug: "concepts/distributions",
    category: "Concepts",
    snippet: "Historical distributions record immutable payout amounts per member at settlement time.",
    type: "keyword",
  },
  {
    title: "Stellar Testnet & RPC",
    slug: "getting-started/testnet",
    category: "Getting Started",
    snippet: "Testnet RPC: https://soroban-testnet.stellar.org. Network passphrase and Horizon endpoints.",
    type: "keyword",
  },
  {
    title: "Freighter Wallet Integration",
    slug: "getting-started/wallet-setup",
    category: "Getting Started",
    snippet: "Using @stellar/freighter-api for non-custodial transaction signing and key management.",
    type: "keyword",
  },
  {
    title: "add_member Method",
    slug: "protocol/methods#add_member",
    category: "Contract Methods",
    snippet: "add_member(pool_id: u64, address: Address, share_bps: u32) -> Result<(), Error>",
    type: "method",
  },
  {
    title: "create_payment Method",
    slug: "protocol/methods#create_payment",
    category: "Contract Methods",
    snippet: "create_payment(payment_id: u64, pool_id: u64, payer: Address, amount: i128) -> Result<(), Error>",
    type: "method",
  },
  {
    title: "get_distribution & get_distributions",
    slug: "protocol/methods#get_distributions",
    category: "Contract Methods",
    snippet: "Query immutable payout records for a settled payment by payment ID.",
    type: "method",
  },
  {
    title: "Contract Error Codes",
    slug: "reference/errors",
    category: "Reference",
    snippet: "Numeric error codes from 1 to 17: AlreadyInitialized, InvalidTotalShares, PaymentAlreadySettled, etc.",
    type: "keyword",
  },
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or shortcut listener
        }
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Filter results
  const results = React.useMemo(() => {
    if (!query.trim()) {
      return SEARCH_ENTRIES.slice(0, 7);
    }
    const q = query.toLowerCase();
    return SEARCH_ENTRIES.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchCategory = item.category.toLowerCase().includes(q);
      const matchSnippet = item.snippet.toLowerCase().includes(q);
      const matchSlug = item.slug.toLowerCase().includes(q);
      return matchTitle || matchCategory || matchSnippet || matchSlug;
    }).slice(0, 10);
  }, [query]);

  const handleSelect = (slug: string) => {
    onClose();
    router.push(`/docs/${slug}`);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, results.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % Math.max(1, results.length));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      e.preventDefault();
      handleSelect(results[selectedIndex].slug);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl rounded-2xl border border-[var(--border-default)] bg-[var(--bg-app)] shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border-default)] bg-[var(--bg-card)]">
          <Search className="h-5 w-5 text-[var(--accent)] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleInputKeyDown}
            placeholder="Search documentation, methods (create_pool, settle_payment), BPS, Testnet..."
            className="w-full bg-transparent border-0 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-0 p-0"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono rounded bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
            ESC
          </kbd>
        </div>

        {/* Results list */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-[var(--border-subtle)]/40">
          {results.length === 0 ? (
            <div className="p-8 text-center text-sm text-[var(--text-muted)]">
              No results found for &ldquo;<span className="text-[var(--text-primary)] font-medium">{query}</span>&rdquo;.
              Try searching for <span className="text-[var(--accent)]">create_pool</span>, <span className="text-[var(--accent)]">settle_payment</span>, <span className="text-[var(--accent)]">BPS</span>, or <span className="text-[var(--accent)]">Testnet</span>.
            </div>
          ) : (
            results.map((res, i) => {
              const isSelected = i === selectedIndex;
              return (
                <div
                  key={`${res.slug}-${i}`}
                  onClick={() => handleSelect(res.slug)}
                  onMouseEnter={() => setSelectedIndex(i)}
                  className={`group flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-[var(--accent-subtle)] border border-[var(--accent-border)]"
                      : "hover:bg-[var(--bg-card)] border border-transparent"
                  }`}
                >
                  <div className="mt-0.5 p-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-default)] text-[var(--accent)]">
                    {res.type === "method" ? (
                      <Hash className="h-4 w-4" />
                    ) : (
                      <FileText className="h-4 w-4" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {res.title}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                        {res.category}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5 line-clamp-1">
                      {res.snippet}
                    </p>
                  </div>

                  <ChevronRight
                    className={`h-4 w-4 mt-1 transition-opacity ${
                      isSelected ? "text-[var(--accent)] opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--bg-subtle)] border-t border-[var(--border-default)] text-[11px] text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] mr-1">↑</kbd>
              <kbd className="px-1 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] mr-1">↓</kbd>
              Navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] mr-1">↵</kbd>
              Select
            </span>
          </div>
          <span>SplitPay Documentation Search</span>
        </div>
      </div>
    </div>
  );
}
