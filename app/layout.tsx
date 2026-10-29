import type { Metadata } from "next";
import { Geist, Geist_Mono, Merienda, Unbounded } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import ScrollReveal from "./Components/ScrollReveal/ScrollReveal";
import Footer from "./Components/Footer/Footer";

const unbounded = Unbounded({
  variable: "--font-Unbounded",
  subsets: ["latin"],
  display: "swap",
});

const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bright Anchor",
  description: "Bright Anchor LLC — a safe, welcoming sober living home for men and women. Stability with optimism: structure, peer support and comfortable surroundings while life gets steady again.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} ${merienda.variable}`}
      >
        <ScrollReveal />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
