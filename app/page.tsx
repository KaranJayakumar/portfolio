import Link from "next/link";
import { TextLink } from "./_components/ui/text-link";

export default function Home() {
  return (
    <section className="w-full max-w-5xl text-center">
      <h1 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
        Hi, I&apos;m Karan.
        <span className="mt-2 block text-gray-600">
          I&apos;m a software engineer at Lyra. I used to work at eesel.
        </span>
      </h1>

      <p className="mt-10 text-2xl font-medium tracking-tight sm:text-3xl">
        You&apos;re probably looking for one of these.
      </p>

      <nav className="mt-8" aria-label="Main links">
        <ul className="flex flex-col items-center gap-3 text-lg sm:text-xl">
          <li>
            <TextLink link="/blogs" ctaText="Blog"/>
          </li>
          <li>
            <TextLink link="/experience" ctaText="Experience"/>
          </li>
          <li>
            <TextLink link="https://calendar.app.google/4Vr8TfsNmLjUEPTc9" ctaText="Talk to Me"/>
          </li>
        </ul>
      </nav>
    </section>
  );
}
