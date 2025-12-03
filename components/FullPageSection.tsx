type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function FullPageSection({ children, className }: Props) {
  return (
    <section
      className={`relative h-screen snap-start flex items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 bg-black/40 z-[10]" />
      <div className="relative z-[2] text-center px-4">
        {children}
      </div>
    </section>
  );
}
