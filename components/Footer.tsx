import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink2 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="font-display text-xl text-sand mb-1">
            Africa Narrative Signals
          </p>
          <p className="text-[0.72rem] tracking-[0.15em] uppercase text-muted mb-4">
            Independent Research Organization
          </p>
          <p className="text-sm text-muted leading-relaxed max-w-xs">
            Analyzing political narratives, tracking misinformation, and
            strengthening information integrity across Africa.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-4 font-medium">
            Navigation
          </p>
          <ul className="flex flex-col gap-2.5">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About ANS" },
              { href: "/insights", label: "Insights" },
              { href: "/reports", label: "Reports" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted hover:text-sand transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-4 font-medium">
            Intelligence Briefing
          </p>
          <p className="text-sm text-muted mb-4 leading-relaxed">
            Receive our weekly analysis on African narrative trends directly in
            your inbox.
          </p>
          <form className="flex gap-0" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-ink3 border border-white/8 px-3 py-2.5 text-sm text-sand placeholder:text-muted/50 outline-none focus:border-gold/40 transition-colors"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-gold text-ink text-[0.68rem] tracking-[0.1em] uppercase font-medium hover:bg-gold2 transition-colors"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/5 max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-[0.7rem] text-muted/60">
          © {new Date().getFullYear()} Africa Narrative Signals. All rights
          reserved.
        </p>
        <p className="text-[0.7rem] text-muted/40">
          Independent · Non-partisan · Africa-focused
        </p>
      </div>
    </footer>
  );
}
