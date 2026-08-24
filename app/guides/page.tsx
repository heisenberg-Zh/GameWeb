import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { articles, categories } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Dust Front RTS Guides and Strategy Index",
  description: "Browse Dust Front RTS guides for beginners, Demo systems, build orders, economy, base building, units, campaign features and high difficulty strategy."
};

export default function GuidesPage() {
  return (
    <div className="shell">
      <header className="page-intro"><p className="eyebrow">Operational library / 20 topics</p><h1>Field manual</h1><p>Every page is tied to one search intent. Confirmed and version-sensitive guides are published first; incomplete systems remain visible with a verification warning.</p></header>
      <div className="filter-row"><span>All topics</span>{categories.map((category) => <span key={category}>{category}</span>)}</div>
      <section className="article-grid guides-grid">{articles.map((article) => <ArticleCard article={article} key={article.slug} />)}</section>
    </div>
  );
}
