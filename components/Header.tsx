import Link from "next/link";

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/about",
  },
];

const Header = () => {
  return (
    <header>
      <nav className="border-b-2 bg-slate-50 h-10 shadow-sm shadow-slate-300">
        <div className="container mx-auto flex items-center h-full">
          {pages.map((p, index) => (
            <Link
              key={index}
              className="mr-2 font-bold text-slate-600"
              href={p.href}
            >
              {p.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export { Header };
