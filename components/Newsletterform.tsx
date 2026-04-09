'use client';
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email });
    // Add API call to subscribe
  };

  return (
    <section className="py-16 border-t border-white/5 bg-ink2/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="font-display text-2xl text-sand font-medium tracking-tight mt-2 mb-2">
              Intelligence Briefing
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Weekly analysis on African narrative trends, misinformation incidents, and digital democracy — free, every Friday.
            </p>
          </div>
          <form className="flex gap-0 w-full md:w-auto md:min-w-[380px]" onSubmit={handleSubmit}>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="your@email.com" className="flex-1 bg-ink3 border border-white/8 px-4 py-3 text-sm text-sand placeholder:text-muted/40 outline-none focus:border-gold/40 transition-colors" />
            <button type="submit" className="px-5 py-3 bg-gold text-ink text-[0.7rem] tracking-[0.1em] uppercase font-medium hover:bg-gold2 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}