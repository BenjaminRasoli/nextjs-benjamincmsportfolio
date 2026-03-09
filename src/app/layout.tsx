import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TopBar from "./components/TopScrollBar/TopBar";
import NavbarServer from "./components/Navbar/NavbarServer";
import FooterServer from "./components/Footer/FooterServer";
import clsx from "clsx";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://benjaminrasoli.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Benjamin | Rasoli",
    template: "%s | Benjamin Rasoli",
  },
  description:
    "Benjamin Rasoli | full-stack developer portfolio showcasing projects, blog posts, and contact info.",
  keywords: [
    "Benjamin Rasoli",
    "portfolio",
    "software engineer",
    "full-stack developer",
    "web developer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Benjamin Rasoli", url: SITE_URL }],
  creator: "Benjamin Rasoli",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/BrLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx("bg-black", inter.variable)}>
        <TopBar />
        <NavbarServer />
        {children}
        <FooterServer />
      </body>
    </html>
  );
}
