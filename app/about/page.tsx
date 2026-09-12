import { WorkItem } from "../_components/about/WorkItem";
import { WorkItemList } from "../_components/about/WorkItemList";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl py-12 sm:py-20">
      <header className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          About Me
        </h1>
      </header>

      <div className="mx-auto mt-10 max-w-2xl space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
        <p>
          I&apos;m a full-stack software engineer. I prefer working on backend
          systems. But I most enjoy working at startups, and startups need
          generalists.
        </p>
        <p>
          I&apos;ve been primarily working with Python, TypeScript, and AWS, but
          have experience with Go and Java. Recently, I&apos;ve been doing lots of
          stuff with Kubernetes and Argo CD at Lyra.
        </p>
      </div>

      <section className="mx-auto mt-14 max-w-2xl">
        <h2 className="mb-6 text-2xl font-medium tracking-tight">
          Here&apos;s some of my experiences.
        </h2>

        <WorkItemList>
          <WorkItem
            company="Lyra"
            tagline="Governance for AI Agents @ CTGT"
            logoSrc="/logos/lyra.png"
            href="https://lyratechnologies.com.au/"
          />
          <WorkItem
            company="eesel"
            tagline="AI Agents for Customer Service"
            logoSrc="/logos/eesel.png"
            href="https://www.eesel.ai/"
          />
          <WorkItem
            company="University of Melbourne"
            tagline="Data pipelines for researchers"
            logoSrc="/logos/unimelb.svg"
            href="/blogs/unimelb"
          />
          <WorkItem
            company="Sincidium"
            tagline="AI Agents for Students & Universities"
            logoSrc="/logos/sincidium.png"
            href="https://fbe.unimelb.edu.au/newsroom/from-rivals-to-revolutionaries-the-evolution-of-sincidium"
          />
          <WorkItem
            company="Melbourne Space Program"
            tagline="Building a Robot Bartender :)"
            logoSrc="/logos/melbourne-space-program.png"
            href="https://www.melbournespace.com.au/"
          />
          <WorkItem
            company="KFC"
            tagline="Probably my most valuable work experience"
            logoSrc="/logos/kfc.svg"
            href="https://www.kfc.com.au/"
          />
        </WorkItemList>
      </section>

      <p className="mx-auto mt-14 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
        I&apos;m working on a project at the moment. I don&apos;t want to put any
        of my other projects here just yet, but I&apos;m working on something I
        truly like that&apos;ll hopefully earn its place here.
      </p>
    </main>
  );
}
