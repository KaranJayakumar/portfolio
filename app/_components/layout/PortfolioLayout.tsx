import { ReactNode } from 'react';
interface LayoutProps{
  children : ReactNode
}
export const PortfolioLayout = ({ children } : LayoutProps) => {
  return (
    <div className="flex h-full w-full min-w-full py-[50px] pl-[17vw] pr-[17vw]">
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}

