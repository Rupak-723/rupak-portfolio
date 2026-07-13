"use client";

import { motion } from "framer-motion";
import profile from "@/data/profile";

export default function Stats() {
  return (
    <section className="bg-slate-950 py-16">

      <div className="mx-auto max-w-7xl px-8">

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {profile.stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8 text-center shadow-lg hover:border-cyan-400 hover:shadow-cyan-500/20 transition"
            >

              <h3 className="text-4xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <p className="mt-3 text-slate-300">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}