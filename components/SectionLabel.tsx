export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-6 h-px bg-gold" />
      <span className="text-[0.65rem] tracking-[0.22em] uppercase text-gold font-medium">
        {children}
      </span>
    </div>
  );
}
