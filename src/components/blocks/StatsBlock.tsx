"use client";

import { useEffect, useRef } from "react";

// Splits "29 400", "86 %", "3,5 M€" into prefix / numeric part / suffix.
function parse(value: string) {
  const m = value.match(/^(\D*?)(\d[\d\s  .,]*\d|\d)(.*)$/);
  if (!m) return null;
  const numeric = m[2];
  const decimals = /[.,]\d{1,2}$/.test(numeric) ? numeric.split(/[.,]/).pop()!.length : 0;
  const n = parseFloat(numeric.replace(/[\s  ]/g, "").replace(",", "."));
  const grouped = /[\s  ]/.test(numeric);
  if (Number.isNaN(n)) return null;
  return { prefix: m[1], n, decimals, grouped, suffix: m[3] };
}

function format(n: number, decimals: number, grouped: boolean) {
  const fixed = n.toFixed(decimals).replace(".", ",");
  if (!grouped) return fixed;
  const [int, dec] = fixed.split(",");
  return int.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (dec ? "," + dec : "");
}

function Figure({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    const p = parse(value);
    if (!el || !p || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.textContent = p.prefix + format(0, p.decimals, p.grouped) + p.suffix;
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = p.prefix + format(p.n * eased, p.decimals, p.grouped) + p.suffix;
          if (t < 1) raf = requestAnimationFrame(tick);
          else el.textContent = value;
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);
  return <span ref={ref}>{value}</span>;
}

export function StatsBlock({ items }: { items: { value: string; label: string }[] }) {
  return (
    <section
      className="wide my-14 rounded-3xl px-6 py-10 md:my-20 md:px-12 md:py-14"
      style={{ background: "color-mix(in srgb, var(--accent) 10%, white)" }}
      aria-label="Chiffres clés"
    >
      <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:flex md:flex-wrap md:justify-between">
        {items.map((it) => (
          <div key={it.label} className="flex flex-col md:min-w-[10rem] md:flex-1">
            <dt className="order-2 mt-2 max-w-[14rem] text-[1rem] leading-snug text-ink/80">{it.label}</dt>
            <dd className="order-1 font-display text-[2.6rem] leading-none text-[var(--accent)] md:text-6xl" style={{ fontVariantNumeric: "tabular-nums" }}>
              <Figure value={it.value} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
