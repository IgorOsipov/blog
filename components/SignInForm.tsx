"use client";
import GoogleButton from "./GoogleButton";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import type { FormEventHandler } from "react";

const SignInFrom = () => {
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res && !res.error) {
      router.push("/profile");
    } else {
      console.log(res);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-gray-600 mt-20 my-auto p-10 rounded"
    >
      <input
        className="mb-5 w-full placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-400 rounded py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="email"
        name="email"
      />
      <input
        className="mb-10 w-full placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-400 rounded py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="password"
        name="password"
      />
      <div className="flex justify-center">
        <button
          className="block rounded shadow-lg shadow-slate-400 bg-blue-500 text-white py-2 px-5 mr-5"
          type="submit"
        >
          Sign In
        </button>
        <GoogleButton />
      </div>
    </form>
  );
};

export default SignInFrom;
