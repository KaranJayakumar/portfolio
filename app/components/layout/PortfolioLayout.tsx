import { ReactNode } from 'react';
interface LayoutProps{
  children : ReactNode
}
export const PortfolioLayout = ({ children } : LayoutProps) => {
  return (
    <div className="w-[50vw] justify-self-center justify-center align-center">
      {children}
    </div>
  )
}

