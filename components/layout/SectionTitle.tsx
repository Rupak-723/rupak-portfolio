import { motion } from "framer-motion";

export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <h2 className="text-5xl font-black text-white">
        {title}
      </h2>

      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-cyan-400" />

      {subtitle && (
        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}