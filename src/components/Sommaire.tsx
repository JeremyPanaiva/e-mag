"use client";

import { useMemo, useState } from "react";
import { rubriques } from "@/content/rubriques";
import type { RubriqueId } from "@/content/types";
import { useOrder } from "@/lib/order";
import type { Summary } from "@/lib/summaries";
import { ArticleCard, type CardVariant } from "./ArticleCard";
import { Reveal } from "./Reveal";

// Magazine-like rhythm: one big feature, then mixed sizes (repeats every 8 cards).
const PATTERN: { variant: CardVariant; span: string }[] = [
  { variant: "feature", span: "lg:col-span-12" },
  { variant: "tall", span: "lg:col-span-5" },
  { variant: "standard", span: "lg:col-span-7" },
  { variant: "standard", span: "lg:col-span-4" },
  { variant: "standard", span: "lg:col-span-4" },
  { variant: "standard", span: "lg:col-span-4" },
  { variant: "wide", span: "lg:col-span-8" },
  { variant: "standard", span: "lg:col-span-4" },
];

export function Sommaire({ summaries }: { summaries: Summary[] }) {
  const defaults = useMemo(() => summaries.map((s) => s.slug), [summaries]);
  const order = useOrder(defaults);
  const [filter, setFilter] = useState<RubriqueId | "all">("all");

  const ordered = order.map((slug) => summaries.find((s) => s.slug === slug)).filter((s): s is Summary => !!s);
  const present = Array.from(new Set(ordered.map((s) => s.rubrique)));
  const shown = filter === "all" ? ordered : ordered.filter((s) => s.rubrique === filter);

  return (
    <section id="sommaire" className="mx-auto max-w-6xl scroll-mt-4 px-5 pt-16 md:px-8 md:pt-24" aria-labelledby="sommaire-titre">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 id="sommaire-titre" className="font-display text-5xl leading-none md:text-7xl">
            Au sommaire
          </h2>
          <p className="mt-3 max-w-md text-lg text-mute">Huit lectures pour ce numéro de juin, à parcourir dans l&apos;ordre ou au gré de vos envies.</p>
        </div>
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

      <div className="mt-10 grid gap-x-8 gap-y-12 lg:grid-cols-12">
        {shown.map((s, i) => {
          const p = PATTERN[i % PATTERN.length];
          return (
            <Reveal key={s.slug} className={p.span}>
              <ArticleCard s={s} variant={p.variant} priority={i === 0} />
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
      className={`inline-flex h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-[0.95rem] font-semibold transition-colors ${
        active ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-ink"
      }`}
    >
      {color && <span className="h-2.5 w-2.5 rounded-full" style={{ background: color, boxShadow: active ? "0 0 0 2px #fff" : undefined }} />}
      {label}
    </button>
  );
}
