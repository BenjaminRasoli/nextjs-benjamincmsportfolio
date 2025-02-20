import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => {
  return builder.image(source);
};

const NAVBAR_QUERY = `*[_type == "navbar"]`;
const HERO_QUERY = `*[_type == "hero"]`;
const ABOUT_ME_QUERY = `*[_type == "aboutMe"]`;
const PROJECTS_QUERY = `*[_type == "projects"] | order(position asc)`;
const PROJECTS_TEXT_QUERY = `*[_type == "projectsText"]`;
const WORK_TEXT_QUERY = `*[_type == "workText"]`;
const WORK_QUERY = `*[_type == "work"] | order(position asc)`;
const CONTAT_QUERY = `*[_type == "contact"]`;
const FOOTER_QUERY = `*[_type == "footer"]`;

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

export async function getProjects() {
  return client.fetch(PROJECTS_QUERY, {}, options);
}

export async function getProjectText() {
  return client.fetch(PROJECTS_TEXT_QUERY, {}, options);
}

export async function getWorkText() {
  return client.fetch(WORK_TEXT_QUERY, {}, options);
}

export async function getWork() {
  return client.fetch(WORK_QUERY, {}, options);
}

export async function getContact() {
  return client.fetch(CONTAT_QUERY, {}, options);
}

export async function getFooter() {
  return client.fetch(FOOTER_QUERY, {}, options);
}
