"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray300 bg-navyMid mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="font-display text-xl text-gold mb-1">Africa Narrative Signals</p>
          <p className="text-[0.72rem] tracking-widest2 uppercase text-gray500 mb-4">
            Independent Research Organization
          </p>
          <p className="text-sm text-gray500 leading-relaxed max-w-xs">
            Analyzing political narratives, tracking misinformation, and
            strengthening information integrity across Africa.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="section-label">Navigation</p>
          <ul className="flex flex-col gap-2.5">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About ANS" },
              { href: "/insights", label: "Insights" },
              { href: "/reports", label: "Reports" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="gold-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <p className="section-label">Intelligence Briefing</p>
          <p className="text-sm text-gray500 mb-4 leading-relaxed">
            Receive our weekly analysis on African narrative trends directly in
            your inbox.
          </p>
          <form className="flex gap-0" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="form-input"
            />
            <button type="submit" className="btn-primary">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray300 max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-[0.7rem] text-gray500/60">
          © {new Date().getFullYear()} Africa Narrative Signals. All rights reserved.
        </p>
        <p className="text-[0.7rem] text-gray500/40">
          Independent · Non-partisan · Africa-focused
        </p>
      </div>
    </footer>
  );
}