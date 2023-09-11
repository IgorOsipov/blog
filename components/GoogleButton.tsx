"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  return (
    <button
      type="button"
      className="block rounded border border-gray-600 shadow-lg shadow-slate-400  py-2 px-5"
      onClick={() => signIn("google", { callbackUrl })}
    >
      Sign In with Google
    </button>
  );
};

export default GoogleButton;
