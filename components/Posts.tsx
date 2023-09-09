"use client";
//import { usePosts } from "@/store";
// import { shallow } from "zustand/shallow";
// import { useEffect } from "react";
import Link from "next/link";
import useSWR from "swr";
import { getAllPosts } from "@/api/getPosts";

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
    <ul className="mt-2">
      {posts.map((post: any) => (
        <li className="underline" key={post.id}>
          <Link href={`blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { Posts };
