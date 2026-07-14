"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ChemistryBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },

      background: {
        color: {
          value: "transparent",
        },
      },

      fpsLimit: 60,

      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
          },
        },

        color: {
          value: [
            "#38bdf8",
            "#60a5fa",
            "#22c55e",
            "#f8fafc",
          ],
        },

        shape: {
          type: "circle",
        },

        opacity: {
          value: 0.45,
        },

        size: {
          value: {
            min: 2,
            max: 5,
          },
        },

        links: {
          enable: true,
          distance: 140,
          color: "#38bdf8",
          opacity: 0.18,
          width: 1,
        },

        move: {
          enable: true,
          speed: 0.6,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "bounce",
          },
        },
      },

      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Particles options={options} />
    </div>
  );
}
