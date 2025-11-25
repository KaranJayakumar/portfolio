import type { Metadata } from "next";
import { Roboto} from "next/font/google";
import "./globals.css";
import { PortfolioLayout } from "./_components/layout/PortfolioLayout";

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
    <html lang="en" className='h-full'>
      <body
        className={`${font.className} flex-col antialiased justify-center items-center h-full`}
      >
        <PortfolioLayout>
          {children}
        </PortfolioLayout>
      </body>
    </html>
  );
}
