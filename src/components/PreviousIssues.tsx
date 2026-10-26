import { Reveal } from "./Reveal";

const PDF_89 = "https://doc.entreprises-aix.com/indocument1/SIBOX_INFO_1986_POLEACTU_N89_PAP.pdf";

const previous = [
  { n: 89, color: "#6d5a88", href: PDF_89 },
  { n: 88, color: "#4b7b6f" },
  { n: 87, color: "#893266" },
  { n: 86, color: "#47566b" },
  { n: 85, color: "#0098d8" },
  { n: 84, color: "#018d9f" },
];

// Archive concept: every issue gets its own entry. Only n°89 links to its print PDF for now.
export function PreviousIssues() {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-5 md:mt-32 md:px-8" aria-labelledby="archives-titre">
      <h2 id="archives-titre" className="font-display text-4xl md:text-5xl">
        Numéros précédents
      </h2>
      <p className="mt-3 max-w-xl text-lg text-mute">
        Chaque numéro aura bientôt sa propre page de lecture. En attendant, retrouvez le n°89 en PDF.
      </p>
      <Reveal>
        <ul className="no-scrollbar -mx-5 mt-8 flex snap-x gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-6 md:overflow-visible md:px-0">
          {previous.map((p) => {
            const inner = (
              <>
                <span className="font-display text-6xl leading-none text-white/95">{p.n}</span>
                <span className="mt-auto text-sm font-semibold text-white">
                  {p.href ? "Lire le PDF" : "Bientôt en ligne"}
                </span>
              </>
            );
            const cls =
              "flex aspect-[3/4] w-36 shrink-0 snap-start flex-col rounded-xl p-4 shadow-sm md:w-auto";
            return (
              <li key={p.n}>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Pôles Actu numéro ${p.n}, ouvrir le PDF`}
                    className={`${cls} transition-transform hover:-translate-y-1`}
                    style={{ background: p.color }}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={`${cls} opacity-60`} style={{ background: p.color }} aria-label={`Pôles Actu numéro ${p.n}, bientôt en ligne`}>
                    {inner}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
