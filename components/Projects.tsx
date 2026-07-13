"use client";

import { motion } from "framer-motion";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-24 text-white">

      <div className="mx-auto max-w-7xl px-8">

        <h2 className="mb-14 text-center text-5xl font-bold">
          Projects
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="rounded-2xl border border-cyan-500/20 bg-slate-800 p-8 hover:border-cyan-400 transition"
            >

              <p className="text-cyan-400">
                {project.period}
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-5 text-slate-300 leading-8">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {project.technologies.map((tech, i) => (

                  <span
                    key={i}
                    className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300"
                  >
                    {tech}
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