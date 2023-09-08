import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
}

export const metadata: Metadata = {
  title: "Blog | My Blog",
};

const Blog = async () => {
  const posts = await getData();

  return (
    <>
      <h1>Blog page</h1>
      <ul className="mt-2">
        {posts.map((post: any) => (
          <li className="underline" key={post.id}>
            <Link href={`blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
