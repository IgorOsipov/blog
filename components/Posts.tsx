"use client";
//import { usePosts } from "@/store";
// import { shallow } from "zustand/shallow";
// import { useEffect } from "react";
import Link from "next/link";
import useSWR from "swr";
import { getAllPosts } from "@/services/getPosts";

const Posts = () => {
  //   const [posts, loading, getAllPosts] = usePosts(
  //     (state) => [state.posts, state.loading, state.getAllPosts],
  //     shallow
  //   );

  //   useEffect(() => {
  //     getAllPosts();
  //   }, []);

  const { data: posts, isLoading: loading } = useSWR("posts", getAllPosts);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <ul className="mt-8 list-disc pl-5">
      {posts.map((post: any) => (
        <li className="underline mb-2" key={post.id}>
          <Link href={`blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { Posts };
