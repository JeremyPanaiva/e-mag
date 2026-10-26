"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useOrder } from "@/lib/order";
import type { Summary } from "@/lib/summaries";
import { useSommaire } from "./SommaireProvider";

// Bottom bar (prev / sommaire / next) + keyboard arrows + horizontal swipe between articles.
export function ArticleNav({ slug, summaries }: { slug: string; summaries: Summary[] }) {
  const router = useRouter();
  const { setOpen } = useSommaire();
  const defaults = useMemo(() => summaries.map((s) => s.slug), [summaries]);
  const order = useOrder(defaults);
  const i = order.indexOf(slug);
  const prev = i > 0 ? summaries.find((s) => s.slug === order[i - 1]) : undefined;
  const next = i >= 0 ? summaries.find((s) => s.slug === order[i + 1]) : undefined;

  useEffect(() => {
    const blocked = () =>
      !!document.querySelector("[data-lightbox]") || !!document.querySelector("[data-overlay]:not([inert])");

    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || blocked()) return;
      const t = e.target as HTMLElement | null;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.closest("[role=tablist]"))) return;
      if (e.key === "ArrowLeft" && prev) router.push(`/articles/${prev.slug}/`);
      if (e.key === "ArrowRight" && next) router.push(`/articles/${next.slug}/`);
    };

    let start: { x: number; y: number; t: number } | null = null;
    const onStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (e.touches.length !== 1 || blocked() || target?.closest("[data-no-swipe], input, textarea, [role=dialog]")) {
        start = null;
        return;
      }
      start = { x: e.touches[0].clientX, y: e.touches[0].clientY, t: Date.now() };
    };
    const onEnd = (e: TouchEvent) => {
      const s = start;
      start = null;
      if (!s) return;
      const dx = e.changedTouches[0].clientX - s.x;
      const dy = e.changedTouches[0].clientY - s.y;
      if (Date.now() - s.t > 700 || Math.abs(dx) < 90 || Math.abs(dx) < Math.abs(dy) * 2.2) return;
      if (window.getSelection()?.toString()) return;
      if (dx < 0 && next) router.push(`/articles/${next.slug}/`);
      if (dx > 0 && prev) router.push(`/articles/${prev.slug}/`);
    };

    window.addEventListener("keydown", onKey);
    document.addEventListener("touchstart", onStart, { passive: true });
    document.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("touchstart", onStart);
      document.removeEventListener("touchend", onEnd);
    };
  }, [prev, next, router]);

  return (
    <nav
      aria-label="Navigation entre les articles"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur"
    >
      <div className="mx-auto grid h-16 max-w-5xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-2 md:px-8">
        {prev ? (
          <Link href={`/articles/${prev.slug}/`} rel="prev" className="flex min-h-12 min-w-0 items-center gap-1.5 rounded-lg px-2 text-ink hover:bg-sand">
            <Arrow dir="left" />
            <span className="min-w-0">
              <span className="block text-sm font-semibold md:text-xs md:font-normal md:text-mute">Précédent</span>
              <span className="hidden truncate text-sm font-semibold md:block">{prev.title}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        <button
          onClick={() => setOpen(true)}
          className="flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-[0.95rem] font-semibold text-white hover:bg-violet"
        >
          <svg width="16" height="12" viewBox="0 0 18 14" aria-hidden>
            <path d="M0 1h18M0 7h12M0 13h18" stroke="currentColor" strokeWidth="2.2" />
          </svg>
          Sommaire
        </button>
        {next ? (
          <Link href={`/articles/${next.slug}/`} rel="next" className="flex min-h-12 min-w-0 items-center justify-end gap-1.5 rounded-lg px-2 text-right text-ink hover:bg-sand">
            <span className="min-w-0">
              <span className="block text-sm font-semibold md:text-xs md:font-normal md:text-mute">Suivant</span>
              <span className="hidden truncate text-sm font-semibold md:block">{next.title}</span>
            </span>
            <Arrow dir="right" />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden className="shrink-0">
      <path d={dir === "left" ? "M13 4l-7 7 7 7" : "M9 4l7 7-7 7"} stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
