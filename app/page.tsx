import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-svh w-full items-center justify-center px-6 py-16">
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
              <Link className="underline decoration-1 underline-offset-4 hover:bg-[#D7E2E9]" href="/blogs">
                Blog
              </Link>
            </li>
            <li>
              <Link className="underline decoration-1 underline-offset-4 hover:bg-[#D7E2E9]" href="/experience">
                Experience
              </Link>
            </li>
            <li>
              <a
                className="underline decoration-1 underline-offset-4 hover:bg-[#D7E2E9]"
                href="https://calendar.app.google/4Vr8TfsNmLjUEPTc9"
                target="_blank"
                rel="noreferrer"
              >
                Talk to me
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
