import { motion, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PathDrawingShapes() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
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
          zIndex: 10,
          backgroundColor: "#4F46E5",
        }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 400"
        className="w-full h-auto"
      >
        <motion.circle
          cx="100"
          cy="100"
          r="40"
          stroke="#FFFFFF"
          strokeWidth="5"
          fill="none"
          ref={ref}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M100 40 L140 160 L60 160 Z"
          stroke="#4F46E5"
          strokeWidth="5"
          fill="none"
          transform="translate(0, 120)"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.path
          d="M60 60 L140 140 M140 60 L60 140"
          stroke="#14237d"
          strokeWidth="5"
          fill="none"
          transform="translate(0, 240)"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 2.5,
          }}
        />
      </svg>
    </div>
  );
}
