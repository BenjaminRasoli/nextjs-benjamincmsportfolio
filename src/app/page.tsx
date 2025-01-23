import AboutServer from "./components/AboutMe/AboutMeServer";
import HeroServer from "./components/Hero/HeroServer";
import ProjectServer from "./components/Projects/ProjectsServer";

function Page() {
  return (
    <main>
      <HeroServer />
      <AboutServer />
      <ProjectServer />
    </main>
  );
}

export default Page;
