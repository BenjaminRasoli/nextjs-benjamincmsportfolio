"use client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { NavbarTypes, SocialMedia, NavLinks } from "@/types";
import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);

const urlFor = (source: string) => {
  return builder.image(source);
};

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
  console.log(navbar);

  return (
    <div
      className={clsx(
        "flex items-start justify-between  sticky top-5 z-50 text-secondary rounded-full  p-4 px-10 transition-all",
        {
          "bg-transparent backdrop-blur-md": isScrolled,
          "bg-transparent": !isScrolled,
        }
      )}
    >
      {navbar.map((item) => (
        <div key={item._id} className="flex w-full justify-between sticky">
          <div className="flex flex-col items-start space-y-4">
            <h1 className="text-xl font-bold">{item.mainTitle}</h1>

            <div className="flex space-x-4 items-center">
              {item.socialMedia.map((social: SocialMedia) => (
                <a
                  key={social._key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={urlFor(social.icon).url()}
                    width={30}
                    height={30}
                    alt={social.platform}
                    className="hover:filter hover:brightness-100 hover:invert transition-all"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-8">
            {item.links.map((link: NavLinks) => (
              <div
                key={link._key}
                className="relative hover:text-fourth cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-fourth before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-fourth after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
              >
                <a className="font-bold " href={link.slug.current}>
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
