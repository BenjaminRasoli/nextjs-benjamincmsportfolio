"use client";
import { ButtonText, HeroTypes } from "@/types";
import React from "react";
import { urlFor } from "@/sanity/sanity.query";
import Image from "next/image";
import { motion } from "framer-motion";
import { StarsBackground } from "../StarsBackground/StartBackground";
import { TypeAnimation } from "react-type-animation";

function Hero({ hero }: { hero: HeroTypes[] }) {
  const isFirefox =
    typeof navigator !== "undefined" &&
    navigator.userAgent.toLowerCase().includes("firefox");

  return (
    <div
      className="relative w-full pt-2 lg:py-24 flex flex-col justify-center items-center text-white overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        {!isFirefox && <StarsBackground />}
      </div>

      <div className="container">
        {hero.map((item) => (
          <div
            key={item._id}
            className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-20"
          >
            <div className="text-center lg:text-left">
              <motion.h6
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-xl xl:text-2xl font-medium mb-2 leading-snug text-gray-300"
              >
                {item.mainText}
              </motion.h6>

              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight"
              >
                <span className="text-tertiary">{item.firstName}</span>{" "}
                {item.lastName}
              </motion.h1>

              <TypeAnimation
                sequence={
                  item.textPhrases && item.textPhrases.length > 0
                    ? item.textPhrases.flatMap((p) => [p.textPhrase, 3000])
                    : [
                        "I create aesthetic and modern apps",
                        "I build things for the web",
                        3000,
                      ]
                }
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{
                  fontSize: "1.3em",
                  color: "rgba(255, 255, 255, 0.7)",
                  display: "inline-block",
                }}
              />

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 mb-4"
              >
                {item.buttonText.map((buttonText: ButtonText) => (
                  <a
                    key={buttonText._key}
                    href={buttonText.slug.current}
                    className="relative px-6 py-3 text-lg font-medium text-white border-2 border-tertiary rounded-md overflow-hidden transition-all duration-300 group"
                  >
                    <span className="absolute inset-0 w-0 bg-tertiary group-hover:w-full transition-all duration-300"></span>
                    <span className="relative z-10">{buttonText.label}</span>
                  </a>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex justify-center lg:justify-end items-center mb-8 lg:mb-0"
            >
              <Image
                src={urlFor(item.heroImage).url()}
                width={400}
                height={400}
                alt={item.mainText ?? "Hero image"}
                className="rounded-full border-4 border-tertiary object-cover lg:mt-0
                           w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
