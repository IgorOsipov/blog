import { Footer } from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Header } from "@/components/Header";
import { Providers } from "@/components/Providers";

const mainFont = Roboto({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "My Blog",
  description: "Generated by next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <Providers>
          <div
            className="grid"
            style={{ gridTemplateRows: "1fr 20fr 1fr", height: "100vh" }}
          >
            <Header />
            <main className="py-3 overflow-x-auto">
              <div className="container mx-auto px-5">{children}</div>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
