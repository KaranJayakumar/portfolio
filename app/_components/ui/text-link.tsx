import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/app/lib/utils";

interface TextLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function TextLink({ href, children, className }: TextLinkProps) {
  const external = href.startsWith("http");

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn("underline decoration-1 underline-offset-4 hover:text-gray-600", className)}
    >
      {children}
    </Link>
  );
}
