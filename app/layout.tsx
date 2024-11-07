import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components/app";

export const metadata: Metadata = {
  title: "Lucas Sproule",
  description: "Lucas Sproule's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
