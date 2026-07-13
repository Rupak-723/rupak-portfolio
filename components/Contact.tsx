import profile from "@/data/profile";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";
export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-24 text-white">

      <div className="mx-auto max-w-4xl px-8 text-center">

        <h2 className="mb-8 text-5xl font-bold">
          Contact
        </h2>

        <p className="mb-12 text-slate-300">
          Feel free to connect with me regarding research, collaborations, internships, or academic opportunities.
        </p>

        <div className="flex justify-center gap-10 text-4xl">

          <a
            href={profile.email}
            className="hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </section>
  );
}
