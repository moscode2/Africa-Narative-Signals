"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex gap-0 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 bg-ink2 border border-white/8 px-4 py-3 text-sm text-sand placeholder:text-muted/50 outline-none"
      />
      <button type="submit">
        Subscribe
      </button>
    </form>
  );
}