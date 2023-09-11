import { Navigation } from "./Navigation";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about",
  },
];

const Header = () => {
  return (
    <header className="col-span-1">
      <Navigation navLinks={navItems} />
    </header>
  );
};

export { Header };
