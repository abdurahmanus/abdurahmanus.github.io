import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ViewTransitions, Link } from "next-view-transitions";
import { Navigation } from "@/components/Navigation";
import "./globals.css";
import { MediaLinks } from "@/components/MediaLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "abdurahmanus.github.io",
  description: "Generated by create next app",
};

const mainLinks = [
  {
    href: "/articles",
    label: "Articles",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ViewTransitions>
          <div className="p-4">
            <header className="flex gap-4 items-center justify-around mb-24">
              <h1 className="text-2xl font-bold">
                <Link href="/">Dmitrii Gladkikh</Link>
              </h1>
              <Navigation links={mainLinks} />
              <MediaLinks />
            </header>
            <main>{children}</main>
          </div>
        </ViewTransitions>
      </body>
    </html>
  );
}
