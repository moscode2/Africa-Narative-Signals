import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <span className="block font-display text-[8rem] text-gold/10 font-medium leading-none mb-6">404</span>
        <h1 className="font-display text-3xl text-sand font-medium mb-4">Page Not Found</h1>
        <p className="text-sm text-muted leading-relaxed mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-ink text-[0.75rem] tracking-[0.12em] uppercase font-medium hover:bg-gold2 transition-colors">
          ← Return Home
        </Link>
      </div>
    </div>
  );
}
