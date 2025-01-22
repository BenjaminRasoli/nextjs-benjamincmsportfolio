import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import NavbarServer from "./components/Navbar/NavbarServer";
import ScreenReveal from "./components/screenReveal/screenReveal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Benjamin | Rasoli",
  description: "Benjamin Rasoli's personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-tertiary">
        <div className="container">
          <ScreenReveal>
            <NavbarServer />
            {children}
          </ScreenReveal>
        </div>
      </body>
    </html>
  );
}
