import Link from "next/link";
import { ArrowUpRight, Menu, Radio } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/">
          <span className="brand-mark"><Radio size={17} strokeWidth={2.5} /></span>
          <span><strong>Dust Front</strong><small>RTS field manual</small></span>
        </Link>
        <nav className="main-nav" aria-label="Primary navigation">
          <Link href="/guides">Guides</Link>
          <Link href="/systems">Systems</Link>
          <Link href="/units">Units</Link>
          <Link href="/campaign">Campaign</Link>
        </nav>
        <div className="header-actions">
          <Link className="status-link" href={siteConfig.steamUrl} target="_blank" rel="noreferrer">
            Steam <ArrowUpRight size={14} />
          </Link>
          <button className="menu-button" type="button" aria-label="Open navigation"><Menu size={19} /></button>
        </div>
      </div>
    </header>
  );
}
