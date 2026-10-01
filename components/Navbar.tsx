// SplitPay brandmark integration
// Sticky documentation topbar with search trigger and DApp link
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Search, ExternalLink, Moon, Sun, Menu, X } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

interface NavbarProps {
  onOpenSearch: () => void;
  onToggleMobileMenu?: () => void;
  isMobileMenuOpen?: boolean;
}

export function Navbar({ onOpenSearch, onToggleMobileMenu, isMobileMenuOpen }: NavbarProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem("splitpay_docs_theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("splitpay_docs_theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const navLinks = [
    { label: "Docs", href: "/docs/introduction/overview" },
    { label: "Protocol", href: "/docs/protocol/contract-overview" },
    { label: "Web App", href: "/docs/web/overview" },
    { label: "Guides", href: "/docs/guides/create-a-pool" },
    { label: "Reference", href: "/docs/reference/contract" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-default)] bg-[var(--bg-app)]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Mobile hamburger & Logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleMobileMenu}
            className="inline-flex md:hidden items-center justify-center p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo.jpg"
              alt="SplitPay Logo"
              width={34}
              height={34}
              className="rounded-xl object-cover ring-1 ring-[var(--border-default)] shadow-sm transition-transform group-hover:scale-105"
              priority
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-[var(--text-primary)] font-['Space_Grotesk']">
                  SplitPay
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)]">
                  Docs
                </span>
              </div>
              <span className="text-[11px] text-[var(--text-muted)] -mt-1 hidden sm:inline">
                Stellar / Soroban Protocol
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Search trigger & Quick Links */}
        <div className="flex items-center gap-4 flex-1 max-w-md mx-4 lg:mx-8">
          <button
            type="button"
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between gap-3 px-3.5 py-2 text-sm text-[var(--text-muted)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-default)] hover:border-[var(--border-active)] rounded-lg transition-all shadow-inner"
          >
            <div className="flex items-center gap-2.5 truncate">
              <Search className="h-4 w-4 text-[var(--text-muted)]" />
              <span className="truncate">Search protocol, methods, guides...</span>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-medium rounded bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                Ctrl
              </kbd>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-medium rounded bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                K
              </kbd>
            </div>
          </button>
        </div>

        {/* Right: Navigation, Theme & Links */}
        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-1 mr-2">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href.split("/").slice(0, 3).join("/"));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-[var(--accent)] bg-[var(--accent-subtle)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="h-4 w-px bg-[var(--border-default)] hidden md:block" />

          {/* Product DApp Link */}
          <a
            href="http://splitpay.samkiel.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white shadow-sm transition-all"
          >
            <span>App</span>
            <ExternalLink className="h-3 w-3" />
          </a>

          {/* GitHub Repo */}
          <a
            href="https://github.com/Splitpayx"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-colors"
            title="GitHub Organization"
          >
            <GithubIcon className="h-4 w-4" />
          </a>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-colors"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4 text-slate-700" />}
          </button>
        </div>
      </div>
    </header>
  );
}
