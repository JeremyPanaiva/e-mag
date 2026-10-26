import { articles, issue } from "@/content";
import type { Article, RubriqueId } from "@/content/types";

export interface Summary {
  slug: string;
  rubrique: RubriqueId;
  kicker?: string;
  title: string;
  subtitle?: string;
  chapo: string;
  author: string;
  coverSrc: string;
  coverAlt: string;
  readingMinutes: number;
  printPages: string;
}

function blockWords(a: Article): number {
  let text = "";
  for (const b of a.blocks) {
    switch (b.type) {
      case "paragraph":
      case "heading":
      case "quote":
        text += " " + b.text;
        break;
      case "qa":
        text += " " + b.question + " " + b.answer.join(" ");
        break;
      case "callout":
        text += " " + b.title + " " + b.text.join(" ");
        break;
      case "list":
        text += " " + b.items.join(" ");
        break;
      default:
        break;
    }
  }
  return text.split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(a: Article): number {
  return Math.max(1, Math.round((blockWords(a) + a.chapo.split(/\s+/).length) / 200));
}

export function getSummaries(): Summary[] {
  return articles.map((a) => ({
    slug: a.slug,
    rubrique: a.rubrique,
    kicker: a.kicker,
    title: a.title,
    subtitle: a.subtitle,
    chapo: a.chapo,
    author: a.author,
    coverSrc: a.cover.src,
    coverAlt: a.cover.alt,
    readingMinutes: readingMinutes(a),
    printPages: a.printPages,
  }));
}

export const issueNumber = issue.number;
export const issueLabel = issue.label;
export const defaultOrder: string[] = issue.articles;
