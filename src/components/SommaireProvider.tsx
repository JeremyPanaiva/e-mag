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
  const close = useCallback(() => setOpen(false), [setOpen]);

  // Close when the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
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
      <div className="mx-auto flex min-h-full w-full max-w-3xl flex-col px-5 pb-10 pt-4 md:px-8">
        <div className="flex items-center justify-between">
          <p className="font-display text-2xl">
            Sommaire <span className="text-white/60">n°90</span>
          </p>
          <button
            ref={closeRef}
            onClick={close}
            className="flex h-12 items-center gap-2 rounded-full bg-white/10 px-5 text-base font-semibold hover:bg-white/20"
          >
            Fermer
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <ol className="mt-6 divide-y divide-white/15 border-y border-white/15">
          {ordered.map((s) => {
            const r = rubriques[s.rubrique];
            const current = s.slug === currentSlug;
            return (
              <li key={s.slug}>
                <Link
                  href={`/articles/${s.slug}/`}
                  className="group flex items-center gap-4 py-4 outline-offset-[-3px]"
                  aria-current={current ? "page" : undefined}
                >
                  <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md md:h-20 md:w-24">
                    <Image src={asset(s.coverSrc)} alt="" fill sizes="96px" className="object-cover" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2 text-sm font-semibold">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: r.color }} />
                      <span style={{ color: `color-mix(in srgb, ${r.color} 55%, white)` }}>{r.label}</span>
                      {current && <span className="rounded-full bg-white/15 px-2 py-0.5 text-xs">Vous lisez</span>}
                    </span>
                    <span className="mt-0.5 block font-display text-xl leading-tight group-hover:underline md:text-2xl">
                      {s.title}
                    </span>
                  </span>
                  <span className="hidden text-sm text-white/50 sm:block">p. {s.printPages}</span>
                </Link>
              </li>
            );
          })}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="inline-flex h-12 items-center rounded-full bg-white px-6 font-semibold text-ink">
            Couverture et numéros précédents
          </Link>
        </div>
      </div>
    </div>
  );
}
