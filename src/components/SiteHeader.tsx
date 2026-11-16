"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useSommaire } from "./SommaireProvider";

export function SiteHeader() {
  const pathname = usePathname();
  const { setOpen } = useSommaire();
  const home = pathname === "/";
  const [pastCover, setPastCover] = useState(false);

  // On the home page the bar only appears once the cover has scrolled away.
  useEffect(() => {
    if (!home) return;
    const onScroll = () => setPastCover(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [home]);

  const hidden = home && !pastCover;
  return (
    <header
      inert={hidden}
      className={`z-40 flex h-16 items-center justify-between border-b border-line bg-white/95 px-4 backdrop-blur transition-transform duration-300 motion-reduce:transition-none md:px-8 ${
        home ? "fixed inset-x-0 top-0" : "sticky top-0"
      } ${hidden ? "-translate-y-full" : ""}`}
    >
      <Link href="/" aria-label="Pôles Actu, retour à la couverture" className="flex min-h-11 items-center gap-4">
        <Logo height={22} />
        <span aria-hidden className="hidden h-5 w-px bg-line sm:block" />
        <span aria-hidden className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-mute-strong sm:block">N° 90</span>
      </Link>
      <button
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="press flex h-11 items-center gap-2.5 rounded-full bg-ink px-5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-violet"
      >
        <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden>
          <path d="M0 1h18M0 7h12M0 13h18" stroke="currentColor" strokeWidth="2" />
        </svg>
        Sommaire
      </button>
    </header>
  );
}
