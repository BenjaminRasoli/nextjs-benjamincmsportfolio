import { getNavbar } from "@/sanity/sanity.query";
import Navbar from "./Navbar";

export default async function NavbarServer() {
  const navbarData = await getNavbar();

  return <Navbar navbar={navbarData} />;
}
