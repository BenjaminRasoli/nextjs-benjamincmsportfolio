"use client";
import { motion, useScroll } from "framer-motion";
import React from "react";

function TopBar() {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          zIndex: 20,
          backgroundColor: "#4F46E5",
        }}
      />
    </div>
  );
}

export default TopBar;
