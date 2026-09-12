import { ReactNode } from "react";

interface WorkItemListProps {
  children: ReactNode;
}

export function WorkItemList({ children }: WorkItemListProps) {
  return <div className="flex w-full flex-col gap-3">{children}</div>;
}
