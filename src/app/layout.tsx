import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Social SaaS",
  description: "Resize, compress, and optimize your images and videos for every social platform. Upload once, get the perfect size for Instagram, Facebook, and X in seconds.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className="h-screen flex flex-col">{children}</body>
      </ClerkProvider>
    </html>
  );
}
