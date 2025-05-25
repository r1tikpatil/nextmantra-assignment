"use client";

import { useEffect, useState } from "react";
import { fetchBlogs } from "@/lib/api";
import BlogCard from "@/components/blogCard";

export default function HomePage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const response = await fetchBlogs();
        setBlogs(response?.data || []);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogsData();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Blog List</h1>

        {loading ? (
          <p className="text-gray-500">Loading blogs...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : blogs.length > 0 ? (
          <div className="space-y-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No blogs available.</p>
        )}
      </div>
    </main>
  );
}
