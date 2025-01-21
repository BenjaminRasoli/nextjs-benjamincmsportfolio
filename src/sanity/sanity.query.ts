import { client } from "@/sanity/client";

const NAVBAR_QUERY = `*[_type == "navbar"]`;
const options = { next: { revalidate: 30 } };

export async function getNavbar() {
  return client.fetch(NAVBAR_QUERY, {}, options);
}
