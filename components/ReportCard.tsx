import { Report, formatDate } from "@/lib/data";

export default function ReportCard({ report }: { report: Report }) {
  return (
    <div className="border border-white/6 bg-ink2/60 hover:border-gold/20 hover:bg-ink2 transition-all duration-300 p-6 flex flex-col">
      {/* Category badge */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-[0.62rem] tracking-[0.18em] uppercase text-gold font-medium border border-gold/25 px-2 py-0.5">
          {report.category}
        </span>
        <span className="text-[0.65rem] tracking-wider uppercase text-muted/50">
          {report.pages} pp.
        </span>
      </div>

      {/* PDF icon */}
      <div className="w-10 h-10 border border-white/8 flex items-center justify-center mb-4">
        <span className="text-gold text-xs font-medium tracking-wider">PDF</span>
      </div>

      {/* Title */}
      <h3 className="font-display text-lg text-sand font-medium leading-snug mb-3">
        {report.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed mb-5 flex-1 line-clamp-3">
        {report.description}
      </p>

      {/* Footer row */}
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <span className="text-[0.7rem] text-muted">{formatDate(report.date)}</span>
        <a
          href={report.downloadUrl}
          className="flex items-center gap-1.5 text-[0.68rem] tracking-[0.12em] uppercase text-gold hover:text-gold2 transition-colors font-medium"
          download
        >
          Download ↓
        </a>
      </div>
    </div>
  );
}
