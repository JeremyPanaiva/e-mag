import Image from "next/image";
import { asset } from "@/lib/asset";
import { issue } from "@/content";
import { rubriques } from "@/content/rubriques";
import { Logo } from "./Logo";

// Full-screen magazine cover: full-bleed photo, white masthead tab (as in print),
// oversized issue number, and a clear call to start reading.
export function Cover() {
  const strip = Object.values(rubriques);
  return (
    <section
      className="on-dark relative isolate flex min-h-svh flex-col overflow-hidden bg-ink text-white"
      aria-label={`Couverture du numéro ${issue.number}`}
    >
      <Image
        src={asset(issue.cover.src)}
        alt={issue.cover.alt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[32%_60%] lg:object-[50%_55%]"
      />
      {/* Scrim: keeps the white type readable on the bottom of the photo without hiding the sky. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/35 to-transparent to-55% lg:bg-gradient-to-r lg:from-black/70 lg:via-black/25 lg:to-transparent lg:to-70%"
      />

      {/* Masthead */}
      <div className="rise flex items-start justify-between">
        <div className="rounded-br-[2.5rem] bg-white pb-5 pl-5 pr-7 pt-6 text-ink md:pb-6 md:pl-8 md:pr-10 md:pt-8 lg:pl-[max(2rem,calc((100vw-72rem)/2+2rem))]">
          <h1 className="sr-only">Pôles Actu, le magazine du Pôle d’Activités d’Aix-en-Provence, numéro {issue.number}</h1>
          <span className="block lg:hidden"><Logo height={42} /></span>
          <span className="hidden lg:block"><Logo height={60} /></span>
        </div>
      </div>

      <div className="flex-1" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-8 md:px-8 md:pb-14">
        <div className="max-w-xl">
          <p className="rise rise-2 flex items-end gap-3 leading-none">
            <span className="font-display text-[7.5rem] leading-[0.8] tracking-tight sm:text-[10rem] lg:text-[13rem]">
              <span className="sr-only">Numéro </span>
              <span aria-hidden className="text-[0.32em] align-top font-extralight tracking-wide">N°</span>
              {issue.number}
            </span>
            <span className="mb-1 pb-1 text-base font-light uppercase tracking-[0.2em] sm:text-xl lg:mb-3 lg:text-2xl">
              {issue.label}
            </span>
          </p>

          <p className="rise rise-3 mt-5 max-w-md text-lg leading-snug text-white/90 md:text-xl">
            Santé du dirigeant, cycle de l’eau, mobilité, portraits et rendez-vous à ne pas manquer.
          </p>

          <div className="rise rise-4 mt-6 flex flex-wrap items-center gap-x-5 gap-y-4">
            <a
              href="#sommaire"
              className="press group inline-flex h-14 items-center gap-3 rounded-full bg-white px-7 text-base font-semibold text-ink shadow-lg transition-colors hover:bg-violet hover:text-white"
            >
              Commencer la lecture
              <svg width="14" height="16" viewBox="0 0 14 16" aria-hidden className="motion-safe:animate-bounce">
                <path d="M7 1v13M1.5 9L7 14.5 12.5 9" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <ul className="flex items-center gap-1.5" aria-hidden>
              {strip.map((r) => (
                <li key={r.id} className="h-2.5 w-2.5 rounded-full ring-1 ring-white/70" style={{ background: r.color }} />
              ))}
            </ul>
          </div>
        </div>

        <Image
          src={asset("/brand/actuboy-presse.png")}
          alt="Actuboy, la mascotte du magazine, un journal sous le bras"
          width={654}
          height={528}
          className="rise rise-4 pointer-events-none absolute bottom-0 right-8 hidden h-52 w-auto drop-shadow-xl xl:block"
        />
        <p className="mt-6 text-[0.7rem] text-white/75 lg:absolute lg:bottom-3 lg:right-8 lg:mt-0 lg:text-right xl:hidden">
          {issue.cover.credit}
        </p>
      </div>
    </section>
  );
}
