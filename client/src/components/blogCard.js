"use client";

import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <Link
      href={`/blog/${blog.Slug}`}
      className="block p-6 bg-white rounded-2xl shadow hover:shadow-md transition duration-200"
    >
      <h2 className="text-2xl font-semibold text-blue-700 hover:underline mb-1">
        {blog.Title}
      </h2>
      <p className="text-sm text-gray-600">
        By <span className="font-medium">{blog.Author}</span> ·{" "}
        {new Date(blog.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    </Link>
  );
};

export default BlogCard;
