import Link from "next/link";

type Props = {
  posts: any[];
};
const Posts = ({ posts }: Props) => {
  return (
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
