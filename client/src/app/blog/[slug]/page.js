"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchBlogBySlug } from "@/lib/api";

export default function BlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const response = await fetchBlogBySlug(slug);
        if (response) {
          setBlog(response?.data[0]);
        } else {
          setError("Blog not found.");
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to load blog. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) loadBlog();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading blog...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white py-10 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{blog.Title}</h1>
        <p className="text-sm text-gray-600 mb-6">
          By <span className="font-medium">{blog.Author}</span> ·{" "}
          {new Date(blog.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>

        <article className="prose prose-lg max-w-none">
          {typeof blog.Content === "string" ? (
            <div dangerouslySetInnerHTML={{ __html: blog.Content }} />
          ) : (
            blog.Content?.map((block) => {
              if (block.image) {
                return (
                  <div key={block.id} className="my-6">
                    {block.url && (
                      <img
                        src={block.url}
                        alt={block.caption}
                        className="rounded"
                      />
                    )}
                  </div>
                );
              }
              if (
                block.__component === "blog-content.text-block" &&
                block.text
              ) {
                return <p key={block.id}>{block.text}</p>;
              }

              return null;
            })
          )}
        </article>
      </div>
    </main>
  );
}
