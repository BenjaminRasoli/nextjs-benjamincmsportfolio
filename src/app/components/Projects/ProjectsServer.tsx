import { getProjects, getProjectText } from "@/sanity/sanity.query";
import Projects from "./Projects";

export default async function ProjectServer() {
  const projectData = await getProjects();
  const projectTextData = await getProjectText();

  return (
    <Projects projectData={projectData} projectTextData={projectTextData} />
  );
}
