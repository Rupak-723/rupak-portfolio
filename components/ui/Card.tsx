export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      shadow-xl
      transition
      hover:-translate-y-2
      hover:border-cyan-400
      "
    >
      {children}
    </div>
  );
}