"use client";

import { motion } from "framer-motion";
import education from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-8">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-bold"
        >
          Education
        </motion.h2>

        <div className="relative border-l-2 border-cyan-500">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-14 ml-8"
            >
              <div className="absolute -left-[11px] h-5 w-5 rounded-full bg-cyan-400"></div>

              <p className="text-cyan-400 font-semibold">{item.year}</p>

              <h3 className="mt-2 text-2xl font-bold">
                {item.degree}
              </h3>

              <p className="text-lg text-slate-300">
                {item.institute}
              </p>

              <p className="mt-2 text-cyan-300">
                {item.grade}
              </p>

              <p className="mt-4 text-slate-400 leading-8">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}