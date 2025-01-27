"use client";
import Image from "next/image";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { NavbarTypes, SocialMedia, NavLinks } from "@/types";
import { urlFor } from "@/sanity/sanity.query";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";

function Navbar({ navbar }: { navbar: NavbarTypes[] }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleWindowResize = () => {
      setOpen(false);
    };

    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [isOpen]);

  const generateFileUrl = (fileRef: string) => {
    const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
    const dataset = process.env.NEXT_PUBLIC_DATASET;

    if (!fileRef) return null;
    const cleanFileRef = fileRef.replace(/^file-/, "").replace(/-pdf$/, "");
    return `https://cdn.sanity.io/files/${projectId}/${dataset}/${cleanFileRef}.pdf`;
  };

  return (
    <div
      className={clsx("z-20", "sticky", "w-full", {
        "top-0": isOpen,
        "pt-5": isOpen,
        "top-5": !isOpen,
        "px-5": !isOpen,
      })}
    >
      <div
        className={clsx(
          "container max-w-[1100px] 2xl:max-w-[1500px] p-4 flex w-full items-start justify-between text-white rounded-lg transition-all",
          {
            "bg-transparent backdrop-blur-3xl": isScrolled && !isOpen,
            "bg-transparent": !isScrolled || isOpen,
          }
        )}
      >
        {navbar.map((item: NavbarTypes) => (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            key={item._id}
            className="flex w-full justify-between"
          >
            <div className="flex flex-col items-start space-y-4">
              <h1 className="text-xl font-bold text-tertiary">
                {item.mainTitle}
              </h1>

              <div className="flex space-x-4 items-center">
                {item.socialMedia.map((social: SocialMedia) => (
                  <a
                    key={social._key}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative pb-1"
                  >
                    <Image
                      src={urlFor(social.icon).url()}
                      width={30}
                      height={30}
                      alt={social.platform}
                      className="hover:opacity-20 transition-all"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-8">
              {item.links.map((link: NavLinks) => (
                <div
                  key={link._key}
                  className="hidden lg:block relative hover:text-tertiary cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-tertiary before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-tertiary after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                >
                  <a
                    className="font-bold"
                    href={
                      link.slug.current === "/#cv"
                        ? `${generateFileUrl(link.file?.asset?._ref)}?dl=`
                        : link.slug.current
                    }
                    download={
                      link.slug.current === "/#cv" &&
                      `${generateFileUrl(link.file?.asset?._ref)}?dl=`
                    }
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="lg:hidden z-50 flex items-center"
            >
              <Hamburger
                rounded
                label="show menu"
                color={isHovered ? "#4F46E5" : "white"}
                toggled={isOpen}
                toggle={setOpen}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="z-40 p-4 px-10 absolute top-0 w-full h-screen bg-secondary text-white flex flex-col justify-start"
          >
            {navbar.map((item: NavbarTypes) => (
              <div className="pt-5" key={item._id}>
                {item.links.map((link) => (
                  <div className="pb-5" key={link._key}>
                    <a
                      className="font-bold relative hover:text-tertiary cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-tertiary before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-tertiary after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                      href={
                        link.slug.current === "/#cv"
                          ? `${generateFileUrl(link.file?.asset?._ref)}?dl=`
                          : link.slug.current
                      }
                      download={
                        link.slug.current === "/#cv" &&
                        `${generateFileUrl(link.file?.asset?._ref)}?dl=`
                      }
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </div>
                ))}
                <div className="flex space-x-4 pt-5">
                  {item.socialMedia.map((social: SocialMedia) => (
                    <a
                      key={social._key}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pb-1 relative hover:opacity-20"
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
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
