import type { Metadata } from "next";
import { Gentium_Book_Plus } from "next/font/google";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import "./globals.css";

const gentium = Gentium_Book_Plus({
  variable: "--font-gentium",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gentium.variable}`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
