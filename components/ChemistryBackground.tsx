"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  size: Math.random() * 8 + 4,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 12 + 10,
  delay: Math.random() * 5,
}));

export default function ChemistryBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950 pointer-events-none">
      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400/30"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 20, 0],
            x: [0, 20, -15, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating chemistry text */}
      {[
        "CO₂",
        "CH₄",
        "H₂O",
        "NH₃",
        "CeCuGe",
        "CaSi₂",
        "HCOOH",
        "Catalysis",
      ].map((text, index) => (
        <motion.div
          key={index}
          className="absolute text-cyan-300/10 font-bold select-none"
          style={{
            left: `${10 + index * 10}%`,
            top: `${15 + (index % 4) * 20}%`,
            fontSize: `${18 + (index % 3) * 6}px`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            repeat: Infinity,
            duration: 12 + index,
            ease: "easeInOut",
          }}
        >
          {text}
        </motion.div>
      ))}

      {/* Horizontal glowing lines */}
      {[20, 40, 60, 80].map((y, i) => (
        <motion.div
          key={i}
          className="absolute left-0 h-px bg-cyan-400/10"
          style={{
            top: `${y}%`,
            width: "100%",
          }}
          animate={{
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            repeat: Infinity,
            duration: 5 + i,
          }}
        />
      ))}
    </div>
  );
}
