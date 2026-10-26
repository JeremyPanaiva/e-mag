"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  width: number;
  height: number;
}

export function GalleryBlock({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const open = index !== null;

  const go = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [images.length],
  );
  const close = useCallback(() => {
    setIndex(null);
    opener.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, go, close]);

  const current = index !== null ? images[index] : null;

  return (
    <div className="wide my-12 md:my-16" data-no-swipe>
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
        {images.map((img, i) => (
          <li key={img.src} className={i === 0 && images.length % 2 === 1 ? "col-span-2 md:col-span-1" : ""}>
            <button
              onClick={(e) => {
                opener.current = e.currentTarget;
                setIndex(i);
              }}
              aria-label={`Agrandir la photo ${i + 1} sur ${images.length} : ${img.alt}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl"
            >
              <Image
                src={asset(img.src)}
                alt={img.alt}
                fill
                sizes="(min-width:768px) 320px, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
              />
              <span className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white">
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
                  <path d="M9 1h6v6M7 15H1V9M15 1L9.5 6.5M1 15l5.5-5.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
                </svg>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galerie photos"
          data-lightbox
          data-no-swipe
          className="fixed inset-0 z-[80] flex flex-col bg-black/95 text-white"
          onTouchStart={(e) => {
            touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          }}
          onTouchEnd={(e) => {
            const t = touch.current;
            touch.current = null;
            if (!t) return;
            const dx = e.changedTouches[0].clientX - t.x;
            const dy = e.changedTouches[0].clientY - t.y;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
          }}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <p className="text-sm text-white/70" aria-live="polite">
              {index! + 1} / {images.length}
            </p>
            <button ref={closeRef} onClick={close} className="flex h-11 items-center gap-2 rounded-full bg-white/15 px-4 font-semibold hover:bg-white/25">
              Fermer
              <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden>
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className="relative min-h-0 flex-1">
            <Image
              key={current.src}
              src={asset(current.src)}
              alt={current.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={() => go(-1)}
                  aria-label="Photo précédente"
                  className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 hover:bg-black/80 md:left-5"
                >
                  <svg width="12" height="20" viewBox="0 0 12 20" aria-hidden><path d="M10 2L2 10l8 8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Photo suivante"
                  className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 hover:bg-black/80 md:right-5"
                >
                  <svg width="12" height="20" viewBox="0 0 12 20" aria-hidden><path d="M2 2l8 8-8 8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </>
            )}
          </div>
          <p className="min-h-16 px-5 py-3 text-center text-sm text-white/80">
            {current.caption ?? current.alt}
            {current.credit && <span className="block text-xs text-white/50">{current.credit}</span>}
          </p>
        </div>
      )}
    </div>
  );
}
