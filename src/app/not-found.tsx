import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";
import { rubriques } from "@/content/rubriques";
import { getSummaries } from "@/lib/summaries";

export const metadata = { title: "Page introuvable — Pôles Actu n°90" };

export default function NotFound() {
  const picks = getSummaries().slice(0, 3);
  return (
    <main className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:gap-14 md:text-left">
        <Image
          src={asset("/brand/actuboy-mobilite.png")}
          alt="Actuboy, la mascotte du magazine, un peu perdu"
          width={678}
          height={798}
          priority
          className="h-60 w-auto rounded-3xl md:h-96"
        />
        <div>
          <p aria-hidden className="font-display text-8xl leading-none text-violet md:text-[10rem]">404</p>
          <h1 className="mt-3 font-display text-3xl md:text-5xl">Cette page a quitté le numéro.</h1>
          <p className="mt-4 max-w-md text-lg text-mute">
            Actuboy a fouillé tout le Pôle d’Activités, sans succès. Revenez au sommaire pour reprendre la lecture.
          </p>
          <Link href="/" className="press mt-6 inline-flex h-12 items-center rounded-full bg-ink px-6 font-semibold text-white transition-colors hover:bg-violet">
            Retour au sommaire
          </Link>
        </div>
      </div>

      <nav aria-label="Articles à lire" className="mt-14 border-t-2 border-ink pt-6">
        <ul className="grid gap-x-8 sm:grid-cols-3">
          {picks.map((s) => (
            <li key={s.slug} className="border-b border-line py-3 sm:border-b-0">
              <Link href={`/articles/${s.slug}/`} className="group block min-h-11">
                <span className="flex items-center gap-2 text-sm font-semibold">
                  <span aria-hidden className="h-2.5 w-2.5 rounded-full" style={{ background: rubriques[s.rubrique].color }} />
                  {rubriques[s.rubrique].label}
                </span>
                <span className="mt-1 block font-display text-xl leading-snug decoration-2 underline-offset-4 group-hover:underline">{s.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
