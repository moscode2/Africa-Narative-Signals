import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Africa Narrative Signals — for research inquiries, media requests, partnerships, and newsletter subscriptions.",
};

export default function ContactPage() {
  return (
    <>
      {/* Intro Section */}
      <section className="pt-36 pb-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <SectionLabel>Get In Touch</SectionLabel>
            <h1 className="font-display text-5xl md:text-6xl font-medium text-sand tracking-tight leading-[1.08] mb-6">
              Contact <span className="italic text-gold/90">ANS</span>
            </h1>
            <p className="text-base text-muted leading-relaxed">
              Whether you have a research inquiry, media request, partnership proposal, 
              or want to subscribe to our intelligence briefing — we would like to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Contact Info */}
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

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Newsletter Strip */}
      <NewsletterForm />
    </>
  );
}