"use client";
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
  return (
    <nav className="border-b-2 bg-slate-50 h-10 shadow-sm shadow-slate-300">
      <div className="container mx-auto flex items-center h-full">
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={index}
              className={
                isActive
                  ? "active mr-2 font-bold text-slate-600"
                  : "mr-2 font-bold text-slate-400 hover:text-slate-600 hover:underline"
              }
              href={link.href}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export { Navigation };
