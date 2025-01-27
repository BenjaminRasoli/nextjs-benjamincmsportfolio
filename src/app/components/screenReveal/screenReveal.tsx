"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
function BlackScreenReveal({ children }: { children: React.ReactNode }) {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!isRevealed) {
      document.body.style.overflow = "hidden";
    }
    const timer = setTimeout(() => {
      setIsRevealed(true);
      document.body.style.overflow = "";
    }, 1000);

    return () => clearTimeout(timer);
  }, [isRevealed]);

  return (
    <div className="relative">
      {!isRevealed && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black to-secondary z-50"
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
