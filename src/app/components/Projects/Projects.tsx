"use client";
import { urlFor } from "@/sanity/sanity.query";
import { ProjectsText, ProjectsType } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projects({
  projectData,
  projectTextData,
}: {
  projectData: ProjectsType[];
  projectTextData: ProjectsText[];
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div id="project" className="bg-black pt-20 pb-20 scroll-m-20">
      <div className="container">
        {projectTextData.map((text) => (
          <div className="max-w-3xl pb-10" key={text._id}>
            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-p text-white"
            >
              {text.projectText.smallText}
            </motion.p>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              ref={ref}
              className="text-h1 text-tertiary pb-6"
            >
              {text.projectText.bigText}
            </motion.h1>
            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-p text-white"
            >
              {text.projectText.longText}
            </motion.p>
          </div>
        ))}
        <div className="relative flex flex-row flex-wrap justify-center lg:justify-between items-center gap-10">
          {projectData.map((project: ProjectsType) => (
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              className="group relative w-[420px] h-[350px] flex justify-center items-center flex-col overflow-hidden"
              key={project._id}
            >
              <Image
                src={urlFor(project.image).url()}
                width={400}
                height={100}
                alt={project.projectName}
                className="rounded-xl w-full h-full object-cover brightness-[20%] lg:brightness-100  lg:group-hover:brightness-[30%] transition-all duration-300 ease-in-out"
              />

              <div className="absolute inset-0 z-10 transform lg:translate-y-[100%] translate-y-0 lg:group-hover:translate-y-0 transition-transform duration-500 ease-in-out text-center flex flex-col justify-center items-center">
                <h1 className="text-h1 text-white z-10 truncate max-w-[400px] h-[50px]">
                  {project.projectName}
                </h1>
                <div className="flex flex-row gap-5 pt-3 justify-center">
                  {project.projectLinks.map((link) => (
                    <a
                      key={link._key}
                      href={link.projectLink.current}
                      className="relative inline-block px-4 py-2 text-white border-2 border-white rounded overflow-hidden transition-all duration-300 group/button"
                    >
                      <span className="absolute inset-0 w-0 bg-white lg:group-hover/button:w-full transition-all duration-300 ease-in-out"></span>

                      <div className="relative z-10 flex flex-row items-center lg:group-hover/button:text-black transition-all duration-300">
                        <Image
                          src={urlFor(link.linkImage).url()}
                          width={20}
                          height={20}
                          alt={project.projectName}
                          className="transition-all duration-300 lg:group-hover/button:brightness-0 lg:group-hover/button:saturate-100"
                        />
                        <p className="ml-2">{link.label}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
