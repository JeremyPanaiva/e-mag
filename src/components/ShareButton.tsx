"use client";

import { useState } from "react";

export function ShareButton({ title }: { title: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function share() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, text: title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setStatus("copied");
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 2500);
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={share}
        className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[var(--accent)] px-6 font-semibold text-[var(--on-accent)] transition-opacity hover:opacity-90"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
          <path d="M9 12V2M5 5.5L9 1.5l4 4M3 9v6h12V9" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Partager cet article
      </button>
      <span role="status" className="text-sm text-mute">
        {status === "copied" && "Lien copié dans le presse-papiers"}
        {status === "error" && "Copiez l'adresse depuis la barre du navigateur"}
      </span>
    </div>
  );
}
