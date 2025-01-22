import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => {
  return builder.image(source);
};

const NAVBAR_QUERY = `*[_type == "navbar"]`;
const HERO_QUERY = `*[_type == "hero"]`;
const ABOUT_ME_QUERY = `*[_type == "aboutMe"]`;

const options = { next: { revalidate: 30 } };

export async function getNavbar() {
  return client.fetch(NAVBAR_QUERY, {}, options);
}

export async function getHero() {
  return client.fetch(HERO_QUERY, {}, options);
}

export async function getAboutMe() {
  return client.fetch(ABOUT_ME_QUERY, {}, options);
}
