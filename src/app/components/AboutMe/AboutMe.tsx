"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { AboutMeTypes } from "@/types";
import Laptop3dModel from "../Canvas/Laptop";

function AboutMe({ about }: { about: AboutMeTypes[] }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  return (
    <div
      id="about"
      className="bg-gradient-to-b from-black to-secondary pt-16 pb-16 scroll-m-20 px-5"
    >
      <div className="container max-w-[1000px] 2xl:max-w-[1500px]">
        {about.map((aboutText) => (
          <motion.div
            key={aboutText._id}
            className="flex flex-col  lg:flex-row justify-between items-center"
          >
            <div className="flex-1 max-w-3xl">
              <motion.p
                initial={{ y: -50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="text-p text-white"
              >
                {aboutText.aboutText.smallText}
              </motion.p>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="text-h1 text-tertiary pb-6"
              >
                {aboutText.aboutText.bigText}
              </motion.h1>
              <motion.p
                initial={{ y: -50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                ref={ref}
                className="text-white pb-10"
              >
                {aboutText.aboutText.longText}
              </motion.p>
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="flex items-center justify-center mt-24 h-[280px]"
            >
              <div className="h-[500px] w-full">
                <Laptop3dModel />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
