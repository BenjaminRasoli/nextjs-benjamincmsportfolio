"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { overViewText } from "@/types";

function ComponentText({ textData }: { textData: overViewText }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  return (
    <div>
      <div className="max-w-3xl pb-6">
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-p text-white"
        >
          {textData.smallText}
        </motion.p>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-h1 text-tertiary pb-6"
          ref={ref}
        >
          {textData.bigText}
        </motion.h1>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-white pb-10"
        >
          {textData.longText}
        </motion.p>
      </div>
    </div>
  );
}

export default ComponentText;
