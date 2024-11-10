import "./globals.css";
import {Providers} from "./providers";
import type { Metadata } from "next";
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
      <body className="">
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
