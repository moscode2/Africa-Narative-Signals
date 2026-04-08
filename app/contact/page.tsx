import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Africa Narrative Signals — for research inquiries, media requests, partnerships, and newsletter subscriptions.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-36 pb-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <SectionLabel>Get In Touch</SectionLabel>
            <h1 className="font-display text-5xl md:text-6xl font-medium text-sand tracking-tight leading-[1.08] mb-6">
              Contact <span className="italic text-gold/90">ANS</span>
            </h1>
            <p className="text-base text-muted leading-relaxed">
              Whether you have a research inquiry, a media request, a partnership proposal, or want to subscribe to our intelligence briefing — we would like to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <SectionLabel>Inquiries</SectionLabel>
                <div className="space-y-6 mt-4">
                  {[
                    { label: "Research Inquiries", value: "research@africanarrativesignals.org" },
                    { label: "Media Requests", value: "press@africanarrativesignals.org" },
                    { label: "Partnerships", value: "partnerships@africanarrativesignals.org" },
                    { label: "General", value: "hello@africanarrativesignals.org" },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4 items-start">
                      <span className="block w-px h-10 bg-gold/30 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-[0.65rem] tracking-[0.18em] uppercase text-muted/60 mb-0.5">{item.label}</p>
                        <a href={`mailto:${item.value}`} className="text-sm text-sand hover:text-gold transition-colors">{item.value}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/5 pt-10">
                <SectionLabel>About ANS</SectionLabel>
                <p className="text-sm text-muted leading-relaxed mt-4">
                  Africa Narrative Signals is an independent, non-partisan research organization. We are based across multiple African cities and operate continent-wide.
                </p>
                <p className="text-sm text-muted leading-relaxed mt-3">
                  We do not accept funding from political parties, governments with active research interests in our coverage areas, or commercial entities seeking to influence our findings.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <SectionLabel>Send a Message</SectionLabel>
              <form className="mt-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.65rem] tracking-[0.18em] uppercase text-muted font-medium">Full Name *</label>
                    <input type="text" required placeholder="Your name" className="bg-ink2 border border-white/8 px-4 py-3 text-sm text-sand placeholder:text-muted/40 outline-none focus:border-gold/40 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.65rem] tracking-[0.18em] uppercase text-muted font-medium">Email Address *</label>
                    <input type="email" required placeholder="your@email.com" className="bg-ink2 border border-white/8 px-4 py-3 text-sm text-sand placeholder:text-muted/40 outline-none focus:border-gold/40 transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.65rem] tracking-[0.18em] uppercase text-muted font-medium">Organization</label>
                  <input type="text" placeholder="Your organization (optional)" className="bg-ink2 border border-white/8 px-4 py-3 text-sm text-sand placeholder:text-muted/40 outline-none focus:border-gold/40 transition-colors" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.65rem] tracking-[0.18em] uppercase text-muted font-medium">Inquiry Type</label>
                  <select className="bg-ink2 border border-white/8 px-4 py-3 text-sm text-sand outline-none focus:border-gold/40 transition-colors appearance-none">
                    <option value="">Select type</option>
                    <option>Research Inquiry</option>
                    <option>Media Request</option>
                    <option>Partnership Proposal</option>
                    <option>Newsletter Subscription</option>
                    <option>General</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.65rem] tracking-[0.18em] uppercase text-muted font-medium">Message *</label>
                  <textarea required rows={6} placeholder="Tell us about your inquiry..." className="bg-ink2 border border-white/8 px-4 py-3 text-sm text-sand placeholder:text-muted/40 outline-none focus:border-gold/40 transition-colors resize-none" />
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" id="newsletter" className="accent-gold" />
                  <label htmlFor="newsletter" className="text-sm text-muted cursor-pointer">
                    Subscribe me to the ANS weekly intelligence briefing
                  </label>
                </div>

                <button type="submit" className="w-full md:w-auto px-8 py-3.5 bg-gold text-ink text-[0.75rem] tracking-[0.12em] uppercase font-medium hover:bg-gold2 transition-colors duration-200">
                  Send Message →
                </button>

                <p className="text-[0.65rem] text-muted/50">
                  We typically respond within 2–3 business days. For urgent media requests, please indicate in your message.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter strip */}
      <section className="py-16 border-t border-white/5 bg-ink2/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-md">
              <SectionLabel>Weekly Briefing</SectionLabel>
              <h2 className="font-display text-2xl text-sand font-medium tracking-tight mt-2 mb-2">
                Intelligence Briefing
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Weekly analysis on African narrative trends, misinformation incidents, and digital democracy — free, every Friday.
              </p>
            </div>
            <form className="flex gap-0 w-full md:w-auto md:min-w-[380px]" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" className="flex-1 bg-ink3 border border-white/8 px-4 py-3 text-sm text-sand placeholder:text-muted/40 outline-none focus:border-gold/40 transition-colors" />
              <button type="submit" className="px-5 py-3 bg-gold text-ink text-[0.7rem] tracking-[0.1em] uppercase font-medium hover:bg-gold2 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
