import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/lib/articles";

type Props = { params: Promise<{ section: string }> };
const allowed = ["systems", "units", "campaign", "factions", "strategy", "difficulty", "weapons"];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section } = await params;
  return { title: `Dust Front RTS ${section[0]?.toUpperCase()}${section.slice(1)} Guides`, description: `Browse source-aware Dust Front RTS ${section} guides, current verification status and related strategy pages.` };
}

export default async function SectionPage({ params }: Props) {
  const { section } = await params;
  if (!allowed.includes(section)) notFound();
  const sectionArticles = articles.filter((article) => article.section === section);
  return <div className="shell"><header className="page-intro"><p className="eyebrow">Field index / {sectionArticles.length} reports</p><h1>{section}</h1><p>Source-aware reports organized around the systems players are most likely to investigate.</p></header><section className="article-grid guides-grid">{sectionArticles.map((article) => <ArticleCard article={article} key={article.slug} />)}</section></div>;
}
