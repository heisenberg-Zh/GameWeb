import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locales } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };
const copy: Record<string, { eyebrow: string; title: string; description: string; cta: string; note: string }> = {
  de: { eyebrow: "Lokalisierte Startseite", title: "Dust Front RTS", description: "Ein unabhangiger Leitfaden zu Wirtschaft, Basisbau, Einheiten und bestatigten Spielsystemen.", cta: "Englische Guides offnen", note: "Die ausfuhrlichen Artikel bleiben vorerst auf Englisch, damit Quellen und Versionshinweise eindeutig bleiben." },
  es: { eyebrow: "Inicio localizado", title: "Dust Front RTS", description: "Una guia independiente sobre economia, construccion de bases, unidades y sistemas confirmados.", cta: "Abrir guias en ingles", note: "Los articulos completos permanecen en ingles para conservar la precision de las fuentes y versiones." },
  fr: { eyebrow: "Accueil localise", title: "Dust Front RTS", description: "Un guide independant sur l'economie, la construction de bases, les unites et les systemes confirmes.", cta: "Ouvrir les guides anglais", note: "Les articles complets restent en anglais afin de preserver la precision des sources et des versions." },
  zh: { eyebrow: "中文导航", title: "灰烬战争", description: "独立玩家攻略站，整理经济、基地建设、单位和已确认的游戏系统。", cta: "查看英文攻略", note: "完整文章暂时保留英文，以确保来源、版本及游戏术语准确一致。" }
};

export function generateStaticParams() { return locales.filter((locale) => locale.code !== "en").map(({ code }) => ({ locale: code })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { locale } = await params; const value = copy[locale]; return value ? { title: `${value.title} Wiki`, description: value.description } : {}; }
export default async function LocalePage({ params }: Props) { const { locale } = await params; const value = copy[locale]; if (!value) notFound(); return <div className="shell"><section className="locale-hero"><p className="eyebrow">{value.eyebrow}</p><h1>{value.title}</h1><p>{value.description}</p><div className="fact-callout">{value.note}</div><Link className="button" href="/guides">{value.cta}</Link><div className="locale-links">{locales.map((item) => <Link href={item.code === "en" ? "/" : `/lang/${item.code}`} key={item.code}>{item.label}</Link>)}</div></section></div>; }
