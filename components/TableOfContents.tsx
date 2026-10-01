"use client";

import React, { useEffect, useState } from "react";
import { TocItem } from "@/types/docs";
import { ArrowUp, AlignLeft } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

interface TableOfContentsProps {
  toc: TocItem[];
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (toc.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -70% 0%" }
    );

    toc.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [toc]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!toc || toc.length === 0) {
    return null;
  }

  return (
    <div className="hidden xl:block w-64 shrink-0 pl-8 sticky top-24 self-start max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
        <AlignLeft className="h-3.5 w-3.5 text-[var(--accent)]" />
        <span>On this page</span>
      </div>

      <nav className="space-y-1 text-xs">
        {toc.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block py-1 transition-colors ${
                item.level === 3 ? "pl-3 text-[11px]" : ""
              } ${
                isActive
                  ? "text-[var(--accent)] font-medium"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {item.text}
            </a>
          );
        })}
      </nav>

      <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] space-y-2 text-xs text-[var(--text-muted)]">
        <a
          href="https://github.com/Splitpayx/splitpay-docs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[var(--text-primary)] transition-colors"
        >
          <GithubIcon className="h-3.5 w-3.5" />
          <span>Edit on GitHub</span>
        </a>
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-[var(--text-primary)] transition-colors text-left"
        >
          <ArrowUp className="h-3.5 w-3.5" />
          <span>Back to top</span>
        </button>
      </div>
    </div>
  );
}
