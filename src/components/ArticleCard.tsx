import Image from "next/image";
import Link from "next/link";
import { rubriques } from "@/content/rubriques";
import { asset } from "@/lib/asset";
import { onColor } from "@/lib/color";
import type { Summary } from "@/lib/summaries";
import { RubriqueTag } from "./RubriqueTag";

export type CardVariant = "feature" | "standard" | "tall" | "wide";

export function ArticleCard({ s, variant, priority = false }: { s: Summary; variant: CardVariant; priority?: boolean }) {
  const r = rubriques[s.rubrique];
  const href = `/articles/${s.slug}/`;
  const meta = (
    <p className="text-sm opacity-75">
      {s.readingMinutes} min de lecture · p. {s.printPages}
    </p>
  );

  if (variant === "feature") {
    const fg = onColor(r.color);
    return (
      <Link
        href={href}
        className="group grid overflow-hidden rounded-3xl lg:grid-cols-12"
        style={{ background: r.color, color: fg, ["--accent" as string]: fg }}
      >
        <div className="relative aspect-[4/3] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[34rem]">
          <Image
            src={asset(s.coverSrc)}
            alt={s.coverAlt}
            fill
            sizes="(min-width:1024px) 58vw, 100vw"
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
          />
        </div>
        <div className="flex flex-col justify-end gap-4 p-6 md:p-10 lg:col-span-5">
          <span className="inline-flex w-fit items-center rounded-full px-3 py-1 text-sm font-semibold" style={{ background: fg, color: r.color }}>
            À la une · {r.label}
          </span>
          <h3 className="font-display text-[2rem] leading-[1.08] md:text-5xl">{s.title}</h3>
          <p className="text-lg leading-relaxed opacity-90 line-clamp-5">{s.chapo}</p>
          {meta}
          <span className="mt-1 inline-flex h-12 w-fit items-center rounded-full px-6 font-semibold" style={{ background: fg, color: r.color }}>
            Lire l&apos;article
          </span>
        </div>
      </Link>
    );
  }

  const wide = variant === "wide";
  return (
    <Link
      href={href}
      className={`group flex h-full flex-col ${wide ? "lg:flex-row lg:gap-8" : ""}`}
      style={{ ["--accent" as string]: r.color }}
    >
      <div
        className={`relative overflow-hidden rounded-2xl ${
          wide ? "aspect-[4/3] lg:aspect-auto lg:w-[46%] lg:shrink-0" : variant === "tall" ? "aspect-[4/3] md:aspect-[4/5]" : "aspect-[4/3]"
        }`}
        style={{ borderBottom: `5px solid ${r.color}` }}
      >
        <Image
          src={asset(s.coverSrc)}
          alt={s.coverAlt}
          fill
          sizes="(min-width:1024px) 40vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none"
        />
      </div>
      <div className={`flex flex-1 flex-col gap-2.5 pt-4 ${wide ? "lg:justify-center lg:pt-0" : ""}`}>
        <RubriqueTag id={s.rubrique} kicker={s.kicker} />
        <h3 className="font-display text-[1.65rem] leading-[1.12] decoration-2 underline-offset-4 group-hover:underline md:text-3xl" style={{ textDecorationColor: r.color }}>
          {s.title}
        </h3>
        <p className="line-clamp-3 text-[1.05rem] leading-relaxed text-mute">{s.chapo}</p>
        <div className="mt-auto text-mute">{meta}</div>
      </div>
    </Link>
  );
}
