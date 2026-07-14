"use client";

import profile from "@/data/profile";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <h1 className="text-2xl font-bold text-cyan-400">
          {profile.name}
        </h1>

        <nav className="hidden gap-8 md:flex">

          <a href="#" className="hover:text-cyan-400">Home</a>

          <a href="#about" className="hover:text-cyan-400">About</a>

          <a href="#research" className="hover:text-cyan-400">Research</a>

          <a href="#projects" className="hover:text-cyan-400">Projects</a>

          <a href="#gallery" className="hover:text-cyan-400">Gallery</a>

          <a href="#contact" className="hover:text-cyan-400">Contact</a>

        </nav>

        <a
          href={profile.cv}
          className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold hover:bg-cyan-400"
        >
          CV
        </a>

      </div>

    </header>
  );
}
