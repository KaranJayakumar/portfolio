import type { Metadata } from "next";
import { Roboto, Public_Sans } from "next/font/google";
import "./globals.css";
import { MainLayout } from "./_components/layout/MainLayout";
import { cn } from "@/app/lib/utils";
import { PostHogProvider } from "./hooks/PosthogProvider"

const font = Roboto({
  weight : "400",
});


export const metadata: Metadata = {
  title: "Karan Jaykumar",
  description: "Karan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full")}>
      <body
        className={`${font.className} flex-col antialiased justify-center items-center h-full`}
      >
        <PostHogProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </PostHogProvider>
      </body>
    </html>
  );
}
