import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanger | Fantasy Sports & Web App Developer",
  description:
    "Custom fantasy sports platforms, live leaderboards, and full-stack web apps. Real-time scoring built to handle game day.",
  metadataBase: new URL("https://sanger-portfolio.vercel.app"),
  openGraph: {
    title: "Sanger | Fantasy Sports & Web App Developer",
    description:
      "Custom fantasy sports platforms, live leaderboards, and full-stack web apps. Real-time scoring built to handle game day.",
    url: "https://sanger-portfolio.vercel.app",
    siteName: "Sanger",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanger | Fantasy Sports & Web App Developer",
    description:
      "Custom fantasy sports platforms, live leaderboards, and full-stack web apps. Real-time scoring built to handle game day.",
    creator: "@BSanger274",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
