import { ReactNode } from 'react';
interface LayoutProps{
  children : ReactNode
}
export const PortfolioLayout = ({ children } : LayoutProps) => {
  return (
    <div className="flex h-full w-full py-[50px] pl-[25vw] pr-[25vw]">{children}</div>
  )
}

