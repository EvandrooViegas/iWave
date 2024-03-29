import "./globals.css";
import "./index.css";


import type { Metadata } from "next";
import { MuseoModerno } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Providers from "./Providers";


const museo = MuseoModerno({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "iWave Outlet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${museo.className} `}>
        <div className="min-h-screen flex flex-col justify-between mx-auto">
        <Providers>
        <Navbar />
          {children}
          <Footer />
        </Providers>
        </div>
      </body>
    </html>
  );
}
