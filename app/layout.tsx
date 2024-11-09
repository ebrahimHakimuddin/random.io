import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/navbar/navbar";

export const metadata: Metadata = {
  title: "random.io",
  description: "A Collection Of Randomizers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
