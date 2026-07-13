"use client";

const skills = [
  "Python",
  "Quantum ESPRESSO",
  "Origin",
  "LaTeX",
  "ChemDraw",
  "MestReNova",
  "NMR",
  "IR",
  "UV-Vis",
  "Electrochemistry",
  "CO₂-TPD",
  "XRD",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 py-24 text-white">

      <div className="mx-auto max-w-6xl px-8">

        <h2 className="mb-16 text-center text-5xl font-bold">
          Skills
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">

          {skills.map((skill) => (

            <div
              key={skill}
              className="rounded-xl bg-slate-800 p-6 text-center text-lg font-semibold hover:bg-cyan-500 transition"
            >
              {skill}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}