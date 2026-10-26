"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { rubriques } from "@/content/rubriques";
import { asset } from "@/lib/asset";
import { onColor } from "@/lib/color";
import { useOrder } from "@/lib/order";
import type { Summary } from "@/lib/summaries";
import { ShareButton } from "./ShareButton";

export function ArticleEnd({ slug, title, summaries }: { slug: string; title: string; summaries: Summary[] }) {
  const defaults = useMemo(() => summaries.map((s) => s.slug), [summaries]);
  const order = useOrder(defaults);
  const i = order.indexOf(slug);
  const next = i >= 0 ? summaries.find((s) => s.slug === order[i + 1]) : undefined;

  return (
    <section className="mx-auto mt-12 max-w-5xl px-5 md:px-8" aria-label="Fin de l'article">
      <div className="flex flex-col items-start gap-3 border-t border-line pt-8">
        <p className="font-display text-2xl">Cet article vous a plu ?</p>
        <ShareButton title={`${title} — Pôles Actu n°90`} />
      </div>

      {next ? <NextTeaser next={next} /> : <IssueEnd />}
    </section>
  );
}

function NextTeaser({ next }: { next: Summary }) {
  const r = rubriques[next.rubrique];
  const fg = onColor(r.color);
  return (
    <div className="mt-12">
      <p className="mb-3 font-display text-2xl">À lire ensuite</p>
      <Link
        href={`/articles/${next.slug}/`}
        className="group grid overflow-hidden rounded-3xl md:grid-cols-2"
        style={{ background: r.color, color: fg, ["--accent" as string]: fg }}
      >
        <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[22rem]">
          <Image
            src={asset(next.coverSrc)}
            alt={next.coverAlt}
            fill
            sizes="(min-width:768px) 480px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
          />
        </div>
        <div className="flex flex-col justify-center gap-3 p-6 md:p-10">
          <p className="font-semibold">{r.label}</p>
          <h2 className="font-display text-3xl leading-tight md:text-4xl">{next.title}</h2>
          <p className="line-clamp-3 text-lg leading-relaxed opacity-90">{next.chapo}</p>
          <span className="mt-2 inline-flex h-12 w-fit items-center rounded-full px-6 font-semibold" style={{ background: fg, color: r.color }}>
            Continuer la lecture · {next.readingMinutes} min
          </span>
        </div>
      </Link>
    </div>
  );
}

function IssueEnd() {
  return (
    <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl bg-sand px-6 py-10 text-center">
      <Image src={asset("/brand/actuboy-applaudit.png")} alt="Actuboy applaudit" width={750} height={822} className="h-44 w-auto" />
      <h2 className="font-display text-3xl md:text-4xl">Vous êtes arrivé au bout du numéro 90.</h2>
      <p className="max-w-md text-lg text-mute">Rendez-vous au prochain numéro. En attendant, le sommaire vous attend.</p>
      <Link href="/#sommaire" className="inline-flex h-12 items-center rounded-full bg-ink px-6 font-semibold text-white hover:bg-violet">
        Retour au sommaire
      </Link>
    </div>
  );
}
