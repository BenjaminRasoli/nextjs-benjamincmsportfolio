import AboutServer from "./components/AboutMe/AboutMeServer";
import HeroServer from "./components/Hero/HeroServer";
import ProjectServer from "./components/Projects/ProjectsServer";
import Work from "./components/Work/Work";
import WorkTextServer from "./components/Work/WorkServer";

function Page() {
  return (
    <main>
      <HeroServer />
      <AboutServer />
      <ProjectServer />
      <WorkTextServer />
    </main>
  );
}

export default Page;
