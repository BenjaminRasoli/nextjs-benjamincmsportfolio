import { getWork, getWorkText } from "@/sanity/sanity.query";
import Work from "./Work";

export default async function WorkTextServer() {
  const workTextData = await getWorkText();
  const work = await getWork();

  return <Work workText={workTextData} work={work} />;
}
