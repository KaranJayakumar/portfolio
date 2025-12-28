import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
interface LayoutProps{
  children : ReactNode
}
export const MainLayout = ({ children } : LayoutProps) => {
  return (
    <div className="flex h-full w-full min-w-full py-[50px] lg:px-[17vw] px-[2vw]">
      <div className="w-full">
        <Header/>
          {children}
        <Footer/>
      </div>
    </div>
  )
}

