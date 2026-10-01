import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-app)] text-[var(--text-primary)] px-4">
      <div className="max-w-md w-full text-center space-y-5 p-8 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] shadow-xl">
        <div className="h-12 w-12 rounded-xl bg-rose-950/40 text-rose-400 mx-auto flex items-center justify-center border border-rose-500/20 font-mono font-bold text-lg">
          404
        </div>
        <h1 className="text-2xl font-bold font-['Space_Grotesk']">Page Not Found</h1>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          The requested documentation page does not exist or has been relocated to another section.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/docs/introduction/overview"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-xs font-semibold shadow-sm transition-all"
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Go to Documentation</span>
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-xs font-semibold text-[var(--text-primary)] transition-all"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
