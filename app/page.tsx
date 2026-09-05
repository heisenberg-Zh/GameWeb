import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crosshair, Factory, Map, ShieldCheck } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryRail } from "@/components/CategoryRail";
import { VideoShowcase } from "@/components/VideoShowcase";
import { articles, articleBySlug, articleHref } from "@/lib/articles";
import { siteConfig } from "@/lib/site";

const startCards = [
  { n: "01", title: "Beginner guide", copy: "Set priorities for your first base, economy and military decisions.", slug: "dust-front-rts-beginner-guide" },
  { n: "02", title: "Demo briefing", copy: "Separate what is playable now from the systems planned for release.", slug: "dust-front-rts-demo" },
  { n: "03", title: "Build order", copy: "Use a flexible opening framework instead of an unverified fixed recipe.", slug: "dust-front-rts-build-order" },
  { n: "04", title: "Production", copy: "Connect extraction, processing, factories and reinforcement timing.", slug: "dust-front-rts-economy-guide" }
];

export default function HomePage() {
  const featured = articles.filter((article) => article.status !== "pending").slice(0, 6);
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: siteConfig.videos.trailer.title,
    description: "Official 2025 trailer for Dust Front RTS from the developer channel RtsDimon.",
    thumbnailUrl: siteConfig.videos.trailer.thumbnail,
    uploadDate: siteConfig.videos.trailer.uploadDate,
    duration: "PT1M36S",
    embedUrl: `https://www.youtube-nocookie.com/embed/${siteConfig.videos.trailer.id}`,
    url: `https://www.youtube.com/watch?v=${siteConfig.videos.trailer.id}`,
    publisher: { "@type": "Organization", name: "RtsDimon" }
  };
  return (
    <div className="shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Independent operational wiki / App 2610770</p>
          <h1>Dust Front <span>RTS</span></h1>
          <p className="hero-lead">A post-apocalyptic real-time strategy game that combines base construction, industrial production and grand-strategy decisions in a procedurally shaped world.</p>
          <div className="hero-actions">
            <Link className="button" href="/guides/dust-front-rts-beginner-guide">Start beginner guide <ArrowRight size={16} /></Link>
            <Link className="button secondary" href="/guides">Browse field manual</Link>
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-label"><span>Operational status</span></div>
          <div className="emblem-wrap"><Image src="/images/dust-front-emblem.png" alt="Dust Front RTS fan-made armored emblem" width={260} height={260} priority /></div>
          <h2>Public intelligence</h2>
          <p>Confirmed descriptions include base building, mining, processing, factories, technology branches, a global map and mixed infantry, vehicle and aviation forces.</p>
          <div className="signal-row"><div><strong>Windows</strong><span>Platform</span></div><div><strong>RTS</strong><span>Genre</span></div><div><strong>rtsDimon</strong><span>Developer</span></div></div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><div><p className="eyebrow">Start here</p><h2>Your first operation</h2></div><p>Follow the sequence, then branch into the system that is blocking your current run.</p></div>
        <div className="start-grid">
          {startCards.map((card) => { const article = articleBySlug(card.slug)!; return <Link className="start-card" href={articleHref(article)} key={card.n}><span className="number">{card.n}</span><h3>{card.title}</h3><p>{card.copy}</p></Link>; })}
        </div>
      </section>

      <VideoShowcase />

      <section className="section content-split">
        <div><p className="eyebrow">Game profile</p><h2>Industry before victory.</h2></div>
        <div>
          <p>Dust Front RTS is a Windows strategy game developed by rtsDimon. Its official Steam description combines classic real-time strategy with grand-strategy elements, procedural world generation and a non-linear campaign.</p>
          <p>Players are expected to build bases, extract and process resources, manufacture military equipment and command infantry, vehicles and aircraft. This wiki separates confirmed systems from features that still need public build evidence.</p>
          <div className="about-stats"><div><strong>TBA</strong><span>Release</span></div><div><strong>2610770</strong><span>Steam App</span></div><div><strong>Demo</strong><span>Listed</span></div><div><strong>Global</strong><span>Map scope</span></div><div><strong>Procedural</strong><span>World</span></div><div><strong>Mixed</strong><span>Forces</span></div></div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><div><p className="eyebrow">Core manuals</p><h2>Plan by system</h2></div><Link className="button secondary" href="/guides">View all guides <ArrowRight size={15} /></Link></div>
        <div className="latest-layout"><div className="article-grid">{featured.map((article) => <ArticleCard article={article} key={article.slug} />)}</div><CategoryRail /></div>
      </section>

      <section className="section mission-band">
        <div><Crosshair /><span>Reconnaissance</span><p>Verify the current build before committing to a fixed strategy.</p></div>
        <div><Factory /><span>Production</span><p>Protect throughput, not only individual structures.</p></div>
        <div><ShieldCheck /><span>Resilience</span><p>Design recovery paths before the first attack arrives.</p></div>
        <div><Map /><span>Campaign</span><p>Keep planned features separate from current Demo evidence.</p></div>
      </section>

      <section className="section final-band"><div><p className="eyebrow">Ready to deploy?</p><h2>Build the economy. Read the field.</h2></div><div><p>Start with verified foundations, then update each plan as the public build changes.</p><div className="hero-actions"><Link className="button" href="/guides/dust-front-rts-beginner-guide">Read beginner guide</Link><Link className="button secondary" href={siteConfig.steamUrl} target="_blank" rel="noreferrer">Open Steam</Link></div></div></section>
    </div>
  );
}
