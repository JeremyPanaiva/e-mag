import Image from "next/image";
import { issue } from "@/content";
import { rubriques } from "@/content/rubriques";
import { asset } from "@/lib/asset";
import type { Summary } from "@/lib/summaries";
import { Logo } from "./Logo";

// Static miniature of the public sommaire, rendered in the current order.
export function PhonePreview({ items }: { items: Summary[] }) {
  const [first, ...rest] = items;
  return (
    <div className="mx-auto w-[18.5rem] rounded-[2.6rem] bg-ink p-2.5 shadow-2xl">
      <div className="relative h-[36rem] overflow-hidden rounded-[2.1rem] bg-paper">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" aria-hidden />
        <div className="h-full overflow-y-auto overscroll-contain pb-6 pt-9">
          <div className="px-4 pb-3">
            <Logo height={20} />
          </div>
          <div className="relative mx-3 h-32 overflow-hidden rounded-xl">
            <Image src={asset(issue.cover.src)} alt="" fill sizes="280px" className="object-cover" />
            <p className="absolute bottom-0 right-0 rounded-tl-xl bg-white px-3 py-1.5 text-sm font-light tracking-wide">N° {issue.number} · {issue.label}</p>
          </div>
          <p className="px-4 pb-2 pt-4 font-display text-xl">Au sommaire</p>
          {first && (
            <div className="mx-3 overflow-hidden rounded-xl text-white" style={{ background: rubriques[first.rubrique].color }}>
              <div className="relative h-24">
                <Image src={asset(first.coverSrc)} alt="" fill sizes="280px" className="object-cover" />
              </div>
              <p className="p-3 font-display text-[0.95rem] leading-tight">{first.title}</p>
            </div>
          )}
          <ul className="mt-3 space-y-3 px-3">
            {rest.map((s) => (
              <li key={s.slug} className="flex gap-2.5">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg" style={{ borderBottom: `3px solid ${rubriques[s.rubrique].color}` }}>
                  <Image src={asset(s.coverSrc)} alt="" fill sizes="56px" className="object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 text-[0.7rem] font-semibold">
                    <span className="h-2 w-2 rounded-full" style={{ background: rubriques[s.rubrique].color }} />
                    {rubriques[s.rubrique].label}
                  </p>
                  <p className="font-display text-[0.85rem] leading-tight">{s.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
