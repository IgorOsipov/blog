"use client";
import { getAllPosts } from "@/api/getPosts";
import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { Metadata } from "next";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "Blog | My Blog",
};

const Blog = async () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <h1>Blog page</h1>
          <PostSearch onSearch={setPosts} />
          <Posts posts={posts} />
        </>
      )}
    </>
  );
};

export default Blog;
