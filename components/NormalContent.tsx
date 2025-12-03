export default function NormalContent({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-10 py-16 bg-[var(--background-primary)]">
      <div className="max-w-5xl mx-auto space-y-24">{children}</div>
    </section>
  );
}