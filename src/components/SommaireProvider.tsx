"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Summary } from "@/lib/summaries";
import { rubriques } from "@/content/rubriques";
import { asset } from "@/lib/asset";
import { useOrder } from "@/lib/order";

interface Ctx {
  open: boolean;
  setOpen: (v: boolean) => void;
}
const SommaireContext = createContext<Ctx>({ open: false, setOpen: () => {} });
export const useSommaire = () => useContext(SommaireContext);

export function SommaireProvider({ summaries, children }: { summaries: Summary[]; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ open, setOpen }), [open]);
  return (
    <SommaireContext.Provider value={value}>
      {children}
      <SommaireOverlay summaries={summaries} />
    </SommaireContext.Provider>
  );
}

function SommaireOverlay({ summaries }: { summaries: Summary[] }) {
  const { open, setOpen } = useSommaire();
  const pathname = usePathname();
  const defaults = useMemo(() => summaries.map((s) => s.slug), [summaries]);
  const order = useOrder(defaults);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), [setOpen]);

  // Close when the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Remember what opened the drawer so focus can go back there on close.
    const opener = document.activeElement as HTMLElement | null;
    // Wait a tick: the dialog only becomes focusable once inert and visibility have been applied.
    const timer = window.setTimeout(() => closeRef.current?.focus(), 30);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      // Trap Tab inside the drawer.
      const items = panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      if (opener && document.contains(opener)) opener.focus();
    };
  }, [open, close]);

  const ordered = order.map((s) => summaries.find((x) => x.slug === s)).filter((x): x is Summary => !!x);
  const currentSlug = pathname.match(/\/articles\/([^/]+)/)?.[1];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Sommaire du numéro 90"
      aria-hidden={!open}
      inert={!open}
      data-overlay
      className={`fixed inset-0 z-[70] overflow-y-auto bg-ink text-white transition-[opacity,visibility] duration-300 motion-reduce:transition-none ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div ref={panelRef} className="on-dark mx-auto flex min-h-full w-full max-w-3xl flex-col px-5 pb-10 md:px-8">
        <div className="sticky top-0 z-10 -mx-5 flex items-center justify-between bg-ink px-5 py-4 md:-mx-8 md:px-8">
          <p className="font-display text-2xl">
            Sommaire <span className="text-white/70">n°90</span>
          </p>
          <button
            ref={closeRef}
            onClick={close}
            className="press flex h-12 items-center gap-2 rounded-full bg-white px-5 text-base font-semibold text-ink hover:bg-violet hover:text-white"
          >
            Fermer
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <ol className="mt-2 divide-y divide-white/15 border-y border-white/15">
          {ordered.map((s, i) => {
            const r = rubriques[s.rubrique];
            const current = s.slug === currentSlug;
            return (
              <li key={s.slug}>
                <Link
                  href={`/articles/${s.slug}/`}
                  className={`group flex items-center gap-3 border-l-4 py-4 pl-3 pr-2 outline-offset-[-3px] transition-colors hover:bg-white/10 md:gap-4 ${current ? "bg-white/10" : ""}`}
                  style={{ borderLeftColor: r.color }}
                  aria-current={current ? "page" : undefined}
                >
                  <span aria-hidden className="w-7 shrink-0 font-display text-xl text-white/70 md:w-9 md:text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md md:h-20 md:w-24">
                    <Image src={asset(s.coverSrc)} alt="" fill sizes="96px" className="object-cover" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2 text-sm font-semibold">
                      <span className="h-2.5 w-2.5 rounded-full ring-2 ring-white/70" style={{ background: r.color }} />
                      <span style={{ color: `color-mix(in srgb, ${r.color} 45%, white)` }}>{r.label}</span>
                      {current && <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-ink">Vous lisez</span>}
                    </span>
                    <span className="mt-0.5 block font-display text-xl leading-tight group-hover:underline md:text-2xl">
                      {s.title}
                    </span>
                  </span>
                  <span className="hidden text-sm text-white/70 sm:block">p. {s.printPages}</span>
                </Link>
              </li>
            );
          })}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="press inline-flex h-12 items-center rounded-full bg-white px-6 font-semibold text-ink hover:bg-violet hover:text-white">
            Couverture et numéros précédents
          </Link>
        </div>
      </div>
    </div>
  );
}
