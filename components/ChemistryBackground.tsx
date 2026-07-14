"use client";

import { useEffect, useState } from "react";
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

  if (!init) return null;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },

          fullScreen: {
            enable: false,
          },

          fpsLimit: 60,

          detectRetina: true,

          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                width: 1920,
                height: 1080,
              },
            },

            color: {
              value: [
                "#38bdf8",
                "#60a5fa",
                "#22c55e",
                "#ffffff",
              ],
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
              speed: 0.7,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "bounce",
              },
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

            shape: {
              type: "circle",
            },
          },

          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },

              resize: {
                enable: true,
              },
            },

            modes: {
              grab: {
                distance: 160,

                links: {
                  opacity: 0.5,
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
