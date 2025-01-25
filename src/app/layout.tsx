import type { Metadata } from "next";
import "./globals.css";
import NavbarServer from "./components/Navbar/NavbarServer";
import ScreenReveal from "./components/screenReveal/screenReveal";
import FooterServer from "./components/Footer/FooterServer";

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
      <body className="bg-black">
        <ScreenReveal>
          <NavbarServer />
          {children}
          <FooterServer />
        </ScreenReveal>
      </body>
    </html>
  );
}
