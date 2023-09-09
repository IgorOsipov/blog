export const getAllPosts = async () => {
  const res = await fetch("/api/posts");

  if (!res.ok) throw new Error("Server error");

  return res.json();
};

export const getPostsBySearch = async (search: string) => {
  const res = await fetch(`/api/posts?search=${search}`);

  if (!res.ok) throw new Error("Server error");

  return res.json();
};
