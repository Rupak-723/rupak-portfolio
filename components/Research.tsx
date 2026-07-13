"use client";

import { motion } from "framer-motion";
import research from "@/data/research";

export default function Research() {
  return (
    <section
      id="research"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-bold"
        >
          Research Experience
        </motion.h2>

        <div className="grid gap-10 lg:grid-cols-2">

          {research.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8 shadow-lg transition hover:-translate-y-2 hover:border-cyan-400"
            >
              <p className="text-cyan-400">{item.period}</p>

              <h3 className="mt-2 text-3xl font-bold">
                {item.title}
              </h3>

              <p className="mt-2 text-xl text-slate-300">
                {item.organization}
              </p>

              <p className="mt-6 leading-8 text-slate-400">
                {item.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}