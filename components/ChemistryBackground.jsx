"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ChemistryBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },

      background: {
        color: "#0f172a",
      },

      fpsLimit: 60,

      particles: {
        number: {
          value: 45,
        },

        color: {
          value: [
            "#38bdf8",
            "#60a5fa",
            "#22c55e",
            "#f8fafc",
          ],
        },

        links: {
          enable: true,
          distance: 140,
          opacity: 0.18,
          color: "#38bdf8",
        },

        move: {
          enable: true,
          speed: 0.6,
          outModes: {
            default: "bounce",
          },
        },

        opacity: {
          value: 0.5,
        },

        size: {
          value: { min: 2, max: 5 },
        },

        shape: {
          type: "circle",
        },
      },

      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return <Particles options={options} />;
}
