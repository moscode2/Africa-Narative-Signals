import Link from "next/link";
import { Article, formatDate } from "@/lib/data";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/insights/${article.slug}`} className="group block">
      <article className="border border-white/6 bg-ink2/60 hover:bg-ink2 hover:border-gold/20 transition-all duration-300 p-6">
        {/* Category + date row */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[0.62rem] tracking-[0.18em] uppercase text-gold font-medium border border-gold/25 px-2 py-0.5">
            {article.category}
          </span>
          <span className="text-[0.7rem] text-muted">
            {formatDate(article.date)}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl text-sand font-medium leading-snug mb-3 group-hover:text-gold transition-colors duration-200">
          {article.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-2">
          {article.summary}
        </p>

        {/* Read link */}
        <div className="flex items-center gap-2 text-[0.7rem] tracking-[0.12em] uppercase text-muted group-hover:text-gold transition-colors">
          <span>Read Analysis</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
          <span className="ml-auto text-muted/50">{article.readTime}</span>
        </div>
      </article>
    </Link>
  );
}
