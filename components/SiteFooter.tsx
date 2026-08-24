import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-kicker">Independent field manual</p>
          <h2>Keep the signal clear.</h2>
          <p className="footer-copy">A fan-made guide for the systems, units and strategic decisions publicly described for Dust Front RTS.</p>
        </div>
        <div className="footer-links">
          <div><span>Navigate</span><Link href="/guides">Guides</Link><Link href="/systems">Systems</Link><Link href="/units">Units</Link></div>
          <div><span>Official channels</span><Link href={siteConfig.steamUrl} target="_blank" rel="noreferrer">Steam <ArrowUpRight size={13} /></Link><Link href={siteConfig.communityUrl} target="_blank" rel="noreferrer">Community <ArrowUpRight size={13} /></Link></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Dust Front RTS Wiki</span><span>Fan-made, not affiliated with rtsDimon.</span></div>
    </footer>
  );
}
