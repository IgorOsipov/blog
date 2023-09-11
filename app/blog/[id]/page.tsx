import { Metadata } from "next";
import { getAllPosts, getPostById } from "@/services/getPosts";

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const posts: any[] = await getAllPosts();

  return posts.map((post) => ({ slug: post.id.toString() }));
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const { title } = await getPostById(id);
  return {
    title: `${title} | My Blog`,
  };
}

const Post = async ({ params: { id } }: Props) => {
  const post = await getPostById(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

export default Post;
