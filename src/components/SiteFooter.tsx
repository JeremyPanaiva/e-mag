import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink pb-24 pt-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[auto_1fr_auto] md:items-start md:px-8">
        <Image
          src={asset("/brand/logo-paap.png")}
          alt="Association des Entreprises du Pôle d'Activités d'Aix-en-Provence"
          width={444}
          height={402}
          className="h-24 w-auto rounded-md bg-white p-2"
        />
        <address className="text-[1.05rem] leading-relaxed not-italic text-white/80">
          <p className="font-display text-xl text-white">
            Association des Entreprises du Pôle d&apos;Activités d&apos;Aix-en-Provence
          </p>
          <p className="mt-3">Maison des Entreprises</p>
          <p>45 rue Frédéric Joliot, 13290 Aix-en-Provence</p>
          <p className="mt-2 flex flex-wrap gap-x-6">
            <a href="tel:+33442244026" className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-white">
              04 42 24 40 26
            </a>
            <a href="https://www.entreprises-aix.com" className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-white">
              www.entreprises-aix.com
            </a>
          </p>
        </address>
        <p className="max-w-[16rem] text-sm text-white/60">
          1 500 entreprises et 29 400 salariés sur le Pôle d&apos;Activités d&apos;Aix-en-Provence.
        </p>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-white/15 px-5 pt-6 text-sm text-white/50 md:px-8">
        <p>Maquette du magazine Pôles Actu, contenus du n°90 (juin 2026).</p>
        <Link href="/admin/" className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-white">
          Espace rédaction (démo)
        </Link>
      </div>
    </footer>
  );
}
