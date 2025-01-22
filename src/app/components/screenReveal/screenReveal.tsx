"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { body } from "framer-motion/client";

function BlackScreenReveal({ children }: { children: React.ReactNode }) {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (!isRevealed) {
      document.body.style.overflow = "hidden";
    }
    const timer = setTimeout(() => {
      setIsRevealed(true);
      document.body.style.overflow = "";
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {!isRevealed && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-full bg-primary z-50"
        />
      )}

      <div
        className={
          isRevealed
            ? "opacity-100"
            : "opacity-0 transition-opacity duration-500"
        }
      >
        {children}
      </div>
    </div>
  );
}

export default BlackScreenReveal;
