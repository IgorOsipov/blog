import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About | My Blog",
  };

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>About Us</h1>
      <ul>
        <li>
          <Link href="/about/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      {children}
    </>
  );
};

export default AboutLayout;
