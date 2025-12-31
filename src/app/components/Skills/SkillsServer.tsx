import { getSkills, getSkillsText } from "@/sanity/sanity.query";
import Skills from "./Skills";

export default async function SkillsServer() {
  const skillsData = await getSkills();
  const skillsTextData = await getSkillsText();

  return <Skills skillsData={skillsData} skillsTextData={skillsTextData} />;
}
