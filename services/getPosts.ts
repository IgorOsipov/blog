export const getAllPosts = async () => {
  //const res = await fetch("/api/posts");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) throw new Error("Server error");

  return res.json();
};

export async function getPostById(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  console.log(res);

  if (!res.ok) throw new Error("Server error");

  return res.json();
}

export const getPostsBySearch = async (search: string) => {
  //const res = await fetch(`/api/posts?search=${search}`);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );

  if (!res.ok) throw new Error("Server error");

  return res.json();
};
