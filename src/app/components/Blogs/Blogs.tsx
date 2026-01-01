"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/sanity.query";
import ComponentText from "../ComponentText/ComponentText";
import Link from "next/link";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { BlogsText, BlogType } from "@/types";

function flattenText(blocks: PortableTextBlock[] | undefined): string {
  if (!blocks) return "";
  let text = "";
  blocks.forEach((block) => {
    if (block._type === "block" && block.children) {
      block.children.forEach((child) => {
        if (child._type === "span" && child.text) {
          text += child.text + " ";
        }
      });
    }
  });
  return text.trim();
}

function Blog({
  blogData,
  blogTextData,
}: {
  blogData: BlogType[];
  blogTextData: BlogsText[];
}) {
  return (
    <div className="bg-gradient-to-b from-black via-secondary outerContainer py-16">
      <div className="container mx-auto px-4">
        {blogTextData?.map((text: BlogsText) => (
          <ComponentText key={text._id} textData={text.blogText} />
        ))}

        <div className="grid grid-cols-1 custom-sm:grid-cols-2 custom-lg-1:grid-cols-3 lg:grid-cols-3 gap-8">
          {blogData?.map((blog: BlogType) => {
            const slug = blog.slug.current
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "");

            const fullText = flattenText(blog.description);
            const truncatedText =
              fullText.length > 100 ? fullText.slice(0, 100) + "..." : fullText;

            const truncatedBlock = [
              {
                _type: "block",
                _key: "truncated",
                style: "normal",
                children: [
                  { _type: "span", _key: "span1", text: truncatedText },
                ],
              },
            ];

            return (
              <Link key={blog._id} href={`/blog/${slug}`}>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-b from-black via-secondary cursor-pointer rounded-2xl overflow-hidden border border-white"
                >
                  {blog.blogImage && (
                    <div className="w-full h-48 relative">
                      <Image
                        src={urlFor(blog.blogImage).url()}
                        alt={blog.blogName}
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}

                  <div className="p-4 flex flex-col">
                    <span className="self-start text-sm text-tertiary bg-tertiary/20 px-2 py-1 rounded">
                      {blog.tag}
                    </span>

                      <h1 className="text-2xl py-2 line-clamp-2 h-[78px] font-semibold text-tertiary transition-opacity duration-300 group-hover:opacity-50">
                        {blog.blogName}
                      </h1>

                    <p className="text-xs text-white py-2">
                      {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>

                    <div className="text-white text-sm break-words min-h-[60px]">
                      <PortableText value={truncatedBlock} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
