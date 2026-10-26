import type { Article, Issue } from "./types";
import santeDuDirigeant from "./articles/sante-du-dirigeant";
import cycleDeLEau from "./articles/cycle-de-l-eau";
import mobilite from "./articles/mobilite";
import ginger from "./articles/ginger";
import cafeGilberte from "./articles/cafe-gilberte";
import numeria from "./articles/numeria";
import gardenParty from "./articles/garden-party";
import quoiDeNeuf from "./articles/quoi-de-neuf";

export { rubriques } from "./rubriques";
export { partners } from "./partners";

export const articles: Article[] = [
  santeDuDirigeant,
  cycleDeLEau,
  mobilite,
  ginger,
  cafeGilberte,
  numeria,
  gardenParty,
  quoiDeNeuf,
];

export const issue: Issue = {
  number: 90,
  label: "Juin 2026",
  cover: {
    src: "/n90/couverture.jpg",
    alt: "Le siège de COGEP sur le Pôle d'Activités d'Aix-en-Provence, entre olivier et façade vitrée",
    credit: "COGEP – © Yohann SProd photographe",
  },
  articles: articles.map((a) => a.slug),
};

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

// Articles in issue reading order, with previous/next neighbours.
export function getNeighbours(slug: string): { prev?: Article; next?: Article } {
  const i = issue.articles.indexOf(slug);
  return {
    prev: i > 0 ? getArticle(issue.articles[i - 1]) : undefined,
    next: i >= 0 && i < issue.articles.length - 1 ? getArticle(issue.articles[i + 1]) : undefined,
  };
}
