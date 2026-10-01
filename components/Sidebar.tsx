// Responsive navigation drawer
// Responsive documentation sidebar with active route highlighting
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOC_SECTIONS } from "@/lib/navigation";
import {
  BookOpen,
  Rocket,
  Lightbulb,
  Cpu,
  Globe,
  Smartphone,
  Box,
  Server,
  FileCode,
  Bookmark,
  GitPullRequest,
  HelpCircle,
  ChevronRight
} from "lucide-react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const SECTION_ICONS: Record<string, React.ReactNode> = {
  introduction: <BookOpen className="h-4 w-4" />,
  "getting-started": <Rocket className="h-4 w-4" />,
  concepts: <Lightbulb className="h-4 w-4" />,
  protocol: <Cpu className="h-4 w-4" />,
  web: <Globe className="h-4 w-4" />,
  mobile: <Smartphone className="h-4 w-4" />,
  sdk: <Box className="h-4 w-4" />,
  api: <Server className="h-4 w-4" />,
  guides: <FileCode className="h-4 w-4" />,
  reference: <Bookmark className="h-4 w-4" />,
  contributing: <GitPullRequest className="h-4 w-4" />,
  faq: <HelpCircle className="h-4 w-4" />,
};

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const content = (
    <div className="flex flex-col h-full overflow-y-auto px-4 py-6 space-y-6">
      <div className="px-2 pb-2 border-b border-[var(--border-subtle)]">
        <div className="flex items-center justify-between text-xs text-[var(--text-muted)] font-medium">
          <span>DOCUMENTATION</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-default)] text-[var(--text-secondary)]">
            v1.0 (Testnet)
          </span>
        </div>
      </div>

      <nav className="space-y-6">
        {DOC_SECTIONS.map((section) => (
          <div key={section.slug} className="space-y-1.5">
            <div className="flex items-center gap-2 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              {SECTION_ICONS[section.slug] && (
                <span className="text-[var(--accent)]">{SECTION_ICONS[section.slug]}</span>
              )}
              <span>{section.title}</span>
            </div>
            <div className="space-y-0.5 pl-2 border-l border-[var(--border-subtle)] ml-3">
              {section.items.map((item) => {
                const itemHref = `/docs/${item.slug}`;
                const isActive = pathname === itemHref;
                return (
                  <Link
                    key={item.slug}
                    href={itemHref}
                    onClick={onClose}
                    className={`group flex items-center justify-between px-2.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                      isActive
                        ? "text-[var(--accent)] bg-[var(--accent-subtle)] font-semibold border-l-2 border-[var(--accent)] -ml-[2px]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
                    }`}
                  >
                    <span className="truncate">{item.title}</span>
                    {isActive && (
                      <ChevronRight className="h-3 w-3 text-[var(--accent)] shrink-0" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-60 lg:w-64 xl:w-72 shrink-0 border-r border-[var(--border-default)] sticky top-16 h-[calc(100vh-4rem)] bg-[var(--bg-app)]">
        {content}
      </aside>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={onClose}
          />
          <div className="relative w-72 max-w-[80vw] h-full bg-[var(--bg-app)] border-r border-[var(--border-default)] shadow-2xl z-10 flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-default)]">
              <span className="font-bold text-sm text-[var(--text-primary)] font-['Space_Grotesk']">
                SplitPay Navigation
              </span>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
              >
                ✕
              </button>
            </div>
            {content}
          </div>
        </div>
      )}
    </>
  );
}
