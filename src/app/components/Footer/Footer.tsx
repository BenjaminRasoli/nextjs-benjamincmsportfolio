"use client";
import { FooterTypes } from "@/types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoMdHeart } from "react-icons/io";

export default function Footer({ footerData }: { footerData: any }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 1 }}
      ref={ref}
      className="bg-black text-white"
    >
      <div className="container mx-auto">
        <div className="pt-6">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          <div className="text-center">
            <div className="text-sm text-gray-400">
              {footerData.map((text: FooterTypes) => (
                <div
                  key={text._id}
                  className="flex items-center py-8 gap-2 justify-center"
                >
                  {text.developedWith}
                  <IoMdHeart className="text-red-500 animate-bounce" />
                  {text.byText}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
