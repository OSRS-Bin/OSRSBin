import type { Metadata } from "next";
import "./app.css";
import { appName } from "@/lib/constants";
import Header from "./components/Header";
import Footer from "./components/Footer";
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const runescapeFont = localFont({
  src: './fonts/RuneScape-UF.woff2',
  display: 'swap',
  weight: 'normal',
  style: 'normal',
  variable: '--font-runescape',
})

export const metadata: Metadata = {
  title: appName,
  description: "OSRS Tile Packs for RuneLite...fill this in more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${runescapeFont.variable}`}>
      <body>
        <Header />
        <main className="container mx-auto p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
