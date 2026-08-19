import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomScrollbar from "@/components/layout/CustomScrollbar";
import BackToTop from "@/components/layout/BackToTop";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Redox Theme",
  description: "Wordpress Redox Theme in Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <CustomScrollbar />
        <BackToTop />

        {children}
      </body>
    </html>
  );
}