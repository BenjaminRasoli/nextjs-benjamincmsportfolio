"use client";
import { ButtonText, HeroTypes } from "@/types";
import React from "react";
import { urlFor } from "@/sanity/sanity.query";
import Image from "next/image";
import { motion } from "framer-motion";

function Hero({ hero }: { hero: HeroTypes[] }) {
  return (
    <div className="relative w-full h-full py-24 flex flex-col justify-center items-center text-white px-4">
      {hero.map((item) => (
        <div key={item._id} className="text-center bg-transparent rounded-xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="w-72 relative mx-auto mb-8"
          >
            <Image
              src={urlFor(item.heroImage).url()}
              width={300}
              height={400}
              alt={item.heroImage}
              className="object-cover w-full h-full rounded-full"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-7xl font-extrabold text-center mb-6 leading-snug"
          >
            {item.mainText}
          </motion.h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex justify-center space-x-4 mt-4"
          >
            {item.buttonText.map((buttonText: ButtonText) => (
              <a
                key={buttonText._key}
                href={buttonText.slug.current}
                className="relative px-8 py-3 text-lg font-medium text-secondary border-2 border-secondary rounded-none overflow-hidden transition-all duration-300 group"
              >
                <span className="absolute inset-0 w-full h-full group-hover:bg-transparent transition-all duration-300" />
                <span className="relative z-10 group-hover:text-fourth transition-all duration-300">
                  {buttonText.label}
                </span>
                <span className="absolute inset-0 w-0 bg-secondary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Hero;
