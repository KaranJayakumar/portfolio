import Image from "next/image";
import Link from "next/link";

interface WorkItemProps {
  name: string;
  tagline: string;
  logoSrc: string;
  href?: string;
}

export function WorkItem({
  name,
  tagline,
  logoSrc,
  href,
}: WorkItemProps) {
  const content = (
    <>
      <span className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5">
        <Image
          src={logoSrc}
          alt=""
          width={48}
          height={48}
          className="size-full object-contain"
        />
      </span>
      <span className="min-w-0 text-left">
        <span className="block font-medium text-gray-950">{name}</span>
        <span className="mt-0.5 block text-sm leading-5 text-gray-500">
          {tagline}
        </span>
      </span>
    </>
  );

  const className = "flex w-full items-center gap-4 rounded-full bg-gray-50 px-5 py-3.5 transition-colors hover:bg-[#EDF2F5]";

  return href ? (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={className}
    >
      {content}
    </Link>
  ) : (
    <div className={className}>{content}</div>
  );
}
