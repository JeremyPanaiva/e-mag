import { Reveal } from "../Reveal";

const ACRONYMS = new Set(["RGPD", "IA", "PAAP", "CNIL", "ANSSI", "PME", "TPE", "SAFE", "ETI", "CCI", "RSE", "AMPA", "DRH"]);

// Print headings are often ALL CAPS: render them in sentence case, keeping known acronyms.
function sentenceCase(text: string): string {
  if (text !== text.toUpperCase() || text.length < 4) return text;
  const lower = text
    .split(" ")
    .map((w) => (ACRONYMS.has(w.replace(/[^A-ZÀ-Ý]/g, "")) ? w : w.toLowerCase()))
    .join(" ");
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export function Paragraph({ text, dropcap }: { text: string; dropcap?: boolean }) {
  return <p className={`mt-[1.15em] ${dropcap ? "dropcap" : ""}`}>{text}</p>;
}

export function Heading({ text }: { text: string }) {
  return (
    <h2 className="mt-16 text-balance font-display text-[1.75rem] leading-[1.15] md:text-4xl">
      <span className="mb-4 block h-1.5 w-12 rounded-full bg-[var(--accent)]" aria-hidden />
      {sentenceCase(text)}
    </h2>
  );
}

export function Quote({ text, author }: { text: string; author?: string }) {
  return (
    <Reveal className="wide my-14 md:my-20">
      <figure className="relative mx-auto max-w-3xl border-l-[6px] border-[var(--accent)] pl-6 md:pl-10">
        <blockquote className="text-balance font-display text-[1.6rem] leading-[1.25] md:text-[2.5rem]">
          <span className="text-[var(--accent)]" aria-hidden>
            «&nbsp;
          </span>
          {text}
          <span className="text-[var(--accent)]" aria-hidden>
            &nbsp;»
          </span>
        </blockquote>
        {author && <figcaption className="mt-4 text-lg font-semibold text-mute">{author}</figcaption>}
      </figure>
    </Reveal>
  );
}

export function Qa({ question, answer }: { question: string; answer: string[] }) {
  return (
    <section className="mt-12">
      <h3 className="font-display text-[1.4rem] leading-snug text-[var(--accent)] md:text-[1.65rem]">{question}</h3>
      <div className="mt-1 border-l-2 border-line pl-5">
        {answer.map((p, i) => (
          <p key={i} className="mt-[0.9em]">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

export function Callout({ title, text }: { title: string; text: string[] }) {
  return (
    <aside
      className="my-12 rounded-2xl border-l-[6px] border-[var(--accent)] p-6 md:p-8"
      style={{ background: "color-mix(in srgb, var(--accent) 9%, white)" }}
    >
      <h3 className="font-display text-2xl leading-tight">{title}</h3>
      <div className="text-[1.08rem] leading-[1.7] md:text-[1.15rem]">
        {text.map((p, i) => (
          <p key={i} className="mt-3">
            {p}
          </p>
        ))}
      </div>
    </aside>
  );
}

export function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-[1.15em] space-y-3">
      {items.map((it, i) => (
        <li key={i} className="relative pl-7">
          <span className="absolute left-0 top-[0.7em] h-2.5 w-2.5 rounded-full bg-[var(--accent)]" aria-hidden />
          {it}
        </li>
      ))}
    </ul>
  );
}
