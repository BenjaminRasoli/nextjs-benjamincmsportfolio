"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { ISourceOptions, OutMode } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export const StarsBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "#000000" },
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          enable: false,
        },
        move: {
          enable: true,
          outModes: { default: OutMode.out },
          random: true,
          speed: 0.2,
          straight: false,
        },
        number: {
          density: { enable: true, value_area: 800 },
          value: 250,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 1 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div id="tsparticles" style={{ width: "100%", height: "100%" }}>
        <Particles id="tsparticles" options={options} />
      </div>
    );
  }

  return null;
};
