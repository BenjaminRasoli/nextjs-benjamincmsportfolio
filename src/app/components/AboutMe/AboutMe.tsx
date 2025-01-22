"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { AboutMeTypes } from "@/types";
import Laptop3dModel from "../Canvas/Laptop";

function AboutMe({ about }: { about: AboutMeTypes[] }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div className="bg-secondary pt-16 pb-16">
      <div className="container">
        {about.map((item) => (
          <motion.div
            key={item._id}
            className="flex flex-col lg:flex-row justify-between items-center"
          >
            <div className="flex-1 max-w-3xl">
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                ref={ref}
                className="text-p text-white"
              >
                {item.mainSmallText}
              </motion.p>
              <motion.h1
                initial={{ x: 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                ref={ref}
                className="text-h1 text-tertiary pb-6"
              >
                {item.mainBigText}
              </motion.h1>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                ref={ref}
                className="text-white "
              >
                {item.aboueMeText}
              </motion.p>
            </div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              ref={ref}
              className="flex items-center justify-center sm:mt-24"
            >
              <div className="h-[500px]">
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
