import axios from "axios";

const API_URL = process.env.STRAPI_API_URL || "http://localhost:1337/api";

export const fetchBlogs = async () => {
  const response = await axios.get(`${API_URL}/blogs?populate=*`);
  return response.data;
};

export const fetchBlogBySlug = async (slug) => {
  const response = await axios.get(
    `${API_URL}/blogs?filters[Slug][$eq]=${slug}&populate=*`
  );
  return response.data;
};
