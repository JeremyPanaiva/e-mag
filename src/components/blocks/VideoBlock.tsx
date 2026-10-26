"use client";

import Image from "next/image";
import { useState } from "react";
import { asset } from "@/lib/asset";

export function VideoBlock({ title, poster }: { title: string; poster: string }) {
  const [shown, setShown] = useState(false);
  return (
    <figure className="wide my-12 md:my-16">
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink">
        <Image src={asset(poster)} alt="" fill sizes="(min-width:1024px) 960px, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-sm font-semibold text-ink">Vidéo</span>
        {!shown && (
          <button
            onClick={() => setShown(true)}
            aria-label={`Lire la vidéo : ${title}`}
            className="group absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-[var(--accent)] shadow-xl transition-transform group-hover:scale-110 motion-reduce:transition-none md:h-24 md:w-24">
              <svg width="30" height="34" viewBox="0 0 30 34" aria-hidden>
                <path d="M4 3l24 14L4 31z" fill="currentColor" />
              </svg>
            </span>
          </button>
        )}
        {shown && (
          <div role="status" className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink/90 p-6 text-center text-white backdrop-blur-sm">
            <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-sm font-semibold text-[var(--on-accent)]">
              Démo
            </span>
            <p className="max-w-md font-display text-xl leading-snug md:text-3xl">
              Emplacement vidéo : ici, l&apos;interview filmée sera intégrée.
            </p>
            <button onClick={() => setShown(false)} className="mt-2 h-11 rounded-full bg-white/15 px-5 font-semibold hover:bg-white/25">
              Revenir à l&apos;aperçu
            </button>
          </div>
        )}
      </div>
      <figcaption className="mt-3 font-semibold">{title}</figcaption>
    </figure>
  );
}
