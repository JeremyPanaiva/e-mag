"use client";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import { SortableContext, arrayMove, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { rubriques } from "@/content/rubriques";
import { asset } from "@/lib/asset";
import { saveOrder, useOrder } from "@/lib/order";
import type { Summary } from "@/lib/summaries";
import { PhonePreview } from "./PhonePreview";

const PALETTE = [
  { label: "Texte", glyph: "¶" },
  { label: "Image", glyph: "▧" },
  { label: "Vidéo", glyph: "▶" },
  { label: "Galerie", glyph: "▦" },
  { label: "Citation", glyph: "“" },
  { label: "Chiffres clés", glyph: "%" },
  { label: "Encadré", glyph: "▭" },
  { label: "Partenaire", glyph: "★" },
];

export function AdminApp({ summaries }: { summaries: Summary[] }) {
  const defaults = useMemo(() => summaries.map((s) => s.slug), [summaries]);
  const order = useOrder(defaults);
  const [note, setNote] = useState<string | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const ordered = order.map((slug) => summaries.find((s) => s.slug === slug)).filter((s): s is Summary => !!s);
  const isDefault = order.join("|") === defaults.join("|");

  function onDragEnd(e: DragEndEvent) {
    const { active, over } = e;
    if (!over || active.id === over.id) return;
    const from = order.indexOf(String(active.id));
    const to = order.indexOf(String(over.id));
    saveOrder(arrayMove(order, from, to));
    setNote("Nouvel ordre enregistré dans ce navigateur. Ouvrez le sommaire pour le voir.");
  }

  return (
    <div className="mx-auto max-w-6xl px-5 pb-10 pt-6 md:px-8">
      <div role="note" className="flex items-start gap-3 rounded-2xl bg-ink px-5 py-4 text-white">
        <span className="mt-0.5 rounded-full bg-[#F8961D] px-2.5 py-0.5 text-sm font-bold text-ink">Démo</span>
        <p className="text-[1.02rem] leading-snug">Maquette du back-office : rien n&apos;est enregistré sur un serveur.</p>
      </div>

      <div className="mt-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl md:text-6xl">Composer le numéro</h1>
          <p className="mt-2 text-lg text-mute">Numéro 90, juin 2026. Glissez les articles pour changer leur ordre.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/#sommaire" className="inline-flex h-12 items-center rounded-full bg-violet px-5 font-semibold text-white hover:bg-ink">
            Voir le sommaire public
          </Link>
          <button
            onClick={() => {
              saveOrder(null);
              setNote("Ordre d'origine rétabli.");
            }}
            disabled={isDefault}
            className="inline-flex h-12 items-center rounded-full border border-ink px-5 font-semibold hover:bg-ink hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-ink"
          >
            Réinitialiser
          </button>
        </div>
      </div>
      <p role="status" className="mt-3 min-h-6 text-[0.95rem] font-semibold text-violet">
        {note}
      </p>

      <div className="mt-4 grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="min-w-0">
          <h2 className="font-display text-2xl">Articles du numéro</h2>
          <DndContext id="admin-sortable" sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={order} strategy={verticalListSortingStrategy}>
              <ol className="mt-4 space-y-3">
                {ordered.map((s, i) => (
                  <Row key={s.slug} s={s} position={i + 1} />
                ))}
              </ol>
            </SortableContext>
          </DndContext>

          <h2 className="mt-14 font-display text-2xl">Ajouter un contenu</h2>
          <p className="mt-1 text-mute">Les blocs qu&apos;un rédacteur pourra insérer dans un article.</p>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {PALETTE.map((p) => (
              <li key={p.label}>
                <button
                  onClick={() => setNote("Démo : l'ajout de contenu n'est pas actif dans cette maquette.")}
                  className="flex h-24 w-full flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-ink/30 bg-white text-[0.95rem] font-semibold transition-colors hover:border-violet hover:bg-sand"
                >
                  <span className="font-display text-3xl text-violet" aria-hidden>
                    {p.glyph}
                  </span>
                  {p.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <aside aria-label="Aperçu mobile du sommaire" className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="mb-4 text-center font-display text-2xl lg:text-left">Aperçu mobile</h2>
          <PhonePreview items={ordered} />
        </aside>
      </div>
    </div>
  );
}

function Row({ s, position }: { s: Summary; position: number }) {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({ id: s.slug });
  const r = rubriques[s.rubrique];
  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={`flex min-w-0 items-center gap-2 rounded-2xl border bg-white p-2 pr-3 md:gap-3 md:p-2.5 ${
        isDragging ? "relative z-10 border-violet shadow-xl" : "border-line"
      }`}
    >
      <button
        ref={setActivatorNodeRef}
        {...attributes}
        {...listeners}
        aria-label={`Déplacer « ${s.title} », position ${position}`}
        className="flex h-12 w-11 shrink-0 cursor-grab touch-none items-center justify-center rounded-lg text-mute hover:bg-sand active:cursor-grabbing"
      >
        <svg width="14" height="22" viewBox="0 0 14 22" aria-hidden fill="currentColor">
          {[3, 11, 19].map((y) => (
            <g key={y}>
              <circle cx="3" cy={y} r="1.8" />
              <circle cx="11" cy={y} r="1.8" />
            </g>
          ))}
        </svg>
      </button>
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg md:h-16 md:w-20">
        <Image src={asset(s.coverSrc)} alt="" fill sizes="80px" className="object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold" style={{ background: `color-mix(in srgb, ${r.color} 14%, white)` }}>
          <span className="h-2 w-2 rounded-full" style={{ background: r.color }} />
          {r.label}
        </span>
        <p className="mt-1 truncate font-display text-lg leading-tight md:text-xl">{s.title}</p>
      </div>
      <span className="hidden text-sm text-mute sm:block">p. {s.printPages}</span>
    </li>
  );
}
