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
      className={cn(
        "inline-flex rounded-sm px-1 py-0.5 leading-none underline decoration-1 underline-offset-4 transition-colors hover:bg-[#D7E2E9] focus-visible:outline-2 focus-visible:outline-offset-2",
        className,
      )}
    >
      {children}
    </Link>
  );
}
