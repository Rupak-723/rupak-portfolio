"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import profile from "@/data/profile";
import AnimatedBackground from "./Background/AnimatedBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Animated Background */}
      <AnimatedBackground />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8">

        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* LEFT SECTION */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="mb-4 text-lg text-cyan-400">
              Hello, I'm
            </p>

            <h1 className="text-6xl font-black leading-tight lg:text-7xl">
              {profile.name}
            </h1>

            <h2 className="mt-2 text-2xl font-semibold text-cyan-300">
              {profile.designation}
            </h2>

            <p className="mt-2 text-lg text-slate-400">
              {profile.university}
            </p>

            <div className="mt-8 text-2xl font-semibold text-slate-300">

              <TypeAnimation
                sequence={[
                  profile.title[0],
                  2000,
                  profile.title[1],
                  2000,
                  profile.title[2],
                  2000,
                  profile.title[3],
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />

            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              {profile.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="#research"
                className="rounded-xl bg-cyan-500 px-7 py-4 font-semibold transition hover:bg-cyan-400"
              >
                View Research
              </a>

              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-cyan-500 px-7 py-4 font-semibold transition hover:bg-cyan-500"
              >
                Download CV
              </a>

            </div>

            {/* Social Icons */}

            <div className="mt-10 flex gap-6 text-3xl">

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

              <a
                href={profile.email}
                className="transition hover:text-cyan-400"
              >
                <FaEnvelope />
              </a>

            </div>

          </motion.div>

          {/* RIGHT SECTION */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <div className="relative">

              {/* Glow */}

              <div className="absolute inset-0 rounded-full bg-cyan-500 opacity-30 blur-3xl"></div>

              <Image
                src={profile.image}
                alt={profile.name}
                width={400}
                height={400}
                priority
                className="relative h-96 w-96 rounded-full border-4 border-cyan-400 object-cover shadow-2xl"
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}