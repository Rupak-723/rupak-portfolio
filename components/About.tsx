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

          <div className="max-w-5xl space-y-8 text-lg leading-9 text-slate-300">

            <p>
              {profile.about}
            </p>

            <div>
              <h3 className="mb-3 text-2xl font-semibold text-white">
                Research Interests
              </h3>

              <div className="flex flex-wrap gap-3">
                {profile.interests.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400 bg-slate-800 px-5 py-2 text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-2xl font-semibold text-white">
                Education
              </h3>

              <p>
                <strong>BS–MS in Chemistry</strong>
                <br />
                Indian Institute of Science Education and Research (IISER)
                Kolkata
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-2xl font-semibold text-white">
                Career Goal
              </h3>

              <p>
                My long-term goal is to pursue a PhD in Chemistry and
                contribute to cutting-edge research in sustainable catalysis,
                organic synthesis, computational materials science, and
                interdisciplinary chemical research.
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
