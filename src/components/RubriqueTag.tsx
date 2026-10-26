import { rubriques } from "@/content/rubriques";
import { kickerAdds } from "@/lib/kicker";
import type { RubriqueId } from "@/content/types";

export function RubriqueTag({ id, kicker, light = false }: { id: RubriqueId; kicker?: string; light?: boolean }) {
  const r = rubriques[id];
  return (
    <span className={`inline-flex items-center gap-2 text-[0.95rem] font-semibold ${light ? "text-current" : "text-ink"}`}>
      <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: r.color, boxShadow: light ? "0 0 0 2px #fff" : undefined }} aria-hidden />
      {r.label}
      {kickerAdds(kicker, r.label) && <span className="font-normal opacity-70">{kicker}</span>}
    </span>
  );
}
