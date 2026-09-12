import { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/app/lib/utils";

interface CompanyLinkProps {
  name: string;
  href: string;
  logoSrc: string;
  color: string;
  backgroundColor: string;
  className?: string;
}

export function CompanyLink({
  name,
  href,
  logoSrc,
  color,
  backgroundColor,
  className,
}: CompanyLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "ml-[0.08em] inline-flex items-center gap-[0.28em] whitespace-nowrap rounded-full border px-[0.38em] py-[0.16em] align-[0.06em] font-semibold leading-none tracking-normal transition-[filter] hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2",
        className,
      )}
      style={{
        color,
        backgroundColor,
        borderColor: `color-mix(in srgb, ${color} 25%, transparent)`,
      } as CSSProperties}
      aria-label={`${name} website (opens in a new tab)`}
    >
      <Image
        src={logoSrc}
        alt=""
        width={32}
        height={32}
        className="size-[0.82em] rounded-[0.22em]"
      />
      <span>{name}</span>
    </Link>
  );
}
