import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/content";
import { rubriques } from "@/content/rubriques";
import { onColor } from "@/lib/color";
import { getSummaries, readingMinutes } from "@/lib/summaries";
import { ArticleEnd } from "@/components/ArticleEnd";
import { ArticleHero } from "@/components/ArticleHero";
import { ArticleNav } from "@/components/ArticleNav";
import { BlockRenderer } from "@/components/BlockRenderer";
import { ReadingProgress } from "@/components/ReadingProgress";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: `${a.title} — Pôles Actu n°90`,
    description: a.chapo,
    openGraph: { title: `${a.title} — Pôles Actu n°90`, description: a.chapo, type: "article" },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const color = rubriques[article.rubrique].color;
  const summaries = getSummaries();

  return (
    <article
      style={{ ["--accent" as string]: color, ["--on-accent" as string]: onColor(color) }}
      className="pb-4"
    >
      <ReadingProgress />
      <ArticleHero article={article} minutes={readingMinutes(article)} />
      <div className="flow prose-body pb-6 pt-10 md:pt-14">
        <p className="border-l-4 border-[var(--accent)] pl-5 text-[1.35rem] leading-snug text-ink md:text-[1.6rem]">
          {article.chapo}
        </p>
        <BlockRenderer blocks={article.blocks} />
      </div>
      <ArticleEnd slug={article.slug} title={article.title} summaries={summaries} />
      <ArticleNav slug={article.slug} summaries={summaries} />
    </article>
  );
}
