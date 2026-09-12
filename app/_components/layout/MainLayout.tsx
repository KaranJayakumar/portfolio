"use client";

import { ReactNode, ViewTransition } from 'react';
import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';
interface LayoutProps{
  children : ReactNode
}
export const MainLayout = ({ children } : LayoutProps) => {
  return (
    <div className="w-full items-center justify-center px-6 py-16">
      <Header/>
        <div className="flex min-h-svh w-full items-center justify-center">
          <ViewTransition>
            {children}
          </ViewTransition>
        </div>
      <Footer/>
    </div>
  )
}
