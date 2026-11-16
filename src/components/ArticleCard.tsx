import Image from "next/image";
import Link from "next/link";
import { rubriques } from "@/content/rubriques";
import { asset } from "@/lib/asset";
import { onColor } from "@/lib/color";
import type { Summary } from "@/lib/summaries";
import { RubriqueTag } from "./RubriqueTag";

export type CardVariant = "feature" | "standard" | "wide";

const pad = (n: number) => String(n).padStart(2, "0");

function Arrow() {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5 motion-reduce:transition-none">
      <path d="M0 6h16M11 1l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// `n` is the 1-based position of the article in the issue (stable even when a filter is active).
export function ArticleCard({ s, variant, n, priority = false }: { s: Summary; variant: CardVariant; n: number; priority?: boolean }) {
  const r = rubriques[s.rubrique];
  const href = `/articles/${s.slug}/`;
  const meta = (
    <p className="text-sm">
      {s.readingMinutes} min de lecture · p. {s.printPages}
    </p>
  );

  if (variant === "feature") {
    const fg = onColor(r.color);
    return (
      <Link
        href={href}
        className="on-dark group grid overflow-hidden rounded-3xl shadow-sm transition-shadow duration-300 hover:shadow-2xl lg:grid-cols-12"
        style={{ background: r.color, color: fg, ["--accent" as string]: fg }}
      >
        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[36rem]">
          <Image
            src={asset(s.coverSrc)}
            alt={s.coverAlt}
            fill
            sizes="(min-width:1024px) 58vw, 100vw"
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
          />
          <span aria-hidden className="absolute left-5 top-4 font-display text-7xl leading-none text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:text-8xl">
            {pad(n)}
          </span>
        </div>
        <div className="flex flex-col justify-end gap-4 p-6 md:p-10 lg:col-span-5 lg:p-12">
          <span className="inline-flex w-fit items-center rounded-full px-3 py-1 text-sm font-semibold" style={{ background: fg, color: fg === "#ffffff" ? r.color : "#222120" }}>
            À la une · {r.label}
          </span>
          <h3 className="font-display text-[2.1rem] leading-[1.06] md:text-[2.5rem] lg:text-[2.75rem]">{s.title}</h3>
          <p className="text-lg leading-relaxed line-clamp-5">{s.chapo}</p>
          {meta}
          <span className="mt-1 inline-flex h-12 w-fit items-center gap-3 rounded-full px-6 font-semibold" style={{ background: fg, color: fg === "#ffffff" ? r.color : "#222120" }}>
            Lire l’article
            <Arrow />
          </span>
        </div>
      </Link>
    );
  }

  const wide = variant === "wide";
  return (
    <Link
      href={href}
      className={`group flex h-full flex-col transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${wide ? "lg:flex-row lg:items-stretch lg:gap-10" : ""}`}
      style={{ ["--accent" as string]: r.color, ["--accent-ink" as string]: `color-mix(in srgb, ${r.color} 68%, #000)` }}
    >
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm transition-shadow duration-300 group-hover:shadow-xl ${
          wide ? "lg:aspect-auto lg:min-h-[20rem] lg:w-[55%] lg:shrink-0" : ""
        }`}
        style={{ borderBottom: `6px solid ${r.color}` }}
      >
        <Image
          src={asset(s.coverSrc)}
          alt={s.coverAlt}
          fill
          sizes={wide ? "(min-width:1024px) 55vw, 100vw" : "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none"
        />
        <span aria-hidden className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 font-display text-lg leading-none text-ink shadow">
          {pad(n)}
        </span>
      </div>
      <div className={`flex flex-1 flex-col gap-2.5 pt-5 ${wide ? "lg:justify-center lg:pt-0" : ""}`}>
        <RubriqueTag id={s.rubrique} kicker={s.kicker} />
        <h3 className={`font-display leading-[1.12] decoration-2 underline-offset-4 group-hover:underline ${wide ? "text-[1.75rem] md:text-4xl" : "text-[1.65rem] md:text-[1.75rem]"}`} style={{ textDecorationColor: r.color }}>
          {s.title}
        </h3>
        <p className={`text-[1.05rem] leading-relaxed text-mute ${wide ? "line-clamp-5" : "line-clamp-3"}`}>{s.chapo}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-1 text-mute-strong">
          {meta}
          <span style={{ color: "var(--accent-ink)" }}>
            <Arrow />
          </span>
        </div>
      </div>
    </Link>
  );
}
