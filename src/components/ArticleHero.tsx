import Image from "next/image";
import { rubriques } from "@/content/rubriques";
import type { Article } from "@/content/types";
import { asset } from "@/lib/asset";
import { onColor } from "@/lib/color";
import { kickerAdds } from "@/lib/kicker";

export function ArticleHero({ article, minutes }: { article: Article; minutes: number }) {
  const r = rubriques[article.rubrique];
  const fg = onColor(r.color);
  return (
    <header>
      <div className="relative isolate flex min-h-[34rem] items-end overflow-hidden text-white h-[86svh] md:h-[82svh]">
        <Image
          src={asset(article.cover.src)}
          alt={article.cover.alt}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `linear-gradient(to top, color-mix(in srgb, ${r.color} 70%, #000) 0%, color-mix(in srgb, ${r.color} 35%, rgba(0,0,0,.55)) 38%, rgba(0,0,0,.12) 72%, rgba(0,0,0,.25) 100%)`,
          }}
        />
        <div className="mx-auto w-full max-w-5xl px-5 pb-10 md:px-8 md:pb-16">
          <p className="rise mb-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex h-9 items-center rounded-full px-4 text-[0.95rem] font-semibold" style={{ background: r.color, color: fg }}>
              {r.label}
            </span>
            {kickerAdds(article.kicker, r.label) && (
              <span className="text-[0.95rem] font-semibold text-white/90">{article.kicker}</span>
            )}
          </p>
          <h1 className="rise rise-2 max-w-4xl font-display text-[2.4rem] leading-[1.04] text-balance md:text-7xl">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="rise rise-3 mt-4 max-w-2xl text-xl leading-snug text-white/90 md:text-2xl">{article.subtitle}</p>
          )}
        </div>
        {article.cover.credit && (
          <p className="absolute bottom-2 right-3 text-[0.7rem] text-white/70">{article.cover.credit}</p>
        )}
      </div>

      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-1 border-b border-line px-5 py-4 text-[0.95rem] text-mute md:px-8">
        <p>
          Par <span className="font-semibold text-ink">{article.author}</span>
        </p>
        <p>{minutes} min de lecture</p>
        <p>p. {article.printPages} du magazine papier</p>
      </div>
    </header>
  );
}
