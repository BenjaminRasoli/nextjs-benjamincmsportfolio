import { getAboutMe } from "@/sanity/sanity.query";
import AboutMe from "./AboutMe";

export default async function AboutServer() {
  const aboutMe = await getAboutMe();

  return <AboutMe about={aboutMe} />;
}
