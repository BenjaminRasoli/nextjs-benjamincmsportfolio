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
export const metadata: Metadata = {
  title: "Benjamin | Rasoli",
  description: "Benjamin Rasoli's personal Portfolio",
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
