import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import GymItemsProvider from "@/context/GymItemsContext";
import "./globals.css";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable}`}
    >
      <body className="min-h-screen bg-[#0d0f10] text-white">
        <GymItemsProvider>
          <Navbar />
          {children}
          <Footer />

          <ToastContainer position="bottom-right" theme="dark" />
        </GymItemsProvider>
      </body>
    </html>
  );
}
