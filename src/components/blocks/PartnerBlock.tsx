import Image from "next/image";
import { partners } from "@/content";
import { asset } from "@/lib/asset";
import { getImageSize } from "@/lib/imageSize";

function cta(url: string) {
  if (url.startsWith("mailto:")) return "Écrire à l'annonceur";
  if (url.startsWith("tel:")) return "Appeler";
  return "Découvrir le site";
}

export function PartnerBlock({ partnerId }: { partnerId: string }) {
  const p = partners[partnerId];
  if (!p) return null;
  const { width, height } = getImageSize(p.image);
  const external = url_is_http(p.url);
  return (
    <div className="wide my-14 md:my-20">
      <aside aria-label={`Partenaire : ${p.name}`} className="overflow-hidden rounded-3xl border border-line bg-sand md:grid md:grid-cols-[minmax(0,2fr)_3fr]">
        <Image
          src={asset(p.image)}
          alt={`Annonce ${p.name}`}
          width={width}
          height={height}
          sizes="(min-width:768px) 380px, 100vw"
          className="h-auto max-h-[28rem] w-full object-cover object-top md:max-h-none md:h-full"
        />
        <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
          <span className="w-fit rounded-full border border-ink/30 px-3 py-1 text-sm font-semibold text-mute">Partenaire</span>
          <h3 className="font-display text-3xl leading-tight">{p.name}</h3>
          <p className="text-lg leading-relaxed text-ink/85">{p.tagline}</p>
          <a
            href={p.url}
            {...(external ? { target: "_blank", rel: "noopener noreferrer sponsored" } : {})}
            className="mt-2 inline-flex h-12 w-fit items-center rounded-full bg-ink px-6 font-semibold text-white transition-colors hover:bg-violet"
          >
            {cta(p.url)}
          </a>
        </div>
      </aside>
    </div>
  );
}

function url_is_http(u: string) {
  return u.startsWith("http");
}
