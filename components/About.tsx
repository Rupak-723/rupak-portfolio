"use client";

import { motion } from "framer-motion";
import profile from "@/data/profile";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-5xl font-bold">
            About Me
          </h2>

          <div className="mb-10 h-1 w-24 rounded bg-cyan-400"></div>

          <div className="max-w-5xl">

            <p className="whitespace-pre-line text-lg leading-9 text-slate-300">
              {profile.about}
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
