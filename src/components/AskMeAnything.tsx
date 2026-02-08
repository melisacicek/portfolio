"use client";

import { useState, useCallback } from "react";

export default function AskMeAnything() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const trimmed = query.trim();
      if (!trimmed || loading) return;

      setLoading(true);
      setError(null);
      setAnswer(null);

      try {
        const res = await fetch("/api/ask", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: trimmed }),
        });
        const data = await res.json();

        if (!res.ok) {
          setError(data?.error ?? "Yanıt alınamadı, tekrar deneyin.");
          return;
        }
        setAnswer(data.answer ?? null);
        if (!data.answer) setError("Yanıt alınamadı, tekrar deneyin.");
      } catch {
        setError("Yanıt alınamadı, tekrar deneyin.");
      } finally {
        setLoading(false);
      }
    },
    [query, loading]
  );

  return (
    <div className="w-full max-w-2xl mx-auto mb-6 sm:mb-10 px-1 sm:px-0">
      <form onSubmit={handleSubmit} className="flex gap-1.5 sm:gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Bana bir şey sor..."
          disabled={loading}
          className="flex-1 min-h-[44px] px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-full border border-zinc-200 bg-white/90 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:border-transparent focus-visible:ring-2 focus-visible:ring-zinc-300 disabled:opacity-60"
          aria-label="Soru sor"
        />
        <button
          type="submit"
          disabled={loading}
          className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 min-h-[44px] rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none"
          aria-label="Gönder"
        >
          {loading ? (
            <span className="sr-only">Yanıtlanıyor...</span>
          ) : (
            <span className="sr-only">Gönder</span>
          )}
          {loading ? (
            <svg
              className="w-5 h-5 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          )}
        </button>
      </form>
      {error && (
        <div
          className="mt-3 sm:mt-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm"
          role="alert"
        >
          {error}
        </div>
      )}
      {answer && !error && (
        <div
          className="mt-3 sm:mt-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/90 border border-zinc-200 text-zinc-700 shadow-sm text-sm sm:text-base"
          role="status"
          aria-live="polite"
        >
          {answer}
        </div>
      )}
    </div>
  );
}
