"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const session = useSession();

  return (
    <nav className="border-b-2 h-full bg-slate-50 shadow-sm shadow-slate-300">
      <div className="container mx-auto flex justify-center items-center h-full">
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={index}
              className={
                isActive
                  ? "pr-3 pl-3 font-bold text-slate-600"
                  : "pr-3 pl-3 font-bold text-slate-400 hover:text-slate-600 hover:underline"
              }
              href={link.href}
            >
              {link.label}
            </Link>
          );
        })}
        {session?.data && (
          <Link
            href="/profile"
            className={
              pathname === "/profile"
                ? "pr-3 pl-3 font-bold text-slate-600"
                : "pr-3 pl-3 font-bold text-slate-400 hover:text-slate-600 hover:underline"
            }
          >
            Profile
          </Link>
        )}
        {session?.data ? (
          <Link
            href="#"
            className="pr-3 pl-3 font-bold text-slate-400 hover:text-slate-600 hover:underline"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Sign Out
          </Link>
        ) : (
          <Link
            href="api/auth/signin"
            className={
              pathname === "api/auth/signin"
                ? "pr-3 pl-3 font-bold text-slate-600"
                : "pr-3 pl-3 font-bold text-slate-400 hover:text-slate-600 hover:underline"
            }
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export { Navigation };
