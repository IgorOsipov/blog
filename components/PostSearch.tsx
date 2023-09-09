"use client";

import { usePosts } from "@/store";
import { FormEventHandler, useState } from "react";

const PostSearch = () => {
  const [search, setSearch] = useState("");
  const getPostsBySearch = usePosts((state) => state.getPostsBySearch);
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    await getPostsBySearch(search);
  };
  return (
    <form onSubmit={handleSubmit} className="flex mt-3">
      <input
        className="w-2/6 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-400 rounded-l py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="search"
        placeholder="Search By Post Title"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button
        className="rounded-r bg-blue-500 text-white py-1 px-3"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export { PostSearch };
