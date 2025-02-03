"use client";
import { urlFor } from "@/sanity/sanity.query";
import { ProjectsText, ProjectsType } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ComponentText from "../ComponentText/ComponentText";

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
    <div
      id="project"
      className="bg-gradient-to-b from-secondary via-black pt-16 pb-16 scroll-m-20 px-5"
    >
      <div className="container max-w-[1000px] 2xl:max-w-[1500px]">
        {projectTextData.map((text) => (
          <ComponentText key={text._id} textData={text.projectText} />
        ))}
        <div className="relative flex flex-row flex-wrap justify-center lg:justify-between items-center gap-10">
          {projectData.map((project: ProjectsType) => (
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              className="group relative w-[400px] h-[350px] flex justify-center items-center flex-col overflow-hidden"
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
                <div className="flex flex-col lg:flex-row gap-5 pt-3 justify-center">
                  {project.projectLinks.map((link) => (
                    <a
                      key={link._key}
                      href={link.projectLink.current}
                      target="_blank"
                      className="relative flex justify-center items-center px-4 py-2 text-white border-2 border-white rounded overflow-hidden transition-all duration-300 group/button"
                    >
                      <span className="absolute inset-0 w-0 bg-white group-hover/button:w-full transition-all duration-300 ease-in-out"></span>

                      <div className="relative z-10 flex flex-row items-center group-hover/button:text-black transition-all duration-300">
                        <Image
                          src={urlFor(link.linkImage).url()}
                          width={20}
                          height={20}
                          alt={project.projectName}
                          className="transition-all duration-300 group-hover/button:brightness-0 group-hover/button:saturate-100"
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
