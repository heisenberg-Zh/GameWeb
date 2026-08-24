import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { articles, articleHref } from "@/lib/articles";

const groups = ["Guide", "Economy", "Base Building", "Units", "Campaign", "Hardest Difficulty"];

export function CategoryRail() {
  return (
    <aside className="category-rail">
      <p className="eyebrow">Field index</p>
      <h2>Find the next decision.</h2>
      <div className="rail-list">
        {groups.map((group) => {
          const article = articles.find((item) => item.category === group);
          if (!article) return null;
          return <Link href={articleHref(article)} key={group}><span>{group}</span><ArrowUpRight size={15} /></Link>;
        })}
      </div>
      <div className="rail-note"><span>Data discipline</span><p>Unverified mechanics stay marked until a current build or official source confirms them.</p></div>
    </aside>
  );
}
