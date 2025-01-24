import { getContact } from "@/sanity/sanity.query";
import Contact from "./Contact";

export default async function ContactServer() {
  const contact = await getContact();
  return <Contact contact={contact} />;
}
