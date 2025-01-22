"use client";
import Image from "next/image";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { NavbarTypes, SocialMedia, NavLinks } from "@/types";
import { urlFor } from "@/sanity/sanity.query";
import { motion } from "framer-motion";

function Navbar({ navbar }: { navbar: NavbarTypes[] }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <div className=" sticky top-5 z-50">
      <div
        className={clsx(
          "container  flex items-start justify-between  text-white rounded-full  p-4 px-10 transition-all",
          {
            "bg-transparent backdrop-blur-md": isScrolled,
            "bg-transparent": !isScrolled,
          }
        )}
      >
        {navbar.map((item) => (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            key={item._id}
            className="flex w-full justify-between sticky"
          >
            <div className="flex flex-col items-start space-y-4">
              <h1 className="text-xl font-bold">{item.mainTitle}</h1>

              <div className="flex space-x-4 items-center">
                {item.socialMedia.map((social: SocialMedia) => (
                  <a
                    key={social._key}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative pb-1 hover:text-tertiary cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-tertiary before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-tertiary after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                  >
                    <Image
                      src={urlFor(social.icon).url()}
                      width={30}
                      height={30}
                      alt={social.platform}
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-8">
              {item.links.map((link: NavLinks) => (
                <div
                  key={link._key}
                  className="relative hover:text-tertiary cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-tertiary before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-tertiary after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                >
                  <a className="font-bold " href={link.slug.current}>
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
