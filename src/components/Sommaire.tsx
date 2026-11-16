"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { rubriques } from "@/content/rubriques";
import { issue } from "@/content";
import type { RubriqueId } from "@/content/types";
import { asset } from "@/lib/asset";
import { useOrder } from "@/lib/order";
import type { Summary } from "@/lib/summaries";
import { ArticleCard } from "./ArticleCard";
import { Reveal } from "./Reveal";

export function Sommaire({ summaries }: { summaries: Summary[] }) {
  const defaults = useMemo(() => summaries.map((s) => s.slug), [summaries]);
  const order = useOrder(defaults);
  const [filter, setFilter] = useState<RubriqueId | "all">("all");

  const ordered = order.map((slug) => summaries.find((s) => s.slug === slug)).filter((s): s is Summary => !!s);
  const present = Array.from(new Set(ordered.map((s) => s.rubrique)));
  const shown = filter === "all" ? ordered : ordered.filter((s) => s.rubrique === filter);

  // Layout: the lead article spans the full width, the rest sits on a regular 3-column grid.
  // A lone last card becomes a wide horizontal card; two leftovers share the row.
  const hasLead = filter === "all";
  const restCount = hasLead ? shown.length - 1 : shown.length;
  const rem = restCount % 3;

  return (
    <section id="sommaire" className="mx-auto max-w-6xl scroll-mt-4 px-5 pt-20 md:px-8 md:pt-28" aria-labelledby="sommaire-titre">
      <div className="flex items-end justify-between gap-8 border-b-2 border-ink pb-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mute-strong">
            N° {issue.number} · {issue.label}
          </p>
          <h2 id="sommaire-titre" className="mt-2 font-display text-5xl leading-none md:text-7xl">
            Au sommaire
          </h2>
          <p className="mt-4 max-w-md text-lg text-mute">Huit lectures pour ce numéro de juin, à parcourir dans l&apos;ordre ou au gré de vos envies.</p>
        </div>
        <Image src={asset("/brand/actuboy-applaudit.png")} alt="" width={750} height={822} className="-mb-6 hidden h-40 w-auto md:block" />
      </div>

      <div role="group" aria-label="Filtrer par rubrique" className="no-scrollbar -mx-5 mt-8 flex gap-2.5 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0">
        <Chip active={filter === "all"} onClick={() => setFilter("all")} label={`Tout (${ordered.length})`} />
        {present.map((id) => (
          <Chip
            key={id}
            active={filter === id}
            onClick={() => setFilter(id)}
            label={rubriques[id].label}
            color={rubriques[id].color}
          />
        ))}
      </div>

      <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-6 lg:gap-y-16">
        {shown.map((s, i) => {
          const lead = hasLead && i === 0;
          const restIndex = hasLead ? i - 1 : i;
          const wide = !lead && rem === 1 && restCount > 1 && restIndex === restCount - 1;
          const half = !lead && rem === 2 && restIndex >= restCount - 2;
          const span = lead || wide ? "sm:col-span-2 lg:col-span-6" : half ? "lg:col-span-3" : "lg:col-span-2";
          return (
            <Reveal key={s.slug} className={span}>
              <ArticleCard s={s} variant={lead ? "feature" : wide ? "wide" : "standard"} n={order.indexOf(s.slug) + 1} priority={i === 0} />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Chip({ active, onClick, label, color }: { active: boolean; onClick: () => void; label: string; color?: string }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`press inline-flex h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-[0.95rem] font-semibold transition-colors ${
        active ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-ink"
      }`}
    >
      {color && <span className="h-2.5 w-2.5 rounded-full" style={{ background: color, boxShadow: active ? "0 0 0 2px #fff" : undefined }} />}
      {label}
    </button>
  );
}
