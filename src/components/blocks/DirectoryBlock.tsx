"use client";

import { useId, useMemo, useState } from "react";
import type { DirectoryGroup } from "@/content/types";

type Entry = DirectoryGroup["entries"][number];

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export function DirectoryBlock({ groups }: { groups: DirectoryGroup[] }) {
  const [tab, setTab] = useState<string>("all");
  const [q, setQ] = useState("");
  const inputId = useId();

  const visible = useMemo(() => {
    const needle = norm(q.trim());
    return groups
      .filter((g) => tab === "all" || g.title === tab)
      .map((g) => ({
        ...g,
        entries: needle
          ? g.entries.filter((e) => norm([e.name, e.activity, e.address, e.detail].filter(Boolean).join(" ")).includes(needle))
          : g.entries,
      }))
      .filter((g) => g.entries.length > 0);
  }, [groups, tab, q]);

  const total = visible.reduce((n, g) => n + g.entries.length, 0);

  return (
    <section className="wide my-12 md:my-16" aria-label="Annuaire des mouvements d'entreprises" data-no-swipe>
      <div className="rounded-3xl border border-line bg-white p-4 md:p-8">
        <label htmlFor={inputId} className="sr-only">
          Rechercher une entreprise
        </label>
        <div className="relative">
          <svg className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-mute" width="18" height="18" viewBox="0 0 18 18" aria-hidden>
            <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M12 12l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            id={inputId}
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher une entreprise, une activité, une rue"
            className="h-12 w-full rounded-full border border-line bg-paper pl-11 pr-4 text-base outline-offset-2 focus:border-[var(--accent)]"
          />
        </div>
        <div role="tablist" aria-label="Type de mouvement" className="no-scrollbar -mx-4 mt-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:px-0">
          {[{ title: "all", label: "Tout", count: groups.reduce((n, g) => n + g.entries.length, 0) }, ...groups.map((g) => ({ title: g.title, label: g.title, count: g.entries.length }))].map((t) => (
            <button
              key={t.title}
              role="tab"
              aria-selected={tab === t.title}
              onClick={() => setTab(t.title)}
              className={`inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-4 text-[0.95rem] font-semibold transition-colors ${
                tab === t.title ? "bg-[var(--accent)] text-[var(--on-accent,#fff)]" : "bg-sand hover:bg-line"
              }`}
            >
              {t.label}
              <span className="text-sm opacity-70">{t.count}</span>
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm text-mute" aria-live="polite">
          {total} résultat{total > 1 ? "s" : ""}
        </p>

        <div className="mt-2 space-y-8">
          {visible.map((g) => (
            <div key={g.title}>
              <h3 className="font-display text-2xl text-[var(--accent)]">{g.title}</h3>
              <ul className="mt-3 grid gap-3 md:grid-cols-2">
                {g.entries.map((e) => (
                  <EntryCard key={e.name + (e.address ?? "")} e={e} />
                ))}
              </ul>
            </div>
          ))}
          {total === 0 && <p className="py-6 text-center text-mute">Aucune entreprise ne correspond à cette recherche.</p>}
        </div>
      </div>
    </section>
  );
}

function EntryCard({ e }: { e: Entry }) {
  return (
    <li className="rounded-xl bg-paper p-4 text-[1rem] leading-snug">
      <p className="font-semibold">{e.name}</p>
      {e.activity && <p className="mt-0.5 text-mute">{e.activity}</p>}
      {e.address && <p className="mt-1">{e.address}</p>}
      {e.detail && <p className="mt-1 text-mute">{e.detail}</p>}
      {e.phone && (
        <a href={`tel:${e.phone.replace(/[^\d+]/g, "")}`} className="mt-1 inline-flex min-h-8 items-center underline underline-offset-4">
          {e.phone}
        </a>
      )}
    </li>
  );
}
