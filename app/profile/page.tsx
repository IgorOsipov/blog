import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth/next";

export default async function Profile() {
  const session = await getServerSession(authConfig);
  return (
    <div>
      <h1 className="text-center">Profile of {session?.user?.name}</h1>
      {session?.user?.image && (
        <img
          className="mx-auto"
          src={session.user.image}
          alt={session?.user?.name || ""}
        />
      )}
    </div>
  );
}
