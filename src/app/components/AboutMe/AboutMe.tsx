"use client";

import { AboutMeTypes } from "@/types";
import Laptop3dModel from "../Canvas/Laptop";
import ComponentText from "../ComponentText/ComponentText";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      <div className="container flex flex-col lg:flex-row justify-between max-w-[1000px] 2xl:max-w-[1500px] gap-4">
        <div className="flex-1">
          {about.map((aboutItem) => (
            <ComponentText key={aboutItem._id} textData={aboutItem.aboutText} />
          ))}
        </div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          ref={ref}
          className="flex items-center justify-center h-[280px]"
        >
          <Laptop3dModel />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
