import Image from "next/image";
import { asset } from "@/lib/asset";
import { issue } from "@/content";
import { Logo } from "./Logo";

// Full-screen cover moment, echoing the print cover: white wordmark block, thin ACTU, issue tab.
export function Cover() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-white" aria-label={`Couverture du numéro ${issue.number}`}>
      <div className="absolute inset-0 lg:left-[46%]">
        <Image
          src={asset(issue.cover.src)}
          alt={issue.cover.alt}
          fill
          priority
          sizes="(min-width:1024px) 54vw, 100vw"
          className="object-cover object-[35%_60%]"
        />
        <p className="absolute bottom-3 right-3 hidden rounded bg-black/40 px-2 py-1 text-xs text-white lg:block">
          {issue.cover.credit}
        </p>
      </div>

      <div className="relative z-10 flex min-h-svh flex-col lg:w-[46%] lg:pl-[max(2rem,calc((100vw-72rem)/2+2rem))] lg:pr-12">
        <div className="rise w-[88%] rounded-br-[2.5rem] bg-white pb-5 pl-5 pr-6 pt-6 md:w-[70%] lg:w-auto lg:rounded-none lg:p-0 lg:pt-28">
          <h1 className="sr-only">Pôles Actu, le magazine du Pôle d&apos;Activités d&apos;Aix-en-Provence, numéro {issue.number}</h1>
          <div className="lg:hidden">
            <Logo height={46} />
          </div>
          <div className="hidden lg:block xl:hidden">
            <Logo height={54} />
          </div>
          <div className="hidden xl:block">
            <Logo height={64} />
          </div>
        </div>

        <p className="rise rise-2 mt-3 hidden max-w-sm text-xl leading-snug text-mute lg:block">
          Le magazine de l&apos;Association des Entreprises du Pôle d&apos;Activités d&apos;Aix-en-Provence.
        </p>

        <div className="flex-1" />

        <div className="rise rise-3 ml-auto w-[min(21rem,88%)] rounded-tl-[2.5rem] bg-white p-6 pb-8 lg:m-0 lg:w-auto lg:rounded-none lg:p-0 lg:pb-16">
          <p className="font-extralight text-4xl leading-none tracking-wide md:text-5xl">N° {issue.number}</p>
          <p className="mt-1 text-2xl font-light uppercase tracking-[0.12em] md:text-3xl">{issue.label}</p>
          <p className="mt-4 hidden max-w-sm text-lg leading-snug text-mute lg:block">
            Santé du dirigeant, cycle de l&apos;eau, mobilité, portraits et rendez-vous à ne pas manquer.
          </p>
          <a
            href="#sommaire"
            className="mt-5 inline-flex h-12 items-center gap-3 rounded-full bg-violet px-6 text-base font-semibold text-white shadow-sm transition-colors hover:bg-ink"
          >
            Commencer la lecture
            <svg width="14" height="16" viewBox="0 0 14 16" aria-hidden className="motion-safe:animate-bounce">
              <path d="M7 1v13M1.5 9L7 14.5 12.5 9" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <Image
        src={asset("/brand/actuboy-presse.png")}
        alt="Actuboy, la mascotte du magazine, un journal sous le bras"
        width={654}
        height={528}
        className="rise rise-4 pointer-events-none absolute bottom-0 left-[44%] z-10 hidden h-44 w-auto -translate-x-1/2 xl:block"
      />
    </section>
  );
}
