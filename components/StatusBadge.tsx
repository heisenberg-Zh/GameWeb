import type { ArticleStatus } from "@/lib/articles";

const labels: Record<ArticleStatus, string> = {
  verified: "Verified source",
  versioned: "Version-aware",
  pending: "Needs verification"
};

export function StatusBadge({ status }: { status: ArticleStatus }) {
  return <span className={`status status-${status}`}>{labels[status]}</span>;
}
