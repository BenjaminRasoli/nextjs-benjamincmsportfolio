import { getBlogs, getBlogsText } from "@/sanity/sanity.query";
import Blog from "./Blogs";

export default async function BlogsServer() {
  const blogData = await getBlogs();
  const blogTextData = await getBlogsText();

  return <Blog blogData={blogData} blogTextData={blogTextData} />;
}
