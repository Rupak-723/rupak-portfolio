export default function Button({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="
      rounded-xl
      bg-cyan-500
      px-6
      py-3
      font-semibold
      text-white
      transition
      hover:bg-cyan-400
      "
    >
      {children}
    </a>
  );
}