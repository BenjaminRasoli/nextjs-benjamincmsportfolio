import NotFound from "@/app/not-found";
import { getBlogs, urlFor } from "@/sanity/sanity.query";
import { BlogsType, BlogType } from "@/types";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const allBlogs = await getBlogs();

  const blog: BlogsType = allBlogs.find((b: BlogType) => {
    const slug = b.slug.current
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
    return slug === resolvedParams.slug;
  });

  if (!blog) {
    return <NotFound />;
  }

  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-3xl font-bold my-4">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-semibold my-3">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl font-semibold my-2">{children}</h3>
      ),
      normal: ({ children }) => <p className="my-2">{children}</p>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-gray-500 pl-4 italic my-4 text-gray-300">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc ml-6 my-2">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal ml-6 my-2">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className="my-1">{children}</li>,
      number: ({ children }) => <li className="my-1">{children}</li>,
    },
    marks: {
      strong: ({ children }) => (
        <strong className="font-bold">{children}</strong>
      ),
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => (
        <code className="bg-gray-800 text-yellow-300 px-1 rounded">
          {children}
        </code>
      ),
      link: ({ children, value }) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          {children}
        </a>
      ),
    },
    types: {
      image: ({ value, isInline }) => {
        if (!value?.asset?._ref) return null;
        const width = isInline ? 100 : 800;
        return (
          <div className="my-4">
            <Image
              src={urlFor(value).url() as string}
              alt={value.alt || " "}
              width={width}
              height={Math.floor((width * 9) / 16)}
              className="rounded-lg"
              loading="lazy"
            />
          </div>
        );
      },
    },
  };

  return (
    <div className="w-full text-white -mt-[140px]">
      {blog.blogImage && (
        <section className="relative w-full min-h-[70dvh] overflow-hidden">
          <Image
            src={urlFor(blog.blogImage).url() as string}
            alt=""
            fill
            priority
            className="object-cover object-center blur-sm"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/100 z-10" />

          <div className="relative z-[11] h-full flex flex-col">
            <div className="pt-32 text-center px-6">
              <h1 className="text-4xl md:text-6xl md:!leading-[70px] font-bold max-w-[1000px] mx-auto mb-4 pt-8">
                {blog.blogName}
              </h1>

              <p className="text-ms text-gray-300 mb-3">
                {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>

              <span className="inline-block text-xs uppercase tracking-widest bg-white/10 rounded-md backdrop-blur-sm px-4 py-1 mb-[60px]">
                {blog.tag}
              </span>
            </div>

            <div className="relative w-full max-w-[800px] mx-auto pb-16 px-5">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={urlFor(blog.blogImage).url() as string}
                  alt={blog.blogName}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="max-w-[800px] mx-auto px-5">
        <div className="prose prose-invert max-w-full pb-8">
          <PortableText value={blog.description} components={components} />
        </div>
      </div>
    </div>
  );
}
