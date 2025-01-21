import { getHero } from "@/sanity/sanity.query";
import Hero from "./Hero";

export default async function HeroServer() {
  const heroData = await getHero();

  return <Hero hero={heroData} />;
}
