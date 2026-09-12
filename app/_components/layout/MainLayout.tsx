"use client";

import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
interface LayoutProps{
  children : ReactNode
}
export const MainLayout = ({ children } : LayoutProps) => {
  return (
    <main className="flex min-h-svh w-full items-center justify-center px-6 py-16">
      <div className="w-full">
        <Header/>
          {children}
        <Footer/>
      </div>
    </main>
  )
}
