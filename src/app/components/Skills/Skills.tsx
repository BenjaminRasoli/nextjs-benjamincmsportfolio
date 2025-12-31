"use client";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/sanity.query";
import Image from "next/image";
import ComponentText from "../ComponentText/ComponentText";
import { SkillsTextTypes, SkillsTypes } from "@/types";

function Skills({
  skillsData,
  skillsTextData,
}: {
  skillsData: SkillsTypes[];
  skillsTextData: SkillsTextTypes[];
}) {
  const mid = Math.ceil(skillsData.length / 2);
  const rowOne = skillsData.slice(0, mid);
  const rowTwo = skillsData.slice(mid);

  return (
    <div
      id="skills"
      className="bg-gradient-to-b from-secondary via-black pt-16 pb-16 scroll-m-20 px-5"
    >
      <div className="container max-w-[1000px] 2xl:max-w-[1500px]">
        {skillsTextData?.map((text) => (
          <ComponentText key={text._id} textData={text.skillText} />
        ))}

        <div className="space-y-14">
          <div className="relative overflow-hidden w-full">
            <motion.div
              className="flex gap-8 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...rowOne, ...rowOne].map((skill, i) => (
                <div
                  key={`${skill._id}-${i}`}
                  className="w-[100px] h-[100px] flex items-center justify-center
                             bg-black/40 backdrop-blur rounded-xl
                             border border-white/10"
                >
                  <Image
                    src={urlFor(skill.skillsImage).url()}
                    width={80}
                    height={80}
                    alt="Skill"
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative overflow-hidden w-full">
            <motion.div
              className="flex gap-8 w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...rowTwo, ...rowTwo].map((skill, i) => (
                <div
                  key={`${skill._id}-${i}`}
                  className="w-[100px] h-[100px] flex items-center justify-center
                             bg-black/40 backdrop-blur rounded-xl
                             border border-white/10"
                >
                  <Image
                    src={urlFor(skill.skillsImage).url()}
                    width={80}
                    height={80}
                    alt="Skill"
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
