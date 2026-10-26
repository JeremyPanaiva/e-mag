// Content model for the e-mag. Image `src` values are /public paths (e.g. "/n90/ginger-01-ouverture.jpg");
// wrap them with `asset()` from "@/lib/asset" when rendering.

export type RubriqueId =
  | "grand-angle"
  | "environnement"
  | "mobilite"
  | "portraits"
  | "club-entreprises"
  | "actu"
  | "cqfd"
  | "quoi-de-neuf";

export interface Rubrique {
  id: RubriqueId;
  label: string;
  color: string;
}

export interface ImageRef {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
}

export type Block =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; author?: string }
  | ({ type: "image"; layout?: "full" | "inline" } & ImageRef)
  | { type: "gallery"; images: ImageRef[] }
  | { type: "stats"; items: { value: string; label: string }[] }
  | { type: "qa"; question: string; answer: string[] }
  | { type: "callout"; title: string; text: string[] }
  | { type: "list"; items: string[] }
  | { type: "video"; title: string; poster: string; demo: true }
  | { type: "partner"; partnerId: string }
  | { type: "agenda"; events: AgendaEvent[] }
  | { type: "directory"; groups: DirectoryGroup[] };

export interface AgendaEvent {
  date: string; // ISO yyyy-mm-dd
  time: string; // as printed, e.g. "18h30"
  title: string;
  place: string;
}

export interface DirectoryGroup {
  title: string; // "Arrivées", "Fusions", "Déménagements", "Départs"
  entries: { name: string; address?: string; phone?: string; activity?: string; detail?: string }[];
}

export interface Article {
  slug: string;
  rubrique: RubriqueId;
  kicker?: string; // small label above title, e.g. "Dossier", "Portrait", "3 questions à"
  title: string;
  subtitle?: string;
  chapo: string; // standfirst
  author: string;
  cover: ImageRef;
  issue: number;
  printPages: string; // e.g. "4-8"
  blocks: Block[];
}

export interface Partner {
  id: string;
  name: string;
  tagline: string;
  image: string;
  url: string;
}

export interface Issue {
  number: number;
  label: string; // "Juin 2026"
  cover: ImageRef;
  articles: string[]; // slugs, in reading order
}
