"use client";
import { urlFor } from "@/sanity/sanity.query";
import { FooterLinksTitle, FooterTypes, MainTitle, SocialMedia } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer({ footerData }: { footerData: any }) {
  const footer = footerData[0];

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
      className="bg-black text-white pb-8"
    >
      <div className="container max-w-[1000px] 2xl:max-w-[1500px] mx-auto px-4">
        <div className="mb-6">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center mb-4">
            {footer.mainTitle
              .filter((title: MainTitle) => title.footerTitleType === "contact")
              .map((title: MainTitle) => (
                <h3 key={title._key} className="text-lg font-semibold mb-4">
                  {title.footerTitle}
                </h3>
              ))}
            {footer.footerContactTitle.map((contactTitle: any) => (
              <div key={contactTitle._key} className="text-sm mb-2">
                <p>
                  {contactTitle.footerContact}{" "}
                  <a
                    href={`mailto:${contactTitle.footerContactValue}`}
                    className="text-blue-400 hover:underline"
                  >
                    {contactTitle.footerContactValue}
                  </a>
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center mb-4">
            {footer.mainTitle
              .filter((title: MainTitle) => title.footerTitleType === "connect")
              .map((title: MainTitle) => (
                <h3 key={title._key} className="text-lg font-semibold mb-4">
                  {title.footerTitle}
                </h3>
              ))}
            <div className="flex justify-center space-x-4">
              {footer.socialMedia.map((social: SocialMedia) => (
                <a
                  key={social._key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative pb-1 hover:opacity-20 transition-all"
                >
                  <Image
                    src={urlFor(social.icon).url() as string}
                    alt="social icon"
                    width={30}
                    height={30}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center mb-4">
            {footer.mainTitle
              .filter(
                (title: MainTitle) => title.footerTitleType === "quickLinks"
              )
              .map((title: MainTitle) => (
                <h3 key={title._key} className="text-lg font-semibold mb-4">
                  {title.footerTitle}
                </h3>
              ))}
            <ul className="space-y-2">
              {footer.footerLinksTitle.map((footerLink: FooterLinksTitle) => (
                <li key={footerLink._key}>
                  <a
                    href={footerLink.footerLinks.current}
                    className="relative pb-1 hover:text-tertiary cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-tertiary before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-tertiary after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                  >
                    {footerLink.footerLinksText}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 mt-6">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>

        <div className="text-center pt-6 mt-6">
          <div className="text-sm text-gray-400">
            {footerData.map((copyRight: FooterTypes) => (
              <div key={copyRight._id}>
                &copy; {new Date().getFullYear()} {copyRight.copyRightText}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
