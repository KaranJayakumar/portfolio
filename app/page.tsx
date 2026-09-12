import { CompanyLink } from "./_components/ui/company-link";
import { TextLink } from "./_components/ui/text-link";

export default function Home() {
  return (
    <section className="w-full max-w-5xl text-center">
      <h1 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
        Hi, I&apos;m Karan.
        <span className="mt-3 block text-gray-600">
          I&apos;m a software engineer at{" "}
          <CompanyLink
            name="Lyra"
            href="https://lyratechnologies.com.au/"
            logoSrc="/logos/lyra.png"
            color="#5156F7"
            backgroundColor="#F0EFFF"
            className="text-[0.72em]"
          />.
          <span className="block sm:inline"> I used to work at </span>
          <CompanyLink
            name="eesel"
            href="https://www.eesel.ai/"
            logoSrc="/logos/eesel.png"
            color="#287DBD"
            backgroundColor="#EFF7FC"
            className="text-[0.72em]"
          />.
        </span>
      </h1>

      <p className="mt-10 text-2xl font-medium tracking-tight sm:text-3xl">
        You&apos;re probably looking for one of these.
      </p>

      <nav className="mt-8" aria-label="Main links">
        <ul className="flex flex-col items-center gap-3 text-lg sm:text-xl">
          <li>
            <TextLink href="/blogs">Blog</TextLink>
          </li>
          <li>
            <TextLink href="/experience">Experience</TextLink>
          </li>
          <li>
            <TextLink href="https://calendar.app.google/4Vr8TfsNmLjUEPTc9">
              Talk to Me
            </TextLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}
