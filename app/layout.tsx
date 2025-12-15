import type { Metadata } from "next";
import { Roboto, Public_Sans } from "next/font/google";
import "./globals.css";
import { MainLayout } from "./_components/layout/MainLayout";
import { cn } from "@/lib/utils";

const publicSans = Public_Sans({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("h-full", publicSans.variable)}>
      <body
        className={`${font.className} flex-col antialiased justify-center items-center h-full`}
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
