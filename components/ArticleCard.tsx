import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { articleHref, type Article } from "@/lib/articles";
import { StatusBadge } from "@/components/StatusBadge";

export function ArticleCard({ article, compact = false }: { article: Article; compact?: boolean }) {
  return (
    <Link className={`article-card${compact ? " compact" : ""}`} href={articleHref(article)}>
      <div className="card-meta"><span>{article.category}</span><StatusBadge status={article.status} /></div>
      <h3>{article.title}</h3>
      {!compact && <p>{article.summary}</p>}
      <div className="card-footer"><span>{article.readTime} read</span><ArrowUpRight size={17} /></div>
    </Link>
  );
}
