"use client";

import { motion } from "framer-motion";
import achievements from "@/data/achievements";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-bold"
        >
          Achievements
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-2xl border border-cyan-500/30 bg-slate-800 p-8 shadow-lg transition hover:-translate-y-2 hover:border-cyan-400"
            >
              <div className="mb-4 text-5xl">{item.icon}</div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-2 text-cyan-400">
                {item.organization}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {item.year}
              </p>

              <p className="mt-4 text-slate-300">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
