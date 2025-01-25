import { getFooter } from "@/sanity/sanity.query";
import Footer from "./Footer";

export default async function FooterServer() {
  const footerData = await getFooter();
  return <Footer footerData={footerData} />;
}
