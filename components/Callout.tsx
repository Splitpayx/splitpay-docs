import React from "react";
import { Info, Lightbulb, AlertTriangle, AlertOctagon, CheckCircle2 } from "lucide-react";

interface CalloutProps {
  type?: "info" | "tip" | "warning" | "danger" | "important";
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const configs = {
    info: {
      border: "border-[var(--border-default)] border-l-4 border-l-cyan-400",
      bg: "bg-[var(--bg-card)]",
      icon: <Info className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />,
      titleColor: "text-cyan-400",
      defaultTitle: "Note",
    },
    tip: {
      border: "border-[var(--border-default)] border-l-4 border-l-emerald-400",
      bg: "bg-[var(--bg-card)]",
      icon: <Lightbulb className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />,
      titleColor: "text-emerald-400",
      defaultTitle: "Tip",
    },
    warning: {
      border: "border-[var(--border-default)] border-l-4 border-l-amber-400",
      bg: "bg-[var(--bg-card)]",
      icon: <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />,
      titleColor: "text-amber-400",
      defaultTitle: "Warning",
    },
    danger: {
      border: "border-[var(--border-default)] border-l-4 border-l-rose-400",
      bg: "bg-[var(--bg-card)]",
      icon: <AlertOctagon className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />,
      titleColor: "text-rose-400",
      defaultTitle: "Critical",
    },
    important: {
      border: "border-[var(--border-default)] border-l-4 border-l-teal-400",
      bg: "bg-[var(--bg-card)]",
      icon: <CheckCircle2 className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />,
      titleColor: "text-teal-400",
      defaultTitle: "Important",
    },
  };

  const cfg = configs[type] || configs.info;

  return (
    <div className={`my-6 rounded-xl border ${cfg.border} ${cfg.bg} p-4 text-sm shadow-sm transition-all`}>
      <div className="flex gap-3">
        {cfg.icon}
        <div className="space-y-1.5 flex-1">
          <div className={`font-bold text-sm tracking-tight ${cfg.titleColor}`}>
            {title || cfg.defaultTitle}
          </div>
          <div className="text-slate-200 leading-relaxed text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
