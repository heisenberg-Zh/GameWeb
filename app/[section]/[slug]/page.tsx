import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import { StatusBadge } from "@/components/StatusBadge";
import { articleBySlug, articleHref, articles } from "@/lib/articles";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ section: string; slug: string }> };

export function generateStaticParams() { return articles.map(({ section, slug }) => ({ section, slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section, slug } = await params;
  const article = articleBySlug(slug);
  if (!article || article.section !== section) return {};
  const description = `${article.keyword}: ${article.summary} Check source status, version notes and related strategy.`;
  return { title: { absolute: article.title }, description: description.length > 160 ? `${description.slice(0, 157).trimEnd()}...` : description, alternates: { canonical: articleHref(article) }, openGraph: { type: "article", title: article.title, description: article.summary } };
}

async function ArticleContent({ file }: { file: string }) {
  const source = await readFile(path.join(process.cwd(), "content", file), "utf8");
  const { content } = await compileMDX({ source });
  return content;
}

export default async function ArticlePage({ params }: Props) {
  const { section, slug } = await params;
  const article = articleBySlug(slug);
  if (!article || article.section !== section) notFound();
  const related = article.related.map(articleBySlug).filter(Boolean);
  return <div className="shell article-layout"><article><header className="article-head"><div className="crumbs"><Link href="/guides">Field manual</Link> / {article.category}</div><h1>{article.title}</h1><p className="lead">{article.summary}</p><div className="article-meta"><StatusBadge status={article.status} /><span>{article.readTime} read</span><span>Reviewed Aug 24, 2026</span></div></header><div className="article-body">{article.file ? <ArticleContent file={article.file} /> : <><div className="fact-callout"><strong>Verification status:</strong> This topic is intentionally not presented as a complete guide. Current public material does not support the detailed answer players would expect.</div><h2>What can be confirmed</h2><p>{article.summary} The official Steam description confirms the broader direction of Dust Front RTS, but it does not provide enough current-build detail to publish names, values, unlock conditions or a definitive ranking.</p><h2>What still needs evidence</h2><p>This page will be expanded after a current public build, official development update or clearly dated gameplay source confirms the mechanic. Future details will be labeled with the build or review date.</p><h2>Why this page stays visible</h2><p>The search question is real even when the answer is incomplete. A transparent status page avoids outdated speculation and creates a stable place to record verified information.</p></>}</div></article><aside className="article-side"><h2>Related reports</h2>{related.map((item) => item && <Link href={articleHref(item)} key={item.slug}>{item.title}</Link>)}<div className="source-box"><strong>Primary sources</strong><p>Official descriptions establish scope. Current-build details require separate verification.</p><Link href={siteConfig.steamUrl} target="_blank" rel="noreferrer">Official Steam page</Link><Link href={siteConfig.communityUrl} target="_blank" rel="noreferrer">Steam Community</Link></div></aside></div>;
}
