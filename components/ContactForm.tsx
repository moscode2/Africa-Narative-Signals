'use client';
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [message, setMessage] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email, organization, inquiryType, message, subscribe });
    // Here you can add API call logic to send form data
  };

  return (
    <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-[0.65rem] tracking-[0.18em] uppercase text-muted font-medium">Full Name *</label>
          <input value={name} onChange={e => setName(e.target.value)} type="text" required placeholder="Your name" className="bg-ink2 border border-white/8 px-4 py-3 text-sm text-sand placeholder:text-muted/40 outline-none focus:border-gold/40 transition-colors" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[0.65rem] tracking-[0.18em] uppercase text-muted font-medium">Email Address *</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" required placeholder="your@email.com" className="bg-ink2 border border-white/8 px-4 py-3 text-sm text-sand placeholder:text-muted/40 outline-none focus:border-gold/40 transition-colors" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[0.65rem] tracking-[0.18em] uppercase text-muted font-medium">Organization</label>
        <input value={organization} onChange={e => setOrganization(e.target.value)} type="text" placeholder="Your organization (optional)" className="bg-ink2 border border-white/8 px-4 py-3 text-sm text-sand placeholder:text-muted/40 outline-none focus:border-gold/40 transition-colors" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[0.65rem] tracking-[0.18em] uppercase text-muted font-medium">Inquiry Type</label>
        <select value={inquiryType} onChange={e => setInquiryType(e.target.value)} className="bg-ink2 border border-white/8 px-4 py-3 text-sm text-sand outline-none focus:border-gold/40 transition-colors appearance-none">
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
        <textarea value={message} onChange={e => setMessage(e.target.value)} required rows={6} placeholder="Tell us about your inquiry..." className="bg-ink2 border border-white/8 px-4 py-3 text-sm text-sand placeholder:text-muted/40 outline-none focus:border-gold/40 transition-colors resize-none" />
      </div>

      <div className="flex items-center gap-3">
        <input type="checkbox" checked={subscribe} onChange={e => setSubscribe(e.target.checked)} id="newsletter" className="accent-gold" />
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
  );
}