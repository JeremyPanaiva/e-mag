import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";

export const metadata = { title: "Page introuvable — Pôles Actu n°90" };

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70svh] max-w-4xl flex-col items-center justify-center gap-8 px-5 py-16 text-center md:flex-row md:text-left">
      <Image
        src={asset("/brand/actuboy-mobilite.png")}
        alt="Actuboy, la mascotte du magazine, un peu perdu"
        width={678}
        height={798}
        className="h-64 w-auto md:h-80"
      />
      <div>
        <p className="font-display text-7xl text-violet md:text-8xl">404</p>
        <h1 className="mt-2 font-display text-3xl md:text-4xl">Cette page a quitté le numéro.</h1>
        <p className="mt-3 max-w-md text-lg text-mute">
          Actuboy a fouillé tout le Pôle d&apos;Activités, sans succès. Revenez au sommaire pour reprendre la lecture.
        </p>
        <Link href="/" className="mt-6 inline-flex h-12 items-center rounded-full bg-ink px-6 font-semibold text-white hover:bg-violet">
          Retour au sommaire
        </Link>
      </div>
    </main>
  );
}
