import Image from "next/image";
import Link from "next/link";
import { cn } from "@/app/lib/utils";

interface CompanyLinkProps {
  name: string;
  href: string;
  logoSrc?: string;
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
        "inline-flex items-center rounded-full border px-4 py-2 gap-2 font-semibold leading-none tracking-normal transition-[filter] hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2",
        className,
      )}
      style={{
        color,
        backgroundColor,
        borderColor: `color-mix(in srgb, ${color} 25%, transparent)`,
      }}
      aria-label={`${name} website (opens in a new tab)`}
    >
      {logoSrc && (
        <Image
          src={logoSrc}
          alt=""
          width={32}
          height={32}
          className="size-9 rounded-sm"
        />
      )}
      <span>{name}</span>
    </Link>
  );
}
