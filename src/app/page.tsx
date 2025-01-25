import AboutServer from "./components/AboutMe/AboutMeServer";
import ContactServer from "./components/Contact/ContactServer";
import HeroServer from "./components/Hero/HeroServer";
import ProjectServer from "./components/Projects/ProjectsServer";
import WorkTextServer from "./components/Work/WorkServer";

function Page() {
  return (
    <main>
      <HeroServer />
      <AboutServer />
      <ProjectServer />
      <WorkTextServer />
      <ContactServer />
    </main>
  );
}

export default Page;
