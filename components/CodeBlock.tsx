// CodeBlock with syntax styling, clipboard copy, and visual feedback
"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "bash",
  filename,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const lines = code.trim().split("\n");

  return (
    <div className="my-5 rounded-xl border border-[var(--border-default)] bg-[var(--code-bg)] overflow-hidden shadow-sm">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[var(--bg-card)]/70 border-b border-[var(--border-default)] text-xs">
        <div className="flex items-center gap-2 text-[var(--text-secondary)]">
          {language === "bash" || language === "sh" ? (
            <Terminal className="h-3.5 w-3.5 text-[var(--accent)]" />
          ) : (
            <span className="font-mono uppercase font-semibold text-[10px] text-[var(--accent)] px-1.5 py-0.5 rounded bg-[var(--accent-subtle)] border border-[var(--accent-border)]">
              {language}
            </span>
          )}
          {filename && (
            <span className="font-mono text-xs text-[var(--text-primary)] font-medium">
              {filename}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <div className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-slate-200">
        <pre className="m-0">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell pr-4 text-right select-none text-[var(--text-muted)] text-xs">
                    {i + 1}
                  </span>
                )}
                <span className="table-cell whitespace-pre">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
